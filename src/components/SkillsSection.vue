<script setup lang="ts">
const skills = [
  {
    category: 'Programming Languages',
    items: ['Python', 'SQL', 'Scala', 'Java']
  },
  {
    category: 'Big Data Technologies',
    items: ['Apache Spark', 'Hadoop', 'Apache Kafka', 'Apache Airflow']
  },
  {
    category: 'Cloud Platforms',
    items: ['AWS', 'Google Cloud', 'Azure', 'Snowflake']
  },
  {
    category: 'Data Warehousing',
    items: ['Redshift', 'BigQuery', 'Snowflake', 'PostgreSQL']
  },
  {
    category: 'ETL Tools',
    items: ['dbt', 'Apache NiFi', 'Informatica', 'Talend']
  },
  {
    category: 'Version Control & CI/CD',
    items: ['Git', 'GitHub Actions', 'Jenkins', 'Docker']
  }
]
</script>

<template>
  <section id="skills" class="py-20 bg-gray-50 dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="section-title">Technical Skills</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(skill, index) in skills" :key="index" class="card">
          <h3 class="text-xl font-semibold mb-4 text-primary-600">
            {{ skill.category }}
          </h3>
          <div class="flex flex-wrap gap-2">
            <span v-for="item in skill.items" :key="item"
              class="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-sm">
              {{ item }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>