<template>
  <v-app>
    <v-app-bar app color="primary" dark flat>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
          @click="$router.push('/')"
        />
        <span>MyAdminApp</span>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/ClaudioVR?tab=repositories"
        target="_blank"
        text
      >
        <span class="custom-transform-class text-none">Claudio Rescigno</span>
        <v-icon right>mdi-github</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  created() {
    this.$store.dispatch("getUsers");
  },
  data: () => ({
    //
  }),
};
</script>
