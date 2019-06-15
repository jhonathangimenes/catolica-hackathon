<template>
  <v-toolbar dark color="primary" app>
    <v-toolbar-side-icon @click="$emit('menu')"></v-toolbar-side-icon>
    <router-link to="/">
      <v-toolbar-title class="white--text"></v-toolbar-title>
    </router-link>
    <v-spacer></v-spacer>
    <router-link to="/">
      <img :src="require('@/assets/logo.png')" width="100px" height="35px">
    </router-link>
  </v-toolbar>
</template>
