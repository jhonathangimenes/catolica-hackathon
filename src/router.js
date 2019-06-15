<<<<<<< HEAD
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Faculdades from './views/Faculdades.vue';
import Cursos from './views/Cursos.vue'
=======
import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Faculdades from './views/Faculdades.vue';
import Cursos from './views/Cursos.vue'
>>>>>>> 8ae7671c494303e7bde61015df78a1f4574a8bdf

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
<<<<<<< HEAD
      path: '/:area',
      component: Cursos
=======
      path: '/faculdades',
      name: 'faculdades',
      component: Faculdades
>>>>>>> 8ae7671c494303e7bde61015df78a1f4574a8bdf
    }
  ]
})
