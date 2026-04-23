# WellMind — Multimodal AI for Depression Detection

> **A Next.js-based research website showcasing an AI system that detects depression using facial expressions, voice analysis, and social media activity.**

## 🚀 Quick Start

**Prerequisites:**
- Node.js >= 18.0.0
- npm or yarn

**Installation:**

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📂 Project Structure

```
website/
├── src/
│   ├── app/               # Next.js pages
│   │   ├── page.tsx       # Homepage (hero + intro)
│   │   ├── about/         # Team + advisors
│   │   ├── project-scope/ # Problem, gaps, methodology, architecture
│   │   ├── milestone/     # Detailed technical architecture
│   │   ├── download/      # App download (mock)
│   │   └── contact/       # Contact form
│   ├── components/        # Reusable UI components
│   └── globals.css        # Tailwind styles
├── public/                # Static assets (images)
├── next.config.mjs        # Next.js configuration
├── tailwind.config.ts     # Tailwind configuration
└── package.json           # Project dependencies
```

## 🎨 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS 4
- **Icons:** Lucide React
- **Language:** TypeScript
- **Deployment:** Static export (Vercel ready)

## 🖼️ Design System Tokens (Tailwind)

```
bg-primary   ← #050512 (near-black)
text-primary ← #f2f2f6 (soft white)
accent-blue  ← #3b82f6
accent-violet← #8b5cf6
accent-emerald ← #10b981
accent-pink  ← #ec4899
```

## 📂 Page-by-Page Breakdown

### `src/app/page.tsx` (Homepage)
- **Hero Section** with gradient background and floating badge animation
- **3-Pillar Architecture** (Face, Voice, Social Media)
- **Timeline Preview** with 4 key milestones
- **Scroll-triggered animations** using Tailwind (animate-fade-in, animate-slide-in)

### `src/app/about/page.tsx`
- **Team Section** — 4 team members with profiles
- **Academic Advisors** — Supervisors and collaborators
- **Photo Credits** with proper attribution

### `src/app/project-scope/page.tsx`
- **Literature Survey** — 5 research domains with key papers
- **Problem Statement** — Why this system is needed
- **Research Gap** — What current solutions lack
- **Methodology** — 6-step research workflow
- **System Architecture** — Nodes & connections diagram

### `src/app/milestone/page.tsx`
- **Phase-wise breakdown** (2024–2026)
- **Milestone cards** — Data collection, model training, validation, deployment
- **Timeline visualization** with connecting arrows
- **Technical Deep Dive** — Model architectures, metrics, deployment strategy

### `src/app/download/page.tsx`
- **Mock download page** with Android/iOS tabs
- **Feature highlight** — Real-time detection, privacy-focused

### `src/app/contact/page.tsx`
- **Contact Form** with name, email, subject, message fields
- **Google Forms** integration via `iframe`
- **Email, LinkedIn, GitHub links**

## 🎨 Design Features

- **Dark Mode Native:** Base theme is dark with glassmorphism effects
- **Subtle Gradients:** Using `bg-gradient-to-*` for depth
- **Glassmorphism:** `backdrop-blur-xl`, `bg-white/5`, `border-white/10`
- **Scroll Animations:** Custom `@keyframes` in `globals.css`
- **Floating Animations:** `animate-float`, `animate-pulse` on badges

## 🏗️ Local Development

```bash
# Install dependencies
npm install

# Start server
npm run dev
```

Server runs at [http://localhost:3000](http://localhost:3000)

## 📦 Build for Production

```bash
# Build static site
npm run build

# Preview build locally
npm run start
```

## 📦 Deployment to Vercel

Since this is a static site, deployment is straightforward:

```bash
# Create a new repository
git init
git branch -M main

# Add remote
git remote add origin <repository-url>

# Commit and push
git add .
git commit -m "Initial WellMind website commit"
git push -u origin main
```

Then import the repository into Vercel at [vercel.com](https://vercel.com).

## 📂 Repository Structure

```
website/
├── .next/                 # Build output (generated)
├── node_modules/          # Dependencies (generated)
├── public/                # Static assets
│   ├── hero.png           # Hero image
│   ├── navin.png          # Team photos
│   └── ...
├── src/
│   ├── app/
│   │   ├── page.tsx       # Homepage
│   │   ├── about/
│   │   ├── project-scope/
│   │   ├── milestone/
│   │   ├── download/
│   │   └── contact/
│   ├── components/
│   ├── globals.css
│   └── layout.tsx
├── .eslintrc.json         # ESLint config
├── next.config.mjs        # Next.js config
├── package.json           # Dependencies
├── postcss.config.js      # PostCSS config
├── tailwind.config.ts     # Tailwind config
├── tsconfig.json          # TypeScript config
└── README.md              # This file
```

## 🧩 Architecture Components

### 1. User-Facing Pages (`src/app/*`)
- **Homepage:** Introduces the system with 3 pillars and timeline preview
- **About:** Team and advisor profiles
- **Project Scope:** Detailed problem, gap, methodology, architecture
- **Milestone:** Phase-wise breakdown with technical deep dive
- **Download:** Mock app download page
- **Contact:** Contact form with Google Forms integration

### 2. UI Components (`src/components/*`)
- **Navbar:** Sticky navigation with logo and smooth scroll links
- **Footer:** Quick links, copyright, social media
- **Team Cards:** Professional display of team members
- **Feature Cards:** Highlighting face, voice, and social pillars
- **Timeline Cards:** Milestones with connecting lines
- **Architecture Nodes:** Visual representation of system architecture

### 3. Styling & Animation (`src/globals.css`)
- **Base Theme:** Dark mode (`#050512` primary, `#f2f2f6` text)
- **Glassmorphism:** `backdrop-blur-xl`, `bg-white/5`
- **Animations:** Custom `@keyframes` for fade-in, slide-in, pulse, glow, float

## 🔧 Customization

To update team members:
- Edit `src/app/about/page.tsx`
- Replace images in `public/` and update paths

To change colors or styles:
- Edit `tailwind.config.ts` for theme variables
- Edit `src/globals.css` for custom animations and utility classes

To modify pages:
- Edit the respective files in `src/app/`

## 📸 Media Assets

All images are located in `public/`:
- `hero.png` — Main hero image
- `navin.png` — Team member photos
- `nipun.png` — Supervisor photo
- `thilini.png` — Advisor photo
- `nomin.jpeg` — Advisor photo

## 🤝 Contributing

1. Create a new branch for your changes
2. Edit the relevant files
