<script>
import {ref, watch}from 'vue'
export default{

    name:'SpeakComp',
    setup(){
        const ques=ref('')
        const answer=ref('')
        const gif=ref()


       async function getanswer(){
        answer.value='Thinking...'
        //获取数据
        const qingyunkeRes = await fetch(
        `http://124.223.90.239:8000/api/qingyunke?msg=${ques.value}`
      )
      //将数据转为JavaScript对象
      const qingyunkAns = await qingyunkeRes.json()
      return  qingyunkAns.data.msg
        }
        async function getGif() {
      const res = await fetch('https://yesno.wtf/api')
      const data = await res.json()
      return data.image
    }
        watch(ques,async()=>{
    
            if(ques.value.indexOf('？')  > -1){
             
                
                Promise.all([getanswer(),getGif()]).then(([resAnswer,resGif])=>{
                    answer.value=resAnswer
                    gif.value=resGif
                })
                
            }


        })


        
return{
        ques,
        answer,
        gif
    }
    }

}

</script>
<template>
    <div>
       <div>请输入问题<input type="text" v-model="ques"></div>
    
       <div >机械人：{{ answer }}</div>
      <img :src="gif" />
    </div>
</template>
