import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Pages/Home.vue'
import BusinessQuestions from '../Pages/BusinessQuestions.vue'
import TestPage from '../Pages/Blank_test_page.vue'

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