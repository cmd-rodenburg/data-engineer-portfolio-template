<script setup lang="ts">
import { ref, computed } from 'vue';

// Define tree structure
interface QuestionNode {
  question: string;
  options: { text: string; next: string }[];
}

interface ResultNode {
  result: string;
}

type TreeNode = QuestionNode | ResultNode;

const tree: Record<string, TreeNode> = {
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
  real_time: { result: 'We recommend a real-time analytics platform like Snowflake or Databricks.' },
  batch: { result: 'Batch processing solutions like Azure Data Factory could be a great fit!' },
  cloud_integration: { result: 'Consider cloud integration tools like Azure Data Factory or Prefect.' },
  on_prem_integration: { result: 'On-premise tools like Apache Airflow might suit your needs.' },
  self_service: { result: 'Tools like Power BI or Tableau would be perfect for self-service dashboards.' },
  custom_dashboard: { result: 'We can design a custom dashboard tailored to your specific requirements.' },
};

// Reactive state
const currentNodeKey = ref('start');

// Computed current node
const currentNode = computed(() => tree[currentNodeKey.value]);

// Type guards
const isQuestionNode = (node: TreeNode): node is QuestionNode => 'question' in node;
const isResultNode = (node: TreeNode): node is ResultNode => 'result' in node;

// Reset function
const resetTree = () => {
  currentNodeKey.value = 'start';
};
</script>

<template>
  <div class="max-w-xl mx-auto p-4 bg-gray-800 text-white shadow rounded-lg">
    <div v-if="isQuestionNode(currentNode)">
      <h2 class="text-xl font-semibold">{{ currentNode.question }}</h2>
      <div class="mt-4 space-y-2">
        <button
          v-for="option in currentNode.options"
          :key="option.text"
          class="bg-green-700 px-4 py-2 rounded hover:bg-green-600"
          @click="currentNodeKey = option.next"
        >
          {{ option.text }}
        </button>
      </div>
    </div>

    <div v-else-if="isResultNode(currentNode)">
      <h2 class="text-xl font-semibold">Result</h2>
      <p class="mt-4">{{ currentNode.result }}</p>
      <button
        @click="resetTree"
        class="mt-4 bg-gray-500 px-4 py-2 rounded hover:bg-gray-600"
      >
        Start Over
      </button>
    </div>

    <div v-else>
      <p>No question or result available.</p>
    </div>
  </div>
</template>
