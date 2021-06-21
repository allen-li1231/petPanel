// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

// 云函数入口函数
exports.main = async (event, context) => {
  console.log(event)
  var DB = cloud.database().collection("userPet")

  delete event.name
  const res = await DB.where({
    "userPet._id": event.id
  })
  .get()
  console.log("fetch result:", res)
  return res.data
}