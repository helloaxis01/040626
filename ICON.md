# App icon (apple-touch-icon)

**To use your own icon and avoid cache issues:**

1. **Export from your design tool** (Figma/Illustrator/Sketch):
   - Exactly what you want: dark background, light letters, breathing room.
   - **Bake the background in** (no transparency) so it’s not white on device.
   - Size: **512×512** or **180×180** PNG.

2. **Replace the file** in this project:
   - Save/export as: `apple-touch-icon.png`
   - Put it in the **project root** (same folder as `index.html`).
   - The build will use this file and copy it to `dist/`.

3. **Bump the version** in `build.js` (line ~61):
   - Change `iconVersion = 'v=5'` to `'v=6'` (or next number) so devices fetch the new image.

4. **Push** and wait for Vercel to deploy.

5. **On your phone (important):**
   - Remove the AXIS home screen shortcut (long-press → Remove).
   - **Settings → Safari → Clear History and Website Data** (or clear data for the AXIS site only).
   - Open the AXIS site in Safari again and **Add to Home Screen**.
   - iOS caches the icon heavily; clearing and re-adding is what makes the new one show.
