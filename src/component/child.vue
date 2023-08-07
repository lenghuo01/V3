<script>

export default{
    //声明
    props:['msg','obj','add'],
    name:'ChildComp',
    setup( props){
        console.log(props)
    }
}

</script>
<template>
    <div class="one">{{msg}}</div>
  <div class="one" >{{ obj.name }}</div>
  <button @click="add(1,2)">点我</button>
</template>
<style>
.one{
    border: 2px solid green; 
    color: aqua
    
}
</style>