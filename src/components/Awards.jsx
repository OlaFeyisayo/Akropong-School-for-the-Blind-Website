import { Trophy, Award, Music } from 'lucide-react';

const CATEGORY_AWARDS = [
  { title: 'The Winner', division: 'Overall competition' },
  { title: 'Overall Best', division: 'Primary Division' },
  { title: 'Best in Braille Reading', division: 'Primary Division & JHS Division' },
  { title: 'Best in Braille Writing', division: 'Primary Division' },
  { title: 'Best in Spelling', division: 'Primary Division & JHS Division' },
];

export default function Awards() {
  return (
    <section id="awards" className="bg-surface-2 py-16 sm:py-24">
      <div className="wrap">
        <div className="max-w-2xl">
          <span className="chip bg-gold text-navy">Achievements</span>
          <h2 className="mt-4 text-3xl sm:text-4xl">Awards &amp; achievements</h2>
          <p className="mt-3 text-lg text-ink">
            Our students continue to excel in academics, sport and the arts.
          </p>
        </div>

        {/* Featured: Goalball championship (2025) */}
        <article className="mt-10 overflow-hidden rounded-3xl border border-border bg-surface shadow-lg md:grid md:grid-cols-[minmax(0,340px)_1fr]">
          <div className="flex items-center justify-center bg-navy p-4">
            <img
              src="/images/goalball-2025-champions.png"
              alt="Akropong School for the Blind crowned champions of the 2025 Ghana Goalball Youth Cup, the team holding a trophy (featured by EIB Sports / GHOne TV)."
              className="max-h-96 w-full object-contain"
              loading="lazy"
            />
          </div>
          <div className="p-6 sm:p-8">
            <span className="chip bg-gold text-navy">
              <Trophy className="h-4 w-4" aria-hidden="true" /> Champions · 2025
            </span>
            <h3 className="mt-3 text-2xl">2025 Ghana Goalball Youth Cup</h3>
            <p className="mt-2 text-ink">
              Akropong School for the Blind was crowned champions of the 2025 Ghana Goalball Youth
              Cup — a proud moment for our students in para-sport and a showcase of teamwork,
              skill and determination.
            </p>
            <p className="mt-2 text-muted">Featured by EIB Sports / GHOne TV, 19 October 2025.</p>
          </div>
        </article>

        {/* Featured: Braille Literacy Competition (2026) */}
        <article className="mt-6 rounded-3xl border-2 border-gold bg-gold/10 p-6 sm:p-8">
          <span className="chip bg-gold text-navy">
            <Trophy className="h-4 w-4" aria-hidden="true" /> Overall Champions · 2026
          </span>
          <h3 className="mt-3 text-2xl">Ghana Braille Literacy Competition 2026</h3>
          <p className="mt-2 text-ink">
            Akropong School for the Blind won the 2026 Ghana Braille Literacy Competition, organised
            by the Ghana Blind Union (GBU). The competition tests pupils from schools across the
            country on how well they read, write and spell in Braille — and our pupils took home
            seven trophies in all.
          </p>
          <p className="mt-2 text-muted">
            These results reflect the hard work of our pupils and the dedication of their teachers
            in building strong Braille literacy, the foundation of independent learning.
          </p>
        </article>

        {/* Category awards */}
        <h3 className="mt-10 text-xl">Category awards</h3>
        <ul className="mt-5 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORY_AWARDS.map((a) => (
            <li key={a.title} className="card p-5">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold/15 text-gold-dark">
                <Award className="h-6 w-6" aria-hidden="true" />
              </span>
              <h4 className="mt-3 font-display text-lg font-bold text-heading">{a.title}</h4>
              <p className="text-sm text-muted">{a.division}</p>
            </li>
          ))}
        </ul>

        {/* Choral festival */}
        <article className="card mt-6 flex items-start gap-4 p-6 sm:p-8">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy text-gold">
            <Music className="h-6 w-6" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <h3 className="text-xl">H4P Ability Praise Concert (A.P.C.) 2026 — Inter-Schools Choral Festival</h3>
            <p className="mt-2 text-muted">
              Our choir was honoured at the 2026 Inter-Schools Choral Festival, part of the H4P
              Ability Praise Concert, which brings schools together to celebrate the musical talent
              of persons with disabilities. The award was presented by Bishop Dr. Charles Cofie
              Hackman, CEO of the H4P Organization.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
