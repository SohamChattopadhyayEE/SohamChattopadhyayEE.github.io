# Running Locally & Deploying

This is a static site (plain HTML/CSS/JS, no build step). It's hosted on
**GitHub Pages** from the `master` branch of
`SohamChattopadhyayEE/SohamChattopadhyayEE.github.io`.

## 1. Run locally to preview changes

You just need a local web server (opening `index.html` directly via
`file://` can break relative fetches like `js/data.js`).

Pick whichever you have installed:

```bash
# Python 3 (usually preinstalled on Linux/Mac)
python3 -m http.server 8000

# Node (if you have it)
npx serve .
```

Then open **http://localhost:8000** in your browser.

Check:
- The page(s) you edited render correctly.
- Any new content added via `js/data.js` shows up (News, Projects,
  Publications, Patents, Recommendations sections).
- Links between pages (Home ↔ News ↔ Projects ↔ Publications ↔ Patents ↔
  Recommendations) still work.
- No errors in the browser console (F12 → Console tab).

Stop the server with `Ctrl+C` when done.

## 2. Push changes to deploy

GitHub Pages auto-deploys whatever is pushed to `master` — there's no
separate build/deploy step to run.

```bash
git status                 # see what changed
git add <files>            # stage the specific files you changed
git commit -m "Describe the change"
git push origin master
```

Once pushed, GitHub Pages rebuilds automatically. The live site updates at:

**https://sohamchattopadhyayee.github.io/**

It usually takes **under a minute**, occasionally up to a few minutes.
You can check deploy status under the repo's **Actions** tab on GitHub
(look for the "pages build and deployment" workflow) or **Settings →
Pages**.

## Notes

- Most content edits (news, projects, publications, patents,
  recommendations) only require editing `js/data.js` — no HTML changes
  needed.
- The recommendation form (`recommend.html`) submits via Formspree →
  Cloudflare Worker → GitHub Actions, which auto-commits new entries to
  `js/data.js`. See `cloudflare-worker.js` and
  `.github/workflows/` for that pipeline; it's separate from manual
  deploys above.
