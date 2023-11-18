import './assets/main.css'
import 'virtual:uno.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useRegisterSW } from 'virtual:pwa-register/vue'

useRegisterSW()
import App from './App.vue'
import router from './router'
// import 'reset.css'
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
