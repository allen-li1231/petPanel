// page/userHome/pages/profile/gender/gender.js
import CustomPage from '../../../base/CustomPage'

CustomPage({
  onShareAppMessage() {
    return {
      title: '性别',
      path: 'page/userHome/pages/profile/gender/gender'
    }
  },

  /**
   * 页面的初始数据
   */
  data: {
    lst_user_gender_condition: [
    {user_gender_condition: '男', value: '0', checked: true},
    {user_gender_condition: '女', value: '1'}]

  },
  userGenderChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);

    var lst_user_gender_condition = this.data.lst_user_gender_condition;
    for (var i = 0, len = lst_user_gender_condition.length; i < len; ++i) {
      lst_user_gender_condition[i].checked = lst_user_gender_condition[i].value == e.detail.value;
    }

    this.setData({
      lst_user_gender_condition: lst_user_gender_condition,
        [`formData.radio`]: e.detail.value
    });
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