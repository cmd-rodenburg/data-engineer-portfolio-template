<template>
  <section id="about" class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="section-title">About me</h2>
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="space-y-6">
          <div class="relative w-48 h-48 mx-auto mb-8 md:hidden">
            <img src="/src/assets/profile.jpg" alt="Anne's Profile" class="rounded-full w-full h-full object-cover">
            <div class="absolute inset-0 bg-primary-500 opacity-30 rounded-full"></div>
          </div>
          <p class="text-lg text-gray-300">
            With a master in Molecular Medicine, Anne had a strong analytical background.
            Applying it to the Data Engineering field, she loved to solve issues at the core.
            Working in the Dutch market as a consultant, she gained valuable experience and knowledge
            in a handful of domains. 
            With an interest for sustainability and a international background, she became the Business 
            Intelligence lead for a Solar Startup in Berlin and later a Data Engineer for a large consultancy.
            
          </p>
          <p class="text-lg text-gray-300">
            With her broad experience, she is now on the solo journey as a freelancer who strives to 
            get you the data insights you need for your business to excel. Integrating
            all your data into one centralized data platform, I implement Data as a Service (Daas)
            to work for you. From data to dashboard, she will get you the insights you need.
          </p>
        </div>
        <div class="hidden md:block">
          <div class="relative w-64 h-64 mx-auto">
            <img src="/src/assets/profile.jpg" alt="Anne's Profile" class="rounded-full w-full h-full object-cover">
            <div class="absolute inset-0 bg-primary-500 opacity-10 rounded-full"></div>
          </div>
          <div class="grid grid-cols-2 gap-6 mt-8">
            <div class="card">
              <h3 class="text-xl font-semibold mb-2">6+ years</h3>
              <p class="text-gray-400">Experience</p>
            </div>
            <div class="card">
              <h3 class="text-xl font-semibold mb-2">5</h3>
              <p class="text-gray-400">Countries</p>
            </div>
            <div class="card">
              <h3 class="text-xl font-semibold mb-2">6</h3>
              <p class="text-gray-600">Projects</p>
            </div>
            <div class="card">
              <h3 class="text-xl font-semibold mb-2">10+</h3>
              <p class="text-gray-600">Tech Stack</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>