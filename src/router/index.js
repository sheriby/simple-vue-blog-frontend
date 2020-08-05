import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/index/Index'
import Blog from '@/views/blog/Blog'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: Index
  },
  {
    path: '/blog/:id',
    component: Blog
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router