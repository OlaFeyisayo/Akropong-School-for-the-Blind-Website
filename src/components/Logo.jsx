/**
 * Akropong School for the Blind logo.
 * A rising sun over an open book with a small Braille cell —
 * vision, learning and Braille.
 *
 * The book uses `currentColor`, so it recolours to its surroundings
 * (navy on light backgrounds, white on the navy footer/hero). The sun
 * and Braille dots are fixed gold, which reads well on both themes.
 */
export default function Logo({ className = '', title = 'Akropong School for the Blind' }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Rising sun */}
      <g fill="var(--color-gold)">
        <circle cx="24" cy="16" r="6.5" />
      </g>
      <g
        stroke="var(--color-gold)"
        strokeWidth="2"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <line x1="24" y1="2.5" x2="24" y2="6" />
        <line x1="12.5" y1="6.5" x2="14.8" y2="9.2" />
        <line x1="35.5" y1="6.5" x2="33.2" y2="9.2" />
        <line x1="7" y1="16" x2="10.5" y2="16" />
        <line x1="37.5" y1="16" x2="41" y2="16" />
      </g>

      {/* Open book */}
      <path
        d="M24 40c-4.2-3-10.5-4.2-17-3.2V23.3c6.5-1 12.8 0.2 17 3.2 4.2-3 10.5-4.2 17-3.2v13.5c-6.5-1-12.8 0.2-17 3.2Z"
        fill="currentColor"
      />
      {/* Spine */}
      <line
        x1="24" y1="26.5" x2="24" y2="40"
        stroke="var(--color-bg)" strokeWidth="1.6" aria-hidden="true"
      />

      {/* Braille cell (2 × 3) on the left page, in gold */}
      <g fill="var(--color-gold)" aria-hidden="true">
        <circle cx="13" cy="29.5" r="1.25" />
        <circle cx="18" cy="29.2" r="1.25" />
        <circle cx="13" cy="33" r="1.25" />
        <circle cx="18" cy="32.7" r="1.25" />
      </g>
    </svg>
  );
}
