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
    pet_name:'未填写',
    pet_birth:'未填写',
    pet_gender:'未填写',
    pet_species:'未填写',
    pet_sterilize_situation:'未填写',
    pet_recent_vaccinate_date:'未填写',
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