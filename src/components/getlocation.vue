<template>
  <div>
    <button @click="nearby_search">搜索周边KFC</button>
    <!--地图容器-->
    <map
      id="myMap"
      :markers="markers"
      style="width:100%;height:300px;"
      longitude="116.313972"
      latitude="39.980014"
      scale="16"
    ></map>
  </div>
</template>
<script>

import mapsdk from "qqmap-wx-jssdk";
const qqmapsdk = new mapsdk({
  key: "LGEBZ-EFIH4-BZXUC-DMAJU-6MOUO-W4BEM" // 必填
});
export default {
  created() {
    // wx.openSetting({
    //   success(res) {
    //     console.log(res);
    //   }
    // });
    // wx.getSetting({
    //   success: res => console.log(res)
    // });
  },
  mounted() {
    this.getuserLocation();
  },
  methods: {
    
    geo: function() {
      wx.getLocation({
        type: "wgs84",
        success: function(res) {
          console.log(res);
          qqmapsdk.reverseGeocoder({
            location: {
              latitude: res.latitude,
              longitude: res.longitude
            },
            success: function(res) {
              console.log(1);
              console.log(res);
            },
            fail: function(err) {
              console.log(err);
            }
          });
        }
      });
    },
    nearby_search: function() {
      var _this = this;
      // 调用接口
      console.log("click");
      qqmapsdk.search({
        keyword: "kfc", //搜索关键词
        location: "39.980014,116.313972", //设置周边搜索中心点
        success: function(res) {
          //搜索成功后的回调
          var mks = [];
          for (var i = 0; i < res.data.length; i++) {
            mks.push({
              // 获取返回结果，放到mks数组中
              title: res.data[i].title,
              id: res.data[i].id,
              latitude: res.data[i].location.lat,
              longitude: res.data[i].location.lng,
              iconPath: "../../../static/images/mark.jpg", //图标路径
              width: 20,
              height: 20
            });
          }
          console.log(mks);
        },
        fail: function(res) {
          console.log(res);
        },
        complete: function(res) {
          console.log(res);
        }
      });
    },
    getuserLocation: function() {
      var _this = this;
      wx.getSetting({
        success: res => {
          if (
            res.authSetting["scope.userLocation"] != undefined &&
            res.authSetting["scope.userLocation"] != true
          ) {
            //未授权
            wx.showModal({
              title: "请求授权当前位置",
              content: "需要获取您的地理位置，请确认授权",
              success: function(res) {
                if (res.cancel) {
                  //取消授权
                  wx.showToast({
                    title: "拒绝授权",
                    icon: "none",
                    duration: 1000
                  });
                } else if (res.confirm) {
                  //确定授权，通过wx.openSetting发起授权请求
                  wx.openSetting({
                    success: function(res) {
                      if (res.authSetting["scope.userLocation"] == true) {
                        wx.showToast({
                          title: "授权成功",
                          icon: "success",
                          duration: 1000
                        });
                        //再次授权，调用wx.getLocation的API
                        _this.geo();
                      } else {
                        wx.showToast({
                          title: "授权失败",
                          icon: "none",
                          duration: 1000
                        });
                      }
                    }
                  });
                }
              }
            });
          } else if (res.authSetting["scope.userLocation"] == undefined) {
            //用户首次进入页面,调用wx.getLocation的API
            _this.geo();
          } else {
            console.log("授权成功");
            //调用wx.getLocation的API
            _this.geo();
          }
        }
      });
    }
  }
};
</script>
<style>
</style>