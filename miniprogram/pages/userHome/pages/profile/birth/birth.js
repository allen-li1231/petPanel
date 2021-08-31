// page/userHome/pages/profile/birth/birth.js
import AOPage from '../../../../common/AOPage'


AOPage({
  onShareAppMessage() {
    return {
      title: '生日',
      path: 'page/userHome/pages/profile/birth/birth'
    }
  },

  /**
   * 页面的初始数据
   */
  data: {
    showTopTips: false,
    user_birth_date: "2016-09-01",
  },
  userBirthDateChange: function (e) {
    this.setData({
      user_birth_date: e.detail.value,
        [`formData.user_birth_date`]: e.detail.value
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
    let pages = getCurrentPages(); 
    let prevPage = pages[pages.length - 2]; 
    prevPage.setData({  
      user_birth_date: this.data.user_birth_date
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