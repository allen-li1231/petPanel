const config = require('./config')
const themeListeners = []
global.isDemo = true


App({
  
  globalData: {
    theme: wx.getSystemInfoSync().theme,
    accessTime: null,
    loginid: null,
    openid: null,
    appid: null,
    userInfo: {},
    hasUserInfo: false,
    hasLoggedIn: false,

  },

  onLaunch(opts, data) {
    const that = this;
    const canIUseSetBackgroundFetchToken = wx.canIUse('setBackgroundFetchToken')
    if (canIUseSetBackgroundFetchToken) {
      wx.setBackgroundFetchToken({
        token: 'getBackgroundFetchToken',
      })
    }
    if (wx.getBackgroundFetchData) {
      wx.getBackgroundFetchData({
        fetchType: 'pre',
        success(res) {
          that.globalData.backgroundFetchData = res;
          console.log('读取预拉取数据成功')
        },
        fail() {
          console.log('读取预拉取数据失败')
          wx.showToast({
            title: '无缓存数据',
            icon: 'none'
          })
        },
        complete() {
          console.log('结束读取')
        }
      })
    }
    console.log('App Launch', opts)

    if (data && data.path) {
      wx.navigateTo({
        url: data.path,
      })
    }

    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        env: config.envId,
        traceUser: true,
      })

      // 获取userInfo
      wx.getSetting({
        success: function(res) {
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称
            wx.getUserInfo({
              success: function(res) {
                that.globalData.userInfo = res.userInfo
                that.globalData.hasUserInfo = true
                // console.log("getUserInfo returns:", res.userInfo)
              },
            })
          }
        },
        fail: function(err) {
          console.error("getSetting returns:", err)
          wx.showToast({
            title: '请检查网络',
            icon: 'none'
          })
        },
        complete: () => that.getWXContext(that.loginAction)
      })
    }
  },

  
  onShow(opts) {
    console.log('App Show', opts)
    // console.log(wx.getSystemInfoSync())
  },
  onHide() {
    console.log('App Hide')
  },
  onThemeChange({ theme }) {
    this.globalData.theme = theme
    themeListeners.forEach((listener) => {
        listener(theme)
    })
  },
  watchThemeChange(listener) {
      if (themeListeners.indexOf(listener) < 0) {
          themeListeners.push(listener)
      }
  },
  unWatchThemeChange(listener) {
      const index = themeListeners.indexOf(listener)
      if (index > -1) {
          themeListeners.splice(index, 1)
      }
  },


  // 通过云函数获取用户 openid，支持回调或 Promise
  getWXContext(callback) {
    wx.cloud.callFunction({
      name: 'wxContext',
      data: {},
      success: res => {
        // console.log("getWXContext returns:", res);
        this.globalData.openid = res.result.openid;
        this.globalData.appid = res.result.appid;
      },
      fail: err => { console.error("Unable to get wxContext in time", err); },
      complete: () => {if (callback) callback()}
    })
},

  loginAction(callback) {
    wx.cloud.callFunction({
      name: "loginAction",
      data: {
        loginid: this.globalData.loginid,
        openid: this.globalData.openid,
        userInfo: this.globalData.userInfo,
      },
      success: res => {
        // console.log("loginAction returns:", res)
        this.globalData.accessTime = res.result.createTime
        this.globalData.loginid = res.result.loginid
        this.globalData.hasLoggedIn = true
        console.log("Login success on", this.globalData.accessTime)
      },
      fail: err => {
        console.error(err)
      },
      complete: () => {if (callback) callback()}
    })
  }
})
