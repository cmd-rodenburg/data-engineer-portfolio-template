<script setup lang="ts">
import SolutionsSection from '../components/Sections/Business/SolutionsSection.vue'
import PersonalisedSection from '../components/Sections/Business/PersonalisedSection.vue'
import NavigationBar from '../components/_NavigationBar.vue'
import Header from '../components/Header.vue'
</script>

<template>
  <div class="min-h-screen">
    <NavigationBar />
    <Header imageSrc="/images/Background_contact.jpg" />
    <main class="main-content">
      <SolutionsSection />
      <PersonalisedSection />
    </main>
  </div>
</template>
