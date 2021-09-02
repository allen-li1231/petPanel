// page/userHome/pages/pets/pets.js
import AOPage from '../../../common/AOPage'
const app = getApp()
const MAX_PET = app.globalData.config.max_pet


AOPage({
  onShareAppMessage() {
      return {
        title: '宠物信息',
        path: 'page/userHome/pages/pets/pets'
      }
    },
  data: {
    canCreatePetProfile: true,
    slideButtons: [{
      type: 'default',
      text: '编辑'
    },
    {
      type: 'warn',
      text: '删除'
    }],
  },
  onLoad: function(){
    wx.showToast({
      title: '请稍等...',
      icon: "loading",
      mask: true,
      duration: 30000
  })
  },
  onShow: async function(opts) {
    const that = this
    const app = getApp()
    wx.cloud.callFunction({
      name: 'fetchAction',
      data: {
        name: "registeredPet",
        openid: app.globalData.openid
      },
      success: res => {
        var lst_slide_buttons = []
        for (var i in res.result) {
          var profile = res.result[i]
          lst_slide_buttons.push({
            petName: profile.petName,
            slideButtons: [{
              type: 'default',
              text: '编辑',
              data: `petadd/petadd?id=${profile._id}&petName=${profile.petName}&petBirth=${profile.petBirth || ""}&petGender=${profile.petGender}&petSpecies=${profile.petSpecies}&petSterilize=${profile.petSterilize || ""}&petVaccineDate=${profile.petVaccineDate || ""}`,
            },
            {
              type: 'warn',
              text: '删除',
              data: profile._id
            }]
          })
        }
        that.setData({
          lst_slide_buttons: lst_slide_buttons,
          canCreatePetProfile: lst_slide_buttons.length < MAX_PET
        })
        wx.hideToast()
      }
    })
  },

  slideButtonTap(e) {
    console.log('slide button tap', e.detail)
    if (e.detail.index === 0) {
      wx.navigateTo({
        url: e.detail.data,
      })
  }
    else if (e.detail.index === 1) {
      wx.showToast({
        title: "请稍等...",
        duration: 30000
      })
      wx.cloud.callFunction({
        name: "modifyAction",
        data: {
          name: "deletePet",
          id: e.detail.data
        },
        success: res => {
          this.onShow()
        },
        fail: res => {
          console.error(res)
          wx.showToast({
            title: "删除失败",
            icon: " error",
            duration: 3000,
            success: () => {
              this.onShow()
            }
          })
        }
      })
    }
    },
})