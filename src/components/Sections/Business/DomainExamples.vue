<script setup lang="ts">
import { ref } from 'vue'

interface BusinessSolution {
  domain: string;
  summary: string;
  problem: string[];
  solution: string[];
  tech_implementation: string[];
  business_impact: string[];
  image: string;
  image_subtitle: string;
}

const business_solutions: BusinessSolution[] = [
  {
    domain: 'Marketing - User journey',
    summary: 'I worked closely with the marketing team to analyze web data from Adobe Analytics, with the primary goal of understanding the customer journey. Key areas of focus included tracking user behavior, such as add-to-cart actions, abandoned carts, and identifying high-click pages on the website. Through this analysis, I provided valuable insights into user engagement and conversion trends, helping the team optimize marketing strategies, refine decision-making, and uncover opportunities to enhance the overall user experience. My data-driven approach enabled more targeted, effective marketing efforts and a deeper understanding of customer behavior.',
    problem: [
      'Lack of visibility into customer drop-off points in the purchase journey.',
      'No structured tracking of user interactions across key conversion touchpoints.',
      'Marketing decisions based on intuition rather than data-driven insights.',
    ],
    solution: ['Implemented Adobe Analytics to capture user behavior across the website.',
      'Transformed event-level data into structured insights.',
      'Designed visualizations to track drop-off points and optimize conversion rates.'
    ],

    tech_implementation: ['Data Collection: Configured Adobe Analytics to track user interactions (clicks, page views, sessions).',
      'ETL Pipeline: Extracted raw event data, cleaned, and transformed it for analysis',
      'Data Storage: Structured data in a warehouse for efficient querying.',
      'Analysis & Reporting: Used BI tools to visualize drop-off points and optimize conversion rates.'
    ],
    business_impact: ['Identified top drop-off points, leading to targeted website optimizations.',
      'Increased checkout completion rate by 27% after implementing insights.',
      'Enabled marketing teams to make data-driven decisions, improving ROI by 32%.'
    ],
    image: 'images/BusinessMarketingLandscape.png',
    image_subtitle: 'Marketing teams face challenges in capturing and analyzing customer data.'
  },
  {
    domain: 'The Sales Journey',
    summary: 'The Sales team aimed to optimize their sales journey and needed clear insights into their Objective Key Results (OKRs). Given the structure of the sales department, they sought to understand the duration of deals at each stage of the sales funnel to identify areas for improvement.\n\n The sales funnel consists of key deal stages: Cold, Warm, Hot, Lost, and Won. By analyzing how deals progress through these stages, the team could pinpoint bottlenecks and refine their strategies. Their existing HubSpot funnel provided the necessary data to extract and analyze deal movement, enabling them to set more accurate and actionable OKRs. The last requirement was that information such the size of the client (based on the data collected from the datawarehouse) was updated automatically in Hubspot to remove manual labour',
    problem: [
      'Bottlenecks in the sales funnel causing lower conversion rates.',
      'Manual and inconsistent information about deals',
      'No clear methodology to score and prioritize leads.',
    ],
    solution: ['Built a sales funnel model in HubSpot to track leads through different stages.',
      'Applied the BANT framework to segment and prioritize high-value leads.',
      'Developed an acquisition model to analyze bottlenecks and suggest improvements.',
    ],
    tech_implementation: ['Lead Tracking: Integrated HubSpot CRM with automated lead scoring.',
      'Data Processing: Applied BANT framework using business rules and machine learning.',
      'Insights Generation: Built dashboards to monitor lead conversion performance.',
      'Optimization: Recommended sales process improvements based on data analysis.'
    ],
    business_impact: ['Reduced lead qualification time by 45%, improving sales team efficiency.',
      'Increased conversion rate of high-value leads by 38%.',
      'Streamlined sales processes, reducing customer acquisition costs by 25%.'
    ],
    image: 'images/BusinessSalesConfused.png',
    image_subtitle: 'Sales teams with overloaded workloads face challenges in optimizing their journey.'
  },
  {
    domain: 'Solar Sites',
    summary: 'Summarize all solar panel sites from our tech which contained more than 3TB data. Set up automatic linking between HubSpot and our tech to get the correct customer and was able to show the correct sites, where they were, who they were and also get the finance department the information if the customers weren\'t paying enough.',
    problem: [
      'Gap between knowledge of customers and their solar assets',
      'No quality control on invoicing and the number of site for each customer, especially with passive growth',
    ],
    solution: ['Built the complete solar sites database, which included customer information, site data, and invoice details.',
    ],
    tech_implementation: ['Daily reporting: Built a dashboard to track customer acquisition over time, allowing the finance department to see who was generating revenue and who was not.',
    ],
    business_impact: ['Improved customer understanding, leading to more effective invoicing and quality control.',
    ],
    image: 'images/BusinessSolarSites.png',
    image_subtitle: 'Solar assets with data'
  },
];

const selectedSolution = ref<BusinessSolution>(business_solutions[0])

function selectSolution(solution: BusinessSolution) {
  selectedSolution.value = solution
}
</script>

<template>
  <section class="section-container bg-gradient-to-br from-primary-50 to-white dark:from-gray-900 dark:to-gray-800"
    id="business-solutions">
    <div class="section-content">
      <!-- Solution Selector -->
      <div class="solution-selector mb-8">
        <div class="flex flex-wrap gap-4 justify-center">
          <button v-for="solution in business_solutions" :key="solution.domain" @click="selectSolution(solution)"
            :class="['px-6 py-3 rounded-lg transition-all text-lg font-medium',
              selectedSolution.domain === solution.domain
                ? 'bg-green-800 text-white shadow-lg'  /* Dark Green */
                : 'bg-white hover:bg-gray-300 text-gray-700']">
            {{ solution.domain }}
          </button>

        </div>
      </div>

      <!-- Selected Solution Content -->
      <div v-if="selectedSolution"
        class="solution-content bg-white rounded-lg shadow-lg p-8 border border-gray-200 text-black">
        <div class="mb-8">
          <h3 class="text-2xl font-bold mb-4">Summary</h3>
          <p>{{ selectedSolution.summary }}</p>
          <img :src="selectedSolution.image" :alt="selectedSolution.domain" :title="selectedSolution.image_subtitle"
            class="w-30 h-70 object-cover rounded-lg mb-2" />
          <p class="text-sm text-gray-600 text-center mb-4 italic">{{ selectedSolution.image_subtitle }} visualization
          </p>


          <h3 class="text-2xl font-bold mb-4">Problem Statement</h3>
          <ul class="list-disc ml-6 space-y-2">
            <li v-for="(item, index) in selectedSolution.problem" :key="index">
              {{ item }}
            </li>
          </ul>
        </div>


        <div class="mb-8">
          <h3 class="text-2xl font-bold mb-4">Solution</h3>
          <ul class="list-disc ml-6 space-y-2">
            <li v-for="(item, index) in selectedSolution.solution" :key="index">
              {{ item }}
            </li>
          </ul>
        </div>

        <div class="mb-8">
          <h3 class="text-2xl font-bold mb-4">Technical Implementation</h3>
          <ul class="list-disc ml-6 space-y-2">
            <li v-for="(item, index) in selectedSolution.tech_implementation" :key="index">
              {{ item }}
            </li>
          </ul>
        </div>

        <div class="mb-8">
          <h3 class="text-2xl font-bold mb-4 ">Business Impact</h3>
          <ul class="list-disc ml-6 space-y-2">
            <li v-for="(item, index) in selectedSolution.business_impact" :key="index">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.section-container {
  padding-top: 5rem;
  padding-bottom: 5rem;
  background-color: rgb(249 250 251);
}

.section-content {
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

@media (min-width: 640px) {
  .section-content {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .section-content {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}
</style>