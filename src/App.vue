<script setup>
import { ref, computed } from "vue";
import NavBar from "./components/NavBar.vue";
import FooterSection from "./components/FooterSection.vue";

// Import Pages
import Home from "./pages/Home.vue";
import Setting from "./pages/Setting.vue";
import Gallery from "./pages/Gallery.vue";
import Storytellers from "./pages/Storytellers.vue";

const currentView = ref("home");

// Simple function to switch views
const switchView = (viewName) => {
  currentView.value = viewName;
  window.scrollTo(0, 0);
};
</script>

<template>
  <main class="bg-background-dark min-h-screen flex flex-col">
    <NavBar @navigate="switchView" />

    <div class="flex-grow">
      <Home v-if="currentView === 'home'" />
      <Setting v-if="currentView === 'setting'" />
      <Gallery v-if="currentView === 'gallery'" />
      <Storytellers v-if="currentView === 'storytellers'" />
    </div>

    <FooterSection @navigate="switchView" />
  </main>
</template>
