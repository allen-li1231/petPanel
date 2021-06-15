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
    DB = cloud.database().collection("hospitalInfo")
  }
  else {
    DB.add({
      data: event
    })
    return Error("data corrupted: " + event)
  }

  delete event.name
  const res = await DB.where({
    "name": 
    {
      regexp:'.*'+event.detail.value+'.*',
      options:'i'
    }
  })
  .skip(0) // 跳过结果集中的前 10 条，从第 11 条开始返回
  .limit(10)
  .get()
  console.log("fetch result:", res)
  return res.data
}