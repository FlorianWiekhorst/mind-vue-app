import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from '../views/Home.vue'
import Dash from '../views/Dash.vue'
import Faq from '../views/Faq.vue'
import Login from '../views/Login.vue'
import Matches from '../views/Matches.vue'
import Questions from '../views/Questions.vue'
import Register from '../views/Register.vue'
import Settings from '../views/Settings.vue'
import Profil from '../views/Profil.vue'
import Feedback from '../views/Feedback.vue'
import Forgotpw from '../views/Forgotpw.vue'
import Member from '../views/Member.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/dash',
    name: 'Dash',
    component: Dash
  },
  {
    path: '/faq',
    name: 'Faq',
    component: Faq
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/matches',
    name: 'Matches',
    component: Matches
  },
  {
    path: '/questions',
    name: 'Questions',
    component: Questions
  },
  {
    path: '/profil',
    name: 'Profil',
    component: Profil
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  {
    path: '/forgotpw',
    name: 'Forgotpw',
    component: Forgotpw
  },
  {
    path: '/feedback',
    name: 'Feedback',
    component: Feedback
  },
  {
    path: '/member',
    name: 'Member',
    component: Member
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
