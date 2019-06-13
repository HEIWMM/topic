<template>
  <div class="dh">
    <h1 @click="third">fly授权页面</h1>
    <h1 @click="fourth">axios</h1>
    <div :if="canIUse">
      <!-- <button
        class="bottom"
        type="primary"
        @open-type="getUserInfo"
        lang="zh_CN"
        @bindgetuserinfo="bindGetUserInfo"
      >授权登录</button>-->
      <button 
      open-type="getUserInfo" 
      @getuserinfo="bindGetUserInfo">获取权限</button>
      <button
      @click="getStore">获取缓存数据</button>
      <button
      @click="openset">获取授权设置</button>
      <button
      id="bt"
      @click="getDom">获取Dom(mp对象)</button>
    </div>
  </div>
</template>
<script>
export default {
  onlaunch() {
    console.log(this.$store.state.count, "load");
    var _this = this;
    //this.getSetting()
  },
  mounted() {},
  components: {},
  methods: {
    third: function() {
      console.log(this.$store.state.count + "mounted");
      this.$fly
        .get("https://cnodejs.org/api/v1/topics", {
          page: 1,
          limit: 10
        })
        .then(e => {
          console.log(e, "fly");
        })
        .catch(e => console.log(e));
    },
    fourth: function() {
      this.$axios
        .get("https://cnodejs.org/api/v1/topics", {
          params: {
            page: 1,
            limit: 10
          }
        })
        .then(e => {
          console.log(e, "axios");
        })
        .catch(e => console.log(e));
    },
    bindGetUserInfo:function(e) {
      // console.log(e.mp.detail.rawData)
      if (e.mp.detail.rawData){
        //用户按了允许授权按钮
        wx.getUserInfo({
              success: function(res) {
                console.log(e)
                //用户已经授权过
                console.log('用户已经授权过')
              },
              fail:function(e){console.log('err:'+e)}
            })
          
        console.log('用户按了允许授权按钮')
      } else {
        //用户按了拒绝按钮
        console.log(e)
        console.log('用户按了拒绝按钮')
      }


  },
  getStore:function(){
    wx.getSetting({
      success: (res) => {
        console.log(JSON.stringify(res));
        
      }
    })
  },
  openset:function(){
    wx.authorize({
      scope: 'scope.address',
      success:function(res){
        console.log(res);
      }
    })
  },
  getDom:function(e){
    //console.log(e);
    const query = wx.createSelectorQuery();
    query.select('#bt').boundingClientRect();
    console.log(query);
    console.log(query.select('#bt').boundingClientRect());
  }
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss">
.dh {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
<style scoped>
.header {
  margin: 90rpx 0 90rpx 50rpx;
  text-align: center;
  width: 650rpx;
  height: 300rpx;
  line-height: 450rpx;
}

.header img {
  width: 200rpx;
  height: 200rpx;
}

.content {
  margin-left: 50rpx;
  margin-bottom: 90rpx;
}

.content p {
  display: block;
  color: #9d9d9d;
  margin-top: 40rpx;
}

.bottom {
  border-radius: 80rpx;
  margin: 70rpx 50rpx;
  font-size: 35rpx;
}
</style>
