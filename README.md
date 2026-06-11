# Athens Through Time - Vampire: The Masquerade LARP Website

A Vue.js website for the Athens Through Time Vampire: The Masquerade V5 LARP chronicle, serving as the digital portal for players to explore the lore, setting, and gallery.

## Features
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