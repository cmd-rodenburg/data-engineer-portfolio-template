<script setup lang="ts">
import { reactive } from 'vue'

const formData = reactive({
  name: '',
  email: '',
  message: '',
  response: ''
})

const encode = (data: Record<string, string>): string => {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}

const submitForm = () => {
  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encode({
      'form-name': 'contact',
      ...formData
    })
  })
    .then(() => {
      formData.response = '✅ Your response was successfully submitted!'
    })
    .catch(error => {
      formData.response = `❌ There was an error submitting your response: ${error.message}. Please refresh to try again.`
    })
}
</script>

<template>
  <h1>Feedback Form</h1>
  <h1>Vue 3 + Netlify Forms</h1>

  <section v-if="formData.response" class="notification">
    <h2>{{ formData.response }}</h2>
  </section>
  <form v-else class="feedback-form" name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field"
    @submit.prevent="submitForm">
    <!-- Hidden fields for Netlify -->
    <input type="hidden" name="form-name" value="contact" />

    <!-- Honeypot field to prevent spam -->
    <div class="hidden">
      <label>
        Don't fill this out if you're human: <input name="bot-field" />
      </label>
    </div>

    <!-- Name -->
    <div class="input-wrapper">
      <label for="name">Name <span class="required">*</span></label>
      <input id="name" v-model="formData.name" type="text" name="name" required placeholder="Your Name" />
    </div>

    <!-- Email -->
    <div class="input-wrapper">
      <label for="email">Email <span class="required">*</span></label>
      <input id="email" v-model="formData.email" type="email" name="email" required
        placeholder="yourname@domain.extension" />
    </div>

    <!-- Message -->
    <div class="input-wrapper">
      <label for="message">Message <span class="required">*</span></label>
      <textarea id="message" v-model="formData.message" name="message" required
        placeholder="What would you like to share?" />
    </div>

    <!-- Submit Button -->
    <button type="submit">Submit</button>
  </form>
</template>

<style scoped>
.feedback-form {
  max-width: 600px;
  margin: 0 auto;
}

.input-wrapper {
  display: grid;
  grid-template-rows: auto 1fr;
  grid-row-gap: 5px;
  margin-bottom: 1rem;
  text-align: left;
}

.input-wrapper:last-child {
  margin-bottom: 0;
}

.input-wrapper input,
.input-wrapper textarea {
  font-family: var(--primaryFont);
  color: black;
}

.input-wrapper input {
  padding: 10px;
  font-size: 0.9rem;
}

.input-wrapper textarea {
  height: 100px;
  padding: 10px;
  font-size: 0.9rem;
}

.notification {
  border: 1px solid #222;
  border-radius: 8px;
  padding: 20px 0;
  max-width: 600px;
  margin: 0 auto;
}

.hidden {
  display: none;
}

.required {
  color: #EF4444;
  margin-left: 2px;
}

/* Submit Button Styles */
button[type="submit"] {
  width: 100%;
  padding: 12px 24px;
  background-color: #4F46E5;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

button[type="submit"]:hover {
  background-color: #4338CA;
  transform: translateY(-1px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

button[type="submit"]:active {
  transform: translateY(0);
  box-shadow: none;
}

button[type="submit"]:disabled {
  background-color: #9CA3AF;
  cursor: not-allowed;
}
</style>