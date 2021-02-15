// page/userHome/index.js
const app = getApp()
Page({
  onShareAppMessage() {
    return {
      title: '我的信息',
      path: 'page/userHome/index'
    }
  },

  /**
   * 页面的初始数据
   */
  data: {
    List: [
        {
          name: '宠物信息',
          page: 'pets'
        },
        {
          name: '个人资料',
          page: 'profile'
        },
        {
          name: '我的收藏',
          page: 'favorites'
        },
    ],
    theme: 'light',
    appGlobal: app.globalData,
  },

  onLoad() {
    this.setData({
      theme: wx.getSystemInfoSync().theme || 'light'
    })

    if (wx.onThemeChange) {
      wx.onThemeChange(({ theme }) => {
        this.setData({ theme })
      })
    }
    if (!this.data.appGlobal.canIUse) {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          this.setData({
            'appGlobal.userInfo': res.userInfo,
            'appGlobal.hasUserInfo': true
          })
        }
      })
    }
  },

  getUserInfo(e) {
    console.log(e)
    this.setData({
      'appGlobal.userInfo': e.detail.userInfo,
      'appGlobal.hasUserInfo': true
    })

    //TODO: update login record and fill blank variables matching timestamp and openid
  },
  
})