// page/discover/vetdetail/vetdetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    vet_message:'小心假文凭',
    speed:'1000',
    vet_photo:'../../API/components/image/avatar-default-icon.png',
    vet_name:'王医生',
    hospital_name:'喜乐缘宠物医院',
    vet_certificate_photo:'../../API/components/image/certificate.jpeg',
    vet_work_year:'6年',
    vet_expertise:'软组织外科，传染病',
    lst_vet_case_info:[{
      vet_case_id:'name1',
      vet_case_title:'肿瘤切除',
      vet_case_content:'比格妞妞乳腺肿瘤后，肿瘤破溃，手术切除，十天拆线，恢复正常',      
    },
    {
      vet_case_id:'name2',
      vet_case_title:'子宫蓄脓',
      vet_case_content:'小宝最近发现阴道口流出黄褐色物质，超声可见腹腔内大量液性暗区，手术摘除后恢复良好',
    }]
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