<script>

export default{
    name:'MySelf',
    props:['me'],
    setup(){


        return{

        }
    }
}

</script>
<template>
    
    <div v-if="me==='吃饭了吗'">
        我收到了爷爷的问题并回答：吃过了爷爷
    </div>
</template>