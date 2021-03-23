import CustomPage from '../../../base/CustomPage'
import {formatDateTime} from '../../../../../util/util'

CustomPage({
    onShareAppMessage() {
        return {
          title: '添加宠物信息',
          path: 'page/userHome/pets/petadd/petadd'
        }
      },
    data: {
        showTopTips: false,

        formData: {},
        formRules: [{
            name: 'petName',
            rules: [{required: true, message: '宠物姓名是必选项'},
            {maxlength: 50, message: '宠物姓名过长，请勿超过50字'}
        ],
        }, {
            name: 'petBirth',
            rules: [{required: false}, {date: true, message: '生日日期格式异常'}],
        }, {
            name: 'petGender',
            rules: {required: true, message: '宠物性别必填'},
        }, {
            name: 'petType',
            rules: {required: true, message: '宠物类型必填'},
        }, {
            name: 'petSterilize',
            rules: {required: false},
        }, {
            name: 'petVaccineDate',
            rules: [{required: false}, {date: true, message: '疫苗日期格式异常'}],
        }],

        petBirth: null,
        petBirthRange: {
            start: "1980-09-01",
            end: formatDateTime(new Date(), false),
        },

        lst_pet_species_condition: ["请选择种类","猫", "狗"],
        pet_species_index: 0,

        lst_pet_sterilize_condition: ["请选择绝育情况","暂未绝育", "怀孕中","已绝育"],
        pet_sterilize_index: 0,
        
        
        pet_recent_vaccinate_date: "2021-02-13"

        },

    formPetBirthChange: function (e) {
        this.setData({
            "formData.petBirth": e.detail.value,
            petBirth: e.detail.value
        })
    },
    formPetNameInputChange(e) {
        function  checkEmail(value) {
            return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value)
        }
        const petName = e.detail.value
        this.setData({
            "formData.petName": petName
        })
        if (!checkEmail(petName)) {
            
        }
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