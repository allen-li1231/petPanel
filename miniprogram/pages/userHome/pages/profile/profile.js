// page/userHome/pages/profile/profile.js
import AOPage from '../../../common/AOPage'


AOPage({
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
    editAble: 'none',
    bgcolor: 'royalblue',
    buttonName: '编辑',
    user_nickname:'未填写',
    user_birth_date:'未填写',
    user_gender:'未填写',
    user_mobile_number:'未填写（非必填项）',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var genderMap = {
      1: "男",
      2: "女"
    }
    console.log("option", options);

    const app = getApp();
    let id = app.globalData.openid;
    wx.cloud.callFunction({
      name: 'getUserInfo',
      data: {
        name: 'getUserInfo',
        id: id
      },
      success: res => {
        this.setData({
          user_info: res.result,
          user_nickname:res.result[0].userInfo.nickName? res.result[0].userInfo.nickName:'未填写',
          user_mobile_number:res.result[0].userInfo.mobileNumber? res.result[0].userInfo.mobileNumber:'未填写',
          user_birth_date:res.result[0].userInfo.birthDate? res.result[0].userInfo.birthDate:'未填写',
          user_gender:res.result[0].userInfo.gender? genderMap[res.result[0].userInfo.gender]:'未填写',
        })
      },
      fail: err => {
        console.error(err)
      },
    })
  },

  editButton: function(){
    if (this.data.editAble == true){
      this.setData({
        editAble: 'none',
        bgcolor: 'royalblue',
        buttonName: '编辑'
      })
    }else{
      this.setData({
        editAble: true,
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