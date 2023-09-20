import './assets/main.css'
import 'virtual:uno.css'
import '@unocss/reset/normalize.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import { setupRouter } from './router'

const app = createApp(App)

app.use(createPinia())
setupRouter(app)

app.mount('#app')
