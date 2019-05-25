<template>
    <div class="jdt">
        <van-button type="primary" @click="plus">+</van-button>
    </div>
</template>
<script>
import eventBus from "@/utils/Vuevent.js"
export default {
    data(){
        return {
            len: 80
        }
    },
    methods:{
        // addlen:function(){
        //     eventBus.$on("add",function(len){
        //         len+=10;
        //         console.log(len);
        //     })},
        plus:function(){
            console.log(121);
            eventBus.$emit("add",this.len);
        }
        
    }
}
</script>
<style>
    .jdt{
        /* display: inline; */
        text-align: center;
        
        width: 100%;
    }
</style>