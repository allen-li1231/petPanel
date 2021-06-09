// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

// 云函数入口函数
exports.main = async (event, context) => {
  console.log(event)
  var DB = cloud.database().collection("hospitalInfo")

  delete event.name
  const res = await DB.where({
    "hospitalInfo.name": 
    {
      regexp:'.*'+event.detail.value+'.*',
      options:'i'
    }
  })
  .get()
  console.log("fetch result:", res)
  return res.data
}