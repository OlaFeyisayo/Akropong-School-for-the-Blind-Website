import { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import Logo from './Logo.jsx';

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#programs', label: 'Programs' },
  { href: '#admissions', label: 'Admissions' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  // Close the mobile menu on Escape and when a link is chosen.
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/90 backdrop-blur-md">
      <nav className="wrap flex items-center justify-between gap-4 py-3" aria-label="Main">
        <a href="#top" className="flex items-center gap-2.5 min-w-0 text-navy dark:text-white">
          <Logo className="h-9 w-9 shrink-0" />
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="truncate font-display text-lg font-bold text-heading">Akropong</span>
            <span className="truncate text-xs font-medium text-muted">School for the Blind</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="inline-flex min-h-11 items-center rounded-lg px-3 py-2 font-semibold text-ink hover:bg-surface-2 hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="ml-1">
            <a href="#donate" className="btn btn-gold">
              <Heart className="h-5 w-5" aria-hidden="true" /> Donate
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-surface text-heading md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="border-t border-border bg-surface md:hidden">
          <ul className="wrap flex flex-col gap-1 py-3">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="flex min-h-12 items-center rounded-lg px-3 font-semibold text-ink hover:bg-surface-2"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-1">
              <a href="#donate" className="btn btn-gold w-full" onClick={() => setOpen(false)}>
                <Heart className="h-5 w-5" aria-hidden="true" /> Donate
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
