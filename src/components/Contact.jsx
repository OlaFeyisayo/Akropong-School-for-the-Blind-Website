import { useRef, useState } from 'react';
import { Phone, Mail, MapPin, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

/* ---------------------------------------------------------------------------
   CONTACT FORM DELIVERY — messages are emailed to the school via Formspree.

   ONE-TIME SETUP (about a minute):
     1. Go to https://formspree.io and sign up (free) with the school email,
        temilademojisola00@gmail.com.
     2. Create a new form; Formspree gives you an endpoint that looks like
        https://formspree.io/f/abcdwxyz
     3. Paste that URL into FORMSPREE_ENDPOINT below and redeploy.
     4. The first real submission triggers a confirmation email from Formspree —
        click it once to activate delivery. After that, every message arrives in
        the school's inbox automatically.

   Until the endpoint is set, the form falls back to opening the visitor's email
   app with the message pre-filled (addressed to the school) so nothing is lost.
--------------------------------------------------------------------------- */
const FORMSPREE_ENDPOINT = ''; // <-- PASTE your Formspree endpoint here
const SCHOOL_EMAIL = 'temilademojisola00@gmail.com';
const SCHOOL_PHONE_DISPLAY = '020 761 4751';
const SCHOOL_PHONE_TEL = '+233207614751';

// Google Maps link for the school location.
const MAP_QUERY = 'Akropong School for the Blind, Akropong-Akuapem, Eastern Region, Ghana';
export const MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_QUERY)}`;

const INFO = [
  { icon: Phone, label: 'Phone', value: SCHOOL_PHONE_DISPLAY, href: `tel:${SCHOOL_PHONE_TEL}` },
  { icon: Mail, label: 'Email', value: SCHOOL_EMAIL, href: `mailto:${SCHOOL_EMAIL}` },
  { icon: MapPin, label: 'Location', value: 'Akropong-Akuapem, Eastern Region, Ghana', href: MAP_URL, external: true },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const [gotcha, setGotcha] = useState(''); // honeypot (Formspree drops filled ones)
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [statusMsg, setStatusMsg] = useState('');

  const refs = { name: useRef(null), email: useRef(null), message: useRef(null) };

  function validate(v) {
    const e = {};
    if (!v.name.trim()) e.name = 'Please enter your name.';
    if (!v.email.trim()) e.email = 'Please enter your email address.';
    else if (!EMAIL_RE.test(v.email.trim())) e.email = 'Please enter a valid email address.';
    if (!v.message.trim()) e.message = 'Please enter a message.';
    return e;
  }

  function update(field, val) {
    setValues((v) => ({ ...v, [field]: val }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  }

  async function handleSubmit(ev) {
    ev.preventDefault();
    const e = validate(values);
    setErrors(e);
    const firstInvalid = ['name', 'email', 'message'].find((f) => e[f]);
    if (firstInvalid) {
      setStatus('idle');
      setStatusMsg('Please fix the highlighted fields and try again.');
      refs[firstInvalid].current?.focus();
      return;
    }

    // Endpoint not set yet → open the visitor's email app so the message still reaches us.
    if (!FORMSPREE_ENDPOINT) {
      const subject = encodeURIComponent(`Website enquiry from ${values.name}`);
      const body = encodeURIComponent(`${values.message}\n\nFrom: ${values.name} <${values.email}>`);
      window.location.href = `mailto:${SCHOOL_EMAIL}?subject=${subject}&body=${body}`;
      setStatus('success');
      setStatusMsg('Your email app should now open with your message ready to send.');
      return;
    }

    try {
      setStatus('submitting');
      setStatusMsg('Sending your message…');
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          message: values.message,
          _subject: `Website enquiry from ${values.name}`,
          _gotcha: gotcha,
        }),
      });
      if (res.ok) {
        setStatus('success');
        setStatusMsg('Thank you — your message has been sent. We will reply by email.');
        setValues({ name: '', email: '', message: '' });
      } else {
        throw new Error('Request failed with status ' + res.status);
      }
    } catch {
      setStatus('error');
      setStatusMsg(
        `Sorry, something went wrong. Please email us directly at ${SCHOOL_EMAIL} or call ${SCHOOL_PHONE_DISPLAY}.`
      );
    }
  }

  const invalidCls = 'border-red-500 dark:border-red-400';
  const baseField =
    'mt-1.5 w-full min-w-0 rounded-xl border-2 border-border bg-bg px-4 py-3 text-ink ' +
    'placeholder:text-muted/70 focus:border-primary';

  return (
    <section id="contact" className="scroll-mt-20 bg-bg py-16 sm:py-24">
      <div className="wrap grid gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Info */}
        <div className="min-w-0">
          <span className="chip bg-sky-soft text-navy">Contact us</span>
          <h2 className="mt-4 text-3xl sm:text-4xl">We&rsquo;d love to hear from you</h2>
          <p className="mt-3 text-muted">
            Whether you are a parent, partner, volunteer or well-wisher, please reach out.
          </p>

          <ul className="mt-8 space-y-4">
            {INFO.map(({ icon: Icon, label, value, href, external }) => (
              <li key={label} className="card flex min-w-0 items-start gap-4 p-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-sky-soft text-navy">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-muted">{label}</div>
                  {href ? (
                    <a
                      href={href}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noopener noreferrer' : undefined}
                      className={
                        'font-semibold text-ink hover:text-primary ' +
                        (label === 'Email' ? 'break-all' : 'break-words')
                      }
                    >
                      {value}
                      {external && <span className="sr-only"> (opens in Google Maps in a new tab)</span>}
                    </a>
                  ) : (
                    <div className="font-semibold text-ink">{value}</div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Form */}
        <div className="min-w-0">
          <form onSubmit={handleSubmit} noValidate className="card min-w-0 p-6 sm:p-8">
            {/* Honeypot: hidden from people, tempting to bots */}
            <p hidden aria-hidden="true">
              <label>
                Don&rsquo;t fill this out:{' '}
                <input
                  name="_gotcha"
                  tabIndex={-1}
                  autoComplete="off"
                  value={gotcha}
                  onChange={(e) => setGotcha(e.target.value)}
                />
              </label>
            </p>

            <h3 className="text-2xl">Send us a message</h3>

            {/* Status announcements for screen readers */}
            <p
              role="status"
              aria-live="polite"
              className={
                'mt-4 flex items-start gap-2 rounded-xl px-4 py-3 text-sm ' +
                (status === 'success'
                  ? 'bg-green-50 text-green-800 dark:bg-green-900/30 dark:text-green-200'
                  : status === 'error'
                  ? 'bg-red-50 text-red-800 dark:bg-red-900/30 dark:text-red-200'
                  : statusMsg
                  ? 'bg-sky-soft text-navy'
                  : 'sr-only')
              }
            >
              {status === 'success' && <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />}
              {status === 'error' && <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />}
              <span>{statusMsg}</span>
            </p>

            <div className="mt-5 space-y-5">
              <div>
                <label htmlFor="cf-name" className="font-semibold text-heading">
                  Your name <span className="text-red-600" aria-hidden="true">*</span>
                </label>
                <input
                  id="cf-name"
                  name="name"
                  ref={refs.name}
                  type="text"
                  autoComplete="name"
                  value={values.name}
                  onChange={(e) => update('name', e.target.value)}
                  aria-required="true"
                  aria-invalid={errors.name ? 'true' : undefined}
                  aria-describedby={errors.name ? 'cf-name-err' : undefined}
                  className={`${baseField} ${errors.name ? invalidCls : ''}`}
                />
                {errors.name && (
                  <p id="cf-name-err" className="mt-1.5 flex items-center gap-1.5 text-sm text-red-700 dark:text-red-300">
                    <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" /> {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="cf-email" className="font-semibold text-heading">
                  Your email <span className="text-red-600" aria-hidden="true">*</span>
                </label>
                <input
                  id="cf-email"
                  name="email"
                  ref={refs.email}
                  type="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={(e) => update('email', e.target.value)}
                  aria-required="true"
                  aria-invalid={errors.email ? 'true' : undefined}
                  aria-describedby={errors.email ? 'cf-email-err' : undefined}
                  className={`${baseField} ${errors.email ? invalidCls : ''}`}
                />
                {errors.email && (
                  <p id="cf-email-err" className="mt-1.5 flex items-center gap-1.5 text-sm text-red-700 dark:text-red-300">
                    <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" /> {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="cf-message" className="font-semibold text-heading">
                  Message <span className="text-red-600" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="cf-message"
                  name="message"
                  ref={refs.message}
                  rows={5}
                  value={values.message}
                  onChange={(e) => update('message', e.target.value)}
                  aria-required="true"
                  aria-invalid={errors.message ? 'true' : undefined}
                  aria-describedby={errors.message ? 'cf-message-err' : undefined}
                  className={`${baseField} resize-y ${errors.message ? invalidCls : ''}`}
                />
                {errors.message && (
                  <p id="cf-message-err" className="mt-1.5 flex items-center gap-1.5 text-sm text-red-700 dark:text-red-300">
                    <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" /> {errors.message}
                  </p>
                )}
              </div>

              <button type="submit" className="btn btn-primary w-full" disabled={status === 'submitting'}>
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" /> Sending…
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" aria-hidden="true" /> Send message
                  </>
                )}
              </button>
              <p className="text-xs text-muted">
                <span className="text-red-600" aria-hidden="true">*</span> Required fields. We will reply by email.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
