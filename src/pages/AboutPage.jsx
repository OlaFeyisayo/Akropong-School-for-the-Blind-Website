import PageHero from '../components/PageHero.jsx';
import About from '../components/About.jsx';

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="About our school"
        subtitle="Our story, our mission, and the values that guide everything we do."
        image="/images/events-guide-rope.jpg"
      />
      <About />
    </>
  );
}
