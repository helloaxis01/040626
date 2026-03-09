# How to preview the AXIS app

You’re a designer — you don’t need to use the terminal. Here’s the simple way.

---

## Option 1: Double‑click launcher (recommended)

1. In **Finder**, go to your **AXIS** folder (on your Desktop).
2. Double‑click **`Start AXIS Preview.command`**.
3. A **Terminal** window will open and your **browser** will open to the app.
4. **Leave the Terminal window open** while you’re looking at the app.  
   When you’re done, close that Terminal window (or press **Control+C** in it).

**First time only:**  
If macOS says “cannot be opened because it is from an unidentified developer”:
- Right‑click **`Start AXIS Preview.command`** → **Open** → **Open** again in the dialog.  
  You only need to do this once.

---

## Option 2: Open the file in a browser

1. In **Finder**, go to your **AXIS** folder.
2. Double‑click **`index.html`** (or drag it into Chrome/Safari/Firefox).

This might work for a quick look. If something looks broken or doesn’t work, use **Option 1** instead.

---

## Seeing the onboarding again

After you’ve gone through onboarding once, the app will skip it next time. To see it again:

1. With the app open in your browser, press **F12** (or **Right‑click → Inspect**) to open Developer Tools.
2. Go to the **Application** tab (Chrome) or **Storage** tab (Firefox).
3. Under **Local Storage**, select your site (e.g. `localhost:8080` or `file:///...`).
4. Find **`axis_onboarded`** and delete it, or set its value to **`false`**.
5. Refresh the page (F5 or Cmd+R).

If that’s too technical, you can use the in‑app **“View Onboarding Again”** button (in Settings) after you’re in the main app.

---

That’s it. Use **Option 1** for the most reliable preview.
