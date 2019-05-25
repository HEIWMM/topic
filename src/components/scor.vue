<template>
    <div class="">
        <scroll-view scroll-y style="height: 80px;" class="y">
      <div class="main_scro">
        <div class="scro">
          <van-icon name="search" custom-class="scro_ic"/>
          <p class="scro_p">二手卖卖</p>
        </div>
        <div class="scro">
          <van-icon name="search" custom-class="scro_ic"/>
          <p class="scro_p">二手卖卖</p>
        </div>
        <div class="scro">
          <van-icon name="search" custom-class="scro_ic"/>
          <p class="scro_p">二手卖卖</p>
        </div>
        <div class="scro">
          <van-icon name="search" custom-class="scro_ic"/>
          <p class="scro_p">二手卖卖</p>
        </div>
        <div class="scro">
          <van-icon name="search" custom-class="scro_ic"/>
          <p class="scro_p">二手卖卖</p>
        </div>
        <div class="scro">
          <van-icon name="search" custom-class="scro_ic"/>
          <p class="scro_p">二手卖卖</p>
        </div>
        <div class="scro">
          <van-icon name="search" custom-class="scro_ic"/>
          <p class="scro_p">二手卖卖</p>
        </div>
        <div class="scro">
          <van-icon name="search" custom-class="scro_ic"/>
          <p class="scro_p">二手卖卖</p>
        </div>
      </div>
    </scroll-view>
    </div>
</template>
<script>

export default {}
    
</script>
<style lang="scss">
 .main_scro{
  display: flex;
  flex-flow: row wrap;
}
.scro {
  width: 50px;
  height: 75px;
  padding: 0 12px;
  text-align: center;
}
.scro {
  .scro_ic {
    width: 50px;
    height: 50px;
    border: 1px solid;
    border-radius: 50%;
    font-size: 50px;
  }
  .scro_p {
    font-size: 12px;
  }
}
::-webkit-scrollbar {
  width: 0;
  height: 0;
  color: transparent;
}   
</style>