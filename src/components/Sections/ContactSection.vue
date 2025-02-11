<script setup lang="ts">
import ContactForm from '../forms/ContactForm.vue'
</script>

<template>
  <!-- Contact Form-->
  <section id="contact">
    <main id="content">
      <ContactForm />
    </main>

    <div class="contact-links">
      <div class="flex justify-center space-x-4">
        <a href="https://www.linkedin.com/in/annerodenburgbi" target="_blank">
          <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" />
        </a>
        <a href="https://medium.com/@rodenburg.bi" target="_blank">
          <img src="https://img.icons8.com/color/48/000000/medium.png" alt="Medium" />
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  padding-top: 10rem;
  padding-bottom: 5rem;
  background-color: theme('colors.moss.800');
}

/* Dark mode styles */
@media (prefers-color-scheme: dark) {
  #contact {
    background-color: #111827;
    /* dark:bg-gray-900 */
  }
}

.contact-links {
  margin-top: 2rem;
}

#wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

#content {
  width: 100%;
}

.flex {
  display: flex;
}

.justify-center {
  justify-content: center;
}

.space-x-4>*+* {
  margin-left: 1rem;
}
</style>