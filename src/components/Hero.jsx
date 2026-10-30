import { Link } from 'react-router-dom';
import { Heart, GraduationCap, Sparkles } from 'lucide-react';
import ParallaxBg from './ParallaxBg.jsx';

const STATS = [
  { value: 'Est. 1945', label: 'Serving children in Ghana' },
  { value: '80 years', label: 'Of blind education' },
  { value: 'Braille', label: 'At the heart of learning' },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <ParallaxBg src="/images/events-girls-procession.jpg" />
      <div
        className="absolute inset-0 bg-gradient-to-br from-navy/55 via-navy/38 to-navy/20"
        aria-hidden="true"
      ></div>

      <div className="relative wrap py-20 sm:py-28 lg:py-32">
        <div className="max-w-2xl rounded-3xl glass p-7 shadow-2xl sm:p-10">
          <span className="chip bg-white/15 text-white ring-1 ring-white/25">
            <Sparkles className="h-4 w-4 text-gold" aria-hidden="true" />
            Educating blind &amp; visually impaired children
          </span>

          <h1 className="mt-5 text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            Every child deserves the light of learning
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-sky-soft">
            At Akropong School for the Blind in Ghana, we give blind and visually impaired children
            the education, Braille skills and loving care they need to thrive. We live by one truth:{' '}
            <strong className="font-semibold text-gold">Disability is not inability.</strong>
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/donate" className="btn btn-gold">
              <Heart className="h-5 w-5" aria-hidden="true" /> Donate now
            </Link>
            <Link to="/admissions" className="btn btn-outline-light">
              <GraduationCap className="h-5 w-5" aria-hidden="true" /> Admissions
            </Link>
          </div>
        </div>

        <dl className="mt-8 grid max-w-3xl gap-4 sm:grid-cols-3">
          {STATS.map((s) => (
            <div key={s.value} className="rounded-2xl glass p-5">
              <dd className="font-display text-2xl font-extrabold text-white">{s.value}</dd>
              <dt className="mt-1 text-sm text-sky-soft">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
