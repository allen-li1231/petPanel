import AOPage from '../../../../common/AOPage'
import {formatDateTime} from '../../../../common/util'


AOPage({
    
    onShareAppMessage() {
        return {
          title: '新建/修改宠物信息',
          path: 'page/userHome/pets/petadd/petadd'
        }
      },

    data: {
        showTopTips: false,
        modifyView: false,
        title: "新建宠物信息",
        subtitle: "请在此填写您的宠物信息，我们将根据以下信息匹配合适的医疗服务。信息填写越详细准确，服务也会更好哦",
        petGenderMaleChecked: false,
        petGenderFemaleChecked: false,

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

    onLoad(options) {
        if (Object.keys(options).length > 0){
            wx.setNavigationBarTitle({
              title: '修改宠物信息',
            })
            this.setData({
                modifyView: true,
                title: options.petName + " 宠物信息",
                subtitle: "修改宠物信息后，点击下方保存按钮进行提交", 

                "formData.name": "petModify",
                "formData.id": options.id,
                petName: options.petName,
                "formData.petName": options.petName,
                petBirth: options.petBirth,
                "formData.petBirth": options.petBirth,
                petGenderMaleChecked: options.petGender === "male"? true: false,
                petGenderFemaleChecked: options.petGender === "female"? true: false,
                "formData.petGender": options.petGender,
                pet_species_index: this.data.lst_pet_species_condition_en.indexOf(options.petSpecies),
                "formData.petSpecies": options.petSpecies,
                pet_sterilize_index: options.petSterilize? this.data.lst_pet_sterilize_condition_en.indexOf(options.petSterilize): 0,
                "formData.petSterilize": options.petSterilize,
                pet_recent_vaccinate_date: options.petVaccineDate? options.petVaccineDate: null,
                "formData.petVaccineDate": options.petVaccineDate? options.petVaccineDate: null,
            })
        }
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
            if (!valid) {
                console.log('valid', valid, errors)
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
                    mask: true,
                    duration: 30000
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
                            duration: 30000,
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
                            duration: 30000,
                        })
                    },
                })
            }
        })
    }

});