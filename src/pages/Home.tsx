
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
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center px-3 py-1 rounded-full border border-slate-700 bg-slate-900/50 backdrop-blur-sm mb-6">
                            <span className="flex h-2 w-2 relative mr-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <span className="text-sm text-slate-300 font-mono">Open to Work • DevSecOps</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
                            Rayane <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400">Ahmed-Yahia</span>
                        </h1>

                        <p className="mt-4 text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-10">
                            Ingénieur DevOps & DevSecOps. Spécialisé en automatisation, sécurité et industrialisation logicielle.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a href="#projects" className="px-8 py-4 bg-devops-accent hover:bg-sky-600 text-white rounded-lg font-bold transition-all shadow-lg shadow-sky-500/20 flex items-center justify-center gap-2">
                                <Terminal size={20} />
                                Voir mes projets
                            </a>
                            <a href="#contact" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-bold transition-all border border-slate-700 flex items-center justify-center gap-2">
                                Télécharger CV
                            </a>
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
