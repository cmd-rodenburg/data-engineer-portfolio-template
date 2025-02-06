<script setup lang="ts">
import TheNavbar from './../components/_NavigationBar.vue';
import HeroSection from './../components/HeroSection.vue';
import AboutSection from './../components/AboutSection.vue';
import SkillsSection from './../components/SkillsSection.vue';
import ProjectsSection from './../components/ProjectsSection.vue';
import ContactSection from './../components/ContactSection.vue';
</script>

<template>
  <div class="min-h-screen">
    <TheNavbar />
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  </div>
</template>