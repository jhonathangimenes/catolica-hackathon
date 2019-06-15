<template>
  <v-layout justify-center align-start>
    <v-flex md6>
      <v-expansion-panel>
        <v-expansion-panel-content
          v-for="faculdade in cursos[$route.params.id].faculdades"
          :key="faculdade.nome"
        >
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
              <p class="my-0">Curso: {{ cursosDesc[$route.params.id].nome }}</p>
              <v-rating v-model="rating" background-color="orange lighten-3" color="orange" small></v-rating>
              <p>Mensalidade: {{ faculdade.mensalidade }}</p>
              <p
                class="font-weight-bold color-red"
              >{{ faculdade.desconto == 'sem desconto' ? 'Sem desconto' : 'Com desconto: ' + faculdade.desconto }}</p>
              <p>{{ faculdade.endereco }}</p>
              <v-layout justify-end>
                <v-btn
                  @click="$router.push(`/matricular/${$route.params.id}/${faculdade.id}`)"
                  class="success"
                >Matricule-se</v-btn>
              </v-layout>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      rating: 3
    };
  },
  computed: {
    ...mapState(["cursos", "cursosDesc"])
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
