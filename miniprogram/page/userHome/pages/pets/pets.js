// page/userHome/pages/pets/pets.js
import AOPage from '../../../API/AOPage'


AOPage({
  onShareAppMessage() {
      return {
        title: '宠物信息',
        path: 'page/userHome/pages/pets/pets'
      }
    },
  data: {
    lst_pets_profile:[],

  },
  onLoad: function(){
    this.setData({
        slideButtons: [{
          type: 'warn',
          text: '删除',
        }],
    });
  },
  onShow: async function(opts) {
    const that = this
    const app = getApp()
    
    wx.showToast({
      title: '请稍等...',
      icon: "loading",
      mask: true,
      duration: 30000
  })
    wx.cloud.callFunction({
      name: 'fetchAction',
      data: {
        name: "registeredPet",
        openid: app.globalData.openid
      },
      success: res => {
        that.setData({
          lst_pets_profile: res.result
        })
        wx.hideToast()
      }
    })
  },

  slideButtonTap(e) {

    },
})