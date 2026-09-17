<script setup>
import { computed } from "vue";
import { useSeo } from "../composables/useSeo";
import { useI18n } from "../composables/useI18n";

const { t } = useI18n();

useSeo({
  title: computed(() => t("seo.whatIsVampireTitle")),
  description: computed(() => t("seo.whatIsVampireDesc")),
  path: "/what-is-vampire",
});

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

</script>

<template>
  <div class="bg-background-dark font-tech text-white min-h-screen">
    <!-- Hero Section : Split Showcase with Wide Reflective Photo -->
    <section class="relative min-h-[85vh] w-full flex flex-col justify-center border-b border-[#39282a] overflow-hidden">
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-gradient-to-t from-[#181112] via-[#181112]/85 to-[#181112]/60 z-10"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-[#181112] via-transparent to-transparent z-10"></div>
        <div
          class="absolute inset-0 bg-cover bg-center opacity-20 filter grayscale"
          style="background-image: url('/img/back39.jpg')"
        ></div>
      </div>

      <div class="relative z-20 px-4 md:px-10 lg:px-20 max-w-[1400px] mx-auto w-full py-16 lg:py-24">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <!-- Hero Text -->
          <div class="lg:col-span-7 space-y-8">
            <div class="flex flex-wrap items-center gap-3">
              <span
                class="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-primary border border-primary/40"
              >
                <i class="fa-solid fa-droplet text-xs"></i>
                {{ t('whatIsVampire.heroBadge1') }}
              </span>
              <span
                class="inline-flex items-center gap-2 rounded-full bg-surface-dark px-4 py-1 text-xs font-bold uppercase tracking-widest text-gray-400 border border-[#39282a]"
              >
                <i class="fa-solid fa-shield-halved text-primary text-xs"></i>
                {{ t('whatIsVampire.heroBadge2') }}
              </span>
            </div>

            <h1
              class="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.88] tracking-tighter uppercase"
            >
              {{ t('whatIsVampire.heroTitlePrefix') }} <br />
              <span class="text-primary text-shadow-glow">{{ t('whatIsVampire.heroTitleSuffix') }}</span>
            </h1>

            <p
              class="text-gray-300 text-lg sm:text-xl font-light leading-relaxed border-l-4 border-primary pl-6 max-w-2xl"
            >
              {{ t('whatIsVampire.heroLead') }}
            </p>

            <div class="flex flex-wrap gap-4 pt-2">
              <button
                @click="scrollToSection('the-masquerade')"
                class="flex cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-lg h-14 px-8 bg-primary hover:bg-primary-dark transition-all text-white text-xs font-bold tracking-widest uppercase shadow-[0_0_25px_rgba(212,17,33,0.4)]"
              >
                <span>{{ t('whatIsVampire.traditionBtn') }}</span>
                <i class="fa-solid fa-arrow-down text-xs"></i>
              </button>
              <RouterLink
                to="/what-is-larp"
                class="flex items-center justify-center gap-3 rounded-lg h-14 px-8 border border-[#39282a] hover:border-primary bg-surface-dark/80 hover:bg-surface-dark transition-all text-gray-300 hover:text-white text-xs font-bold tracking-widest uppercase"
              >
                <span>{{ t('whatIsVampire.larpBtn') }}</span>
                <i class="fa-solid fa-chevron-right text-xs"></i>
              </RouterLink>
            </div>
          </div>

          <!-- Hero Image: Kindred in Venetian Court Mask at Elysium -->
          <div class="lg:col-span-5 flex justify-center">
            <div
              class="relative w-full max-w-md rounded-2xl overflow-hidden border-2 border-primary/40 bg-surface-dark shadow-[0_0_50px_rgba(212,17,33,0.25)] group"
            >
              <img
                src="/img/vampire-masquerade-mask.jpg"
                alt="The Masquerade Veil"
                class="w-full h-[420px] sm:h-[520px] object-cover object-center filter brightness-95 contrast-115 transition-transform duration-700 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#181112] via-transparent to-transparent"></div>
              <div
                class="absolute bottom-6 left-6 right-6 p-5 bg-[#181112]/95 backdrop-blur-md rounded-xl border border-[#39282a]"
              >
                <div class="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest mb-1">
                  <i class="fa-solid fa-masks-theater text-xs"></i>
                  <span>{{ t('whatIsVampire.veilTag') }}</span>
                </div>
                <p class="text-xs text-gray-300 font-light leading-relaxed">
                  {{ t('whatIsVampire.veilDesc') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Official Paradox Interactive & Dark Pack Licensing Banner -->
    <section class="border-b border-[#39282a] bg-[#120809] py-10 px-4 md:px-10 lg:px-20">
      <div class="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div class="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
          <img
            src="/img/DarkPack_Logo2.png"
            alt="Dark Pack Official Logo"
            class="h-20 w-auto object-contain opacity-95 shrink-0"
          />
          <div class="space-y-2">
            <span class="text-xs font-bold uppercase tracking-[0.25em] text-primary block">
              {{ t('whatIsVampire.licensingBadge') }}
            </span>
            <h3 class="text-lg sm:text-xl font-black uppercase text-white">
              {{ t('whatIsVampire.licensingTitle') }}
            </h3>
            <p class="text-xs sm:text-sm text-gray-300 font-light max-w-3xl leading-relaxed">
              {{ t('whatIsVampire.licensingDesc') }}
            </p>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row items-center gap-4 shrink-0">
          <a
            href="https://www.worldofdarkness.com/dark-pack"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/40 hover:border-primary bg-primary/10 hover:bg-primary/20 text-white text-xs font-bold uppercase tracking-widest transition-all shadow-[0_0_15px_rgba(212,17,33,0.2)]"
          >
            <span>{{ t('whatIsVampire.darkPackBtn') }}</span>
            <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
          </a>
          <a
            href="https://www.worldofdarkness.com"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 px-6 py-3 rounded-lg border border-[#39282a] hover:border-gray-500 bg-surface-dark text-gray-300 hover:text-white text-xs font-bold uppercase tracking-widest transition-all"
          >
            <span>{{ t('whatIsVampire.wodBtn') }}</span>
            <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
          </a>
        </div>
      </div>
    </section>

    <!-- The Tragic Condition : The Beast, The Hunger, and Humanity -->
    <section class="py-20 md:py-28 px-4 md:px-10 lg:px-20 bg-background-dark">
      <div class="max-w-[1400px] mx-auto">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="text-primary text-xs font-bold uppercase tracking-[0.25em] block mb-2">
            {{ t('whatIsVampire.struggleBadge') }}
          </span>
          <h2 class="text-white text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight">
            {{ t('whatIsVampire.struggleTitle') }}
          </h2>
          <p class="text-text-muted text-sm sm:text-base mt-4 font-light">
            {{ t('whatIsVampire.struggleDesc') }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <!-- The Beast Card -->
          <div class="bg-surface-dark p-8 rounded-2xl border border-[#39282a] hover:border-primary/50 transition-all flex flex-col justify-between">
            <div class="space-y-4">
              <span class="size-14 rounded-xl bg-primary/20 text-primary flex items-center justify-center text-2xl">
                <i class="fa-solid fa-skull"></i>
              </span>
              <h3 class="text-2xl font-black uppercase text-white">{{ t('whatIsVampire.beastTitle') }}</h3>
              <p class="text-gray-400 text-sm leading-relaxed font-light">
                {{ t('whatIsVampire.beastDesc') }}
              </p>
            </div>
            <div class="pt-6 border-t border-[#39282a] text-xs font-bold uppercase tracking-widest text-primary">
              {{ t('whatIsVampire.beastTag') }}
            </div>
          </div>

          <!-- The Hunger Card -->
          <div class="bg-surface-dark p-8 rounded-2xl border border-[#39282a] hover:border-primary/50 transition-all flex flex-col justify-between">
            <div class="space-y-4">
              <span class="size-14 rounded-xl bg-primary/20 text-primary flex items-center justify-center text-2xl">
                <i class="fa-solid fa-droplet"></i>
              </span>
              <h3 class="text-2xl font-black uppercase text-white">{{ t('whatIsVampire.hungerTitle') }}</h3>
              <p class="text-gray-400 text-sm leading-relaxed font-light">
                {{ t('whatIsVampire.hungerDesc') }}
              </p>
            </div>
            <div class="pt-6 border-t border-[#39282a] text-xs font-bold uppercase tracking-widest text-primary">
              {{ t('whatIsVampire.hungerTag') }}
            </div>
          </div>

          <!-- Humanity Card -->
          <div class="bg-surface-dark p-8 rounded-2xl border border-[#39282a] hover:border-primary/50 transition-all flex flex-col justify-between">
            <div class="space-y-4">
              <span class="size-14 rounded-xl bg-primary/20 text-primary flex items-center justify-center text-2xl">
                <i class="fa-solid fa-heart-crack"></i>
              </span>
              <h3 class="text-2xl font-black uppercase text-white">{{ t('whatIsVampire.humanityTitle') }}</h3>
              <p class="text-gray-400 text-sm leading-relaxed font-light">
                {{ t('whatIsVampire.humanityDesc') }}
              </p>
            </div>
            <div class="pt-6 border-t border-[#39282a] text-xs font-bold uppercase tracking-widest text-primary">
              {{ t('whatIsVampire.humanityTag') }}
            </div>
          </div>
        </div>

        <!-- The Visceral Feed & Court Feast : Dual Photographic Showcase -->
        <div class="mb-16 rounded-2xl overflow-hidden border border-[#39282a] bg-surface-dark shadow-2xl">
          <div class="p-8 sm:p-12 border-b border-[#39282a]">
            <div class="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-[0.2em] bg-primary/10 px-3 py-1 rounded border border-primary/20 w-fit mb-4">
              <i class="fa-solid fa-skull text-xs"></i>
              {{ t('whatIsVampire.feedBadge') }}
            </div>

            <h3 class="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-white leading-tight mb-4">
              {{ t('whatIsVampire.feedTitle') }}
            </h3>

            <p class="text-gray-300 text-sm sm:text-base font-light leading-relaxed max-w-4xl">
              {{ t('whatIsVampire.feedDesc') }}
            </p>
          </div>

          <!-- Dual Photographic Split -->
          <div class="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#39282a]">
            <!-- Street Predation -->
            <div class="flex flex-col justify-between group">
              <div class="relative h-72 sm:h-96 overflow-hidden">
                <img
                  src="/img/vampire-feeding-hunger.jpg"
                  alt="Urban Predation and the Bestial Thirst"
                  class="w-full h-full object-cover object-top filter brightness-95 contrast-115 transition-transform duration-700 group-hover:scale-105"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-surface-dark via-transparent to-transparent"></div>
                <div class="absolute top-4 left-4 bg-primary/90 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded">
                  {{ t('whatIsVampire.streetBadge') }}
                </div>
              </div>
              <div class="p-6 sm:p-8 space-y-3">
                <div class="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider">
                  <i class="fa-solid fa-triangle-exclamation text-xs"></i>
                  <span>{{ t('whatIsVampire.streetTag') }}</span>
                </div>
                <h4 class="text-xl font-bold uppercase text-white">{{ t('whatIsVampire.streetTitle') }}</h4>
                <p class="text-xs text-gray-400 font-light leading-relaxed">
                  {{ t('whatIsVampire.streetDesc') }}
                </p>
              </div>
            </div>

            <!-- Court Salon Feast -->
            <div class="flex flex-col justify-between group">
              <div class="relative h-72 sm:h-96 overflow-hidden">
                <img
                  src="/img/vampire-blood-toast.jpg"
                  alt="The Sanguine Banquet and Blood Resonance"
                  class="w-full h-full object-cover object-top filter brightness-95 contrast-115 transition-transform duration-700 group-hover:scale-105"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-surface-dark via-transparent to-transparent"></div>
                <div class="absolute top-4 left-4 bg-[#8a0b16] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded">
                  {{ t('whatIsVampire.salonBadge') }}
                </div>
              </div>
              <div class="p-6 sm:p-8 space-y-3">
                <div class="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider">
                  <i class="fa-solid fa-wine-glass text-xs"></i>
                  <span>{{ t('whatIsVampire.salonTag') }}</span>
                </div>
                <h4 class="text-xl font-bold uppercase text-white">{{ t('whatIsVampire.salonTitle') }}</h4>
                <p class="text-xs text-gray-400 font-light leading-relaxed">
                  {{ t('whatIsVampire.salonDesc') }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Vitae & Blood Sorcery Section : Featuring vampire-blood-vial.jpg, vampire-blood-ritual-bowl.jpg, and spirit-board.jpg -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          <!-- Blood Vial Showcase (vampire-blood-vial.jpg) -->
          <div class="bg-surface-dark rounded-2xl border border-[#39282a] overflow-hidden flex flex-col justify-between shadow-2xl group">
            <div class="relative h-64 sm:h-72 overflow-hidden">
              <img
                src="/img/vampire-blood-vial.jpg"
                alt="Vial of Vitae"
                class="w-full h-full object-cover object-center filter brightness-95 contrast-115 transition-transform duration-700 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-surface-dark via-transparent to-transparent"></div>
              <div class="absolute top-4 left-4 bg-primary/90 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded">
                {{ t('whatIsVampire.vitaeBadge') }}
              </div>
            </div>

            <div class="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
              <div class="space-y-3">
                <div class="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest">
                  <i class="fa-solid fa-flask text-xs"></i>
                  <span>{{ t('whatIsVampire.vitaeTag') }}</span>
                </div>
                <h3 class="text-xl sm:text-2xl font-black uppercase text-white">
                  {{ t('whatIsVampire.vitaeTitle') }}
                </h3>
                <p class="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                  {{ t('whatIsVampire.vitaeDesc') }}
                </p>
                <div class="p-3.5 rounded-lg bg-[#181112] border border-[#39282a] space-y-1 text-xs">
                  <div class="flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-[11px]">
                    <i class="fa-solid fa-link text-xs"></i>
                    <span>{{ t('whatIsVampire.bloodBondTitle') }}</span>
                  </div>
                  <p class="text-gray-400 font-light leading-relaxed text-[11px]">
                    {{ t('whatIsVampire.bloodBondDesc') }}
                  </p>
                </div>
              </div>

              <div class="pt-4 border-t border-[#39282a] text-xs font-bold uppercase tracking-widest text-gray-400">
                {{ t('whatIsVampire.vitaeFooter') }}
              </div>
            </div>
          </div>

          <!-- Blood Ritual Bowl Showcase (vampire-blood-ritual-bowl.jpg) -->
          <div class="bg-surface-dark rounded-2xl border border-[#39282a] overflow-hidden flex flex-col justify-between shadow-2xl group">
            <div class="relative h-64 sm:h-72 overflow-hidden">
              <img
                src="/img/vampire-blood-ritual-bowl.jpg"
                alt="Blood Sorcery Ritual Basin"
                class="w-full h-full object-cover object-center filter brightness-95 contrast-115 transition-transform duration-700 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-surface-dark via-transparent to-transparent"></div>
              <div class="absolute top-4 left-4 bg-[#8a0b16] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded">
                {{ t('whatIsVampire.sorceryBadge') }}
              </div>
            </div>

            <div class="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
              <div class="space-y-3">
                <div class="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest">
                  <i class="fa-solid fa-hand-holding-droplet text-xs"></i>
                  <span>{{ t('whatIsVampire.sorceryTag') }}</span>
                </div>
                <h3 class="text-xl sm:text-2xl font-black uppercase text-white">
                  {{ t('whatIsVampire.sorceryTitle') }}
                </h3>
                <p class="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                  {{ t('whatIsVampire.sorceryDesc') }}
                </p>
                <div class="p-3.5 rounded-lg bg-[#181112] border border-[#39282a] space-y-1 text-xs">
                  <div class="flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-[11px]">
                    <i class="fa-solid fa-fire text-xs"></i>
                    <span>{{ t('whatIsVampire.formulasTitle') }}</span>
                  </div>
                  <p class="text-gray-400 font-light leading-relaxed text-[11px]">
                    {{ t('whatIsVampire.formulasDesc') }}
                  </p>
                </div>
              </div>

              <div class="pt-4 border-t border-[#39282a] text-xs font-bold uppercase tracking-widest text-gray-400">
                {{ t('whatIsVampire.sorceryFooter') }}
              </div>
            </div>
          </div>

          <!-- Occult Mysteries Showcase (spirit-board.jpg) -->
          <div class="bg-surface-dark rounded-2xl border border-[#39282a] overflow-hidden flex flex-col justify-between shadow-2xl group">
            <div class="relative h-64 sm:h-72 overflow-hidden">
              <img
                src="/img/spirit-board.jpg"
                alt="Necromancy and Spirit Communion"
                class="w-full h-full object-cover object-center filter brightness-90 contrast-115 transition-transform duration-700 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-surface-dark via-transparent to-transparent"></div>
              <div class="absolute top-4 left-4 bg-[#631019] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded">
                {{ t('whatIsVampire.oblivionBadge') }}
              </div>
            </div>

            <div class="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
              <div class="space-y-3">
                <div class="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest">
                  <i class="fa-solid fa-hat-wizard text-xs"></i>
                  <span>{{ t('whatIsVampire.oblivionTag') }}</span>
                </div>
                <h3 class="text-xl sm:text-2xl font-black uppercase text-white">
                  {{ t('whatIsVampire.oblivionTitle') }}
                </h3>
                <p class="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                  {{ t('whatIsVampire.oblivionDesc') }}
                </p>
                <div class="p-3.5 rounded-lg bg-[#181112] border border-[#39282a] space-y-1 text-xs">
                  <div class="flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-[11px]">
                    <i class="fa-solid fa-vial-circle-check text-xs"></i>
                    <span>{{ t('whatIsVampire.thinBloodTitle') }}</span>
                  </div>
                  <p class="text-gray-400 font-light leading-relaxed text-[11px]">
                    {{ t('whatIsVampire.thinBloodDesc') }}
                  </p>
                </div>
              </div>

              <div class="pt-4 border-t border-[#39282a] text-xs font-bold uppercase tracking-widest text-gray-400">
                {{ t('whatIsVampire.oblivionFooter') }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- The First Tradition : The Masquerade in the Digital Age -->
    <section id="the-masquerade" class="py-20 md:py-28 px-4 md:px-10 lg:px-20 bg-[#120809] border-t border-[#39282a]">
      <div class="max-w-[1400px] mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div class="lg:col-span-6 space-y-6">
            <div class="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-[0.2em] bg-primary/10 px-3 py-1 rounded border border-primary/20 w-fit">
              <i class="fa-solid fa-eye-slash text-xs"></i>
              {{ t('whatIsVampire.masqueradeBadge') }}
            </div>
            <h2 class="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              {{ t('whatIsVampire.masqueradeTitle') }}
            </h2>
            <p class="text-gray-300 text-base sm:text-lg font-light leading-relaxed">
              {{ t('whatIsVampire.masqueradeP1') }}
            </p>
            <p class="text-gray-400 text-sm leading-relaxed font-light">
              {{ t('whatIsVampire.masqueradeP2') }}
            </p>
          </div>

          <div class="lg:col-span-6">
            <div class="relative rounded-2xl overflow-hidden border-2 border-primary/30 bg-surface-dark shadow-[0_0_40px_rgba(212,17,33,0.2)]">
              <img
                src="/img/masquerade-reflection.jpg"
                alt="Kindred Checking the Shadows"
                class="w-full h-80 sm:h-96 object-cover object-top filter brightness-90 contrast-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#181112] via-transparent to-transparent"></div>
              <div class="absolute bottom-4 left-4 right-4 p-4 bg-[#181112]/95 backdrop-blur-md rounded-xl border border-[#39282a]">
                <p class="text-xs font-bold uppercase tracking-widest text-primary mb-1">
                  {{ t('whatIsVampire.walkingSheepTitle') }}
                </p>
                <p class="text-xs text-gray-300 font-light">
                  {{ t('whatIsVampire.walkingSheepDesc') }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- The Six Traditions of Caine Grid -->
        <div class="border-t border-[#39282a] pt-16">
          <div class="text-center max-w-2xl mx-auto mb-12">
            <span class="text-primary text-xs font-bold uppercase tracking-[0.2em] block mb-1">
              {{ t('whatIsVampire.sixTraditionsBadge') }}
            </span>
            <h3 class="text-2xl sm:text-3xl font-black uppercase text-white">
              {{ t('whatIsVampire.sixTraditionsTitle') }}
            </h3>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="bg-surface-dark p-6 rounded-xl border border-[#39282a] space-y-2">
              <div class="flex items-center justify-between mb-1">
                <span class="text-primary font-black text-lg">I</span>
                <span class="text-[10px] uppercase font-bold text-gray-500 tracking-widest">{{ t('whatIsVampire.traditionTag') }}</span>
              </div>
              <h4 class="text-base font-bold uppercase text-white">{{ t('whatIsVampire.t1Title') }}</h4>
              <p class="text-xs text-gray-400 font-light leading-relaxed">
                {{ t('whatIsVampire.t1Desc') }}
              </p>
            </div>

            <div class="bg-surface-dark p-6 rounded-xl border border-[#39282a] space-y-2">
              <div class="flex items-center justify-between mb-1">
                <span class="text-primary font-black text-lg">II</span>
                <span class="text-[10px] uppercase font-bold text-gray-500 tracking-widest">{{ t('whatIsVampire.traditionTag') }}</span>
              </div>
              <h4 class="text-base font-bold uppercase text-white">{{ t('whatIsVampire.t2Title') }}</h4>
              <p class="text-xs text-gray-400 font-light leading-relaxed">
                {{ t('whatIsVampire.t2Desc') }}
              </p>
            </div>

            <div class="bg-surface-dark p-6 rounded-xl border border-[#39282a] space-y-2">
              <div class="flex items-center justify-between mb-1">
                <span class="text-primary font-black text-lg">III</span>
                <span class="text-[10px] uppercase font-bold text-gray-500 tracking-widest">{{ t('whatIsVampire.traditionTag') }}</span>
              </div>
              <h4 class="text-base font-bold uppercase text-white">{{ t('whatIsVampire.t3Title') }}</h4>
              <p class="text-xs text-gray-400 font-light leading-relaxed">
                {{ t('whatIsVampire.t3Desc') }}
              </p>
            </div>

            <div class="bg-surface-dark p-6 rounded-xl border border-[#39282a] space-y-2">
              <div class="flex items-center justify-between mb-1">
                <span class="text-primary font-black text-lg">IV</span>
                <span class="text-[10px] uppercase font-bold text-gray-500 tracking-widest">{{ t('whatIsVampire.traditionTag') }}</span>
              </div>
              <h4 class="text-base font-bold uppercase text-white">{{ t('whatIsVampire.t4Title') }}</h4>
              <p class="text-xs text-gray-400 font-light leading-relaxed">
                {{ t('whatIsVampire.t4Desc') }}
              </p>
            </div>

            <div class="bg-surface-dark p-6 rounded-xl border border-[#39282a] space-y-2">
              <div class="flex items-center justify-between mb-1">
                <span class="text-primary font-black text-lg">V</span>
                <span class="text-[10px] uppercase font-bold text-gray-500 tracking-widest">{{ t('whatIsVampire.traditionTag') }}</span>
              </div>
              <h4 class="text-base font-bold uppercase text-white">{{ t('whatIsVampire.t5Title') }}</h4>
              <p class="text-xs text-gray-400 font-light leading-relaxed">
                {{ t('whatIsVampire.t5Desc') }}
              </p>
            </div>

            <div class="bg-surface-dark p-6 rounded-xl border border-[#39282a] space-y-2">
              <div class="flex items-center justify-between mb-1">
                <span class="text-primary font-black text-lg">VI</span>
                <span class="text-[10px] uppercase font-bold text-gray-500 tracking-widest">{{ t('whatIsVampire.traditionTag') }}</span>
              </div>
              <h4 class="text-base font-bold uppercase text-white">{{ t('whatIsVampire.t6Title') }}</h4>
              <p class="text-xs text-gray-400 font-light leading-relaxed">
                {{ t('whatIsVampire.t6Desc') }}
              </p>
            </div>
          </div>

          <!-- The Sovereign Decrees : SchreckNET & Sealed Decrees (vampire-wax-seal.jpg) -->
          <div class="mt-16 rounded-2xl overflow-hidden border border-[#39282a] bg-surface-dark shadow-2xl">
            <div class="grid grid-cols-1 lg:grid-cols-12 items-center">
              <div class="lg:col-span-5 p-8 sm:p-12 space-y-6 order-2 lg:order-1">
                <div class="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-[0.2em] bg-primary/10 px-3 py-1 rounded border border-primary/20 w-fit">
                  <i class="fa-solid fa-network-wired text-xs"></i>
                  {{ t('whatIsVampire.decreeBadge') }}
                </div>

                <h3 class="text-2xl sm:text-3xl font-black uppercase text-white leading-tight">
                  {{ t('whatIsVampire.decreeTitle') }}
                </h3>

                <p class="text-gray-300 text-sm sm:text-base font-light leading-relaxed">
                  {{ t('whatIsVampire.decreeP1') }}
                </p>

                <p class="text-gray-400 text-sm font-light leading-relaxed">
                  {{ t('whatIsVampire.decreeP2') }}
                </p>

                <div class="space-y-3 pt-2">
                  <div class="p-4 rounded-xl bg-[#181112] border border-[#39282a] space-y-1">
                    <span class="text-xs font-bold uppercase tracking-widest text-primary block">
                      {{ t('whatIsVampire.sealProvenanceTitle') }}
                    </span>
                    <p class="text-xs text-gray-400 font-light leading-relaxed">
                      {{ t('whatIsVampire.sealProvenanceDesc') }}
                    </p>
                  </div>

                  <div class="p-4 rounded-xl bg-[#181112] border border-[#39282a] space-y-1">
                    <span class="text-xs font-bold uppercase tracking-widest text-primary block">
                      {{ t('whatIsVampire.ledgerBoonsTitle') }}
                    </span>
                    <p class="text-xs text-gray-400 font-light leading-relaxed">
                      {{ t('whatIsVampire.ledgerBoonsDesc') }}
                    </p>
                  </div>
                </div>
              </div>

              <div class="lg:col-span-7 relative h-80 sm:h-[450px] order-1 lg:order-2 overflow-hidden group">
                <img
                  src="/img/vampire-wax-seal.jpg"
                  alt="Official Kindred Decree"
                  class="w-full h-full object-cover object-center filter brightness-95 contrast-115 transition-transform duration-700 group-hover:scale-105"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-[#181112] via-transparent to-transparent lg:hidden"></div>
                <div class="absolute bottom-4 left-4 right-4 p-4 bg-[#181112]/95 backdrop-blur-md rounded-xl border border-[#39282a] lg:hidden">
                  <span class="text-xs font-bold uppercase tracking-widest text-primary block mb-1">
                    {{ t('whatIsVampire.crimsonSealTag') }}
                  </span>
                  <p class="text-xs text-gray-300 font-light">
                    {{ t('whatIsVampire.crimsonSealDesc') }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- The Camarilla Domain of Athens -->
    <section class="py-20 md:py-28 px-4 md:px-10 lg:px-20 bg-background-dark border-t border-[#39282a]">
      <div class="max-w-[1400px] mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div class="lg:col-span-6 space-y-6">
            <div class="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-[0.2em] bg-primary/10 px-3 py-1 rounded border border-primary/20 w-fit">
              <i class="fa-solid fa-chess-rook text-xs"></i>
              {{ t('whatIsVampire.domainBadge') }}
            </div>

            <h2 class="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              {{ t('whatIsVampire.domainTitle') }}
            </h2>

            <p class="text-gray-300 text-base sm:text-lg font-light leading-relaxed">
              {{ t('whatIsVampire.domainP1') }}
            </p>

            <p class="text-gray-400 text-sm leading-relaxed font-light">
              {{ t('whatIsVampire.domainP2') }}
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div class="p-5 rounded-xl bg-surface-dark border border-[#39282a] space-y-2">
                <div class="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider">
                  <i class="fa-solid fa-crown text-xs"></i>
                  <span>{{ t('whatIsVampire.princePrimogenTitle') }}</span>
                </div>
                <p class="text-xs text-gray-400 font-light leading-relaxed">
                  {{ t('whatIsVampire.princePrimogenDesc') }}
                </p>
              </div>

              <div class="p-5 rounded-xl bg-surface-dark border border-[#39282a] space-y-2">
                <div class="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider">
                  <i class="fa-solid fa-scale-balanced text-xs"></i>
                  <span>{{ t('whatIsVampire.feudalLawTitle') }}</span>
                </div>
                <p class="text-xs text-gray-400 font-light leading-relaxed">
                  {{ t('whatIsVampire.feudalLawDesc') }}
                </p>
              </div>
            </div>
          </div>

          <div class="lg:col-span-6 flex justify-center">
            <div class="relative w-full max-w-lg rounded-2xl border-2 border-primary/40 bg-surface-dark shadow-[0_0_50px_rgba(212,17,33,0.25)] overflow-hidden group">
              <img
                src="/img/elysium-pillars.jpg"
                alt="The Neoclassical Pillars of the Athenian Camarilla"
                class="w-full h-80 sm:h-[480px] object-cover object-center filter brightness-90 contrast-110 transition-transform duration-700 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#181112] via-transparent to-transparent"></div>
              <div class="absolute bottom-6 left-6 right-6 p-5 bg-[#181112]/95 backdrop-blur-md rounded-xl border border-[#39282a]">
                <div class="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest mb-1">
                  <i class="fa-solid fa-landmark text-xs"></i>
                  <span>{{ t('whatIsVampire.ivoryTowerTitle') }}</span>
                </div>
                <p class="text-xs text-gray-300 font-light leading-relaxed">
                  {{ t('whatIsVampire.ivoryTowerDesc') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- The 3:1 Chronicle Pulse : Featuring Image 3 (Occult Tome) -->
    <section class="py-20 md:py-28 px-4 md:px-10 lg:px-20 bg-background-dark border-t border-[#39282a]">
      <div class="max-w-[1400px] mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div class="lg:col-span-6 relative rounded-2xl overflow-hidden border-2 border-primary/30 bg-surface-dark shadow-[0_0_40px_rgba(212,17,33,0.15)] group">
            <img
              src="/img/vampire-historical-ancestor.jpg"
              alt="Kindred Ancestral Heritage"
              class="w-full h-80 sm:h-[440px] object-cover object-top filter contrast-115 transition-transform duration-700 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[#181112] via-transparent to-transparent"></div>
            <div class="absolute bottom-4 left-4 right-4 p-4 bg-[#181112]/95 backdrop-blur-md rounded-xl border border-[#39282a]">
              <span class="text-xs font-bold uppercase tracking-widest text-primary block mb-1">
                {{ t('whatIsVampire.ancestralOverlayTag') }}
              </span>
              <p class="text-xs text-gray-300 font-light">
                {{ t('whatIsVampire.ancestralOverlayDesc') }}
              </p>
            </div>
          </div>

          <div class="lg:col-span-6 space-y-6">
            <div class="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-[0.2em] bg-primary/10 px-3 py-1 rounded border border-primary/20 w-fit">
              <i class="fa-solid fa-hourglass-half text-xs"></i>
              {{ t('whatIsVampire.pulseBadge') }}
            </div>
            <h2 class="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              {{ t('whatIsVampire.pulseTitle') }}
            </h2>
            <p class="text-gray-300 text-base sm:text-lg font-light leading-relaxed">
              {{ t('whatIsVampire.pulseP1') }}
            </p>
            <p class="text-gray-400 text-sm leading-relaxed font-light">
              {{ t('whatIsVampire.pulseP2') }}
            </p>
            <div class="pt-2">
              <RouterLink
                to="/setting"
                class="inline-flex items-center gap-3 px-8 py-4 bg-primary hover:bg-primary-dark transition-all rounded-lg text-white text-xs font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(212,17,33,0.4)]"
              >
                <span>{{ t('whatIsVampire.readSettingBtn') }}</span>
                <i class="fa-solid fa-arrow-right text-xs"></i>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Final Call to Action -->
    <section class="py-16 px-4 md:px-10 lg:px-20 bg-gradient-to-r from-surface-dark via-[#2b1417] to-surface-dark border-t border-[#39282a]">
      <div class="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div class="space-y-2 text-center md:text-left">
          <span class="text-primary text-xs font-bold uppercase tracking-[0.2em] block">
            {{ t('whatIsVampire.stepNightBadge') }}
          </span>
          <h3 class="text-2xl sm:text-3xl font-black uppercase text-white">
            {{ t('whatIsVampire.stepNightTitle') }}
          </h3>
          <p class="text-sm text-gray-300 font-light max-w-2xl">
            {{ t('whatIsVampire.stepNightDesc') }}
          </p>
        </div>

        <div class="flex flex-wrap gap-4 justify-center">
          <RouterLink
            to="/storytellers"
            class="flex items-center gap-3 px-6 py-3.5 bg-surface-dark hover:bg-surface-dark/80 border border-[#39282a] hover:border-primary transition-all rounded-lg text-white text-xs font-bold uppercase tracking-widest"
          >
            <span>{{ t('nav.storytellers') }}</span>
            <i class="fa-solid fa-users text-xs"></i>
          </RouterLink>
          <a
            href="https://discord.gg/ZeNg6cdPbj"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-3 px-6 py-3.5 bg-primary hover:bg-primary-dark transition-all rounded-lg text-white text-xs font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(212,17,33,0.4)]"
          >
            <span>{{ t('whatIsVampire.discordBtn') }}</span>
            <img src="/img/discord.webp" alt="Discord" class="h-4 w-4 object-contain" />
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
