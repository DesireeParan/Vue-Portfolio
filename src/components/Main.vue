<template>
  <div>
    <div v-if="loading" class="page-loader">
    <!-- From Uiverse.io by Nawsome -->
    <div class="loader JS_on">
      <span class="binary"></span>
      <span class="binary"></span>
      <span class="getting-there">loading...</span>
    </div>
    </div>
    <v-container v-else class="fill-height" fluid>
      <section class="profile-section absolute-btn-layout">
        <div class="profile-absolute-btns">
          <v-btn class="gradient-btn primary-btn" href="#projects" large>View Projects</v-btn>
          <v-btn class="gradient-btn" href="#contact" large>Contact Me</v-btn>
        </div>
        <div class="profile-center-stack">
          <div class="profile-name-bg" style="top: -90px; font-size: 5.2rem;">
            <span style="display:block;">MARIA DESIREE</span>
            <span style="display:block;">BIONG &nbsp; PARAN</span>
          </div>
          <div class="profile-title-bg title-layered">SOFTWARE &nbsp; ENGINEER</div>
          <v-img
            class="profile-img front-img"
            height="480"
            width="480"
            src="@/assets/images/profile2.png"
            alt="Profile Picture"
          />
          <div class="profile-socials" style="margin-top: 18px; display: flex; justify-content: center; gap: 18px;">
            <a href="mailto:paranmariadesiree1@gmail.com" aria-label="Email">
              <v-icon size="36" color="#1976d2">mdi-email</v-icon>
            </a>
            <a href="https://linkedin.com/in/maria-desiree-paran" target="_blank" aria-label="LinkedIn"><v-icon size="36" color="#1976d2">mdi-linkedin</v-icon></a>
            <a href="https://github.com/DesireeParan" target="_blank" aria-label="GitHub"><v-icon size="36" color="#1976d2">mdi-github</v-icon></a>
          </div>
        </div>
      </section>


      <v-divider class="my-6" />

      <section class="project-section" id="projects">
        <h2 class="text-h5 font-weight-bold mb-4">Projects</h2>
        <v-row>
          <v-col cols="12" md="6" lg="4" v-for="project in projects" :key="project.title">
            <v-card class="project-card mb-6 mx-auto" max-width="400" elevation="10">
              <v-img
                :src="project.image"
                height="180"
                class="project-card-img"
                cover
              />
              <v-card-title class="project-title">{{ project.title }}</v-card-title>
              <div class="project-role ms-4">Role: {{ project.role }}</div>
              <v-card-text class="project-desc">{{ project.description }}</v-card-text>
              <div class="project-tools ms-4">
                <v-chip
                  v-for="tool in project.tools"
                  :key="tool"
                  class="project-tool-chip"
                  variant="outlined"
                  size="small"
                >
                  {{ tool }}
                </v-chip>
              </div>
              <v-card-actions class="align-end" style="position: relative; min-height: 48px;">
                <v-card-subtitle class="text-caption" style="color:#90caf9; position: absolute; left: 0; bottom: 8px;">{{ project.subtitle }}</v-card-subtitle>
                <v-btn :href="project.link" target="_blank" class="gradient-btn primary-btn" style="position: absolute; right: 16px; bottom: 8px;">view</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </section>

      <v-divider class="my-6" />

      <section class="skills-section" id="skills">
        <h2 class="text-h5 font-weight-bold mb-4">Skills</h2>
        <v-row>
          <v-col
            v-for="group in skillGroups"
            :key="group.group"
            cols="12"
            md="12"
            class="d-flex"
          >
            <v-card class="mb-6 flex-grow-1 skill-group-card" elevation="6">
              <v-card-title class="font-weight-bold">{{ group.group }}</v-card-title>
              <v-card-subtitle class="text-caption mb-2" style="color:#90caf9">{{ group.description }}</v-card-subtitle>
              <v-card-text>
                <div class="skills-icons-wrapper">
                  <div v-for="skill in group.skills" :key="skill.name" class="skill-icon-box">
                    <v-icon :icon="skill.icon" class="skill-icon"></v-icon>
                    <div class="skill-label">{{ skill.name }}</div>
                    <div class="text-caption" style="color:#b0bec5">{{ skill.desc }}</div>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </section>

      <v-divider class="my-6" />

      <section class="contact-section" id="contact">
        <h2 class="text-h5 font-weight-bold mb-4">Contact Me</h2>
        <div class="contact-flex-wrapper mt-6">
          <div class="contact-form-card-wrapper">
            <v-card class="contact-form-card" elevation="12">
              <v-form class="contact-form" @submit.prevent="submitMessage">
                <v-text-field
                  v-model="contactForm.subject"
                  label="Your Subject"
                  required
                  outlined
                  color="primary"
                  class="mb-3"
                />
                <v-text-field
                  v-model="contactForm.name"
                  label="Your Name"
                  required
                  outlined
                  color="primary"
                  class="mb-3"
                />
                <v-text-field
                  v-model="contactForm.email"
                  label="Your Email"
                  required
                  outlined
                  color="primary"
                  class="mb-3"
                />
                <v-textarea
                  v-model="contactForm.message"
                  label="Your Message"
                  required
                  outlined
                  color="primary"
                  class="mb-3"
                  rows="4"
                />
                <div class="d-flex justify-center mb-2">
                  <v-btn :loading="sending" type="submit" class="gradient-btn primary-btn" large>Send Message</v-btn>
                </div>
                <div v-if="sendStatus" class="text-center" :style="{ color: sendStatus === 'Message sent successfully!' ? '#43a047' : '#e53935' }">
                  {{ sendStatus }}
                </div>
              </v-form>
            </v-card>
          </div>
        </div>
      </section>
    </v-container>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { projects, skillGroups, showTooltip, logoRef, tooltipRef, tooltipStyle, updateTooltipPosition, contactForm, sending, sendStatus, submitMessage } from '@/assets/js/script.js'

const loading = ref(true)

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 5000) // 5 seconds loading time

  // Custom cursor logic
  const cursor = document.createElement('div')
  cursor.className = 'custom-cursor'
  document.body.appendChild(cursor)

  const moveCursor = (e) => {
    cursor.style.transform = `translate(${e.clientX - 16}px, ${e.clientY - 16}px)`
  }
  window.addEventListener('mousemove', moveCursor)

  // Clean up on unmount
  onUnmounted(() => {
    window.removeEventListener('mousemove', moveCursor)
    if (cursor && cursor.parentNode) cursor.parentNode.removeChild(cursor)
  })
})
</script>






