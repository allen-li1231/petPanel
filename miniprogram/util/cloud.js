const util = require("./util.js")
const app = getApp()
const db = wx.cloud.database()


function  showError() {
  wx.showToast({
    icon: 'none',
    title: '插入失败'
  })
}

// 如果已有记录则更新，否则插入
function  insertOrUpdateData(collection, existedData, data) {
  if (existedData._id) {
    db.collection(collection).doc(existedData._id).update({data})
      .then(res => {
        setCompletedData(existedData._id)
        return res
      })
      .catch(err => {
        showError()
        console.error('[数据库] [更新记录] 失败：', err)
      })
  } else {
    db.collection(collection).add({data})
      .then(res => {
        setCompletedData(res._id)
        return res
      })
      .catch(err => {
        showError()
        console.error('[数据库] [新增记录] 失败：', err)
      })
  }
}

// 查询已插入/更新的数据中记录的服务端时间
function  setCompletedData(collection, id) {
  db.collection(collection).doc(id).get()
    .then(res => {
      wx.showToast({
        title: '插入成功',
      })
      return res
    })
    .catch(err => {
      showError()
      console.error('[数据库] [查询记录] 失败：', err)
    })
}

function insertData(collection) {
  const data = {
    time: db.serverDate()
  }
  db.collection(collection).where({
    _id: app.globalData.id,
    _openid: app.globalData.openid
  }).get()
    .then(res => {
      console.log('[数据库] [查询记录] 成功: ', res)
      const resFirstData = res.data[0] || {}
      insertOrUpdateData(resFirstData, data)
      return res
    })
    .catch(err => {
      showError()
      console.error('[数据库] [查询记录] 失败：', err)
    })
}