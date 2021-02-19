// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()


// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = await cloud.getWXContext()
  console.log(wxContext)
  // const db = wx.cloud.database()
  // if (db.collection('loginAction').where({
  //   _openid: wxContext.OPENID,
  // })
  // .get({
  //   success: function(res) {
  //     console.log(res.data)
  //   }
  // }))
  return {
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
  }
}
