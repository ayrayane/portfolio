import React from 'react';
import { Outlet } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Layout = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-devops-accent selection:text-white">
            {/* Top Recruitment Banner - High Visibility */}
            <div className="bg-devops-accent py-1.5 px-4 text-center overflow-hidden">
                <div className="inline-flex items-center gap-4 animate-pulse">
                    <span className="text-slate-950 text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">
                        🚀 ACTUELLEMENT À LA RECHERCHE D'UN CDI DEVSECOPS
                    </span>
                    <a href="#contact" className="bg-slate-950 text-white text-[9px] md:text-xs px-2 py-0.5 rounded font-bold hover:bg-slate-800 transition-colors uppercase">
                        Me recruter
                    </a>
                </div>
            </div>

            {/* Navbar */}
            <nav className="sticky top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0 font-bold text-xl tracking-tighter text-devops-accent">
                            RAYANE<span className="text-white">.DEVSEC</span>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-8">
                                <a href="#about" className="hover:text-devops-accent transition-colors px-3 py-2 rounded-md text-sm font-medium">À propos</a>
                                <a href="#skills" className="hover:text-devops-accent transition-colors px-3 py-2 rounded-md text-sm font-medium">Compétences</a>
                                <a href="#experience" className="hover:text-devops-accent transition-colors px-3 py-2 rounded-md text-sm font-medium">Expérience</a>
                                <a href="#education" className="hover:text-devops-accent transition-colors px-3 py-2 rounded-md text-sm font-medium">Formation</a>
                                <a href="#projects" className="hover:text-devops-accent transition-colors px-3 py-2 rounded-md text-sm font-medium">Projets</a>
                                <a href="#contact" className="px-4 py-2 rounded-md text-sm font-medium bg-devops-accent text-white hover:bg-sky-600 transition-colors">Me contacter</a>
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
                            >
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-slate-900 border-b border-slate-800">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-800 hover:text-devops-accent">À propos</a>
                            <a href="#skills" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-800 hover:text-devops-accent">Compétences</a>
                            <a href="#experience" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-800 hover:text-devops-accent">Expérience</a>
                            <a href="#education" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-800 hover:text-devops-accent">Formation</a>
                            <a href="#projects" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-800 hover:text-devops-accent">Projets</a>
                            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium bg-devops-accent/10 text-devops-accent">Me contacter</a>
                        </div>
                    </div>
                )}
            </nav>

            {/* Main Content */}
            <main className="pt-16">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="bg-slate-950 border-t border-slate-900 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-slate-500 text-sm">© 2026 Rayane Ahmed-Yahia. All rights reserved.</p>
                    </div>
                    <div className="flex space-x-6">
                        <a href="#" className="text-slate-400 hover:text-devops-accent transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="#" className="text-slate-400 hover:text-devops-accent transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="mailto:rayane.ahmed-yahia@isen.yncrea.fr" className="text-slate-400 hover:text-devops-accent transition-colors">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
