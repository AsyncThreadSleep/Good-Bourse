import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// css样式
import '@/assets/style/basic.css'   // 基本样式
import '@/assets/style/media/576.css'   // 媒体查询
import '@/assets/style/media/768.css'   // 媒体查询
import '@/assets/style/media/992.css'   // 媒体查询
import '@/assets/style/media/1200.css'  // 媒体查询
import '@/assets/style/media/1920.css'  // 媒体查询

createApp(App).use(store).use(router).mount('#app')
