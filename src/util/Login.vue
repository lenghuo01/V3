<script>
import{ref}from'vue'
import { ElMessage } from 'element-plus'
export default{
    name:'LogIn',
    
    setup(){
        const username='张三'
        const userpassword='123456'
        const err = () => {
  ElMessage({
    showClose: true,
    message: '用户名或密码错误！！！',
    type: 'error',
  })
}
        function bu(name,password){
            if(name===username&&password===userpassword){
                window.location.href="http://www.baidu.com"
            }else{
            err()
         
        }
        }

        const form=ref({
            name:'',
            password:''
        })

        

        return{
            form,
            bu
        }
    }
}


</script>
<template>
    <div  class="box1">
        <div class="First">
          
    </div>

    <div class="Second">
        <h1 >欢迎来到世界商店</h1>
       
         <el-form  :model="form" label-width="120px" >
    <el-form-item  label="用户名：">
      <el-input class="input1" v-model="form.name" placeholder="请输入您的用户名"/>
    </el-form-item>

    <el-form-item label="密码：">
      <el-input class="input1" v-model="form.password"
    type="password"
    placeholder="请输入您的密码"
    show-password>
      </el-input>
    </el-form-item>
    <el-form-item>
      
        <el-button @click="bu(form.name,form.password)">登录</el-button>
            
       
      
        
    </el-form-item>
    </el-form> 
    </div>
    </div> 
   
 
</template>

<style>
.First{
   

   height: 100vh;
   width: 50%;

background: url('https://img.zcool.cn/community/0142dd5ac1b73ca801218207b41dbd.jpg@1280w_1l_2o_100sh.jpg')
}
.Second{
   text-align: center;
    height: 100vh;
    width: 50%;


}
.box1{
    display: flex;
    justify-content: space-between;
}
body{
    margin: 0;
}
.Second h1{
    left: 1031px;
top: 160px;
width: 660px;
height: 78px;
opacity: 1;
/** 文本1 */
font-size: 56px;
font-weight: 700;
letter-spacing: 0px;
line-height: 65.63px;
color: rgba(73, 102, 223, 1);
text-align: center;
vertical-align: middle;
}
.input1{
    text-align: center;
    width: 400px;
}

</style>