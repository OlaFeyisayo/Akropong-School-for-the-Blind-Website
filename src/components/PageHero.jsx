import ParallaxBg from './ParallaxBg.jsx';

/**
 * Glass + parallax banner used at the top of inner pages so they match the
 * homepage. White text sits on a navy scrim over the parallax photo for
 * reliable contrast; motion is handled (and disabled for reduced motion)
 * inside ParallaxBg.
 */
export default function PageHero({ eyebrow, title, subtitle, image }) {
  return (
    <section className="relative isolate overflow-hidden">
      <ParallaxBg src={image} />
      <div
        className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy/75 to-navy/55"
        aria-hidden="true"
      ></div>
      <div className="relative wrap py-16 sm:py-20 lg:py-24">
        <div className="max-w-2xl rounded-3xl glass p-7 shadow-2xl sm:p-9">
          {eyebrow && (
            <span className="chip bg-white/15 text-white ring-1 ring-white/25">{eyebrow}</span>
          )}
          <h1 className="mt-4 text-4xl text-white sm:text-5xl">{title}</h1>
          {subtitle && <p className="mt-4 max-w-xl text-lg text-sky-soft">{subtitle}</p>}
        </div>
      </div>
    </section>
  );
}
