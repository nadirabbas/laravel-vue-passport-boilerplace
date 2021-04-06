import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: () => import(/* webpackChunkName: "home" */ "@/views/Home"),
            meta: {
                layout: 'guest'
            }
        }
    ]
})

export default router