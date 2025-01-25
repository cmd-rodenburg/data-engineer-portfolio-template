<template>
  <section id="contact" class="py-20 bg-gray-50 dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="section-title">Get in Touch</h2>
      <div class="max-w-2xl mx-auto">
        <form
          class="space-y-6"
          data-netlify="true"
          data-netlify-recaptcha="true"
          name="contact"
          method="POST"
          @submit="handleSubmit"
        >
          <input type="hidden" name="form-name" value="contact" />

          <div
            v-if="formSubmitted"
            class="p-4 bg-green-100 text-green-700 rounded-lg"
          >
            Thank you for your message! I'll get back to you soon.
          </div>

          <div v-if="formError" class="p-4 bg-red-100 text-red-700 rounded-lg">
            Sorry, there was an error sending your message. Please try again.
          </div>

          <div>
            <label for="name" class="block text-sm font-medium mb-2"
              >Name</label
            >
            <input
              type="text"
              id="name"
              name="name"
              required
              class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          <div>
            <label for="email" class="block text-sm font-medium mb-2"
              >Email</label
            >
            <input
              type="email"
              id="email"
              name="email"
              required
              class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          <div>
            <label for="message" class="block text-sm font-medium mb-2"
              >Message</label
            >
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            ></textarea>
          </div>

          <div class="mb-4">
            <div data-netlify-recaptcha="true"></div>
          </div>

          <button
            type="submit"
            class="w-full bg-primary-600 text-white py-3 px-6 rounded-lg hover:bg-primary-700 transition-colors"
          >
            Send Message
          </button>
        </form>
        <div class="contact-links">
          <h3>Connect with me</h3>
          <div class="flex justify-center space-x-4">
            <a
              href="https://www.linkedin.com/in/annerodenburgbi"
              target="_blank"
            >
              <img
                src="https://img.icons8.com/color/48/000000/linkedin.png"
                alt="LinkedIn"
              />
            </a>
            <a href="https://medium.com/@rodenburg.bi" target="_blank">
              <img
                src="https://img.icons8.com/color/48/000000/medium.png"
                alt="Medium"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}
.contact-links a {
  margin: 5px 0;
  text-decoration: none;
  color: #0073e6;
  font-weight: bold;
}
.contact-links a:hover {
  text-decoration: underline;
}
</style>

<script setup lang="ts">
import { ref } from 'vue';

const formSubmitted = ref(false);
const formError = ref(false);

const handleSubmit = async (e: Event) => {
  e.preventDefault();
  try {
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as any).toString(),
    });

    if (response.ok) {
      formSubmitted.value = true;
      form.reset();
    } else {
      formError.value = true;
    }
  } catch (error) {
    formError.value = true;
  }
};
</script>
