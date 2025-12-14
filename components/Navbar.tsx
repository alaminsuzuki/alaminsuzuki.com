"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

interface NavbarProps {
    lang?: 'fr' | 'en';
}

export default function Navbar({ lang = 'fr' }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    const handleLogoClick = (e: React.MouseEvent) => {
        e.preventDefault();
        const targetPath = lang === 'en' ? '/en' : '/';

        if (pathname === targetPath) {
            // If already on the page, just scroll to top
            window.scrollTo({ top: 0, behavior: 'instant' });
        } else {
            // If changing pages, navigate normally (Hero component will handle scroll on mount)
            router.push(targetPath);
        }
    };

    const labels = {
        fr: {
            about: "À propos",
            projects: "Projets",
            contact: "Contact",
        },
        en: {
            about: "About",
            projects: "Projects",
            contact: "Contact",
        }
    };

    const t = labels[lang];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 border-b border-white/5 transition-colors duration-300 ${isOpen ? 'bg-[#050608]' : 'bg-[#050608]/80 backdrop-blur-md'}`}>
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <a
                        href={lang === 'en' ? '/en' : '/'}
                        className="font-script font-bold text-lg tracking-tight z-50 relative cursor-pointer"
                        onClick={handleLogoClick}
                    >
                        Al-Amin suzuki
                    </a>
                    <span className="hidden sm:block text-sm text-gray-500 font-medium">
                        Web Designer & Developer
                    </span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-5">
                    <Link href="#about" className="text-sm text-gray-400 hover:text-white transition-colors">{t.about}</Link>
                    <Link href="#projects" className="text-sm text-gray-400 hover:text-white transition-colors">{t.projects}</Link>
                    <Link href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors">{t.contact}</Link>

                    <div className="h-4 w-px bg-white/10" />

                    <div className="flex items-center gap-3">
                        <Link href="/" className={`text-sm font-mono ${lang === 'fr' ? 'text-white' : 'text-gray-500 hover:text-white'}`}>FR</Link>
                        <span className="text-white/20">/</span>
                        <Link href="/en" className={`text-sm font-mono ${lang === 'en' ? 'text-white' : 'text-gray-500 hover:text-white'}`}>EN</Link>
                    </div>
                </div>

                {/* Mobile Controls */}
                <div className="flex md:hidden items-center gap-4">
                    {/* Mobile Language Switcher */}
                    <div className="flex items-center gap-3">
                        <Link href="/" className={`text-sm font-mono ${lang === 'fr' ? 'text-white' : 'text-gray-500'}`}>FR</Link>
                        <span className="text-white/20">/</span>
                        <Link href="/en" className={`text-sm font-mono ${lang === 'en' ? 'text-white' : 'text-gray-500'}`}>EN</Link>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="z-50 w-10 h-10 flex flex-col justify-center items-center gap-1.5 relative group"
                    >
                        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </button>
                </div>

                {/* Mobile Dropdown */}
                <div className={`fixed inset-0 bg-black z-40 transition-all duration-500 ease-in-out md:hidden flex flex-col pt-24 px-6 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
                    <div className="flex flex-col gap-8 text-2xl font-display font-bold">
                        <Link href="#about" onClick={() => setIsOpen(false)} className="hover:text-gray-400 transition-colors">{t.about}</Link>
                        <Link href="#projects" onClick={() => setIsOpen(false)} className="hover:text-gray-400 transition-colors">{t.projects}</Link>
                        <Link href="#contact" onClick={() => setIsOpen(false)} className="hover:text-gray-400 transition-colors">{t.contact}</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
