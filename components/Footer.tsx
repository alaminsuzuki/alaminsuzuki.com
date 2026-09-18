"use client";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const [isVisible, setIsVisible] = useState(false);
    const footerRef = useRef<HTMLElement>(null);

    // Localization Logic
    const pathname = usePathname();
    const isEn = pathname?.startsWith('/en');

    const isLegal = pathname === '/mentions-legales';

    const content = {
        title: isEn ? "Let's talk" : "Discutons",
        text1: isEn
            ? "I'm looking for a Product Manager role from November 2026, in Paris. Tech product, ideally somewhere data is used to decide rather than to decorate."
            : "Je cherche un poste de Product Manager à partir de novembre 2026, sur Paris. Produit tech, idéalement là où la donnée sert à décider.",
        text2: isEn
            ? "If you're hiring, or you know someone who is, get in touch."
            : "Si vous recrutez, ou si vous connaissez quelqu'un qui recrute, écrivez-moi.",
        emailBtn: isEn ? "Send an email" : "Envoyer un mail",
        cvBtn: isEn ? "CV (PDF)" : "CV (PDF)",
        copyright: "Product × Data × Build"
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (footerRef.current) {
            observer.observe(footerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Helper for transition classes
    const getTransition = () =>
        `transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`;


    return (
        <footer ref={footerRef} id="contact" className="relative z-10 w-full bg-[#050608] pt-20 pb-12 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {!isLegal && (
                    <>
                        {/* Header */}
                        <div className="text-center mb-24">
                            <div className={getTransition()} style={{ transitionDelay: '0ms' }}>
                                <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-8">
                                    {content.title}
                                </h2>
                            </div>

                            <div className={`w-24 h-24 mx-auto animate-bounce text-6xl mb-8 ${getTransition()}`} style={{ transitionDelay: '200ms' }}>
                                👾
                            </div>

                            <div className={`max-w-3xl mx-auto space-y-8 mb-12 ${getTransition()}`} style={{ transitionDelay: '400ms' }}>
                                <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
                                    {content.text1}
                                </p>
                                <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
                                    {content.text2}
                                </p>
                            </div>

                            <div className={`flex flex-col items-center gap-6 ${getTransition()}`} style={{ transitionDelay: '600ms' }}>
                                <div className="flex flex-wrap justify-center gap-4">
                                    <a href="mailto:alaminsuzuki6@gmail.com" className="px-8 py-3 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">
                                        {content.emailBtn}
                                    </a>
                                    <a href="https://www.linkedin.com/in/al-amin-suzuki/" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border border-white text-white font-bold rounded-full hover:bg-white/10 transition-colors">
                                        LinkedIn
                                    </a>
                                    <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border border-white text-white font-bold rounded-full hover:bg-white/10 transition-colors">
                                        {content.cvBtn}
                                    </a>
                                </div>

                                <a
                                    href="mailto:alaminsuzuki6@gmail.com"
                                    className="text-gray-500 hover:text-white transition-colors underline decoration-gray-700 underline-offset-4 hover:decoration-white"
                                >
                                    alaminsuzuki6@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* Bento Grid Links */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20 h-96 md:h-64">
                            {/* YouTube - Red */}
                            <a href="https://www.youtube.com/@alaminsuzuki" target="_blank" rel="noopener noreferrer" className={`group relative bg-[#FF3B30] rounded-3xl p-6 flex flex-col justify-end overflow-hidden hover:scale-[1.02] transition-transform ${getTransition()}`} style={{ transitionDelay: '800ms' }}>
                                <span className="font-display text-4xl font-bold text-white relative z-10">YouTube</span>
                                <div className="absolute top-4 right-4 text-4xl opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 duration-300">↘</div>
                            </a>

                            {/* Instagram - Yellow */}
                            <a href="https://www.instagram.com/alaminsuzuki_/" target="_blank" rel="noopener noreferrer" className={`group relative bg-[#FFCC00] rounded-3xl p-6 flex flex-col justify-end overflow-hidden hover:scale-[1.02] transition-transform md:col-span-2 lg:col-span-1 ${getTransition()}`} style={{ transitionDelay: '900ms' }}>
                                <span className="font-display text-4xl font-bold text-white relative z-10">Instagram</span>
                                <div className="absolute top-4 right-4 text-4xl text-white opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 duration-300">↘</div>
                            </a>

                            {/* Mail - Purple */}
                            <a href="mailto:alaminsuzuki6@gmail.com" className={`group relative bg-[#AF52DE] rounded-3xl p-6 flex flex-col justify-end overflow-hidden hover:scale-[1.02] transition-transform ${getTransition()}`} style={{ transitionDelay: '1000ms' }}>
                                <span className="font-display text-4xl font-bold text-white relative z-10">Mail</span>
                                <div className="absolute top-4 right-4 text-4xl text-white opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 duration-300">↘</div>
                            </a>

                            {/* Behance - Blue */}
                            <a href="https://www.linkedin.com/in/al-amin-suzuki/" target="_blank" rel="noopener noreferrer" className={`group relative bg-[#007AFF] rounded-3xl p-6 flex flex-col justify-end overflow-hidden hover:scale-[1.02] transition-transform md:col-span-2 lg:col-span-1 ${getTransition()}`} style={{ transitionDelay: '1200ms' }}>
                                <span className="font-display text-4xl font-bold text-white relative z-10">LinkedIn</span>
                                <div className="absolute top-4 right-4 text-4xl text-white opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 duration-300">↘</div>
                            </a>
                        </div>
                    </>
                )}

                <div className={`flex flex-col md:flex-row justify-between items-center text-xs font-mono text-gray-500 uppercase tracking-widest border-t border-white/10 pt-8 ${getTransition()}`} style={{ transitionDelay: '1400ms' }}>
                    <p>© {currentYear} Al-Amin Suzuki.</p>
                    <div className="flex gap-4 md:mt-0 mt-2">
                        <a href="/mentions-legales" className="hover:text-white transition-colors">
                            {isEn ? "Legal Notice" : "Mentions Légales"}
                        </a>
                        <p>{content.copyright}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
