<script setup lang="ts">
import ContactForm from '../forms/ContactForm.vue'
</script>

<template>
  <!-- Contact Form-->
  <section id="contact" class="py-20 bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="section-title">Contact form</h2>

      <div class="w-full max-w-xl mx-auto px-10 py-2">

        <main class="w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <p class="text-white py-2"> Are you curious to learn more or how I could support you business to grow? Don't
            hesistate and fill out thisform. I'll get in touch with you shortly. </p>
          <p></p>

          <ContactForm />
        </main>

        <div class="mt-8">
          <div class="flex justify-center space-x-4">
            <a href="https://www.linkedin.com/in/annerodenburgbi" target="_blank">
              <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" />
            </a>
            <a href="https://medium.com/@rodenburg.bi" target="_blank">
              <img src="https://img.icons8.com/color/48/000000/medium.png" alt="Medium" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
