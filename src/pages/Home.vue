<script setup lang="ts">
import TheNavbar from '../components/Layout/NavigationBar.vue';
import HeroSection from '../components/Sections/Main/HeroSection.vue';
import AboutSection from '../components/Sections/Main/AboutSection.vue';
import SkillsSection from '../components/Sections/Main/TechnicalSkillsSection.vue';
import ContactSection from '../components/Sections/ContactSection.vue';
</script>

<template>
  <div class="min-h-screen">
    <TheNavbar />
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
    </main>
  </div>
</template>