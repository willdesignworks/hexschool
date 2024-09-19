import { createApp } from 'vue';

// 套件vue-axios
import axios from 'axios';
import VueAxios from 'vue-axios';

import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(VueAxios, axios);
app.use(router); // 使用路由
app.mount('#app'); // 挂載應用
