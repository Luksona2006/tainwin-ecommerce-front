import '@/index.css'
import '@/config/vee-validate/messages.js'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueTelInput from 'vue-tel-input'
import 'vue-tel-input/vue-tel-input.css'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from '@/App.vue'
import router from '@/router'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(VueTelInput)
app.use(pinia)
app.use(router)

app.mount('#app')
