import { Images, ExternalLink } from 'lucide-react';

// Full photo album (external). Visitors view all event photos here.
export const GALLERY_URL = 'https://okanteymedia.pixieset.com/80thanniversarycelebration/';

const PHOTOS = [
  {
    src: '/images/events-anniversary.jpg',
    alt: 'Students marching with placards reading “80 years of blind education in Ghana, a sign of national development” during the anniversary celebration.',
  },
  {
    src: '/images/events-girls-procession.jpg',
    alt: 'Girls in blue uniforms walking in procession, guided by a rope, during the 80th anniversary celebration.',
  },
  {
    src: '/images/events-guided-walk.jpg',
    alt: 'A student using a white cane walks alongside classmates during the anniversary procession.',
  },
  {
    src: '/images/events-guide-rope.jpg',
    alt: 'Students holding a blue guide rope as they walk together during the anniversary march.',
  },
  {
    src: '/images/events-march.jpg',
    alt: 'Smiling students in school uniform marching during the 80th anniversary celebration.',
  },
];

export default function Events() {
  return (
    <section id="events" className="bg-bg py-16 sm:py-24">
      <div className="wrap">
        <div className="max-w-2xl">
          <p className="text-lg text-ink">
            Moments from events our students have taken part in — including our
            80th anniversary celebration, marking 80 years of blind education in Ghana.
          </p>
          <p className="mt-2 text-muted">
            Browse the full photo album to see more.
          </p>
        </div>

        {/* Gallery grid (masonry-style, reflows cleanly) */}
        <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {PHOTOS.map((p) => (
            <a
              key={p.src}
              href={GALLERY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative mb-4 block break-inside-avoid overflow-hidden rounded-2xl border border-border shadow-sm"
              aria-label="View the full event photo gallery (opens in a new tab)"
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="w-full transition duration-300 group-hover:scale-[1.03]"
              />
              <span
                className="pointer-events-none absolute inset-0 flex items-end justify-start bg-navy/0 p-4 opacity-0 transition group-hover:bg-navy/40 group-hover:opacity-100 group-focus-within:bg-navy/40 group-focus-within:opacity-100"
                aria-hidden="true"
              >
                <span className="chip bg-white text-navy">
                  <ExternalLink className="h-4 w-4" aria-hidden="true" /> View gallery
                </span>
              </span>
            </a>
          ))}
        </div>

        <div className="mt-8">
          <a href={GALLERY_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <Images className="h-5 w-5" aria-hidden="true" /> View full photo gallery
            <ExternalLink className="h-5 w-5" aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <p className="mt-3 text-sm text-muted">Photos by Okantey Media.</p>
        </div>
      </div>
    </section>
  );
}
