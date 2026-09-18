import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';

const projects = [
  {
    title: "Believe — outils d’analyse pour les labels et les artistes",
    description: "Product Manager sur la squad qui construit les surfaces analytiques de Backstage, le portail des labels et des artistes. Discovery auprès de dix utilisateurs, spécifications et user stories, plan de tracking d’une fonctionnalité en construction, et l’analyse d’usage qui a déplacé une fonctionnalité livrée de « comment on l’améliore » vers « est-ce qu’on continue à investir ».",
    tags: ["Product Management", "Discovery", "Data"],
    image: "/assets/placeholder/believe.png"
  },
  {
    title: "Nudgr — application d’habitudes",
    description: "Concept et design produit d’un tracker d’habitudes assisté par IA. Le pari tenait en une décision : la relance au bon moment plutôt qu’une liste de cases à cocher de plus.",
    tags: ["Product Design", "Concept", "IA"],
    image: "/assets/placeholder/nudgr.png",
    hoverImage: "/assets/placeholder-hover/nudgr-hover.png"
  },
  {
    title: "Echoes — journaling assisté par IA",
    description: "Concept, interface et écriture d’un outil de journaling où l’IA répond avec la voix de mentors historiques. Le sujet difficile n’était pas le modèle, c’était le ton des réponses.",
    tags: ["Concept produit", "UX Writing", "IA"],
    image: "/assets/placeholder/echoes.png",
    hoverImage: "/assets/placeholder-hover/echoes-hover.png"
  },
  {
    title: "Student Hustle — plateforme d’emplois étudiants",
    description: "Positionnement, landing page et support de pitch pour une plateforme qui connecte des étudiants à des missions flexibles.",
    tags: ["Positionnement", "Go-to-market", "Landing Page"],
    image: "/assets/placeholder/student-hustle.jpg",
    hoverImage: "/assets/placeholder-hover/student-hustle-hover.png"
  },
  {
    title: "Maison CTRL — studio design et développement",
    description: "Le studio que je dirige. Identité et sites pour des fondateurs et des petites équipes, de la première conversation à la mise en ligne. C’est là que j’ai appris à livrer seul, et c’est pour ça que je sais ce que coûte une spec floue.",
    tags: ["Identité", "Web Design", "Exécution"],
    image: "/assets/placeholder/maison-ctrl.png",
    hoverImage: "/assets/placeholder-hover/maison-ctrl-hover.png"
  }
];

export default function Home() {
  return (
    <>
      <Navbar lang="fr" />
      <Hero
        marquee="Product × Data × Build ×"
        name="Al-Amin Suzuki"
        role="Product Manager"
        lead="Je fabrique des décisions, pas des tableaux de bord."
        body="Six mois chez Believe sur les outils d’analyse des labels et des artistes. Je conçois, je spécifie, et je sais construire ce que je spécifie."
        primaryBtn="Me contacter"
        secondaryBtn="Voir mon CV"
        availability="Disponible en novembre 2026. Paris."
      />
      <AboutSection
        title="À propos"
        subtitle="Qui je suis"
        subtext="Product Manager, basé à Paris. Anglais langue maternelle. MSc Entrepreneuriat & Innovation, Skema."
        text={[
          "Je prototype au lieu d’attendre une maquette, je parle aux développeurs sans traducteur, et j’écris des specs qu’on peut implémenter sans revenir me voir trois fois.",
          "Chez Believe : discovery utilisateur, specs et user stories, plan de tracking. J’ai creusé l’usage d’une fonctionnalité déjà livrée, et très peu de gens la trouvaient. Personne n’avait eu tort avant, on n’avait juste pas le chiffre. On a ajouté un point d’entrée dans l’interface, et l’adoption est repartie.",
          "Avant ça, plusieurs années à concevoir et développer des sites et des identités de marque, et un studio que je dirige encore. C’est là que j’ai appris ce que coûte une spec floue.",
          "Je construis aussi mes propres outils : mes tâches sortent des transcripts de réunion, mes tickets se rédigent à deux, et un calcul d’usage hebdomadaire tourne en script avec un test qui s’arrête si le résultat dérive."
        ]}
      />
      <ProjectsSection
        title="Ce que j’ai construit"
        projects={projects}
      />
    </>
  );
}
