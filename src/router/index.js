import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: '',
            component: () => import('@/pages/index/index')
        },
        {
            path: '/index',
            name: 'index',
            component: () => import("@/pages/index/index")
        },
        {
            path: '/sort',
            name: 'sort',
            component: () => import("@/pages/sort/sort")
        },
        {
            path: '/find',
            name: 'find',
            component: () => import("@/pages/find/find")
        },
        {
            path: '/shoppingcart',
            name: 'shoppingcart',
            component: () => import("@/pages/shoppingcart/shoppingcart")
        },
        {
            path: '/mine',
            name: 'mine',
            component: () => import("@/pages/mine/mine")
        },
    ]
})
