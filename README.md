<div align="center">
  <img src="https://img.shields.io/badge/Athens%20Through%20Time-Website-darkred?style=for-the-badge&logo=vue.js" alt="ATT LARP Website" />
  <h1>🏛️ Athens Through Time — LARP Website 🏛️</h1>
  <p><strong>Current Version: 1.0.0</strong></p>

  <p>
    <img src="https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D" alt="Vue.js" />
    <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge" alt="License" />
  </p>
</div>

## 📖 Overview

A sleek, responsive Vue.js application that serves as the digital portal for the **Athens Through Time** Vampire: The Masquerade V5 LARP chronicle.

This platform introduces players to the rich lore, the dark setting, and features an extensive gallery of events and characters.

## ✨ Latest Features
- **Modern Vue Architecture**: Highly optimized rendering with the latest Vue engine and Vite.
- **Gothic-Noir Aesthetic**: A deep, immersive dark theme that captures the essence of the World of Darkness.
- **Dynamic Content & Gallery**: Seamless navigation and image handling optimized for fast loading.
- **Responsive Layout**: Perfect viewing experience across desktop, tablet, and mobile devices.
- **i18n & Translations**: Support for multiple languages to cater to a diverse player base.

## ⚙️ Core Features
- Immersive gothic-noir aesthetic tailored to the World of Darkness setting.
- Single Page Application (SPA) built with Vue 3 (Composition API) for smooth navigation without page reloads.
- Responsive, dark-mode-first design using Tailwind CSS.
- Sections for:
  - **Home**: Introduction and latest updates.
  - **Setting**: Detailed lore of the Athens Through Time chronicle.
  - **Storytellers**: Profiles and portraits of the game master team.
  - **Gallery**: Photos from past events and character portraits.
- Fully responsive design for mobile and desktop viewing.
- Optimized for fast loading and smooth user experience.

## Tech Stack
- Framework: Vue.js 3 (Composition API)
- Build Tool: Vite
- Styling: Tailwind CSS v3
- Icons: Google Material Symbols
- Typography: Be Vietnam Pro, Noto Serif, Space Grotesk, Manrope (via Google Fonts)

## Setup & Installation
1. Ensure you have Node.js installed on your machine.
2. Clone the repository and navigate to the attlarp.gr directory.
3. Install Dependencies:
   ```bash
   npm install
   ```
4. Start Development Server:
   ```bash
   npm run dev
   ```
5. The website will be available at `http://localhost:5173` (or another port).

## Build for Production
```bash
npm run build
```
The output will be in the `dist/` directory, ready for deployment to a web server.

## Project Structure
```
src/
  components/   # Reusable UI blocks (NavBar, Footer, HeroSection, etc.)
  pages/        # Main content views (Home.vue, Setting.vue, Storytellers.vue, Gallery.vue)
  assets/       # Images, icons, and other static assets (if any)
public/
  img/          # Static assets including:
                #   - Storyteller portraits (st/)
                #   - Event photos
                #   - Logos (ATT-logo(1).png, DarkPack_Logo2.png, etc.)
```

## Notes
- This website is fan-made content for the Athens Through Time Vampire: The Masquerade V5 LARP chronicle.
- It is not official World of Darkness material. All rights to Vampire: The Masquerade belong to Paradox Interactive.
- The website uses assets provided by the chronicle team (photographs, logos, etc.) and should not be redistributed without permission.

## License
Please check the LICENSE file in the repository for licensing information.

## Credits & Acknowledgments
- Powered By: Cerebral Productions
- Photography: Lefteris Liou (@lefterisliou_photography)
- Design Concept: Blood & Ivory
- Website Development: Miketsak.gr