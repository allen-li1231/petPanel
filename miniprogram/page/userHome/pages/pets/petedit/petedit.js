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
    formModified: false,
    pet_name:'未填写',
    pet_birth:'未填写',
    pet_gender:'未填写',
    pet_species:'未填写',
    pet_sterilize_situation:'未填写',
    pet_recent_vaccinate_date:'未填写',
    id : '0'
  },
  genderMap: {
    "male": "男",
    "female": "女"
},
  speciesMap: {
    "cat": "猫",
    "dog": "狗"
  },
  sterilizeMap: {
    "unsterilized": "暂未绝育", 
    "pregnanted": "暂未绝育", 
    "sterilized": "已绝育"
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (pet_profile) {
    this.setData({
      id: pet_profile.id,
      pet_name: pet_profile.petName? pet_profile.petName: '未填写',
      pet_birth: pet_profile.petBirth? pet_profile.petBirth: '未填写',
      pet_gender: pet_profile.petGender? this.genderMap[pet_profile.petGender]: '未填写',
      pet_species: pet_profile.petSpecies? this.speciesMap[pet_profile.petSpecies]: '未填写',
      pet_sterilize_situation: pet_profile.petSterilize? this.sterilizeMap[pet_profile.petSterilize]: '未填写',
      pet_recent_vaccinate_date: pet_profile.petVaccinateDate? pet_profile.petVaccinateDate: '未填写',
    })
    
  },

  saveButton: function(){
    if (this.data.formModified === true){
      //TODO: modification should sync to cloud
    }
    else {
      this.setData({
        saveButtonVisible: false,
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