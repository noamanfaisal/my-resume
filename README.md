# my-resume

Personal portfolio / project-bank site, data-driven from plain markdown files.
Deployed via Vercel from this GitHub repo.

## How it works

```
resume-data/*.md   →   scripts/parse-data.js   →   src/data/data.json   →   React renders it
   (you edit this)         (runs automatically)        (generated, don't edit by hand)
```

Edit the markdown files in `resume-data/` — that's the only thing you should ever need
to touch to update content. The parser runs automatically before `dev` and `build`.

| File | Content |
|---|---|
| `resume-data/personal-info.md` | Name, contact, summary |
| `resume-data/projects.md` | All projects (the main "project bank") |
| `resume-data/experience.md` | Work history |
| `resume-data/skills.md` | Skills by category |
| `resume-data/education.md` | Degrees / programs |
| `resume-data/certificates.md` | Certifications |
| `resume-data/articles.md` | Articles / publications |
| `resume-data/social-links.md` | LinkedIn, GitHub, etc. |

## Running locally with Docker (recommended — no Node install needed)

```bash
docker compose up --build
```

Then open **http://localhost:5173** in your browser. Hot reload is on — edit any
`.md` file or any React component and the page updates automatically.

Stop it with:
```bash
docker compose down
```

## Running locally without Docker (if you have Node 18+ installed)

```bash
npm install
npm run dev
```
Opens on http://localhost:5173 by default.

To test the actual production build before pushing:
```bash
npm run build
npm run preview
```

## Deploying

Push to GitHub → Vercel auto-builds and deploys (no Docker involved on Vercel's side —
Docker here is only for your local dev environment).

```bash
git add .
git commit -m "Update resume data"
git push
```

## Regenerating data.json manually

Normally automatic, but if you ever need to run it by hand:
```bash
npm run parse-data
```
