<script setup lang="ts">
import NavigationBar from '../components/Layout/NavigationBar.vue'
import Header from '../components/Layout/Header.vue'
import IntroSection from '../components/Sections/Business/IntroSection.vue'
import DomainExamples from '../components/Sections/Business/DomainExamples.vue'
import PersonalisedSection from '../components/Sections/Business/PersonalisedSection.vue'
import ContactSection from './../components/ContactSection.vue';
</script>

<template>
  <div class="min-h-screen">
    <NavigationBar />
    <Header imageSrc="/images/Background_contact.jpg" />
    <main class="main-content">
      <IntroSection />
      <DomainExamples />
      <PersonalisedSection />
      <ContactSection />
    </main>
  </div>
</template>
