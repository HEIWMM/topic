<template>
  <div class>
    
    <van-panel use-footer-slot :custom-class="jishu">
      <div>
        <van-card :num="nums" price="2.00" desc="描述信息" title="商品标题" :thumb="imageURL"/>
        <hr>
        <van-row custom-class="shuliang">
          <van-col span="12" offset="3">
            <p class="juzhong">数量</p>
          </van-col>
          <van-col>
            <van-stepper :value="num" @change="onChange"/>
          </van-col>
        </van-row>
        <div class="close">
          <van-icon name="cross" @click="close"/>
        </div>
      </div>
      <div slot="footer">
        <van-button size="large" type="danger">确认</van-button>
      </div>
    </van-panel>
  </div>
</template>
<script>

export default {
  mounted() {
    this.jishu = "jishu"
    this.nums = 1;
  },
  methods: {
    
    onChange: function(event) {
      this.nums = event.mp.detail;
      console.log(event.mp.detail);
    },
    close:function(){
      this.jishu = "jishu_n"
      console.log("close");
    }
  },
  data() {
    return {
      username: "dewen",
      imageURL: "./images/commodity.jpg",
      comm_m: "秋冬新款男",
      comm_t: "2018秋冬新款男士休闲时尚军绿飞行夹克秋冬新款男",
      true: true,
      nums: this.nums,
      jishu: this.jishu
    };
  }
};
</script>
<style>
/* body {
  background-color: darkgrey;
} */
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

</style>
