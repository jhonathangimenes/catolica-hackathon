<template>
  <v-layout align-start>
    <v-expansion-panel>
      <v-expansion-panel-content v-for="faculdade in faculdades" :key="faculdade.nome">
        <template v-slot:header>
          <div>
            <v-avatar color="grey lighten-4" size="60">
              <img :src="require('../assets/'+faculdade.logo)" alt="avatar">
            </v-avatar>
            <span class="subheading ml-2">{{ faculdade.nome }}</span>
          </div>
        </template>
        <v-card>
          <v-card-text>
            <p>Mensalidade: {{ faculdade.mensalidade }}</p>
            <p class="font-weight-bold color-red">Com desconto: {{ faculdade.desconto }}</p>
            <p>{{ faculdade.endereco }}</p>
            <v-layout justify-end>
              <v-btn class="success">Matricule-se</v-btn>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      faculdades: [
        {
          nome: "Católica do Tocantins",
          endereco:
            "Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO",
          logo: "img/faculdades/catolica.jpg",
          mensalidade: "R$ 958,99",
          desconto: "R$ 682,85"
        },
        {
          nome: "CEULP/ULBRA",
          endereco:
            "Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO",
          logo: "img/faculdades/ulbra.png",
          mensalidade: "R$ 818,99",
          desconto: "R$ 625,10"
        },
        {
          nome: "Faculdade Objetivo",
          endereco:
            "Rodovia TO-050, Loteamento Coqueirinho, Lote 7, Cep: 77000-000 Palmas / TO",
          logo: "img/faculdades/objetivo.jpg",
          mensalidade: "R$ 756,99",
          desconto: "R$ 525,26"
        }
      ]
    };
  }
};
</script>


<style scoped>
.w-100 {
  width: 100%;
}
.color-red {
  color: red;
}
</style>
