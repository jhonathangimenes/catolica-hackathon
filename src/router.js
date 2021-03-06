import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Faculdades from './views/Faculdades.vue'
import Cursos from './views/Cursos.vue'
import Form from './views/Form.vue'
import Painel from './views/Painel.vue'
import Vocacional from './views/Vocacional.vue'

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
      path: '/matricular/:cursoId/:faculdadeId',
      name: 'matricular',
      component: Form
    },
    {
      path: '/painel',
      name: 'painel',
      component: Painel
    },
    {
      path: '/vocacional',
      name: 'vocacional',
      component: Vocacional
    }
  ]
})
