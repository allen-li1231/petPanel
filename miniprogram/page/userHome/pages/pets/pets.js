// page/userHome/pages/pets/pets.js
import CustomPage from '../../base/CustomPage'

const colorLight = 'rgba(0, 0, 0, .9)'
const colorDark = 'rgba(255, 255, 255, .8)'

CustomPage({
  onShareAppMessage() {
      return {
        title: '宠物信息',
        path: 'page/userHome/pages/pets/pets'
      }
    },
  data: {
    lst_pets_profile:[
      {
        pet_profile_name:'瓜瓜',
      },
      {
        pet_profile_name:'科科',
      }],

  },
  onLoad: function(){
    this.setData({
        slideButtons: [{
          type: 'warn',
          text: '删除',
        }],
    });
},
slideButtonTap(e) {

   },


  
})