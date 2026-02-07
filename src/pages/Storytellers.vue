<script setup>
// No script logic needed for static content
</script>

<template>
  <div class="bg-background-dark font-serif text-white min-h-screen pb-20">
    <div class="px-4 lg:px-40 flex justify-center pt-8 pb-12">
      <div class="w-full max-w-[960px]">
        <div
          class="relative flex min-h-[320px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-8 text-center overflow-hidden border border-[#39282a]"
          style="
            background-image:
              linear-gradient(rgba(24, 17, 18, 0.7) 0%, rgba(24, 17, 18, 0.9) 100%),
              url(&quot;/img/st-back.jpg&quot;);
          "
        >
          <div class="relative z-10 flex flex-col gap-2 items-center">
            <h1
              class="text-white text-4xl md:text-6xl font-black leading-tight tracking-[-0.033em] uppercase italic drop-shadow-lg"
            >
              Architects of Fate
            </h1>
            <div class="h-1 w-24 bg-primary mx-auto my-4 shadow-[0_0_15px_#d41121]"></div>

            <!-- Updated Quote -->
            <h2
              class="text-gray-300 text-lg md:text-xl font-normal max-w-2xl mx-auto italic font-serif"
            >
              "There are two things a person should never be angry at, what they can help, and what
              they cannot"
            </h2>
            <p class="text-primary/60 text-sm font-bold uppercase tracking-widest mt-2">— Plato</p>
          </div>
        </div>
      </div>
    </div>

    <div class="px-4 lg:px-40 flex justify-center mb-12">
      <div class="max-w-[960px] w-full py-8 border-b border-primary/10">
        <h3
          class="text-primary text-2xl font-bold mb-6 text-center uppercase tracking-widest font-sans"
        >
          The Masterminds
        </h3>
        <p class="text-gray-300 text-lg leading-relaxed text-center px-4 md:px-20 italic">
          Athens Through Time wasn't born from a single dream, but from a collision of visions. Meet
          the Storytellers weaving the tapestry of our ancient, neon-lit nights.
        </p>
      </div>
    </div>

    <div class="px-4 lg:px-40 flex justify-center py-10">
      <div class="max-w-[960px] w-full">
        <div
          class="flex p-6 bg-surface-dark/50 rounded-xl border border-white/5 hover:border-primary/30 transition-all duration-500 hover:bg-surface-dark"
        >
          <div class="flex w-full flex-col gap-8 md:flex-row items-center">
            <div class="relative group shrink-0">
              <!-- Kikos Image Updated -->
              <div
                class="bg-center bg-no-repeat bg-cover rounded-lg h-80 w-full md:w-64 border-2 border-primary/20 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                style="background-image: url(&quot;/img/st/kikos-2.jpg&quot;)"
              ></div>
              <div
                class="absolute inset-0 bg-primary/10 mix-blend-multiply opacity-50 rounded-lg"
              ></div>
            </div>
            <div class="flex flex-col justify-center flex-1 text-center md:text-left">
              <div class="flex items-center gap-2 mb-2 justify-center md:justify-start">
                <span class="material-symbols-outlined text-primary text-sm">terminal</span>
                <p class="text-primary text-sm font-bold uppercase tracking-widest font-sans">
                  SΤ, Politics Master, PR Specialist
                </p>
              </div>
              <p class="text-white text-4xl font-bold leading-tight mb-2">ST Kyriakos</p>
              <p class="text-primary/80 text-sm font-bold uppercase tracking-wide mb-6 font-sans">
                10 Years Experience | V5 & Cyberpunk Red Specialist
              </p>
              <div class="h-px w-full bg-gradient-to-r from-primary/40 to-transparent mb-6"></div>
              <p class="text-gray-400 text-base font-normal leading-relaxed pb-6 font-sans">
                Having an experience as a ST for almost 10 years in running a variety of RPG systems
                like Cyberpunk Red , Vampire: The Masquerade V5 , Witchcraft, WH4Ok: Rogue Trader ,
                Conan: Adventures in an Age Undreamed Of, and being an active member in Athens' LARP
                community by participating in numerous events , it was time to put all the knowledge
                to the test and create a LARP with a focus on including every new and old player
                that are eager to try something new.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="px-4 lg:px-40 flex justify-center py-10">
      <div class="max-w-[960px] w-full">
        <div
          class="flex p-6 bg-surface-dark/50 rounded-xl border border-white/5 hover:border-primary/30 transition-all duration-500 hover:bg-surface-dark"
        >
          <div class="flex w-full flex-col gap-8 md:flex-row-reverse items-center">
            <div class="relative group shrink-0">
              <!-- Mike Image Updated -->
              <div
                class="bg-center bg-no-repeat bg-cover rounded-lg h-80 w-full md:w-64 border-2 border-primary/20 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                style="background-image: url(&quot;/img/st/mike-2.jpg&quot;)"
              ></div>
              <div
                class="absolute inset-0 bg-primary/10 mix-blend-multiply opacity-30 rounded-lg"
              ></div>
            </div>
            <div class="flex flex-col justify-center flex-1 text-center md:text-right">
              <div class="flex items-center gap-2 mb-2 justify-center md:justify-end">
                <p class="text-primary text-sm font-bold uppercase tracking-widest font-sans">
                  ST, Occult Master, Tech Specialist
                </p>
                <span class="material-symbols-outlined text-primary text-sm">menu_book</span>
              </div>
              <p class="text-white text-4xl font-bold leading-tight mb-2">ST Mike</p>
              <p class="text-primary/80 text-sm font-bold uppercase tracking-wide mb-6 font-sans">
                10 Years Experience | D&D & Call of Cthulhu Specialist
              </p>
              <div class="h-px w-full bg-gradient-to-l from-primary/40 to-transparent mb-6"></div>
              <p class="text-gray-400 text-base font-normal leading-relaxed pb-6 font-sans">
                A veteran DM ,with around 10 years of experience, in running systems like D&D 5e,
                Call of Cthulhu 7e, M&M 3e, as well as an active LARP player in the recent years,
                and being an amazing creative individual , he funneled his eagerness for creation
                into this LARP ,wanting to put his own mark in the community and create something
                fun and enjoyable that anyone can enjoy freely. Both for old and new players in the
                Vampire: The Masquerade universe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="px-4 lg:px-40 flex justify-center py-16">
      <div class="max-w-[720px] w-full text-center">
        <h2 class="text-white text-3xl font-bold mb-8 italic">The Meeting of Minds</h2>
        <div class="space-y-6 text-gray-400 text-lg leading-relaxed font-sans">
          <p>
            Kyriakos and Mike met in another Vampire: The Masquerade LARP as players around two
            years ago and forming a bond of friendship and partnership within the following years,
            we had decided to create something of our own.
          </p>
          <p>
            A story that would focus on our country's history and delve into its rich secrets ,
            scandals and monumental events. We aim to put a different scope in witnessing the
            historical events that took place in our city, seeing them through the lens of Athen's
            Kindred community. Their actions, opinions and rivalries.
          </p>
          <p class="border-l-2 border-primary pl-6 ml-6 italic text-gray-300">
            "Athens Through Time" is the culmination of that partnership—a project designed to merge
            Kyriakos and Mike's love for Athens and RPGs.
          </p>
        </div>
      </div>
    </div>

    <div class="px-4 lg:px-40 flex justify-center py-10">
      <div class="max-w-[960px] w-full">
        <div
          class="relative p-8 bg-[#2a1a1c] border-2 border-dashed border-primary/40 rounded-lg dossier-texture overflow-hidden shadow-2xl"
        >
          <div
            class="absolute -top-2 -right-6 rotate-12 border-4 border-primary/60 text-primary/60 px-4 py-2 font-black uppercase text-2xl tracking-tighter opacity-40 select-none pointer-events-none"
          >
            Confidential
          </div>

          <div class="flex items-start gap-4 mb-4">
            <span class="material-symbols-outlined text-primary text-4xl">folder_shared</span>
            <div>
              <h4 class="text-white text-xl font-bold tracking-widest uppercase mb-1 font-sans">
                Dossier Fragment #092
              </h4>
              <p class="text-primary text-xs font-bold uppercase font-sans">
                Subject: Internal Paradox
              </p>
            </div>
          </div>

          <div class="h-px w-full bg-primary/20 mb-6"></div>

          <div class="grid md:grid-cols-4 gap-8">
            <div class="md:col-span-3">
              <p class="text-gray-300 font-mono text-sm leading-relaxed italic">
                "Despite the immense passion and countless hours poured into this gothic-noir
                chronicle, field reports suggest a startling irony: The World of Darkness is
                actually NOT the favorite gaming universe for either Architect.
                <br /><br />
                When the sun rises, you're more likely to find them debating the logistics of a
                Martian colony or the tactical nuances of high-fantasy skirmishes. Perhaps it is
                this outsider's perspective that allows them to deconstruct and rebuild the
                Masquerade with such ruthless efficiency."
              </p>
            </div>
            <div
              class="flex flex-col justify-center items-center text-center p-4 border border-white/5 rounded bg-black/20"
            >
              <span class="material-symbols-outlined text-primary/40 text-5xl mb-2">lock</span>
              <p class="text-[10px] text-gray-500 uppercase tracking-tighter font-sans">
                Authorized Eyes Only
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dossier-texture {
  background-image: radial-gradient(circle at 2px 2px, rgba(212, 17, 33, 0.05) 1px, transparent 0);
  background-size: 24px 24px;
}
</style>
