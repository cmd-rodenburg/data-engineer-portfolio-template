<script setup lang="ts">
import NavigationBar from '../components/Layout/NavigationBar.vue'
import Header from '../components/Layout/Header.vue'
import IntroSection from '../components/Sections/Business/IntroSection.vue'
import FeaturedProjects from '../components/Sections/Business/ProjectsSection.vue'
import Services from '../components/Sections/Business/ServicesSection.vue'
import ContactSection from '../components/Sections/ContactSection.vue';
import Blog from '../components/Sections/Main/BlogSection.vue';
</script>

<template>
  <div class="min-h-screen">
    <NavigationBar />
    <Header imageSrc="/images/Background_contact.jpg" />
    <main class="main-content">
      <IntroSection />
      <FeaturedProjects />
      <Services />
      <Blog/>
      <ContactSection />
    </main>
  </div>
</template>
