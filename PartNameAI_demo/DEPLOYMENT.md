# GitHub Pages Deployment Guide

## Step-by-Step Setup

### Prerequisites
- GitHub account with repository access
- Git installed locally
- Repository already created

### Option 1: Deploy Using GitHub Web Interface (Easiest)

1. **Push the `/demo` folder to GitHub**
   ```bash
   git add demo/
   git commit -m "Add GitHub Pages demo"
   git push origin main
   ```

2. **Configure GitHub Pages**
   - Go to your repository on github.com
   - Click **Settings** (top right)
   - Click **Pages** (left sidebar)
   - Under "Source":
     - Select **Deploy from a branch**
     - Branch: **main** (or **master**)
     - Folder: **`/demo`**
   - Click **Save**

3. **Wait for deployment**
   - GitHub will build and deploy automatically
   - Check the "Deployments" section for status
   - Site will be available at: `https://YOUR_USERNAME.github.io/HinoPartName_Standardization/`

### Option 2: Deploy Using GitHub Actions (Recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main
    paths:
      - 'demo/**'
      - '.github/workflows/deploy.yml'

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./demo
```

Then push:
```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Pages deployment workflow"
git push origin main
```

### Option 3: Manual Deployment to `gh-pages` Branch

1. **Create orphan branch**
   ```bash
   git checkout --orphan gh-pages
   git reset --hard
   git clean -fd
   ```

2. **Copy demo files**
   ```bash
   git checkout main -- demo
   ```

3. **Commit and push**
   ```bash
   git add .
   git commit -m "Deploy demo to GitHub Pages"
   git push -u origin gh-pages
   ```

4. **Configure in Settings**
   - Repository Settings → Pages
   - Source: **gh-pages** branch
   - Folder: **root** (not `/demo`)
   - Save

5. **Return to main branch**
   ```bash
   git checkout main
   ```

## Verify Deployment

1. Check **Actions** tab - wait for workflow to complete
2. Check **Environments** → **github-pages** for deployment status
3. Visit your site at: `https://YOUR_USERNAME.github.io/HinoPartName_Standardization/`

## Troubleshooting

### Site Not Loading
- Check GitHub Actions for errors
- Ensure `/demo` folder exists and contains `index.html`
- Clear browser cache (Ctrl+Shift+Del)
- Wait 2-5 minutes for GitHub Pages to rebuild

### 404 Errors
- Ensure `.nojekyll` file exists in `/demo`
- Check that all asset paths are correct in HTML
- CSS/JS should load from `assets/css/` and `assets/js/`

### CSS/JS Not Loading
- Check browser DevTools Console (F12)
- Verify file paths in `index.html`:
  ```html
  <link rel="stylesheet" href="assets/css/style.css">
  <script src="assets/js/app.js"></script>
  ```

### Update Site Content

After making changes:
```bash
# Edit files in /demo
git add demo/
git commit -m "Update demo content"
git push origin main
# Site updates automatically within 1-2 minutes
```

## Custom Domain (Optional)

To use a custom domain:

1. Create `CNAME` file in `/demo`:
   ```
   your-domain.com
   ```

2. Push to GitHub:
   ```bash
   git add demo/CNAME
   git commit -m "Add custom domain"
   git push origin main
   ```

3. Update DNS settings at your domain provider (A records point to GitHub Pages IPs)

4. Configure in Settings → Pages → Custom domain

## Local Testing

Before pushing, test locally:

```bash
# Python 3
cd demo
python -m http.server 8000
# Visit: http://localhost:8000

# Or with Node.js
npm install -g http-server
http-server demo -p 8000
# Visit: http://localhost:8000
```

## Next Steps

1. ✅ Deploy to GitHub Pages
2. 📝 Update dummy data in `assets/js/app.js` with real parts
3. 🎨 Customize styling in `assets/css/style.css`
4. 📱 Test on mobile and different browsers
5. 🔗 Share your demo site!

## Support Resources

- [GitHub Pages Docs](https://docs.github.com/pages)
- [GitHub Actions Guide](https://docs.github.com/actions)
- [MDN Web Docs](https://developer.mozilla.org)
