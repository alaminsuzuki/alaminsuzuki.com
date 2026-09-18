"use client";
import { Fragment, useEffect, useState, useRef } from "react";
import Image from "next/image";

interface AboutSectionProps {
    title: string;
    subtitle: string;
    subtext?: string;
    text: string[];
}

// Reveal each sentence in turn, capped so the last line of a long "about"
// never lands more than ~2s behind the first.
const sentenceDelay = (index: number) => Math.min(400 + index * 90, 2000);

export default function AboutSection({ title, subtitle, subtext, text }: AboutSectionProps) {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    const paragraphs = text.map((paragraph) => paragraph.split(/(?<=[.!?])\s+/));
    // Running sentence count at the start of each paragraph, so the stagger
    // stays ordered across paragraph boundaries however long the copy gets.
    const offsets = paragraphs.reduce<number[]>(
        (acc, sentences, index) => [...acc, acc[index] + sentences.length],
        [0]
    );

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} id="about" className="relative z-10 py-32 bg-[#050608] text-white overflow-hidden">
            {/* Warped Grid Background */}
            <div className="absolute inset-0 bg-grid-warp opacity-30 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">

                {/* Title Area */}
                <div className="md:col-span-4 relative">
                    <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                        <h2 className="font-display text-6xl md:text-8xl font-bold tracking-tighter mb-16 leading-none">
                            {title}
                        </h2>
                    </div>

                    {/* Astronaut Graphic */}
                    <div className={`relative w-2/5 mx-auto transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                        <div className="hover:scale-105 transition-transform duration-700">
                            <Image
                                src="/assets/about section/astronauts.png"
                                alt="Astronauts"
                                width={1000}
                                height={1000}
                                className="w-full h-auto object-contain animate-float"
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* Content Area */}
                <div className={`md:col-span-1 md:col-start-6 hidden md:block border-l border-white/20 h-full transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 origin-top'}`} />

                <div className="md:col-span-6 flex flex-col justify-center space-y-8">
                    <div className={`transition-all duration-1000 delay-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                        <span className="inline-block px-4 py-1 rounded-full border border-white/30 text-xs font-mono uppercase tracking-widest w-fit mb-4">
                            {subtitle}
                        </span>
                        {subtext && (
                            <h3 className="font-display text-2xl md:text-3xl font-bold leading-tight">
                                {subtext}
                            </h3>
                        )}
                    </div>

                    <div className="text-lg md:text-xl font-light leading-relaxed space-y-6 text-white">
                        {paragraphs.map((sentences, pIndex) => (
                            <p key={pIndex}>
                                {sentences.map((sentence, sIndex) => (
                                    // Real space between sentences, not a margin: the gap has to
                                    // survive being copied out of the page, not just look right.
                                    <Fragment key={sIndex}>
                                        <span
                                            className={`inline-block transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                                            style={{ transitionDelay: `${sentenceDelay(offsets[pIndex] + sIndex)}ms` }}
                                        >
                                            {sentence}
                                        </span>{' '}
                                    </Fragment>
                                ))}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
