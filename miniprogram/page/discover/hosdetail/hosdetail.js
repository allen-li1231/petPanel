// page/discover/hosdetail/hosdetail.js
import AOPage from '../../API/AOPage'

AOPage({
  onShareAppMessage() {
    return {
      title: '医院详情',
      path: 'page/discover/hosdetail/hosdetail',
    }
  },
  /**
   * 页面的初始数据
   */
  data: {
    hospital_message:'温馨提示：防火防盗防诈骗',
    hospital_name:'喜乐缘宠物医院',
    hospital_address:'川沙镇妙镜路656号',
    hospital_tele_number:'021-58982400',
    hospital_license:'全范围',
    hospital_license_expired_date:'2021/10/21',
    lst_vet_info:[{
      vet_name:'王医生',
      vet_photo:'../../API/components/image/avatar-default-icon.png',
      vet_navigator_link:'../vetdetail/vetdetail'
    },
    {
      vet_name:'李医生',
      vet_photo:'../../API/components/image/avatar-default-icon.png',
      vet_navigator_link:'../vetdetail/vetdetail',
    },
    {
      vet_name:'刘医生',
      vet_photo:'../../API/components/image/avatar-default-icon.png',
      vet_navigator_link:'../vetdetail/vetdetail',
    },
    {
      vet_name:'陈医生',
      vet_photo:'../../API/components/image/avatar-default-icon.png',
      vet_navigator_link:'../vetdetail/vetdetail',
    },
    {
      vet_name:'贾医生',
      vet_photo:'../../API/components/image/avatar-default-icon.png',
      vet_navigator_link:'../vetdetail/vetdetail',
    }
  ],
  lst_device_info:[{
    device_id:'name1',
    device_name:'呼吸机',
    device_description:'适用于抢救重症病患',
  },
  {
    device_id:'name2',
    device_name:'血透机',
    device_description:'适用于严重肾病患者',
  },
  {
    device_id:'name3',
    device_name:'洗牙器械',
    device_description:'满足洗牙需求',
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