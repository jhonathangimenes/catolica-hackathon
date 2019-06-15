<template>
  <v-container grid-list-md>
    <h2>Painel</h2>
    <v-layout row wrap text-xs-center>
      <v-flex xs6 v-for="materia in materias" :key="materia.id">
        <v-card color="blue-grey darken-4" class="white--text">
          <v-card-title primary-title>
            <div>
              <div class="headline">{{materia.nome}}</div>
              <Progress :value="materia.nota * 10"/>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  components: {
    Progress: () => import("../components/painel/Progress")
  },
  data: () => ({
    materias: [
      { id: 0, nome: "Português", nota: 8.0 },
      { id: 1, nome: "História", nota: 7.0 },
      { id: 2, nome: "Geografia", nota: 7.0 },
      { id: 3, nome: "Matemática", nota: 10.0 },
      { id: 4, nome: "Física", nota: 9.0 },
      { id: 5, nome: "Filosofia", nota: 9.0 }
    ]
  })
};
</script>

