
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 bg-slate-900 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                >
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            À Propos <span className="text-devops-accent">de moi</span>
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed mb-6">
                            Je suis élève ingénieur en électronique et numérique à l’ISEN Toulon, spécialisé en DevOps, industrialisation logicielle et sécurité.
                        </p>
                        <p className="text-slate-400 text-lg leading-relaxed mb-6">
                            Actuellement alternant chez <span className="text-white font-semibold">Naval Group</span> au sein de l'Atelier Logiciel DevOps, je contribue à l'industrialisation d'outils critiques, à la sécurisation des secrets avec Vault et à l'automatisation des pipelines CI/CD.
                        </p>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            J’évolue dans un environnement industriel exigeant et international, avec une forte culture qualité et traçabilité. Mon objectif ? <span className="text-devops-accent italic">"Automatiser, sécuriser et industrialiser pour délivrer plus vite et mieux."</span>
                        </p>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-devops-accent to-emerald-500 rounded-2xl blur-lg opacity-20"></div>
                        <div className="relative bg-slate-800 p-8 rounded-2xl border border-slate-700">
                            <h3 className="text-xl font-bold text-white mb-4">Mes Focus Actuels</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center text-slate-300">
                                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                                    Industrialisation d’outils logiciels
                                </li>
                                <li className="flex items-center text-slate-300">
                                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                                    Pipelines CI/CD & Automatisation
                                </li>
                                <li className="flex items-center text-slate-300">
                                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                                    Gestion des secrets (Vault)
                                </li>
                                <li className="flex items-center text-slate-300">
                                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                                    Conteneurisation (Docker, K8s)
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
