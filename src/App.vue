<script setup>
import NavBar from "./components/NavBar.vue";
import FooterSection from "./components/FooterSection.vue";
import CookieConsent from "./components/CookieConsent.vue";
</script>

<template>
  <main class="bg-background-dark min-h-screen flex flex-col">
    <NavBar />

    <div class="flex-grow">
      <RouterView />
    </div>

    <FooterSection />
    <CookieConsent />
  </main>
</template>
