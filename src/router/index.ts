import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import BusinessQuestions from '../pages/BusinessQuestions.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/business-questions',
    name: 'BusinessQuestions',
    component: BusinessQuestions
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router