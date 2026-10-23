import { Link } from 'react-router-dom';
import { Heart, GraduationCap, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="bg-navy text-white">
      <div className="wrap grid items-center gap-10 py-14 md:grid-cols-2 md:py-20">
        {/* Copy */}
        <div className="min-w-0">
          <span className="chip bg-white/10 text-sky-soft ring-1 ring-white/20">
            <Sparkles className="h-4 w-4 text-gold" aria-hidden="true" />
            Educating blind & visually impaired children
          </span>

          <h1 className="mt-5 text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            Every child deserves the light of learning
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-sky-soft">
            At Akropong School for the Blind in Ghana, we give blind and visually impaired
            children the education, Braille skills and loving care they need to thrive.
            Here we live by one truth:{' '}
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

        {/* Photo + floating card */}
        <div className="relative min-w-0">
          <img
            src="/images/school-event.jpg"
            alt="Students and staff gathered for an outdoor event under shady trees at Akropong School for the Blind."
            width="720"
            height="540"
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-2xl"
            loading="eager"
          />
          <div className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl bg-surface p-4 shadow-xl sm:-left-6">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gold text-navy">
              <GraduationCap className="h-6 w-6" aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="block font-display text-2xl font-extrabold text-heading">70+ years</span>
              <span className="block text-sm text-muted">serving children in Ghana</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
