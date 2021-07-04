// page/userHome/pages/pets/petedit/kind/kind.js
import CustomPage from '../../../../base/CustomPage'

CustomPage({
  onShareAppMessage() {
    return {
      title: '宠物种类',
      path: 'page/userHome/pages/pets/petedit/kind/kind'
    }
  },

  /**
   * 页面的初始数据
   */
  data: {
    lst_pet_species_condition: [
    {pet_species_condition: '猫', value: '0', checked: true},
    {pet_species_condition: '狗', value: '1'}]

  },
  petSpeciesChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);

    var lst_pet_species_condition = this.data.lst_pet_species_condition;
    for (var i = 0, len = lst_pet_species_condition.length; i < len; ++i) {
      lst_pet_species_condition[i].checked = lst_pet_species_condition[i].value == e.detail.value;
    }

    this.setData({
      lst_pet_species_condition: lst_pet_species_condition,
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
    for (var i = 0, len = this.data.lst_pet_species_condition.length; i < len; ++i) {
      if(this.data.lst_pet_species_condition[i].checked){
        prevPage.setData({  
          pet_species: this.data.lst_pet_species_condition[i].pet_species_condition
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