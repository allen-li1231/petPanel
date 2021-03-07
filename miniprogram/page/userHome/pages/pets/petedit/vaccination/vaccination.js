// page/userHome/pages/pets/petedit/vaccination/vaccination.js
Page({
  onShareAppMessage() {
    return {
      title: '上次疫苗时间',
      path: 'page/userHome/pages/pets/petedit/vaccination/vaccination'
    }
  },

  /**
   * 页面的初始数据
   */
  data: {
    showTopTips: false,
    pet_recent_vaccinate_date: "2020-09-01",
  },
  petVaccinateDateChange: function (e) {
    this.setData({
      pet_recent_vaccinate_date: e.detail.value,
        [`formData.pet_recent_vaccinate_date`]: e.detail.value
    })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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