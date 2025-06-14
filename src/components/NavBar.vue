<template>
  <v-app-bar
    flat
    class="navbar"
    style="position: static !important;"
  >
    <v-toolbar-title class="navbar-title">
      <v-icon class="mr-2 programmer-icon">mdi-code-tags</v-icon>
      My Portfolio
    </v-toolbar-title>
    <v-spacer />
    <v-btn
      v-for="item in navItems"
      :key="item.title"
      :href="item.to"
      text
      class="navbar-link"
    >
      {{ item.title }}
    </v-btn>
  </v-app-bar>
</template>

<script setup>
import { navItems } from '@/assets/js/script.js'
</script>
