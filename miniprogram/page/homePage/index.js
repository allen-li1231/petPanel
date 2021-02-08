Page({
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
          page: 'tt'
        },
        {
          name: '待定',
          page: 'tt'
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

  kindToggle(e) {
    const id = e.currentTarget.id
    const list = this.data.list
    for (let i = 0, len = list.length; i < len; ++i) {
      if (list[i].id === id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list
    })
    wx.reportAnalytics('click_view_programmatically', {})
  }
})
