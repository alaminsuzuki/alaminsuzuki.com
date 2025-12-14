import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';

const projects = [
  {
    title: "Maison CTRL — Design × Build Studio",
    description: "Identité visuelle et site du studio pour aider les fondateurs à lancer des marques et produits plus tranchants.",
    tags: ["Identité", "Web Design", "Stratégie"],
    image: "/assets/placeholder/maison-ctrl.png",
    hoverImage: "/assets/placeholder-hover/maison-ctrl-hover.png"
  },
  {
    title: "Nudgr — application d’habitudes",
    description: "Concept et design produit pour un tracker d’habitudes assisté par IA qui te relance au bon moment.",
    tags: ["Product Design", "App UI", "Concept"],
    image: "/assets/placeholder/nudgr.png",
    hoverImage: "/assets/placeholder-hover/nudgr-hover.png"
  },
  {
    title: "Student Hustle — plateforme d’emplois étudiants",
    description: "Branding, landing page et supports de pitch pour une plateforme qui connecte des étudiants avec des missions flexibles.",
    tags: ["Branding", "Landing Page", "Pitch Deck"],
    image: "/assets/placeholder/student-hustle.png",
    hoverImage: "/assets/placeholder-hover/student-hustle-hover.png"
  },
  {
    title: "Echoes — journaling assisté par IA",
    description: "Concept, interface et narration pour un outil de journaling où tu écris, et l’IA te répond comme des mentors historiques.",
    tags: ["Concept", "UX Writing", "Interface"],
    image: "/assets/placeholder/echoes.png",
    hoverImage: "/assets/placeholder-hover/echoes-hover.png"
  }
];

export default function Home() {
  return (
    <>
      <Navbar lang="fr" />
      <Hero
        title={`Web Designer × Builder × Entrepreneur ×`}
        subtitle="Al-Amin Suzuki — Designer & développeur spécialisé dans les sites modernes, identités et interfaces."
        primaryBtn="Réserver un appel"
        secondaryBtn="Envoyer un mail"
      />
      <AboutSection
        title="À propos"
        subtitle="Qui je suis"
        subtext="Designer & développeur basé en France, travaillant avec des créateurs et petites équipes partout dans le monde."
        text={[
          "J’ai grandi entre plusieurs cultures, ce qui a façonné une approche ouverte et sensible du design.",
          "Aujourd’hui, je travaille à l’intersection du design, du code et de l’identité de marque.",
          "Je dirige Maison CTRL, un studio où je conçois et développe des sites web modernes pour des fondateurs, créatifs et petites équipes.",
          "Mon rôle est d’aider les clients à transformer une idée en expérience digitale claire, esthétique et prête à l’usage, avec une logique de builder et un fort sens du détail"
        ]}
      />
      <ProjectsSection
        title="Mes projets"
        subtitle="Un mélange de missions, de concepts studio et de projets perso."
        projects={projects}
      />
    </>
  );
}
