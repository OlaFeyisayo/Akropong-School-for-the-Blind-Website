# Akropong School for the Blind — Website

A modern, accessible website for **Akropong School for the Blind**, Ghana — a
school that educates blind and visually impaired children.

Built with **React + Vite + Tailwind CSS v4** and `lucide-react` icons.
Motto: _“Disability is not inability.”_

## Run it

```bash
npm install     # install dependencies
npm run dev     # start the dev server (http://localhost:5173)
npm run build   # production build → dist/
npm run preview # preview the production build
```

Requires Node 18+.

## What you should replace

Everything below is clearly marked in the code:

1. **Formspree endpoint (contact form delivery)** — `src/components/Contact.jsx`, the
   constant `FORMSPREE_ENDPOINT` at the top of the file.
   - Create a free form at <https://formspree.io>, then paste your endpoint
     (e.g. `https://formspree.io/f/abcdwxyz`).
   - **If left empty**, the form falls back to opening the visitor's own email app
     (`mailto:`) with the message pre-filled, addressed to the school.
2. **Bank / Mobile-Money details** — `src/components/Donate.jsx`. Replace the two
   `[ to be added ]` placeholders with the real bank transfer and MoMo details.
3. **Photos** — `public/images/` (`school-event.jpg`, `dining-hall.jpg`,
   `student-portrait.jpg`). Swap in your own images, keeping the same file names
   (or update the `src` + `alt` text in `Hero.jsx` and `About.jsx`).
4. **Contact details** — phone and email are constants at the top of
   `src/components/Contact.jsx` (and repeated in `Footer.jsx`).

## Accessibility

This is a school for the blind, so accessibility is treated as critical:

- WCAG AA+ colour contrast in both light and dark themes
- Skip link, visible focus rings, semantic landmarks and ordered headings
- Labelled form fields, inline errors, focus moves to the first invalid field,
  and screen-reader status announcements (`aria-live`)
- `aria-label`s on icon-only buttons; decorative icons hidden from assistive tech
- `prefers-reduced-motion` respected
- No horizontal scroll down to 375px width at 160% text size
- A floating **Accessibility** widget (bottom-right) to resize text (90%–160%)
  and switch Light/Dark themes — both saved to `localStorage` and restored on load

## Project structure

```
index.html                 # entry + pre-paint theme/text-size restore
src/
  index.css                # Tailwind v4 @theme tokens (light) + dark overrides
  App.jsx                  # layout + theme/text-size state
  components/
    Logo.jsx               # inline SVG logo (sun + open book + Braille cell)
    Nav.jsx  Hero.jsx  Stats.jsx  About.jsx  Programs.jsx
    Admissions.jsx  Donate.jsx  Contact.jsx  Footer.jsx
    AccessibilityWidget.jsx
public/
  images/                  # school photos
  favicon.svg
```

## Deploy

Any static host works. On **Netlify** or **Vercel**: build command `npm run build`,
publish directory `dist`.
