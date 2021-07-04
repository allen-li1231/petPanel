// page/userHome/pages/pets/petedit/petname/petname.js
Page({
  onShareAppMessage() {
    return {
      title: '宠物名字',
      path: 'page/userHome/pages/pets/petedit/petname/petname'
    }
  },


  /**
   * 页面的初始数据
   */
  data: {
    focus: false,
    pet_name: ''
  },

  editName: function (e) {
    this.setData({
      pet_name: e.detail.value
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
      pet_name: this.data.pet_name
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