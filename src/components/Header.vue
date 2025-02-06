<template>
  <header class="header">
    <img :src="imageSrc" alt="Header Image" class="header-image" />
  </header>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  imageSrc: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.header {
  position: relative;
  width: 100%;
  height: 200px; /* Adjust height as needed */
  overflow: hidden;
}

.header-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.3; /* Slight transparency */
}
</style>