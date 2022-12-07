import '@/main';
import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import '@/permission';
import ElementPlus from '@/plugins/element-plus';
import components from '@/components';
import pageComponents from './components';

import '@/styles/index.scss';

createApp(App)
  .use(router)
  .use(ElementPlus)
  .use(components)
  .use(pageComponents)
  .mount('#app');
