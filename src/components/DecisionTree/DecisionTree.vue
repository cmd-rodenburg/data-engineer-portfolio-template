<!-- <script setup lang="ts">
import { reactive, computed } from 'vue';

const tree = {
  start: {
    question: 'What type of solution are you looking for?',
    options: [
      { text: 'Data Analytics', next: 'analytics' },
      { text: 'Data Integration', next: 'integration' },
      { text: 'Dashboarding', next: 'dashboard' },
    ],
  },
  analytics: {
    question: 'Do you need real-time analytics?',
    options: [
      { text: 'Yes', next: 'real_time' },
      { text: 'No', next: 'batch' },
    ],
  },
  integration: {
    question: 'Do you need cloud-based integration?',
    options: [
      { text: 'Yes', next: 'cloud_integration' },
      { text: 'No', next: 'on_prem_integration' },
    ],
  },
  dashboard: {
    question: 'Do you need a self-service dashboard?',
    options: [
      { text: 'Yes', next: 'self_service' },
      { text: 'No', next: 'custom_dashboard' },
    ],
  },
  real_time: {
    result:
      'We recommend a real-time analytics platform like Snowflake or Databricks.',
  },
  batch: {
    result:
      'Batch processing solutions like Azure Data Factory could be a great fit!',
  },
  cloud_integration: {
    result:
      'Consider cloud integration tools like Azure Data Factory or Prefect.',
  },
  on_prem_integration: {
    result: 'On-premise tools like Apache Airflow might suit your needs.',
  },
  self_service: {
    result:
      'Tools like Power BI or Tableau would be perfect for self-service dashboards.',
  },
  custom_dashboard: {
    result:
      'We can design a custom dashboard tailored to your specific requirements.',
  },
};

type TreeKeys = keyof typeof tree;

const currentNode = reactive({
  key: 'start' as TreeKeys,
});

const resetTree = () => {
  currentNode.key = 'start' as TreeKeys;
};

// Computed properties to handle node types
const currentNodeData = computed(() => tree[currentNode.key as TreeKeys]);

const hasOptions = computed(() => {
  const node = currentNodeData.value;
  return node && 'options' in node;
});

const isResultNode = computed(() => {
  const node = currentNodeData.value;
  return node && 'result' in node;
});
</script>

<template>
  <div class="max-w-xl mx-auto p-4 bg-gray-800 shadow rounded-lg">
    <header class="mb-2"></header>
    
    <div v-if="hasOptions">
      <h2 class="text-xl font-semibold">
        {{ currentNodeData.value.question }}
      </h2>
      <div class="space-y-4">
        <button
          v-for="option in currentNodeData.value.options"
          :key="option.text"
          class="bg-moss-800 text-white px-4 py-2 rounded hover:bg-moss-600"
          @click="() => (currentNode.key = option.next as TreeKeys)"
        >
          {{ option.text }}
        </button>
      </div>
    </div>

    <div v-else-if="isResultNode">
      <h2 class="text-xl font-semibold">Result</h2>
      <p class="mt-4">{{ currentNodeData.value.result }}</p>
      <button
        @click="resetTree"
        class="mt-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
      >
        Start Over
      </button>
    </div>

    <div v-else>
      <p>No question or result available</p>
    </div>
  </div>
</template> -->
