// page/userHome/pages/favorites/favorites.js
import AOPage from '../../../common/AOPage'


AOPage({
  onShareAppMessage() {
    return {
      title: '我的收藏',
      path: 'page/userHome/pages/favorites/favorites'
    }
  },
  data: {
    selected: 0,
    lst_favorites_tab_name: ['医院', '医生'],
    lst_favorites_hospital_info:[
      {
        hospital_name:'医院A',
        hospital_distance:'x',
        hospital_tag:'疫苗；普通外科'
      },
      {
        hospital_name:'医院B',
        hospital_distance:'y',
        hospital_tag:'24小时急诊；中兽医；牙科；狗证'
      },
     {
      hospital_name:'医院C',
      hospital_distance:'z',
      hospital_tag:'狗证'
     }
 ],
 lst_favorites_vet_info:[
   {
     vet_name:'医生A',
     vet_workplace:'医院A',
     vet_expertise:'肾内科'
   },
   {
    vet_name:'医生B',
    vet_workplace:'医院B',
    vet_expertise:'心脏科'
   },
   {
    vet_name:'医生C',
    vet_workplace:'医院C',
    vet_expertise:'牙科'
   }
 ],
 navigator_url_hospital:'../../../discover/hosdetail/hosdetail',
 navigator_url_vet:'../../../discover/vetdetail/vetdetail',
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