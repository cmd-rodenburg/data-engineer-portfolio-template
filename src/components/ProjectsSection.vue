<script setup lang="ts">
const projects = [
  {
    title: 'Data lakehouse development',
    description: 'Led the migration of an on-premise data warehouse to Snowflake, implementing modern data modeling practices using dbt.',
    subdescription: 'Built Power BI dashboards.',
    technologies: ['Snowflake', 'dbt', 'Python', 'Airflow', 'Docker'],
    metrics: 'Improved query performance by 80%',
    image: '/src/assets/.png'
  },
  {
    title: 'Greenfield Data Warehouse',
    description: 'Led the migration of an on-premise data warehouse to Snowflake, whilst \
    also restructuring the data model to include best practices and data goverance using dbt.',
    subdescription: 'Implemented automated feedback for CRM tools and built Power BI dashboards.',
    technologies: ['Snowflake', 'SQL', 'dbt', 'Azure ', 'Airflow', 'GIT', 'Power BI', 'Docker'],
    metrics: 'Reduced data processing latency by 60%',
    image: '/src/assets/Gen2_data_platform.png'
  },
]
</script>

<template>
  <section id="projects" class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="section-title">Featured Projects</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        <div v-for="(project, index) in projects" :key="index" 
          class="card">
          <h3 class="text-xl font-semibold mb-3">{{ project.title }}</h3>
          <p class="text-gray-300 mb-4">
            {{ project.description }}
          </p>
          <p class="text-gray-300 mb-4">
            {{ project.subdescription }}
          </p>
          <img v-if="project.image" :src="project.image" :alt="project.title" class="w-full h-80 object-cover rounded-lg mb-4">
          <div class="flex flex-wrap gap-2 mb-4">
            <span v-for="tech in project.technologies" :key="tech"
              class="bg-gray-700 rounded text-sm">
              {{ tech }}
            </span>
          </div>
          <p class="text-primary-600 font-medium">
            {{ project.metrics }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>