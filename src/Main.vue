<script>
  import ChildComp from "@/component/child.vue"
  import {ref} from 'vue'
export default{
  
    name:'MainComp',
    //局部注册
    components:{
        
        ChildComp
    },
    setup(){
        const msgText=ref('he')
        const mm=ref({
            name:'张三',
            age:20
        })
        let count =ref(0)
        function add(a,b){
            count.value =a+b
        }

        return{
        msgText,
        mm,
        add,
        count
    }

    }
    
}
</script>
<template>

    <div>你好{{ mm.name }}
       
    </div>
    <child-comp :msg="msgText" :obj="mm" :add="add">

    </child-comp>
<div>{{ count }}</div>

</template>