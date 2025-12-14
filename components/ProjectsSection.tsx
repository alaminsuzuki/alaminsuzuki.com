"use client";
import { useEffect, useState, useRef } from "react";

interface Project {
    title: string;
    description: string;
    tags: string[];
    image: string;
    hoverImage: string;
}

interface ProjectsSectionProps {
    title: string;
    subtitle: string;
    projects: Project[];
}

function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="group relative bg-black border-2 border-white/20 rounded-3xl overflow-hidden hover:border-white transition-colors duration-300 h-full">
            {/* Image placeholder area */}
            <div className="aspect-video bg-white/5 border-b border-white/10 relative overflow-hidden">
                {/* Default Image - Dims on hover */}
                <div className="absolute inset-0 transition-all duration-500 ease-out opacity-100 group-hover:opacity-40 group-hover:scale-95">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Hover Image - Pops out (Steps up in scale and opacity) */}
                <div className="absolute inset-0 transition-all duration-500 ease-out opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-110 origin-center z-10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={project.hoverImage}
                        alt={`${project.title} Hover`}
                        className="w-full h-full object-contain drop-shadow-2xl"
                    />
                </div>

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                    <span className="font-display text-4xl font-bold text-white opacity-0 group-hover:opacity-0 transition-opacity duration-300">
                        {project.title.split('—')[0].trim()}
                    </span>
                </div>
            </div>

            <div className="p-8">
                <h3 className="font-display text-3xl font-bold text-white mb-4 uppercase leading-none">{project.title}</h3>
                <p className="text-gray-400 leading-relaxed font-sans mb-6">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-mono text-black bg-white px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default function ProjectsSection({ title, projects }: ProjectsSectionProps) {
    const headerRef = useRef<HTMLDivElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);

    // Duplicate projects to create seamless loop (x4 for smoothness on wide screens)
    const allProjects = [...projects, ...projects, ...projects, ...projects];

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        if (!scrollContainer) return;

        let animationFrameId: number;
        let lastTimestamp = 0;
        const speed = 0.5; // Pixels per frame approx

        const animate = (timestamp: number) => {
            if (!lastTimestamp) lastTimestamp = timestamp;
            // deltaTime removed as unused
            lastTimestamp = timestamp;

            if (!isPaused && scrollContainer) {
                if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
                    // Reset to start (minus one pixel to prevent jitter)
                    scrollContainer.scrollLeft = 0;
                } else {
                    scrollContainer.scrollLeft += speed; // Simple constant speed
                }
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrameId);
    }, [isPaused]);

    // Header animation logic
    useEffect(() => {
        const handleScroll = () => {
            if (!headerRef.current) return;

            const rect = headerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            const start = windowHeight * 0.9;
            const end = windowHeight * 0.3;

            const progress = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));

            const scale = 0.5 + (0.5 * progress);
            const opacity = progress;

            headerRef.current.style.transform = `scale(${scale})`;
            headerRef.current.style.opacity = `${opacity}`;
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!scrollContainerRef.current) return;
        setIsDragging(true);
        setIsPaused(true);
        setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
        setScrollLeft(scrollContainerRef.current.scrollLeft);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        // Note: We don't resume animation here because mouse is likely still hovering
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
        setIsPaused(false);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !scrollContainerRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Scroll multiplier for faster swiping
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <section id="projects" className="relative z-10 py-32 bg-[#F5F5F7] overflow-hidden">
            <div className="w-full">
                <div
                    ref={headerRef}
                    className="w-full overflow-hidden mb-24 origin-center will-change-transform"
                    style={{ transform: 'scale(0.5)', opacity: 0 }}
                >
                    <div className="animate-marquee inline-block whitespace-nowrap">
                        {[...Array(2)].map((_, mainIdx) => (
                            <div key={mainIdx} className="inline-block">
                                {[...Array(3)].map((_, subIdx) => (
                                    <span key={subIdx} className="font-display text-8xl md:text-9xl font-bold text-black uppercase tracking-tighter mx-8 md:mx-16 py-4 inline-block align-middle leading-normal">
                                        {title} <span className="inline-block animate-pulse text-[#FF3B30] align-baseline">🔥</span>
                                    </span>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full">
                    {/* Hybrid Scroll Container: Auto-scrolls but allows manual drag */}
                    <div
                        ref={scrollContainerRef}
                        className={`flex gap-8 overflow-x-auto pb-12 px-6 md:px-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] ${isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'}`}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={handleMouseLeave}
                        onMouseDown={handleMouseDown}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}
                        onTouchStart={() => setIsPaused(true)}
                        onTouchEnd={() => setIsPaused(false)}
                    >
                        {allProjects.map((project, idx) => (
                            <div key={idx} className="w-[85vw] md:w-[45vw] shrink-0 first:pl-2 last:pr-2" onDragStart={(e) => e.preventDefault()}>
                                <ProjectCard project={project} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
