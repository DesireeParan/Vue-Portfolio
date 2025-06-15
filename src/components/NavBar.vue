<template>
  <v-app-bar
    flat
    class="navbar"
    style="position: static !important;"
  >
    <v-toolbar-title class="navbar-title">
      <v-icon class="mr-2 programmer-icon">mdi-code-tags</v-icon>
      DESIREE PARAN
    </v-toolbar-title>
    <v-spacer />
    <div style="position: relative;">
      <v-btn
        class="navbar-burger d-md-none"
        icon
        @click="showMenu = !showMenu"
        aria-label="Open navigation menu"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <transition name="fade">
        <div
          v-if="showMenu"
          class="navbar-mobile-menu d-md-none"
          @mouseleave="showMenu = false"
        >
          <v-btn
            v-for="item in navItems"
            :key="item.title"
            :href="item.to"
            text
            class="navbar-link mobile-menu-link"
            block
            @mousedown="showMenu = false"
          >
            {{ item.title }}
          </v-btn>
        </div>
      </transition>
    </div>
    <div class="navbar-links d-none d-md-flex">
      <v-btn
        v-for="item in navItems"
        :key="item.title"
        :href="item.to"
        text
        class="navbar-link"
      >
        {{ item.title }}
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { navItems } from '@/assets/js/script.js'
const showMenu = ref(false)

function closeMenuOnScroll() {
  showMenu.value = false
}

function handleClickOutside(event) {
  const burger = document.querySelector('.navbar-burger')
  const menu = document.querySelector('.navbar-mobile-menu')
  if (
    showMenu.value &&
    menu &&
    !menu.contains(event.target) &&
    burger &&
    !burger.contains(event.target)
  ) {
    showMenu.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', closeMenuOnScroll)
  window.addEventListener('click', handleClickOutside)
})
onUnmounted(() => {
  window.removeEventListener('scroll', closeMenuOnScroll)
  window.removeEventListener('click', handleClickOutside)
})
</script>


