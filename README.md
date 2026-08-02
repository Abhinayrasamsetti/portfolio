# Abhinay Rasamsetti — Portfolio

A React + Vite portfolio site, styled as a systems-monitoring dashboard (uptime counters,
status nodes, service logs) to match an infrastructure/DevOps background.

## 1. Run it locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## 2. Put it on GitHub

1. Create a new **public** repo on GitHub. If you want the site at
   `https://Abhinayrasamsetti.github.io/portfolio`, name the repo `portfolio`.
   (You can pick a different name — just update `base` in `vite.config.js` and
   `homepage` in `package.json` to match, e.g. `/my-repo-name/`.)
2. Push this folder to that repo:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/Abhinayrasamsetti/portfolio.git
git push -u origin main
```

## 3. Deploy to GitHub Pages (free hosting)

This project already includes the `gh-pages` package and a `deploy` script.

```bash
npm run deploy
```

This builds the site and pushes the `dist/` folder to a `gh-pages` branch.

Then on GitHub:
1. Go to your repo → **Settings** → **Pages**.
2. Under "Build and deployment", set **Source** to `Deploy from a branch`.
3. Set **Branch** to `gh-pages` / `root`, then **Save**.
4. Wait a minute, then visit `https://Abhinayrasamsetti.github.io/portfolio`.

Every time you update content and want to republish, just run `npm run deploy` again.

## 4. Editing your content

All resume content lives in `src/components/`:

| File | What it holds |
|---|---|
| `Hero.jsx` | Name, tagline, summary, top stats |
| `About.jsx` | Three "what I run" summary panels |
| `Experience.jsx` | Work history (the `ROLES` array) |
| `Skills.jsx` | Technical skills by category (the `CATEGORIES` array) |
| `Certifications.jsx` | Certifications and key accomplishments |
| `Education.jsx` | Degrees |
| `Footer.jsx` | Contact links |

Colors, fonts, and spacing are all defined as CSS variables at the top of `src/index.css`
under `:root` — change `--signal` (the green accent) or `--alert` (amber) to reskin the
whole site from one place.

## 5. Custom domain (optional)

If you buy a domain later, add a `CNAME` file to `public/` containing just your domain
(e.g. `abhinayrasamsetti.dev`), point your domain's DNS to GitHub Pages, and set it in
repo Settings → Pages → Custom domain.
