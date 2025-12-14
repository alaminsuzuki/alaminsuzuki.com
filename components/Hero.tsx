"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

interface HeroProps {
    title: string;
    subtitle: string;
    primaryBtn: string;
    secondaryBtn: string;
}

export default function Hero({ title, subtitle, primaryBtn, secondaryBtn }: HeroProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Force scroll to top on mount to prevent browser scroll restoration issues
        window.scrollTo(0, 0);
        setTimeout(() => setMounted(true), 100);
    }, []);

    return (
        <section className="sticky top-0 min-h-screen z-0 flex flex-col pt-12 md:pt-0 overflow-hidden bg-[#F5F5F7] text-[#050608] selection:bg-black selection:text-white">

            {/* Rocket Animation - On Load */}
            <div className="absolute bottom-0 left-0 z-50 w-96 h-96 animate-rocket pointer-events-none">
                <Image
                    src="/assets/hero/Rocket.png"
                    alt="Rocket"
                    fill
                    className="object-contain"
                    priority
                />
            </div>

            {/* Topographic Background */}
            <div className="absolute inset-0 bg-topography opacity-20 pointer-events-none mix-blend-multiply" />

            {/* Marquee Name */}
            <div className={`w-full overflow-hidden whitespace-nowrap py-4 z-20 shrink-0 transition-all duration-1000 delay-200 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                <div className="animate-marquee inline-block">
                    <span className="font-script text-[10vw] leading-normal font-bold tracking-tighter mx-12 py-4 inline-block">
                        {title}
                    </span>
                    <span className="font-script text-[10vw] leading-normal font-bold tracking-tighter mx-12 py-4 inline-block">
                        {title}
                    </span>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="flex-1 max-w-7xl mx-auto w-full px-6 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-center relative z-10 pb-24 md:pb-32">

                {/* Left: Role & Buttons */}
                <div className={`md:col-span-3 flex flex-col justify-center h-full gap-8 order-2 md:order-1 transition-all duration-1000 delay-500 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                    <div className="space-y-4">
                        <div className="w-8 h-8 rounded-full border border-black flex items-center justify-center">
                            <div className="w-2 h-2 bg-black rounded-full animate-ping" />
                        </div>
                        <p className="font-sans text-lg font-medium leading-tight max-w-md">
                            {subtitle}
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <a href="https://calendly.com/alaminsuzuki6/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-black text-white font-bold rounded-full hover:scale-105 transition-transform">
                            {primaryBtn}
                        </a>
                        <a href="mailto:hello@alaminsuzuki.com" className="inline-flex items-center justify-center px-6 py-3 border border-black text-black font-bold rounded-full hover:bg-black/5 transition-colors">
                            {secondaryBtn}
                        </a>
                    </div>
                </div>

                {/* Center: Vortex / Avatar */}
                <div className={`md:col-span-6 flex justify-center items-center relative order-1 md:order-2 h-[250px] md:h-auto transition-all duration-1000 delay-700 ease-out ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                    {/* Vortex Graphic (CSS) */}
                    <div className="relative w-56 h-56 md:w-80 md:h-80">
                        <div className="absolute inset-0 border-[3px] border-black rounded-[40%_60%_70%_30%/40%_50%_60%_50%] animate-[spin_6s_linear_infinite]" />
                        <div className="absolute inset-4 border-[2px] border-black rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-[spin_8s_linear_infinite_reverse]" />
                        <div className="absolute inset-8 border-[1px] border-black rounded-[50%_50%_20%_80%/25%_80%_20%_67%] animate-[spin_10s_linear_infinite]" />

                        {/* Central Avatar Placeholder */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-black bg-black z-10 hover:scale-110 transition-transform duration-500 hover:rotate-6">
                            <Image
                                src="/assets/hero/Gemini 2.png"
                                alt="Al-Amin Suzuki"
                                fill
                                className="object-cover animate-ghost"
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* Right: Abstract Elements */}
                <div className={`md:col-span-3 flex flex-col items-end justify-center h-full gap-8 order-3 transition-all duration-1000 delay-900 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                    <div className="w-50 h-50 relative animate-[spin_20s_linear_infinite]">
                        <Image
                            src="/assets/hero/planets-Hero.png"
                            alt="Planets"
                            fill
                            className="object-contain"
                        />
                    </div>

                    <div className="text-right space-y-2">
                        <p className="font-mono text-xs uppercase tracking-widest opacity-60">Based in France</p>
                        <p className="font-mono text-xs uppercase tracking-widest opacity-60">Maison CTRL</p>
                    </div>
                </div>
            </div>

            <div className={`absolute bottom-32 w-full text-center animate-pulse z-20 transition-all duration-1000 delay-[1200ms] ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                <span className="font-mono text-xs uppercase tracking-widest">Scroll Down ↓</span>
            </div>
        </section>
    );
}
