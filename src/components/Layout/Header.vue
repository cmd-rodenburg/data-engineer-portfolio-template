<template>
  <header class="header" style="position: relative; width: 100%; height: 150px; overflow: hidden;">
    <img :src="imageSrc" alt="Header Image" class="header-image" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.3;" />
  </header>
</template>

<script setup lang="ts">
defineProps({
  imageSrc: {
    type: String,
    required: true,
  },
});
</script>
