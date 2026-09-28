# Dilekha Palihawadana — Portfolio

A single-page portfolio built with **React 18**, **Vite**, and **Tailwind CSS**.
Sections: Home (hero/intro), About (experience, education & skills), Projects,
Contact, Footer — plus a sticky nav with a scroll-spy active indicator, a
light/dark/system theme dropdown persisted with Redux, a tech-stack marquee, calm on-scroll reveal
animations, and a preloader.

## 1. Setup

Requires Node.js 18+.

```bash
npm install
npm run dev        # starts a local dev server (usually http://localhost:5173)
```

Other scripts:

```bash
npm run build       # production build → dist/
npm run preview     # preview the production build locally
npm run lint         # run ESLint
```

## 2. Project structure

```
Frontend/
├── asset/
│   └── ProfilePicture.jpg        # the photo used in the hero card
├── public/
│   └── Dilekha_Palihawadana_CV.pdf   # keep this exact filename, or update profile.cvFileName
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # sticky nav, scroll-spy active dot, theme toggle, mobile menu
│   │   ├── Hero.jsx          # intro: photo card + headline + availability + CV download + ticker
│   │   ├── Marquee.jsx       # generic infinite-scroll strip (used by Hero + TechMarquee)
│   │   ├── TechMarquee.jsx   # scrolling row of every skill in portfolioData, with brand icons
│   │   ├── About.jsx         # Experience + Education timeline, plus the full skills toolkit
│   │   ├── Projects.jsx      # project cards with cover image, tags, code/live links
│   │   ├── Contact.jsx       # contact form + location/availability/email/social info card
│   │   ├── Footer.jsx
│   │   ├── ThemeDropdown.jsx # light / dark / system dropdown (Redux-powered)
│   │   ├── ThemeSync.jsx     # applies the persisted theme to <html>, follows OS changes
│   │   ├── Loader.jsx        # preloader shown briefly on first load
│   │   └── Reveal.jsx        # wraps content to fade/rise in once when scrolled into view
│   ├── store/
│   │   ├── index.js          # Redux store + redux-persist (localStorage)
│   │   └── themeSlice.js     # theme mode: 'light' | 'dark' | 'system'
│   ├── hooks/
│   │   └── useInView.js      # IntersectionObserver hook backing Reveal
│   ├── data/
│   │   ├── portfolioData.js  # ⭐ ALL editable content lives here — untouched by this redesign
│   │   └── techIcons.js      # technology name → icon + brand colour (marquee + Skills & toolkit)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css             # theme tokens (CSS variables) + shared component classes
├── index.html                 # fonts + no-flash theme-init script
├── tailwind.config.js
└── package.json
```

## 3. Updating content

Everything — name, role, bio, education, skills, work history, projects, and
contact links — is defined in **`src/data/portfolioData.js`**. Edit the values
there; no component code needs to change. For example, to add a project,
append an object to the `projects` array:

```js
{
  id: 'proj-5',
  title: 'Your Project',
  description: 'One or two sentences on what it does and why it matters.',
  image: '/path-or-url-to-screenshot.jpg',
  tech: ['React', 'Node.js'],
  github: 'https://github.com/you/project',
  live: 'https://your-demo-url.com', // or null if there isn't one
}
```

New entries in `skills` are picked up automatically by the tech-stack marquee;
if you add a technology that isn't in `src/data/techIcons.js`, it falls back to
a generic icon — add a proper `react-icons` entry for it there.

## 4. Theme system

The theme mode (`light`, `dark` or `system`) lives in a Redux slice
(`src/store/themeSlice.js`) and is persisted to `localStorage` with
**redux-persist** (key `persist:root`, whitelisting only `theme`). The navbar's
`ThemeDropdown` dispatches `setTheme`, and `ThemeSync` keeps the `dark` class on
`<html>` in sync — including following OS changes while in `system` mode. A
small inline script in `index.html` reads the persisted value before React
mounts, so there is no flash of the wrong theme on reload.

All colors are defined once as CSS variables in `src/index.css` (`:root` for
light, `html.dark` for dark) and exposed as Tailwind tokens (`bg-canvas`,
`text-ink`, `text-mist`, `bg-accent`, `border-line`, etc.) in
`tailwind.config.js` — re-theme the whole site by editing the variables in one
place.

## 5. Replacing the photo and CV

- Swap `asset/ProfilePicture.jpg` for your own photo (same filename), or
  update the import path in `Hero.jsx`.
- Drop your real PDF into `public/`, keeping the filename
  **`Dilekha_Palihawadana_CV.pdf`** (or update `profile.cvFileName` in
  `portfolioData.js`). The "Download CV" buttons already point at
  `/${profile.cvFileName}` with the `download` attribute.

## 6. Contact form

`Contact.jsx` posts to `${VITE_API_URL}/api/contact` (see `.env`). Point
`VITE_API_URL` at your own backend, or swap the `fetch` call for a service
like Formspree or EmailJS if you'd rather not run a backend.

## 7. Deployment

The build output (`npm run build`) is static and deploys anywhere that serves
static files:

- **Vercel / Netlify**: connect the repo, build command `npm run build`,
  output directory `dist`.
- **GitHub Pages**: build, then push the `dist/` folder to a `gh-pages`
  branch (or use an action like `peaceiris/actions-gh-pages`).

## 8. Motion & accessibility notes

- Section entrances use a small `IntersectionObserver` hook (`useInView`) via
  the `Reveal` component — content fades and rises into place once, the first
  time it's scrolled into view. The hero is intentionally excluded (it fades
  in on mount instead) since it's above the fold from the start.
- `prefers-reduced-motion: reduce` is respected globally — animations
  collapse to near-instant and reveals render in their final state
  immediately.
- Navigation uses plain anchor links (`href="#section-id"`) with CSS
  `scroll-behavior: smooth` and `scroll-margin-top` (set in `index.css`) so
  the sticky nav never overlaps a section heading.
