import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Snacks from '../views/Snacks.vue'
import SnackSingle from '../views/SnackSingle.vue'
import Chart from '../views/Chart.vue'
import OrderSuccess from '../views/OrderSuccess.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/snacks',
    name: 'Snacks',
    component: Snacks
  },
  {
    path: '/chart',
    name: 'Chart',
    component: Chart
  },
  {
    path: '/order-success',
    name: 'OrderSuccess',
    component: OrderSuccess
  },
  {
    path: '/snack/:id',
    name: 'SnackSingle',
    component: SnackSingle
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
