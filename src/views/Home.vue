<template>
  <div class="w-100">
    <v-layout align-center justify-center>
      <v-flex md6>
        <v-card dark flat>
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/forest.jpg"
            gradient="to top, rgba(0,0,0,.44), rgba(0,0,0,.44)"
          >
            <v-container fill-height>
              <v-layout align-center>
                <p class="display-4 font-weight-regular mr-4">9.2</p>
                <v-layout column justify-end>
                  <div class="headline font-weight-light">Pedro</div>
                  <div class="text-uppercase font-weight-light">Score</div>
                </v-layout>
              </v-layout>
            </v-container>
          </v-img>
        </v-card>

        <v-timeline dense align-top class="w-100">
          <v-timeline-item
            v-for="(item, i) in items"
            :key="i"
            :color="item.color"
            :icon="item.icon"
            fill-dot
          >
            <v-card
              :color="item.color"
              dark
              @click="$router.push('/cursos/'+item.name.toLowerCase())"
            >
              <v-card-title>
                <span class="title">{{ item.name }}</span>
                <v-spacer></v-spacer>
                <Progress :value="item.value * 10" :color="item.colorProg"/>
              </v-card-title>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  components: {
    Progress: () => import("../components/painel/Progress")
  },
  data: () => ({
    items: [
      {
        name: "Exatas",
        color: "red lighten-2",
        icon: "fab fa-react",
        colorProg: "white",
        value: 8.0
      },
      {
        name: "Humanas",
        color: "purple darken-1",
        icon: "fas fa-male",
        colorProg: "white",
        value: 2.0
      },
      {
        name: "Biologicas",
        color: "green lighten-1",
        icon: "fas fa-vial",
        colorProg: "white",
        value: 5.0
      }
    ]
  })
};
</script>

<style>
.w-100 {
  width: 100% !important;
}
</style>
