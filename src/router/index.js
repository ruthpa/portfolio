import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PanterasNegras from '../views/PanterasNegras'

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
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
