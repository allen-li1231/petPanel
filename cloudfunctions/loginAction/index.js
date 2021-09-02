// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})


exports.main = async (event, context) => {
  const loginActionDB = cloud.database().collection("loginAction")
  console.log(event)
  // client has logged in
  if (event.loginid) {
    // update userInfo if client exists
    if (event.userInfo) {
      loginActionDB
      .doc(event.loginid)
      .update({userInfo: event.userInfo})
      .then(res => {
        console.log("userInfo updated")
        return res
      })
      .catch(err => {
        console.error(err)
      })
    }
    // client not logged in
    else {
      // return userInfo if server record exists
      console.log("Record returned")
      loginActionDB
        .doc(event.loginid)
        .get()
        .then(res => {
          console.log("Record returned", res)
          return res.data
        })
        .catch(err => {
          console.error(err)
        })
    }
  }
  else {
    // first time login
    const now = new Date()
    const res = await loginActionDB.add({
      data: {
        createTime: now,
        openid: event.openid,
        userInfo: event.userInfo || {}
      }
    })
    
    return {
      createTime: now,
      loginid: res._id
    }
  }

}