interface CTASectionProps {
    title: string;
    text: string[];
    primaryBtn: string;
    email: string;
}

export default function CallToActionSection({ title, text, primaryBtn, email }: CTASectionProps) {
    return (
        <section id="contact" className="py-24 md:py-32 border-t border-white/5">
            <div className="max-w-3xl mx-auto px-6 text-center">
                <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-8">{title}</h2>

                <div className="text-xl text-gray-300 leading-relaxed mb-12 space-y-4">
                    {text.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>

                <div className="flex flex-col items-center gap-6">
                    <a href="#" className="px-10 py-5 bg-white text-black font-semibold rounded-2xl text-lg hover:bg-gray-200 transition-all hover:scale-105 active:scale-95">
                        {primaryBtn}
                    </a>
                    <a href={`mailto:${email}`} className="text-gray-500 hover:text-white transition-colors underline decoration-gray-700 underline-offset-4 hover:decoration-white">
                        {email}
                    </a>
                </div>
            </div>
        </section>
    );
}
