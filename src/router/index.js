import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import {BasicLayout, RouteView} from '@/layouts'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: BasicLayout,
    children: [
        {
            path: 'list',
            name: 'list',
            component: () => import('@/views/user/list')
        }
    ]
},
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
