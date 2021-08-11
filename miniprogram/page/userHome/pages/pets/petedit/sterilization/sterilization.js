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
    lst_pet_sterilize_condition: [
    {pet_sterilize_condition: '已绝育', value: '0', checked: true},
    {pet_sterilize_condition: '未绝育', value: '1'},
    {pet_sterilize_condition: '怀孕中', value:'2'}]

  },
  petSterilizeChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);

    var lst_pet_sterilize_condition = this.data.lst_pet_sterilize_condition;
    for (var i = 0, len = lst_pet_sterilize_condition.length; i < len; ++i) {
      lst_pet_sterilize_condition[i].checked = lst_pet_sterilize_condition[i].value == e.detail.value;
    }

    this.setData({
      lst_pet_sterilize_condition: lst_pet_sterilize_condition,
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
    let pages = getCurrentPages(); 
    let prevPage = pages[pages.length - 2]; 
    for (var i = 0, len = this.data.lst_pet_sterilize_condition.length; i < len; ++i) {
      if(this.data.lst_pet_sterilize_condition[i].checked){
        prevPage.setData({  
          pet_sterilize_situation: this.data.lst_pet_sterilize_condition[i].pet_sterilize_condition
        });
        break;
      }
    }
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