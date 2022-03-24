import { createApp } from 'vue'
import App from './App.vue'
import store from './stores'
import router from './router'
// import { message } from 'ant-design-vue';


const app = createApp(App as any)
app.use(router)
app.use(store)
// app.config.globalProperties.$message = message;
app.mount('#app')
