<template>
  <section id="contact" class="py-20 bg-gray-50 dark:bg-gray-900">
    <!-- Contact Links -->
    <div class="contact-links">
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
