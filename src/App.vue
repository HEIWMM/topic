<!--<script>
export default {
  created () {
    // 调用API从本地缓存中获取数据
    /*
     * 平台 api 差异的处理方式:  api 方法统一挂载到 mpvue 名称空间, 平台判断通过 mpvuePlatform 特征字符串
     * 微信：mpvue === wx, mpvuePlatform === 'wx'
     * 头条：mpvue === tt, mpvuePlatform === 'tt'
     * 百度：mpvue === swan, mpvuePlatform === 'swan'
     * 支付宝(蚂蚁)：mpvue === my, mpvuePlatform === 'my'
     */

    let logs
    if (mpvuePlatform === 'my') {
      logs = mpvue.getStorageSync({key: 'logs'}).data || []
      logs.unshift(Date.now())
      mpvue.setStorageSync({
        key: 'logs',
        data: logs
      })
    } else {
      logs = mpvue.getStorageSync('logs') || []
      logs.unshift(Date.now())
      mpvue.setStorageSync('logs', logs)
    }
  },
  log () {
    console.log(`log at:${Date.now()}`)
  }
}
</script> -->


<script>
import { get } from "./until";
import config from "./config";
import qcloud from "wafer2-client-sdk";
export default {
  async created() {
    // 调用API从本地缓存中获取数据
    // const logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)
    // const res = await get("/weapp/demo");
    // 利用server从后台拿到数据
    // console.log(123, res);
    // console.log(config.loginUrl);

    // wx.checkSession({
    //   success() {
    //     wx.switchTab({
    //               url: "./pages/comments/main"
    //     }); // session_key 未过期，并且在本生命周期一直有效
    //   },
    //   fail() {
    //     wx.switchTab({
    //               url: "main"
    //     });
    //     // session_key 已经失效，需要重新执行登录流程
    //     // 重新登录
    //   }
    // });

    console.log("小程序启动了");
  },
  mounted() {
    console.log("mounted");
  },
  onLaunch() {
    var _this = this;
    var a = 5;
    wx.checkSession({
      success() {
        console.log(_this.$store.state.count, "load");
        console.log("success");
      },
      fail() {
        console.log("failed");
        wx.login({
          success(res) {
            if (res.code) {
              _this.doLogin(res);
            } else {
              console.log("登录请求发送失败");
            }
          }
        });
      }
    });
  },
  methods: {
    doLogin(res) {
      const appid = "wx2a34dbca0701939e";
      const secret = "7ab74c842dd8621eafdd79e7f4e23939";
      this.$fly
        .get(
          "https://api.weixin.qq.com/sns/jscode2session?appid=" +
            appid +
            "&secret=" +
            secret +
            "&js_code=" +
            res.code +
            "&grant_type=authorization_code",
          {
            params: {
              appid: appid,
              secret: secret,
              js_code: res.code,
              grant_type: "authorization_code"
            }
          }
        )
        .then(e => console.log("登录请求发送成功", e));
    }
  },
  data() {
    return {
      num: 0
    };
  }
};
</script>

<style>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
