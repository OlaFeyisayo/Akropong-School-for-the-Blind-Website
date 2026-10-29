import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Home from './pages/Home.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ProgramsPage from './pages/ProgramsPage.jsx';
import AdmissionsPage from './pages/AdmissionsPage.jsx';
import EventsPage from './pages/EventsPage.jsx';
import DonatePage from './pages/DonatePage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import NotFound from './pages/NotFound.jsx';

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
      <ScrollToTop />
      <Routes>
        <Route
          element={
            <Layout
              theme={theme}
              setTheme={setTheme}
              scale={scale}
              setScale={setScale}
              minScale={MIN_SCALE}
              maxScale={MAX_SCALE}
            />
          }
        >
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="programs" element={<ProgramsPage />} />
          <Route path="admissions" element={<AdmissionsPage />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="donate" element={<DonatePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
