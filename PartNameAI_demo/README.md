# GitHub Pages Demo - Hino Part Name Standardization Tool

A static, client-side demo of the Hino Part Name Standardization lookup tool with **AI-powered translations**. This version includes dummy data with multiple translation variants from different AI sources (Reviewed, Gemini, Ollama) and runs entirely in the browser.

## Features

- 🔍 **Fuzzy Search**: Smart matching with Levenshtein distance algorithm
- 🏷️ **Part Lookup**: Search by part number or description
- 🇻🇳 **Bilingual**: Vietnamese and English part names
- 🤖 **Multiple AI Translations**: Shows 3 translation variants from different AI sources
- ⭐ **Translation Scores**: Quality scores (0-100%) for each translation variant
- 📊 **AI Notes**: Explanations of translation choices
- 📱 **Responsive Design**: Works on desktop, tablet, and mobile
- 📈 **Hierarchical Data**: Categories, subcategories, series, and models

## Key AI Features

### Multiple Translation Sources
Each part includes translations from:
- **Reviewed**: Expert-reviewed and verified translations (highest priority)
- **Gemini**: AI-generated translations using Google Gemini
- **Ollama**: Alternative AI suggestions using Ollama
- **Legacy**: Previous translation history

### Quality Scoring
Each translation includes a confidence score:
- 🟢 **95-100%**: Excellent, verified
- 🔵 **85-94%**: Good, recommended
- 🟡 **75-84%**: Fair, acceptable
- 🔴 **<75%**: Low confidence, needs review

## Quick Start

### 1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/HinoPartName_Standardization.git
cd HinoPartName_Standardization
```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select **Deploy from a branch**
4. Select **main** (or **master**) branch and **/demo** folder
5. Click **Save**

Your demo site will be live at: `https://YOUR_USERNAME.github.io/HinoPartName_Standardization/`

### 3. Run locally (optional)

To test locally without a server:
```bash
# On Windows
start demo/index.html

# On macOS
open demo/index.html

# On Linux
xdg-open demo/index.html
```

Or use any local HTTP server:
```bash
# Python 3
python -m http.server 8000
# Then open: http://localhost:8000/demo/

# Node.js (with http-server)
npx http-server demo -p 8000
# Then open: http://localhost:8000/
```

## File Structure

```
demo/
├── index.html              # Main HTML page
├── assets/
│   ├── css/
│   │   └── style.css       # All styling
│   └── js/
│       └── app.js          # Search logic & AI translation data
├── _config.yml             # GitHub Pages config
└── .nojekyll               # Disable Jekyll processing
```

## Using Dummy Data

The demo includes 8 sample Hino parts with Vietnamese and English names, plus AI translations:

- **Engines**: ENG-001, ENG-002
- **Filters**: FLT-001, FLT-002
- **Suspension**: SUP-001
- **Brakes**: PAD-001
- **HVAC**: CAB-001
- **Lighting**: LGT-001
- **Electrical**: BAT-001

Each part includes:
- Multiple translation variants with scores
- Translation notes explaining the choices
- Category, subcategory, and series information
- Model applicability

Try searching: `ENG`, `filter`, `phanh`, `động cơ`, etc.

## Customizing with Real Data

To use your actual part data with AI translations:

1. Replace the `DUMMY_DATA` array in `assets/js/app.js` with your data
2. Match the data structure:
   ```javascript
   {
     pn: "PART-001",
     groups: ["Category"],
     subgroups: ["Subcategory"],
     series: ["100", "200"],
     models: ["Hino 300"],
     note: "Optional note",
     names: [
       {
         name: "English Part Name",
         grpVn: "Danh mục tiếng Việt",
         vn1: "Bản dịch đã xem xét",
         s1: "0.95",
         n1: "Expert verified",
         vn2: "Bản dịch Gemini",
         s2: "0.88",
         n2: "AI generated",
         vn3: "Bản dịch Ollama",
         s3: "0.80",
         n3: "Alternative suggestion",
         vn4: "Bản dịch cũ"
       }
     ]
   }
   ```

## Converting CSV to JavaScript

To convert your CSV files with AI translations to the required format:

```python
import pandas as pd
import json

# Load your CSVs
masterdata = pd.read_csv('input/masterdata_hiechoX_part.csv')
reviewed = pd.read_csv('input/translation_reviewed_gemini.csv')
gemini = pd.read_csv('input/translation_results_gemini.csv')
ollama = pd.read_csv('input/translation_results.csv')

# Build lookup tables
def build_lookup(df):
    lookup = {}
    for _, row in df.iterrows():
        lookup[row['part_name_original']] = {
            'vn': row.get('canonical_vn', ''),
            'score': row.get('score', ''),
            'note': row.get('note', '')
        }
    return lookup

# Create data structure
data = []
for pn, group in masterdata.groupby('PartNumber'):
    names = []
    for part_name in group['PartName'].unique():
        r = build_lookup(reviewed).get(part_name, {})
        g = build_lookup(gemini).get(part_name, {})
        o = build_lookup(ollama).get(part_name, {})
        
        names.append({
            'name': part_name,
            'grpVn': group.iloc[0]['Group'],
            'vn1': r.get('vn', ''),
            's1': r.get('score', ''),
            'n1': r.get('note', ''),
            'vn2': g.get('vn', ''),
            's2': g.get('score', ''),
            'n2': g.get('note', ''),
            'vn3': o.get('vn', ''),
            's3': o.get('score', ''),
            'n3': o.get('note', '')
        })
    
    data.append({
        'pn': pn,
        'groups': group['Group'].unique().tolist(),
        'subgroups': group['SubGroup'].unique().tolist(),
        'series': group['Series'].unique().tolist(),
        'models': group['Model'].unique().tolist(),
        'note': group.iloc[0]['Note'],
        'names': names
    })

print("const DUMMY_DATA = " + json.dumps(data, ensure_ascii=False, indent=2) + ";")
```

## Technologies

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with gradients and transitions
- **Vanilla JavaScript**: No dependencies, pure search algorithm
- **AI Integration**: Multiple translation sources with scoring

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## Performance

- Loads instantly - no build step required
- Fuzzy search algorithm handles ~100s of parts smoothly
- All processing happens client-side
- No server required

## License

MIT License - Feel free to fork and customize for your needs!

## Support

For issues or questions:
1. Check the demo at `/demo/index.html`
2. Edit dummy data in `assets/js/app.js`
3. Customize styling in `assets/css/style.css`
4. See DEPLOYMENT.md for setup guides

### 1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/HinoPartName_Standardization.git
cd HinoPartName_Standardization
```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select **Deploy from a branch**
4. Select **main** (or **master**) branch and **/demo** folder
5. Click **Save**

Your demo site will be live at: `https://YOUR_USERNAME.github.io/HinoPartName_Standardization/`

### 3. Run locally (optional)

To test locally without a server:
```bash
# On Windows
start demo/index.html

# On macOS
open demo/index.html

# On Linux
xdg-open demo/index.html
```

Or use any local HTTP server:
```bash
# Python 3
python -m http.server 8000
# Then open: http://localhost:8000/demo/

# Node.js (with http-server)
npx http-server demo -p 8000
# Then open: http://localhost:8000/
```

## File Structure

```
demo/
├── index.html              # Main HTML page
├── assets/
│   ├── css/
│   │   └── style.css       # All styling
│   └── js/
│       └── app.js          # Search logic & dummy data
├── _config.yml             # GitHub Pages config
└── .nojekyll               # Disable Jekyll processing
```

## Using Dummy Data

The demo includes 16 sample Hino parts with Vietnamese and English names:

- **Engines**: ENG-001, ENG-002
- **Filters**: FLT-001, FLT-002, FLT-003
- **Suspension**: SUP-001, SUP-002, SUP-003
- **Brakes**: PAD-001, PAD-002
- **HVAC**: CAB-001, CAB-002
- **Lighting**: LGT-001, LGT-002
- **Electrical**: BAT-001, ALT-001

Try searching: `ENG`, `filter`, `phanh`, `động cơ`, etc.

## Customizing with Real Data

To use your actual part data:

1. Replace the `DUMMY_DATA` array in `assets/js/app.js` with your data
2. Match the data structure:
   ```javascript
   {
     pn: "PART-001",
     name_vi: "Tên tiếng Việt",
     name_en: "English Name",
     series: "100",
     category: "Category",
     hiechox: "Classification > Path"
   }
   ```

## Converting CSV to JavaScript

To convert your CSV files to the required format:

```python
import pandas as pd
import json

# Load your CSV
df = pd.read_csv('input/your_data.csv')

# Convert to the required structure
data = []
for _, row in df.iterrows():
    data.append({
        'pn': row['part_number'],
        'name_vi': row['name_vietnamese'],
        'name_en': row['name_english'],
        'series': row['series'],
        'category': row['category'],
        'hiechox': row['classification']
    })

# Output as JavaScript (paste into app.js)
print("const DUMMY_DATA = " + json.dumps(data, ensure_ascii=False, indent=2) + ";")
```

## Technologies

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with gradients and transitions
- **Vanilla JavaScript**: No dependencies, pure search algorithm

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## Performance

- Loads instantly - no build step required
- Fuzzy search algorithm handles ~100s of parts smoothly
- All processing happens client-side

## License

MIT License - Feel free to fork and customize for your needs!

## Support

For issues or questions:
1. Check the demo at `/demo/index.html`
2. Edit dummy data in `assets/js/app.js`
3. Customize styling in `assets/css/style.css`
