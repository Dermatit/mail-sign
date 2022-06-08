import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import AuthSection from './auth/AuthSection.vue'
import EmployeesPage from './employees/EmployeesPage.vue'

const routes = [
  {
    path: '/',
    name: 'authSection',
    component: AuthSection,
  },
  {
    path: '/employeeList',
    name: 'employeeList',
    component: EmployeesPage,
  },
  // { path: '*', redirect: '/' },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

const isAuth = false

router.beforeEach(to => {
  if (!isAuth) {
    to.name === 'employeeList'
  } else {
    return { name: 'authSection' }
  }
})

createApp(App).use(router).mount('#app')
