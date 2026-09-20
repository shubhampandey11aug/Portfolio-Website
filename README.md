# Data & AI Engineering Portfolio

A fast, static portfolio website for a data and AI engineer working in renewable energy. There is no framework and no build step: open `index.html` in a browser, or host the folder anywhere. All content lives in one file, `config.js`, so you can update it without touching the page code.

![Portfolio home page](docs/screenshot.png)

**Live site:** `https://<your-username>.github.io/<repo-name>/` (replace after you deploy)

## Features

- **Renewable energy data and AI platform explorer.** An interactive architecture diagram in the hero: sources, ingestion, a Bronze / Silver / Gold lakehouse, an intelligence layer (forecasting, anomaly detection, rules, a GenAI agent) and decisions. Four scenarios light up the path and show a matching panel. All figures are simulated.
- **Skills broadcast.** A single scrolling line of data and AI skills under the hero. It pauses on hover and becomes a static list for visitors who prefer reduced motion.
- **About, Skills, Projects, Resume and Contact** sections, with a timeline and certifications.
- **Click-to-filter skills.** Selecting a skill shows the projects that use it.
- **Case studies.** Each project has its own page with a pipeline diagram, the problem, what was built, design decisions, a takeaway and a step-by-step screenshot walkthrough with a lightbox (keyboard and Previous / Next).
- **Light and dark theme** with a toggle. The first visit follows the system setting, and the choice is remembered.
- **Resume and profile photo** in fitting places, with graceful fallbacks when files are missing.
- **Accessible and responsive.** Skip link, keyboard navigation, visible focus, reduced-motion support, and a layout that works on phones.

## Project structure

```
.
├── index.html          the page (layout, styles, logic). Rarely needs editing
├── config.js           ALL your content: text, skills, projects, links
├── images.js           optional list of files in /images (made by update-images.bat)
├── update-images.bat   Windows helper that rebuilds images.js
├── resume.pdf          your resume (add this)
├── images/             profile photo, project covers and screenshots
└── docs/screenshot.png picture used in this README
```

## Run it locally

Double-click `index.html`. No server or install is needed.

If you edit `config.js` and the page does not change, hard-refresh with `Ctrl + Shift + R`. The footer shows a "site build" number so you can confirm which version is loaded.

## Edit your content (`config.js`)

Open `config.js` in any text editor. Change only the text between the quotes, and keep the commas and brackets.

| Field | What it controls |
|---|---|
| `name`, `location` | Nav brand, page title, portrait caption |
| `headline`, `lead` | Hero heading and the line under it |
| `email`, `linkedin`, `github` | Contact links (leave `""` to hide one) |
| `about`, `facts`, `experience` | About section and timeline |
| `certifications` | Badges with a status such as "In progress". Use `[]` to hide the block |
| `skills` | Skill groups. Names in the first two groups must match project `stack` names exactly to enable click-to-filter |
| `ticker` | Items in the scrolling skills line |
| `projects` | The case studies (see below) |
| `showBuildInfo` | Set to `false` to hide the small build note in the footer |

### Add a project

Copy one whole `{ id: ... }` block inside `projects`, paste it after the last one (with a comma between blocks) and change:

- `id`: short lowercase name with hyphens. It is also used in image file names.
- `title`, `sector`, `category`, `summary`
- `stack`: tools used
- `flow`: the steps the data moves through (steps containing Bronze, Silver or Gold get their own colour)
- `problem`, `built`, `decisions`, `takeaway`: the write-up

The card, project page, filters and skill counts update automatically.

## Images

Put images in `images/`. png, jpg, jpeg, webp, gif and avif work, in any letter case.

| File | Used for |
|---|---|
| `profile.png` | Portrait in the hero |
| `<project-id>-cover.png` | Card image on the home page |
| `<project-id>-1.png`, `-2.png`, `-3.png` ... | Screenshots for the project page, in order, any number |

`<project-id>` is the project's `id` in `config.js`, for example `global-listing-intelligence-cover.png`.

Missing images are fine: cards show a pipeline diagram, the portrait shows your initial, and projects without screenshots hide that section.

### Captions and custom file names

- Add captions in a project with `shots: ["Pipeline canvas", "Audit table"]`. Images without a caption show "Step n".
- If your files are named differently, set them directly in the project:

  ```js
  cover: "images/my-cover.png",
  gallery: [
    { src: "images/a.png", caption: "Landing zone" },
    { src: "images/b.png", caption: "Merge into Silver" }
  ],
  ```

### If an image does not appear

1. Open the site with `?debug` at the end (`index.html?debug`). A panel lists what was found for each project and which image files match no project.
2. On Windows, double-click `update-images.bat`, then reload. It writes `images.js`, and the page then matches names loosely: any case, spaces or underscores, the project id or full title, a doubled extension (`.png.png`), and subfolders named after the project.
3. Or set `cover` / `gallery` in `config.js` as shown above.

Run `update-images.bat` again whenever you add or rename images, and commit the new `images.js`.

## Deploy

The site is plain HTML, CSS and JavaScript, so any static host works.

### GitHub Pages

1. Create a repository and upload every file and folder from this project (keep `index.html` in the top level).
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then **Save**.
4. After a minute, the site is live at `https://<your-username>.github.io/<repo-name>/`.

GitHub Pages is case-sensitive, so file names must match exactly (the image finder also tries upper-case extensions). Commit `resume.pdf`, `images/` and `images.js` along with the rest.

### Netlify (no code)

Drag the project folder onto [app.netlify.com/drop](https://app.netlify.com/drop) for an instant public link.

### Cloudflare Pages

Connect the repository, leave the build command empty and set the output directory to `/`.

## Browser support

Current versions of Chrome, Edge, Firefox and Safari. The page uses Google Fonts; if they cannot load, it falls back to system fonts.

## Notes on the content

- The platform explorer in the hero is an illustrative reference architecture with simulated data, and it says so on the page.
- Case-study write-ups are drafts. Edit them so they describe exactly what you built.
- Certifications marked "In progress" should stay that way until they are earned.

## License

Add the license you prefer (for example MIT) as a `LICENSE` file. If you reuse this template, keep your own content, images and resume out of any public fork you do not own.
