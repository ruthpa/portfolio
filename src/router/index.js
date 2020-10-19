import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PanterasNegras from '../views/PanterasNegras'
import MomentsOfSuspension from '@/views/MomentsOfSuspension'
import SafeHeaven from '@/views/SafeHeaven'
import Dior from '@/views/Dior'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projects/panteras_negras',
    component: PanterasNegras,
    name: 'PanterasNegras'
  },
  {
    path: '/commissioned/dior',
    component: Dior,
    name: 'Dior'
  },
  {
    path: '/projects/moments_of_suspension',
    component: MomentsOfSuspension,
    name: 'MomentsOfSuspension'
  },
  {
    path: '/projects/safe_heaven',
    component: SafeHeaven,
    name: 'SafeHeaven'
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
