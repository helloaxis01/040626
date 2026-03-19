# Connect to Vercel

## 1. Link GitHub to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in (or create an account).
2. Click **“Add New…”** → **“Project”**.
3. Click **“Import Git Repository”** and choose **Connect to GitHub** if you haven’t already.
4. Pick **helloaxis01/axis-rebuild** (or the correct repo name).
5. Click **Import**.

## 2. Configure the project

Vercel should detect this as a static site. Recommended settings:

- **Framework Preset:** Other
- **Build Command:** leave empty (static site)
- **Output Directory:** leave empty (root)
- **Install Command:** leave empty

## 3. Deploy

Click **Deploy**. After the first deploy:

- Every push to `main` will trigger a new deployment.
- Your site will be available at something like `axis-rebuild.vercel.app` (or your custom domain).

## Routes

- `/` → Main app (`index_mainapp_rebuild.html`)
- `/onboarding` → Onboarding flow (`index-onboarding-rebuild.html`)

## Assets

Make sure any assets (e.g. `axis-icon.png`, `axis_data.json`) are in the repo root or a folder that matches your HTML paths.
