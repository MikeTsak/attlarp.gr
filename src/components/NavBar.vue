<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const isMenuOpen = ref(false);
const isAboutOpen = ref(false);
const isMobileAboutOpen = ref(false);
const aboutDropdownRef = ref(null);

const isAboutActive = computed(() => {
  return route.path === "/what-is-larp" || route.path === "/what-is-vampire";
});

const closeMenu = () => {
  isMenuOpen.value = false;
  isAboutOpen.value = false;
  isMobileAboutOpen.value = false;
};

const handleClickOutside = (event) => {
  if (aboutDropdownRef.value && !aboutDropdownRef.value.contains(event.target)) {
    isAboutOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});

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

          <!-- About Dropdown (Desktop) -->
          <div
            class="relative"
            ref="aboutDropdownRef"
            @mouseenter="isAboutOpen = true"
            @mouseleave="isAboutOpen = false"
          >
            <button
              @click="isAboutOpen = !isAboutOpen"
              type="button"
              class="flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] transition-colors py-2"
              :class="isAboutActive ? 'text-primary' : 'text-white hover:text-primary'"
              aria-haspopup="true"
              :aria-expanded="isAboutOpen"
            >
              <span>About</span>
              <i
                class="fa-solid fa-chevron-down text-[9px] transition-transform duration-200"
                :class="{ 'rotate-180': isAboutOpen }"
              ></i>
            </button>

            <transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="transform scale-95 opacity-0 -translate-y-1"
              enter-to-class="transform scale-100 opacity-100 translate-y-0"
              leave-active-class="transition duration-150 ease-in"
              leave-from-class="transform scale-100 opacity-100 translate-y-0"
              leave-to-class="transform scale-95 opacity-0 -translate-y-1"
            >
              <div
                v-if="isAboutOpen"
                class="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-64 rounded-xl bg-[#181112] border border-[#39282a] shadow-[0_10px_30px_rgba(0,0,0,0.85)] p-2 z-50 flex flex-col gap-1 backdrop-blur-md"
              >
                <RouterLink
                  to="/what-is-larp"
                  @click="isAboutOpen = false"
                  class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-gray-300 hover:text-white hover:bg-surface-dark transition-all"
                  :class="{ 'text-primary bg-primary/10': route.path === '/what-is-larp' }"
                >
                  <i class="fa-solid fa-masks-theater text-primary text-sm w-4 text-center"></i>
                  <span>What is LARP?</span>
                </RouterLink>

                <RouterLink
                  to="/what-is-vampire"
                  @click="isAboutOpen = false"
                  class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-gray-300 hover:text-white hover:bg-surface-dark transition-all"
                  :class="{ 'text-primary bg-primary/10': route.path === '/what-is-vampire' }"
                >
                  <i class="fa-solid fa-droplet text-primary text-sm w-4 text-center"></i>
                  <span>What is Vampire?</span>
                </RouterLink>
              </div>
            </transition>
          </div>

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

    <!-- Mobile Drawer -->
    <div
      v-if="isMenuOpen"
      class="lg:hidden bg-[#181112] border-b border-[#39282a] p-4 flex flex-col gap-4 items-center shadow-2xl"
    >
      <RouterLink to="/" @click="closeMenu" class="text-white text-xs font-bold uppercase tracking-widest">
        Home
      </RouterLink>

      <!-- Mobile About Accordion -->
      <div class="w-full flex flex-col items-center">
        <button
          @click="isMobileAboutOpen = !isMobileAboutOpen"
          class="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest py-1"
          :class="{ 'text-primary': isAboutActive }"
        >
          <span>About</span>
          <i
            class="fa-solid fa-chevron-down text-[10px] transition-transform duration-200"
            :class="{ 'rotate-180': isMobileAboutOpen }"
          ></i>
        </button>
        <div
          v-if="isMobileAboutOpen"
          class="flex flex-col gap-3 items-center pt-3 pb-2 w-full bg-surface-dark/60 rounded-lg mt-2 border border-[#39282a]"
        >
          <RouterLink
            to="/what-is-larp"
            @click="closeMenu"
            class="text-gray-300 hover:text-white text-[11px] font-bold uppercase tracking-widest flex items-center gap-2"
            :class="{ 'text-primary': route.path === '/what-is-larp' }"
          >
            <i class="fa-solid fa-masks-theater text-xs text-primary"></i>
            What is LARP?
          </RouterLink>
          <RouterLink
            to="/what-is-vampire"
            @click="closeMenu"
            class="text-gray-300 hover:text-white text-[11px] font-bold uppercase tracking-widest flex items-center gap-2"
            :class="{ 'text-primary': route.path === '/what-is-vampire' }"
          >
            <i class="fa-solid fa-droplet text-xs text-primary"></i>
            What is Vampire?
          </RouterLink>
        </div>
      </div>

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
