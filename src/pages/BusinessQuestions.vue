<script setup lang="ts">
import BusinessQuestionsSection from '../components/BusinessQuestionsSection.vue'
import NavigationBar from '../components/_NavigationBar.vue'
</script>

<template>
  <div class="page-wrapper">
    <NavigationBar />
    <main class="main-content">
      <BusinessQuestionsSection />
    </main>
  </div>
</template>

<style scoped>
.page-wrapper {
  min-height: 100vh;
  background-color: rgb(64, 215, 18);
}

.main-content {
  padding-top: 4rem;
}
</style>