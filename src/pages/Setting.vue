<script setup>
import { computed } from "vue";
import { useSeo } from "../composables/useSeo";
import { useI18n } from "../composables/useI18n";

const { t } = useI18n();

useSeo({
  title: computed(() => t("seo.settingTitle")),
  description: computed(() => t("seo.settingDesc")),
  path: "/setting",
});
</script>

<template>
  <div class="bg-background-dark font-tech text-white min-h-screen">
    <section class="relative flex min-h-[75vh] w-full flex-col justify-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <div
          class="absolute inset-0 bg-gradient-to-t from-[#181112] via-[#181112]/70 to-transparent z-10"
        ></div>
        <div
          class="absolute inset-0 bg-gradient-to-r from-[#181112] via-transparent to-transparent z-10"
        ></div>
        <div
          class="absolute inset-0 bg-cover bg-center opacity-40"
          style="background-image: url('/img/back33.jpg')"
        ></div>
      </div>

      <div class="relative z-20 px-4 md:px-10 lg:px-40 flex flex-1 items-center justify-center">
        <div class="max-w-[1200px] flex flex-col items-start w-full">
          <div class="max-w-[850px]">
            <span
              class="mb-4 inline-block rounded-full bg-primary/20 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-primary border border-primary/30"
            >
              {{ t('setting.badge') }}
            </span>
            <h1
              class="text-white text-6xl md:text-8xl font-black leading-[0.85] tracking-tighter uppercase mb-6"
            >
              {{ t('setting.titlePrefix') }}<br /><span class="text-primary text-shadow-glow">{{ t('setting.titleSuffix') }}</span>
            </h1>
            <p
              class="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-[650px] border-l-4 border-primary pl-8 mb-10"
            >
              {{ t('setting.leadQuote') }}
            </p>
            <button
              class="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-10 bg-primary hover:bg-red-700 transition-all text-white text-base font-bold leading-normal tracking-widest uppercase"
            >
              <span>{{ t('setting.defineLegacyBtn') }}</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="relative bg-background-dark py-20 border-y border-[#39282a]">
      <div class="px-4 md:px-10 lg:px-40 flex justify-center">
        <div class="max-w-[1000px] w-full">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div class="lg:col-span-2">
              <h2 class="text-white tracking-tight text-4xl font-bold leading-tight mb-6 uppercase">
                {{ t('setting.structureTitle') }}
              </h2>
              <p class="text-text-muted text-lg font-light leading-relaxed mb-6">
                {{ t('setting.structureDesc') }}
              </p>
              <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div class="bg-surface-dark p-4 border border-[#39282a] text-center">
                  <span class="text-primary font-black text-2xl">01</span>
                  <p class="text-[10px] uppercase tracking-widest mt-1">{{ t('setting.modernLabel') }}</p>
                </div>
                <div class="bg-surface-dark p-4 border border-[#39282a] text-center">
                  <span class="text-primary font-black text-2xl">02</span>
                  <p class="text-[10px] uppercase tracking-widest mt-1">{{ t('setting.modernLabel') }}</p>
                </div>
                <div class="bg-surface-dark p-4 border border-[#39282a] text-center">
                  <span class="text-primary font-black text-2xl">03</span>
                  <p class="text-[10px] uppercase tracking-widest mt-1">{{ t('setting.modernLabel') }}</p>
                </div>
                <div class="bg-primary/20 p-4 border border-primary/50 text-center">
                  <span class="text-white font-black text-2xl">04</span>
                  <p class="text-[10px] uppercase tracking-widest mt-1">{{ t('setting.legacyLabel') }}</p>
                </div>
              </div>
            </div>
            <div class="bg-surface-dark p-8 border-l-4 border-primary">
              <span class="material-symbols-outlined text-primary text-5xl mb-4"
                >settings_backup_restore</span
              >
              <h4 class="text-xl font-bold mb-2 uppercase">{{ t('setting.pulseTitle') }}</h4>
              <p class="text-sm text-text-muted">
                {{ t('setting.pulseDesc') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="relative bg-background-dark py-24">
      <div
        class="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent -translate-x-1/2 hidden lg:block"
      ></div>

      <div class="px-4 md:px-10 lg:px-40 flex justify-center">
        <div class="max-w-[1100px] w-full flex flex-col gap-24 relative z-10">
          <div class="relative flex flex-col items-center">
            <div
              class="hidden lg:block absolute left-1/2 -top-12 -translate-x-1/2 text-primary bg-background-dark p-2"
            >
              <span class="material-symbols-outlined text-4xl">expand_circle_down</span>
            </div>
            <div
              class="w-full lg:w-3/4 p-10 rounded-2xl bg-[#1d1617] border border-[#39282a] relative"
            >
              <div class="flex flex-col md:flex-row gap-10 items-center">
                <div class="flex-1">
                  <h3 class="text-2xl font-black text-white uppercase mb-4 tracking-tighter">
                    {{ t('setting.modernNightsTitle') }}
                  </h3>
                  <p class="text-text-muted leading-relaxed">
                    {{ t('setting.modernNightsDesc') }}
                  </p>
                </div>
                <div class="w-full md:w-1/3 grid grid-cols-1 gap-2">
                  <div
                    class="flex items-center gap-3 p-3 bg-background-dark/50 rounded border border-white/5"
                  >
                    <span class="material-symbols-outlined text-primary">cell_tower</span>
                    <span class="text-xs font-bold uppercase tracking-widest">{{ t('setting.urbanIntrigue') }}</span>
                  </div>
                  <div
                    class="flex items-center gap-3 p-3 bg-background-dark/50 rounded border border-white/5"
                  >
                    <span class="material-symbols-outlined text-primary">diversity_3</span>
                    <span class="text-xs font-bold uppercase tracking-widest">{{ t('setting.coteriePlay') }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div class="flex flex-col gap-6 lg:text-right lg:items-end order-2 lg:order-1">
              <div class="flex lg:flex-row-reverse items-center gap-4">
                <div class="size-5 rounded-full bg-primary ring-8 ring-primary/10 z-20"></div>
                <h3 class="text-3xl font-black text-white uppercase tracking-tighter">
                  {{ t('setting.legacySessionTitle') }}
                </h3>
              </div>
              <div
                class="p-8 rounded-2xl bg-gradient-to-br from-[#301a1c] to-surface-dark border border-primary/40 relative overflow-hidden shadow-2xl w-full"
              >
                <div class="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
                  <span class="material-symbols-outlined text-8xl">account_tree</span>
                </div>
                <p class="text-white font-bold mb-4 italic text-lg leading-relaxed">
                  {{ t('setting.legacySessionQuote') }}
                </p>
                <p class="text-text-muted leading-relaxed mb-6">
                  {{ t('setting.legacySessionDesc') }}
                </p>
                <ul class="flex flex-col gap-3 text-sm">
                  <li class="flex items-center gap-2 lg:justify-end">
                    <span class="text-gray-300">{{ t('setting.uncoverSecrets') }}</span>
                  </li>
                  <li class="flex items-center gap-2 lg:justify-end">
                    <span class="text-gray-300">{{ t('setting.forgeOaths') }}</span>
                  </li>
                  <li class="flex items-center gap-2 lg:justify-end">
                    <span class="text-gray-300">{{ t('setting.rewriteHistory') }}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div class="flex flex-col gap-6 order-1 lg:order-2">
              <div class="flex items-center gap-4">
                <div class="size-5 rounded-full bg-gold ring-8 ring-gold/10 z-20"></div>
                <h3 class="text-3xl font-black text-white uppercase tracking-tighter">
                  {{ t('setting.charactersTitle') }}
                </h3>
              </div>
              <div
                class="p-8 rounded-2xl bg-surface-dark border border-white/10 relative overflow-hidden w-full"
              >
                <h4
                  class="text-gold font-bold uppercase text-sm mb-4 tracking-widest flex items-center gap-2"
                >
                  <span class="material-symbols-outlined">person_add</span> {{ t('setting.dualSystemTitle') }}
                </h4>
                <p class="text-text-muted leading-relaxed mb-6">
                  {{ t('setting.dualSystemDesc') }}
                </p>
                <div class="p-4 bg-black/40 rounded-lg border border-gold/20">
                  <p class="text-xs text-gold font-medium mb-2 uppercase tracking-tighter">
                    {{ t('setting.focusLabel') }}
                  </p>
                  <p class="text-sm text-gray-400">
                    {{ t('setting.focusDesc') }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="relative flex flex-col items-center">
            <div class="w-full lg:w-1/2 text-center">
              <div class="h-12 w-px bg-primary mx-auto mb-6"></div>
              <h4 class="text-xl font-bold uppercase mb-4 tracking-widest">{{ t('setting.rippleTitle') }}</h4>
              <p class="text-text-muted text-sm leading-relaxed">
                {{ t('setting.rippleDesc') }}
                <br />
                <span class="text-primary">{{ t('setting.rippleQuote') }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="w-full bg-[#130d0e] border-t border-[#39282a]">
      <div class="grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">
        <div class="relative min-h-[450px] lg:min-h-full overflow-hidden group">
          <div
            class="absolute inset-0 z-10 transition-all duration-700"
          ></div>
          <div
            class="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700"
            style="background-image: url('/img/Copyof1(5).jpg')"
          ></div>
          <div class="absolute bottom-0 left-0 p-8 md:p-16 z-20 max-w-xl">
            <div class="flex items-center gap-2 text-primary mb-4">
              <span class="material-symbols-outlined">nightlight</span>
              <span class="text-sm font-bold tracking-widest uppercase">{{ t('setting.presentTitle') }}</span>
            </div>
            <h2 class="text-4xl md:text-5xl font-black text-white uppercase mb-6 leading-none">
              {{ t('setting.modernNightmares') }}
            </h2>
            <p class="text-gray-300 text-lg mb-8 leading-relaxed">
              {{ t('setting.modernNightmaresDesc') }}
            </p>
            <div class="flex gap-4">
              <div
                class="bg-primary/10 border border-primary/30 px-4 py-2 rounded text-xs font-bold uppercase"
              >
                {{ t('setting.modernPcBadge') }}
              </div>
              <div
                class="bg-white/5 border border-white/10 px-4 py-2 rounded text-xs font-bold uppercase"
              >
                {{ t('setting.modernRatioBadge') }}
              </div>
            </div>
          </div>
        </div>

        <div
          class="relative min-h-[450px] lg:min-h-full overflow-hidden group border-t lg:border-t-0 lg:border-l border-[#39282a]"
        >
          <div class="absolute inset-0 z-10 bg-black/40 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
          <div
            class="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700"
            style="background-image: url('/img/Copyof137.jpg')"
          ></div>
          <div class="absolute bottom-0 left-0 p-8 md:p-16 z-20 max-w-xl">
            <div class="flex items-center gap-2 text-gold mb-4">
              <span class="material-symbols-outlined">auto_stories</span>
              <span class="text-sm font-bold tracking-widest uppercase">{{ t('setting.legacyCardTitle') }}</span>
            </div>
            <h2 class="text-4xl md:text-5xl font-black text-white uppercase mb-6 leading-none">
              {{ t('setting.echoesTitle') }}
            </h2>
            <p class="text-[#d8c5c7] text-lg mb-8 leading-relaxed">
              {{ t('setting.echoesDesc') }}
            </p>
            <div class="flex gap-4">
              <div
                class="bg-gold/10 border border-gold/30 px-4 py-2 rounded text-xs font-bold uppercase text-gold"
              >
                {{ t('setting.ancestorPcBadge') }}
              </div>
              <div
                class="bg-white/5 border border-white/10 px-4 py-2 rounded text-xs font-bold uppercase"
              >
                {{ t('setting.legacyRatioBadge') }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Optional specific shadow for this page */
.text-shadow-glow {
  text-shadow: 0 0 15px rgba(212, 17, 33, 0.4);
}
</style>
