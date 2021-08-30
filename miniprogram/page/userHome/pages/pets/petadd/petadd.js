import CustomPage from '../../../base/CustomPage'
import {formatDateTime} from '../../../../../util/util'


CustomPage({
    
    onShareAppMessage() {
        return {
          title: '添加宠物信息',
          path: 'page/userHome/pets/petadd/petadd'
        }
      },

    onShow(opts) {
        
    },

    data: {
        showTopTips: false,

        formData: {
            name: "petRegister",
        },
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
            name: 'petSpecies',
            rules: {required: true, message: '宠物种类必填'},
        }, {
            name: 'petSterilize',
            rules: {required: false},
        }, {
            name: 'petVaccineDate',
            rules: [{required: false}, {date: true, message: '疫苗日期格式异常'}],
        }],

        petBirth: null,
        petDateRange: {
            start: "1980-09-01",
            end: formatDateTime(new Date(), false),
        },

        lst_pet_species_condition: ["猫", "狗"],
        lst_pet_species_condition_en: ["cat", "dog"],
        pet_species_index: null,

        lst_pet_sterilize_condition: ["暂未绝育", "怀孕中", "已绝育"],
        lst_pet_sterilize_condition_en: ["unsterilized", "pregnanted", "sterilized"],
        pet_sterilize_index: null,
        
        pet_recent_vaccinate_date: null,

        },

    formPetBirthChange: function (e) {
        this.setData({
            "formData.petBirth": e.detail.value,
            petBirth: e.detail.value
        })
    },
    formPetNameInputChange(e) {
        const petName = e.detail.value
        this.setData({
            "formData.petName": petName
        })
    },
    formPetGenderChange: function (e) {
        this.setData({
            "formData.petGender": e.detail.value
        })
    },
    formPetSpeciesChange: function(e) {
        if (e.detail.value !== 0) {
            const petSpecies = this.data.lst_pet_species_condition_en[e.detail.value]
            this.setData({
                pet_species_index: e.detail.value,
                "formData.petSpecies": petSpecies
            })
        }
    },
    formPetSterilizeChange: function(e) {
        if (e.detail.value !== 0) {
            const petSterilize = this.data.lst_pet_sterilize_condition_en[e.detail.value]
            this.setData({
                pet_sterilize_index: e.detail.value,
                "formData.petSterilize": petSterilize
            })
        }
    },
    formPetVaccineDateChange: function (e) {
        this.setData({
            pet_recent_vaccinate_date: e.detail.value,
            "formData.petVaccineDate": e.detail.value
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
            } 
            else {
                wx.showToast({
                    title: '请稍等...',
                    icon: "loading",
                    mask: true
                })

                let app = getApp()
                this.data.formData.loginid = app.globalData.loginid
                this.data.formData.unionid = app.globalData.unionid

                wx.cloud.callFunction({
                    name: "formSubmit",
                    data: this.data.formData,
                    success: res => {
                        wx.hideToast()
                        wx.showToast({
                            title: '保存成功',
                            icon: 'success',
                            duration: 2000,
                            success: res => {
                                wx.navigateBack({
                                    delta: 1,
                                })
                            }
                        })
                    },
                    fail: res => {
                        console.log("formSubmit failed:", res)
                        wx.hideToast()
                        wx.showToast({
                            title: '请稍后重试',
                            icon: 'error',
                            duration: 2000,
                        })
                    },
                })
            }
        })
    }

});