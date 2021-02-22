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
    hospitalList:[
      {
        name:'医院A',
        distance:'距离x公里',
        tag:'疫苗；普通外科'
      },
      {
        name:'医院B',
        distance:'距离y公里',
        tag:'24小时急诊；中兽医；牙科；狗证'
      },
     {
      name:'医院C',
      distance:'距离z公里',
      tag:'狗证'
     }
 ],
  },
})