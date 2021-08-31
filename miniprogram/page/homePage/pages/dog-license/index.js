// page/homePage/pages/dog-license/index.js
import AOPage from '../../../API/AOPage'
const colorLight = 'rgba(0, 0, 0, .9)'

AOPage({
  onShareAppMessage() {
    return {
      title: '知萌-办狗证',
      path: 'page/homePage/pages/dog-license/index'
    }
  },
  data: {
    selected: 0,
    lst_hospital_info:[
      {
        hospital_name:'医院A',
        hospital_distance:'x',
        hospital_tag:'美容；普通外科；狗证'
      },
      {
        hospital_name:'医院B',
        hospital_distance:'y',
        hospital_tag:'24小时急诊；狗证；中兽医；牙科'
      },
     {
      hospital_name:'医院C',
      hospital_distance:'z',
      hospital_tag:'美容；狗证'
     },
    ],
 navHos:'hosdetail/hosdetail',
  }
,
onLoad:  function(option) {
  var lst_hospital_info = [
    {
      hospital_name:'医院A',
      hospital_distance:'x',
      hospital_tag:'美容；普通外科；狗证'
    },
    {
      hospital_name:'医院B',
      hospital_distance:'y',
      hospital_tag:'24小时急诊；狗证；中兽医；牙科'
    },
   {
    hospital_name:'医院C',
    hospital_distance:'z',
    hospital_tag:'美容；狗证'
   },
  ]
  var value = '狗证';
  var that = this;
       
   // 将标题已关键字拆开成数组    
   for (let i = 0; i < lst_hospital_info.length; i++) {
      lst_hospital_info[i].hospital_tag = that.hilight_word(value, lst_hospital_info[i].hospital_tag);
      this.setData(
        {
          'lst_hospital_info': lst_hospital_info
        }
      )
    }
   
  },

   // 根据搜索字分割字符
  hilight_word: function (key, word) {    
    let idx = word.indexOf(key), t = [];
 
    if (idx > -1) {
      if (idx == 0) {
        t =this.hilight_word(key, word.substr(key.length));
        t.unshift({ key: true, str: key });
        return t;
      }
 
      if (idx > 0) {
        t =this.hilight_word(key, word.substr(idx));
        t.unshift({ key: false, str: word.substring(0, idx) });
        return t;
      }
    }
    return [{ key: false, str: word }];
  }
})
