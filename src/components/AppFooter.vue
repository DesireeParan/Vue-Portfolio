<template>
  <v-footer
    height="64"
    class="custom-footer modern-footer"
  >
    <div class="mx-auto d-flex align-center modern-footer-content">
      <span class="footer-text">&copy; 2025 Maria Desiree Paran &mdash; Full Stack Developer</span>
      <v-spacer />
      <a
        v-for="item in items"
        :key="item.title"
        class="d-inline-block mx-2 social-link modern-social-link"
        :href="item.href"
        rel="noopener noreferrer"
        target="_blank"
        :title="item.title"
      >
        <v-icon
          :icon="item.icon"
          :size="24"
        />
      </a>
    </div>
  </v-footer>
</template>

<script setup>
import { footerItems as items } from '@/assets/js/script.js'
</script>

