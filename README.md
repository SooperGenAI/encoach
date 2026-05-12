# Encoach.ai — Website

The official website for [Encoach.ai](https://encoach.ai), the workforce enablement layer for AI-enabled finance operations.

## Stack

- **[Hugo Extended](https://gohugo.io/)** (≥ 0.160) — static site generator
- **[Tailwind CSS v4](https://tailwindcss.com/)** — via Hugo's native `css.TailwindCSS` pipeline
- **GitHub Pages** — hosting, custom domain `encoach.ai`

No PostCSS, no JS framework, no build orchestrator. Hugo's asset pipeline is the build.

## Local development

```bash
npm install        # installs @tailwindcss/cli only
npm run dev        # hugo server with live reload at http://localhost:1313
npm run build      # production build into ./public
```

## Project structure

```
.
├── assets/css/main.css     # Tailwind entry + design tokens (@theme)
├── content/                # Markdown content for each page
├── data/                   # Structured content (home.yaml, nav.yaml, site.yaml)
├── layouts/
│   ├── _default/           # baseof, single, list
│   ├── index.html          # Homepage template (composes section partials)
│   └── partials/
│       └── sections/       # Reusable homepage sections
├── static/                 # Files served as-is (CNAME, favicon, robots)
├── .github/workflows/      # GitHub Pages deployment
└── hugo.toml               # Hugo config
```

## Editing content

- **Homepage copy** → `data/home.yaml`
- **Page copy** → `content/*.md`
- **Navigation** → `data/nav.yaml`
- **Brand strings** → `data/site.yaml` and `hugo.toml` `[params]`

Template changes are rarely needed — most updates are content edits.

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds with Hugo Extended and deploys to GitHub Pages via `actions/deploy-pages`. Custom domain configured via `static/CNAME`.
