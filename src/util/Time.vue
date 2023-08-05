<!-- eslint-disable vue/multi-word-component-names -->


<script>


import{count ,tem,res,ques}from'./time.js'
export default{
setup(){
  

    return {
    count,
    tem,
    res,
    ques
}


}
}
</script>
<template>
    <div>计时器</div>
    <div>
        <!-- 请输入<input v-model="ques">
        <div>结果<span>{{ ques }}</span></div> -->
        <div>{{ count }}</div>
        <button v-on:click="tem()">暂停</button>
    </div>
</template>