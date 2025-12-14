export default function MentionsLegales() {
    return (
        <div className="min-h-screen bg-[#050608] text-white pt-12 pb-20 px-6">
            <div className="max-w-3xl mx-auto space-y-12">
                <h1 className="font-display text-4xl md:text-6xl font-bold mb-12">
                    Mentions légales
                </h1>

                <section className="space-y-6">
                    <h2 className="font-display text-2xl font-bold text-gray-200">1. Éditeur du site</h2>
                    <div className="text-gray-400 leading-relaxed space-y-2">
                        <p>Le site <span className="text-white">alaminsuzuki.com</span> (ci-après « le Site ») est édité par :</p>
                        <ul className="list-none space-y-1 mt-4">
                            <li><strong className="text-white">Al-Amin Suzuki</strong></li>
                            <li>Site portfolio personnel</li>
                            <li>Adresse : 1 allée Victor Vasarely, 06800 Cagnes-sur-Mer</li>
                            <li>E-mail : <a href="mailto:hello@alaminsuzuki.com" className="text-white hover:underline">hello@alaminsuzuki.com</a></li>
                        </ul>
                        <p className="pt-2">Directeur de la publication : <span className="text-white">Al-Amin Suzuki</span></p>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="font-display text-2xl font-bold text-gray-200">2. Hébergeur</h2>
                    <div className="text-gray-400 leading-relaxed">
                        <p>Le Site est hébergé par :</p>
                        <p className="mt-2 text-white">Vercel Inc.</p>
                        <p>Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="hover:underline">https://vercel.com</a></p>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="font-display text-2xl font-bold text-gray-200">3. Propriété intellectuelle</h2>
                    <p className="text-gray-400 leading-relaxed">
                        L’ensemble des éléments présents sur le Site, notamment les textes, images, illustrations, maquettes, interfaces, logos, vidéos et contenus visuels (ci-après « les Contenus »), sont la propriété exclusive d’Al-Amin Suzuki, sauf mention contraire.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                        Toute reproduction, représentation, modification, adaptation ou exploitation, totale ou partielle, des Contenus, par quelque procédé que ce soit, sans autorisation préalable écrite, est strictement interdite et constitue une contrefaçon au sens du Code de la propriété intellectuelle.
                    </p>
                </section>

                <section className="space-y-6">
                    <h2 className="font-display text-2xl font-bold text-gray-200">4. Données personnelles</h2>
                    <p className="text-gray-400 leading-relaxed">
                        Le Site <span className="text-white">alaminsuzuki.com</span> ne collecte aucune donnée personnelle via formulaire, cookies ou outils de mesure d’audience.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                        Les échanges par e-mail s’effectuent à l’initiative de l’utilisateur.
                    </p>
                </section>

                <section className="space-y-6">
                    <h2 className="font-display text-2xl font-bold text-gray-200">5. Liens hypertextes</h2>
                    <p className="text-gray-400 leading-relaxed">
                        Le Site peut contenir des liens vers des sites tiers. Al-Amin Suzuki n’exerce aucun contrôle sur ces sites et ne peut être tenu responsable de leur contenu ou de leurs pratiques.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                        La mise en place de liens hypertextes vers le Site est autorisée sans demande préalable, sous réserve de ne pas porter atteinte à son image ou à son contenu.
                    </p>
                </section>

                <section className="space-y-6">
                    <h2 className="font-display text-2xl font-bold text-gray-200">6. Responsabilité</h2>
                    <p className="text-gray-400 leading-relaxed">
                        Al-Amin Suzuki s’efforce de fournir sur le Site des informations exactes et à jour. Toutefois, aucune garantie n’est donnée quant à l’exactitude, l’exhaustivité ou l’actualité des informations diffusées.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                        L’éditeur ne saurait être tenu responsable des dommages directs ou indirects résultant de l’accès au Site, de son utilisation ou de l’impossibilité d’y accéder.
                    </p>
                </section>

                <section className="space-y-6">
                    <h2 className="font-display text-2xl font-bold text-gray-200">7. Modification des mentions légales</h2>
                    <p className="text-gray-400 leading-relaxed">
                        Les présentes mentions légales peuvent être modifiées à tout moment. Les utilisateurs sont invités à les consulter régulièrement.
                    </p>
                    <p className="text-gray-400 leading-relaxed pt-2">
                        Dernière mise à jour : 14/12/2025
                    </p>
                </section>
            </div>
        </div>
    );
}
