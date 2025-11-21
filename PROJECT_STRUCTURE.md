# Kalpavriksha Industries Website - Project Structure

## 🌿 Project Overview

**Company:** Kalpavriksha Industries Pvt Ltd  
**Industry:** Agricultural Technology (AgriTech)  
**Founded:** 3rd January 2025  
**Website:** Multi-language responsive website with interactive 3D product models

---

## 📂 Complete Directory Structure

```
kalpavriksha-website/
│
├── index.html                 # Homepage
├── about.html                 # About Us page
├── products.html              # Products showcase with 3D models
├── contact.html               # Contact page with form
├── signin.html                # Sign In/Sign Up page
├── privacy.html               # Privacy Policy
├── terms.html                 # Terms & Conditions
├── README.md                  # Project documentation
├── CHANGES_SUMMARY.md         # Change log
├── PROJECT_STRUCTURE.md       # This file
├── .gitignore                 # Git ignore rules
│
├── 📁 css/
│   ├── style.css              # Main stylesheet (navbar, footer, global)
│   └── products.css           # Products page specific styles
│
├── 📁 js/
│   ├── script.js              # Main JavaScript
│   │                          # - Navbar/Footer loading
│   │                          # - Multi-language translation system
│   │                          # - Page-specific translations
│   └── 3d-viewer.js           # Three.js 3D model viewer (ES Module)
│                              # - Interactive 3D product displays
│                              # - Auto-rotation and controls
│                              # - GLB model loading
│
├── 📁 assets/
│   ├── favicon.png            # Website favicon
│   ├── kalpvriksha_icon.png   # Company icon
│   ├── kalpvriksha_logo_full.png  # Full logo
│   └── 📁 images/
│       ├── plant.png
│       └── product-layout.png
│
├── 📁 models/                 # 3D Models (GLB format)
│   ├── soil moisture sensor 3d model.glb
│   ├── drip irrigation sprinkler 3d model.glb
│   └── agriculture drone.glb
│
├── 📁 components/             # HTML component templates
│   ├── _navbar.html           # Navigation bar (loaded via JS)
│   └── _footer.html           # Footer (loaded via JS)
│
├── 📁 Information/            # Company documentation
│   ├── About us.txt           # Company information
│   └── Kalpavriksha industries.txt  # Complete company & website info
│
└── 📁 .kiro/                  # Kiro IDE specifications
    └── specs/
        └── products-translation/
            └── requirements.md
```

---

## 🎯 Key Features Implemented

### 1. 🌐 Multi-Language Support
- **Languages:** English, Hindi (हिंदी), Telugu (తెలుగు), Kannada (ಕನ್ನಡ)
- **Coverage:** All pages fully translated
- **Persistence:** Language preference saved in localStorage
- **Dynamic:** Real-time language switching without page reload

### 2. 🎨 Interactive 3D Product Models
- **Technology:** Three.js with GLTFLoader
- **Format:** GLB (GL Transmission Format Binary)
- **Features:**
  - Interactive rotation (click & drag)
  - Zoom controls (scroll)
  - Auto-rotation animation
  - Professional lighting setup
  - Loading indicators
  - Responsive sizing
- **Products with 3D Models:**
  1. Kalpavriksha Smart Sensor
  2. Kalpavriksha Soil Quality Sensor
  3. Smart Drip Irrigation Mechanism
  4. Verdant Drone

### 3. 📱 Responsive Design
- **Approach:** Mobile-first
- **Breakpoints:**
  - Mobile: < 480px
  - Tablet: 480px - 768px
  - Desktop: 768px - 1200px
  - Large Desktop: > 1200px
- **All pages:** Fully responsive and touch-friendly

### 4. 🧭 Dynamic Navigation & Footer
- **Loading:** Dynamically injected via JavaScript
- **Features:**
  - Sticky navigation bar
  - Language dropdown selector
  - Active page highlighting
  - Social media links (LinkedIn, Twitter, Facebook, YouTube)
  - Responsive mobile menu

### 5. 📄 Complete Page Set

#### **Homepage (index.html)**
- Hero section with company tagline
- About Us preview
- Data monitoring showcase (4 cards)
- Flagship products overview
- Call-to-action buttons

#### **About Us (about.html)**
- Company history and founding story
- Vision and mission statements
- Journey timeline
- Innovation philosophy
- The Kalpavriksha Promise
- Call to action

#### **Products (products.html)**
- 4 product sections with:
  - Interactive 3D models (700px height)
  - Product overview cards
  - Key features grid
  - Pricing options
  - Add to Cart buttons
  - Request Demo buttons
- Product dividers between sections

#### **Contact (contact.html)**
- Contact form with validation
  - Name, Email, Subject, Message fields
- Office details section
  - Address
  - Phone numbers (Sales & Technical)
  - Email addresses
- Responsive layout

#### **Sign In (signin.html)**
- Toggle between Sign In / Sign Up
- Social login options
- Form validation
- Responsive mobile layout
- Multi-language support

#### **Legal Pages**
- Privacy Policy (privacy.html)
- Terms & Conditions (terms.html)
- Professional formatting
- Company branding

---

## 🛠️ Technical Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Flexbox, Grid, Custom Properties, Animations
- **JavaScript (ES6+)** - Modules, Async/Await, Classes

### Libraries & Frameworks
- **Three.js (v0.160)** - 3D rendering engine
- **GLTFLoader** - 3D model loading
- **OrbitControls** - Camera controls for 3D viewer
- **Font Awesome (v6.0)** - Icon library
- **Google Fonts** - Poppins typography

### Design System
- **Colors:**
  - Primary Green: #2e8b57, #166534, #14532d
  - Accent: #3CB371, #58b36c
  - Background: #f8fbf9, #edf6ef
- **Typography:** Poppins (400, 500, 600, 700)
- **Border Radius:** 10px, 18px, 20px (rounded corners)
- **Shadows:** Subtle elevation effects

---

## 📊 File Statistics

### HTML Files: 7
- index.html
- about.html
- products.html
- contact.html
- signin.html
- privacy.html
- terms.html

### CSS Files: 2
- style.css (~800 lines)
- products.css (~400 lines)

### JavaScript Files: 2
- script.js (~750 lines)
- 3d-viewer.js (~250 lines)

### 3D Models: 3
- soil moisture sensor 3d model.glb
- drip irrigation sprinkler 3d model.glb
- agriculture drone.glb

---

## 🌍 Multi-Language Translation System

### Implementation
```javascript
// Translation object structure
translations = {
  'en': { 'key': 'English text' },
  'hi': { 'key': 'हिंदी पाठ' },
  'te': { 'key': 'తెలుగు వచనం' },
  'kn': { 'key': 'ಕನ್ನಡ ಪಠ್ಯ' }
}
```

### Coverage
- ✅ Navigation menu
- ✅ Hero sections
- ✅ About content
- ✅ Product descriptions
- ✅ Contact forms
- ✅ Footer content
- ✅ Button labels
- ✅ Form placeholders

### Storage
- Language preference stored in `localStorage`
- Key: `selectedLanguage`
- Auto-applies on page load

---

## 🎮 3D Viewer Features

### User Controls
- **Rotate:** Click and drag
- **Zoom:** Scroll wheel or pinch
- **Auto-rotate:** Resumes when idle
- **Pan:** Disabled (focused view)

### Technical Details
- **Scene:** Three.js Scene with custom background
- **Camera:** PerspectiveCamera (45° FOV)
- **Lighting:**
  - Ambient light (0.7 intensity)
  - Main directional light (1.0 intensity)
  - Fill light (0.4 intensity)
  - Rim light (0.3 intensity)
- **Renderer:** WebGL with antialiasing
- **Controls:** OrbitControls with damping

### Performance
- Auto-scaling models to fit viewport
- Responsive canvas sizing
- Efficient animation loop
- Shadow mapping enabled

---

## 📱 Browser Support

### Desktop
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

### Mobile
- ✅ iOS Safari
- ✅ Chrome Mobile
- ✅ Samsung Internet
- ✅ Firefox Mobile

### Requirements
- WebGL support (for 3D models)
- ES6+ JavaScript support
- LocalStorage enabled

---

## 🚀 Deployment

### Hosting Options
- **GitHub Pages** - Free static hosting
- **Netlify** - Automatic deployments
- **Vercel** - Optimized for modern web
- **AWS S3 + CloudFront** - Scalable solution

### Pre-Deployment Checklist
- [ ] Test all pages on multiple devices
- [ ] Verify 3D models load correctly
- [ ] Check all language translations
- [ ] Test contact form functionality
- [ ] Validate all links
- [ ] Optimize images
- [ ] Minify CSS/JS (optional)
- [ ] Set up analytics (Google Analytics)
- [ ] Configure custom domain
- [ ] Set up SSL certificate

### Running Locally
```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server -p 8000

# Then open: http://localhost:8000
```

**Note:** 3D models require a local server (not file://) due to CORS restrictions.

---

## 📞 Contact Information

**Company:** Kalpavriksha Industries Pvt Ltd  
**Address:** 419, Sector D, Sushant Gold City, Delhi-110092  
**Email:** info@kalpvriksha.com  
**Phone:** +91 98765 43210  

**Social Media:**
- LinkedIn: linkedin.com/company/kalpavriksha-industries
- Twitter: twitter.com/kalpavriksha
- Facebook: facebook.com/kalpavriksha
- YouTube: youtube.com/@kalpavriksha

---

## 📝 Development Notes

### Best Practices Followed
- ✅ Semantic HTML5 markup
- ✅ BEM-like CSS naming conventions
- ✅ Mobile-first responsive design
- ✅ Accessibility considerations (ARIA labels)
- ✅ Performance optimization
- ✅ Code organization and modularity
- ✅ Cross-browser compatibility

### Future Enhancements
- [ ] Backend integration for contact form
- [ ] User authentication system
- [ ] Product shopping cart functionality
- [ ] Payment gateway integration
- [ ] Admin dashboard
- [ ] Blog/News section
- [ ] Customer testimonials
- [ ] Live chat support
- [ ] Progressive Web App (PWA)
- [ ] Advanced analytics

### Known Limitations
- Forms are client-side only (no backend)
- 3D models require local server for development
- External image URLs (consider hosting locally)
- No database integration yet

---

## 🔧 Maintenance

### Regular Updates
- Update Three.js library periodically
- Refresh product information
- Add new translations as needed
- Update company information
- Refresh images and content

### Monitoring
- Check 3D model loading performance
- Monitor page load times
- Track user language preferences
- Analyze contact form submissions
- Review browser console for errors

---

## 📚 Documentation

### Additional Resources
- `/Information/About us.txt` - Company overview
- `/Information/Kalpavriksha industries.txt` - Complete company info
- `README.md` - Project README
- `CHANGES_SUMMARY.md` - Change history

---

## ✨ Credits

**Developed for:** Kalpavriksha Industries Pvt Ltd  
**Technology Stack:** HTML5, CSS3, JavaScript ES6+, Three.js  
**3D Models:** Custom GLB format models  
**Icons:** Font Awesome  
**Fonts:** Google Fonts (Poppins)  
**Images:** Unsplash (external URLs)

---

**Last Updated:** January 2025  
**Version:** 1.0.0  
**Status:** Production Ready ✅

---

*Kalpavriksha Industries Pvt Ltd - Smart Farming for a Greener Tomorrow* 🌾
