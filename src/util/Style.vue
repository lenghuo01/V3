<script>

import{ref}from 'vue'
export default{
    name: 'StyleComp',
    setup(){
        const ques=ref()
        let res=ref()
        function bu(){
            res.value=ques.value
        }
        return{
            ques,
            res,
            bu
        }
    }
}
</script>
<template>
<div>
    <div :style="{color:res}">请输入颜色</div>
    <input v-model="ques"><button v-on:click='bu'>确认</button>


</div>
 
</template>
<style>


</style>