import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';

const projects = [
    {
        title: "Believe — analytics tools for labels and artists",
        description: "Product Manager on the squad building the analytics surfaces of Backstage, the label and artist portal. Discovery with ten users, specs and user stories, a tracking plan for a feature still in build, and the usage analysis that moved an already-shipped feature from “how do we improve it” to “do we keep investing”.",
        tags: ["Product Management", "Discovery", "Data"],
        image: "/assets/placeholder/believe.png"
    },
    {
        title: "Nudgr — habit app",
        description: "Concept and product design for an AI-assisted habit tracker. The whole bet came down to one decision: the nudge at the right moment rather than one more list of checkboxes.",
        tags: ["Product Design", "Concept", "AI"],
        image: "/assets/placeholder/nudgr.png",
        hoverImage: "/assets/placeholder-hover/nudgr-hover.png"
    },
    {
        title: "Echoes — AI journaling",
        description: "Concept, interface and writing for a journaling tool where AI replies in the voice of historical mentors. The hard part was never the model, it was the tone of the replies.",
        tags: ["Product Concept", "UX Writing", "AI"],
        image: "/assets/placeholder/echoes.png",
        hoverImage: "/assets/placeholder-hover/echoes-hover.png"
    },
    {
        title: "Student Hustle — student job platform",
        description: "Positioning, landing page and pitch materials for a platform connecting students with flexible work.",
        tags: ["Positioning", "Go-to-market", "Landing Page"],
        image: "/assets/placeholder/student-hustle.jpg",
        hoverImage: "/assets/placeholder-hover/student-hustle-hover.png"
    },
    {
        title: "Maison CTRL — design and development studio",
        description: "The studio I run. Identity and websites for founders and small teams, from the first conversation to launch. It’s where I learned to ship alone, and it’s why I know what a vague spec costs.",
        tags: ["Identity", "Web Design", "Execution"],
        image: "/assets/placeholder/maison-ctrl.png",
        hoverImage: "/assets/placeholder-hover/maison-ctrl-hover.png"
    }
];

export default function HomeEn() {
    return (
        <>
            <Navbar lang="en" />
            <Hero
                marquee="Product × Data × Build ×"
                name="Al-Amin Suzuki"
                role="Product Manager"
                lead="I build decisions, not dashboards."
                body="Six months at Believe on the analytics tools used by labels and artists. I design, I spec, and I can build what I spec."
                primaryBtn="Get in touch"
                secondaryBtn="View my CV"
                availability="Available November 2026. Paris."
            />
            <AboutSection
                title="About"
                subtitle="Who I am"
                subtext="Product Manager, based in Paris. Native English speaker. MSc Entrepreneurship & Innovation, Skema."
                text={[
                    "I prototype instead of waiting for a mockup, I talk to developers without a translator, and I write specs you can implement without coming back to me three times.",
                    "At Believe: user discovery, specs and user stories, tracking plans. I dug into the usage of a feature we had already shipped, and very few people were finding it. Nobody had been wrong before, we just didn’t have the number. We added an entry point in the interface, and adoption picked back up.",
                    "Before that, several years designing and building websites and brand identities, and a studio I still run. That’s where I learned what a vague spec costs.",
                    "I also build my own tools: my tasks come out of meeting transcripts, my tickets get drafted in pairs, and a weekly usage calculation runs as a script with a test that halts if the result drifts. I don’t wait to be handed tooling."
                ]}
            />
            <ProjectsSection
                title="What I’ve built"
                projects={projects}
            />
        </>
    );
}
