<template>
  <v-layout align-center justify-center row fill-height>
    <v-flex md4>
      <v-card>
        <v-layout justify-center>
          <v-avatar color="grey lighten-4" size="120">
            <img src="@/assets/img/avatar.jpg" alt="avatar">
          </v-avatar>
        </v-layout>
        <v-layout justify-center>
          <p class="font-weight-light display-1">Login</p>
        </v-layout>
        <v-layout justify-center>
          <v-btn fab dark small color="pink">
            <v-icon dark>fab fa-google</v-icon>
          </v-btn>
          <v-btn fab dark small color="deep-purple">
            <v-icon dark>fab fa-facebook-f</v-icon>
          </v-btn>
          <v-btn fab dark small color="blue">
            <v-icon dark>fab fa-twitter</v-icon>
          </v-btn>
        </v-layout>
        <v-text-field label="E-mail" required></v-text-field>
        <v-text-field label="Senha" required></v-text-field>
        <v-checkbox label="Lembre-me" required></v-checkbox>
        <v-layout justify-end>
          <v-btn to="/" class="primary">Entrar</v-btn>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<style scoped>
.v-card {
  padding: 20px;
}
</style>

