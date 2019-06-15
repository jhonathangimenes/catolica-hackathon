import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    alunos: [
      {
        nome: 'Jhonathan', 
        email: 'gimenesjhonathan@gmail.com', 
        senha: '123456',
        materias: [
          {
            nome: 'Português',
            nota: 9.5
          }
        ]
      }
    ],
    areas: [
      { 
        nome: 'Exatas',
        cursos: [
          {
            nomes: 'Ciência da Computação'
          },
          {
            nomes: 'Engenharia Civil'
          },
          {
            nomes: 'Sistema de informação'
          }
        ] 
      },
      { 
        nome: 'Humanas',
        cursos: [
          {
            nomes: 'Filosofia'
          },
          {
            nomes: 'Sociologia'
          }
        ] 
      },
      { 
        nome: 'Biologicas',
        cursos: [
          {
            nomes: 'Zoologia'
          },
          {
            nomes: 'Medicina'
          }
        ] 
      }

    ]
  },
  mutations: {

  },
  actions: {

  }
})
