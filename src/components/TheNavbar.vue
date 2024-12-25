<script setup lang="ts">
import { ref, watch } from 'vue'
import { useWindowScroll } from '@vueuse/core'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

const { y } = useWindowScroll()
const isScrolled = ref(false)

// Update navbar style on scroll
watch(y, (value) => {
  isScrolled.value = value > 0
})
</script>

<template>
  <nav :class="[
    'fixed w-full z-50 transition-all duration-300',
    isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm dark:bg-gray-900/80' : 'bg-transparent'
  ]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Disclosure v-slot="{ open }">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <a href="#" class="text-xl font-bold">DataEngineer</a>
          </div>
          
          <!-- Desktop menu -->
          <div class="hidden md:flex items-center space-x-8">
            <a href="#about" class="hover:text-primary-500">About</a>
            <a href="#skills" class="hover:text-primary-500">Skills</a>
            <a href="#projects" class="hover:text-primary-500">Projects</a>
            <a href="#experience" class="hover:text-primary-500">Experience</a>
            <a href="#contact" class="hover:text-primary-500">Contact</a>
          </div>

          <!-- Mobile menu button -->
          <DisclosureButton class="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
            <span class="sr-only">Open main menu</span>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!open" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </DisclosureButton>
        </div>

        <!-- Mobile menu -->
        <DisclosurePanel class="md:hidden">
          <div class="px-2 pt-2 pb-3 space-y-1">
            <a href="#about" class="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">About</a>
            <a href="#skills" class="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">Skills</a>
            <a href="#projects" class="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">Projects</a>
            <a href="#experience" class="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">Experience</a>
            <a href="#contact" class="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">Contact</a>
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
  </nav>
</template>