import { useEffect, useRef } from 'react';

/**
 * Decorative background image that drifts slightly as the section scrolls
 * through the viewport (parallax). Movement is disabled automatically when the
 * visitor prefers reduced motion. The image is oversized and clipped by the
 * parent (which must be `relative overflow-hidden`), so no gaps appear.
 */
export default function ParallaxBg({ src, speed = 0.12 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const parent = el.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      const fromCenter = rect.top + rect.height / 2 - window.innerHeight / 2;
      let offset = -fromCenter * speed;
      if (offset > 80) offset = 80;
      else if (offset < -80) offset = -80;
      el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed]);

  return (
    <img
      ref={ref}
      src={src}
      alt=""
      aria-hidden="true"
      loading="lazy"
      className="pointer-events-none absolute inset-x-0 w-full object-cover will-change-transform"
      style={{ top: '-90px', height: 'calc(100% + 180px)' }}
    />
  );
}
