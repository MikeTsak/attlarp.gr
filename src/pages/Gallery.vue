<script setup>
// We don't need special scripts yet, but this tag ensures Vue recognizes the file structure.
</script>

<template>
  <div class="bg-background-dark font-gallery text-white min-h-screen">
    <section
      class="relative w-full h-[60vh] flex items-end border-b border-[#39282a] overflow-hidden"
    >
      <div
        class="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
        style="
          background-image: url(&quot;https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?q=80&quot;);
        "
      ></div>
      <div
        class="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent"
      ></div>
      <div class="absolute inset-0 bg-black/20"></div>

      <div class="relative z-10 w-full max-w-[1200px] mx-auto px-6 pb-16">
        <div
          class="inline-flex items-center gap-2 px-3 py-1 rounded bg-primary/20 border border-primary text-primary text-[10px] font-bold uppercase tracking-widest mb-4"
        >
          <span class="relative flex h-2 w-2">
            <span
              class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"
            ></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Latest Event Spotlight
        </div>
        <h1 class="text-white text-5xl md:text-7xl font-light tracking-tight mb-4">
          Blood on the <span class="text-primary font-bold">Parthenon</span>
        </h1>
        <div class="flex flex-wrap items-center gap-6 text-gray-300 mb-8">
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-primary text-xl">calendar_today</span>
            <span class="text-sm font-bold uppercase tracking-widest">October 28th, 2023</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-primary text-xl">location_on</span>
            <span class="text-sm font-bold uppercase tracking-widest">Acropolis, Athens</span>
          </div>
        </div>
      </div>
    </section>

    <main class="w-full px-4 md:px-8 py-10 flex justify-center">
      <div class="w-full max-w-[1200px] flex flex-col">
        <div
          class="mb-12 sticky top-[64px] z-30 bg-background-dark/95 backdrop-blur-md pt-4 pb-4 border-b border-white/5"
        >
          <div class="flex flex-wrap justify-center gap-2 md:gap-8">
            <button class="group flex flex-col items-center gap-2 px-4 py-2 text-white">
              <span class="text-sm font-bold tracking-widest uppercase text-primary"
                >All Events</span
              >
              <span class="w-full h-[2px] bg-primary rounded-full"></span>
            </button>
            <button
              class="group flex flex-col items-center gap-2 px-4 py-2 text-gray-500 hover:text-white transition-colors"
            >
              <span class="text-sm font-bold tracking-widest uppercase">Chronicle Acts</span>
              <span
                class="w-0 group-hover:w-full h-[2px] bg-gray-500 transition-all duration-300 rounded-full"
              ></span>
            </button>
            <button
              class="group flex flex-col items-center gap-2 px-4 py-2 text-gray-500 hover:text-white transition-colors"
            >
              <span class="text-sm font-bold tracking-widest uppercase">Special Sessions</span>
              <span
                class="w-0 group-hover:w-full h-[2px] bg-gray-500 transition-all duration-300 rounded-full"
              ></span>
            </button>
          </div>
        </div>

        <section class="mb-16">
          <div class="flex items-center gap-4 mb-8">
            <div class="h-px flex-grow bg-white/10"></div>
            <h2 class="text-gray-500 text-xs font-bold uppercase tracking-[0.3em]">
              Autumn 2023 Nights
            </h2>
            <div class="h-px flex-grow bg-white/10"></div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div class="group cursor-pointer">
              <div
                class="relative aspect-[16/9] overflow-hidden rounded bg-surface-dark border border-white/5 group-hover:border-primary/50 transition-all"
              >
                <img
                  src="https://images.unsplash.com/photo-1621252179027-94459d27d3ee?q=80"
                  alt="The Masquerade Broken"
                  class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"
                ></div>
                <div class="absolute bottom-6 left-6 right-6">
                  <div class="text-primary text-[10px] font-bold uppercase tracking-widest mb-1">
                    Event 2 • October 28
                  </div>
                  <h3 class="text-white text-2xl font-bold">Blood on the Parthenon</h3>
                  <p
                    class="text-gray-400 text-sm mt-2 line-clamp-2 max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    The Prince's mandate was ignored. In the shadow of the temple, the first drop
                    was spilled.
                  </p>
                </div>
                <div class="absolute top-6 right-6 flex gap-2">
                  <span
                    class="bg-black/60 backdrop-blur-md text-[10px] text-white px-3 py-1 rounded-full border border-white/10"
                    >142 Photos</span
                  >
                </div>
              </div>
            </div>

            <div class="group cursor-pointer">
              <div
                class="relative aspect-[16/9] overflow-hidden rounded bg-surface-dark border border-white/5 group-hover:border-primary/50 transition-all"
              >
                <img
                  src="https://images.unsplash.com/photo-1504198266287-1659872e6590?q=80"
                  alt="Investigation"
                  class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"
                ></div>
                <div class="absolute bottom-6 left-6 right-6">
                  <div class="text-primary text-[10px] font-bold uppercase tracking-widest mb-1">
                    Event 1 • September 15
                  </div>
                  <h3 class="text-white text-2xl font-bold">The Masquerade Broken</h3>
                  <p
                    class="text-gray-400 text-sm mt-2 line-clamp-2 max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    An investigation into the tech-corps went sideways.
                  </p>
                </div>
                <div class="absolute top-6 right-6 flex gap-2">
                  <span
                    class="bg-black/60 backdrop-blur-md text-[10px] text-white px-3 py-1 rounded-full border border-white/10"
                    >89 Photos</span
                  >
                </div>
              </div>
            </div>
          </div>
        </section>

        <div class="flex items-center justify-center w-full my-12 opacity-50">
          <div class="flex-1 border-b border-[#543b3d]"></div>
          <span class="material-symbols-outlined text-3xl text-[#543b3d] mx-4">menu_book</span>
          <div class="flex-1 border-b border-[#543b3d]"></div>
        </div>

        <section>
          <div class="flex items-center justify-between mb-8 px-2">
            <h2
              class="text-white text-2xl font-light uppercase tracking-widest border-l-4 border-primary pl-4"
            >
              Past Chronicles
            </h2>
          </div>

          <div class="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            <div class="break-inside-avoid group cursor-pointer">
              <div
                class="relative overflow-hidden rounded bg-surface-dark border border-white/5 group-hover:border-primary/50 transition-all"
              >
                <img
                  src="https://images.unsplash.com/photo-1598556885318-48a82d6b2399?q=80"
                  alt="Council"
                  class="w-full h-auto object-cover"
                />
                <div class="p-4">
                  <div class="flex justify-between items-start mb-2">
                    <h4 class="text-white font-bold">The Council of Shadows</h4>
                    <span class="text-primary text-[10px] font-bold">JUL 2023</span>
                  </div>
                  <p class="text-gray-500 text-xs uppercase tracking-wider">
                    34 Artifacts • 56 Photos
                  </p>
                </div>
              </div>
            </div>

            <div class="break-inside-avoid group cursor-pointer">
              <div
                class="relative overflow-hidden rounded bg-surface-dark border border-white/5 group-hover:border-primary/50 transition-all"
              >
                <img
                  src="https://images.unsplash.com/photo-1605806616949-1e87b487bc2a?q=80"
                  alt="Uprising"
                  class="w-full h-auto object-cover"
                />
                <div class="p-4">
                  <div class="flex justify-between items-start mb-2">
                    <h4 class="text-white font-bold">Underground Uprising</h4>
                    <span class="text-primary text-[10px] font-bold">MAY 2023</span>
                  </div>
                  <p class="text-gray-500 text-xs uppercase tracking-wider">
                    12 Artifacts • 102 Photos
                  </p>
                </div>
              </div>
            </div>

            <div class="break-inside-avoid group cursor-pointer">
              <div
                class="relative overflow-hidden rounded bg-surface-dark border border-white/5 group-hover:border-primary/50 transition-all"
              >
                <img
                  src="https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80"
                  alt="Watchers"
                  class="w-full h-auto object-cover"
                />
                <div class="p-4">
                  <div class="flex justify-between items-start mb-2">
                    <h4 class="text-white font-bold">The Silent Watchers</h4>
                    <span class="text-primary text-[10px] font-bold">MAR 2023</span>
                  </div>
                  <p class="text-gray-500 text-xs uppercase tracking-wider">
                    5 Artifacts • 45 Photos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>
