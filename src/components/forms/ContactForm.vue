<template>
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
</template>

<script lang="ts">
export default {
  props: ["onSuccess", "onError"],
  methods: {
    async handleSubmit(event: Event) {
      try {
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);

        // Submit the form data to Netlify
        await fetch("/", {
          method: "POST",
          body: new URLSearchParams(formData as any),
        });

        // Emit success event
        this.onSuccess();
      } catch (error) {
        console.error("Form submission error:", error);

        // Emit error event
        this.onError();
      }
    },
  },
};
</script>
