<script>


export default{
    name:'ShiJian',
    emits:['submit'],
    setup(props,ctx){
        const da={
            name:'zhangsan',
            age:15
        }

        function callback(){
            ctx.emit(
                'submit',da
            )
        }


        return{
            callback,
        }
    }
}
</script>

<template>
    <button @click="callback">确认</button>
</template>