import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import './index.css'
import 'flowbite';
import './assets/fonts/Quicksand/Quicksand.css'
createApp(App).use(router).mount('#app')
