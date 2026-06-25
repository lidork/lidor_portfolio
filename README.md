# Lidor's Portfolio

Personal portfolio website built with React, TypeScript, and Vite.

Check it out here: lidorkalfon.com
## Tech Stack

- **React 19** + **TypeScript**
- **Vite** — dev server and build tool
- SVG icons rendered via CSS `mask-image` (no icon library)

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

## Build

```bash
npm run build
```

Output goes to `dist/`.

## Project Structure

```
src/
  components/
    icons/              # MaskIcon base + named icon exports + skillIcons map
    sections/           # About, Resume, Portfolio, SkillsSection, ProjectDetailModal
    Sidebar.tsx
    NavigationTabs.tsx
  config/
    assets.ts           # Image/file paths
    links.ts            # External URLs (GitHub, LinkedIn, CV, projects)
    projects.ts         # Project data
    resume.ts           # Resume content
  hooks/
    useTabTransition.ts
  utils/
    analytics.ts
  App.tsx
  main.tsx
  App.css
public/
  assets/
    images/             # Photos, project screenshots, og-image
    icons/              # SVG icon files
    files/              # Downloadable files (CV)
  CNAME                 # Custom domain (lidorkalfon.com)
  favicon.svg
  icons.svg
  llms.txt              # LLM-readable profile
  robots.txt
  sitemap.xml
```
