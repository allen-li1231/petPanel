// page/discover/hosdetail/hosdetail.js
import CustomPage from '../../userHome/base/CustomPage'

CustomPage({
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
    msg:'温馨提示：防火防盗防诈骗',
    hosName:'喜乐缘宠物医院',
    hosAddress:'川沙镇妙镜路656号',
    hosTele:'021-58982400',
    hosLicense:'全范围',
    hosExpired:'2021/10/21',
    vetList:[{
      name:'王医生',
      vetImg:'../../API/components/image/avatar-default-icon.png',
      navLink:'../vetdetail/vetdetail'
    },
    {
      name:'李医生',
      vetImg:'../../API/components/image/avatar-default-icon.png',
      navLink:'../vetdetail/vetdetail',
    },
    {
      name:'刘医生',
      vetImg:'../../API/components/image/avatar-default-icon.png',
      navLink:'../vetdetail/vetdetail',
    },
    {
      name:'陈医生',
      vetImg:'../../API/components/image/avatar-default-icon.png',
      navLink:'../vetdetail/vetdetail',
    },
    {
      name:'贾医生',
      vetImg:'../../API/components/image/avatar-default-icon.png',
      navLink:'../vetdetail/vetdetail',
    }
  ],
  deviceList:[{
    id:'name1',
    name:'呼吸机',
    content:'适用于抢救重症病患',
  },
  {
    id:'name2',
    name:'血透机',
    content:'适用于严重肾病患者',
  },
  {
    id:'name3',
    name:'洗牙器械',
    content:'满足洗牙需求',
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