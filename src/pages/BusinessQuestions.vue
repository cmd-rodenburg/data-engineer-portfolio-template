<script setup lang="ts">
import SolutionsSection from '../components/Sections/Business/SolutionsSection.vue'
import PersonalisedSection from '../components/Sections/Business/PersonalisedSection.vue'
import NavigationBar from '../components/_NavigationBar.vue'
</script>

<template>
  <div class="min-h-screen">
    <NavigationBar />
    <main class="main-content">
      <SolutionsSection />
      <PersonalisedSection />
    </main>
  </div>
</template>
