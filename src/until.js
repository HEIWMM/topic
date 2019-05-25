// 工具函数

import config from './config'

export function get (url,data) {
  request(url,'GET',data);
}
export function post (url,data) {
  request(url,'POST',data);
}
function request (url,method,data) {
  return new Promise((resolve, reject) => {
    wx.request({
      data:data,
      method:method,
      url: config.host + url,
      success: function (res) {
        if (res.data.code === 0) {
          resolve(res.data.data)
        } else {
          reject(res.data)
        }
      }
    })
  })
}
export function getSetting() {
  return new Promise((resolve, reject) => {
    wx.getSetting({
      success: function (res) {
        if (res.authSetting["scope.userInfo"]) {
          wx.getUserInfo({
            success: function (res) {
              console.log(res.userInfo);
              //用户已经授权过
              console.log("用户已经授权过22");
              resolve(res);

            }
          });
        } else {
          console.log("用户还未授权过");
          reject();
        }
      }
    });
  })
}