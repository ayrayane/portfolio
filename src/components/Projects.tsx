import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Award } from 'lucide-react';

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    delay: number;
    isWinner?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tags, delay, isWinner }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="group relative bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-devops-accent transition-all hover:shadow-2xl hover:shadow-devops-accent/10"
    >
        {isWinner && (
            <div className="absolute top-4 right-4 z-10 bg-yellow-500/10 text-yellow-400 px-3 py-1 rounded-full text-xs font-bold flex items-center border border-yellow-500/20">
                <Award size={12} className="mr-1" /> 3ème Place Hackathon
            </div>
        )}
        <div className="h-48 bg-slate-800/50 flex items-center justify-center group-hover:bg-slate-800 transition-colors">
            {/* Placeholder for project image */}
            <div className="text-slate-600 font-mono text-sm group-hover:text-devops-accent transition-colors">
                {title} Preview
            </div>
        </div>
        <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-devops-accent transition-colors">{title}</h3>
            <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                {description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
                {tags.map((tag, idx) => (
                    <span key={idx} className="bg-slate-800 text-slate-400 text-xs px-2 py-1 rounded border border-slate-700">
                        {tag}
                    </span>
                ))}
            </div>
            <div className="flex gap-4">
                <a href="#" className="flex items-center text-sm text-white hover:text-devops-accent transition-colors">
                    <Github size={16} className="mr-1" /> Code
                </a>
                <a href="#" className="flex items-center text-sm text-white hover:text-devops-accent transition-colors">
                    <ExternalLink size={16} className="mr-1" /> Demo
                </a>
            </div>
        </div>
    </motion.div>
);

const Projects = () => {
    const projects = [
        {
            title: "Agent IA pour CI/CD",
            description: "Automatisation intelligente des pipelines et optimisation des déploiements. Intégration d'IA pour analyser les logs et suggérer des fixes dans les workflows DevOps.",
            tags: ["Python", "OpenAI API", "GitLab CI", "Docker"],
            isWinner: false
        },
        {
            title: "Système de transcription IA",
            description: "Application de transcription audio avec pipeline CI/CD automatisé. Interface web Vue.js et backend Python pour le traitement IA.",
            tags: ["Java", "Python", "Vue.js", "GitHub Actions"],
            isWinner: false
        },
        {
            title: "Projet Balance Connectée",
            description: "Application full-stack web + mobile pour la gestion de données en temps réel d'une balance connectée.",
            tags: ["React", "React Native", "Node.js", "IoT"],
            isWinner: false
        },
        {
            title: "Hackathon Nuit de l’ISEN",
            description: "Développement d’une application web en équipe dans un temps contraint sur un thème imposé.",
            tags: ["React", "Express", "Teamwork"],
            isWinner: true
        }
    ];

    return (
        <section id="projects" className="py-20 bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Projets <span className="text-devops-accent">Réalisés</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Une sélection de projets alliant développement, sécurité et automatisation.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} delay={index * 0.1} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
