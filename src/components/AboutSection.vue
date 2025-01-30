<template>
  <section id="about" class="bg-gray-800">
    <div class="container mx-auto px-4 py-12">
      <div class="md:grid md:grid-cols-[2fr_1fr] md:gap-12">
        <div>
          <h2 class="text-3xl font-bold mb-4">About me</h2>
          <p class="text-xl text-emerald-500 font-semibold mb-8">
            Freelance data engineer with a knack for business intelligence
          </p>
          <div class="space-y-6 order-last md:order-none">
            <p class="text-justify text-gray-300 leading-relaxed">
              With a master’s degree in Molecular Medicine, I apply strong
              analytical skills in the Data Engineering field. I love tackling
              issues at the core, finding efficient solutions to complex
              problems.
            </p>
            <p class="text-justify text-gray-300 leading-relaxed">
              Working for large companies such as Accenture, Cargill, Transavia,
              and Capgemini I gained valuable expereince in both Dutch and
              German markets across multiple domains and industries.
            </p>
            <p class="text-justify text-gray-300 leading-relaxed">
              During my journey as a freelancer, I strive to integrate your data
              into one centralized data platform and implement Data as a Service
              (DaaS) to empower your business. From data to dashboards, I’ll
              provide you with the insights you need to excel.
            </p>
          </div>
        </div>

        <div class="mt-8 md:mt-0">
          <div class="flex flex-col items-center">
            <div class="w-full max-w-[250px] mb-8">
              <img
                src="./public/images/profile.jpg"
                alt="Profile picture"
                class="rounded-full w-full aspect-square object-cover shadow-lg"
              />
            </div>
            <div class="w-full grid grid-cols-2 gap-4">
              <div class="bg-gray-700/50 rounded-lg p-4 text-center">
                <h3 class="text-xl font-semibold mb-1">6+ years</h3>
                <p class="text-gray-400 text-sm">Experience</p>
              </div>
              <div class="bg-gray-700/50 rounded-lg p-4 text-center">
                <h3 class="text-xl font-semibold mb-1">5</h3>
                <p class="text-gray-400 text-sm">Countries</p>
              </div>
              <div class="bg-gray-700/50 rounded-lg p-4 text-center">
                <h3 class="text-xl font-semibold mb-1">6</h3>
                <p class="text-gray-400 text-sm">Projects</p>
              </div>
              <div class="bg-gray-700/50 rounded-lg p-4 text-center">
                <h3 class="text-xl font-semibold mb-1">10+</h3>
                <p class="text-gray-400 text-sm">Tech stack</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
