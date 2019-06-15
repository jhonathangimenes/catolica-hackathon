<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex v-for="curso in filtrarCursos" md4 :key="curso.id">
        <Card :cursoInfo="curso"/>
      </v-flex>
      <h2 v-if="filtrarCursos.length === 0" class="error">Nenhum curso cadastrado!</h2>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  components: {
    Card: () => import("../components/cursos/Card")
  },
  computed: {
    filtrarCursos() {
      return this.cursos.filter(curso => {
        return curso.area.toLowerCase() === this.$route.params.area;
      });
    }
  },
  data: () => ({
    loading: true,
    cursos: [
      {
        id: 0,
        nome: "Sistemas de informação",
        area: "Exatas",
        info:
          "O objetivo do curso é formar profissionais capazes de atuar na área de Tecnologia da Informação, criando soluções tecnológicas para determinar o fluxo de informações. O foco do curso está no desenvolvimento de software e no gerenciamento de sistemas informatizados.",
        imagem: require("../assets/img/cursos/sistemas_informacao.jpg")
      },
      {
        id: 1,
        nome: "Ciências da computação",
        area: "Exatas",
        info:
          "O curso de Ciência da Computação, também chamado de Ciências da Computação, possui muitas disciplinas de Matemática e boa parte da estrutura curricular é composta por disciplinas destinadas ao aprendizado das linguagens de programação mais utilizadas.",
        imagem: require("../assets/img/cursos/ciencia_computacao.jpg")
      },
      {
        id: 2,
        nome: "Engenharia de produção",
        area: "Exatas",
        info:
          "O curso superior em Engenharia de Produção tem duração média de 5 anos e pode ser encontrado nas modalidades de ensino a distância e presencial. Algumas faculdades de tradição, como a Anhanguera, oferecem o curso nas duas opções. O conteúdo, a duração e a validade do diploma são idênticos!",
        imagem: require("../assets/img/cursos/engenharia_producao.jpg")
      },
      {
        id: 3,
        nome: "História",
        area: "Humanas",
        info:
          "O curso superior em Engenharia de Produção tem duração média de 5 anos e pode ser encontrado nas modalidades de ensino a distância e presencial. Algumas faculdades de tradição, como a Anhanguera, oferecem o curso nas duas opções. O conteúdo, a duração e a validade do diploma são idênticos!",
        imagem: require("../assets/img/cursos/historia.jpg")
      },
      {
        id: 4,
        nome: "Filosofia",
        area: "Humanas",
        info:
          "O curso superior em Engenharia de Produção tem duração média de 5 anos e pode ser encontrado nas modalidades de ensino a distância e presencial. Algumas faculdades de tradição, como a Anhanguera, oferecem o curso nas duas opções. O conteúdo, a duração e a validade do diploma são idênticos!",
        imagem: require("../assets/img/cursos/filosofia.jpg")
      },
      {
        id: 5,
        nome: "Sociologia",
        area: "Humanas",
        info:
          "O curso superior em Engenharia de Produção tem duração média de 5 anos e pode ser encontrado nas modalidades de ensino a distância e presencial. Algumas faculdades de tradição, como a Anhanguera, oferecem o curso nas duas opções. O conteúdo, a duração e a validade do diploma são idênticos!",
        imagem: require("../assets/img/cursos/sociologia.jpg")
      },
      {
        id: 6,
        nome: "Medicina",
        area: "Biologicas",
        info:
          "O curso superior em Engenharia de Produção tem duração média de 5 anos e pode ser encontrado nas modalidades de ensino a distância e presencial. Algumas faculdades de tradição, como a Anhanguera, oferecem o curso nas duas opções. O conteúdo, a duração e a validade do diploma são idênticos!",
        imagem: require("../assets/img/cursos/medicina.jpg")
      },
      {
        id: 7,
        nome: "Educação física",
        area: "Biologicas",
        info:
          "O curso superior em Engenharia de Produção tem duração média de 5 anos e pode ser encontrado nas modalidades de ensino a distância e presencial. Algumas faculdades de tradição, como a Anhanguera, oferecem o curso nas duas opções. O conteúdo, a duração e a validade do diploma são idênticos!",
        imagem: require("../assets/img/cursos/educacao_fisica.jpg")
      },
      {
        id: 8,
        nome: "Fisioterapia",
        area: "Biologicas",
        info:
          "O curso superior em Engenharia de Produção tem duração média de 5 anos e pode ser encontrado nas modalidades de ensino a distância e presencial. Algumas faculdades de tradição, como a Anhanguera, oferecem o curso nas duas opções. O conteúdo, a duração e a validade do diploma são idênticos!",
        imagem: require("../assets/img/cursos/fisioterapia.jpg")
      }
    ]
  })
};
</script>

<style scoped>
  .grid-list-md {
    margin-top: 0px!important;
    padding: 0px!important;
  }
</style>

