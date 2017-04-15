import Vue from 'vue'
import Router from 'vue-router'
import Play from '@/views/Play'
import Create from '@/views/Create'
import About from '@/views/About'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Play
    },
    {
      path: '/play/:board',
      name: 'play',
      component: Play
    },
    {
      path: '/create',
      name: 'create',
      component: Create
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
