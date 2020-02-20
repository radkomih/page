Static resume site built with plain HTML, CSS, JS

- `npm run dev` - serves the source files locally
- `npm run build` - writes the static site to `public/`
- `npm run preview` - serves the built `public/` output
- `npm run pdf` - builds the site and exports `public/cv.pdf` with Chrome or Chromium

CSS cache busting: increment the version in `index.html` (for example,
`src/styles.css?v=3`) whenever you deploy CSS changes.
