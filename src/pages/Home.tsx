
import { motion } from 'framer-motion';
import { Terminal, Shield, Server, Box } from 'lucide-react';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <div className="relative">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute inset-0 bg-slate-950">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-devops-accent/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl opacity-30 animate-pulse delay-1000"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8 flex justify-center"
                    >
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-devops-accent to-devops-success rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-devops-surface border-2 border-slate-700 overflow-hidden flex items-center justify-center">
                                <span className="text-slate-500 text-4xl font-bold">RAY</span>
                                {/* Replace with <img src="/avatar.jpg" alt="Rayane" className="w-full h-full object-cover" /> */}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 }}
                            className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl border-2 border-devops-accent/50 bg-devops-accent/10 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(56,189,248,0.2)]"
                        >
                            <span className="flex h-3 w-3 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-devops-accent opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-devops-accent"></span>
                            </span>
                            <span className="text-lg md:text-xl text-white font-bold tracking-tight">
                                RECHERCHE <span className="text-devops-accent underline decoration-2 underline-offset-4">CDI</span> • DEVSECOPS
                            </span>
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 font-heading">
                            Rayane <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400">Ahmed-Yahia</span>
                        </h1>

                        <p className="mt-4 text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed px-4">
                            <span className="text-devops-accent font-bold">Concepteur Développeur DevSecOps</span><br />
                            <span className="text-slate-200 text-lg md:text-xl block mt-4">
                                Ingénieur en fin d'études chez <span className="font-semibold px-1 bg-white/5 rounded">Naval Group</span>, spécialisé dans l'industrialisation logicielle et la sécurisation des pipelines CI/CD.
                            </span>
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a href="#contact" className="px-8 py-4 bg-devops-accent hover:bg-sky-500 text-slate-950 rounded-lg font-bold transition-all shadow-lg shadow-sky-500/20 flex items-center justify-center gap-2">
                                <Box size={20} />
                                Télécharger mon CV
                            </a>
                            <a href="#projects" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-bold transition-all border border-slate-700 flex items-center justify-center gap-2">
                                <Terminal size={20} />
                                Voir mes travaux
                            </a>
                        </div>

                        {/* Quick scannability for HR */}
                        <div className="mt-12 flex flex-wrap justify-center gap-8 border-t border-slate-800 pt-12">
                            <div className="text-center">
                                <p className="text-devops-accent font-bold text-2xl">ISEN</p>
                                <p className="text-slate-500 text-xs uppercase tracking-widest mt-1">École d'Ingénieur</p>
                            </div>
                            <div className="text-center">
                                <p className="text-devops-success font-bold text-2xl">Naval Group</p>
                                <p className="text-slate-500 text-xs uppercase tracking-widest mt-1">Alternance Actuelle</p>
                            </div>
                            <div className="text-center">
                                <p className="text-white font-bold text-2xl">Bilingual</p>
                                <p className="text-slate-500 text-xs uppercase tracking-widest mt-1">French / English</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Floaters */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60"
                    >
                        <div className="flex flex-col items-center gap-2">
                            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                                <Shield className="text-emerald-400" size={32} />
                            </div>
                            <span className="text-slate-400 text-sm font-mono">Security</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                                <Terminal className="text-sky-400" size={32} />
                            </div>
                            <span className="text-slate-400 text-sm font-mono">Automation</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                                <Server className="text-indigo-400" size={32} />
                            </div>
                            <span className="text-slate-400 text-sm font-mono">Infrastructure</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                                <Box className="text-purple-400" size={32} />
                            </div>
                            <span className="text-slate-400 text-sm font-mono">Containers</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            <About />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Contact />
        </div>
    );
};

export default Home;
