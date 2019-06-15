<template>
  <v-container grid-list-md>
    <h2>Painel</h2>
    <v-layout row wrap>
      <v-flex md6 v-for="materia in materias" :key="materia.id">
        <v-card color="blue-grey darken-2" class="white--text">
          <v-card-title primary-title>
            <div>
              <div class="headline">{{materia.nome}}</div>
              <v-progress-circular
                :rotate="360"
                :size="65"
                :width="15"
                :value="materia.nota * 10"
                color="teal"
              >{{materia.nota * 10}}%</v-progress-circular>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    materias: [
      { id: 0, nome: "Português", nota: 8.0 },
      { id: 1, nome: "História", nota: 7.5 },
      { id: 2, nome: "Geografia", nota: 7.0 },
      { id: 3, nome: "Matemática", nota: 9.5 },
      { id: 4, nome: "Física", nota: 9.0 },
      { id: 5, nome: "Filosofia", nota: 9.8 }
    ]
  })
};
</script>

