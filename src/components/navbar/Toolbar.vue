<template>
  <v-toolbar dark color="primary" app>
    <v-toolbar-side-icon @click="$emit('menu')"></v-toolbar-side-icon>
    <router-link to="/">
      <v-toolbar-title class="white--text">Católica</v-toolbar-title>
    </router-link>
    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>apps</v-icon>
    </v-btn>
    <v-list-tile-avatar>
      <img src="https://randomuser.me/api/portraits/men/85.jpg">
    </v-list-tile-avatar>
  </v-toolbar>
</template>
