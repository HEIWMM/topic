<template>
  <div class="dh">
    <div class="head">
      <div class="ww">
        <div style="display:inline-block;width: 30%;">
          <van-icon name="location-o" custom-class="ic"/>
          <text>朝阳市</text>
        </div>

        <div style="display:inline-block;width: 50%;">
          <van-search :value="value" placeholder="请输入关键词" shape="round"/>
        </div>
      </div>
      <van-button custom-class="gai" type="primary" @click="turnto">navigateTo</van-button>
      <van-button type="primary" @click="moveball">ball</van-button>
      <van-transition
        custom-class="redball"
        enter-active-class="van-enter-active-class"
        :show="show"
        :duration="duration"
        leave-active-class="van-leave-active-class"
        enter-class="van-enter-class"
        leave-to-class="van-leave-to-class"
      ></van-transition>
      <!-- <transition @before-enter="be" @enter="en" @after-enter="ae">
        <div class="redball" v-show="show"></div>
      </transition>
      <van-button type="primary" @click="cl">animate</van-button> -->
    </div>

    <!-- <tz></tz> -->
    <!-- 帖子发表 -->
    <!-- <van-cell-group>
      <van-search :value="username" placeholder="请输入搜索关键词" use-action-slot bind:search="onSearch">
        <view slot="action" bind:tap="onSearch">搜索</view>
      </van-search>
      <van-field
        :vaule="username"
        @focus="onfoc"
        placeholder="请输入用户名"
        label="用户名"
        left-icon="contact"
      />

      <van-button type="primary" size="large" custom-class="login-btn">登录</van-button>
    </van-cell-group>
    <van-cell-group>
      <van-field
        :vaule="username"
        center
        clearable
        label="短信验证码"
        placeholder="请输入短信验证码"
        use-button-slot
      >
        <van-button slot="button" size="small" type="primary">发送验证码</van-button>
      </van-field>
    </van-cell-group>-->

    <!-- 我的订单 -->

    <!-- <van-cell-group>
      <van-cell use-icon-slot title="我的订单" is-link value="查看全部">
        <van-icon slot="icon" color="#ee3f4d" custom-class="tubiao" name="column" size="44rpx"/>
      </van-cell>
      <van-row custom-class="myshop" gutter="20">
        <van-col span="6">
          <van-icon size="100rpx" name="logistics"/>
          <p>待收货</p>
        </van-col>
        <van-col span="6">
          <van-icon size="100rpx" name="paid"/>
          <p>待取货</p>
        </van-col>
        <van-col span="6">
          <van-icon size="100rpx" name="completed"/>
          <p>已完成</p>
        </van-col>
        <van-col span="6">
          <van-icon size="100rpx" name="failure"/>
          <p>已关闭</p>
        </van-col>
      </van-row>
  
    </van-cell-group>-->

    <!-- <input type="submit" :value="count"/> -->
    <!-- vuex.store在标签中的引用 -->
    <!-- <yeargo></yeargo>
    <yeargo1></yeargo1>-->
    <!-- 兄弟组件传参 -->
    <!-- <kapian></kapian> -->
    <!-- 商品卡片 -->
    <!--<ga></ga>-->
    <!-- 商品导航 -->
    <!-- <jishu></jishu> -->
    <!-- 商品计数卡片 -->
  </div>
</template>
<script>
import lunbo from "@/components/lunbo";
import kapian from "@/components/kapian";
import ga from "@/components/ga";
import jishu from "@/components/shop_jishu";
import yeargo from "@/components/yeargo";
import yeargo1 from "@/components/yeargo1";
import tz from "@/components/tz";
import store from "@/store/index";
//引入vuex的store数据
export default {
  mounted() {
    this.jishu = "jishu";
    this.nums = 1;
    this.userInfo = "sad";
    this.show = false;
    this.duration = { enter: 300, leave: 1000 };
    console.log(store);
  },
  user: {
    username: "dewen"
  },
  components: {
    lunbo,
    kapian,
    ga,
    jishu,
    yeargo,
    yeargo1,
    tz
  },
  methods: {
    onicon: function() {
      console.log("这是：" + this.username);
    },
    onfoc: function() {
      console.log("这是聚焦" + this.username);
    },
    onChange: function(event) {
      this.nums = event.mp.detail;
      console.log(event.mp.detail);
    },
    close: function() {
      this.jishu = "jishu_n";
      console.log("close");
    },
    turnto: function() {
      console.log(1);
      wx.navigateTo({
        url: "../test/main?id=" + 852
      });
    },
    moveball: function(el) {
      console.log(el);
      this.show = !this.show;
      //el.style.transform = "translate(50px,200px)";
    },
    be: function(el) {
      el.style.transform = "translate(0,0)";
    },
    en: function(el, done) {
      console.log(el);
      el.style;
      el.offsetWidth;
      el.style.transform = "translate(100px,100px)";
      el.style.transition = "all 2s ease";
      done();
    },
    ae: function(el) {
      this.show = !this.show;
    },
    cl: function(e) {
      this.show = !this.show;
      console.log(e);
    }
  },
  data() {
    return {
      username: "dewen",
      imageURL: "./images/commodity.jpg",
      comm_m: "秋冬新款男",
      comm_t: "2018秋冬新款男士休闲时尚军绿飞行夹克秋冬新款男",
      true: true,
      false: false,
      nums: this.nums,
      jishu: this.jishu,
      count: store.state.count,
      show: this.show,
      duration: this.duration
    };
  }
};
</script>
<style lang="scss">
/* body {
  background-color: darkgrey;
} */
.van-enter-class {
  background-color:blue;
}
.van-leave-to-class {
  background-color:greenyellow;
}
.van-leave-active-class {
  transition: all 1s ease;
  background-color:blue;
}
.van-enter-active-class {
  transition: all 1s ease;
  background-color:greenyellow;
}
.redball {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: red;
  display: block;
  position: absolute;
  top: 30px;
  left: 40px;
  z-index: 999;
  transform: translate(0, 0);
}
.ic {
  vertical-align: center;
}
.ww {
  display: flex;
  align-items: center;

  justify-content: space-between;
}

/*我的订单的css样式*/
* {
  .myshop {
    margin-right: 0 !important;
    margin-left: 0 !important;
    margin-top: 5%;
    text-align: center;
  }
  .tubiao {
    vertical-align: middle;
  }
  .jishu {
    position: relative;
  }
  .jishu_n {
    position: relative;
    display: none;
  }
  .close {
    position: absolute;
    top: 0;
    right: 20rpx;
  }
  .shuliang {
    padding: 18rpx 0;
  }
  .lala1 {
    width: 100rpx;
    height: 100rpx;
    border: 1rpx black solid;
  }
  .dh {
    margin: 0 auto;
  }
  .dh_vfx {
    background-color: blue !important;
  }
  .login-btn {
    background-color: #ee3f4d !important;
    border: 1px solid #ee3f4d !important;
  }
}

* {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
<style scoped>
body {
  background-color: darkgrey;
}
</style>
