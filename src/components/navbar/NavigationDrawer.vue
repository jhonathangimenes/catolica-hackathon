<template>
  <v-list dense>
    <v-list-tile>
      <v-list-tile-action>
        <v-icon>home</v-icon>
      </v-list-tile-action>
      <router-link to="/painel" class="link">
        <v-list-tile-title>Painel</v-list-tile-title>
      </router-link>
    </v-list-tile>
    <v-list-tile>
      <v-list-tile-action>
        <v-icon>account_circle</v-icon>
      </v-list-tile-action>
      <router-link to="/login" class="link">
        <v-list-tile-title>Logout</v-list-tile-title>
      </router-link>
    </v-list-tile>
  </v-list>
</template>

<script>
export default {
  data: () => ({
    admins: [["Management", "people_outline"], ["Settings", "settings"]],
    cruds: [
      ["Create", "add"],
      ["Read", "insert_drive_file"],
      ["Update", "update"],
      ["Delete", "delete"]
    ]
  })
};
</script>

<style scoped>
.link {
  text-decoration: none !important;
  color: rgba(0, 0, 0, 0.54);
  margin-top: 6px;
}
</style>

