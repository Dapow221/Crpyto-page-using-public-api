import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import CryptoPage from '../components/CryptoPage.vue'
import LoginPage from '../pages/LoginPage.vue'
import RegisterPage from '../pages/RegisterPage.vue'
import TopCoinsPage from '../components/TopCoinsPage.vue'
import FavoritePage from '../components/FavoritePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/crypto',
      name: 'CryptoPage',
      component: CryptoPage
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/register',
      name: 'RegisterPage',
      component: RegisterPage
    },
    {
      path: '/topcoins',
      name: 'TopCoinsPage',
      component: TopCoinsPage
    },
    {
      path: '/favorite',
      name: 'FavoritePage',
      component: FavoritePage
    }
  ]
})

router.beforeEach((to, from) => {
  if (
    localStorage.getItem('access_token') &&
    (to.name === 'LoginPage' || to.name === 'RegisterPage')
  ) {
    return { name: 'HomePage' }
  }
})

export default router
