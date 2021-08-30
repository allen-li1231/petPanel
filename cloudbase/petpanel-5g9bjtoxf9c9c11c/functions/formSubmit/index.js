// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

// 云函数入口函数
exports.main = async (event, context) => {
  console.log(event)
  var DB = cloud.database().collection("_corrupted")
  if (event.name === "petRegister") {
    var DB = cloud.database().collection("userPet")  
    delete event.name
    const res = await DB.add({
      data: event
    })
    return res
  }
  else if (event.name === "petModify") {
    var DB = cloud.database().collection("userPet")
    delete event.name
    DB
    .doc(event.id)
    .update({
      data: event
    })
    .then(res => {
      console.log("pet profile updated for event:", event)
      return res
    })
    .catch(err => {
      console.error(err)
    })
  }
  else {
    const res = await DB.add({
      data: event
    })
    return Error("data corrupted: " + event)
  }

}