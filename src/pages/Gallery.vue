<script setup>
import { ref, onMounted } from 'vue';

const events = ref([]);
const selectedEvent = ref(null);
const previewImage = ref(null);
const showPolicyModal = ref(false);

onMounted(async () => {
  const hasAccepted = localStorage.getItem('galleryPolicyAccepted');
  if (!hasAccepted) {
    showPolicyModal.value = true;
  }

  try {
    const response = await fetch('https://attlarp.gr/api/get-gallery.php');
    if (response.ok) {
      events.value = await response.json();
    }
  } catch (error) {
    console.error("Failed to fetch gallery data:", error);
  }
});

const acceptPolicy = () => {
  localStorage.setItem('galleryPolicyAccepted', 'true');
  showPolicyModal.value = false;
};

const openGallery = (event) => {
  selectedEvent.value = event;
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const closeGallery = () => {
  selectedEvent.value = null;
};

const openPreview = (imgSrc) => {
  previewImage.value = imgSrc;
};

const closePreview = () => {
  previewImage.value = null;
};
</script>

<template>
  <div class="bg-background-dark font-gallery text-white min-h-screen relative overflow-x-hidden">

    <div class="absolute top-0 left-1/4 w-96 h-96 bg-red-900/10 blur-[120px] rounded-full pointer-events-none"></div>
    <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-red-900/5 blur-[120px] rounded-full pointer-events-none"></div>

    <div
      v-if="showPolicyModal"
      class="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
    >
      <div class="bg-[#1a1a1a] border border-white/10 rounded-lg max-w-3xl w-full max-h-[90vh] flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.5)]">
        <div class="p-6 border-b border-white/10 shrink-0">
          <div class="text-red-500 text-[10px] font-bold uppercase tracking-widest mb-1">Required Reading</div>
          <h2 class="text-2xl font-bold text-white tracking-tight">Photo & Privacy Policy</h2>
        </div>
        <div class="p-6 overflow-y-auto custom-scrollbar text-sm text-gray-300 space-y-6">
          <div>
            <h3 class="text-white font-bold text-lg mb-2">Who can see the photos?</h3>
            <p class="leading-relaxed">
              Photos of any event will be shared with participants. Having access to the photos does not guarantee the subjects have consented to having their photo become public. <strong>Always ask permission before sharing/posting.</strong>
            </p>
          </div>
          </div>
        <div class="p-6 border-t border-white/10 shrink-0 flex justify-end bg-black/20">
          <button @click="acceptPolicy" class="px-8 py-3 bg-red-700 hover:bg-red-600 text-white font-bold uppercase tracking-widest text-xs rounded transition-all shadow-lg">
            I Have Read and Agree
          </button>
        </div>
      </div>
    </div>

    <main class="relative w-full px-4 md:px-8 py-16 flex justify-center" :class="{ 'blur-sm pointer-events-none': showPolicyModal }">
      <div class="w-full max-w-[1200px] flex flex-col">

        <section class="mb-16">
          <div v-if="!selectedEvent">
            <div class="text-center mb-16 relative">
              <h1 class="text-5xl md:text-7xl font-black text-white/5 absolute -top-8 left-1/2 -translate-x-1/2 uppercase tracking-tighter select-none whitespace-nowrap">
                The Archives
              </h1>
              <div class="relative z-10">
                <h2 class="text-primary text-sm font-bold tracking-[0.4em] uppercase mb-4">Chronicle History</h2>
                <div class="h-px w-24 bg-primary mx-auto mb-6"></div>
              </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div
                v-for="(event, index) in events"
                :key="index"
                @click="openGallery(event)"
                class="group relative cursor-pointer block-card"
              >
                <div class="absolute -inset-0.5 bg-gradient-to-r from-red-900/0 via-red-600/0 to-red-900/0 rounded group-hover:via-red-600/50 transition-all duration-700 opacity-0 group-hover:opacity-100"></div>

                <div class="relative aspect-[16/9] overflow-hidden rounded bg-surface-dark border border-white/5 transition-all duration-500 shadow-2xl">
                  <img :src="event.coverImage" :alt="event.eventName" class="w-full h-full object-cover transform scale-[1.01] group-hover:scale-110 transition-transform duration-[1.5s] ease-out"/>

                  <div class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
                  <div class="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-90"></div>

                  <div class="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <div class="flex items-center gap-2 mb-3">
                      <span class="w-8 h-px bg-primary transform origin-left scale-x-50 group-hover:scale-x-100 transition-transform duration-500"></span>
                      <span class="text-primary text-[10px] font-bold uppercase tracking-[0.2em]">Memories of Athens</span>
                    </div>
                    <h3 class="text-white text-3xl font-black uppercase tracking-tight mb-2 group-hover:text-red-50 transition-colors">
                      {{ event.eventName }}
                    </h3>
                    <div class="flex items-center gap-4 text-gray-400 text-[10px] uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                      <span>Enter Album</span>
                      <span class="material-symbols-outlined text-xs">arrow_forward</span>
                    </div>
                  </div>

                  <div class="absolute top-6 right-6">
                    <div class="bg-black/60 backdrop-blur-xl text-[10px] text-white px-4 py-1.5 rounded-full border border-white/10 font-bold tracking-widest uppercase">
                      {{ event.totalPhotos }} Frames
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div v-else class="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div class="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-10">
              <div>
                <button @click="closeGallery" class="mb-6 text-gray-500 hover:text-primary transition-colors flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] group">
                  <span class="material-symbols-outlined text-sm group-hover:-translate-x-1 transition-transform">arrow_back</span>
                  Return to Archives
                </button>
                <h2 class="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">{{ selectedEvent.eventName }}</h2>
              </div>
              <div class="text-right">
                <p class="text-primary text-sm font-bold uppercase tracking-[0.3em]">{{ selectedEvent.totalPhotos }} Captured Moments</p>
              </div>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              <div
                v-for="(imgSrc, index) in selectedEvent.allImages"
                :key="index"
                @click="openPreview(imgSrc)"
                class="relative aspect-square overflow-hidden rounded-sm bg-surface-dark cursor-pointer group shadow-lg"
              >
                <img :src="imgSrc" alt="Gallery Image" class="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"/>
                <div class="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>

    <div
      v-if="previewImage"
      class="fixed inset-0 z-[110] bg-black/98 flex flex-col items-center justify-center backdrop-blur-md animate-in fade-in duration-300"
      @click="closePreview"
    >
      <div class="absolute top-0 right-0 p-8">
        <button class="text-white/50 hover:text-white text-5xl font-light transition-colors">&times;</button>
      </div>
      <img
        :src="previewImage"
        class="max-w-[95vw] max-h-[90vh] object-contain shadow-[0_0_80px_rgba(0,0,0,0.8)] border border-white/5"
        @click.stop
      />
    </div>

  </div>
</template>

<style scoped>
.font-gallery {
  font-family: 'Inter', sans-serif;
}

.block-card:hover {
  transform: translateY(-4px);
  transition: transform 0.5s ease;
}

/* Scrollbar Styling */
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(212, 17, 33, 0.3);
  border-radius: 10px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(212, 17, 33, 0.6);
}

/* Quick Animation Utility if not using Tailwind Animate */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-in {
  animation: fadeIn 0.8s ease forwards;
}
</style>
