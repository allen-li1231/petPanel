// page/discover/index.js
import CustomPage from '../userHome/base/CustomPage'
const colorLight = 'rgba(0, 0, 0, .9)'

CustomPage({
  onShareAppMessage() {
    return {
      title: '附近医院',
      path: 'page/discover/index'
    }
  },
  data: {
    selected: 0,
    lst_hospital_info:[
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
 navHos:'hosdetail/hosdetail',
  },

  searchRes:  function(hospitalinfo){
    let searched = [];
    for (let i = 0; i < hospitalinfo.length; i++) {
      let info = {
        "hospital_name": hospitalinfo[i].name,
        "hospital_distance": 'x',
        "hospital_tag":  hospitalinfo[i].distance
      }
      searched.push(info)
    }
    this.setData(
      {
        selected: 0,
        'lst_hospital_info': searched
      }
    )
  }
})