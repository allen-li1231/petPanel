// page/userHome/pages/pets/petedit/gender/gender.js
import CustomPage from '../../../../base/CustomPage'

CustomPage({
  onShareAppMessage() {
    return {
      title: '宠物性别',
      path: 'page/userHome/pages/pets/petedit/gender/gender'
    }
  },

  /**
   * 页面的初始数据
   */
  data: {
    lst_pet_gender_condition: [
    {pet_gender_condition: '男', value: '0', checked: true},
    {pet_gender_condition: '女', value: '1'}]

  },
  petGenderChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);

    var lst_pet_gender_condition = this.data.lst_pet_gender_condition;
    for (var i = 0, len = lst_pet_gender_condition.length; i < len; ++i) {
      lst_pet_gender_condition[i].checked = lst_pet_gender_condition[i].value == e.detail.value;
    }

    this.setData({
      lst_pet_gender_condition: lst_pet_gender_condition,
        [`formData.radio`]: e.detail.value
    });
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("gender", options.gender)
    var lst_pet_gender_condition = this.data.lst_pet_gender_condition;
    if (options.gender == "male"){
      lst_pet_gender_condition[0].checked = true
      lst_pet_gender_condition[1].checked = false
    }else if (options.gender == "female"){
      lst_pet_gender_condition[0].checked = false
      lst_pet_gender_condition[1].checked = true
    }
    this.setData({
      lst_pet_gender_condition: lst_pet_gender_condition,
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
    let pages = getCurrentPages(); 
    let prevPage = pages[pages.length - 2]; 
    for (var i = 0, len = this.data.lst_pet_gender_condition.length; i < len; ++i) {
      if(this.data.lst_pet_gender_condition[i].checked){
        prevPage.setData({  
          pet_gender: this.data.lst_pet_gender_condition[i].pet_gender_condition
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