import { BookOpenText, Compass, Music, Wrench, Laptop, Home } from 'lucide-react';

const PROGRAMS = [
  {
    icon: BookOpenText,
    title: 'Braille literacy',
    text: 'Reading and writing in Braille — the foundation for every other subject and for lifelong independence.',
  },
  {
    icon: Compass,
    title: 'Orientation & mobility',
    text: 'Learning to move safely and confidently, from the classroom to the wider community.',
  },
  {
    icon: Music,
    title: 'Music & the arts',
    text: 'Singing, instruments and performance that build joy, confidence and lasting talent.',
  },
  {
    icon: Wrench,
    title: 'Vocational training',
    text: 'Practical, hands-on skills that prepare students for work and self-reliance.',
  },
  {
    icon: Laptop,
    title: 'Assistive technology',
    text: 'Screen readers and accessible devices that open up the digital world.',
  },
  {
    icon: Home,
    title: 'Boarding & care',
    text: 'A safe, welcoming home with meals, health care and houseparents who support each child.',
  },
];

export default function Programs() {
  return (
    <section id="programs" className="scroll-mt-20 bg-surface-2 py-16 sm:py-24">
      <div className="wrap">
        <div className="mx-auto max-w-2xl text-center">
          <span className="chip bg-sky-soft text-navy">Programs &amp; academics</span>
          <h2 className="mt-4 text-3xl sm:text-4xl">How we help every child flourish</h2>
          <p className="mt-3 text-muted">
            A rounded education — academic, practical and personal — designed around each student&rsquo;s needs.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map(({ icon: Icon, title, text }) => (
            <li key={title} className="card min-w-0 p-6 transition hover:-translate-y-1 hover:shadow-xl">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-sky-soft text-navy">
                <Icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-xl">{title}</h3>
              <p className="mt-2 text-muted">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
