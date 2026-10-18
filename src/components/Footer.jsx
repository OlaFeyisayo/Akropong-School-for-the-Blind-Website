import { Phone, Mail, MapPin } from 'lucide-react';
import Logo from './Logo.jsx';

const NAV = [
  { href: '#about', label: 'About' },
  { href: '#programs', label: 'Programs' },
  { href: '#admissions', label: 'Admissions' },
  { href: '#donate', label: 'Donate' },
  { href: '#contact', label: 'Contact' },
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
              <li key={l.href}>
                <a href={l.href} className="text-sky-soft hover:text-white hover:underline">{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="min-w-0 sm:col-span-2 lg:col-span-2">
          <h2 className="font-display text-base font-semibold text-white">Contact</h2>
          <ul className="mt-3 space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              <a href="tel:+233551591730" className="text-sky-soft hover:text-white">+233 55 159 1730</a>
            </li>
            <li className="flex min-w-0 items-center gap-3">
              <Mail className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              <a
                href="mailto:princeadjeiotsiwah@gmail.com"
                className="min-w-0 break-all text-sky-soft hover:text-white"
              >
                princeadjeiotsiwah@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              <span className="text-sky-soft">Akropong-Akuapem, Eastern Region, Ghana</span>
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
