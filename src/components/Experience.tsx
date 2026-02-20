
import { motion } from 'framer-motion';
import { MapPin, Briefcase } from 'lucide-react';

interface ExperienceCardProps {
    role: string;
    company: string;
    period: string;
    location: string;
    missions: string[];
    impact?: string[];
    isLeft: boolean;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ role, company, period, location, missions, impact, isLeft }) => (
    <motion.div
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`relative flex items-center justify-between md:justify-normal w-full mb-8 ${isLeft ? 'md:flex-row-reverse' : ''}`}
    >
        <div className="hidden md:block w-5/12"></div>
        <div className="z-20 flex items-center order-1 bg-slate-800 shadow-xl w-8 h-8 rounded-full border-4 border-devops-accent"></div>
        <div className="order-1 bg-slate-900 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4 border border-slate-800">
            <div className="flex justify-between items-start mb-2 flex-col sm:flex-row">
                <h3 className="font-bold text-white text-lg">{role}</h3>
                <span className="text-devops-accent text-sm font-mono whitespace-nowrap">{period}</span>
            </div>
            <h4 className="text-emerald-400 font-semibold mb-2 flex items-center gap-1">
                <Briefcase size={14} /> {company}
            </h4>
            <div className="flex items-center text-slate-500 text-sm mb-4">
                <MapPin size={14} className="mr-1" /> {location}
            </div>

            <ul className="list-disc list-inside text-slate-400 text-sm space-y-1 mb-4">
                {missions.map((mission, idx) => (
                    <li key={idx}>{mission}</li>
                ))}
            </ul>

            {impact && (
                <div className="bg-slate-800/50 p-3 rounded border border-slate-700/50">
                    <p className="text-slate-200 text-xs font-bold mb-1 uppercase tracking-tight">Impact & Résultats :</p>
                    <div className="flex flex-col gap-1 mt-1">
                        {impact.map((item, idx) => (
                            <span key={idx} className="text-emerald-400 text-sm font-semibold flex items-center">
                                <span className="mr-2 text-emerald-500">✔</span> {item}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    </motion.div>
);

const Experience = () => {
    const experiences = [
        {
            role: "Alternant Ingénieur Logiciel / DevOps",
            company: "Naval Group – Atelier Logiciel DevOps",
            period: "Sept 2024 – Août 2026",
            location: "Ollioules, France",
            missions: [
                "Développement et industrialisation d'outils logiciels internes pour l'atelier DevOps",
                "Mise en place et amélioration de pipelines CI/CD avec automatisation des processus (build, test, déploiement)",
                "Conteneurisation des applications et gestion des environnements de développement",
                "Application des bonnes pratiques DevOps (qualité, sécurité, traçabilité)",
                "Pilotage et coordination des livraisons de plugins destinés aux développeurs"
            ],
            impact: ["Automatisation des processus industriels", "Sécurisation des secrets", "Industrialisation du cycle de vie logiciel"]
        },
        {
            role: "Stage Développeur Full Stack",
            company: "Leroy Merlin",
            period: "Mai 2025 – Août 2025",
            location: "Milan, Italie",
            missions: [
                "Développement full-stack d'une application interne, de la conception à la mise en production",
                "Mise en place et gestion sécurisée des secrets via Vault (gestion des accès, rotation des secrets)",
                "Déploiement continu sur 2 environnements (Dev/Prod) avec rotation sécurisée des secrets",
                "Collaboration avec 4 équipes IT internationales dans un environnement agile"
            ],
            impact: ["Gestion sécurisée des secrets (Vault)", "Collaboration internationale agile", "Déploiement continu automatisé"]
        },
        {
            role: "Stage Assistant Pédagogique",
            company: "École primaire",
            period: "Février 2019",
            location: "Londres, Royaume-Uni",
            missions: [
                "Stage linguistique : accompagnement d'élèves en difficulté",
                "Animation d'activités en anglais dans un environnement multiculturel",
                "Développement des compétences en communication et en adaptation"
            ],
            impact: ["Maîtrise de l'anglais en immersion", "Adaptabilité multiculturelle"]
        }
    ];

    return (
        <section id="experience" className="py-20 bg-slate-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Expériences <span className="text-devops-accent">Professionnelles</span>
                    </h2>
                </motion.div>

                <div className="relative wrap overflow-hidden p-4 h-full">
                    <div className="absolute border-opacity-20 border-slate-700 h-full border text-slate-700 left-8 md:left-1/2 ml-[-1px] top-0"></div>

                    {experiences.map((exp, index) => (
                        <ExperienceCard key={index} {...exp} isLeft={index % 2 === 0} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
