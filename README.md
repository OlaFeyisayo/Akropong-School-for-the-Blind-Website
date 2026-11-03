# Akropong School for the Blind — Website

A modern, accessible website for **Akropong School for the Blind**, Ghana — a
school that educates blind and visually impaired children.

Built with **React + Vite + Tailwind CSS v4** and `lucide-react` icons.
Motto: _“Disability is not inability.”_

**Design:** a glassmorphism + parallax look (frosted-glass panels over photos
that drift as you scroll) in a navy / light-blue / white / gold palette, with the
official school crest as the logo.

## Run it

```bash
npm install     # install dependencies
npm run dev     # start the dev server (http://localhost:5173)
npm run build   # production build → dist/
npm run preview # preview the production build
```

Requires Node 18+.

## What you can change

Everything below is clearly marked in the code:

1. **Contact email** — `SCHOOL_EMAIL` near the top of `src/components/Contact.jsx`
   (currently `akropongblind@yahoo.com`). When the contact form is submitted it
   opens the visitor's own email app with the message pre-filled and addressed to
   this email — no third-party service is used. Change the constant to update
   where messages go. The email also appears in the footer (`Footer.jsx`).
2. **Phone number** — `SCHOOL_PHONE_DISPLAY` and `SCHOOL_PHONE_TEL` in
   `src/components/Contact.jsx` (currently `055 351 1126`). Shown on the Contact
   page and footer. The Donate page's "contact us on …" number is in
   `src/components/Donate.jsx`.
3. **Photos** — `public/images/`. Swap in your own images (keep the same file
   names, or update the `src` + `alt` text in `Hero.jsx`, `About.jsx` and
   `Events.jsx`). The location links (contact card + footer) open the school on
   **Google Maps**.
4. **Logo** — `public/images/logo.webp` (the official school crest). Used in the
   header, footer and as the favicon.
5. **Events gallery link** — `GALLERY_URL` in `src/components/Events.jsx` points
   to the full photo album.
6. **Awards** — `src/components/Awards.jsx` holds the achievements (Goalball,
   Braille Literacy Competition, choral festival).

## Contact & donations

- **Contact form:** opens the visitor's email app addressed to the school
  (`SCHOOL_EMAIL`), with validation and screen-reader status messages.
- **Donate:** the Donate page invites visitors to call the school's number to
  give (tap-to-call), rather than online payment.

## Accessibility

This is a school for the blind, so accessibility is treated as critical:

- WCAG AA+ colour contrast in both light and dark themes
- Skip link, visible focus rings, semantic landmarks and ordered headings
- Labelled form fields, inline errors, focus moves to the first invalid field,
  and screen-reader status announcements (`aria-live`)
- `aria-label`s on icon-only buttons; decorative icons hidden from assistive tech
- `prefers-reduced-motion` respected (parallax motion turns off automatically)
- No horizontal scroll down to 375px width at 160% text size
- A floating **Accessibility** widget (bottom-right) to resize text (90%–160%)
  and switch Light/Dark themes — both saved to `localStorage` and restored on load
  (high-contrast is available via the Dark/contrast settings for anyone who needs
  solid, strong-contrast backgrounds)

## Pages

The site has separate pages, each with its own URL:
`/` (home), `/about`, `/programs`, `/admissions`, `/events`, `/donate`,
`/contact`, plus a 404 page. Routing is handled client-side with React Router;
`public/_redirects` ensures a direct visit or refresh of any URL still loads
correctly on Netlify.

## Project structure

```
index.html                 # entry + pre-paint theme/text-size restore
src/
  index.css                # Tailwind v4 @theme tokens + dark/glass styles
  App.jsx                  # routes (React Router) + theme/text-size state
  main.jsx                 # BrowserRouter mount
  pages/                   # one file per page/URL
    Home.jsx  AboutPage.jsx  ProgramsPage.jsx  AdmissionsPage.jsx
    EventsPage.jsx  DonatePage.jsx  ContactPage.jsx  NotFound.jsx
  components/
    Layout.jsx             # shared nav + footer + accessibility widget + <Outlet/>
    ScrollToTop.jsx        # scrolls to top on page change
    Logo.jsx               # renders the official crest (public/images/logo.webp)
    ParallaxBg.jsx         # parallax background image (reduced-motion aware)
    PageHero.jsx           # glass + parallax banner for inner pages
    Nav.jsx  Hero.jsx  About.jsx  Programs.jsx  Admissions.jsx
    Events.jsx  Awards.jsx  Donate.jsx  Contact.jsx  Footer.jsx
    AccessibilityWidget.jsx
public/
  images/                  # school photos + logo.webp (also used as favicon)
  _redirects               # SPA fallback so deep links work on Netlify
netlify.toml               # Netlify build config (npm run build → dist)
```

## Deploy

Any static host works. On **Netlify** or **Vercel**: build command `npm run build`,
publish directory `dist`. (The included `netlify.toml` and `public/_redirects` set
this up for Netlify.)
