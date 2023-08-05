<!-- eslint-disable vue/multi-word-component-names -->
<script>
import {ref,onMounted,onUpdated,onUnmounted}from 'vue'
export default{
    setup(){
        onMounted(() => {
  console.log(`the component is now mounted.`)
})
onUpdated(() => {
  console.log(`the component is now mounted.`)
})
onUnmounted(() => {
  console.log(`the component is now mounted.`)
})
const time=ref()
const users=ref([
    {
        name:'张三',
        age:16
    },
    {
        name:'李四',
        age:20
    }
])
return {
    time,
    users
}
}

    }
  
</script>
<template>
<!-- v-bind:可以简写为  ： -->
<div v-for="(user,index) in users" v-bind:key="user.age">
<div>{{ index+1 }}</div>
    <div>{{ user.name }}</div>
<div>{{ user.age }}</div>
</div>
<!-- v-on:可以简写为@ -->
<button @click="()=>{}">点击</button>
</template>