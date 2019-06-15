<template>
  <v-timeline dense align-top class="w-100">
    <v-timeline-item
      v-for="(item, i) in items"
      :key="i"
      :color="item.color"
      :icon="item.icon"
      fill-dot
    >
      <v-card :color="item.color" dark>
        <v-card-title >
          <span class="title">{{ item.name }}</span>
          <v-spacer></v-spacer>
          <v-progress-circular
            :rotate="360"
            :size="50"
            :value="30"
            :width="5"
            :color="item.colorProg"
          >30%</v-progress-circular>
        </v-card-title>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        name: "Exatas",
        color: "red lighten-2",
        icon: "fab fa-react",
        colorProg: "pink"
      },
      {
        name: "Humanas",
        color: "purple darken-1",
        icon: "fas fa-male",
        colorProg: "red"
      },
      {
        name: "Biológicas",
        color: "green lighten-1",
        icon: "fas fa-vial",
        colorProg: "primary"
      }
    ]
  })
};
</script>

<style>
  .w-100 {
    width: 100%!important;
  }
</style>
