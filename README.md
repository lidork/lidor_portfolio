# Lidor's Portfolio

Personal portfolio website built with React, TypeScript, and Vite.

Check it out here: https://lidork.github.io/lidor_portfolio/

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
    icons/          # MaskIcon base + named icon exports
    sections/       # About, Resume, Portfolio page components
    Sidebar.tsx
    NavigationTabs.tsx
  config/
    assets.ts       # Image/file paths
    links.ts        # External URLs (GitHub, LinkedIn, CV, projects)
  App.tsx
  main.tsx
  App.css
public/
  assets/
    images/         # Photos and project screenshots
    icons/          # SVG icon files
    files/          # Downloadable files (CV)
```
