# Carlos — personal site

Static multipage site. Short pages, clear navigation, no endless scrolling.

## Sections

| Page | Content |
| --- | --- |
| `index.html` | Home / site map |
| `projects.html` | Software (Atlas, etc.) |
| `research.html` | Mathematical research |
| `publications.html` | Papers and preprints |
| `art.html` | Art projects |
| `photos.html` | Photos |

## View locally

```bash
python3 -m http.server 5173
```

Open `http://localhost:5173`.

## Publish on the internet

Easiest free option: **Cloudflare Pages**, **Netlify**, or **GitHub Pages**.

### Option A — Netlify Drop (fastest, no Git)

1. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the whole `TutoWS` folder onto the page
3. You get a public URL like `https://something.netlify.app`

### Option B — GitHub Pages

1. Create a GitHub repo and push this folder
2. In the repo: **Settings → Pages → Deploy from branch → `main` / root**
3. Site URL: `https://YOUR_USERNAME.github.io/REPO_NAME/`

### Custom domain

After deploying, add your domain in the host’s DNS settings (e.g. `carlos.com`).
