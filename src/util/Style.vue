<script>

import{ref}from 'vue'
import ShiJian from'@/component/shijian.vue'
export default{
    name: 'StyleComp',
    components:{
        ShiJian,
    },
    setup(){
        const ques=ref()
        let res=ref()
        function dayin(data){
            console.log(data)
        }
        function bu(){
            res.value=ques.value
        }
        return{
            ques,
            res,
            bu,
            dayin
        }
    }
}
</script>
<template>
<div>
    <div :style="{color:res}">请输入颜色</div>
    <input v-model="ques"><button v-on:click='bu'>确认</button>


</div>
<shi-jian @submit="dayin">

</shi-jian>

 
</template>
<style>


</style>