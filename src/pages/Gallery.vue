<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useSeo } from '../composables/useSeo';
import { useI18n } from '../composables/useI18n';

const { t } = useI18n();

useSeo({
  title: computed(() => t('seo.galleryTitle')),
  description: computed(() => t('seo.galleryDesc')),
  path: "/gallery",
});

const events = ref([]);
const selectedEvent = ref(null);
const previewIndex = ref(null);
const showPolicyModal = ref(false);
const activeSeason = ref('all');

const cleanTitle = (str) => {
  if (!str) return '';
  return str
    .replace(/\s+[-—–]\s+/g, ': ')
    .replace(/[-—–]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
};

const parseEvent = (event) => {
  const name = event.eventName || '';
  const sMatch = name.match(/^(?:S(\d+)|Season\s*(\d+))/i);
  if (sMatch) {
    const seasonNum = parseInt(sMatch[1] || sMatch[2], 10);
    const eMatch = name.match(/\.E(\d+)(?:\.(\d+))?/i);
    const epMajor = eMatch ? parseInt(eMatch[1], 10) : 999;
    const epMinor = eMatch && eMatch[2] ? parseInt(eMatch[2], 10) : 0;
    return {
      ...event,
      seasonKey: `season-${seasonNum}`,
      seasonNumber: seasonNum,
      seasonTitle: `Season ${seasonNum}`,
      epMajor,
      epMinor,
      isSpecial: false,
    };
  }

  if (name.startsWith('0') || /promo|special/i.test(name)) {
    return {
      ...event,
      seasonKey: 'special',
      seasonNumber: 0,
      seasonTitle: 'Special & Promo',
      epMajor: 0,
      epMinor: 0,
      isSpecial: true,
    };
  }

  return {
    ...event,
    seasonKey: 'special',
    seasonNumber: 0,
    seasonTitle: 'Special & Promo',
    epMajor: 999,
    epMinor: 0,
    isSpecial: true,
  };
};

const seasons = computed(() => {
  const parsed = events.value.map(parseEvent);
  const seasonMap = new Map();

  for (const ev of parsed) {
    const key = ev.seasonKey;
    if (!seasonMap.has(key)) {
      seasonMap.set(key, {
        id: key,
        title: ev.seasonTitle,
        seasonNumber: ev.seasonNumber,
        events: [],
        totalPhotos: 0,
      });
    }
    const group = seasonMap.get(key);
    group.events.push(ev);
    group.totalPhotos += (ev.totalPhotos || ev.allImages?.length || 0);
  }

  for (const group of seasonMap.values()) {
    group.events.sort((a, b) => {
      if (a.epMajor !== b.epMajor) return a.epMajor - b.epMajor;
      return a.epMinor - b.epMinor;
    });
  }

  const list = Array.from(seasonMap.values());
  list.sort((a, b) => {
    if (a.id === 'special') return 1;
    if (b.id === 'special') return -1;
    return b.seasonNumber - a.seasonNumber;
  });

  return list;
});

const sortOrder = ref('auto');

const currentSortOrder = computed(() => {
  if (sortOrder.value !== 'auto') {
    return sortOrder.value;
  }
  if (activeSeason.value === 'season-1') {
    return 'asc';
  }
  return 'desc';
});

const toggleSortOrder = () => {
  sortOrder.value = currentSortOrder.value === 'desc' ? 'asc' : 'desc';
};

const setSeason = (seasonId) => {
  activeSeason.value = seasonId;
  sortOrder.value = 'auto';
};

const displayedSeasons = computed(() => {
  const targetList = activeSeason.value === 'all'
    ? seasons.value
    : seasons.value.filter((s) => s.id === activeSeason.value);

  const isAsc = currentSortOrder.value === 'asc';

  return targetList.map((season) => {
    const sortedEvents = [...season.events].sort((a, b) => {
      if (isAsc) {
        if (a.epMajor !== b.epMajor) return a.epMajor - b.epMajor;
        return a.epMinor - b.epMinor;
      } else {
        if (b.epMajor !== a.epMajor) return b.epMajor - a.epMajor;
        return b.epMinor - a.epMinor;
      }
    });

    return {
      ...season,
      events: sortedEvents,
    };
  });
});

const totalEventsCount = computed(() => events.value.length);

const images = computed(() => selectedEvent.value?.allImages || []);

const currentImage = computed(() => {
  if (previewIndex.value === null || !images.value.length) return null;
  return images.value[previewIndex.value] || null;
});

const openGallery = (event) => {
  selectedEvent.value = parseEvent(event);
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const closeGallery = () => {
  selectedEvent.value = null;
  previewIndex.value = null;
};

const backToSeason = (seasonKey) => {
  selectedEvent.value = null;
  if (seasonKey) {
    setSeason(seasonKey);
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const openPreview = (target) => {
  if (typeof target === 'number') {
    previewIndex.value = target;
  } else if (typeof target === 'string') {
    const idx = images.value.indexOf(target);
    previewIndex.value = idx >= 0 ? idx : 0;
  }
};

const closePreview = () => {
  previewIndex.value = null;
};

const nextImage = () => {
  if (previewIndex.value === null || images.value.length <= 1) return;
  previewIndex.value = (previewIndex.value + 1) % images.value.length;
};

const prevImage = () => {
  if (previewIndex.value === null || images.value.length <= 1) return;
  previewIndex.value = (previewIndex.value - 1 + images.value.length) % images.value.length;
};

const handleKeydown = (e) => {
  if (previewIndex.value === null) return;
  if (e.key === 'ArrowRight') {
    e.preventDefault();
    nextImage();
  } else if (e.key === 'ArrowLeft') {
    e.preventDefault();
    prevImage();
  } else if (e.key === 'Escape') {
    e.preventDefault();
    closePreview();
  }
};

let touchStartX = 0;
let touchStartY = 0;
let touchEndX = 0;
let touchEndY = 0;

const onTouchStart = (e) => {
  if (!e.changedTouches || e.changedTouches.length === 0) return;
  touchStartX = e.changedTouches[0].screenX;
  touchStartY = e.changedTouches[0].screenY;
  touchEndX = touchStartX;
  touchEndY = touchStartY;
};

const onTouchMove = (e) => {
  if (!e.changedTouches || e.changedTouches.length === 0) return;
  touchEndX = e.changedTouches[0].screenX;
  touchEndY = e.changedTouches[0].screenY;
};

const onTouchEnd = () => {
  const diffX = touchEndX - touchStartX;
  const diffY = touchEndY - touchStartY;
  const minSwipeDistance = 45;

  if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > minSwipeDistance) {
    if (diffX < 0) {
      nextImage();
    } else {
      prevImage();
    }
  }
};

onMounted(async () => {
  window.addEventListener('keydown', handleKeydown);

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

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
});

const acceptPolicy = () => {
  localStorage.setItem('galleryPolicyAccepted', 'true');
  showPolicyModal.value = false;
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
          <div class="text-red-500 text-[10px] font-bold uppercase tracking-widest mb-1">{{ t('gallery.requiredReading') }}</div>
          <h2 class="text-2xl font-bold text-white tracking-tight">{{ t('gallery.policyTitle') }}</h2>
        </div>
        <div class="p-6 overflow-y-auto custom-scrollbar text-sm text-gray-300 space-y-6">
          <div>
            <h3 class="text-white font-bold text-lg mb-2">{{ t('gallery.policyQ1') }}</h3>
            <p class="leading-relaxed">
              {{ t('gallery.policyA1') }}
            </p>
          </div>
        </div>
        <div class="p-6 border-t border-white/10 shrink-0 flex justify-end bg-black/20">
          <button @click="acceptPolicy" class="px-8 py-3 bg-red-700 hover:bg-red-600 text-white font-bold uppercase tracking-widest text-xs rounded transition-all shadow-lg">
            {{ t('gallery.policyAgree') }}
          </button>
        </div>
      </div>
    </div>

    <main class="relative w-full px-4 md:px-8 py-16 flex justify-center" :class="{ 'blur-sm pointer-events-none': showPolicyModal }">
      <div class="w-full max-w-[1200px] flex flex-col">

        <section class="mb-16">
          <div v-if="!selectedEvent">
            <div class="text-center mb-10 relative">
              <h1 class="text-5xl md:text-7xl font-black text-white/5 absolute -top-8 left-1/2 -translate-x-1/2 uppercase tracking-tighter select-none whitespace-nowrap">
                {{ t('gallery.title') }}
              </h1>
              <div class="relative z-10">
                <h2 class="text-primary text-sm font-bold tracking-[0.4em] uppercase mb-4">{{ t('gallery.subtitle') }}</h2>
                <div class="h-px w-24 bg-primary mx-auto mb-6"></div>
              </div>
            </div>

            <!-- Season Navigation Filter Tabs & Sort Toggle -->
            <div class="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
              <div class="flex flex-wrap items-center justify-center md:justify-start gap-2 md:gap-3">
                <button
                  @click="setSeason('all')"
                  type="button"
                  class="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all cursor-pointer flex items-center gap-2 border"
                  :class="activeSeason === 'all'
                    ? 'bg-primary border-primary text-white shadow-lg shadow-primary/30'
                    : 'bg-black/40 border-white/10 text-gray-400 hover:text-white hover:border-white/20'"
                >
                  <i class="fa-solid fa-layer-group text-xs"></i>
                  <span>{{ t('gallery.allSeasons') }}</span>
                  <span class="text-[10px] px-2 py-0.5 rounded-full bg-black/40 text-gray-300">
                    {{ totalEventsCount }}
                  </span>
                </button>

                <button
                  v-for="season in seasons"
                  :key="season.id"
                  @click="setSeason(season.id)"
                  type="button"
                  class="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all cursor-pointer flex items-center gap-2 border"
                  :class="activeSeason === season.id
                    ? 'bg-primary border-primary text-white shadow-lg shadow-primary/30'
                    : 'bg-black/40 border-white/10 text-gray-400 hover:text-white hover:border-white/20'"
                >
                  <i class="fa-solid" :class="activeSeason === season.id ? 'fa-folder-open' : 'fa-folder'"></i>
                  <span>{{ season.title }}</span>
                  <span class="text-[10px] px-2 py-0.5 rounded-full bg-black/40 text-gray-300">
                    {{ season.events.length }}
                  </span>
                </button>
              </div>

              <!-- Interactive Sort Order Toggle -->
              <button
                @click="toggleSortOrder"
                type="button"
                :title="t('gallery.sortOrder')"
                class="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-black/50 hover:bg-black/80 text-gray-300 hover:text-white border border-white/10 hover:border-white/30 transition-all cursor-pointer flex items-center gap-2 shrink-0 shadow-md"
              >
                <i
                  class="fa-solid text-primary text-xs"
                  :class="currentSortOrder === 'desc' ? 'fa-arrow-down-wide-short' : 'fa-arrow-up-wide-short'"
                ></i>
                <span>{{ currentSortOrder === 'desc' ? t('gallery.sortLatest') : t('gallery.sortChronological') }}</span>
              </button>
            </div>

            <!-- Season Grouped Sections -->
            <div class="space-y-16">
              <div
                v-for="season in displayedSeasons"
                :key="season.id"
                class="space-y-6"
              >
                <!-- Season Folder Header -->
                <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-2">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-lg bg-red-950/60 border border-primary/30 flex items-center justify-center text-primary shadow-inner">
                      <i class="fa-solid fa-folder-open text-base"></i>
                    </div>
                    <div>
                      <h3 class="text-xl md:text-2xl font-black uppercase tracking-tight text-white flex items-center gap-3">
                        <span>{{ season.title }}</span>
                        <span v-if="season.seasonNumber === 2" class="text-[10px] font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/30">
                          {{ t('gallery.currentSeason') }}
                        </span>
                      </h3>
                      <p class="text-gray-400 text-xs tracking-wider uppercase">
                        {{ season.events.length }} {{ t('gallery.eventsCount') }}, {{ season.totalPhotos }} {{ t('gallery.framesCount') }}
                      </p>
                    </div>
                  </div>

                  <button
                    v-if="activeSeason === 'all'"
                    @click="setSeason(season.id)"
                    type="button"
                    class="self-start sm:self-auto text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-primary transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>{{ t('gallery.seasonFolder') }}</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </button>
                  <button
                    v-else
                    @click="setSeason('all')"
                    type="button"
                    class="self-start sm:self-auto text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-primary transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <i class="fa-solid fa-arrow-left text-[10px]"></i>
                    <span>{{ t('gallery.allSeasons') }}</span>
                  </button>
                </div>

                <!-- Events Grid -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
                  <div
                    v-for="(event, eIndex) in season.events"
                    :key="eIndex"
                    @click="openGallery(event)"
                    class="group relative cursor-pointer block-card"
                  >
                    <div class="absolute -inset-0.5 bg-gradient-to-r from-red-900/0 via-red-600/0 to-red-900/0 rounded group-hover:via-red-600/50 transition-all duration-700 opacity-0 group-hover:opacity-100"></div>

                    <div class="relative aspect-[16/9] overflow-hidden rounded bg-surface-dark border border-white/5 transition-all duration-500 shadow-2xl">
                      <img :src="event.coverImage" :alt="cleanTitle(event.eventName)" class="w-full h-full object-cover transform scale-[1.01] group-hover:scale-110 transition-transform duration-[1.5s] ease-out"/>

                      <div class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
                      <div class="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-90"></div>

                      <div class="absolute bottom-0 left-0 right-0 p-6 md:p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                        <div class="flex items-center gap-2 mb-2 md:mb-3">
                          <span class="w-8 h-px bg-primary transform origin-left scale-x-50 group-hover:scale-x-100 transition-transform duration-500"></span>
                          <span class="text-primary text-[10px] font-bold uppercase tracking-[0.2em]">{{ season.title }}</span>
                        </div>
                        <h4 class="text-white text-2xl md:text-3xl font-black uppercase tracking-tight mb-2 group-hover:text-red-50 transition-colors">
                          {{ cleanTitle(event.eventName) }}
                        </h4>
                        <div class="flex items-center gap-3 text-gray-400 text-[10px] uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                          <span>{{ t('gallery.enterAlbum') }}</span>
                          <i class="fa-solid fa-arrow-right text-xs"></i>
                        </div>
                      </div>

                      <div class="absolute top-4 right-4 md:top-6 md:right-6">
                        <div class="bg-black/60 backdrop-blur-xl text-[10px] text-white px-3.5 py-1.5 rounded-full border border-white/10 font-bold tracking-widest uppercase">
                          {{ event.totalPhotos }} {{ t('gallery.frames') }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div v-else class="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <!-- Breadcrumb Navigation Bar -->
            <div class="mb-6 flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest font-bold text-gray-400">
              <button @click="closeGallery" class="hover:text-primary transition-colors cursor-pointer flex items-center gap-1.5">
                <i class="fa-solid fa-landmark text-[10px]"></i>
                <span>{{ t('gallery.archiveBg') }}</span>
              </button>
              <i class="fa-solid fa-chevron-right text-[10px] text-gray-600"></i>
              <button @click="backToSeason(selectedEvent.seasonKey)" class="hover:text-primary transition-colors cursor-pointer">
                {{ selectedEvent.seasonTitle }}
              </button>
              <i class="fa-solid fa-chevron-right text-[10px] text-gray-600"></i>
              <span class="text-white truncate max-w-[260px] md:max-w-none">{{ cleanTitle(selectedEvent.eventName) }}</span>
            </div>

            <div class="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-10">
              <div>
                <button @click="backToSeason(selectedEvent.seasonKey)" class="mb-6 text-gray-500 hover:text-primary transition-colors flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] group cursor-pointer">
                  <i class="fa-solid fa-arrow-left text-xs group-hover:-translate-x-1 transition-transform"></i>
                  <span>{{ t('gallery.backToSeason') }}: {{ selectedEvent.seasonTitle }}</span>
                </button>
                <h2 class="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">{{ cleanTitle(selectedEvent.eventName) }}</h2>
              </div>
              <div class="text-left md:text-right">
                <p class="text-primary text-sm font-bold uppercase tracking-[0.3em]">{{ selectedEvent.totalPhotos }} {{ t('gallery.capturedMoments') }}</p>
              </div>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              <div
                v-for="(imgSrc, index) in selectedEvent.allImages"
                :key="index"
                @click="openPreview(index)"
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
      v-if="currentImage"
      class="fixed inset-0 z-[110] bg-black/98 flex flex-col items-center justify-center backdrop-blur-md animate-in fade-in duration-300 select-none touch-none"
      @click="closePreview"
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
      @touchend="onTouchEnd"
    >
      <!-- Top Bar: Counter and Close Button -->
      <div class="absolute top-0 inset-x-0 p-4 md:p-6 flex items-center justify-between z-30 pointer-events-none">
        <div class="pointer-events-auto bg-black/60 backdrop-blur-md border border-white/10 text-xs md:text-sm text-gray-300 font-bold px-4 py-1.5 rounded-full">
          {{ previewIndex + 1 }} / {{ images.length }}
        </div>
        <button
          @click.stop="closePreview"
          :aria-label="t('gallery.closePreview')"
          class="pointer-events-auto text-white/60 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
        >
          <i class="fa-solid fa-xmark text-2xl md:text-3xl"></i>
        </button>
      </div>

      <!-- Previous button -->
      <button
        v-if="images.length > 1"
        @click.stop="prevImage"
        :aria-label="t('gallery.prevPhoto')"
        class="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-30 p-3 md:p-4 rounded-full bg-black/60 hover:bg-black/90 active:scale-95 text-white/70 hover:text-white border border-white/10 transition-all flex items-center justify-center cursor-pointer shadow-2xl backdrop-blur-sm"
      >
        <i class="fa-solid fa-chevron-left text-lg md:text-2xl"></i>
      </button>

      <!-- Center image container -->
      <div class="relative max-w-[95vw] max-h-[85vh] flex items-center justify-center" @click.stop>
        <transition name="gallery-crossfade" mode="out-in">
          <img
            :key="currentImage"
            :src="currentImage"
            alt="Expanded gallery image"
            class="max-w-[92vw] md:max-w-[85vw] max-h-[80vh] md:max-h-[85vh] object-contain shadow-[0_0_80px_rgba(0,0,0,0.8)] border border-white/5 rounded-sm"
          />
        </transition>
      </div>

      <!-- Next button -->
      <button
        v-if="images.length > 1"
        @click.stop="nextImage"
        :aria-label="t('gallery.nextPhoto')"
        class="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-30 p-3 md:p-4 rounded-full bg-black/60 hover:bg-black/90 active:scale-95 text-white/70 hover:text-white border border-white/10 transition-all flex items-center justify-center cursor-pointer shadow-2xl backdrop-blur-sm"
      >
        <i class="fa-solid fa-chevron-right text-lg md:text-2xl"></i>
      </button>
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

.gallery-crossfade-enter-active,
.gallery-crossfade-leave-active {
  transition: opacity 0.15s ease;
}
.gallery-crossfade-enter-from,
.gallery-crossfade-leave-to {
  opacity: 0;
}
</style>
