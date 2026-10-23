import { Outlet } from 'react-router-dom';
import Nav from './Nav.jsx';
import Footer from './Footer.jsx';
import AccessibilityWidget from './AccessibilityWidget.jsx';

export default function Layout({ theme, setTheme, scale, setScale, minScale, maxScale }) {
  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>
      <Nav />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <AccessibilityWidget
        theme={theme}
        setTheme={setTheme}
        scale={scale}
        setScale={setScale}
        minScale={minScale}
        maxScale={maxScale}
      />
    </>
  );
}
