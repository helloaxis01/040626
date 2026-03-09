# Deploy AXIS to GitHub — Step by Step

Your repo is **axis-app** and your GitHub username is **helloaxis01**. Follow these steps in order.

---

## Step 1: Open Terminal

- On your Mac: **Spotlight** (Cmd + Space) → type **Terminal** → press Enter.

---

## Step 2: Go to your project folder

Copy and paste this, then press Enter:

```bash
cd /Users/adam/Desktop/AXIS
```

---

## Step 3: Connect this folder to your GitHub repo

Copy and paste this, then press Enter:

```bash
git remote add origin https://github.com/helloaxis01/axis-app.git
```

- If you see **"fatal: remote origin already exists"**, run this first, then run the line above again:

  ```bash
  git remote remove origin
  ```

---

## Step 4: Push your code to GitHub

Copy and paste this, then press Enter:

```bash
git push -u origin main
```

**What might happen:**

- **It works**  
  You’ll see something like “Branch 'main' set up to track remote branch 'main'.”  
  → Go to **Step 5**.

- **“Updates were rejected”**  
  GitHub has different/older code. To **replace** it with your current AXIS app and use that for testing, run:

  ```bash
  git push -u origin main --force
  ```

  Then go to **Step 5**.

- **Asks for username / password**  
  - Username: **helloaxis01**  
  - Password: do **not** use your normal GitHub password. Use a **Personal Access Token**:  
    1. In a browser: https://github.com/settings/tokens  
    2. **Generate new token (classic)**  
    3. Name it e.g. “AXIS deploy”, enable **repo**  
    4. Generate, copy the token, and paste it when Terminal asks for the password.

---

## Step 5: Turn on GitHub Pages (so you can open it on your phone)

1. In a browser, go to: **https://github.com/helloaxis01/axis-app**
2. Click **Settings** (top menu of the repo).
3. In the left sidebar, click **Pages** (under “Code and automation” or “Build and deployment”).
4. Under **“Build and deployment”** → **Source**, choose **“Deploy from a branch”**.
5. Under **Branch**: choose **main**, folder **/ (root)**.
6. Click **Save**.

After a minute or two, your app will be live at:

**https://helloaxis01.github.io/axis-app/**

---

## Step 6: Test on your phone

1. On your phone, open Safari (or Chrome).
2. Go to: **https://helloaxis01.github.io/axis-app/**
3. You can **Add to Home Screen** (Share → Add to Home Screen) so it opens like an app.

---

## If you change the app later and want to update the site

In Terminal:

```bash
cd /Users/adam/Desktop/AXIS
git add .
git commit -m "Describe what you changed"
git push
```

GitHub Pages will update in a minute or two; refresh the URL on your phone.
