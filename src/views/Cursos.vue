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
import { mapState } from "vuex";
export default {
  components: {
    Card: () => import("../components/cursos/Card")
  },
  computed: {
    ...mapState(["cursosDesc"]),
    filtrarCursos() {
      return this.cursosDesc.filter(curso => {
        return curso.area.toLowerCase() === this.$route.params.area;
      });
    }
  },
  data: () => ({
    loading: true
  })
};
</script>

<style scoped>
.grid-list-md {
  margin-top: 0px !important;
  padding: 0px !important;
}
</style>

