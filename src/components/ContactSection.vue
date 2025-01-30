<template>
  <section id="contact" class="py-20 bg-gray-50 dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-2xl font-bold text-center mb-8">Get in Touch</h2>
      <div class="max-w-2xl mx-auto">
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          @submit.prevent="handleSubmit"
          class="space-y-4"
        >
          <!-- Honeypot Field -->
          <input type="hidden" name="form-name" value="contact" />
          <div class="hidden">
            <label>
              Don’t fill this out if you're human:
              <input name="bot-field" />
            </label>
          </div>

          <!-- Name -->
          <div>
            <label for="name" class="block text-sm font-medium mb-2">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          <!-- Email -->
          <div>
            <label for="email" class="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          <!-- Message -->
          <div>
            <label for="message" class="block text-sm font-medium mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            ></textarea>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            class="w-full bg-primary-600 text-white py-3 px-6 rounded-lg hover:bg-primary-700 transition-colors"
          >
            Send Message
          </button>
        </form>

        <!-- Success Message -->
        <div v-if="formSubmitted" class="p-4 mt-4 bg-green-100 text-green-700 rounded-lg">
          Thank you for your message! I'll get back to you soon.
        </div>

        <!-- Error Message -->
        <div v-if="formError" class="p-4 mt-4 bg-red-100 text-red-700 rounded-lg">
          Sorry, something went wrong. Please try again later.
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  data() {
    return {
      formSubmitted: false,
      formError: false,
    };
  },
  methods: {
    async handleSubmit(event: Event) {
      try {
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);

        // Send the form data to Netlify
        await fetch("/", {
          method: "POST",
          body: new URLSearchParams(formData as any),
        });

        // Show success message
        this.formSubmitted = true;
        this.formError = false;

        // Reset the form
        form.reset();
      } catch (error) {
        console.error("Form submission error:", error);
        this.formError = true;
      }
    },
  },
};
</script>
