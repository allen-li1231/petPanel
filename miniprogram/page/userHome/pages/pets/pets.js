// page/userHome/pages/pets/pets.js
import CustomPage from '../../base/CustomPage'

const colorLight = 'rgba(0, 0, 0, .9)'
const colorDark = 'rgba(255, 255, 255, .8)'

CustomPage({
  onShareAppMessage() {
      return {
        title: 'icons',
        path: 'page/weui/example/icons/icons'
      }
    },
  data: {

  },
  onLoad: function(){
    this.setData({
        slideButtons: [{
          text: '编辑',
          src: global.isDemo ? '/page/weui/example/cell/icon_love.svg' : '/example/cell/icon_love.svg', // icon的路径
        },{
          type: 'warn',
          text: '删除',
          extClass: 'test',
          src: global.isDemo ? '/page/weui/example/cell/icon_del.svg' : '/example/cell/icon_del.svg', // icon的路径
        }],
    });
},
slideButtonTap(e) {

   },


  
})