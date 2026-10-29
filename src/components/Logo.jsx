/**
 * Official Akropong School for the Blind crest.
 * Rendered decorative (alt="") because the wordmark text sits beside it;
 * on dark backgrounds, wrap it in a white badge (see Footer).
 */
export default function Logo({ className = '' }) {
  return (
    <img
      src="/images/logo.webp"
      alt=""
      aria-hidden="true"
      width="96"
      height="96"
      className={'object-contain ' + className}
    />
  );
}
