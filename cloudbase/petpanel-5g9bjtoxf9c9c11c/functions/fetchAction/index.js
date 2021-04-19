// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

// 云函数入口函数
exports.main = async (event, context) => {
  console.log(event)
  var DB = cloud.database().collection("_corrupted")
  if (event.name === "registeredPet") {
    DB = cloud.database().collection("userPet")
  }
  else {
    const res = await DB.add({
      data: event
    })
    return Error("data corrupted: " + event)
  }
  
  delete event.name
  const res = await DB.add({
    data: event
  })
  return res
}