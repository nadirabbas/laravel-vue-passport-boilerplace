import Vue from 'vue'
import App from './App'
import router from './router'
import VueMeta from 'vue-meta'
import store from './store'

Vue.use(VueMeta, {
    refreshOnceOnNavigation: true
})


window.app = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app")
