<script >

//导入库
import {ref}from 'vue'

export default {
  name:'App',//建议给个名字
  setup(){
//创建响应式变量
const count =ref(0)
// let ques=ref('')
// let res=ref('')
// res.value=ques.value
const obj=ref({skill:[1,2,3],obj:{name:'小明',age:18}})


return{
  count,
  obj,
  // ques,
  // res
}

  }
}

</script>

<template>
  <div class="title">{{obj.skill}}含哈哈</div>
  <div id="app">
<input v-model="ques">
<div >x显示：<span>{{ res }}</span></div>
  </div>
  
</template>

<style >
.title{
  color: red;
}
</style>
