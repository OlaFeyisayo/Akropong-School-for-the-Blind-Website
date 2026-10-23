import { Link } from 'react-router-dom';
import { Quote, Heart, ArrowRight } from 'lucide-react';
import Hero from '../components/Hero.jsx';
import Stats from '../components/Stats.jsx';
import Programs from '../components/Programs.jsx';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />

      {/* Welcome / mission teaser */}
      <section className="bg-bg py-16 sm:py-24">
        <div className="wrap grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="min-w-0">
            <span className="chip bg-sky-soft text-navy">Welcome</span>
            <h2 className="mt-4 text-3xl sm:text-4xl">A place to learn, grow and belong</h2>
            <p className="mt-4 text-lg text-ink">
              Akropong School for the Blind is one of Ghana&rsquo;s pioneering schools for the
              education of blind and visually impaired children. We welcome children from across the
              country into a safe, caring community where they are seen, supported and believed in.
            </p>
            <p className="mt-3 text-muted">
              Through Braille literacy, dedicated teachers, boarding care and practical skills, we
              help every student build confidence and independence.
            </p>
            <Link to="/about" className="btn btn-primary mt-6">
              Learn about us <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>

          <div className="min-w-0">
            <div className="flex flex-col items-start gap-3 rounded-3xl bg-navy p-8 text-white">
              <Quote className="h-8 w-8 text-gold" aria-hidden="true" />
              <p className="font-display text-2xl font-bold text-white sm:text-3xl">
                &ldquo;Disability is not inability.&rdquo;
              </p>
              <p className="text-sky-soft">The belief at the heart of everything we do.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What we offer */}
      <Programs />

      {/* Donate CTA band */}
      <section className="bg-navy text-white">
        <div className="wrap flex flex-col items-start justify-between gap-6 py-14 sm:flex-row sm:items-center">
          <div className="min-w-0">
            <h2 className="text-3xl text-white sm:text-4xl">Your gift changes a child&rsquo;s life</h2>
            <p className="mt-2 max-w-xl text-sky-soft">
              Help provide Braille books, meals, learning materials and loving care.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/donate" className="btn btn-gold">
              <Heart className="h-5 w-5" aria-hidden="true" /> Donate now
            </Link>
            <Link to="/admissions" className="btn btn-outline-light">Admissions</Link>
          </div>
        </div>
      </section>
    </>
  );
}
