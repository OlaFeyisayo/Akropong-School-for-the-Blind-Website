import { Eye, Target, Quote } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-bg py-16 sm:py-24">
      <div className="wrap grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Image collage */}
        <div className="relative min-w-0 max-w-lg">
          <img
            src="/images/events-anniversary.jpg"
            alt="Students marching with placards celebrating ‘80 years of blind education in Ghana’ during the anniversary celebration."
            width="620"
            height="460"
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-xl"
            loading="lazy"
          />
          <img
            src="/images/events-guided-walk.jpg"
            alt="A student using a white cane walking with classmates."
            width="300"
            height="300"
            className="absolute -bottom-8 -right-4 hidden aspect-square w-2/5 rounded-2xl border-4 border-bg object-cover shadow-2xl sm:block"
            loading="lazy"
          />
        </div>

        {/* Story */}
        <div className="min-w-0">
          <span className="chip bg-sky-soft text-navy">About our school</span>
          <h2 className="mt-4 text-3xl sm:text-4xl">A place to learn, grow and belong</h2>
          <p className="mt-4 text-lg text-ink">
            Akropong School for the Blind is one of Ghana&rsquo;s pioneering schools for the
            education of blind and visually impaired children. For generations we have welcomed
            children from across the country into a safe, caring community where they are seen,
            supported and believed in.
          </p>
          <p className="mt-3 text-muted">
            Through Braille literacy, dedicated teachers, boarding care and practical skills, we
            help every student build confidence and independence — and prepare to take their place
            in the wider world.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="card p-5">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-sky-soft text-navy">
                <Eye className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-3 text-lg">Our vision</h3>
              <p className="mt-1 text-sm text-muted">
                A Ghana where every blind child is educated, valued and able to shape their own future.
              </p>
            </div>
            <div className="card p-5">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-sky-soft text-navy">
                <Target className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-3 text-lg">Our mission</h3>
              <p className="mt-1 text-sm text-muted">
                To provide quality, inclusive education and loving care that empowers every child to
                become confident and independent.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Motto callout */}
      <div className="wrap mt-14">
        <div className="flex min-w-0 flex-col items-center gap-3 rounded-3xl bg-navy px-6 py-10 text-center text-white">
          <Quote className="h-8 w-8 text-gold" aria-hidden="true" />
          <p className="max-w-3xl font-display text-2xl font-bold text-white sm:text-3xl">
            &ldquo;Disability is not inability.&rdquo;
          </p>
          <p className="text-sky-soft">The belief at the heart of everything we do.</p>
        </div>
      </div>
    </section>
  );
}
