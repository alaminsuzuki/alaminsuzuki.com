import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';

const projects = [
    {
        title: "Maison CTRL — Design × Build Studio",
        description: "Visual identity and studio website helping founders ship sharper brands and products.",
        tags: ["Identity", "Web Design", "Strategy"],
        image: "/assets/placeholder/maison-ctrl.png",
        hoverImage: "/assets/placeholder-hover/maison-ctrl-hover.png"
    },
    {
        title: "Nudgr — Smart Habit App",
        description: "Concept and product design for an AI-assisted habit and routine tracker that nudges you at the right time.",
        tags: ["Product Design", "App UI", "Concept"],
        image: "/assets/placeholder/nudgr.png",
        hoverImage: "/assets/placeholder-hover/nudgr-hover.png"
    },
    {
        title: "Student Hustle — Student Job Platform",
        description: "Brand, landing page and pitch materials for a platform connecting students with flexible, local opportunities.",
        tags: ["Branding", "Landing Page", "Pitch Deck"],
        image: "/assets/placeholder/student-hustle.png",
        hoverImage: "/assets/placeholder-hover/student-hustle-hover.png"
    },
    {
        title: "Echoes — AI Journaling",
        description: "Concept, interface, and narratives for a journaling tool where you write — and AI replies as historical mentors.",
        tags: ["Concept", "UX Writing", "Interface"],
        image: "/assets/placeholder/echoes.png",
        hoverImage: "/assets/placeholder-hover/echoes-hover.png"
    }
];

export default function HomeEn() {
    return (
        <>
            <Navbar lang="en" />
            <Hero
                title={`Web Designer × Builder × Entrepreneur ×`}
                subtitle="Al-Amin Suzuki — Designer & developer specializing in modern websites, identities, and interfaces."
                primaryBtn="Book a Call"
                secondaryBtn="Send an Email"
            />
            <AboutSection
                title="About"
                subtitle="Who I am"
                subtext="Designer & developer based in France, working with creators and small teams worldwide."
                text={[
                    "I grew up between multiple cultures, which shaped an open and sensitive approach to design.",
                    "Today, I work at the intersection of design, code, and brand identity.",
                    "I run Maison CTRL, a studio where I design and develop modern websites for founders, creatives, and small teams.",
                    "My role is to help clients transform an idea into a clear, aesthetic, and ready-to-use digital experience, with a builder's logic and a strong sense of detail."
                ]}
            />
            <ProjectsSection
                title="Selected Work & Experiments"
                subtitle="A mix of client work, studio concepts, and personal bets."
                projects={projects}
            />
        </>
    );
}
