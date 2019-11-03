<template>
  <v-app>
    <v-content>
      <v-toolbar color="indigo">
        <v-toolbar-title>Learning Nuxt</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items>
          <v-btn text>
            <n-link to="/weather-app">Weather App</n-link>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <transition>
        <v-content>
          <nuxt />
        </v-content>
      </transition>
    </v-content>
  </v-app>
</template>

<script>
export default {}
</script>
<style>
a {
  text-decoration: none;
  color: white !important;
}
</style>
