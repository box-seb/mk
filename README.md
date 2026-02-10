# MegKowalew Portfolio (GitHub Pages)

This is a lightweight, modern static site (HTML/CSS/JS) designed for GitHub Pages.

## What’s included
- `index.html` (About / home)
- `work.html` (Work + Skills + Outcomes + More)
- `contact.html` (No form; click-to-reveal email/phone; prominent CV download)
- `assets/` (CSS/JS, placeholder images, and your CV PDF)

## Quick customise
1. **Photo**
   - Add `assets/profile.jpg` and change the `<img>` src from `profile-placeholder.svg` to `profile.jpg`
2. **LinkedIn**
   - Update the placeholder URL in `contact.html`
3. **Content**
   - Edit the text in `index.html` and `work.html` to match your preferred narrative
4. **Phone/email obfuscation**
   - Values are stored as character codes in `assets/main.js`.
   - Update the codes if you change contact details.

## Publish on GitHub Pages (Project Pages)
1. Create a new repo (e.g. `portfolio`)
2. Upload the files to the repo root.
3. In GitHub: Settings → Pages → Build and deployment:
   - Source: `Deploy from a branch`
   - Branch: `main` / root
4. Your site will be available at:
   - `https://<username>.github.io/<repo>/`

## Publish on GitHub Pages (User site)
1. Create a repo named exactly: `<username>.github.io`
2. Upload files to the repo root.
3. GitHub Pages will serve it from:
   - `https://<username>.github.io`
