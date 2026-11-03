import { Link } from 'react-router-dom';
import { Quote, Heart, ArrowRight } from 'lucide-react';
import Hero from '../components/Hero.jsx';
import Programs from '../components/Programs.jsx';
import ParallaxBg from '../components/ParallaxBg.jsx';

export default function Home() {
  return (
    <>
      <Hero />

      {/* Mission — glass panel over a parallax photo */}
      <section className="relative isolate overflow-hidden">
        <ParallaxBg src="/images/events-anniversary.jpg" />
        <div
          className="absolute inset-0 bg-gradient-to-br from-navy/55 via-navy/38 to-navy/20"
          aria-hidden="true"
        ></div>
        <div className="relative wrap py-20 sm:py-28">
          <div className="max-w-2xl rounded-3xl glass p-8 shadow-2xl sm:p-10">
            <span className="chip bg-white/15 text-white ring-1 ring-white/25">Welcome</span>
            <h2 className="mt-4 text-3xl text-white sm:text-4xl">A place to learn, grow and belong</h2>
            <p className="mt-4 text-lg text-sky-soft">
              Akropong School for the Blind is one of Ghana&rsquo;s pioneering schools for the
              education of blind and visually impaired children. We welcome children from across the
              country into a safe, caring community where they are seen, supported and believed in.
            </p>
            <div className="mt-6 flex items-start gap-3 rounded-2xl border-l-4 border-gold bg-white/5 p-4">
              <Quote className="h-6 w-6 shrink-0 text-gold" aria-hidden="true" />
              <p className="font-display text-xl font-bold text-white">
                &ldquo;Disability is not inability.&rdquo;
              </p>
            </div>
            <Link to="/about" className="btn btn-white mt-6">
              Learn about us <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Programs — solid surface for readability */}
      <Programs />

      {/* Donate — glass panel over a parallax photo */}
      <section className="relative isolate overflow-hidden">
        <ParallaxBg src="/images/events-march.jpg" />
        <div
          className="absolute inset-0 bg-gradient-to-br from-navy/55 via-navy/38 to-navy/20"
          aria-hidden="true"
        ></div>
        <div className="relative wrap py-20 sm:py-28">
          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl glass p-8 shadow-2xl sm:flex-row sm:items-center sm:p-10">
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
        </div>
      </section>
    </>
  );
}
