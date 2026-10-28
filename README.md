# 🎓 MD. Shamim Raton — Academic Portfolio

A modern, fully responsive academic portfolio website for **MD. Shamim Raton**, Lecturer in Chemistry at **Rajshahi College** (36th BCS Education Cadre).

Built with **Next.js 15 (App Router) + React 19**, featuring a chemistry-themed design, animated hero section, interactive Education Journey timeline, filterable gallery, research section, and a working contact form with real email delivery.

## 🌐 Live Website

> **https://shamim-ratan-portfolio.vercel.app**

Deployed on Vercel — auto-deploys on every push to the `main` branch.

---

## ✨ Features

- **Chemistry-themed animated UI** — hero with chemistry decor SVG animation, floating flask & DNA, molecule particles
- **Education Journey Timeline** — interactive milestone cards with modal detail views (Esc-to-close, accessible)
- **Gallery** — filterable image grid with tabs and lightbox preview (keyboard accessible: Enter/Space/Escape)
- **Research & Academic Interests** section
- **Contact form with real delivery** — Web3Forms integration (messages go straight to Gmail) with a `mailto:` fallback so messages are never lost
- **Smart contact cards** — Phone card opens `tel:` on touch devices and WhatsApp on desktop; Gmail, Google Maps links for Location/Office
- **SEO ready** — Open Graph, Twitter cards, canonical URL, `robots.txt`, `sitemap.xml`
- **Security hardened** — CSP, X-Frame-Options, nosniff, Referrer-Policy, Permissions-Policy headers, `X-Powered-By` disabled, hidden honeypot field
- **Accessibility** — ARIA labels, keyboard navigation, focus support, `prefers-reduced-motion` support, semantic heading hierarchy
- **Custom themed 404 page**
- **Performance optimized** — optimized hero image (PNG 1.71 MB → JPG 127 KB), font preloading, static prerendering of all routes

---

## 🛠 Technology Stack

| Category | Technology |
|---|---|
| **Framework** | [Next.js 15](https://nextjs.org/) (App Router) |
| **UI Library** | React 19 |
| **Language** | JavaScript (ES6+, JSX) |
| **Styling** | CSS3 (custom, `globals.css` — CSS variables, Flexbox, Grid, keyframe animations, clamp() responsive typography) |
| **Fonts** | Google Fonts — Poppins, Playfair Display, Inter, IBM Plex Mono |
| **Icons** | Font Awesome (cdnjs CDN) |
| **Form Delivery** | [Web3Forms](https://web3forms.com) API + `mailto:` fallback |
| **Contact Utilities** | `tel:` deep linking, WhatsApp (`wa.me`), Gmail compose links, Google Maps |
| **SEO** | Next.js Metadata API (Open Graph, Twitter Cards), `app/robots.js`, `app/sitemap.js` |
| **Security** | Content Security Policy + hardening headers via `next.config.mjs` |
| **Hosting / CI** | [Vercel](https://vercel.com) (auto-deploy from GitHub) |
| **Version Control** | Git + GitHub |
| **Web Standards** | HTML5 semantic markup, ARIA accessibility |

**Zero runtime npm packages beyond Next.js/React** — no UI library, no form library, no image optimizer package. Everything is handcrafted CSS + native APIs.

---

## 🚀 Run Locally (localhost)

### Prerequisites
- [Node.js](https://nodejs.org/) ≥ 18.18 and npm

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/webrakib16/Shamim-Ratan-portfolio.git
cd Shamim-Ratan-portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open **http://localhost:3000** in your browser. The page auto-reloads as you edit files.

### Production build locally

```bash
npm run build   # optimized production build
npm run start   # serve the production build at http://localhost:3000
```

---

## 📮 Contact Form Setup (Environment Variable)

The contact form delivers messages via **Web3Forms** (free — 250 messages/month).

1. Sign up at [web3forms.com](https://web3forms.com) with the target Gmail address and get an **Access Key**
2. Create a `.env.local` file in the project root (for local) **and/or** add it in Vercel → Settings → **Environment Variables** (for production):

   ```env
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```

3. Restart the dev server / redeploy

> **Note:** Until the key is configured, the form gracefully falls back to opening the visitor's mail client with a prefilled email — so contact messages always reach the owner either way.

---

## 📁 Project Structure

```
Shamim-Ratan-portfolio/
├── app/                    # Next.js App Router
│   ├── layout.jsx          # Root layout, fonts, SEO metadata
│   ├── page.jsx            # Home page (assembles all sections)
│   ├── globals.css         # Entire theme (design system, ~3200 lines)
│   ├── not-found.jsx       # Custom themed 404 page
│   ├── gallery/page.jsx    # Gallery route
│   ├── research/page.jsx   # Research route
│   ├── robots.js           # robots.txt generator
│   └── sitemap.js          # sitemap.xml generator
├── components/
│   ├── Navbar.jsx          # Responsive navbar + mobile hamburger
│   ├── Hero.jsx            # Animated hero with chemistry decor
│   ├── About.jsx           # Profile / info cards
│   ├── Timeline.jsx        # Education Journey timeline + modals
│   ├── Gallery.jsx         # Filterable gallery + lightbox
│   ├── Research.jsx        # Research & interests
│   ├── GetInTouch.jsx      # Contact form (Web3Forms) + contact cards
│   └── Footer.jsx          # Footer with social links + decorations
├── public/assets/          # Images (gallery, profile, hero background)
├── next.config.mjs         # Security headers, CSP, image settings
└── package.json
```

---

## 📄 Pages & Routes

| Route | Description |
|---|---|
| `/` | Full portfolio home (Hero, About, Education Journey, Gallery preview, Research preview, Contact) |
| `/gallery` | Complete gallery page |
| `/research` | Research & Academic Interests page |
| `/sitemap.xml` | SEO sitemap |
| `/robots.txt` | Crawler rules |

---

## 🔐 Included Security Hardening

- Content Security Policy (CSP) — fonts, Web3Forms API whitelisted
- `X-Frame-Options: DENY` (clickjacking protection)
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` (camera/microphone/geolocation disabled)
- `X-Powered-By` header removed
- Hidden honeypot field for spam bots

---

## 📈 Performance Targets — All Met ✅

| Metric | Result | Google Target |
|---|---|---|
| LCP | 1.526s | ≤ 2.5s ✅ |
| CLS | 0.029 | ≤ 0.1 ✅ |
| TTFB | 0.251s | ≤ 0.8s ✅ |
| FCP | 1.345s | ≤ 1.8s ✅ |
| TBT | 0.042s | ≤ 0.2s ✅ |

---

## 🚢 Deployment (Vercel)

The site auto-deploys from the `main` branch. To deploy manually:

1. Push this repo to GitHub
2. Import it at [vercel.com/new](https://vercel.com/new)
3. Add the `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` environment variable
4. Deploy

---

## 👤 Owner

**MD. Shamim Raton** — Lecturer, Department of Chemistry, Rajshahi College · 36th BCS Education Cadre

---

⭐ If this project helped you, consider giving it a star on GitHub!
