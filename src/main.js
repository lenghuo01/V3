//为什么js中可以引入css
//import './assets/main.css'

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Main from '@/util/Login.vue'
const app=createApp(Main)
app.use(ElementPlus)
app.mount('#app')

