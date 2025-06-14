
<template>
  <v-app class="main-gradient-bg">
    <NavBar />
    <v-main>
      <Main />
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import AppFooter from './components/AppFooter.vue'
import Main from './components/Main.vue'
</script>
