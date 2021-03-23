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

        kind: ["请选择种类","猫", "狗"],
        kindIndex: 0,

        sterilization: ["请选择绝育情况","暂未绝育", "怀孕中","已绝育"],
        sterilizationIndex: 0,
        
        health: ["良好", "轻微皮肤病", "有"],
        healthIndex: 0,
        
        vaccination: "2021-02-13"

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
    bindKindChange: function(e) {
        console.log('picker kind 发生选择改变，携带值为', e.detail.value);

        this.setData({
            kindIndex: e.detail.value
        })
    },
    bindsterilizationChange: function(e) {
        console.log('picker sterilization 发生选择改变，携带值为', e.detail.value);

        this.setData({
            sterilizationIndex: e.detail.value
        })
    },
    bindhealthChange: function(e) {
        console.log('picker health 发生选择改变，携带值为', e.detail.value);

        this.setData({
            healthIndex: e.detail.value
        })
    },
    bindVaccinationchange: function (e) {
        this.setData({
            vaccination: e.detail.value,
            [`formData.vaccination`]: e.detail.value
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