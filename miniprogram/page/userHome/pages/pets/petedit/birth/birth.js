// page/userHome/pages/pets/petedit/birth/birth.js
Page({
  onShareAppMessage() {
    return {
      title: '宠物生日',
      path: 'page/userHome/pages/pets/petedit/birth/birth'
    }
  },

  /**
   * 页面的初始数据
   */
  data: {
    showTopTips: false,
    pet_birth_date: "2016-09-01",
  },
  petBirthDateChange: function (e) {
    this.setData({
      pet_birth_date: e.detail.value,
        [`formData.pet_birth_date`]: e.detail.value
    })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      pet_birth_date: options.birth
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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
    let pages = getCurrentPages(); 
    let prevPage = pages[pages.length - 2]; 
    prevPage.setData({  
      pet_birth: this.data.pet_birth_date
    })
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