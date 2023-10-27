import { createApp } from 'vue'
import router from './routes/router'
import './style.css'
import App from './App.vue'
import './assets/css/soft-ui-dashboard-tailwind.css'


createApp(App).use(router).mount('#app')
