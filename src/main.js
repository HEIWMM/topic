import Vue from 'vue'
import App from './App'
import store from './store/index'
//将fly实例挂在vue原型上
import fly from './utils/requestFly'
import axios from './utils/requestAxios'

Vue.prototype.$fly = fly
Vue.prototype.$store=store;
Vue.prototype.$axios = axios;

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
export default {
    methods:{
        bindGetUserInfo:function(e) {
            if (e.detail.userInfo) {
              //用户按了允许授权按钮
              var that = this;
              //插入登录的用户的相关信息到数据库
              console.log(e);
              //授权成功后，跳转进入小程序首页
              // wx.switchTab({
              //   url: "/pages/index/index"
              // });
            } else {
              //用户按了拒绝按钮
              wx.showModal({
                title: "警告",
                content: "您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!",
                showCancel: false,
                confirmText: "返回授权",
                success: function(res) {
                  if (res.confirm) {
                    console.log("用户点击了“返回授权”");
                  }
                }
              });
            }
          }
    }
}
