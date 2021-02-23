// page/userHome/pages/favorites/favorites.js
import CustomPage from '../../base/CustomPage'
const colorLight = 'rgba(0, 0, 0, .9)'

CustomPage({
  onShareAppMessage() {
    return {
      title: '我的收藏',
      path: 'page/userHome/pages/favorites/favorites'
    }
  },
  data: {
    selected: 0,
    list: ['医院', '医生'],
    hospitalList:[
      {
        name:'医院A',
        distance:'x',
        tag:'疫苗；普通外科'
      },
      {
        name:'医院B',
        distance:'y',
        tag:'24小时急诊；中兽医；牙科；狗证'
      },
     {
      name:'医院C',
      distance:'z',
      tag:'狗证'
     }
 ],
 vetList:[
   {
     name:'医生A',
     hospital:'医院A',
     expertise:'肾内科'
   },
   {
    name:'医生B',
    hospital:'医院B',
    expertise:'心脏科'
   },
   {
    name:'医生C',
    hospital:'医院C',
    expertise:'牙科'
   }
 ],
 navHos:'../../../discover/hosdetail/hosdetail',
 navVet:'../../../discover/hosdetail/vetdetail/vetdetail',
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