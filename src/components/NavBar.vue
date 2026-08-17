<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);

const closeMenu = () => {
  isMenuOpen.value = false;
};

const trackClick = (platform) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'click_social', {
      event_category: 'Social',
      event_label: platform,
    });
  }
};
</script>

<template>
  <nav class="sticky top-0 z-50 w-full border-b border-[#39282a] bg-[#181112]/95 backdrop-blur-md">
    <div class="px-4 md:px-10 lg:px-20 flex justify-center">
      <div class="flex h-16 w-full max-w-[1400px] items-center justify-between">
        <RouterLink
          to="/"
          class="flex items-center gap-3 text-white hover:text-primary transition-colors cursor-pointer group"
        >
          <img
            src="/img/animated.gif"
            alt="Athens Through Time Logo"
            class="h-10 w-10 object-cover rounded-full border border-primary/20"
          />
          <h2 class="text-lg font-bold uppercase tracking-widest hidden sm:block">
            Athens Through Time
          </h2>
        </RouterLink>

        <div class="hidden lg:flex flex-1 justify-center items-center gap-8">
          <RouterLink
            to="/"
            class="text-xs font-bold hover:text-primary text-white uppercase tracking-[0.2em] transition-colors"
          >
            Home
          </RouterLink>
          <RouterLink
            to="/setting"
            class="text-xs font-bold hover:text-primary text-white uppercase tracking-[0.2em] transition-colors"
          >
            The Setting
          </RouterLink>
          <RouterLink
            to="/storytellers"
            class="text-xs font-bold hover:text-primary text-white uppercase tracking-[0.2em] transition-colors"
          >
            Storytellers
          </RouterLink>
          <RouterLink
            to="/gallery"
            class="text-xs font-bold hover:text-primary text-white uppercase tracking-[0.2em] transition-colors"
          >
            Gallery
          </RouterLink>

          <a
            href="https://portal.attlarp.gr"
            target="_blank"
            rel="noopener"
            class="text-xs font-bold text-primary hover:text-white uppercase tracking-[0.2em] transition-colors border-b border-transparent hover:border-primary"
          >
            Portal
          </a>
        </div>

        <div class="flex items-center gap-4">
          <a
            href="https://discord.gg/ZeNg6cdPbj"
            target="_blank"
            rel="noopener noreferrer"
            @click="trackClick('Discord')"
            class="hidden sm:flex items-center justify-center gap-2 overflow-hidden rounded h-10 px-6 bg-primary hover:bg-primary-dark transition-all text-white text-xs font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(212, 17, 33, 0.3)] hover:shadow-[0_0_25px_rgba(212, 17, 33, 0.6)]"
          >
            <span>Join</span>
            <img src="/img/discord.webp" alt="Discord" class="h-4 w-4 object-contain" />
          </a>
          <button class="lg:hidden text-white" @click="isMenuOpen = !isMenuOpen" aria-label="Toggle navigation menu">
            <span class="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </div>

    <div
      v-if="isMenuOpen"
      class="lg:hidden bg-[#181112] border-b border-[#39282a] p-4 flex flex-col gap-4 items-center shadow-2xl"
    >
      <RouterLink to="/" @click="closeMenu" class="text-white text-xs font-bold uppercase tracking-widest">
        Home
      </RouterLink>
      <RouterLink to="/setting" @click="closeMenu" class="text-white text-xs font-bold uppercase tracking-widest">
        Setting
      </RouterLink>
      <RouterLink to="/storytellers" @click="closeMenu" class="text-white text-xs font-bold uppercase tracking-widest">
        Storytellers
      </RouterLink>
      <RouterLink to="/gallery" @click="closeMenu" class="text-white text-xs font-bold uppercase tracking-widest">
        Gallery
      </RouterLink>
      <a
        href="https://portal.attlarp.gr"
        target="_blank"
        rel="noopener"
        class="text-primary text-xs font-bold uppercase tracking-widest"
      >
        Portal
      </a>
      <a
        href="https://discord.gg/ZeNg6cdPbj"
        target="_blank"
        rel="noopener noreferrer"
        @click="trackClick('Discord')"
        class="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest mt-2"
      >
        <span>Join Discord</span>
        <img src="/img/discord.webp" alt="Discord" class="h-4 w-4 object-contain" />
      </a>
    </div>
  </nav>
</template>
