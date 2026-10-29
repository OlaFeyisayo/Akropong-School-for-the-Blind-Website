import PageHero from '../components/PageHero.jsx';
import Programs from '../components/Programs.jsx';

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs & academics"
        title="How we help every child flourish"
        subtitle="A rounded education — academic, practical and personal — designed around each student's needs."
        image="/images/events-march.jpg"
      />
      <Programs showIntro={false} />
    </>
  );
}
