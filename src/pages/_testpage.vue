<script setup lang="ts">
import NavigationBar from '../components/Layout/NavigationBar.vue';
// import DomainExamples from '../components/Sections/Business/DomainExamples.vue'
import Blog from '../components/Sections/Main/BlogSection.vue';
import Services from '../components/Sections/Business/ServicesSection.vue';

</script>

<template>
  <div class="min-h-screen">
    <NavigationBar />
    <main class="main-content">
      <ContactSection />
      <Services />
      <Blog />
      <OGform />
    </main>
  </div>
</template>
