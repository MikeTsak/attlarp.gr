<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);
const emit = defineEmits(["navigate"]);

const navTo = (page) => {
  emit("navigate", page);
  isMenuOpen.value = false;
};
</script>

<template>
  <nav class="sticky top-0 z-50 w-full border-b border-[#39282a] bg-[#181112]/95 backdrop-blur-md">
    <div class="px-4 md:px-10 lg:px-20 flex justify-center">
      <div class="flex h-16 w-full max-w-[1400px] items-center justify-between">
        <a
          @click.prevent="navTo('home')"
          href="#"
          class="flex items-center gap-3 text-white hover:text-primary transition-colors cursor-pointer group"
        >
          <img
            src="/img/animated.gif"
            alt="Logo"
            class="h-10 w-10 object-cover rounded-full border border-primary/20"
          />
          <h2 class="text-lg font-bold uppercase tracking-widest hidden sm:block">
            Athens Through Time
          </h2>
        </a>

        <div class="hidden lg:flex flex-1 justify-center items-center gap-8">
          <button
            @click="navTo('home')"
            class="text-xs font-bold hover:text-primary text-white uppercase tracking-[0.2em] transition-colors"
          >
            Home
          </button>
          <button
            @click="navTo('setting')"
            class="text-xs font-bold hover:text-primary text-white uppercase tracking-[0.2em] transition-colors"
          >
            The Setting
          </button>
          <button
            @click="navTo('storytellers')"
            class="text-xs font-bold hover:text-primary text-white uppercase tracking-[0.2em] transition-colors"
          >
            Storytellers
          </button>
          <button
            @click="navTo('gallery')"
            class="text-xs font-bold hover:text-primary text-white uppercase tracking-[0.2em] transition-colors"
          >
            Gallery
          </button>

          <a
            href="https://portal.attlarp.gr"
            target="_blank"
            class="text-xs font-bold text-primary hover:text-white uppercase tracking-[0.2em] transition-colors border-b border-transparent hover:border-primary"
          >
            Portal
          </a>
        </div>

        <div class="flex items-center gap-4">
          <a
            href="#register"
            class="hidden sm:flex items-center justify-center overflow-hidden rounded h-10 px-6 bg-primary hover:bg-primary-dark transition-all text-white text-xs font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(212, 17, 33, 0.3)] hover:shadow-[0_0_25px_rgba(212, 17, 33, 0.6)]"
          >
            Register
          </a>
          <button class="lg:hidden text-white" @click="isMenuOpen = !isMenuOpen">
            <span class="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </div>

    <div
      v-if="isMenuOpen"
      class="lg:hidden bg-[#181112] border-b border-[#39282a] p-4 flex flex-col gap-4 items-center shadow-2xl"
    >
      <button @click="navTo('home')" class="text-white text-xs font-bold uppercase tracking-widest">
        Home
      </button>
      <button
        @click="navTo('setting')"
        class="text-white text-xs font-bold uppercase tracking-widest"
      >
        Setting
      </button>
      <button
        @click="navTo('storytellers')"
        class="text-white text-xs font-bold uppercase tracking-widest"
      >
        Storytellers
      </button>
      <button
        @click="navTo('gallery')"
        class="text-white text-xs font-bold uppercase tracking-widest"
      >
        Gallery
      </button>
      <a
        href="https://portal.attlarp.gr"
        target="_blank"
        class="text-primary text-xs font-bold uppercase tracking-widest"
        >Portal</a
      >
    </div>
  </nav>
</template>
