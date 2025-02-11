<script setup lang="ts">
import NavigationBar from '../components/Layout/NavigationBar.vue';
// import DomainExamples from '../components/Sections/Business/DomainExamples.vue'
import ContactSection from '../components/Sections/ContactSection.vue';
</script>

<template>
  <div class="min-h-screen">
    <NavigationBar />
    <main class="main-content">
      <ContactSection />
      <OGform />
    </main>
  </div>
</template>
