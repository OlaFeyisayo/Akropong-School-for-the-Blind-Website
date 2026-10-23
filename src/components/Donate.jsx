import { Link } from 'react-router-dom';
import { HeartHandshake, BookOpen, Users, Landmark, Smartphone, Heart } from 'lucide-react';

const WAYS = [
  {
    icon: BookOpen,
    title: 'Fund Braille learning',
    text: 'Provide Braille paper, slates, styluses and books so students can read and write.',
  },
  {
    icon: HeartHandshake,
    title: 'Sponsor a child',
    text: 'Help cover meals, boarding, health care and learning materials for a student.',
  },
  {
    icon: Users,
    title: 'Partner or volunteer',
    text: 'Share your skills, run a fundraiser, or partner with the school long-term.',
  },
];

export default function Donate() {
  return (
    <section id="donate" className="scroll-mt-20 bg-surface-2 py-16 sm:py-24">
      <div className="wrap grid gap-10 lg:grid-cols-5 lg:gap-12">
        {/* Ways to give */}
        <div className="min-w-0 lg:col-span-3">
          <span className="chip bg-gold text-navy">Support our students</span>
          <h2 className="mt-4 text-3xl sm:text-4xl">Your gift changes a child&rsquo;s life</h2>
          <p className="mt-3 max-w-xl text-muted">
            A gift of any size helps provide Braille books, meals, learning materials and loving
            care. Here are three ways to help.
          </p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {WAYS.map(({ icon: Icon, title, text }) => (
              <li key={title} className="card min-w-0 p-5">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-sky-soft text-navy">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-3 text-lg">{title}</h3>
                <p className="mt-1 text-sm text-muted">{text}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Donate card */}
        <div className="min-w-0 lg:col-span-2">
          <div className="card min-w-0 overflow-hidden p-6 shadow-xl">
            <h3 className="text-2xl">Make a donation</h3>
            <p className="mt-2 text-sm text-muted">
              Give securely online, or use the bank / mobile-money details below.
            </p>

            <Link to="/contact" className="btn btn-gold mt-5 w-full">
              <Heart className="h-5 w-5" aria-hidden="true" /> Donate now
            </Link>

            <dl className="mt-6 space-y-4 border-t border-border pt-5 text-sm">
              <div className="flex min-w-0 items-start gap-3">
                <Landmark className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <div className="min-w-0">
                  <dt className="font-semibold text-heading">Bank transfer</dt>
                  <dd className="text-muted">Bank name, account name &amp; number — <span className="font-semibold text-ink">[ to be added ]</span></dd>
                </div>
              </div>
              <div className="flex min-w-0 items-start gap-3">
                <Smartphone className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <div className="min-w-0">
                  <dt className="font-semibold text-heading">Mobile Money</dt>
                  <dd className="text-muted">MoMo number &amp; name — <span className="font-semibold text-ink">[ to be added ]</span></dd>
                </div>
              </div>
            </dl>
            <p className="mt-4 text-xs text-muted">
              For a receipt or to discuss a larger gift, please contact us directly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
