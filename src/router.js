import Vue from 'vue'
import Router from 'vue-router'
import Play from './views/Play.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Play
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/play/:board',
      name: 'play',
      component: () => import('./views/Play.vue')
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('./views/Create.vue')
    }
  ]
})
