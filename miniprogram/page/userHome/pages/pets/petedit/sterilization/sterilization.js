// page/userHome/pages/pets/petedit/sterilization/sterilization.js
import CustomPage from '../../../../base/CustomPage'

CustomPage({
  onShareAppMessage() {
    return {
      title: '绝育情况',
      path: 'page/userHome/pages/pets/petedit/sterilization/sterilization'
    }
  },

  /**
   * 页面的初始数据
   */
  data: {
    radioItems: [
    {name: '已绝育', value: '0', checked: true},
    {name: '未绝育', value: '1'},
    {name: '怀孕中',value:'2'}]

  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);

    var radioItems = this.data.radioItems;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
        radioItems[i].checked = radioItems[i].value == e.detail.value;
    }

    this.setData({
        radioItems: radioItems,
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