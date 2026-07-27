# Amarjit Singh Sodhi — Portfolio

A single-page React portfolio generated from the resume, styled as a dark,
IDE-inspired console (Kotlin purple + Android green accents on a code-editor
dark background).

## Structure

```
portfolio/
├── index.html            # Vite HTML entry
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx           # React entry point
│   ├── App.jsx             # Root component
│   ├── index.css           # Design tokens + all styles
│   ├── data/
│   │   └── resumeData.js   # All resume content as structured data
│   └── components/
│       ├── Hero.jsx
│       ├── TabBar.jsx
│       ├── Summary.jsx
│       ├── Experience.jsx
│       ├── Projects.jsx
│       ├── Skills.jsx
│       ├── Education.jsx
│       └── Footer.jsx
```

## Run locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Static output goes to `dist/` — deploy it anywhere that serves static files
(Vercel, Netlify, GitHub Pages, etc.).

## Editing content

All resume text lives in `src/data/resumeData.js` — update names, roles,
bullet points, skills, or project links there; the layout will update
automatically.
