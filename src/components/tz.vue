<template>
  <div class>
    <div class="head">
      <div class="title"></div>

      <div class="tiezi">
        <div class="tz_h">
          <div class="pic"></div>
          <div class="tz_t">
            <p class="tz_t_h">{{ tz_t_h }}</p>
            <van-button custom-class="tz_t_b" type="info" round>其他信息</van-button>
            <van-button custom-class="tz_t_b" type="info" round>重庆市</van-button>
          </div>
          <div class="tz_w"></div>
        </div>
        <div class="tz_c">
          <div class="tz_c_c"></div>
          <div class="tz_c_p"></div>
        </div>
        <div class="tz_m">
          <div class="tz_m_l">
            <van-icon name="shop" custom-class="ic"/>
            <b style="display:inline-block;">浏览</b>
          </div>
          <div class="tz_m_l">
            <van-icon name="shop" custom-class="ic"/>
            <b style="display:inline-block;">浏览</b>
          </div>
          <div class="tz_m_l">
            <van-icon name="shop" custom-class="ic"/>
            <b style="display:inline-block;">浏览</b>
          </div>
          <van-button custom-class="gaia" type="primary">xxx</van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.tz_t_h = "邓先伟邓先伟邓先伟邓先伟邓先伟";
  },
  mounted() {
    this.isLong(this.tz_t_h);
  },
  methods: {
    isLong: function(text) {
      if (text.length > 12) {
        var newt = text.substring(0, 12);
        newt = newt + "...";
      }
      this.tz_t_h = newt;
    }
  },
  data() {
    return {
      tz_t_h: this.tz_t_h
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.head {
  .tiezi {
    width: 100%;
    height: 160px;
    padding-top: 5px;
    padding-left: 5px;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
  }
  .tz_h {
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: row;
  }
  .tz_h {
    .pic {
      height: 40px;
      width: 40px;
      background-color: #db7f7f;
      margin-right: 5px;
    }
    .tz_t {
      height: 40px;
      width: 236px;
      background-color: #db7f7f;
      margin-right: 5px;
      text-align: left;
    }
    .tz_t {
      .tz_t_h {
        padding: 0;
        margin: 0;
        font-size: 18px;
      }
    }

    .tz_w {
      height: 40px;
      width: 40px;
      background-color: #db7f7f;
    }
  }
  .tz_c {
    width: 100%;
    height: 75px;
    padding: 7px 0;
    display: flex;
    flex-direction: row;
  }
  .tz_c {
    .tz_c_c {
      width: 250px;
      height: 60px;
      background-color: blue;
    }
    .tz_c_p {
      width: 60px;
      height: 60px;
      margin-left: 10px;
      background-color: green;
    }
  }
  .tz_m {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .tz_m {
    .tz_m_l {
      margin: 0 10px;
      font-size: 12px;
    }
  }
  .ww {
    display: flex;
    align-items: center;
  }
}


.ic {
  display: inline-block;
  vertical-align: -1px;
}
.title {
  width: 100%;
  height: 64px;
  background-color: aquamarine;
}
.head {
  margin: 0 auto;
  width: 375px;
  height: 666px;
  border: 1px solid black;
}
.tz_t {
  
    /deep/ button {
      height: 12px !important;
      font-size: 12px !important;
      line-height: 12px !important;
      margin-right: 10rpx;
      margin-top: -10rpx;
    }
  
}
</style>
<style>

.tz_t_b {
  height: 12px !important;
  font-size: 12px !important;
  color: black !important;
  line-height: 12px !important;
  margin-right: 5px;
  top: -6px;
}
</style>

