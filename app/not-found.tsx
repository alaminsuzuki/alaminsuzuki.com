import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '404 - Oopsy Daisies!',
    description: 'Looks like we got a lost pup here.',
};

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#050608] flex flex-col items-center justify-center text-center px-6">
            <div className="space-y-8 animate-fade-in-up">
                <div className="text-8xl animate-bounce">
                    🐶
                </div>

                <h1 className="font-display text-4xl md:text-6xl font-bold text-white">
                    Oopsy Daisies!
                </h1>

                <p className="font-sans text-xl text-gray-400 max-w-md mx-auto">
                    Looks like we got a lost pup here.
                </p>

                <Link
                    href="/"
                    className="inline-block px-8 py-3 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform"
                >
                    Come back home
                </Link>
            </div>
        </div>
    );
}
