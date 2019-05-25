<template>
  <div class>
    <!-- 块状商品卡片 -->
    <van-row custom-class="card_lar">
      <van-col custom-class="card_lac" span="10" offset="1">
        <van-card
          num="2"         
          price="10.00"
          :desc="comm_m"
          :title="comm_t"
          :thumb="imageURL"
          custom-class="card"
          thumb-class="card_p"
        >
          <view slot="footer">
            <van-button round=true size="mini">
              <van-icon name="cart-o"></van-icon>
            </van-button>
          </view>
        </van-card>
      </van-col>
      <van-col custom-class="card_lac" span="10" offset="2">
        <van-card
          num="2"          
          price="10.00"
          :desc="comm_m"
          :title="comm_t"
          :thumb="imageURL"
          custom-class="card"
          thumb-class="card_p"
        >
          <view slot="footer">
            <van-button round=true size="mini">
              <van-icon name="cart-o"></van-icon>
            </van-button>
          </view>
        </van-card>
      </van-col>
    </van-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imageURL: "./images/future.jpeg",
      comm_m: "秋冬新款男",
      comm_t: "2018秋冬新款男士休闲时尚军绿飞行夹克秋冬新款男",
      true: true
    };
  }
};
</script>
<style>
.card view:first-child {
  flex-direction: column!important;
}

.card_lac {
  border: 1rpx solid black;
}
.card .van-card__header .van-card__thumb{
  width: 100%;
}
</style>