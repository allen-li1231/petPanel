import CustomPage from '../../../base/CustomPage'

CustomPage({    
    onShareAppMessage() {
        return {
          title: '添加宠物信息',
          path: 'page/userHome/pets/petadd/petadd'
        }
      },
    data: {
        showTopTips: false,

        pet_birth_date: "1980-09-01",


        lst_pet_species_condition: ["请选择种类","猫", "狗"],
        pet_species_index: 0,

        lst_pet_sterilize_condition: ["请选择绝育情况","暂未绝育", "怀孕中","已绝育"],
        pet_sterilize_index: 0,
        
        
        pet_recent_vaccinate_date: "2021-02-13"

        },
        rules: [{
            name: 'name',
            rules: {required: true, message: '请输入姓名'},
        },
        {
            name: 'gender',
            rules:{required: true, message:'请填写宠物性别'},
        }
    ],
    petBirthDateChange: function (e) {
        this.setData({
            date: e.detail.value,
            [`formData.date`]: e.detail.value
        })
    },
    petNameInputChange(e) {
        const {field} = e.currentTarget.dataset
        this.setData({
            [`formData.${field}`]: e.detail.value
        })
    },
    bindTimeChange: function (e) {
        this.setData({
            time: e.detail.value
        })
    },
    petSpeciesChange: function(e) {
        console.log('picker species 发生选择改变，携带值为', e.detail.value);

        this.setData({
            pet_species_index: e.detail.value
        })
    },
    petSterilizeChange: function(e) {
        console.log('picker sterilization 发生选择改变，携带值为', e.detail.value);

        this.setData({
            pet_sterilize_index: e.detail.value
        })
    },
    vaccinateDatechange: function (e) {
        this.setData({
            pet_recent_vaccinate_date: e.detail.value,
            [`formData.pet_recent_vaccinate_date`]: e.detail.value
        })
    },
    submitForm() {
        this.selectComponent('#form').validate((valid, errors) => {
            console.log('valid', valid, errors)
            if (!valid) {
                const firstError = Object.keys(errors)
                if (firstError.length) {
                    this.setData({
                        error: errors[firstError[0]].message
                    })

                }
            } else {
                wx.showToast({
                    title: '保存成功'
                })
            }
        })
        // this.selectComponent('#form').validateField('mobile', (valid, errors) => {
        //     console.log('valid', valid, errors)
        // })
    }

});