<template>
    <div class="container">
        个人中心页面
        <button @click="getu">获取</button>
        <button @click="scanCode">扫码识图书</button>
        <img class="userpic" :src="userinfo.avatarUrl"/>
        <p>{{ userinfo.nickName }}</p>
        <yeargo></yeargo>
    </div>
</template>
<script>
import { getSetting,post } from '../../until'
import yeargo from '@/components/yeargo'


export default {
    components:{
        yeargo
    },
    mounted(){
        getSetting().then((e)=>{console.log(e);this.userinfo = e.userInfo;this.openid = e.open_id;});
        
    },
    methods:{
        getu: function(){
            console.log(this.userinfo);
        },
        addbook:async function(isbn){
            const res = await post('/weapp/addbook',{
                isbn,
                openid:this.openid
            });
            if(res.code===0&&res.data.title){
                console.log(res.data.title+'添加成功');
            }
        },
        scanCode:function(){
            wx.scanCode({
                success:(res)=>{
                    
                    console.log(res);
                    
                    if(res.result){
                        this.addbook(res.result);
                    }//tmd接口被封了查询不了了
                }
            });
        }
    },
    
    data(){
        return {
            userinfo:{}
        }
    }//返回给页面的数据
    
}
</script>
<style>
    
    .userpic{
        border-radius: 50%;
        width: 128rpx;
        height: 128rpx;
    }
</style>