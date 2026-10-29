import PageHero from '../components/PageHero.jsx';
import Events from '../components/Events.jsx';
import Awards from '../components/Awards.jsx';

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Events & celebrations"
        subtitle="Celebrating our students' milestones in academics, sport and the arts."
        image="/images/events-anniversary.jpg"
      />
      <Events />
      <Awards />
    </>
  );
}
