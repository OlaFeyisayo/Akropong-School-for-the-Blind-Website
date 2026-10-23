import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// On each route change, jump to the top of the page (respecting reduced motion).
export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, left: 0, behavior: reduce ? 'auto' : 'auto' });
  }, [pathname]);
  return null;
}
