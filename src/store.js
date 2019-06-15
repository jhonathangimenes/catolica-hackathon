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
            nome: 'Católica do Tocantins',
            endereco: 'Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO',
            logo: 'img/faculdades/catolica.jpg',
            mensalidade: 'R$ 958,99',
            desconto: 'R$ 682,85'
          },
          {
            id: 1,
            nome: 'CEULP/ULBRA',
            endereco: 'Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO',
            logo: 'img/faculdades/ulbra.png',
            mensalidade: 'R$ 818,99',
            desconto: 'R$ 625,10'
          },
          {
            id: 2,
            nome: 'Faculdade Objetivo',
            endereco: 'Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO',
            logo: 'img/faculdades/objetivo.jpg',
            mensalidade: 'R$ 756,99',
            desconto: 'R$ 525,26'
          }
        ]
      },
      {
        id: 1,
        faculdades: [
          {
            id: 0,
            nome: 'Católica do Tocantins',
            endereco: 'Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO',
            logo: 'img/faculdades/catolica.jpg',
            mensalidade: 'R$ 858,99',
            desconto: 'R$ 582,85'
          },
          {
            id: 1,
            nome: 'CEULP/ULBRA',
            endereco: 'Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO',
            logo: 'img/faculdades/ulbra.png',
            mensalidade: 'R$ 718,99',
            desconto: 'R$ 525,10'
          },
          {
            id: 2,
            nome: 'Faculdade Objetivo',
            endereco: 'Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO',
            logo: 'img/faculdades/objetivo.jpg',
            mensalidade: 'R$ 656,99',
            desconto: 'R$ 425,26'
          }
        ]
      },
      {
        id: 2,
        faculdades: [
          {
            id: 0,
            nome: 'Católica do Tocantins',
            endereco: 'Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO',
            logo: 'img/faculdades/catolica.jpg',
            mensalidade: 'R$ 1008,99',
            desconto: 'R$ 882,85'
          },
          {
            id: 1,
            nome: 'CEULP/ULBRA',
            endereco: 'Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO',
            logo: 'img/faculdades/ulbra.png',
            mensalidade: 'R$ 938,99',
            desconto: 'R$ 765,10'
          },
          {
            id: 2,
            nome: 'Faculdade Objetivo',
            endereco: 'Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO',
            logo: 'img/faculdades/objetivo.jpg',
            mensalidade: 'R$ 896,99',
            desconto: 'R$ 755,26'
          }
        ]
      },
      {
        id: 3,
        faculdades: [
          {
            id: 0,
            nome: 'Católica do Tocantins',
            endereco: 'Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO',
            logo: 'img/faculdades/catolica.jpg',
            mensalidade: 'R$ 668,99',
            desconto: 'sem desconto'
          },
          {
            id: 1,
            nome: 'CEULP/ULBRA',
            endereco: 'Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO',
            logo: 'img/faculdades/ulbra.png',
            mensalidade: 'R$ 898,99',
            desconto: 'sem desconto'
          },
          {
            id: 2,
            nome: 'Faculdade Objetivo',
            endereco: 'Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO',
            logo: 'img/faculdades/objetivo.jpg',
            mensalidade: 'R$ 556,99',
            desconto: 'sem desconto'
          }
        ]
      },
      {
        id: 4,
        faculdades: [
          {
            id: 0,
            nome: 'Católica do Tocantins',
            endereco: 'Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO',
            logo: 'img/faculdades/catolica.jpg',
            mensalidade: 'R$ 1208,99',
            desconto: 'sem desconto'
          },
          {
            id: 1,
            nome: 'CEULP/ULBRA',
            endereco: 'Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO',
            logo: 'img/faculdades/ulbra.png',
            mensalidade: 'R$ 998,99',
            desconto: 'sem desconto'
          },
          {
            id: 2,
            nome: 'Faculdade Objetivo',
            endereco: 'Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO',
            logo: 'img/faculdades/objetivo.jpg',
            mensalidade: 'R$ 996,99',
            desconto: 'sem desconto'
          }
        ]
      },
      {
        id: 5,
        faculdades: [
          {
            id: 0,
            nome: 'Católica do Tocantins',
            endereco: 'Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO',
            logo: 'img/faculdades/catolica.jpg',
            mensalidade: 'R$ 1008,99',
            desconto: 'sem desconto'
          },
          {
            id: 1,
            nome: 'CEULP/ULBRA',
            endereco: 'Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO',
            logo: 'img/faculdades/ulbra.png',
            mensalidade: 'R$ 778,99',
            desconto: 'sem desconto'
          },
          {
            id: 2,
            nome: 'Faculdade Objetivo',
            endereco: 'Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO',
            logo: 'img/faculdades/objetivo.jpg',
            mensalidade: 'R$ 856,99',
            desconto: 'sem desconto'
          }
        ]
      },
      {
        id: 6,
        faculdades: [
          {
            id: 0,
            nome: 'Católica do Tocantins',
            endereco: 'Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO',
            logo: 'img/faculdades/catolica.jpg',
            mensalidade: 'R$ 1018,99',
            desconto: 'R$ 982,85'
          },
          {
            id: 1,
            nome: 'CEULP/ULBRA',
            endereco: 'Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO',
            logo: 'img/faculdades/ulbra.png',
            mensalidade: 'R$ 998,99',
            desconto: 'R$ 945,10'
          },
          {
            id: 2,
            nome: 'Faculdade Objetivo',
            endereco: 'Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO',
            logo: 'img/faculdades/objetivo.jpg',
            mensalidade: 'R$ 856,99',
            desconto: 'R$ 775,26'
          }
        ]
      },
      {
        id: 7,
        faculdades: [
          {
            id: 0,
            nome: 'Católica do Tocantins',
            endereco: 'Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO',
            logo: 'img/faculdades/catolica.jpg',
            mensalidade: 'R$ 936,99',
            desconto: 'R$ 852,85'
          },
          {
            id: 1,
            nome: 'CEULP/ULBRA',
            endereco: 'Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO',
            logo: 'img/faculdades/ulbra.png',
            mensalidade: 'R$ 999,99',
            desconto: 'R$ 935,10'
          },
          {
            id: 2,
            nome: 'Faculdade Objetivo',
            endereco: 'Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO',
            logo: 'img/faculdades/objetivo.jpg',
            mensalidade: 'R$ 956,99',
            desconto: 'R$ 895,26'
          }
        ]
      },
      {
        id: 8,
        faculdades: [
          {
            id: 0,
            nome: 'Católica do Tocantins',
            endereco: 'Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO',
            logo: 'img/faculdades/catolica.jpg',
            mensalidade: 'R$ 958,99',
            desconto: 'R$ 902,85'
          },
          {
            id: 1,
            nome: 'CEULP/ULBRA',
            endereco: 'Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO',
            logo: 'img/faculdades/ulbra.png',
            mensalidade: 'R$ 918,99',
            desconto: 'R$ 865,10'
          },
          {
            id: 2,
            nome: 'Faculdade Objetivo',
            endereco: 'Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO',
            logo: 'img/faculdades/objetivo.jpg',
            mensalidade: 'R$ 956,99',
            desconto: 'R$ 915,26'
          }
        ]
      }
    ],
    cursosDesc: [
      {
        id: 0,
        nome: 'Sistemas de informação',
        area: 'Exatas',
        info:
          'O objetivo do curso é formar profissionais capazes de atuar na área de Tecnologia da Informação, criando soluções tecnológicas para determinar o fluxo de informações. O foco do curso está no desenvolvimento de software e no gerenciamento de sistemas informatizados.',
        imagem: require('./assets/img/cursos/sistemas_informacao.jpg')
      },
      {
        id: 1,
        nome: 'Ciências da computação',
        area: 'Exatas',
        info:
          'O curso de Ciência da Computação, também chamado de Ciências da Computação, possui muitas disciplinas de Matemática e boa parte da estrutura curricular é composta por disciplinas destinadas ao aprendizado das linguagens de programação mais utilizadas.',
        imagem: require('./assets/img/cursos/ciencia_computacao.jpg')
      },
      {
        id: 2,
        nome: 'Engenharia de produção',
        area: 'Exatas',
        info:
          'O curso superior em Engenharia de Produção tem duração média de 5 anos e pode ser encontrado nas modalidades de ensino a distância e presencial. Algumas faculdades de tradição, como a Anhanguera, oferecem o curso nas duas opções. O conteúdo, a duração e a validade do diploma são idênticos!',
        imagem: require('./assets/img/cursos/engenharia_producao.jpg')
      },
      {
        id: 3,
        nome: 'História',
        area: 'Humanas',
        info:
          'O curso superior em Engenharia de Produção tem duração média de 5 anos e pode ser encontrado nas modalidades de ensino a distância e presencial. Algumas faculdades de tradição, como a Anhanguera, oferecem o curso nas duas opções. O conteúdo, a duração e a validade do diploma são idênticos!',
        imagem: require('./assets/img/cursos/historia.jpg')
      },
      {
        id: 4,
        nome: 'Comunicação social',
        area: 'Humanas',
        info:
          'O curso superior em Engenharia de Produção tem duração média de 5 anos e pode ser encontrado nas modalidades de ensino a distância e presencial. Algumas faculdades de tradição, como a Anhanguera, oferecem o curso nas duas opções. O conteúdo, a duração e a validade do diploma são idênticos!',
        imagem: require('./assets/img/cursos/comunicacao_social.jpg')
      },
      {
        id: 5,
        nome: 'Sociologia',
        area: 'Humanas',
        info:
          'O curso superior em Engenharia de Produção tem duração média de 5 anos e pode ser encontrado nas modalidades de ensino a distância e presencial. Algumas faculdades de tradição, como a Anhanguera, oferecem o curso nas duas opções. O conteúdo, a duração e a validade do diploma são idênticos!',
        imagem: require('./assets/img/cursos/sociologia.jpg')
      },
      {
        id: 6,
        nome: 'Medicina',
        area: 'Biologicas',
        info:
          'O curso superior em Engenharia de Produção tem duração média de 5 anos e pode ser encontrado nas modalidades de ensino a distância e presencial. Algumas faculdades de tradição, como a Anhanguera, oferecem o curso nas duas opções. O conteúdo, a duração e a validade do diploma são idênticos!',
        imagem: require('./assets/img/cursos/medicina.jpg')
      },
      {
        id: 7,
        nome: 'Educação física',
        area: 'Biologicas',
        info:
          'O curso superior em Engenharia de Produção tem duração média de 5 anos e pode ser encontrado nas modalidades de ensino a distância e presencial. Algumas faculdades de tradição, como a Anhanguera, oferecem o curso nas duas opções. O conteúdo, a duração e a validade do diploma são idênticos!',
        imagem: require('./assets/img/cursos/educacao_fisica.jpg')
      },
      {
        id: 8,
        nome: 'Fisioterapia',
        area: 'Biologicas',
        info:
          'O curso superior em Engenharia de Produção tem duração média de 5 anos e pode ser encontrado nas modalidades de ensino a distância e presencial. Algumas faculdades de tradição, como a Anhanguera, oferecem o curso nas duas opções. O conteúdo, a duração e a validade do diploma são idênticos!',
        imagem: require('./assets/img/cursos/fisioterapia.jpg')
      }
    ]
  },
  mutations: {},
  actions: {}
})
