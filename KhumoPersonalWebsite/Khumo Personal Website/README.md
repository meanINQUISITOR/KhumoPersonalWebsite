# [Your Name] — IT Portfolio

A responsive personal portfolio website built for internship and learnership applications
in IT. Plain HTML/CSS/JS — no build step, no dependencies, deploys anywhere for free.

**Live site:** [add your deployed URL here once live]

---

## 1. What's in this repo

```
portfolio/
├── index.html      All page content (Home, About, Skills, Projects, Education,
│                    Certifications, Experience, Contact)
├── styles.css       All styling — colors, typography, layout, responsive rules
├── script.js        Mobile nav toggle, footer year, hero typing effect
├── assets/
│   ├── cv.pdf        <- put your real CV here
│   └── profile.jpg   <- optional headshot
└── README.md
```

## 2. Customize it (do this first)

1. Open `index.html` in a text editor (VS Code recommended).
2. Search for square brackets like `[Your Name]`, `[Project One Title]`,
   `[your.email@example.com]` — replace every one with your real information.
3. In the **Projects** section, keep at least 3 real projects. For each one, write what it
   does, the problem it solves, the technologies you used, and link to the live demo and
   source code (usually a GitHub repo).
4. In **Skills**, remove any technology you don't actually know and add ones you do —
   be honest, employers will ask about anything listed here.
5. In **Education** and **Experience**, update the timeline entries. If you have no formal
   work experience yet, you can relabel that section "Volunteering" or remove it —
   it's marked optional in the brief.
6. In **Contact**, update the email, GitHub, and LinkedIn links (three places: the Contact
   section and the footer).
7. Replace `assets/cv.pdf` with your actual CV (keep the filename, or update the two
   `href="assets/cv.pdf"` links in `index.html` if you rename it).
8. Optional: add a real headshot at `assets/profile.jpg` and reference it in the About
   section if you'd like a photo.
9. In `script.js`, edit the `phrases` array (around line 25) to describe what you build —
   this text cycles in the hero heading.

Open `index.html` directly in a browser to preview your changes before deploying.

## 3. Deploy it (pick one — all are free)

### Option A: GitHub Pages
1. Create a new GitHub repository and push this folder to it:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/<yourusername>/<repo-name>.git
   git push -u origin main
   ```
2. On GitHub: go to **Settings → Pages**.
3. Under "Build and deployment", set **Source** to "Deploy from a branch", branch `main`,
   folder `/ (root)`. Save.
4. Your site will be live at `https://<yourusername>.github.io/<repo-name>/` within a
   few minutes.

### Option B: Netlify
1. Go to [app.netlify.com](https://app.netlify.com) and sign in with GitHub.
2. Click **Add new site → Import an existing project**, pick this repo.
3. Leave build settings blank (no build command, publish directory `/`). Deploy.
4. Netlify gives you a live URL immediately; you can rename it or add a custom domain
   under **Site settings → Domain management**.

### Option C: Vercel
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **Add New → Project**, import this repo.
3. Framework preset: "Other" (static site). No build command needed. Deploy.

## 4. Before you submit / share this with employers

- [ ] Every `[bracketed placeholder]` in `index.html` has been replaced
- [ ] At least 3 real projects with working demo/source links
- [ ] CV is a real PDF at `assets/cv.pdf` and the download buttons work
- [ ] Email, GitHub, and LinkedIn links point to your real profiles
- [ ] Tested on a phone (or Chrome DevTools device toolbar) — nav, buttons, and text
      all work at narrow widths
- [ ] Spelling and grammar checked — read it out loud once
- [ ] Site is actually deployed and the live link works in a private/incognito window

## 5. Design notes (for explaining your decisions)

- **Typography:** Space Grotesk for headings (technical, geometric — fits an IT/dev
  identity without leaning on a generic tech font), Inter for body text (highly legible
  at small sizes), JetBrains Mono for tags and small data labels (nods to code without
  overusing it).
- **Color:** a muted paper background instead of pure white, a deep forest green as the
  single accent color (used for links, the section rule, stats, and CTA button), with a
  small amount of ochre/gold reserved for certifications and the contact section — keeps
  the palette calm and avoids looking like a generic template.
- **Layout:** left-aligned throughout, projects and timeline items use borders and
  numbering instead of drop-shadow cards, and the hero has a faint blueprint-style grid
  in the background as a nod to technical/engineering work.
- **Motion:** one deliberate animation (the typing effect in the hero); everything else
  is static, and all motion respects `prefers-reduced-motion`.

Feel free to change any of this — it's a starting point, not a fixed template.
