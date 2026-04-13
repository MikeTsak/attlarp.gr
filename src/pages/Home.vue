<script setup>
import HeroSection from "../components/HeroSection.vue";

const emit = defineEmits(["navigate"]);

const navTo = (page) => {
  emit("navigate", page);
};
</script>

<template>
  <div class="bg-background-dark text-white">
    <HeroSection />

    <section
      class="py-24 px-4 md:px-10 lg:px-40 bg-background-dark border-y border-[#39282a]"
      id="welcome"
    >
      <div class="max-w-[1200px] mx-auto grid lg:grid-cols-3 gap-12">
        <div class="space-y-6">
          <div class="flex items-center gap-3 text-primary">
            <span class="material-symbols-outlined">theater_comedy</span>
            <h3 class="text-xl font-bold uppercase tracking-wider">What is LARP?</h3>
          </div>
          <p class="text-gray-400 leading-relaxed">
            Live Action Role Playing (LARP) is a form of collaborative storytelling. You don't just
            describe your character's actions; you embody them. Dressed in costume, you interact
            with other players in real-time, making decisions that influence the shared narrative in
            an immersive environment.
          </p>
        </div>

        <div class="space-y-6">
          <div class="flex items-center gap-3 text-primary">
            <span class="material-symbols-outlined">bloodtype</span>
            <h3 class="text-xl font-bold uppercase tracking-wider">What is VTM?</h3>
          </div>
          <p class="text-gray-400 leading-relaxed">
            Vampire: The Masquerade is a game of personal and political horror. You play a vampire
            struggling to maintain your humanity while navigating the treacherous politics of the
            undead. In the 5th Edition (V5), the hunger is a constant companion, driving every
            choice you make.
          </p>
        </div>

        <div class="space-y-6">
          <div class="flex items-center gap-3 text-primary">
            <span class="material-symbols-outlined">history_edu</span>
            <h3 class="text-xl font-bold uppercase tracking-wider">Athens Through Time?</h3>
          </div>
          <p class="text-gray-400 leading-relaxed">
            This is a unique chronicle set in the cradle of civilization. Athens is a city where
            ancient gods have been replaced by eternal monsters. Here, the weight of history isn't
            just a metaphor—it's a mechanic. Our story spans generations, connecting the modern
            nights to the whispers of the past.
          </p>
        </div>
      </div>
    </section>

    <section class="py-24 px-4 md:px-10 lg:px-40 bg-background-dark relative" id="chronicle">
      <div class="max-w-[1200px] mx-auto">
        <div class="flex flex-col items-center text-center mb-16">
          <div
            class="inline-flex items-center gap-2 text-primary border border-primary/30 px-4 py-1.5 rounded-full bg-primary/10 mb-4"
          >
            <span class="material-symbols-outlined text-sm">cycle</span>
            <span class="text-xs font-bold uppercase tracking-[0.2em]">The 3:1 Cycle</span>
          </div>

          <button @click="navTo('setting')" type="button" class="group">
            <h2
              class="text-4xl md:text-5xl font-black text-white tracking-tight mb-6 group-hover:text-primary transition-colors"
            >
              A Legacy Carved in Blood
            </h2>
          </button>

          <p class="text-gray-400 max-w-2xl text-lg">
            In Athens, time is fluid. Our chronicle operates on a cyclical structure where the
            echoes of the past directly reshape the reality of the present.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div
            class="bg-surface-dark border border-[#39282a] p-8 rounded-xl hover:border-primary/50 transition-all group"
          >
            <div
              class="size-14 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform"
            >
              <span class="material-symbols-outlined text-3xl">psychology</span>
            </div>
            <h3 class="text-2xl font-bold text-white mb-4">The Core Concept</h3>
            <p class="text-gray-400 text-sm leading-relaxed">
              The chronicle is built on the principle of <strong>causality</strong>. Actions taken
              during historical events aren't just "lore"—they are active gameplay that changes the
              political landscape, character status, and physical environment of the modern city.
            </p>
          </div>

          <div
            class="bg-surface-dark border border-[#39282a] p-8 rounded-xl hover:border-primary/50 transition-all group"
          >
            <div
              class="size-14 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform"
            >
              <span class="material-symbols-outlined text-3xl">account_tree</span>
            </div>
            <h3 class="text-2xl font-bold text-white mb-4">Structure of Play</h3>
            <p class="text-gray-400 text-sm leading-relaxed">
              We play in blocks of four. <strong>Three Modern Nights</strong> events (set in 2026)
              are followed by <strong>One Historical Echo</strong> (set in a significant era like
              Classical Greece or the Ottoman occupation). Each Echo concludes a chapter of the
              story.
            </p>
          </div>

          <div
            class="bg-surface-dark border border-[#39282a] p-8 rounded-xl hover:border-primary/50 transition-all group"
          >
            <div
              class="size-14 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform"
            >
              <span class="material-symbols-outlined text-3xl">groups_3</span>
            </div>
            <h3 class="text-2xl font-bold text-white mb-4">Your Character(s)</h3>
            <p class="text-gray-400 text-sm leading-relaxed">
              Every player maintains two personas. Your <strong>Main Character</strong> navigates
              the neon-lit 2026. Your <strong>Ancestor</strong> (or younger self) is played during
              the Echoes. The sins of the Ancestor become the burdens of the Main Character.
            </p>
          </div>
        </div>

        <div
          class="mt-16 bg-[#1a0c0e] rounded-2xl border border-primary/20 p-8 md:p-12 overflow-hidden relative"
        >
          <div
            class="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] rounded-full -mr-32 -mt-32"
          ></div>

          <div class="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
            <div class="lg:w-1/2 space-y-6">
              <h4 class="text-3xl font-black text-white italic">"The Past is Never Truly Dead."</h4>

              <div class="space-y-4">
                <div class="flex gap-4">
                  <span class="material-symbols-outlined text-primary">person</span>
                  <div>
                    <h5 class="text-white font-bold uppercase text-xs tracking-widest mb-1">
                      Modern Characters
                    </h5>
                    <p class="text-gray-400 text-sm">
                      V5 Neonates and Ancillae struggling with the Second Inquisition and Sect
                      warfare in 2026.
                    </p>
                  </div>
                </div>

                <div class="flex gap-4">
                  <span class="material-symbols-outlined text-primary">history</span>
                  <div>
                    <h5 class="text-white font-bold uppercase text-xs tracking-widest mb-1">
                      The Ancestors
                    </h5>
                    <p class="text-gray-400 text-sm">
                      The legends—or monsters—whose ancient decisions shaped the Bloodlines and
                      Traditions you inherit today.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="lg:w-1/2 grid grid-cols-2 gap-4">
              <div
                class="aspect-square rounded-lg bg-cover bg-center border border-[#39282a]"
                style="background-image: url('/img/Athensthrough time 3(47).jpg')"
              ></div>
              <div
                class="aspect-square rounded-lg bg-cover bg-center border border-[#39282a]"
                style="background-image: url('/img/Copyof179.jpg')"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="py-24 px-4 md:px-10 lg:px-40 bg-background-dark border-t border-[#39282a]"
      id="storytellers"
    >
      <div class="max-w-[1200px] mx-auto text-center">
        <h2 class="text-primary text-sm font-bold tracking-[0.3em] uppercase mb-3">About Us</h2>

        <button @click="navTo('storytellers')" type="button" class="inline-block group mb-8">
          <h3
            class="text-4xl md:text-5xl font-black text-white group-hover:text-primary transition-colors"
          >
            The Storytellers
          </h3>
        </button>

        <p class="text-gray-400 max-w-2xl mx-auto mb-12">
          Meet the architects of the night. Our team of experienced Storytellers has over two
          decades of combined experience in running high-immersion VtM chronicles.
        </p>

        <div class="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <button
            @click="navTo('storytellers')"
            type="button"
            class="bg-surface-dark border border-[#39282a] p-8 rounded-xl text-center hover:border-primary/50 transition-all group"
          >
            <div
              class="size-24 rounded-full mx-auto mb-4 border-2 border-primary bg-cover bg-center group-hover:scale-105 transition-transform"
              style="background-image: url('/img/st/kikos-1.jpg')"
            ></div>
            <h4 class="text-white font-bold text-xl mb-1 group-hover:text-primary transition-colors">
              Kikos
            </h4>
            <p class="text-primary text-xs uppercase font-bold tracking-widest mb-4">
              Systems Architect
            </p>
          </button>

          <button
            @click="navTo('storytellers')"
            type="button"
            class="bg-surface-dark border border-[#39282a] p-8 rounded-xl text-center hover:border-primary/50 transition-all group"
          >
            <div
              class="size-24 rounded-full mx-auto mb-4 border-2 border-primary bg-cover bg-center group-hover:scale-105 transition-transform"
              style="background-image: url('/img/st/mike-1.jpg')"
            ></div>
            <h4 class="text-white font-bold text-xl mb-1 group-hover:text-primary transition-colors">
              Mike
            </h4>
            <p class="text-primary text-xs uppercase font-bold tracking-widest mb-4">
              Narrative Design
            </p>
          </button>
        </div>
      </div>
    </section>

    <section class="py-24 px-4 md:px-10 lg:px-40 bg-background-dark" id="gallery">
      <div class="max-w-[1200px] mx-auto">
        <div class="flex flex-col items-center text-center mb-16">
          <h2 class="text-primary text-sm font-bold tracking-[0.3em] uppercase mb-3">Gallery</h2>

          <button @click="navTo('gallery')" type="button" class="group">
            <h3
              class="text-4xl md:text-5xl font-black text-white group-hover:text-primary transition-colors"
            >
              Archives of the Night
            </h3>
          </button>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button
            v-for="i in 4"
            :key="i"
            @click="navTo('gallery')"
            type="button"
            class="aspect-square bg-surface-dark border border-[#39282a] rounded overflow-hidden bg-cover bg-center opacity-60 hover:opacity-100 hover:scale-[1.02] transition-all cursor-pointer"
            :style="{ backgroundImage: `url('/img/gallery/${i}.jpg')` }"
            :aria-label="`Open gallery image ${i}`"
          ></button>
        </div>
      </div>
    </section>

    <section class="relative py-32 flex items-center justify-center overflow-hidden" id="register">
      <div class="absolute inset-0 bg-[#181112]">
        <div
          class="absolute inset-0 opacity-10 bg-cover bg-center"
          style="background-image: url('/img/register-bg.jpg')"
        ></div>
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none"
        ></div>
      </div>

      <div class="relative z-10 max-w-xl w-full px-6 text-center">
        <img
          src="/img/ATT-logo(1).png"
          alt="Logo"
          class="h-20 w-auto mx-auto mb-6 opacity-90 object-contain"
        />

        <h2 class="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
          Join the Masquerade
        </h2>

        <p class="text-gray-400 text-lg mb-10 leading-relaxed">
          The court is gathering in the shadows of the Parthenon. Secure your place in the chronicle
          before the sun rises.
        </p>

        <div class="flex flex-col gap-8">
          <a
            href="https://discord.gg/ZeNg6cdPbj"
            target="_blank"
            rel="noopener noreferrer"
            class="w-full h-14 bg-primary hover:bg-primary-dark text-white font-bold uppercase tracking-widest rounded transition-all shadow-lg hover:shadow-primary/40 flex items-center justify-center gap-3"
          >
            <span>Join our Discord</span>
            <img src="/img/discord.webp" alt="Discord" class="h-6 w-6 object-contain" />
          </a>

          <div class="flex items-center justify-center gap-8">
            <a
              href="https://www.instagram.com/att.larp/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white hover:text-primary transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                />
              </svg>
            </a>

            <a
              href="https://www.facebook.com/att.larp"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white hover:text-primary transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                />
              </svg>
            </a>

            <a
              href="https://www.tiktok.com/@att.larp"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white hover:text-primary transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
                <path
                  d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-3.21.06-6.41.07-9.62z"
                />
              </svg>
            </a>
          </div>
        </div>

        <p class="mt-8 text-xs text-gray-600 uppercase tracking-widest">
          By registering, you agree to uphold the Traditions and the Dark Pack guidelines.
        </p>
      </div>
    </section>
  </div>
</template>
