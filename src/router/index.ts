import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import BusinessQuestions from '../pages/BusinessQuestions.vue'
import TestPage from '../pages/Blank_test_page.vue'

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
  },
  {
    path: '/test-page',
    name: 'TestPage',
    component: TestPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router