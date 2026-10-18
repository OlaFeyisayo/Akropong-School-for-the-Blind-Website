import { CalendarDays, Users, BookOpenText, Wrench } from 'lucide-react';

const STATS = [
  { icon: CalendarDays, value: 'Est. 1945', label: 'Founded to serve blind children in Ghana' },
  { icon: Users, value: '200+', label: 'Students educated and cared for' },
  { icon: BookOpenText, value: 'Braille', label: 'Braille-centred literacy and learning' },
  { icon: Wrench, value: 'Skills', label: 'Practical skills for an independent life' },
];

export default function Stats() {
  return (
    <section aria-label="Key facts" className="bg-bg">
      <div className="wrap -mt-10 grid gap-4 pb-4 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map(({ icon: Icon, value, label }) => (
          <div key={value} className="card flex min-w-0 items-start gap-4 p-5 shadow-lg">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-sky-soft text-navy">
              <Icon className="h-6 w-6" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <div className="font-display text-xl font-extrabold text-heading">{value}</div>
              <p className="mt-0.5 text-sm text-muted">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
