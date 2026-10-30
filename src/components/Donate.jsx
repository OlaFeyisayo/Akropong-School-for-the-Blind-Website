import { HeartHandshake, BookOpen, Users } from 'lucide-react';

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
          <p className="max-w-xl text-muted">
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
            <p className="mt-3 text-ink">
              To donate, contact us on{' '}
              <a href="tel:+233553511126" className="font-bold text-primary hover:underline">
                0553511126
              </a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
