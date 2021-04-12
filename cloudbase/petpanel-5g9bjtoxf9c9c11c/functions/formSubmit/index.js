// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

// 云函数入口函数
exports.main = async (event, context) => {
  console.log(event)
  if (event.name === "petRegister") {
    var DB = cloud.database().collection("userPet")
  }
  else {
    var DB = cloud.database().collection("_corrupted")
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