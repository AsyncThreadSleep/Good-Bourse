import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// css样式
import '@/assets/style/basic.css'   // 基本样式
import '@/assets/style/media.css'   // 媒体查询

createApp(App).use(store).use(router).mount('#app')
