import { createRouter, createWebHashHistory } from 'vue-router'

import home from './views/home.vue'
import carApp from './views/car-app.vue'
import boardsPage from './views/boards-page.vue'
import boardApp from './views/board-app.vue'
import reviewApp from './views/review-app.vue'
import loginSignup from './views/login-signup.vue'
import userDetails from './views/user-details.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/boards/:id',
    name: 'board-app',
    component: boardApp
  },
  {
    path: '/boardsPage',
    name: 'boards-page',
    component: boardsPage
  },
  {
    path: '/boardApp',
    name: 'board-app',
    component: boardApp
  },
  {
    path: '/login',
    name: 'loginSignup',
    component: loginSignup
  },
  {
    path: '/user/:id',
    name: 'user-details',
    component: userDetails
  }
]


export const router = createRouter({
  routes,
  history: createWebHashHistory()
  // base: process.env.BASE_URL,
})

