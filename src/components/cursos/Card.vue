<template>
  <v-card>
    <v-img :src="cursoInfo.imagem" height="150px"></v-img>

    <v-card-title primary-title>
      <div>
        <p class="headline">{{ cursoInfo.nome }}</p>
        <span class="grey--text ml-1">{{ cursoInfo.area }}</span>
      </div>
    </v-card-title>

    <v-card-actions>
      <v-btn flat color="success" @click="$router.push('/faculdades/'+cursoInfo.id)">Escolher</v-btn>

      <v-spacer></v-spacer>
      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-slide-y-transition>
      <v-card-text v-show="show">
        <p class="justify-text">{{ cursoInfo.info }}</p>
        <v-btn to="/vocacional" color="error" class="mx-0">Teste vocacional</v-btn>
      </v-card-text>
    </v-slide-y-transition>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    show: false
  }),
  props: {
    cursoInfo: {}
  }
};
</script>

<style scoped>
.headline {
  margin: 0px !important;
}
.justify-text {
  text-align: justify;
}
</style>
