import { useEffect, useState } from 'react';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Stats from './components/Stats.jsx';
import About from './components/About.jsx';
import Programs from './components/Programs.jsx';
import Admissions from './components/Admissions.jsx';
import Donate from './components/Donate.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import AccessibilityWidget from './components/AccessibilityWidget.jsx';

const MIN_SCALE = 90;
const MAX_SCALE = 160;

function readTheme() {
  try {
    return localStorage.getItem('aksb-theme') === 'dark' ? 'dark' : 'light';
  } catch {
    return 'light';
  }
}
function readScale() {
  try {
    const s = parseInt(localStorage.getItem('aksb-scale'), 10);
    if (s >= MIN_SCALE && s <= MAX_SCALE) return s;
  } catch {}
  return 100;
}

export default function App() {
  const [theme, setTheme] = useState(readTheme);
  const [scale, setScale] = useState(readScale);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('aksb-theme', theme);
    } catch {}
  }, [theme]);

  useEffect(() => {
    document.documentElement.style.fontSize = `${scale}%`;
    try {
      localStorage.setItem('aksb-scale', String(scale));
    } catch {}
  }, [scale]);

  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>
      <Nav />
      <main id="main">
        <Hero />
        <Stats />
        <About />
        <Programs />
        <Admissions />
        <Donate />
        <Contact />
      </main>
      <Footer />
      <AccessibilityWidget
        theme={theme}
        setTheme={setTheme}
        scale={scale}
        setScale={setScale}
        minScale={MIN_SCALE}
        maxScale={MAX_SCALE}
      />
    </>
  );
}
