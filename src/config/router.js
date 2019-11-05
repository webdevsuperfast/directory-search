import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home'
import ErrorPage from '@/components/404'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/404',
    alias: '*',
    name: 'fourohfour',
    component: ErrorPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router