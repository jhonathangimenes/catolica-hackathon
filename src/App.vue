<template>
  <v-app>
    <NavBar/>

    <v-content>
      <v-layout v-if="$router.history.current.path != '/'" class="hidden-lg-and-up">
        <v-btn outline @click="$router.back()">
          <v-icon>arrow_back</v-icon>
        </v-btn>
      </v-layout>
      <v-container fluid fill-height>
        <transition name="list" mode="out-in">
          <router-view></router-view>
        </transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from "@/components/navbar/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar
  },
  created() {
    console.log(this.$router.history.current.path);
  },
  data() {
    return {
      //
    };
  }
};
</script>
<style scoped>
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateX(-70px);
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s;
}
.list-move {
  transition: all 0.5s;
}
.list-leave-active {
  position: absolute;
  width: calc(100% - 31px);
}
</style>
