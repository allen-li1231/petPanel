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
    appGlobal: null,
    canIUseGetUserInfo: true,
  },

  onLoad() {
    //TODO: client must wait until loginAction finish
    this.setData({
      theme: wx.getSystemInfoSync().theme || 'light',
      appGlobal: app.globalData,
    })

    if (wx.onThemeChange) {
      wx.onThemeChange(({ theme }) => {
        this.setData({ theme })
      })
    }
  },

  getUserInfo() {
    wx.getUserProfile({
      desc: "获取和使用您的头像和基本信息",
      success: (res) => {
        console.log("getUserProfile returns", res)
        this.setData({
          'appGlobal.userInfo': res.userInfo,
          'appGlobal.hasUserInfo': true,
        })
        
        app.globalData.userInfo = res.userInfo
        app.globalData.hasUserInfo = true

        wx.cloud.callFunction({
          name: "loginAction",
          data: {
            loginid: app.globalData.loginid,
            openid: app.globalData.openid,
            userInfo: app.globalData.userInfo,
          },
          success: (res) => {
            console.log("userInfo update returns", res)
          },
          fail: err => {
            console.error(err)
          },
        })
      }
    })
  },
  
})