# Athens Through Time - LARP Website

A modern, atmospheric placeholder website for **Athens Through Time**, a *Vampire: The Masquerade* Live Action Roleplaying (LARP) game set in Athens, Greece.

**Live URL:** [https://attlarp.gr/](https://attlarp.gr/)

## 🦇 Features

* **Responsive Design:** Fully optimized for desktops, tablets, and mobile devices.
* **Dynamic Background:** A rolling, angled collage of atmospheric photos that scrolls infinitely using JavaScript.
* **SEO & Social Ready:** Includes Open Graph and Twitter Card metadata for perfect sharing previews on Discord, Facebook, and Instagram.
* **Performance:** Uses lightweight vanilla JavaScript and CSS animations (no heavy frameworks).
* **Caching:** optimized `.htaccess` file for speed and caching.

## 📂 Project Structure

Ensure your file structure on the server looks exactly like this:

```text
/public_html/
├── img/                        # Folder containing background photos
│   ├── Athens through time (1).jpg
│   ├── ... (other jpg/png files)
│
├── index.html                  # Main website file
├── .htaccess                   # Apache configuration (Caching & Routing)
├── ATT-logo(1).png             # Browser Tab Icon (Favicon)
└── animated.gif                # Main Logo Animation

```

## 🚀 Installation / Deployment

1. **Upload Files:** Upload `index.html`, `.htaccess`, `animated.gif`, and `ATT-logo(1).png` to the root directory of your web host (usually `public_html`).
2. **Upload Images:** Create a folder named `img` and upload all your background JPG/PNG files there.
3. **Verify Filenames:** Ensure the filenames in the `img/` folder match the list inside `index.html` (lines ~340-365) **exactly**. Case sensitivity matters (`.jpg` vs `.JPG`).

## ⚙️ Customization

### Adding New Background Images

1. Upload the new photo to the `img/` folder.
2. Open `index.html` in a text editor.
3. Scroll down to the `<script>` section at the bottom.
4. Add the new filename to the `imageFiles` array:
```javascript
const imageFiles = [
    "existing-photo.jpg",
    "NEW-PHOTO-NAME.jpg" // <--- Add this line
];

```



### Changing Links

Search for the relevant section in `index.html` to update URLs for Instagram, Discord, or Facebook.

## 👥 Credits

* **Production:** [Cerebral Productions](https://cerebralproductions.eu/)
* **Development:** [MikeTsak.gr](https://miketsak.gr)
* **Photography:** [Lefteris Liou](https://www.instagram.com/lefterisliou_photography/)

## 📜 License

 This project is licensed under the MIT License - see the [LICENSE](https://www.google.com/search?q=LICENSE) file for details.
 *Vampire: The Masquerade* content and trademarks are the property of Paradox Interactive.