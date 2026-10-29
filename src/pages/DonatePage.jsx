import PageHero from '../components/PageHero.jsx';
import Donate from '../components/Donate.jsx';

export default function DonatePage() {
  return (
    <>
      <PageHero
        eyebrow="Support us"
        title="Your gift changes a child's life"
        subtitle="Your support gives blind children the tools, care and opportunity to thrive."
        image="/images/events-girls-procession.jpg"
      />
      <Donate />
    </>
  );
}
