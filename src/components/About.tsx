
import { motion } from 'framer-motion';

const About = () => {
    const values = [
        { title: "Excellence Technique", description: "Recherche de la qualité et de la performance dans chaque ligne de code." },
        { title: "Intégrité & Sécurité", description: "Priorité absolue à la protection des données et des systèmes critiques." },
        { title: "Esprit de Partenariat", description: "Collaboration étroite avec les métiers pour créer de la valeur concrète." },
        { title: "Apprentissage Continu", description: "Veille constante sur l'IA et les nouvelles méthodes DevOps." }
    ];

    return (
        <section id="about" className="py-20 bg-slate-900 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ma Vision & <span className="text-devops-accent">Engagement</span>
                        </h2>
                        <div className="w-20 h-1 bg-devops-accent mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                        <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 backdrop-blur-sm">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <span className="text-devops-accent">01.</span> Ma Mission Professionnelle
                            </h3>
                            <p className="text-slate-300 text-lg leading-relaxed mb-6">
                                Élever les standards de production logicielle par l'industrialisation et la sécurisation. Mon rôle est de transformer la complexité technique en <span className="text-white font-semibold">stabilité opérationnelle</span>.
                            </p>
                            <div className="space-y-4">
                                <p className="text-slate-400 leading-relaxed italic border-l-2 border-emerald-500 pl-4">
                                    "Je ne me contente pas de déployer du code, je construis les fondations de confiance sur lesquelles reposent les systèmes critiques de demain."
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {values.map((value, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-4 bg-slate-800/30 rounded-xl border border-slate-700/30 hover:border-devops-accent/30 transition-all"
                                >
                                    <h4 className="text-white font-bold mb-2 text-sm uppercase tracking-wide">{value.title}</h4>
                                    <p className="text-slate-500 text-xs leading-relaxed">{value.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-16 bg-gradient-to-r from-slate-800/50 to-transparent p-1 rounded-2xl">
                        <div className="bg-slate-930 p-8 rounded-2xl flex flex-col md:flex-row items-center gap-8">
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-white mb-2 text-center md:text-left">Parcours à Naval Group</h3>
                                <p className="text-slate-400 text-base leading-relaxed text-center md:text-left">
                                    En tant qu'alternant au sein de l'Atelier Logiciel DevOps, j'évolue dans un environnement stratégique international. Je participe activement à l'industrialisation des chaînes de production et à la sécurisation des secrets via Vault, avec un focus constant sur la traçabilité et la qualité industrielle.
                                </p>
                            </div>
                            <div className="flex flex-wrap justify-center gap-4 min-w-[200px]">
                                <div className="px-4 py-2 bg-devops-accent/10 border border-devops-accent/20 rounded-lg">
                                    <span className="text-devops-accent font-mono text-sm">#DevSecOps</span>
                                </div>
                                <div className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                                    <span className="text-emerald-500 font-mono text-sm">#Industrialisation</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
