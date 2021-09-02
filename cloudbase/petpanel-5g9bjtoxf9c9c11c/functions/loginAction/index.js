// 云函数入口文件
const cloud = require('wx-server-sdk')


cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const loginActionDB = cloud.database().collection("loginAction")
const userInfoDB = cloud.database().collection("userInfo")


updateUserInfoById = async function(event) {
  var res = await userInfoDB
    .doc(event.loginid)
    .update({
      data: {
        userInfo: event.userInfo
      }
    })
    .then(res => {
      console.log("userInfo updated for event:", event)
      return res
    })
    .catch(err => {
      console.error(err)
    })

    return res
}


readUserInfoById = async function(event) {
  const res = await userInfoDB
    .doc(event.loginid)
    .get()
    .then(res => {
      console.log("DB returns userInfo:", res.data.userInfo)
      return res.data
    })
    .catch(err => {
      console.error(err)
    })
  return res
}


readUserInfoByOpenid = async function(event) {
  const res = await userInfoDB
  .where({
    openid: event.openid
  })
  .get()
  .then(res => {
    console.log("DB returns where result:", res)
    return res.data[0]
  })
  .catch(err => {
    console.error(err)
  })
  return res
}


newLoginAction = async function(event) {
  //one record for one login
  const now = new Date()
  const res = await loginActionDB.add({
    data: {
      createTime: now,
      openid: event.openid,
    }
  })
  return {
    createTime: now,
    loginid: res._id,
  }
}


newLoginInfo = async function(event) {
  // first time login
  const now = new Date()
  const res = await userInfoDB.add({
    data: {
      openid: event.openid,
      userInfo: event.userInfo || {},
      // might be unused in the future
      //pets: {},
      //favourites: {}
    }
  })

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
      var res = await readUserInfoById(event)
      var {createTime, _} = await newLoginAction(event)
      console.log("send res to client:", res)
      return {
        createTime,
        loginid: res._id,
        userInfo: res.userInfo,
        //might be unused in the future
        //pets: res.pets,
        //favourites: res.favourites
      }
    }
  }
  else {
    var loginid = null, res = null
    var {createTime, _} = newLoginAction(event)
    if (event.openid) {
      res = await readUserInfoByOpenid(event)

      if (!res) {
        console.log("new userInfo payload created")
        var {createTime, loginid} = newLoginInfo(event)
      }
      else {
        loginid = res._id
      }
    }
    else {
      //TODO: Anonymous login
      console.log("developing...", event)
    }

    console.log("got userInfo in database:", res)
    return {
      createTime: createTime,
      loginid: loginid,
      userInfo: res? res.userInfo: {},
      // might be unused in the future
      //pets: res? res.pets: {},
      //favourites: res? res.favourites: {}
    }
  }

}