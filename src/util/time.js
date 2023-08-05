
import {ref}from 'vue'

     
const count =ref(10)
let ques =ref('')
let res=ref('')


    let timer=setInterval(()=>{
        if(count.value===0){
            clearInterval(timer)
        }else
        count.value--
        
    },1000)

    let co=1
    let tem=  function(){
       
        co++
       console.log(co)
        if(co%2===0)
            
      { clearInterval(timer)
        
        }else{
            timer=setInterval(()=>{
                if(count.value===0){
                    clearInterval(timer)
                }else
                count.value--
                
            },1000)
      }
    }

       
      
   
      
      export{count,tem,res,ques}
     

