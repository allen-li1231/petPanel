import AOPage from '../API/AOPage'


AOPage({
  onShow() {
    wx.getSystemInfo({
      success: (res) => {
         wx.reportAnalytics('visit_report', {
            time_stamp: JSON.stringify(new Date()),
            system: JSON.stringify(res)
         })
       }
      })
  },
  onShareAppMessage() {
    return {
      title: '知萌',
      path: 'page/homePage/index'
    }
  },

  data: {
    navBtnLst: [
      [
        {
          name: '打疫苗',
          page: 'vaccination'
        },
        {
          name: '绝育',
          page: 'sterilization'
        },
        {
          name: '体检',
          page: 'physical-examination'
        },
        {
          name: '看病',
          page: 'general-clinic'
        },
      ], 
      [
        {
          name: '办狗证',
          page: 'dog-license'
        },
        {
          name: '美容',
          page: 'cosmetology'
        },
        {
          name: '待定',
          page: 'searchResult'
        },
        {
          name: '待定',
          page: 'searchResult'
        }
      ]
    ],
    theme: 'light'
  },

  onLoad() {
    this.setData({
      theme: wx.getSystemInfoSync().theme || 'light'
    })

    if (wx.onThemeChange) {
      wx.onThemeChange(({ theme }) => {
        this.setData({ theme })
      })
    }
  },
  
})
