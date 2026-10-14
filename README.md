# BOVA — Beyond the Source

A lightweight, responsive landing page for the BOVA research initiative, designed in the Midnight Violet visual identity.

## Features

- Plain HTML, CSS and JavaScript; no dependencies or build step.
- Mobile-friendly, accessible navigation and reduced-motion support.
- English / Russian language toggle, saved locally in the browser.
- Brand-first design with inline vector graphics, reusable for future projects.
- Actual links to BOVA's existing GitHub profile, research repository and research story.
- No speculative public releases or misleading project statistics.

## Publish with GitHub Pages

1. Create a **public** repository called **`AllodsBova.github.io`** under the **AllodsBova** account.
2. Upload **all files and the `assets` folder** from this directory to the repository root on the `main` branch. Include `index.html`, `styles.css`, `script.js`, `assets/favicon.svg` and `.nojekyll`.
3. Open repository **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**, `main`, `/(root)`, and click **Save**.
5. Once GitHub Pages has published the site, visit **https://allodsbova.github.io/**. Initial publication can take several minutes.

## Local preview

You can open `index.html` directly or serve the folder locally:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Notes

- The Open Graph image references the existing public BOVA GitHub banner via GitHub raw media URL.
- The hero diagram is an abstract **concept**, not a functional model viewer, and does not depict a released tool.
- There are no tracking scripts or external JavaScript dependencies.
- All links are intentional and point to public BOVA resources.
