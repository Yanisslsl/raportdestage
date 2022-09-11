import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Article1 from '../views/articles/Article1.vue'
import Article2 from '../views/articles/Article2.vue'
import Article3 from '../views/articles/Article3.vue'
import Article4 from '../views/articles/Article4.vue'
import Article5 from '../views/articles/Article5.vue'
import Article6 from '../views/articles/Article6.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    redirect: '/about',
  },
  {
    path: '/article1',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Article1
  },
  {
    path: '/article2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Article2
  },
  {
    path: '/article3',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Article3
  },
  {
    path: '/article4',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Article4
  },
  {
    path: '/article5',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Article5
  },
  {
    path: '/article6',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Article6
  },
  {
    path: '/about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  {
    path: '/contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Contact
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
