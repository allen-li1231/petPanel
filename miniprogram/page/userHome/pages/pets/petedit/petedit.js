// page/userHome/pages/pets/petedit/petedit.js
Page({
  onShareAppMessage() {
    return {
      title: '编辑宠物信息',
      path: 'page/userHome/pages/pets/petedit/petedit'
    }
  },
  /**
   * 页面的初始数据
   */
  data: {
    editAble: 'none',
    bgcolor: 'royalblue',
    buttonName: '编辑',
    pet_name:'未填写',
    pet_birth:'未填写',
    pet_gender:'未填写',
    pet_species:'未填写',
    pet_sterilize_situation:'未填写',
    pet_recent_vaccinate_date:'未填写',
    id : '0'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({id: options.id})
    console.log("new id", this.data["id"])
  },

  editButton: function(){
    if (this.data.editAble == true){
      this.setData({
        editAble: 'none',
        bgcolor: 'royalblue',
        buttonName: '编辑'
      })
    }else{
      this.setData({
        editAble: true,
        bgcolor: 'green',
        buttonName: '保存'
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (options) {
    // const that = this
    let id = this.data["id"];
    if (id != '0'){
      wx.cloud.callFunction({
        name: 'getPetInfo',
        data: {
          name: 'getPetInfo',
          id: id
        },
        success: res => {
          console.log("res", res.result[0].petName)
          var genderMap = {
            "male": "男",
            "female": "女"
        }
        var speciesMap = {
          "cat": "猫",
          "dog": "狗"
        }
        var sterilizeMap = {
          "unsterilized": "暂未绝育", 
          "pregnanted": "暂未绝育", 
          "sterilized": "已绝育"
        }
          this.setData({
            lst_pets_profile: res.result,
            pet_name:res.result[0].petName? res.result[0].petName:'未填写',
            pet_birth:res.result[0].petBirth? res.result[0].petBirth:'未填写',
            pet_gender:res.result[0].petGender? genderMap[res.result[0].petGender]:'未填写',
            pet_species:res.result[0].petSpecies? speciesMap[res.result[0].petSpecies]:'未填写',
            pet_sterilize_situation:res.result[0].petSterilize? sterilizeMap[res.result[0].petSterilize]:'未填写',
            pet_recent_vaccinate_date:res.result[0].petVaccinateDate? res.result[0].petVaccinateDate:'未填写',
          })
          console.log("new data", this.data)
          this.setData({"id":'0'})
        },
        fail: err => {
          console.error(err)
        },
      })
    }
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})