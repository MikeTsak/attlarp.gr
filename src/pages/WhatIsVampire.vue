<script setup>
import { useSeo } from "../composables/useSeo";

useSeo({
  title: "What is Vampire: The Masquerade : Athens Through Time",
  description:
    "An introduction to Vampire: The Masquerade V5. Athens Through Time is an official Vampire: The Masquerade licensed LARP through the Dark Pack agreement with Paradox Interactive.",
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
                World of Darkness : V5 Chronicle
              </span>
              <span
                class="inline-flex items-center gap-2 rounded-full bg-surface-dark px-4 py-1 text-xs font-bold uppercase tracking-widest text-gray-400 border border-[#39282a]"
              >
                <i class="fa-solid fa-shield-halved text-primary text-xs"></i>
                Personal & Political Horror
              </span>
            </div>

            <h1
              class="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.88] tracking-tighter uppercase"
            >
              What is <br />
              <span class="text-primary text-shadow-glow">Vampire?</span>
            </h1>

            <p
              class="text-gray-300 text-lg sm:text-xl font-light leading-relaxed border-l-4 border-primary pl-6 max-w-2xl"
            >
              Vampire: The Masquerade is a chronicle of personal tragedy and high stakes politics. You portray an immortal predator caught between the memory of mortal warmth and the ravenous Beast that hungers beneath your flesh. In the nocturnal streets of Athens, blood is power, debts are eternal, and trust is fatal.
            </p>

            <div class="flex flex-wrap gap-4 pt-2">
              <button
                @click="scrollToSection('the-masquerade')"
                class="flex cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-lg h-14 px-8 bg-primary hover:bg-primary-dark transition-all text-white text-xs font-bold tracking-widest uppercase shadow-[0_0_25px_rgba(212,17,33,0.4)]"
              >
                <span>The First Tradition</span>
                <i class="fa-solid fa-arrow-down text-xs"></i>
              </button>
              <RouterLink
                to="/what-is-larp"
                class="flex items-center justify-center gap-3 rounded-lg h-14 px-8 border border-[#39282a] hover:border-primary bg-surface-dark/80 hover:bg-surface-dark transition-all text-gray-300 hover:text-white text-xs font-bold tracking-widest uppercase"
              >
                <span>What is LARP?</span>
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
                  <span>The Masquerade Veil</span>
                </div>
                <p class="text-xs text-gray-300 font-light leading-relaxed">
                  "A Monster I Am, Lest A Monster I Become" : The central tragedy of Kindred unlife. Vampires maintain appearances of civility to hide the predator within from mortal eyes.
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
              Official Licensing & Attribution
            </span>
            <h3 class="text-lg sm:text-xl font-black uppercase text-white">
              Athens Through Time is an official Vampire: The Masquerade licensed LARP through the Dark Pack
            </h3>
            <p class="text-xs sm:text-sm text-gray-300 font-light max-w-3xl leading-relaxed">
              Vampire: The Masquerade is created by <strong>Paradox Interactive AB</strong>. Athens Through Time is officially licensed and sanctioned under the <strong>Dark Pack</strong> agreement, bringing World of Darkness 5th Edition live action storytelling to life in Greece.
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
            <span>Dark Pack Details</span>
            <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
          </a>
          <a
            href="https://www.worldofdarkness.com"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 px-6 py-3 rounded-lg border border-[#39282a] hover:border-gray-500 bg-surface-dark text-gray-300 hover:text-white text-xs font-bold uppercase tracking-widest transition-all"
          >
            <span>World of Darkness</span>
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
            The Personal Horror
          </span>
          <h2 class="text-white text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight">
            The Eternal Struggle
          </h2>
          <p class="text-text-muted text-sm sm:text-base mt-4 font-light">
            Every vampire is locked in a desperate internal war. Immortality is not a gift, but a predatory curse demanding constant moral vigilance.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <!-- The Beast Card -->
          <div class="bg-surface-dark p-8 rounded-2xl border border-[#39282a] hover:border-primary/50 transition-all flex flex-col justify-between">
            <div class="space-y-4">
              <span class="size-14 rounded-xl bg-primary/20 text-primary flex items-center justify-center text-2xl">
                <i class="fa-solid fa-skull"></i>
              </span>
              <h3 class="text-2xl font-black uppercase text-white">The Beast</h3>
              <p class="text-gray-400 text-sm leading-relaxed font-light">
                The primordial parasite dwelling in every vampire's blood. The Beast cares nothing for philosophy, alliances, or remorse. It knows only Hunger, Fear of fire and the sun, and the instinct to dominate territory.
              </p>
            </div>
            <div class="pt-6 border-t border-[#39282a] text-xs font-bold uppercase tracking-widest text-primary">
              The Savage Predator
            </div>
          </div>

          <!-- The Hunger Card -->
          <div class="bg-surface-dark p-8 rounded-2xl border border-[#39282a] hover:border-primary/50 transition-all flex flex-col justify-between">
            <div class="space-y-4">
              <span class="size-14 rounded-xl bg-primary/20 text-primary flex items-center justify-center text-2xl">
                <i class="fa-solid fa-droplet"></i>
              </span>
              <h3 class="text-2xl font-black uppercase text-white">The Hunger</h3>
              <p class="text-gray-400 text-sm leading-relaxed font-light">
                In V5, blood is not a resource pool you track like gold: it is an agonizing addiction. As your Hunger rises, your control slips. The scent of a bleeding mortal can instantly throw you into uncontrollable frenzy.
              </p>
            </div>
            <div class="pt-6 border-t border-[#39282a] text-xs font-bold uppercase tracking-widest text-primary">
              The Ceaseless Urge
            </div>
          </div>

          <!-- Humanity Card -->
          <div class="bg-surface-dark p-8 rounded-2xl border border-[#39282a] hover:border-primary/50 transition-all flex flex-col justify-between">
            <div class="space-y-4">
              <span class="size-14 rounded-xl bg-primary/20 text-primary flex items-center justify-center text-2xl">
                <i class="fa-solid fa-heart-crack"></i>
              </span>
              <h3 class="text-2xl font-black uppercase text-white">Humanity</h3>
              <p class="text-gray-400 text-sm leading-relaxed font-light">
                The measure of your conscience and connection to mortal compassion. Every atrocity committed damages your Humanity. Should your Humanity reach zero, your soul is erased and only a mindless monster remains.
              </p>
            </div>
            <div class="pt-6 border-t border-[#39282a] text-xs font-bold uppercase tracking-widest text-primary">
              The Fragile Conscience
            </div>
          </div>
        </div>

        <!-- The Visceral Feed & Court Feast : Dual Photographic Showcase -->
        <div class="mb-16 rounded-2xl overflow-hidden border border-[#39282a] bg-surface-dark shadow-2xl">
          <div class="p-8 sm:p-12 border-b border-[#39282a]">
            <div class="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-[0.2em] bg-primary/10 px-3 py-1 rounded border border-primary/20 w-fit mb-4">
              <i class="fa-solid fa-skull text-xs"></i>
              The Reality of The Feed
            </div>

            <h3 class="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-white leading-tight mb-4">
              The Visceral Thirst : From Alley Predation to Courtly Revels
            </h3>

            <p class="text-gray-300 text-sm sm:text-base font-light leading-relaxed max-w-4xl">
              Feeding is not an abstract roll of dice in Athens Through Time: it is a lived narrative event. To preserve unlife, every kindred must feed upon the blood of mortals or other vampires. Whether hunting in shadowy metro stations or toasting with crimson chalices at an aristocratic Elysium ball, the taste of vitae defines who you are.
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
                  The Street Predation
                </div>
              </div>
              <div class="p-6 sm:p-8 space-y-3">
                <div class="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider">
                  <i class="fa-solid fa-triangle-exclamation text-xs"></i>
                  <span>The Bestial Thirst</span>
                </div>
                <h4 class="text-xl font-bold uppercase text-white">Urban Predation and Compulsions</h4>
                <p class="text-xs text-gray-400 font-light leading-relaxed">
                  When Hunger dice overwhelm a vampire's roll, the Beast asserts immediate dominion. Social composure shatters, forcing predatory compulsions that demand instant satiation regardless of risk or location.
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
                  The Salon Decadence
                </div>
              </div>
              <div class="p-6 sm:p-8 space-y-3">
                <div class="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider">
                  <i class="fa-solid fa-wine-glass text-xs"></i>
                  <span>The Sanguine Banquet</span>
                </div>
                <h4 class="text-xl font-bold uppercase text-white">Court Revels and Blood Resonance</h4>
                <p class="text-xs text-gray-400 font-light leading-relaxed">
                  In high Elysium gatherings, vitae is served with ceremony and deliberation. In V5, mortal emotional states impart distinct resonances to the blood, granting temporary discipline enhancements to those who discern their nuances.
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
                Distilled Essence
              </div>
            </div>

            <div class="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
              <div class="space-y-3">
                <div class="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest">
                  <i class="fa-solid fa-flask text-xs"></i>
                  <span>Vitae : The Blood of Caine</span>
                </div>
                <h3 class="text-xl sm:text-2xl font-black uppercase text-white">
                  The Power of Vitae
                </h3>
                <p class="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                  Vampiric blood is not mere biology: it is an occult superconductor of supernatural power. Kindred can heal mortal wounds in seconds, enhance reflexes to blurred speeds, or enthrall others through the dreaded <strong>Blood Bond</strong>.
                </p>
                <div class="p-3.5 rounded-lg bg-[#181112] border border-[#39282a] space-y-1 text-xs">
                  <div class="flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-[11px]">
                    <i class="fa-solid fa-link text-xs"></i>
                    <span>The Blood Bond (Vinculum)</span>
                  </div>
                  <p class="text-gray-400 font-light leading-relaxed text-[11px]">
                    Drinking the vitae of another vampire thrice creates absolute devotion. The thrall loves their regnant beyond family, reason, or self preservation.
                  </p>
                </div>
              </div>

              <div class="pt-4 border-t border-[#39282a] text-xs font-bold uppercase tracking-widest text-gray-400">
                Blood Bonds & Potency
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
                Crimson Rites
              </div>
            </div>

            <div class="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
              <div class="space-y-3">
                <div class="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest">
                  <i class="fa-solid fa-hand-holding-droplet text-xs"></i>
                  <span>Blood Sorcery</span>
                </div>
                <h3 class="text-xl sm:text-2xl font-black uppercase text-white">
                  Thaumaturgy & Wards
                </h3>
                <p class="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                  Hermetic scholars of Clan Tremere treat vitae as the supreme occult catalyst. Through disciplined ritual formulas and dedicated sanctums, practitioners awaken defensive wards, decipher lineage curses, and weave protective circles across Athenian havens.
                </p>
                <div class="p-3.5 rounded-lg bg-[#181112] border border-[#39282a] space-y-1 text-xs">
                  <div class="flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-[11px]">
                    <i class="fa-solid fa-fire text-xs"></i>
                    <span>Hermetic Formulas</span>
                  </div>
                  <p class="text-gray-400 font-light leading-relaxed text-[11px]">
                    By channeling vitae into consecrated circles, sorcerers scry distant domains, preserve occult lore, and seal territory against supernatural intruders.
                  </p>
                </div>
              </div>

              <div class="pt-4 border-t border-[#39282a] text-xs font-bold uppercase tracking-widest text-gray-400">
                Hermetic Rites & Blood Oaths
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
                Esoteric Arts
              </div>
            </div>

            <div class="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
              <div class="space-y-3">
                <div class="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest">
                  <i class="fa-solid fa-hat-wizard text-xs"></i>
                  <span>Esoteric Disciplines</span>
                </div>
                <h3 class="text-xl sm:text-2xl font-black uppercase text-white">
                  Oblivion & Necromancy
                </h3>
                <p class="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                  Beyond blood lies the eternal void of the Underworld. Hecata necromancers and Lasombra magisters command shadows from the Abyss, consulting restless specters that haunt Athenian ruins and catacombs.
                </p>
                <div class="p-3.5 rounded-lg bg-[#181112] border border-[#39282a] space-y-1 text-xs">
                  <div class="flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-[11px]">
                    <i class="fa-solid fa-vial-circle-check text-xs"></i>
                    <span>Thin Blood Alchemy</span>
                  </div>
                  <p class="text-gray-400 font-light leading-relaxed text-[11px]">
                    Modern duskborn vampires cook street chemicals and thin blood into volatile potions, forging modern counterfeits to ancient disciplines.
                  </p>
                </div>
              </div>

              <div class="pt-4 border-t border-[#39282a] text-xs font-bold uppercase tracking-widest text-gray-400">
                Wards , Whispers Beyond the Veil
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
              The First Tradition
            </div>
            <h2 class="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              The Masquerade : Secrecy Is Survival
            </h2>
            <p class="text-gray-300 text-base sm:text-lg font-light leading-relaxed">
              "Thou shalt not reveal thy true nature unto those not of the Blood." In past centuries, vampires ruled openly from stone castles. Today, humanity numbers eight billion, interconnected by mobile cameras, satellite feeds, facial recognition, and clandestine government agencies known as the <strong>Second Inquisition</strong>.
            </p>
            <p class="text-gray-400 text-sm leading-relaxed font-light">
              A single indiscreet feeding or public display of supernatural power captured on video can bring mortal strike teams with white phosphorus and daylight drones upon an entire city domain. The Masquerade is the iron law that keeps every vampire alive.
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
                  Walking Among Sheep
                </p>
                <p class="text-xs text-gray-300 font-light">
                  A vampire must look, act, and dress like a mortal at all times. Any breach is met with execution by the Prince.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- The Six Traditions of Caine Grid -->
        <div class="border-t border-[#39282a] pt-16">
          <div class="text-center max-w-2xl mx-auto mb-12">
            <span class="text-primary text-xs font-bold uppercase tracking-[0.2em] block mb-1">
              Ancient Decrees
            </span>
            <h3 class="text-2xl sm:text-3xl font-black uppercase text-white">
              The Six Traditions of Caine
            </h3>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="bg-surface-dark p-6 rounded-xl border border-[#39282a] space-y-2">
              <div class="flex items-center justify-between mb-1">
                <span class="text-primary font-black text-lg">I</span>
                <span class="text-[10px] uppercase font-bold text-gray-500 tracking-widest">Tradition</span>
              </div>
              <h4 class="text-base font-bold uppercase text-white">The Masquerade</h4>
              <p class="text-xs text-gray-400 font-light leading-relaxed">
                Never reveal the presence of vampires to mortals. Protect the veil at all costs.
              </p>
            </div>

            <div class="bg-surface-dark p-6 rounded-xl border border-[#39282a] space-y-2">
              <div class="flex items-center justify-between mb-1">
                <span class="text-primary font-black text-lg">II</span>
                <span class="text-[10px] uppercase font-bold text-gray-500 tracking-widest">Tradition</span>
              </div>
              <h4 class="text-base font-bold uppercase text-white">The Domain</h4>
              <p class="text-xs text-gray-400 font-light leading-relaxed">
                Respect the territory of the Prince and other kindred. Claim no hunting ground without consent.
              </p>
            </div>

            <div class="bg-surface-dark p-6 rounded-xl border border-[#39282a] space-y-2">
              <div class="flex items-center justify-between mb-1">
                <span class="text-primary font-black text-lg">III</span>
                <span class="text-[10px] uppercase font-bold text-gray-500 tracking-widest">Tradition</span>
              </div>
              <h4 class="text-base font-bold uppercase text-white">The Progeny</h4>
              <p class="text-xs text-gray-400 font-light leading-relaxed">
                Sire new vampires only with the explicit permission of the reigning Prince of the city.
              </p>
            </div>

            <div class="bg-surface-dark p-6 rounded-xl border border-[#39282a] space-y-2">
              <div class="flex items-center justify-between mb-1">
                <span class="text-primary font-black text-lg">IV</span>
                <span class="text-[10px] uppercase font-bold text-gray-500 tracking-widest">Tradition</span>
              </div>
              <h4 class="text-base font-bold uppercase text-white">The Accounting</h4>
              <p class="text-xs text-gray-400 font-light leading-relaxed">
                You are responsible for every crime committed by your childer until they are officially released.
              </p>
            </div>

            <div class="bg-surface-dark p-6 rounded-xl border border-[#39282a] space-y-2">
              <div class="flex items-center justify-between mb-1">
                <span class="text-primary font-black text-lg">V</span>
                <span class="text-[10px] uppercase font-bold text-gray-500 tracking-widest">Tradition</span>
              </div>
              <h4 class="text-base font-bold uppercase text-white">The Hospitality</h4>
              <p class="text-xs text-gray-400 font-light leading-relaxed">
                When arriving in a new city, present yourself to the Prince and Keeper of Elysium immediately.
              </p>
            </div>

            <div class="bg-surface-dark p-6 rounded-xl border border-[#39282a] space-y-2">
              <div class="flex items-center justify-between mb-1">
                <span class="text-primary font-black text-lg">VI</span>
                <span class="text-[10px] uppercase font-bold text-gray-500 tracking-widest">Tradition</span>
              </div>
              <h4 class="text-base font-bold uppercase text-white">The Destruction</h4>
              <p class="text-xs text-gray-400 font-light leading-relaxed">
                No vampire may kill another of their kind without a Blood Hunt decreed by the Prince.
              </p>
            </div>
          </div>

          <!-- The Sovereign Decrees : SchreckNET & Sealed Decrees (vampire-wax-seal.jpg) -->
          <div class="mt-16 rounded-2xl overflow-hidden border border-[#39282a] bg-surface-dark shadow-2xl">
            <div class="grid grid-cols-1 lg:grid-cols-12 items-center">
              <div class="lg:col-span-5 p-8 sm:p-12 space-y-6 order-2 lg:order-1">
                <div class="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-[0.2em] bg-primary/10 px-3 py-1 rounded border border-primary/20 w-fit">
                  <i class="fa-solid fa-network-wired text-xs"></i>
                  SchreckNET & Court Decrees
                </div>

                <h3 class="text-2xl sm:text-3xl font-black uppercase text-white leading-tight">
                  The Prince's Decree : Secrecy in the Digital Age
                </h3>

                <p class="text-gray-300 text-sm sm:text-base font-light leading-relaxed">
                  While underground networks like SchreckNET and isolated encrypted channels exist among Kindred, digital communications are scarce and heavily monitored under the watchful gaze of the Second Inquisition.
                </p>

                <p class="text-gray-400 text-sm font-light leading-relaxed">
                  Because electronic channels remain exceptionally rare and perilous, official decrees, domain borders, and formal court summons from the Prince are sealed with wax and delivered by hand to guarantee authenticity without digital interception.
                </p>

                <div class="space-y-3 pt-2">
                  <div class="p-4 rounded-xl bg-[#181112] border border-[#39282a] space-y-1">
                    <span class="text-xs font-bold uppercase tracking-widest text-primary block">
                      The Seal of Provenance
                    </span>
                    <p class="text-xs text-gray-400 font-light leading-relaxed">
                      Every Prince and Primogen holds a unique signet. Tampering with or forging an official seal is treated as treason against the domain.
                    </p>
                  </div>

                  <div class="p-4 rounded-xl bg-[#181112] border border-[#39282a] space-y-1">
                    <span class="text-xs font-bold uppercase tracking-widest text-primary block">
                      The Ledger of Boons
                    </span>
                    <p class="text-xs text-gray-400 font-light leading-relaxed">
                      Life debts, trivial favors, and political alliances are recorded in sealed contracts, cataloged by Harpies to guarantee payment across centuries.
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
                    The Crimson Seal
                  </span>
                  <p class="text-xs text-gray-300 font-light">
                    Official court decrees and safe passage missives, sealed with wax to preserve Masquerade secrecy.
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
              The Sovereign Domain
            </div>

            <h2 class="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              The Camarilla Court of Athens
            </h2>

            <p class="text-gray-300 text-base sm:text-lg font-light leading-relaxed">
              In Athens, kindred society is governed exclusively by the Camarilla: the Ivory Tower. Rejecting anarchy and disorder, the domain operates as an aristocratic feudal hierarchy where power flows from ancient lineages and strict obedience to the Traditions of Caine.
            </p>

            <p class="text-gray-400 text-sm leading-relaxed font-light">
              Under the rule of the Prince and the Primogen Council, the Athenian court preserves order across neoclassical salons, cultural institutions, and historic boroughs. Here, lineage commands deference, decorum is mandatory, and transgressions against the domain are answered with swift, merciless judgment.
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div class="p-5 rounded-xl bg-surface-dark border border-[#39282a] space-y-2">
                <div class="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider">
                  <i class="fa-solid fa-crown text-xs"></i>
                  <span>The Prince & Primogen</span>
                </div>
                <p class="text-xs text-gray-400 font-light leading-relaxed">
                  The sovereign ruler commands the city, flanked by elder councilors who represent the established clans of the Camarilla.
                </p>
              </div>

              <div class="p-5 rounded-xl bg-surface-dark border border-[#39282a] space-y-2">
                <div class="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider">
                  <i class="fa-solid fa-scale-balanced text-xs"></i>
                  <span>Tradition & Feudal Law</span>
                </div>
                <p class="text-xs text-gray-400 font-light leading-relaxed">
                  Hunting rights, domain borders, and siring permissions are granted strictly by court decree, securing the domain from chaos.
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
                  <span>The Ivory Tower in Athens</span>
                </div>
                <p class="text-xs text-gray-300 font-light leading-relaxed">
                  Order, tradition, and hierarchy define the domain, maintaining ancient dominion over the historic city.
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
                Ancestral Heritage
              </span>
              <p class="text-xs text-gray-300 font-light">
                Kindred bloodlines span centuries in Athens, where historical decisions directly shape modern domain politics.
              </p>
            </div>
          </div>

          <div class="lg:col-span-6 space-y-6">
            <div class="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-[0.2em] bg-primary/10 px-3 py-1 rounded border border-primary/20 w-fit">
              <i class="fa-solid fa-hourglass-half text-xs"></i>
              The Athens Chronicle Pulse
            </div>
            <h2 class="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              The 3:1 Cycle : Echoes of Heritage
            </h2>
            <p class="text-gray-300 text-base sm:text-lg font-light leading-relaxed">
              In a city with three thousand years of continuous history, the past is never buried. Athens Through Time is structured around a unique <strong>3:1 ratio</strong>: three Modern Nights sessions followed by one Historical Echo session where you step into the shoes of your character's ancient Ancestor.
            </p>
            <p class="text-gray-400 text-sm leading-relaxed font-light">
              What your Ancestor negotiates, steals, or buries in the historical session changes the political map of Athens tonight. Deeds done in blood echo through eternity.
            </p>
            <div class="pt-2">
              <RouterLink
                to="/setting"
                class="inline-flex items-center gap-3 px-8 py-4 bg-primary hover:bg-primary-dark transition-all rounded-lg text-white text-xs font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(212,17,33,0.4)]"
              >
                <span>Read The Full Setting Lore</span>
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
            Join The Chronicle
          </span>
          <h3 class="text-2xl sm:text-3xl font-black uppercase text-white">
            Step Into The Night
          </h3>
          <p class="text-sm text-gray-300 font-light max-w-2xl">
            Meet the Storyteller team, review the chronicle guidelines, or join our community Discord to prepare your character sheet for the next session.
          </p>
        </div>

        <div class="flex flex-wrap gap-4 justify-center">
          <RouterLink
            to="/storytellers"
            class="flex items-center gap-3 px-6 py-3.5 bg-surface-dark hover:bg-surface-dark/80 border border-[#39282a] hover:border-primary transition-all rounded-lg text-white text-xs font-bold uppercase tracking-widest"
          >
            <span>Storytellers</span>
            <i class="fa-solid fa-users text-xs"></i>
          </RouterLink>
          <a
            href="https://discord.gg/ZeNg6cdPbj"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-3 px-6 py-3.5 bg-primary hover:bg-primary-dark transition-all rounded-lg text-white text-xs font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(212,17,33,0.4)]"
          >
            <span>Join Discord</span>
            <img src="/img/discord.webp" alt="Discord" class="h-4 w-4 object-contain" />
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
