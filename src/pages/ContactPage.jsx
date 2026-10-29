import PageHero from '../components/PageHero.jsx';
import Contact from '../components/Contact.jsx';

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We'd love to hear from you"
        subtitle="Whether you are a parent, partner, volunteer or well-wisher, please reach out."
        image="/images/events-guide-rope.jpg"
      />
      <Contact />
    </>
  );
}
