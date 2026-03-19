# Push to GitHub

The 403 error happens because GitHub requires authentication. Use one of these methods:

## Option 1: Personal Access Token (quickest)

1. **Create a token**: [GitHub → Settings → Developer settings → Personal access tokens](https://github.com/settings/tokens) → "Generate new token (classic)". Enable `repo` scope.

2. **Push using the token**:
   ```bash
   cd "/Users/adam/Desktop/AXIS/031726 REBUILD"
   GITHUB_TOKEN=your_token_here ./push.sh
   ```
   Or:
   ```bash
   git push https://YOUR_TOKEN@github.com/helloaxis01/axis-rebuild.git main
   ```

## Option 2: SSH (one-time setup)

1. **Check for SSH key**: `ls -la ~/.ssh/id_*.pub`
2. **If missing**, create one: `ssh-keygen -t ed25519 -C "your@email.com" -N "" -f ~/.ssh/id_ed25519`
3. **Add to GitHub**: Copy `~/.ssh/id_ed25519.pub` and add at [GitHub → Settings → SSH Keys](https://github.com/settings/keys)
4. **Switch remote and push**:
   ```bash
   cd "/Users/adam/Desktop/AXIS/031726 REBUILD"
   git remote set-url origin git@github.com:helloaxis01/axis-rebuild.git
   git push origin main
   ```

## Option 3: GitHub CLI

```bash
brew install gh
gh auth login
git push origin main
```
