<script setup>
import HeroSection from "../components/HeroSection.vue";
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
            <span class="material-symbols-outlined">vape_free</span>
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
          <h2 class="text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
            A Legacy Carved in Blood
          </h2>
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
              We play in blocks of four. <strong>Three Modern Nights</strong> events (set in 2024)
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
              the neon-lit 2024. Your <strong>Ancestor</strong> (or younger self) is played during
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
                      warfare in 2024.
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
                style="background-image: url(&quot;/img/pexels-photo-20872396.jpg&quot;)"
              ></div>
              <div
                class="aspect-square rounded-lg bg-cover bg-center border border-[#39282a]"
                style="
                  background-image: url(&quot;https://images.unsplash.com/photo-1542256843-04e4c3d33261?q=80&quot;);
                "
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-[#0f0a0b]" id="setting">
      <div class="px-4 md:px-10 lg:px-40 flex justify-center">
        <div class="max-w-[1200px] w-full">
          <div class="flex flex-col items-center text-center mb-16">
            <h2 class="text-primary text-sm font-bold tracking-[0.3em] uppercase mb-3">
              The Setting
            </h2>
            <h3 class="text-3xl md:text-5xl font-black text-white">Two Faces of the Same City</h3>
          </div>
          <div class="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div
              class="group relative aspect-[4/5] overflow-hidden rounded-xl border border-[#39282a]"
            >
              <div
                class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style="
                  background-image: url(&quot;https://images.unsplash.com/photo-1596727147705-54a9d0c2067d?q=80&quot;);
                "
              ></div>
              <div
                class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"
              ></div>
              <div class="absolute bottom-0 left-0 p-8">
                <div
                  class="mb-4 size-12 bg-primary flex items-center justify-center rounded text-white shadow-lg"
                >
                  <span class="material-symbols-outlined">apartment</span>
                </div>
                <h4 class="text-2xl font-bold text-white mb-2">Modern Necropolis</h4>
                <p class="text-gray-300">
                  2024 Athens is a sprawling labyrinth. Under the neon glare, the Kindred maintain a
                  fragile peace while the Anarchs and Camarilla fight for the soul of the port.
                </p>
              </div>
            </div>
            <div
              class="group relative aspect-[4/5] overflow-hidden rounded-xl border border-[#39282a]"
            >
              <div
                class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                style="
                  background-image: url(&quot;https://images.unsplash.com/photo-1555662760-49272332694b?q=80&quot;);
                "
              ></div>
              <div
                class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"
              ></div>
              <div class="absolute bottom-0 left-0 p-8">
                <div
                  class="mb-4 size-12 bg-white/10 flex items-center justify-center rounded text-white border border-white/20 shadow-lg backdrop-blur-md"
                >
                  <span class="material-symbols-outlined">temple_hindu</span>
                </div>
                <h4 class="text-2xl font-bold text-white mb-2">The Echoes</h4>
                <p class="text-gray-300">
                  Return to the ancient shadows. Forge pacts under the moonlight of centuries past
                  and witness the founding of the laws that now threaten your modern existence.
                </p>
              </div>
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
        <h3 class="text-4xl md:text-5xl font-black text-white mb-8">The Storytellers</h3>
        <p class="text-gray-400 max-w-2xl mx-auto mb-12">
          Meet the architects of the night. Our team of experienced Storytellers has over two
          decades of combined experience in running high-immersion RPG campaigns.
        </p>

        <!-- UPDATED STORYTELLER GRID (2 Columns) -->
        <div class="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <!-- Kikos -->
          <div class="bg-surface-dark border border-[#39282a] p-8 rounded-xl text-center">
            <img
              src="/img/st/kikos-1.jpg"
              alt="Kikos"
              class="size-24 rounded-full mx-auto mb-4 border-2 border-primary object-cover"
            />
            <h4 class="text-white font-bold text-xl mb-1">Kikos</h4>
            <p class="text-primary text-xs uppercase font-bold tracking-widest mb-4">
              SΤ, Politics Master, PR Specialist
            </p>
          </div>

          <!-- Mike -->
          <div class="bg-surface-dark border border-[#39282a] p-8 rounded-xl text-center">
            <img
              src="/img/st/mike-1.jpg"
              alt="Mike"
              class="size-24 rounded-full mx-auto mb-4 border-2 border-primary object-cover"
            />
            <h4 class="text-white font-bold text-xl mb-1">Mike</h4>
            <p class="text-primary text-xs uppercase font-bold tracking-widest mb-4">
              ST, Occult Master, Tech Specialist
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 px-4 md:px-10 lg:px-40 bg-background-dark" id="gallery">
      <div class="max-w-[1200px] mx-auto">
        <div class="flex flex-col items-center text-center mb-16">
          <h2 class="text-primary text-sm font-bold tracking-[0.3em] uppercase mb-3">Gallery</h2>
          <h3 class="text-4xl md:text-5xl font-black text-white">Archives of the Night</h3>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div
            class="aspect-square bg-surface-dark border border-[#39282a] rounded overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1542052973-1f7c1945f32b?q=80"
              alt="Gallery 1"
              class="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity"
            />
          </div>
          <div
            class="aspect-square bg-surface-dark border border-[#39282a] rounded overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1557053503-0c252e5c8093?q=80"
              alt="Gallery 2"
              class="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity"
            />
          </div>
          <div
            class="aspect-square bg-surface-dark border border-[#39282a] rounded overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1509059852496-f3822ae048eb?q=80"
              alt="Gallery 3"
              class="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity"
            />
          </div>
          <div
            class="aspect-square bg-surface-dark border border-[#39282a] rounded overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1504198266287-1659872e6590?q=80"
              alt="Gallery 4"
              class="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="relative py-32 flex items-center justify-center overflow-hidden" id="register">
      <div class="absolute inset-0 bg-[#181112]">
        <div
          class="absolute inset-0 opacity-10 bg-cover bg-center"
          style="
            background-image: url(&quot;https://images.unsplash.com/photo-1620393470010-fd700cc38666?q=80&quot;);
          "
        ></div>
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none"
        ></div>
      </div>
      <div class="relative z-10 max-w-xl w-full px-6 text-center">
        <span class="material-symbols-outlined text-6xl text-primary mb-6">bloodtype</span>
        <h2 class="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
          Join the Masquerade
        </h2>
        <p class="text-gray-400 text-lg mb-10 leading-relaxed">
          The court is gathering in the shadows of the Parthenon. Secure your place in the chronicle
          before the sun rises.
        </p>
        <form class="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Enter your email address"
            class="w-full h-14 bg-[#0a0606] border border-[#39282a] rounded text-white px-5 placeholder:text-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
          />
          <button
            type="button"
            class="w-full h-14 bg-primary hover:bg-primary-dark text-white font-bold uppercase tracking-widest rounded transition-all shadow-lg hover:shadow-primary/40 flex items-center justify-center gap-3"
          >
            <span>Send Invitation</span>
            <span class="material-symbols-outlined text-lg">send</span>
          </button>
        </form>
        <p class="mt-6 text-xs text-gray-600 uppercase tracking-widest">
          By registering, you agree to uphold the Traditions and the Dark Pack guidelines.
        </p>
      </div>
    </section>
  </div>
</template>
