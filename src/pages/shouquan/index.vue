<template>
  <div id="persons">
    <button open-type="getUserInfo" lang="zh_CN" @getuserinfo="doLogin">获取用户信息</button>
    <p @click="das">what's happen</p>
  </div>
</template>
<script>
import config from "../../config";
import qcloud from "wafer2-client-sdk";
//import { getSetting } from '../../until'
export default {
  mounted() {
    //console.log('sq');
    this.getSetting();
   
  },
  methods: {
    getSetting: function() {
      wx.getSetting({
        success: function(res) {
          if (res.authSetting["scope.userInfo"]) {
            wx.getUserInfo({
              success: function(res) {
                console.log(res.userInfo);
                //用户已经授权过
                console.log("用户已经授权过");
                wx.switchTab({
                  url: "../books/main"
                });
              }
            });
          } else {
            console.log("用户还未授权过");
          }
        }
      });
    },
    doLogin: function(e) {
      console.log("dj");
      qcloud.setLoginUrl(config.loginUrl);
      qcloud.login({
        success: function(userInfo) {
          console.log("登录成功", userInfo);
          wx.switchTab({
            url: "../books/main"
          });
        },
        fail: function(err) {
          console.log("登录失败", err);
        }
      });
    },
    das: function() {
      console.log("ko");
      wx.switchTab({
        url: "../books/main"
      });
    },
    
  }
};
</script>
<style>
</style>