// 云函数入口文件
const cloud = require('../getUserInfo/node_modules/wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

// 云函数入口函数
exports.main = async (event, context) => {
  console.log(event)
  var DB = cloud.database().collection("_corrupted")
  if (event.name === "getPetInfo") {
    console.log("start req", event.name)
    DB = cloud.database().collection("userPet")
  }
  else {
    DB.add({
      data: event
    })
    return Error("data corrupted: " + event)
  }

  delete event.name
  const res = await DB.where({
    "_id": event.id
  })
  .get()
  console.log("fetch result:", res)
  return res.data
}