// 云函数入口文件
const cloud = require('wx-server-sdk')


cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const loginActionDB = cloud.database().collection("loginAction")


updateUserInfoById = async function(event) {
  var res = await loginActionDB
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

    return res
}


readUserInfoById = async function(event) {
  var userInfo = await loginActionDB
    .doc(event.loginid)
    .get()
    .then(res => {
      console.log("DB returns userInfo:", res.data)
      return res.data.userInfo
    })
    .catch(err => {
      console.error(err)
    })

  return userInfo
}


newLoginAction = async function(event) {
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
    loginid: res._id,
  }
}


exports.main = async (event, context) => {
  // console.log("loginAction event:", event)
  // client has logged in
  if (event.loginid) {
    // update userInfo if client exists
    if (event.userInfo && Object.keys(event.userInfo).length !== 0) {
      var res = await updateUserInfoById(event)
      return res
    }
    else {
      // return userInfo if server record exists
      // create a new record
      event.userInfo = await readUserInfoById(event)
      var {createTime, loginid} = await newLoginAction(event)
      console.log("send userInfo to client:", event.userInfo)
      return {
        createTime,
        loginid,
        userInfo: event.userInfo
      }
    }
  }
  else {
    return await newLoginAction(event)
  }

}