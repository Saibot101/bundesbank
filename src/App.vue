<template>
  <v-app>
    <v-main>
      <v-app-bar elevation="4">
        <v-btn href="/">
          Bundesbank
        </v-btn>
      </v-app-bar>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>
