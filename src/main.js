import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App';
import 'ant-design-vue/dist/antd.css';
import axios from 'axios';

const app = createApp(App);

const instance = axios.create();
instance.defaults.baseURL = '/beta'
app.config.globalProperties.$axios = instance;

instance.post('/user', {
	userName: 'kirin',
	passwd: 'admin',
}).then(() => {console.log('login')})
app.use(Antd).mount('#app');