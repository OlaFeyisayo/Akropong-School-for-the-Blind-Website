import { PhoneCall, FileText, ClipboardCheck } from 'lucide-react';

const STEPS = [
  {
    icon: PhoneCall,
    title: '1. Get in touch',
    text: 'Call or email the school office to tell us about your child and ask any questions you have.',
  },
  {
    icon: FileText,
    title: '2. Apply',
    text: 'Complete the application and provide the required documents — birth certificate, any medical or eye-health reports, and recent photographs.',
  },
  {
    icon: ClipboardCheck,
    title: '3. Assessment & welcome',
    text: 'We arrange a friendly assessment to understand your child’s needs, confirm a place, and welcome them into our community.',
  },
];

export default function Admissions() {
  return (
    <section id="admissions" className="scroll-mt-20 bg-bg py-16 sm:py-24">
      <div className="wrap grid gap-10 lg:grid-cols-5 lg:gap-16">
        {/* Sticky intro */}
        <div className="min-w-0 lg:col-span-2">
          <div className="lg:sticky lg:top-24">
            <span className="chip bg-sky-soft text-navy">Admissions</span>
            <h2 className="mt-4 text-3xl sm:text-4xl">Enrol your child</h2>
            <p className="mt-4 text-lg text-ink">
              We welcome blind and visually impaired children from across Ghana. The process is
              simple and personal — we are here to guide you at every step.
            </p>
            <p className="mt-3 text-muted">
              Please contact us to confirm current requirements, fees and available places.
            </p>
            <a href="#contact" className="btn btn-primary mt-6">Contact admissions</a>
          </div>
        </div>

        {/* Steps */}
        <ol className="grid min-w-0 gap-5 lg:col-span-3">
          {STEPS.map(({ icon: Icon, title, text }) => (
            <li key={title} className="card flex min-w-0 items-start gap-4 p-6">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy text-white">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <h3 className="text-xl">{title}</h3>
                <p className="mt-1 text-muted">{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
