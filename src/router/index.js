import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/index/Index'
import Blog from '@/views/blog/Blog'
import Category from '@/views/category/Category'
import Tag from '@/views/tag/Tag'
import MessageBoard from '@/views/messageboard/MessageBoard'
import Archive from '@/views/archive/Archive'

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
  },
  {
    path: '/category/:id',
    component: Category
  },
  {
    path: '/tag/:id',
    component: Tag
  },
  {
    path: '/messageboard',
    component: MessageBoard
  },
  {
    path: '/archive',
    component: Archive
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior() {
    return {x: 0, y: 0}
  }
})

export default router