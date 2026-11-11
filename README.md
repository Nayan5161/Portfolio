<<<<<<< HEAD
# Nayan Gaikwad — Portfolio
React + Vite + Tailwind v4. Content lives in `src/data/site.ts`.

## Run locally
    pnpm install
    pnpm dev        # dev server
    pnpm build      # production build in dist/

## Deploy
GitHub Pages deploys automatically when changes are pushed to `main`. In the repository, open **Settings → Pages** and set the build and deployment source to **GitHub Actions**. The workflow builds the site and publishes `dist/`.

The site is static on GitHub Pages. Backend `/api` features are not hosted there; the contact form uses its email-draft fallback unless `VITE_FORM_ENDPOINT` is configured. The canonical and social preview URLs in `index.html` assume the repository is named `nayan-portfolio`.

To publish this project, create a public repository named `nayan-portfolio` under your GitHub account, then push this branch:

    git remote add origin https://github.com/Nayan5161/nayan-portfolio.git
    git push -u origin main

## Contact form
Without configuration the form validates and opens a mailto draft to nayangaikwad5161@gmail.com.
For server-side delivery set `VITE_FORM_ENDPOINT` (a JSON POST endpoint such as a Formspree form URL) in `.env` or your host's environment settings and rebuild.
=======
# Portfolio
>>>>>>> c0d0684d5f0e9ec952e9c8d1e3ac8804f8deac50

