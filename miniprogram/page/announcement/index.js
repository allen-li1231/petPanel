// page/announcement/index.js
import CustomPage from '../userHome/base/CustomPage'

CustomPage({
  onShareAppMessage() {
    return {
      title: '关于我们',
      path: 'page/announcement/index'
    }
  },
  data: {
    selected: 0,
    list: ['团队声明', '意见及反馈'],
    focus: false,
    inputValue: ''
  },
  //tab框
  selected: function (e) {
    let that = this
    //console.log(e)
    let index = e.currentTarget.dataset.index
    //console.log("index",index)
    if (index == 0) {
      that.setData({
        selected: 0
      })
    } else {
      that.setData({
        selected: 1
      })
    } 
  }
})