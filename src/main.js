import router from '@/router'
import { createPinia } from 'pinia'

import { createApp } from 'vue'
import App from './App.vue'

const pinia = createPinia()

createApp(App).use(pinia).use(router).mount('#app')
