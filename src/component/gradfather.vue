
<script>
import FaTher from './father.vue';
import {ref}from'vue'
export default{
    name:'GradFather',
    props:['a'],
    components:{
        FaTher,
       
    },
    setup(){
        
        
        const iseat=ref('')
        function replay(data){
            console.log(data)
          
        }
        return{
            iseat,
            replay
        }
    }
}

</script>
<template>
    <div >
        爷爷问：<input type="text" v-model="iseat">
        </div>
    <FaTher :fa="iseat" @shang="replay"></FaTher>
    
    </template>