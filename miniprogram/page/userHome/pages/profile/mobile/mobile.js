// page/userHome/pages/profile/mobile/mobile.js
import CustomPage from '../../../base/CustomPage'

CustomPage({    
    onShareAppMessage() {
        return {
          title: '手机号',
          path: 'page/userHome/pages/profile/mobile/mobile'
        }
      },

  /**
   * 页面的初始数据
   */
  data: {
        countryCodes: ["+86", "+80", "+84", "+87"],
        countryCodeIndex: 0,
  },
  formInputChange(e) {
    const {field} = e.currentTarget.dataset
    this.setData({
        [`formData.${field}`]: e.detail.value
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