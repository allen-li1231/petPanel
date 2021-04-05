// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

// 云函数入口函数
exports.main = async (event, context) => {
  console.log(event)
  if (event.name === "petRegister") {
    const DB = cloud.database().collection("pets")
  }
  else {
    const DB = cloud.database().collection("_corrupted")
  }
  event.delete("name")
  const res = await DB.add({
    data: event
  })
  return 0
}