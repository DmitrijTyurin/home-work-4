import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.directive('css', (el, bindings) => {
    el.style[bindings.arg] = bindings.value
})

app.use(router)

app.mount('#app')
