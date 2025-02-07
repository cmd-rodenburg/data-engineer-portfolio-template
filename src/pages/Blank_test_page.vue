<script setup lang="ts">
import NavigationBar from '../components/Layout/NavigationBar.vue';
import DomainExamples from '../components/Sections/Business/DomainExamples.vue'
// import PersonalisedSection from '../components/Sections/Business/PersonalisedSection.vue'
import ContactSection from './../components/ContactSection.vue';
</script>

<template>
  <div class="min-h-screen">
    <NavigationBar />
    <main class="main-content">
      <DomainExamples />
      <ContactSection />
    </main>
  </div>
</template>
