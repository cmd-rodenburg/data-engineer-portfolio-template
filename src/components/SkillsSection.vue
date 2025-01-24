<script setup lang="ts">
const skills = [
  {
    category: 'Programming Languages',
    items: ['Python', 'SQL', 'PySpark', 'Power M Query', 'DAX']
  },
  {
    category: 'Cloud Platforms',
    items: ['Azure', 'Snowflake', 'Databricks']
  },
  {
    category: 'Data Visualization',
    items: ['Power BI', 'Tableau']
  },
  {
    category: 'Data Warehousing',
    items: ['Snowflake', 'PostgreSQL', 'Azure SQL', 'Databricks', 'Hadoop']
  },
  {
    category: 'ETL Tools',
    items: ['dbt', 'Prefect', 'Azure Data Factory', 'Hadoop', 'Apache Airflow', 'Terraform']
  },
  {
    category: 'Version Control & CI/CD',
    items: ['Git', 'Azure DevOps', 'Docker']
  },
  {
    category: 'API integrations',
    items: ['Hubspot', 'SevDesk', 'DateV', 'Amazon Media', 'Adobe Analytics', 
    'Amazon Retail', 'Adobe Experience Platform', 'Marketo', 'DateV', 'Sharepoint']
  }
]
</script>

<template>
  <section id="skills" class="py-20 bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="section-title">Technical Skills</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(skill, index) in skills" :key="index" 
          :class="[
            'card',
            skill.category === 'API integrations' ? 'md:col-span-2 lg:col-span-3' : ''
          ]">
          <h3 class="text-xl font-semibold mb-4 text-primary-600">
            {{ skill.category }}
          </h3>
          <div class="flex flex-wrap gap-2">
            <span v-for="item in skill.items" :key="item"
              class="px-3 py-1 bg-primary-900/20 text-primary-700 rounded-full text-sm">
              {{ item }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>