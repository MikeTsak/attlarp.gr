<script setup>
// No script logic needed for this static page
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
              The Legacy Chronicle
            </span>
            <h1
              class="text-white text-6xl md:text-8xl font-black leading-[0.85] tracking-tighter uppercase mb-6"
            >
              Blood &<br /><span class="text-primary text-shadow-glow">Heritage</span>
            </h1>
            <p
              class="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-[650px] border-l-4 border-primary pl-8 mb-10"
            >
In a city like Athens , the past is never forgotten. Written on stone walls , in an old book or even in blood , the weight of heritage never ceases to exist. Through the eons , each new generation of Kindred is called to answer for the ancestor's actions and shape the future for themselves.
            </p>
            <button
              class="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-10 bg-primary hover:bg-red-700 transition-all text-white text-base font-bold leading-normal tracking-widest uppercase"
            >
              <span>Define Your Legacy</span>
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
                The Structure of Play
              </h2>
              <p class="text-text-muted text-lg font-light leading-relaxed mb-6">
                Wanting to keep our chronicle moving throughout the annals of Greek history and events, our events follow a steady
                <span class="text-primary font-bold">1:3 Ratio</span>. Having three events taking place in Modern Nights,
                the fourth event will be an instance of the past, a Legacy Event.
              </p>
              <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div class="bg-surface-dark p-4 border border-[#39282a] text-center">
                  <span class="text-primary font-black text-2xl">01</span>
                  <p class="text-[10px] uppercase tracking-widest mt-1">Modern</p>
                </div>
                <div class="bg-surface-dark p-4 border border-[#39282a] text-center">
                  <span class="text-primary font-black text-2xl">02</span>
                  <p class="text-[10px] uppercase tracking-widest mt-1">Modern</p>
                </div>
                <div class="bg-surface-dark p-4 border border-[#39282a] text-center">
                  <span class="text-primary font-black text-2xl">03</span>
                  <p class="text-[10px] uppercase tracking-widest mt-1">Modern</p>
                </div>
                <div class="bg-primary/20 p-4 border border-primary/50 text-center">
                  <span class="text-white font-black text-2xl">04</span>
                  <p class="text-[10px] uppercase tracking-widest mt-1">Legacy</p>
                </div>
              </div>
            </div>
            <div class="bg-surface-dark p-8 border-l-4 border-primary">
              <span class="material-symbols-outlined text-primary text-5xl mb-4"
                >settings_backup_restore</span
              >
              <h4 class="text-xl font-bold mb-2 uppercase">The 1:3 Pulse</h4>
              <p class="text-sm text-text-muted">
                This rhythm ensures that historical revelations are earned and have a profound,
                immediate impact on current political maneuvers.
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
                    The Modern Nights <span class="text-primary">(3 Sessions)</span>
                  </h3>
                  <p class="text-text-muted leading-relaxed">
                    Players inhabit their primary characters in modern-day Athens. This is where you
                    navigate the Camarilla courts, handle the Anarch riots, and struggle against the
                    Masquerade. Your successes here determine what resources your Legacy characters
                    will have in the past.
                  </p>
                </div>
                <div class="w-full md:w-1/3 grid grid-cols-1 gap-2">
                  <div
                    class="flex items-center gap-3 p-3 bg-background-dark/50 rounded border border-white/5"
                  >
                    <span class="material-symbols-outlined text-primary">cell_tower</span>
                    <span class="text-xs font-bold uppercase tracking-widest">Urban Intrigue</span>
                  </div>
                  <div
                    class="flex items-center gap-3 p-3 bg-background-dark/50 rounded border border-white/5"
                  >
                    <span class="material-symbols-outlined text-primary">diversity_3</span>
                    <span class="text-xs font-bold uppercase tracking-widest">Coterie Play</span>
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
                  The Legacy Session <span class="text-primary">(1 Session)</span>
                </h3>
              </div>
              <div
                class="p-8 rounded-2xl bg-gradient-to-br from-[#301a1c] to-surface-dark border border-primary/40 relative overflow-hidden shadow-2xl w-full"
              >
                <div class="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
                  <span class="material-symbols-outlined text-8xl">account_tree</span>
                </div>
                <p class="text-white font-bold mb-4 italic text-lg leading-relaxed">
                  "You are the blood of your ancestors."
                </p>
                <p class="text-text-muted leading-relaxed mb-6">
                  In the fourth session of every cycle, the timeline shifts. You put aside your
                  modern character sheet and step into the shoes of your
                  <span class="text-white font-bold"
                    >Sire, your Grand-Sire, or a legendary Ancestor</span
                  >.
                </p>
                <ul class="flex flex-col gap-3 text-sm">
                  <li class="flex items-center gap-2 lg:justify-end">
                    <span class="text-primary font-bold">Uncover Secrets:</span> Unearth old artifacts and forbidden texts.
                  </li>
                  <li class="flex items-center gap-2 lg:justify-end">
                    <span class="text-primary font-bold">Forge Oaths:</span> Make allies and spurn enemies, how long will these oaths last in a kindred society?
                  </li>
                  <li class="flex items-center gap-2 lg:justify-end">
                    <span class="text-primary font-bold">Rewrite History:</span> Change the political landscape of the modern nights. The future is in your hands.

                  </li>
                </ul>
              </div>
            </div>

            <div class="flex flex-col gap-6 order-1 lg:order-2">
              <div class="flex items-center gap-4">
                <div class="size-5 rounded-full bg-gold ring-8 ring-gold/10 z-20"></div>
                <h3 class="text-3xl font-black text-white uppercase tracking-tighter">
                  Your Character(s)
                </h3>
              </div>
              <div
                class="p-8 rounded-2xl bg-surface-dark border border-white/10 relative overflow-hidden w-full"
              >
                <h4
                  class="text-gold font-bold uppercase text-sm mb-4 tracking-widest flex items-center gap-2"
                >
                  <span class="material-symbols-outlined">person_add</span> Dual-Character System
                </h4>
                <p class="text-text-muted leading-relaxed mb-6">
                  When joining *Athens Through Time*, you create a
                  <span class="text-white font-bold">Legacy Tree</span>. You define not just who you
                  are tonight, but who your lineage was in 1821 during the Greek Revolution or in
                  the shadow of the Parthenon.
                </p>
                <div class="p-4 bg-black/40 rounded-lg border border-gold/20">
                  <p class="text-xs text-gold font-medium mb-2 uppercase tracking-tighter">
                    Character Creation Focus:
                  </p>
                  <p class="text-sm text-gray-400">
                    Your Modern PC starts with 'Legacy Perks' based on your Ancestor's history. The
                    more you explore the past, the more XP and hidden lore your modern character
                    unlocks.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="relative flex flex-col items-center">
            <div class="w-full lg:w-1/2 text-center">
              <div class="h-12 w-px bg-primary mx-auto mb-6"></div>
              <h4 class="text-xl font-bold uppercase mb-4 tracking-widest">The Ripple Effect</h4>
              <p class="text-text-muted text-sm leading-relaxed">
              Actions taken during Legacy events, are not just ''cutscenes''. They have weight and will affect how the future will be shaped, perhaps in a subtle way or maybe with more impactful consequences. Shall your Legacy character perform an action like hiding an artifact , your future character could possibly find it and acquire the knowledge their ancestor left. Working in a similar pattern, shall your ancestor start a blood feud or make an enemy , your future self will be hold accountable to such actions.
                <br />
              The vitae unites all , and as the saying goes: <span class="text-primary"> "Blood is thicker than water".</span>
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
              <span class="text-sm font-bold tracking-widest uppercase">The Present</span>
            </div>
            <h2 class="text-4xl md:text-5xl font-black text-white uppercase mb-6 leading-none">
              Modern<br />Nightmares
            </h2>
            <p class="text-gray-300 text-lg mb-8 leading-relaxed">
              A city of neon-lit anarchy and cold Camarilla concrete. Manage your Hunger, maintain
              the Masquerade, and climb the ladder of the modern nights.
            </p>
            <div class="flex gap-4">
              <div
                class="bg-primary/10 border border-primary/30 px-4 py-2 rounded text-xs font-bold uppercase"
              >
                Modern Character PC
              </div>
              <div
                class="bg-white/5 border border-white/10 px-4 py-2 rounded text-xs font-bold uppercase"
              >
                3/4 Sessions
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
              <span class="text-sm font-bold tracking-widest uppercase">The Legacy</span>
            </div>
            <h2 class="text-4xl md:text-5xl font-black text-white uppercase mb-6 leading-none">
              Echoes of<br />Heritage
            </h2>
            <p class="text-[#d8c5c7] text-lg mb-8 leading-relaxed">
              Once every four sessions, the past becomes the present. Play your Sire's darkest hour
              and define the secrets that will save or damn your modern self.
            </p>
            <div class="flex gap-4">
              <div
                class="bg-gold/10 border border-gold/30 px-4 py-2 rounded text-xs font-bold uppercase text-gold"
              >
                Ancestor / Sire PC
              </div>
              <div
                class="bg-white/5 border border-white/10 px-4 py-2 rounded text-xs font-bold uppercase"
              >
                1/4 Sessions
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
