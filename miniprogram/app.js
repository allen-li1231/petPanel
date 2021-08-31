const config = require('./config')
const themeListeners = []


App({
  
  globalData: {
    theme: wx.getSystemInfoSync().theme,
    accessTime: null,
    loginid: null,
    openid: null,
    unionid: null,
    appid: null,
    userInfo: {},
    userFavourite: {},
    userPet: {},
    hasUserInfo: false,
    hasLoggedIn: false,
    lastLoginid: null,
    hasPetInfo: false
  },

  onLaunch(opts, data) {
    wx.hideTabBar({
      animation: false,
    })

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

      this.globalData.config = config

      // 获取loginid
      wx.getStorage({
        key: 'lastLoginid',
        success: res => {
          this.globalData.lastLoginid = res.data
        },
        fail: () => {
          console.log('读取本地loginid失败')
        },
        complete: () => {
          this.getWXContext(() => {
            this.loginAction(wx.showTabBar)
          })
        }
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
      name: 'getWxContext',
      data: {},
      success: res => {
        // console.log("getWXContext returns:", res);
        this.globalData.openid = res.result.openid
        this.globalData.appid = res.result.appid
        this.globalData.unionid = res.result.unionid
      },
      fail: err => {
        console.error("Unable to get wxContext in time", err)
      },
      complete: () => {if (callback) callback()}
    })
},

  loginAction(callback) {
    console.log("loginAction pushes data:", {
      loginid: this.globalData.lastLoginid,
      openid: this.globalData.openid,
      unionid: this.globalData.unionid,
      userInfo: this.globalData.userInfo,
    })
    wx.cloud.callFunction({
      name: "loginAction",
      data: {
        loginid: this.globalData.lastLoginid,
        openid: this.globalData.openid,
        unionid: this.globalData.unionid,
        userInfo: this.globalData.userInfo,
      },
      success: res => {
        console.log("loginAction returns:", res)
        this.globalData.accessTime = res.result.createTime
        this.globalData.loginid = res.result.loginid
        this.globalData.userFavourite = res.result.favourites
        this.globalData.userPet = res.result.pets
        this.globalData.hasLoggedIn = true
        if (res.result.userInfo && Object.keys(res.result.userInfo).length !== 0) {
          this.globalData.userInfo = res.result.userInfo
          this.globalData.hasUserInfo = true
        }
        wx.setStorage({
          key: 'lastLoginid',
          data: res.result.loginid,
          success:function(){
              console.log("缓存loginid成功！")     
          },fail:function(){
              console.log("缓存loginid失败！")     
          }
        })
        console.log("Login success on", this.globalData.accessTime)
      },
      fail: err => {
        console.error(err)
      },
      complete: () => {
        if (callback) callback()
      }
    })
  }
})
