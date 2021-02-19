const config = require('./config')
const themeListeners = []
global.isDemo = true
App({
  
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
      this.getWXContext()
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

  globalData: {
    theme: wx.getSystemInfoSync().theme,
    loginid: null,
    openid: null,
    appid: null,
    userInfo: {},
    hasUserInfo: false,
    hasLoggedIn: false,
    accessTime: 0,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },

  // 通过云函数获取用户 openid，支持回调或 Promise
  getWXContext() {
    wx.cloud.callFunction({
      name: 'wxContext',
      data: {},
      success: res => {
        console.log("getWXContext returned: ", res);
        this.globalData.openid = res.result.openid;
        this.globalData.appid = res.result.appid;
      },
      fail: err => { console.error("Unable to get wxContext in time", err); },
      complete: () => this.loginAction()
    })
},

  loginAction() {
    wx.cloud.callFunction({
      name: "loginAction",
      data: {
        loginid: this.globalData.loginid,
        openid: this.globalData.openid,
        userInfo: this.globalData.userInfo
      },
      success: res => {
        console.log(res)
        this.globalData.accessTime = res.result.createTime
        this.globalData.loginid = res.result.loginid
        this.globalData.userInfo = res.result.userInfo
        this.globalData.hasLoggedIn = true
        console.log("Login successful on", this.globalData.accessTime)
        
      },
      fail: err => {
        console.error(err)
      },
    })
  }
})
