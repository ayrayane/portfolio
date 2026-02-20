
import { motion } from 'framer-motion';
import { GraduationCap, Languages, Sparkles } from 'lucide-react';

const Education = () => {
    return (
        <section id="education" className="py-20 bg-slate-900 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Education Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                            <GraduationCap className="mr-3 text-devops-accent" /> Formation
                        </h2>
                        <div className="space-y-8 border-l-2 border-slate-800 ml-3 pl-8 relative">

                            <div className="relative">
                                <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-slate-900 bg-devops-accent"></span>
                                <h3 className="text-xl font-bold text-white">Ingénieur en Électronique et Numérique</h3>
                                <p className="text-emerald-400 font-medium">ISEN Toulon</p>
                                <p className="text-slate-500 text-sm">2023 – 2026</p>
                                <p className="text-slate-400 mt-2">Spécialisation Cybersécurité & DevOps</p>
                            </div>

                            <div className="relative">
                                <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-slate-900 bg-slate-600"></span>
                                <h3 className="text-xl font-bold text-white">Classe Préparatoire aux Grandes Écoles (TSI)</h3>
                                <p className="text-slate-400 font-medium">Lycée Rouvière</p>
                                <p className="text-slate-500 text-sm">2021 – 2023</p>
                            </div>

                            <div className="relative">
                                <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-slate-900 bg-slate-600"></span>
                                <h3 className="text-xl font-bold text-white">DUT Génie Mécanique et Productique</h3>
                                <p className="text-slate-400 font-medium">IUT Lyon 1</p>
                                <p className="text-slate-500 text-sm">2019 – 2021</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Languages & Interests Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                                <Languages className="mr-3 text-emerald-400" /> Langues
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                                    <h3 className="text-lg font-bold text-white mb-1">Français</h3>
                                    <p className="text-slate-400 text-sm">Langue maternelle</p>
                                    <div className="w-full bg-slate-700 h-2 rounded-full mt-3 overflow-hidden">
                                        <div className="bg-devops-accent h-full rounded-full w-full"></div>
                                    </div>
                                </div>
                                <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-lg font-bold text-white mb-1">Anglais</h3>
                                            <p className="text-slate-400 text-sm">Niveau B2 (TOEIC 870)</p>
                                        </div>
                                        <span className="px-2 py-1 bg-emerald-500/10 text-emerald-400 text-xs rounded border border-emerald-500/20">Pro</span>
                                    </div>
                                    <div className="w-full bg-slate-700 h-2 rounded-full mt-3 overflow-hidden">
                                        <div className="bg-emerald-400 h-full rounded-full w-[85%]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                                <Sparkles className="mr-3 text-purple-400" /> Centres d'intérêt
                            </h2>
                            <div className="flex flex-wrap gap-3">
                                {['Rugby (Joueur ISEN)', 'Sports mécaniques', 'Voyages Internationaux', 'Jeux Vidéo'].map((interest, idx) => (
                                    <span key={idx} className="px-4 py-2 bg-slate-800 rounded-full text-slate-300 border border-slate-700 hover:border-purple-400 hover:text-white transition-colors cursor-default">
                                        {interest}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Education;
