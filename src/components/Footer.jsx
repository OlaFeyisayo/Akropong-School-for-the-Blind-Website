import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import Logo from './Logo.jsx';
import { MAP_URL } from './Contact.jsx';

const NAV = [
  { to: '/about', label: 'About' },
  { to: '/programs', label: 'Programs' },
  { to: '/admissions', label: 'Admissions' },
  { to: '/events', label: 'Events' },
  { to: '/donate', label: 'Donate' },
  { to: '/contact', label: 'Contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy text-white">
      <div className="wrap grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="min-w-0 sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2.5 text-white">
            <Logo className="h-10 w-10 shrink-0" />
            <span className="font-display text-lg font-bold">Akropong School for the Blind</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-sky-soft">
            Disability is not inability. Educating and empowering blind children in Ghana.
          </p>
        </div>

        <nav aria-label="Footer" className="min-w-0">
          <h2 className="font-display text-base font-semibold text-white">Explore</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {NAV.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sky-soft hover:text-white hover:underline">{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="min-w-0 sm:col-span-2 lg:col-span-2">
          <h2 className="font-display text-base font-semibold text-white">Contact</h2>
          <ul className="mt-3 space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              <a href="tel:+233207614751" className="text-sky-soft hover:text-white">020 761 4751</a>
            </li>
            <li className="flex min-w-0 items-center gap-3">
              <Mail className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              <a
                href="mailto:temilademojisola00@gmail.com"
                className="min-w-0 break-all text-sky-soft hover:text-white"
              >
                temilademojisola00@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              <a
                href={MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-soft hover:text-white hover:underline"
              >
                Akropong-Akuapem, Eastern Region, Ghana
                <span className="sr-only"> (opens in Google Maps in a new tab)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="wrap py-5 text-sm text-sky-soft">
          © {year} Akropong School for the Blind. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
