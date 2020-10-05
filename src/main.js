import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Import the global styling
import './styles/basics/base.scss'

// Import video.js styling
import 'video.js/dist/video-js.css'

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
