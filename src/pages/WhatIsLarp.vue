<script setup>
import { computed } from "vue";
import { useSeo } from "../composables/useSeo";
import { useI18n } from "../composables/useI18n";

const { t } = useI18n();

useSeo({
  title: computed(() => t("seo.whatIsLarpTitle")),
  description: computed(() => t("seo.whatIsLarpDesc")),
  path: "/what-is-larp",
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
    <!-- Hero Section : Split Showcase -->
    <section class="relative min-h-[85vh] w-full flex flex-col justify-center border-b border-[#39282a] overflow-hidden">
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-gradient-to-t from-[#181112] via-[#181112]/85 to-[#181112]/60 z-10"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-[#181112] via-transparent to-transparent z-10"></div>
        <div
          class="absolute inset-0 bg-cover bg-center opacity-20 filter grayscale"
          style="background-image: url('/img/back7.jpg')"
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
                <i class="fa-solid fa-masks-theater text-xs"></i>
                {{ t('whatIsLarp.badge1') }}
              </span>
              <span
                class="inline-flex items-center gap-2 rounded-full bg-surface-dark px-4 py-1 text-xs font-bold uppercase tracking-widest text-gray-400 border border-[#39282a]"
              >
                <i class="fa-solid fa-moon text-primary text-xs"></i>
                {{ t('whatIsLarp.badge2') }}
              </span>
            </div>

            <h1
              class="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.88] tracking-tighter uppercase"
            >
              {{ t('whatIsLarp.titlePrefix') }} <br />
              <span class="text-primary text-shadow-glow">{{ t('whatIsLarp.titleSuffix') }}</span>
            </h1>

            <p
              class="text-gray-300 text-lg sm:text-xl font-light leading-relaxed border-l-4 border-primary pl-6 max-w-2xl"
            >
              {{ t('whatIsLarp.lead') }}
            </p>

            <div class="flex flex-wrap gap-4 pt-2">
              <button
                @click="scrollToSection('vampire-scale')"
                class="flex cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-lg h-14 px-8 bg-primary hover:bg-primary-dark transition-all text-white text-xs font-bold tracking-widest uppercase shadow-[0_0_25px_rgba(212,17,33,0.4)]"
              >
                <span>{{ t('whatIsLarp.vampireScaleBtn') }}</span>
                <i class="fa-solid fa-arrow-down text-xs"></i>
              </button>
              <RouterLink
                to="/what-is-vampire"
                class="flex items-center justify-center gap-3 rounded-lg h-14 px-8 border border-[#39282a] hover:border-primary bg-surface-dark/80 hover:bg-surface-dark transition-all text-gray-300 hover:text-white text-xs font-bold tracking-widest uppercase"
              >
                <span>{{ t('whatIsLarp.whatIsVampireBtn') }}</span>
                <i class="fa-solid fa-chevron-right text-xs"></i>
              </RouterLink>
            </div>
          </div>

          <!-- Hero Image Anchor -->
          <div class="lg:col-span-5 flex justify-center">
            <div
              class="relative w-full max-w-md rounded-2xl overflow-hidden border-2 border-primary/40 bg-surface-dark shadow-[0_0_50px_rgba(212,17,33,0.25)] group"
            >
              <img
                src="/img/larp-angel-statue.jpg"
                alt="Live Action Roleplay Atmospheric Setting"
                class="w-full h-[520px] sm:h-[620px] object-cover object-center filter brightness-95 contrast-110 transition-transform duration-700 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#181112] via-transparent to-transparent"></div>
              <div
                class="absolute bottom-6 left-6 right-6 p-5 bg-[#181112]/95 backdrop-blur-md rounded-xl border border-[#39282a]"
              >
                <div class="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest mb-1">
                  <i class="fa-solid fa-feather text-xs"></i>
                  <span>{{ t('whatIsLarp.livingMedium') }}</span>
                </div>
                <p class="text-xs text-gray-300 font-light leading-relaxed">
                  {{ t('whatIsLarp.livingMediumDesc') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 1 : The Core Foundations of LARP -->
    <section class="py-20 md:py-28 px-4 md:px-10 lg:px-20 bg-background-dark">
      <div class="max-w-[1400px] mx-auto">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="text-primary text-xs font-bold uppercase tracking-[0.25em] block mb-2">
            {{ t('whatIsLarp.definitionBadge') }}
          </span>
          <h2 class="text-white text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight">
            {{ t('whatIsLarp.foundationsTitle') }}
          </h2>
          <p class="text-text-muted text-sm sm:text-base mt-4 font-light">
            {{ t('whatIsLarp.foundationsDesc') }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-surface-dark border border-[#39282a] p-8 rounded-2xl space-y-4 hover:border-primary/50 transition-all flex flex-col justify-between">
            <div class="space-y-4">
              <span class="size-12 rounded-xl bg-primary/20 text-primary flex items-center justify-center text-xl">
                <i class="fa-solid fa-person-rays"></i>
              </span>
              <h3 class="text-xl font-bold uppercase text-white">{{ t('whatIsLarp.f1Title') }}</h3>
              <p class="text-gray-400 text-sm font-light leading-relaxed">
                {{ t('whatIsLarp.f1Desc') }}
              </p>
            </div>
            <div class="pt-4 border-t border-[#39282a] text-xs font-bold uppercase tracking-widest text-primary">
              {{ t('whatIsLarp.f1Tag') }}
            </div>
          </div>

          <div class="bg-surface-dark border border-[#39282a] p-8 rounded-2xl space-y-4 hover:border-primary/50 transition-all flex flex-col justify-between">
            <div class="space-y-4">
              <span class="size-12 rounded-xl bg-primary/20 text-primary flex items-center justify-center text-xl">
                <i class="fa-solid fa-hands-holding-circle"></i>
              </span>
              <h3 class="text-xl font-bold uppercase text-white">{{ t('whatIsLarp.f2Title') }}</h3>
              <p class="text-gray-400 text-sm font-light leading-relaxed">
                {{ t('whatIsLarp.f2Desc') }}
              </p>
            </div>
            <div class="pt-4 border-t border-[#39282a] text-xs font-bold uppercase tracking-widest text-primary">
              {{ t('whatIsLarp.f2Tag') }}
            </div>
          </div>

          <div class="bg-surface-dark border border-[#39282a] p-8 rounded-2xl space-y-4 hover:border-primary/50 transition-all flex flex-col justify-between">
            <div class="space-y-4">
              <span class="size-12 rounded-xl bg-primary/20 text-primary flex items-center justify-center text-xl">
                <i class="fa-solid fa-compass"></i>
              </span>
              <h3 class="text-xl font-bold uppercase text-white">{{ t('whatIsLarp.f3Title') }}</h3>
              <p class="text-gray-400 text-sm font-light leading-relaxed">
                {{ t('whatIsLarp.f3Desc') }}
              </p>
            </div>
            <div class="pt-4 border-t border-[#39282a] text-xs font-bold uppercase tracking-widest text-primary">
              {{ t('whatIsLarp.f3Tag') }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 2 : How We LARP on the Vampire Scale -->
    <section id="vampire-scale" class="py-20 md:py-28 px-4 md:px-10 lg:px-20 bg-[#120809] border-t border-[#39282a]">
      <div class="max-w-[1400px] mx-auto space-y-16">
        <div class="text-center max-w-3xl mx-auto">
          <span class="text-primary text-xs font-bold uppercase tracking-[0.2em] block mb-2">
            {{ t('whatIsLarp.parlorSubtitle') }}
          </span>
          <h2 class="text-white text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight">
            {{ t('whatIsLarp.parlorTitle') }}
          </h2>
          <p class="text-text-muted text-sm sm:text-base mt-4 font-light">
            {{ t('whatIsLarp.parlorDesc') }}
          </p>
        </div>

        <!-- Elysium Sanctuary Feature -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div class="lg:col-span-5 flex justify-center">
            <div class="relative w-full max-w-md rounded-2xl overflow-hidden border-2 border-primary/50 bg-surface-dark shadow-[0_0_50px_rgba(212,17,33,0.3)] group">
              <img
                src="/img/elysium-pillars.jpg"
                alt="Neoclassical Architecture of Elysium"
                class="w-full h-[520px] sm:h-[620px] object-cover object-center filter brightness-95 contrast-110 transition-transform duration-700 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#181112] via-transparent to-transparent"></div>
              <div class="absolute bottom-6 left-6 right-6 p-5 bg-[#181112]/95 backdrop-blur-md rounded-xl border border-[#39282a]">
                <div class="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest mb-1">
                  <i class="fa-solid fa-landmark text-xs"></i>
                  <span>{{ t('whatIsLarp.elysiumTitle') }}</span>
                </div>
                <p class="text-xs text-gray-300 font-light leading-relaxed">
                  {{ t('whatIsLarp.elysiumDesc') }}
                </p>
              </div>
            </div>
          </div>

          <div class="lg:col-span-7 space-y-6">
            <div class="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-[0.2em] bg-primary/10 px-3 py-1 rounded border border-primary/20 w-fit">
              <i class="fa-solid fa-crown text-xs"></i>
              {{ t('whatIsLarp.paxTag') }}
            </div>

            <h3 class="text-3xl sm:text-4xl font-black uppercase text-white leading-tight">
              {{ t('whatIsLarp.paxTitle') }}
            </h3>

            <p class="text-gray-300 text-base sm:text-lg leading-relaxed font-light">
              {{ t('whatIsLarp.paxP1') }}
            </p>

            <p class="text-gray-400 text-sm leading-relaxed font-light">
              {{ t('whatIsLarp.paxP2') }}
            </p>

            <div class="space-y-3 pt-2">
              <div class="p-4 rounded-xl bg-surface-dark border border-[#39282a] flex items-start gap-4">
                <span class="size-10 rounded-lg bg-primary/20 text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <i class="fa-solid fa-handshake-simple"></i>
                </span>
                <div>
                  <h4 class="text-base font-bold uppercase text-white mb-1">{{ t('whatIsLarp.boonsTitle') }}</h4>
                  <p class="text-xs text-gray-400 font-light leading-relaxed">
                    {{ t('whatIsLarp.boonsDesc') }}
                  </p>
                </div>
              </div>

              <div class="p-4 rounded-xl bg-surface-dark border border-[#39282a] flex items-start gap-4">
                <span class="size-10 rounded-lg bg-primary/20 text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <i class="fa-solid fa-masks-theater"></i>
                </span>
                <div>
                  <h4 class="text-base font-bold uppercase text-white mb-1">{{ t('whatIsLarp.courtHierarchyTitle') }}</h4>
                  <p class="text-xs text-gray-400 font-light leading-relaxed">
                    {{ t('whatIsLarp.courtHierarchyDesc') }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Court Inquest Feature -->
        <div class="rounded-2xl overflow-hidden border border-[#39282a] bg-surface-dark shadow-2xl">
          <div class="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div class="lg:col-span-7 relative h-80 sm:h-[460px] overflow-hidden group">
              <img
                src="/img/vampire-court-judgment.jpg"
                alt="Elysium Court Inquest and Judicial Proceedings"
                class="w-full h-full object-cover object-center filter brightness-95 contrast-115 transition-transform duration-700 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#181112] via-transparent to-transparent lg:hidden"></div>
              <div class="absolute bottom-4 left-4 right-4 p-4 bg-[#181112]/95 backdrop-blur-md rounded-xl border border-[#39282a] lg:hidden">
                <span class="text-xs font-bold uppercase tracking-widest text-primary block mb-1">
                  {{ t('whatIsLarp.inquestTag') }}
                </span>
                <p class="text-xs text-gray-300 font-light">
                  {{ t('whatIsLarp.inquestDesc') }}
                </p>
              </div>
            </div>

            <div class="lg:col-span-5 p-8 sm:p-12 space-y-6">
              <div class="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-[0.2em] bg-primary/10 px-3 py-1 rounded border border-primary/20 w-fit">
                <i class="fa-solid fa-gavel text-xs"></i>
                {{ t('whatIsLarp.inquestTag') }}
              </div>

              <h3 class="text-2xl sm:text-3xl font-black uppercase text-white leading-tight">
                {{ t('whatIsLarp.inquestTitle') }}
              </h3>

              <p class="text-gray-300 text-sm sm:text-base font-light leading-relaxed">
                {{ t('whatIsLarp.inquestDesc') }}
              </p>

              <div class="space-y-3 pt-2">
                <div class="p-4 rounded-xl bg-[#181112] border border-[#39282a] space-y-1">
                  <span class="text-xs font-bold uppercase tracking-widest text-primary block">
                    {{ t('whatIsLarp.consequencesTitle') }}
                  </span>
                  <p class="text-xs text-gray-400 font-light leading-relaxed">
                    {{ t('whatIsLarp.consequencesDesc') }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 3 : Tangible Atmosphere & Investigation -->
    <section class="py-20 md:py-28 px-4 md:px-10 lg:px-20 bg-background-dark border-t border-[#39282a]">
      <div class="max-w-[1400px] mx-auto space-y-16">
        <div class="text-center max-w-3xl mx-auto">
          <span class="text-primary text-xs font-bold uppercase tracking-[0.2em] block mb-2">
            {{ t('whatIsLarp.tactileSectionBadge') }}
          </span>
          <h2 class="text-white text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight">
            {{ t('whatIsLarp.tactileSectionTitle') }}
          </h2>
          <p class="text-text-muted text-sm sm:text-base mt-4 font-light">
            {{ t('whatIsLarp.tactileSectionDesc') }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-surface-dark rounded-2xl border border-[#39282a] overflow-hidden flex flex-col justify-between group">
            <div class="relative h-60 sm:h-72 overflow-hidden">
              <img
                src="/img/vampire-wax-seal.jpg"
                alt="Official Sealed Missive"
                class="w-full h-full object-cover object-center filter brightness-95 contrast-115 transition-transform duration-700 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-surface-dark via-transparent to-transparent"></div>
              <div class="absolute top-4 left-4 bg-primary/90 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded">
                {{ t('whatIsLarp.prop1Badge') }}
              </div>
            </div>
            <div class="p-6 space-y-2">
              <h4 class="text-lg font-bold uppercase text-white">
                {{ t('whatIsLarp.prop1Title') }}
              </h4>
              <p class="text-xs text-gray-400 font-light leading-relaxed">
                {{ t('whatIsLarp.prop1Desc') }}
              </p>
            </div>
          </div>

          <div class="bg-surface-dark rounded-2xl border border-[#39282a] overflow-hidden flex flex-col justify-between group">
            <div class="relative h-60 sm:h-72 overflow-hidden">
              <img
                src="/img/vampire-coterie-war-room.jpg"
                alt="Coterie Investigation and Tactics"
                class="w-full h-full object-cover object-center filter brightness-95 contrast-115 transition-transform duration-700 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-surface-dark via-transparent to-transparent"></div>
              <div class="absolute top-4 left-4 bg-[#8a0b16] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded">
                {{ t('whatIsLarp.prop2Badge') }}
              </div>
            </div>
            <div class="p-6 space-y-2">
              <h4 class="text-lg font-bold uppercase text-white">
                {{ t('whatIsLarp.prop2Title') }}
              </h4>
              <p class="text-xs text-gray-400 font-light leading-relaxed">
                {{ t('whatIsLarp.prop2Desc') }}
              </p>
            </div>
          </div>

          <div class="bg-surface-dark rounded-2xl border border-[#39282a] overflow-hidden flex flex-col justify-between group">
            <div class="relative h-60 sm:h-72 overflow-hidden">
              <img
                src="/img/occult-tome.jpg"
                alt="Occult Manuscripts and Lore"
                class="w-full h-full object-cover filter brightness-95 contrast-115 transition-transform duration-700 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-surface-dark via-transparent to-transparent"></div>
              <div class="absolute top-4 left-4 bg-[#631019] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded">
                {{ t('whatIsLarp.prop3Badge') }}
              </div>
            </div>
            <div class="p-6 space-y-2">
              <h4 class="text-lg font-bold uppercase text-white">
                {{ t('whatIsLarp.prop3Title') }}
              </h4>
              <p class="text-xs text-gray-400 font-light leading-relaxed">
                {{ t('whatIsLarp.prop3Desc') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 4 : What to Expect on Game Night -->
    <section class="py-20 md:py-28 px-4 md:px-10 lg:px-20 bg-[#120809] border-t border-[#39282a]">
      <div class="max-w-[1400px] mx-auto space-y-16">
        <div class="text-center max-w-3xl mx-auto">
          <span class="text-primary text-xs font-bold uppercase tracking-[0.2em] block mb-2">
            {{ t('whatIsLarp.phasesBadge') }}
          </span>
          <h2 class="text-white text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight">
            {{ t('whatIsLarp.phasesTitle') }}
          </h2>
          <p class="text-text-muted text-sm sm:text-base mt-4 font-light">
            {{ t('whatIsLarp.phasesDesc') }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-surface-dark p-8 rounded-2xl border border-[#39282a] space-y-4 flex flex-col justify-between hover:border-primary/50 transition-all">
            <div class="space-y-3">
              <span class="text-primary font-bold text-xs uppercase tracking-widest block">{{ t('whatIsLarp.phase1Num') }}</span>
              <h4 class="text-xl font-bold uppercase text-white">{{ t('whatIsLarp.phase1Title') }}</h4>
              <p class="text-xs text-gray-400 font-light leading-relaxed">
                {{ t('whatIsLarp.phase1Desc') }}
              </p>
            </div>
            <div class="pt-4 border-t border-[#39282a] text-[11px] font-bold uppercase tracking-widest text-primary">
              {{ t('whatIsLarp.phase1Tag') }}
            </div>
          </div>

          <div class="bg-surface-dark p-8 rounded-2xl border border-primary/40 space-y-4 flex flex-col justify-between shadow-[0_0_30px_rgba(212,17,33,0.15)] hover:border-primary transition-all">
            <div class="space-y-3">
              <span class="text-primary font-bold text-xs uppercase tracking-widest block">{{ t('whatIsLarp.phase2Num') }}</span>
              <h4 class="text-xl font-bold uppercase text-white">{{ t('whatIsLarp.phase2Title') }}</h4>
              <p class="text-xs text-gray-300 font-light leading-relaxed">
                {{ t('whatIsLarp.phase2Desc') }}
              </p>
            </div>
            <div class="pt-4 border-t border-[#39282a] text-[11px] font-bold uppercase tracking-widest text-primary">
              {{ t('whatIsLarp.phase2Tag') }}
            </div>
          </div>

          <div class="bg-surface-dark p-8 rounded-2xl border border-[#39282a] space-y-4 flex flex-col justify-between hover:border-primary/50 transition-all">
            <div class="space-y-3">
              <span class="text-primary font-bold text-xs uppercase tracking-widest block">{{ t('whatIsLarp.phase3Num') }}</span>
              <h4 class="text-lg font-bold uppercase text-white">{{ t('whatIsLarp.phase3Title') }}</h4>
              <p class="text-xs text-gray-400 font-light leading-relaxed">
                {{ t('whatIsLarp.phase3Desc') }}
              </p>
            </div>
            <div class="pt-4 border-t border-[#39282a] text-[11px] font-bold uppercase tracking-widest text-primary">
              {{ t('whatIsLarp.phase3Tag') }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Transition to What is Vampire -->
    <section class="py-16 px-4 md:px-10 lg:px-20 bg-gradient-to-r from-surface-dark via-[#2b1417] to-surface-dark border-t border-[#39282a]">
      <div class="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div class="space-y-2 text-center md:text-left">
          <span class="text-primary text-xs font-bold uppercase tracking-[0.2em] block">
            {{ t('whatIsLarp.ctaBadge') }}
          </span>
          <h3 class="text-2xl sm:text-3xl font-black uppercase text-white">
            {{ t('whatIsLarp.ctaTitle') }}
          </h3>
          <p class="text-sm text-gray-300 font-light max-w-2xl">
            {{ t('whatIsLarp.ctaDesc') }}
          </p>
        </div>

        <RouterLink
          to="/what-is-vampire"
          class="shrink-0 flex items-center gap-3 px-8 py-4 bg-primary hover:bg-primary-dark transition-all rounded-lg text-white text-xs font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(212,17,33,0.4)]"
        >
          <span>{{ t('whatIsLarp.ctaBtn') }}</span>
          <i class="fa-solid fa-arrow-right text-xs"></i>
        </RouterLink>
      </div>
    </section>
  </div>
</template>
