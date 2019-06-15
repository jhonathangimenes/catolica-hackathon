import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cursos: [
      {
        id: 0,
        faculdades: [
          {
            id: 0,
            nome: "Católica do Tocantins",
            endereco:
              "Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO",
            logo: "img/faculdades/catolica.jpg",
            mensalidade: "R$ 958,99",
            desconto: "R$ 682,85"
          },
          {
            id: 1,
            nome: "CEULP/ULBRA",
            endereco:
              "Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO",
            logo: "img/faculdades/ulbra.png",
            mensalidade: "R$ 818,99",
            desconto: "R$ 625,10"
          },
          {
            id: 2,
            nome: "Faculdade Objetivo",
            endereco:
              "Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO",
            logo: "img/faculdades/objetivo.jpg",
            mensalidade: "R$ 756,99",
            desconto: "R$ 525,26"
          }
        ]
      },
      {
        id: 1,
        faculdades: [
          {
            id: 3,
            nome: "Católica do Tocantins",
            endereco:
              "Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO",
            logo: "img/faculdades/catolica.jpg",
            mensalidade: "R$ 858,99",
            desconto: "R$ 582,85"
          },
          {
            id: 4,
            nome: "CEULP/ULBRA",
            endereco:
              "Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO",
            logo: "img/faculdades/ulbra.png",
            mensalidade: "R$ 718,99",
            desconto: "R$ 525,10"
          },
          {
            id: 5,
            nome: "Faculdade Objetivo",
            endereco:
              "Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO",
            logo: "img/faculdades/objetivo.jpg",
            mensalidade: "R$ 656,99",
            desconto: "R$ 425,26"
          }
        ]
      },
      {
        id: 2,
        faculdades: [
          {
            id: 6,
            nome: "Católica do Tocantins",
            endereco:
              "Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO",
            logo: "img/faculdades/catolica.jpg",
            mensalidade: "R$ 1008,99",
            desconto: "R$ 882,85"
          },
          {
            id: 7,
            nome: "CEULP/ULBRA",
            endereco:
              "Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO",
            logo: "img/faculdades/ulbra.png",
            mensalidade: "R$ 938,99",
            desconto: "R$ 765,10"
          },
          {
            id: 8,
            nome: "Faculdade Objetivo",
            endereco:
              "Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO",
            logo: "img/faculdades/objetivo.jpg",
            mensalidade: "R$ 896,99",
            desconto: "R$ 755,26"
          }
        ]
      },
      {
        id: 3,
        faculdades: [
          {
            id: 9,
            nome: "Católica do Tocantins",
            endereco:
              "Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO",
            logo: "img/faculdades/catolica.jpg",
            mensalidade: "R$ 668,99",
            desconto: "sem desconto"
          },
          {
            id: 10,
            nome: "CEULP/ULBRA",
            endereco:
              "Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO",
            logo: "img/faculdades/ulbra.png",
            mensalidade: "R$ 898,99",
            desconto: "sem desconto"
          },
          {
            id: 11,
            nome: "Faculdade Objetivo",
            endereco:
              "Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO",
            logo: "img/faculdades/objetivo.jpg",
            mensalidade: "R$ 556,99",
            desconto: "sem desconto"
          }
        ]
      },
      {
        id: 4,
        faculdades: [
          {
            id: 12,
            nome: "Católica do Tocantins",
            endereco:
              "Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO",
            logo: "img/faculdades/catolica.jpg",
            mensalidade: "R$ 1208,99",
            desconto: "sem desconto"
          },
          {
            id: 13,
            nome: "CEULP/ULBRA",
            endereco:
              "Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO",
            logo: "img/faculdades/ulbra.png",
            mensalidade: "R$ 998,99",
            desconto: "sem desconto"
          },
          {
            id: 14,
            nome: "Faculdade Objetivo",
            endereco:
              "Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO",
            logo: "img/faculdades/objetivo.jpg",
            mensalidade: "R$ 996,99",
            desconto: "sem desconto"
          }
        ]
      },
      {
        id: 5,
        faculdades: [
          {
            id: 15,
            nome: "Católica do Tocantins",
            endereco:
              "Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO",
            logo: "img/faculdades/catolica.jpg",
            mensalidade: "R$ 1008,99",
            desconto: "sem desconto"
          },
          {
            id: 16,
            nome: "CEULP/ULBRA",
            endereco:
              "Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO",
            logo: "img/faculdades/ulbra.png",
            mensalidade: "R$ 778,99",
            desconto: "sem desconto"
          },
          {
            id: 17,
            nome: "Faculdade Objetivo",
            endereco:
              "Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO",
            logo: "img/faculdades/objetivo.jpg",
            mensalidade: "R$ 856,99",
            desconto: "sem desconto"
          }
        ]
      },
      {
        id: 6,
        faculdades: [
          {
            id: 18,
            nome: "Católica do Tocantins",
            endereco:
              "Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO",
            logo: "img/faculdades/catolica.jpg",
            mensalidade: "R$ 1018,99",
            desconto: "R$ 982,85"
          },
          {
            id: 19,
            nome: "CEULP/ULBRA",
            endereco:
              "Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO",
            logo: "img/faculdades/ulbra.png",
            mensalidade: "R$ 998,99",
            desconto: "R$ 945,10"
          },
          {
            id: 20,
            nome: "Faculdade Objetivo",
            endereco:
              "Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO",
            logo: "img/faculdades/objetivo.jpg",
            mensalidade: "R$ 856,99",
            desconto: "R$ 775,26"
          }
        ]
      },
      {
        id: 7,
        faculdades: [
          {
            id: 21,
            nome: "Católica do Tocantins",
            endereco:
              "Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO",
            logo: "img/faculdades/catolica.jpg",
            mensalidade: "R$ 936,99",
            desconto: "R$ 852,85"
          },
          {
            id: 22,
            nome: "CEULP/ULBRA",
            endereco:
              "Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO",
            logo: "img/faculdades/ulbra.png",
            mensalidade: "R$ 999,99",
            desconto: "R$ 935,10"
          },
          {
            id: 23,
            nome: "Faculdade Objetivo",
            endereco:
              "Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO",
            logo: "img/faculdades/objetivo.jpg",
            mensalidade: "R$ 956,99",
            desconto: "R$ 895,26"
          }
        ]
      },
      {
        id: 8,
        faculdades: [
          {
            id: 24,
            nome: "Católica do Tocantins",
            endereco:
              "Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO",
            logo: "img/faculdades/catolica.jpg",
            mensalidade: "R$ 958,99",
            desconto: "R$ 902,85"
          },
          {
            id: 25,
            nome: "CEULP/ULBRA",
            endereco:
              "Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO",
            logo: "img/faculdades/ulbra.png",
            mensalidade: "R$ 918,99",
            desconto: "R$ 865,10"
          },
          {
            id: 26,
            nome: "Faculdade Objetivo",
            endereco:
              "Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO",
            logo: "img/faculdades/objetivo.jpg",
            mensalidade: "R$ 956,99",
            desconto: "R$ 915,26"
          }
        ]
      },
    ]
  },
  mutations: {

  },
  actions: {

  }
})
