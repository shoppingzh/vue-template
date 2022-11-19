import '@/main'
import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import '@/permission'
import { createPinia } from 'pinia'
import ElementPlus from '@/plugins/element-plus'
import components from '@/components'

import './styles/index.scss'
import '@/icons/font/iconfont.css'

createApp(App)
  .use(router)
  .use(createPinia())
  .use(ElementPlus)
  .use(components)
  .mount('#app')
