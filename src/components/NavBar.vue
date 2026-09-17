<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "../composables/useI18n";

const route = useRoute();
const { t, locale, setLocale, toggleLocale, isGreek, isEnglish } = useI18n();
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
            {{ t('nav.home') }}
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
              <span>{{ t('nav.about') }}</span>
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
                  <span>{{ t('nav.whatIsLarp') }}</span>
                </RouterLink>

                <RouterLink
                  to="/what-is-vampire"
                  @click="isAboutOpen = false"
                  class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-gray-300 hover:text-white hover:bg-surface-dark transition-all"
                  :class="{ 'text-primary bg-primary/10': route.path === '/what-is-vampire' }"
                >
                  <i class="fa-solid fa-droplet text-primary text-sm w-4 text-center"></i>
                  <span>{{ t('nav.whatIsVampire') }}</span>
                </RouterLink>
              </div>
            </transition>
          </div>

          <RouterLink
            to="/setting"
            class="text-xs font-bold hover:text-primary text-white uppercase tracking-[0.2em] transition-colors"
          >
            {{ t('nav.setting') }}
          </RouterLink>
          <RouterLink
            to="/storytellers"
            class="text-xs font-bold hover:text-primary text-white uppercase tracking-[0.2em] transition-colors"
          >
            {{ t('nav.storytellers') }}
          </RouterLink>
          <RouterLink
            to="/gallery"
            class="text-xs font-bold hover:text-primary text-white uppercase tracking-[0.2em] transition-colors"
          >
            {{ t('nav.gallery') }}
          </RouterLink>

          <a
            href="https://portal.attlarp.gr"
            target="_blank"
            rel="noopener"
            class="text-xs font-bold text-primary hover:text-white uppercase tracking-[0.2em] transition-colors border-b border-transparent hover:border-primary"
          >
            {{ t('nav.portal') }}
          </a>
        </div>

        <div class="flex items-center gap-3 md:gap-4">
          <!-- Desktop Language Switcher with Flags -->
          <div class="hidden sm:flex items-center p-0.5 rounded-lg border border-[#39282a] bg-surface-dark/90 backdrop-blur-sm">
            <button
              type="button"
              @click="setLocale('en')"
              class="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wider transition-all cursor-pointer"
              :class="isEnglish ? 'bg-primary text-white shadow-sm' : 'text-gray-400 hover:text-white'"
              title="English"
              aria-label="Switch to English"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" class="w-4 h-2.5 rounded-[2px] shadow-xs shrink-0">
                <clipPath id="uk-clip-desktop"><rect width="60" height="30"/></clipPath>
                <g clip-path="url(#uk-clip-desktop)">
                  <path d="M0 0h60v30H0z" fill="#012169"/>
                  <path d="m0 0 60 30m0-30L0 30" stroke="#fff" stroke-width="6"/>
                  <path d="m0 0 30 15m30 15L30 15m0 0L0 30m30-15 30-15" stroke="#C8102E" stroke-width="2"/>
                  <path d="M30 0v30M0 15h60" stroke="#fff" stroke-width="10"/>
                  <path d="M30 0v30M0 15h60" stroke="#C8102E" stroke-width="6"/>
                </g>
              </svg>
              <span>EN</span>
            </button>
            <button
              type="button"
              @click="setLocale('el')"
              class="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wider transition-all cursor-pointer"
              :class="isGreek ? 'bg-primary text-white shadow-sm' : 'text-gray-400 hover:text-white'"
              title="Ελληνικά"
              aria-label="Αλλαγή σε Ελληνικά"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 18" class="w-4 h-2.5 rounded-[2px] shadow-xs shrink-0">
                <rect width="27" height="18" fill="#0D5EAF"/>
                <path d="M0 2h27v2H0zm0 4h27v2H0zm0 4h27v2H0zm0 4h27v2H0z" fill="#fff"/>
                <rect width="10" height="10" fill="#0D5EAF"/>
                <path d="M4 0h2v10H4zm-4 4h10v2H0z" fill="#fff"/>
              </svg>
              <span>ΕΛ</span>
            </button>
          </div>

          <a
            href="https://discord.gg/ZeNg6cdPbj"
            target="_blank"
            rel="noopener noreferrer"
            @click="trackClick('Discord')"
            class="hidden sm:flex items-center justify-center gap-2 overflow-hidden rounded h-10 px-6 bg-primary hover:bg-primary-dark transition-all text-white text-xs font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(212, 17, 33, 0.3)] hover:shadow-[0_0_25px_rgba(212, 17, 33, 0.6)]"
          >
            <span>{{ t('nav.join') }}</span>
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
      <!-- Mobile Language Switcher with Flags -->
      <div class="flex items-center gap-2.5 pb-3 border-b border-[#39282a] w-full justify-center">
        <button
          type="button"
          @click="setLocale('en')"
          class="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
          :class="isEnglish ? 'bg-primary text-white shadow-md' : 'text-gray-400 bg-surface-dark border border-[#39282a] hover:text-white'"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" class="w-4 h-2.5 rounded-[2px] shadow-xs shrink-0">
            <clipPath id="uk-clip-mobile"><rect width="60" height="30"/></clipPath>
            <g clip-path="url(#uk-clip-mobile)">
              <path d="M0 0h60v30H0z" fill="#012169"/>
              <path d="m0 0 60 30m0-30L0 30" stroke="#fff" stroke-width="6"/>
              <path d="m0 0 30 15m30 15L30 15m0 0L0 30m30-15 30-15" stroke="#C8102E" stroke-width="2"/>
              <path d="M30 0v30M0 15h60" stroke="#fff" stroke-width="10"/>
              <path d="M30 0v30M0 15h60" stroke="#C8102E" stroke-width="6"/>
            </g>
          </svg>
          <span>English</span>
        </button>
        <button
          type="button"
          @click="setLocale('el')"
          class="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
          :class="isGreek ? 'bg-primary text-white shadow-md' : 'text-gray-400 bg-surface-dark border border-[#39282a] hover:text-white'"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 18" class="w-4 h-2.5 rounded-[2px] shadow-xs shrink-0">
            <rect width="27" height="18" fill="#0D5EAF"/>
            <path d="M0 2h27v2H0zm0 4h27v2H0zm0 4h27v2H0zm0 4h27v2H0z" fill="#fff"/>
            <rect width="10" height="10" fill="#0D5EAF"/>
            <path d="M4 0h2v10H4zm-4 4h10v2H0z" fill="#fff"/>
          </svg>
          <span>Ελληνικά</span>
        </button>
      </div>

      <RouterLink to="/" @click="closeMenu" class="text-white text-xs font-bold uppercase tracking-widest">
        {{ t('nav.home') }}
      </RouterLink>

      <!-- Mobile About Accordion -->
      <div class="w-full flex flex-col items-center">
        <button
          @click="isMobileAboutOpen = !isMobileAboutOpen"
          class="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest py-1"
          :class="{ 'text-primary': isAboutActive }"
        >
          <span>{{ t('nav.about') }}</span>
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
            {{ t('nav.whatIsLarp') }}
          </RouterLink>
          <RouterLink
            to="/what-is-vampire"
            @click="closeMenu"
            class="text-gray-300 hover:text-white text-[11px] font-bold uppercase tracking-widest flex items-center gap-2"
            :class="{ 'text-primary': route.path === '/what-is-vampire' }"
          >
            <i class="fa-solid fa-droplet text-xs text-primary"></i>
            {{ t('nav.whatIsVampire') }}
          </RouterLink>
        </div>
      </div>

      <RouterLink to="/setting" @click="closeMenu" class="text-white text-xs font-bold uppercase tracking-widest">
        {{ t('nav.setting') }}
      </RouterLink>
      <RouterLink to="/storytellers" @click="closeMenu" class="text-white text-xs font-bold uppercase tracking-widest">
        {{ t('nav.storytellers') }}
      </RouterLink>
      <RouterLink to="/gallery" @click="closeMenu" class="text-white text-xs font-bold uppercase tracking-widest">
        {{ t('nav.gallery') }}
      </RouterLink>
      <a
        href="https://portal.attlarp.gr"
        target="_blank"
        rel="noopener"
        class="text-primary text-xs font-bold uppercase tracking-widest"
      >
        {{ t('nav.portal') }}
      </a>
      <a
        href="https://discord.gg/ZeNg6cdPbj"
        target="_blank"
        rel="noopener noreferrer"
        @click="trackClick('Discord')"
        class="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest mt-2"
      >
        <span>{{ t('nav.joinDiscord') }}</span>
        <img src="/img/discord.webp" alt="Discord" class="h-4 w-4 object-contain" />
      </a>
    </div>
  </nav>
</template>
