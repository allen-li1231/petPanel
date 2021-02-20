// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})


exports.main = async (event, context) => {
  const loginActionDB = cloud.database().collection("loginAction")
  // console.log("loginAction event:", event)
  // client has logged in
  if (event.loginid) {
    // update userInfo if client exists
    if (event.userInfo) {
      loginActionDB
      .doc(event.loginid)
      .update({
        data: {
          userInfo: event.userInfo
        }
      })
      .then(res => {
        console.log("userInfo updated for user:", event.userInfo.nickName)
        return res
      })
      .catch(err => {
        console.error(err)
      })
    }
    // client not logged in
    else {
      console.warn("has loginid but no userInfo to update, id:", event.loginid)
      // return userInfo if server record exists
      // console.log("Record returned")
      // loginActionDB
      //   .doc(event.loginid)
      //   .get()
      //   .then(res => {
      //     console.log("Record returned", res)
      //     return res.data
      //   })
      //   .catch(err => {
      //     console.error(err)
      //   })
    }
  }
  else {
    // first time login
    const now = new Date()
    const res = await loginActionDB.add({
      data: {
        createTime: now,
        openid: event.openid,
        userInfo: event.userInfo? event.userInfo: {}
      }
    })
    console.log(res)
    return {
      createTime: now,
      loginid: res._id
    }
  }

}