import Vue from 'vue'
import VueRouter from 'vue-router'

const Index = () => import('@/views/index/Index')
const Blog = () => import('@/views/blog/Blog')
const Category = () => import('@/views/category/Category')
const Tag = () => import('@/views/tag/Tag')
const MessageBoard = () => import('@/views/messageboard/MessageBoard')
const Archive = () => import('@/views/archive/Archive')
const Link = () => import('@/views/link/Link')
const Donate = () => import('@/views/donate/Donate')
const About = () => import('@/views/about/About')

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/index' },
  { path: '/index', component: Index },
  { path: '/blog/:id', component: Blog },
  { path: '/type/:id', component: Category },
  { path: '/tag', component: Tag },
  { path: '/tag/:id', component: Tag },
  { path: '/messageboard', component: MessageBoard },
  { path: '/archive', component: Archive },
  { path: '/link', component: Link },
  { path: '/donate', component: Donate },
  { path: '/about', component: About }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})

export default router
