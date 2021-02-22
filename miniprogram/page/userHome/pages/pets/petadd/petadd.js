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

        date: "2016-07-01",


        kind: ["请选择种类","猫", "狗"],
        kindIndex: 0,

        sterilization: ["请选择绝育情况","暂未绝育", "怀孕中","已绝育"],
        sterilizationIndex: 0,
        
        health: ["良好", "轻微皮肤病", "有"],
        healthIndex: 0,
        
        vaccination: "2021-02-13"

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
    bindDateChange: function (e) {
        this.setData({
            date: e.detail.value,
            [`formData.date`]: e.detail.value
        })
    },
    formInputChange(e) {
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