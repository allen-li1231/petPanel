// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

// 云函数入口函数
exports.main = async (event, context) => {
  console.log(event)
  var DB = cloud.database().collection("_corrupted")
  if (event.name === "deletePet") {
    return cloud
    .database()
    .collection("userPet")
    .doc(event.id)
    .remove()
    .data
  }
  else {
    const res = await DB.add({
      data: event
    })
    return Error("data corrupted: " + event)
  }
  
  delete event.name
  const res = await DB.doc(event.id).remove()
  console.log("modification result:", res)
  return res.data
}