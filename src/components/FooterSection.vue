<template>
  <footer class="bg-[#0a0606] border-t border-[#221012] pt-16 pb-8 px-4 md:px-10 lg:px-20">
    <div class="max-w-[1400px] mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 mb-12 md:mb-16">
        <div class="lg:col-span-3 space-y-6 text-center md:text-left">
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

        <div class="lg:col-span-2 space-y-6 text-center md:text-left">
          <h4 class="text-white font-bold uppercase tracking-[0.2em] text-xs text-primary">
            Navigation
          </h4>
          <ul class="space-y-3 text-sm">
            <li>
              <a href="#" @click.prevent="$emit('navigate', 'home')" class="text-gray-500 hover:text-white transition-colors block">Home</a>
            </li>
            <li>
              <a href="#" @click.prevent="$emit('navigate', 'setting')" class="text-gray-500 hover:text-white transition-colors block">The Setting</a>
            </li>
            <li>
              <a href="#" @click.prevent="$emit('navigate', 'storytellers')" class="text-gray-500 hover:text-white transition-colors block">Storytellers</a>
            </li>
            <li>
              <a href="#" @click.prevent="$emit('navigate', 'gallery')" class="text-gray-500 hover:text-white transition-colors block">Gallery</a>
            </li>
            <li>
              <a href="https://portal.attlarp.gr" target="_blank" class="text-gray-500 hover:text-white transition-colors block">Portal</a>
            </li>
          </ul>
        </div>

        <div class="lg:col-span-3 space-y-6 text-center md:text-left">
          <h4 class="text-white font-bold uppercase tracking-[0.2em] text-xs text-primary">
            Connect
          </h4>
          <ul class="space-y-4 text-sm">
            <li>
              <a href="mailto:athensthroughtime@gmail.com" class="text-gray-500 hover:text-white transition-colors flex items-center justify-center md:justify-start gap-3">
                <span class="material-symbols-outlined text-[18px]">mail</span>
                <span class="break-all">athensthroughtime@gmail.com</span>
              </a>
            </li>
            <li>
              <a href="https://maps.app.goo.gl/RoHHxLPrByxgcHbq6" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:text-white transition-colors flex items-start justify-center md:justify-start gap-3 text-left">
                <span class="material-symbols-outlined text-[18px] mt-0.5">location_on</span>
                <span>Leonidou 89,<br />Athina 104 35</span>
              </a>
            </li>

            <li class="pt-2 flex items-center justify-center md:justify-start gap-6">
              <a href="https://www.instagram.com/att.larp/" target="_blank" class="text-white hover:text-primary transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/att.larp" target="_blank" class="text-white hover:text-primary transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.tiktok.com/@att.larp" target="_blank" class="text-white hover:text-primary transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-3.21.06-6.41.07-9.62z"/>
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <div class="lg:col-span-4 space-y-6 text-center md:text-left">
          <h4 class="text-white font-bold uppercase tracking-[0.2em] text-xs text-primary">
            Legal & Compliance
          </h4>
          <div class="flex flex-col xl:flex-row gap-6 items-center md:items-start bg-[#120809] p-6 rounded-lg border border-[#221012]">
            <img src="/img/DarkPack_Logo2.png" alt="Dark Pack" class="h-16 w-auto opacity-90" />
            <div class="space-y-3 text-center md:text-left">
              <p class="text-[10px] text-gray-500 uppercase tracking-wide leading-relaxed">
                Portions of the materials are the copyrights and trademarks of Paradox Interactive AB, and are used with permission. All rights reserved. For more information please visit <a href="https://www.worldofdarkness.com" target="_blank" class="text-white hover:text-primary transition-colors underline decoration-primary/30 underline-offset-2">worldofdarkness.com</a>.
              </p>
              <p class="text-[10px] text-gray-500 uppercase tracking-wide leading-relaxed">
                This material is not official World of Darkness material. It is fan content created by Athens Through Time.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="pt-8 border-t border-[#1a0c0e] flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-gray-600 uppercase tracking-widest text-center md:text-left">
        <div class="flex flex-col gap-2">
          <p>© {{ new Date().getFullYear() }} Athens Through Time.</p>
          <p>Photography by <a href="https://www.instagram.com/lefterisliou_photography/" target="_blank" class="text-gray-400 hover:text-white transition-colors">@lefterisliou_photography</a></p>
        </div>
        <div class="flex flex-col md:items-end gap-2 items-center">
          <div class="flex items-center gap-2 mb-1">
            <span class="opacity-50">Powered By</span>
            <a href="https://cerebralproductions.eu/" target="_blank" class="hover:opacity-80 transition-opacity">
              <img src="/img/cerebralproductions.png" alt="Cerebral Productions" class="h-6 w-auto opacity-70 hover:opacity-100 transition-opacity" />
            </a>
          </div>
          <p>Website by <a href="https://miketsak.gr" target="_blank" class="text-primary/70 hover:text-primary transition-colors font-bold">miketsak.gr</a></p>
        </div>
      </div>
    </div>
  </footer>
</template>
