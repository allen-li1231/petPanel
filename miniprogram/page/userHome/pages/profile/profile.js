// page/userHome/pages/profile/profile.js
Page({
  onShareAppMessage() {
    return {
      title: '个人资料',
      path: 'page/userHome/pages/profile/profile'
    }
  },
  /**
   * 页面的初始数据
   */
  data: {
    user_nickname:'未填写',
    user_birth_date:'未填写',
    user_gender:'未填写',
    user_mobile_number:'未填写（非必填项）',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("option", options);

    const app = getApp();
    let id = app.globalData.openid;
    wx.cloud.callFunction({
      name: 'getUserInfo',
      data: {
        id: id
      },
      success: res => {
        that.setData({
          user_info: res.result,
          user_nickname:res.result.userInfo.nickName? res.result.userInfo.nickName:'未填写',
          user_mobile_number:res.result.userInfo.mobileNumber? res.result.userInfo.mobileNumber:'未填写',
          user_birth_date:res.result.userInfo.birthDate? res.result.userInfo.birthDate:'未填写',
          user_gender:res.result.userInfo.gender? res.result.userInfo.gender:'未填写',
        })
      },
      fail: err => {
        console.error(err)
      },
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