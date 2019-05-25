<template>
    <div class="jdt">
        <p>进度条</p>
        <progress class="jdt" :percent="len" stroke-width="12" />
    </div>
</template>
<script>
import eventBus from "@/utils/Vuevent.js"
export default {
    created(){
         
            eventBus.$on("add",function(len){
                
                console.log(len);
            })
    },
    methods:{
        // plus:function(){
        //     eventBus.$emit("add",this.len);
        // },
        // addlen:function(){
        //     eventBus.$on("add",function(len){
                
        //         console.log(len);
        //     })}
    },
    data(){
        return {
            len: this.len
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