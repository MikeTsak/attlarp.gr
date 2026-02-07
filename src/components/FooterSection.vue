<template>
  <footer class="bg-[#0a0606] border-t border-[#221012] pt-16 pb-8 px-4 md:px-10 lg:px-20">
    <div class="max-w-[1400px] mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 mb-12 md:mb-16">
        <!-- COLUMN 1: BRANDING (4 cols) -->
        <div class="lg:col-span-4 space-y-6 text-center md:text-left">
          <div class="flex flex-col md:flex-row items-center gap-4 justify-center md:justify-start">
            <img
              src="/img/ATT-logo(1).png"
              alt="Logo"
              class="h-12 w-12 object-contain rounded-full border border-primary/20"
            />
            <h3 class="text-white font-bold uppercase tracking-[0.2em] text-lg">
              Athens Through Time
            </h3>
          </div>
          <p class="text-gray-500 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
            An immersive Vampire: The Masquerade LARP experience set in the heart of Greece. Explore
            the duality of time, blood, and legacy.
          </p>
        </div>

        <!-- COLUMN 2: NAVIGATION (2 cols) -->
        <div class="lg:col-span-2 space-y-6 text-center md:text-left">
          <h4 class="text-white font-bold uppercase tracking-[0.2em] text-xs text-primary">
            Navigation
          </h4>
          <ul class="space-y-3 text-sm">
            <li>
              <a
                href="#"
                @click.prevent="$emit('navigate', 'home')"
                class="text-gray-500 hover:text-white transition-colors block"
                >Home</a
              >
            </li>
            <li>
              <a
                href="#"
                @click.prevent="$emit('navigate', 'setting')"
                class="text-gray-500 hover:text-white transition-colors block"
                >The Setting</a
              >
            </li>
            <li>
              <a
                href="#"
                @click.prevent="$emit('navigate', 'storytellers')"
                class="text-gray-500 hover:text-white transition-colors block"
                >Storytellers</a
              >
            </li>
            <li>
              <a
                href="#"
                @click.prevent="$emit('navigate', 'gallery')"
                class="text-gray-500 hover:text-white transition-colors block"
                >Gallery</a
              >
            </li>
            <li>
              <a
                href="https://portal.attlarp.gr"
                target="_blank"
                class="text-gray-500 hover:text-white transition-colors block"
                >Portal</a
              >
            </li>
          </ul>
        </div>

        <!-- COLUMN 3: LEGAL & DARK PACK (6 cols) -->
        <div class="lg:col-span-6 space-y-6 text-center md:text-left">
          <h4 class="text-white font-bold uppercase tracking-[0.2em] text-xs text-primary">
            Legal & Compliance
          </h4>
          <div
            class="flex flex-col sm:flex-row gap-6 items-center md:items-start bg-[#120809] p-6 rounded-lg border border-[#221012]"
          >
            <img src="/img/DarkPack_Logo2.png" alt="Dark Pack" class="h-20 w-auto opacity-90" />
            <div class="space-y-3 text-center sm:text-left">
              <p class="text-[10px] text-gray-500 uppercase tracking-wide leading-relaxed">
                Portions of the materials are the copyrights and trademarks of Paradox Interactive
                AB, and are used with permission. All rights reserved. For more information please
                visit
                <a
                  href="https://www.worldofdarkness.com"
                  target="_blank"
                  class="text-white hover:text-primary transition-colors underline decoration-primary/30 underline-offset-2"
                  >worldofdarkness.com</a
                >.
              </p>
              <p class="text-[10px] text-gray-500 uppercase tracking-wide leading-relaxed">
                This material is not official World of Darkness material. It is fan content created
                by Athens Through Time.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- BOTTOM BAR -->
      <div
        class="pt-8 border-t border-[#1a0c0e] flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-gray-600 uppercase tracking-widest text-center md:text-left"
      >
        <div class="flex flex-col gap-2">
          <p>© {{ new Date().getFullYear() }} Athens Through Time.</p>
          <p>
            Photography by
            <a
              href="https://www.instagram.com/lefterisliou_photography/"
              target="_blank"
              class="text-gray-400 hover:text-white transition-colors"
              >@lefterisliou_photography</a
            >
          </p>
        </div>

        <div class="flex flex-col md:items-end gap-2 items-center">
          <div class="flex items-center gap-2 mb-1">
            <span class="opacity-50">Powered By</span>
            <a
              href="https://cerebralproductions.eu/"
              target="_blank"
              class="hover:opacity-80 transition-opacity"
            >
              <img
                src="/img/cerebralproductions.png"
                alt="Cerebral Productions"
                class="h-6 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
            </a>
          </div>
          <p>
            Website by
            <a
              href="https://miketsak.gr"
              target="_blank"
              class="text-primary/70 hover:text-primary transition-colors font-bold"
              >miketsak.gr</a
            >
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
