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
    current: 'vaccination',
    current_scroll: 'vaccination',
    lst_tab_hospital:[
      {
        key:'vaccination',
        title:'疫苗',
      },
      {
        key:'sterilization',
        title:'绝育',
      },
      {
        key:'physical-examination',
        title:'体检',
      },
      {
        key:'general-clinic',
        title:'看病',
      },
      {
        key:'dog-license',
        title:'狗证',
      },
      {
        key:'cosmetology',
        title:'美容',
      },
    ],
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
  handleChangeScroll ({ detail }) {
    this.setData({
        current_scroll: detail.key
    });
},
  

  searchRes: function(context){
    console.log(context)
    wx.cloud.callFunction({
      name: "searchAction",
      data: {
        name: "discover",
        category: this.data.current_scroll,
        context: context.detail
      },
      success: (res) => {
        console.log("searchAction returns", res);
        ans = res
      },
      fail: err => {
        console.error(err)
      },
    })

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