import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Faculdades from './views/Faculdades.vue'
import Cursos from './views/Cursos.vue'
import Form from './views/Form.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/cursos/:area',
      component: Cursos
    },
    {
      path: '/faculdades/:id',
      name: 'faculdades',
      component: Faculdades
    },
    {
      path: '/matricular',
      name: 'matricular',
      component: Form
    }
  ]
})
