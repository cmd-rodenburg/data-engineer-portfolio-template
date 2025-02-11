<script setup lang="ts"></script>

<template>
  <section id="user-selection" class="bg-gray-800 py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="section-title">Business Needs</h2>
      <div>
        <p class="text-white font-medium text-lg mb-4">
          Fill out two short questions to determine what your business needs.
        </p>
      </div>

      <DecisionTree />
    </div>
  </section>
</template>

<script setup>
import DecisionTree from '../../DecisionTree/DecisionTree.vue';
</script>
