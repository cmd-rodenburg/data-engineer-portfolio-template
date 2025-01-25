<script setup lang="ts">
import { ref, watch } from 'vue';
import { useWindowScroll } from '@vueuse/core';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';

const { y } = useWindowScroll();
const isScrolled = ref(false);

// Update navbar style on scroll
watch(y, (value) => {
  isScrolled.value = value > 0;
});
</script>

<template>
  <nav
    :class="[
      'fixed w-full z-50 transition-all duration-300',
      isScrolled
        ? 'bg-moss-950/90 backdrop-blur-md shadow-sm'
        : 'bg-transparent',
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Disclosure v-slot="{ open }">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <a href="#" class="text-xl font-bold text-moss-200">Rodenburg BI</a>
          </div>

          <!-- Desktop menu -->
          <div class="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              class="text-moss-300 hover:text-moss-200 transition-colors"
              >About</a
            >
            <a
              href="#skills"
              class="text-moss-300 hover:text-moss-200 transition-colors"
              >Skills</a
            >
            <a
              href="#projects"
              class="text-moss-300 hover:text-moss-200 transition-colors"
              >Projects</a
            >
            <!-- <a href="#experience" class="text-moss-300 hover:text-moss-200 transition-colors">Experience</a> -->
            <a
              href="#contact"
              class="text-moss-300 hover:text-moss-200 transition-colors"
              >Contact</a
            >
          </div>

          <!-- Mobile menu button -->
          <div class="flex items-center md:hidden">
            <DisclosureButton class="p-2 text-moss-300 hover:text-moss-200">
              <span class="sr-only">Open main menu</span>
              <svg
                v-if="!open"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                v-else
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </DisclosureButton>
          </div>
        </div>

        <!-- Mobile menu -->
        <DisclosurePanel class="md:hidden bg-moss-950/90 backdrop-blur-md">
          <div class="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#about"
              class="block px-3 py-2 text-moss-300 hover:text-moss-200"
              >About</a
            >
            <a
              href="#skills"
              class="block px-3 py-2 text-moss-300 hover:text-moss-200"
              >Skills</a
            >
            <a
              href="#projects"
              class="block px-3 py-2 text-moss-300 hover:text-moss-200"
              >Projects</a
            >
            <a
              href="#experience"
              class="block px-3 py-2 text-moss-300 hover:text-moss-200"
              >Experience</a
            >
            <a
              href="#contact"
              class="block px-3 py-2 text-moss-300 hover:text-moss-200"
              >Contact</a
            >
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
  </nav>
</template>
