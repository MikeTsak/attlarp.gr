<template>
  <header
    class="relative flex min-h-[90vh] w-full flex-col items-center justify-center overflow-hidden"
  >
    <div class="absolute inset-0 z-0">
      <div
        class="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-[#181112] z-10"
      ></div>
      <div
        class="absolute inset-0 bg-gradient-to-t from-[#181112] via-[#181112]/40 to-transparent z-10"
      ></div>
      <div class="absolute inset-0 bg-primary/5 mix-blend-overlay z-10"></div>

      <div
        class="h-full w-full bg-cover bg-center bg-no-repeat transition-transform duration-[20s]"
        style="background-image: url(&quot;/img/pexels-photo-20872396.jpg&quot;)"
      ></div>
    </div>

    <div class="relative z-20 flex max-w-[960px] flex-col items-center gap-8 px-4 text-center">
      <div class="flex flex-col items-center gap-4">
        <p class="text-primary text-sm font-bold tracking-[0.3em] uppercase">
          A Vampire: The Masquerade Chronicle
        </p>
        <h1
          class="text-white text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tighter drop-shadow-2xl"
        >
          ATHENS<br />
          <span class="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400"
            >THROUGH TIME</span
          >
        </h1>
        <div class="h-1 w-24 bg-primary rounded-full my-4 shadow-[0_0_15px_#d41121]"></div>
        <h2 class="text-gray-300 text-lg md:text-xl font-normal max-w-2xl leading-relaxed">
          Centuries of blood and betrayal. Step into a world where your choices in the past carve
          the future of the night.
        </h2>
      </div>

      <div class="flex flex-col sm:flex-row gap-4 mt-8">
        <a
          href="#register"
          class="flex items-center justify-center min-w-[180px] rounded h-12 px-8 bg-primary hover:bg-red-700 text-white font-bold uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(212, 17, 33, 0.4)] hover:scale-105"
        >
          Join the Chronicle
        </a>
        <a
          href="#welcome"
          class="flex items-center justify-center min-w-[180px] rounded h-12 px-8 bg-transparent border border-white/20 hover:border-primary hover:text-primary text-white font-bold uppercase tracking-widest transition-all backdrop-blur-sm"
        >
          The Lore
        </a>
      </div>
    </div>
  </header>
</template>
