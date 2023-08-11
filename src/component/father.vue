<script>
import MySelf from '../util/myself.vue';
import{ref}from'vue'
export default{
    name:'FaTher',
    props:['fa'],
    emits:['shang'],
    components:{
        MySelf
    },
    setup(props,ctx){
        const fat=ref('还没')
        function callback()
        {
            ctx.emit('shang',fat.value)
        }
        return{
            fat,
            callback
        }
    }
}

</script>
<template>
   
    <div  v-if="fa==='吃饭了吗'" v-bind="callback()">
        
        爸爸收到了爷爷的问题并回答：{{ fat }}
    </div>

    <my-self :me="fa" >
        
    </my-self>
    
</template>