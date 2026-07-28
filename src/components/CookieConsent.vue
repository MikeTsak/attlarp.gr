<template>
  <div v-if="show" class="fixed bottom-4 left-4 z-[100] bg-[#1a1112] border border-gray-700 rounded-lg shadow-xl p-4 max-w-[320px] text-white">
    <h3 class="font-bold text-base mb-1">Cookies & Privacy</h3>
    <p class="text-xs text-gray-300 mb-3 leading-relaxed">
      We use cookies to analyze traffic and improve your experience. 
      By clicking "Accept", you consent to our use of cookies.
    </p>
    <div class="flex gap-2 justify-end">
      <button @click="decline" class="px-3 py-1.5 text-xs border border-gray-600 rounded hover:bg-gray-800 transition-colors">
        Decline
      </button>
      <button @click="accept" class="px-3 py-1.5 text-xs bg-red-700 hover:bg-red-600 font-bold rounded transition-colors">
        Accept
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const show = ref(false);

const updateConsent = (granted) => {
  const status = granted ? 'granted' : 'denied';
  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      'ad_storage': status,
      'ad_user_data': status,
      'ad_personalization': status,
      'analytics_storage': status
    });
  }
};

onMounted(() => {
  const consent = localStorage.getItem('attlarp_cookie_consent');
  if (!consent) {
    show.value = true;
  } else if (consent === 'granted') {
    updateConsent(true);
  } else {
    updateConsent(false);
  }
});

const accept = () => {
  localStorage.setItem('attlarp_cookie_consent', 'granted');
  updateConsent(true);
  show.value = false;
};

const decline = () => {
  localStorage.setItem('attlarp_cookie_consent', 'denied');
  updateConsent(false);
  show.value = false;
};
</script>
