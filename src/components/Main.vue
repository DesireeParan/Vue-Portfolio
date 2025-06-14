<template>
  <v-container class="fill-height" fluid>
    <section class="profile-section d-flex align-center mb-8 flex-row" style="gap: 32px;">
      <v-img
        class="profile-img"
        height="320"
        width="320"
        src="@/assets/profile.png"
        alt="Profile Picture"
      />
      <div class="d-flex flex-column justify-center" style="flex:1;">
        <div class="profile-info">
          <h1 class="text-h2 font-weight-bold ">Maria Desiree Paran</h1>
          <div class="text-subtitle-1 mb-2">Full Stack Developer</div>
        </div>
        <div class="profile-actions mt-4">
          <v-btn class="gradient-btn primary-btn mr-4" href="#projects" large>View Projects</v-btn>
          <v-btn class="gradient-btn" href="#contact" large>Contact Me</v-btn>
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
            <v-card-actions class="justify-end align-end" style="position: relative; min-height: 48px;">
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
      <h2 class="text-h5 font-weight-bold mb-4">Contact</h2>
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
</template>

<script setup>
import { projects, skillGroups, showTooltip, logoRef, tooltipRef, tooltipStyle, updateTooltipPosition, contactForm, sending, sendStatus, submitMessage } from '@/assets/js/script.js'
</script>








