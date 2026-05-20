# Thai Phan - Professional CV & Portfolio

An interactive, premium CV timeline with integrated portfolio projects showcasing professional accomplishments and technical expertise. This site is deployed on GitHub Pages with dual-language support (English & Vietnamese).

## 🌟 Features

- **Interactive Timeline**: Visual career progression with animated timeline nodes
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark/Light Mode**: Theme toggle with localStorage persistence
- **Bilingual Support**: English and Vietnamese language selection
- **Modern UI**: Premium design with smooth animations and transitions
- **Portfolio Section**: Featured projects showcase with project cards
- **Honeycomb Grid**: Beautiful hexagon-shaped bio information cards

## 📁 Project Structure

```
ThaiPhanCV/
├── index.html                    # Main CV page
├── style.css                     # Global styles & theme variables
├── script.js                     # JavaScript (theme, language, animations)
├── .nojekyll                     # GitHub Pages config (skip Jekyll processing)
├── .gitignore                    # Git ignore patterns
├── README.md                     # This file
│
├── PartNameAI_demo/             # Hino Part Name Standardization Tool
│   ├── index.html               # AI-powered fuzzy search interface
│   ├── assets/
│   │   ├── css/
│   │   │   └── style.css
│   │   ├── js/
│   │   │   └── app.js
│   │   └── data/
│   ├── .nojekyll
│   └── README.md
│
└── PartHubSite_demo/            # HinoPartWeb Dashboard Demo
    ├── dashboard-demo.html      # Interactive dashboard interface
    ├── assets/
    │   └── data/
    │       └── sample-data.js
    ├── style.css
    ├── .nojekyll
    └── README.md
```

## 🚀 Deployment to GitHub Pages

### Prerequisites
- GitHub account
- Git installed locally
- Your repository created on GitHub

### Step 1: Initialize Git (if not already done)

```bash
cd ThaiPhanCV
git init
git add .
git commit -m "Initial commit: CV portfolio with integrated projects"
```

### Step 2: Add Remote Repository

```bash
git remote add origin https://github.com/YOUR_USERNAME/ThaiPhanCV.git
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select:
   - **Deploy from a branch**
   - Branch: **main** (or **master**)
   - Folder: **/ (root)**
4. Click **Save**

Your site will be published at: `https://YOUR_USERNAME.github.io/ThaiPhanCV/`

### Step 4: Verify Deployment

1. Wait 1-2 minutes for GitHub Pages to build and deploy
2. Visit the URL above to confirm your portfolio is live
3. Test all features:
   - Theme toggle (dark/light mode)
   - Language toggle (EN/VN)
   - Project demo links
   - Responsive design on mobile

## 🔗 Featured Projects

### 1. Hino Part Name Standardization Tool
**Location**: `PartNameAI_demo/`
- **Description**: AI-powered part lookup with fuzzy search
- **Features**:
  - 🔍 Smart fuzzy matching (Levenshtein distance)
  - 🤖 Multiple AI translation sources (Reviewed, Gemini, Ollama)
  - 🇻🇳 Bilingual Vietnamese/English
  - ⭐ Quality scoring for translations
  - 📱 Fully responsive design
- **Technology**: HTML, JavaScript, Client-side processing
- **Demo**: [View Live Demo](./PartNameAI_demo/index.html)

### 2. HinoPartWeb Interactive Dashboard
**Location**: `PartHubSite_demo/`
- **Description**: Inventory management dashboard with real-time analytics
- **Features**:
  - 📊 Interactive data visualization
  - 🗂️ Hierarchical navigation (Category → Series → Model)
  - 📈 Comprehensive KPI tracking
  - 🎨 Dark/Light mode support
  - 📱 Responsive mobile-friendly layout
- **Technology**: HTML, CSS, JavaScript
- **Demo**: [View Live Demo](./PartHubSite_demo/dashboard-demo.html)

## 🎯 Usage

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/ThaiPhanCV.git
cd ThaiPhanCV
```

2. Open in a local server (recommended):
```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (http-server)
npx http-server
```

3. Visit `http://localhost:8000` in your browser

### Features

- **Theme Toggle**: Click the sun/moon icon in the header
- **Language Toggle**: Use EN/VN buttons in the header
- **View Projects**: Scroll to the "Featured Projects" section and click "View Demo"
- **Mobile Responsive**: Works seamlessly on all screen sizes

## 🎨 Customization

### Colors & Branding
Edit the CSS variables in `style.css`:

```css
:root {
  --color-brand-dark: #386b2e;    /* Primary dark green */
  --color-brand-light: #f2f5f2;   /* Light background */
  /* ... more colors ... */
}
```

### Timeline Events
Edit timeline entries in `index.html` (search for `.timeline-node`):

```html
<div class="timeline-node node-down node-2015">
  <!-- Update year, role, company, and tasks -->
</div>
```

### Adding New Projects
Add new project cards to the projects section:

```html
<div class="project-card fade-in-up">
  <!-- Your project content here -->
</div>
```

### Translations
Update translations in `script.js`:

```javascript
const translations = {
  en: {
    // English translations
  },
  vn: {
    // Vietnamese translations
  }
};
```

## 🌐 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 2.5s
- **Fully responsive**: Mobile-first design approach

## 🔧 Technologies

- **HTML5**: Semantic markup
- **CSS3**: Grid, Flexbox, Custom Properties, Animations
- **JavaScript (Vanilla)**: ES6+, no frameworks
- **Accessibility**: ARIA labels, semantic elements
- **SEO**: Meta tags, structured data

## 📋 Checklist for GitHub Pages

- ✅ `.nojekyll` file present (skip Jekyll processing)
- ✅ Relative paths for all links (no absolute URLs)
- ✅ `.gitignore` file configured
- ✅ GitHub Pages enabled in repository settings
- ✅ No local file URLs or hardcoded paths
- ✅ HTTPS enabled (automatic with GitHub Pages)
- ✅ Mobile responsive design
- ✅ Performance optimized

## 🐛 Troubleshooting

### Portfolio not loading
- Check that all file paths are relative (e.g., `./PartNameAI_demo/index.html`)
- Ensure `.nojekyll` file exists in the root directory
- Clear browser cache and try again

### Links to projects not working
- Verify demo folders exist: `PartNameAI_demo/` and `PartHubSite_demo/`
- Check that `index.html` exists in `PartNameAI_demo/`
- Check that `dashboard-demo.html` exists in `PartHubSite_demo/`

### Theme/Language not persisting
- Check browser localStorage is enabled
- Clear browser cache if changes aren't reflecting

### Styling issues on GitHub Pages
- Verify `.nojekyll` file is present
- Check that CSS file path is correct: `style.css`
- Clear cache: Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

## 📧 Contact

- **Email**: phanthai93@gmail.com
- **Phone**: +84-762078988
- **Location**: Hà Đông, Hà Nội, Việt Nam

## 📄 License

© 2026 Thai Phan. All Rights Reserved.

---

**Last Updated**: 2026-05-20  
**Status**: Active & Maintained
