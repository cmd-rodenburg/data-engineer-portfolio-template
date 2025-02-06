<script setup lang="ts">
import BusinessQuestionsSection from '../components/BusinessQuestionsSection.vue'
import BusinessNeeds from '../components/BusinessNeeds.vue'
import NavigationBar from '../components/_NavigationBar.vue'
</script>

<template>
  <div class="min-h-screen">
    <NavigationBar />
    <main class="main-content">
      <BusinessQuestionsSection />
      <BusinessNeeds />
    </main>
  </div>
</template>
