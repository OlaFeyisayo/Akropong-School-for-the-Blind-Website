import PageHero from '../components/PageHero.jsx';
import Admissions from '../components/Admissions.jsx';

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Admissions"
        title="Enrol your child"
        subtitle="A simple, personal process — we'll guide you every step of the way."
        image="/images/events-guided-walk.jpg"
      />
      <Admissions />
    </>
  );
}
