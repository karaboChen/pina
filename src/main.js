import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'


//npm i pinia-plugin-persistedstate  安裝
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const app = createApp(App)
//裝入這行
app.use(createPinia().use(piniaPluginPersistedstate))

app.mount('#app')
