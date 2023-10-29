import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
// import VueDisqus from 'vue-disqus'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()

pinia.use(({ store }) => {
    store.router = markRaw(router)
})

// app.use(VueDisqus, { shortname: 'https://crypto-ndenvwldac.disqus.com/embed.js'})
app.use(pinia)
app.use(router)

app.mount('#app')
