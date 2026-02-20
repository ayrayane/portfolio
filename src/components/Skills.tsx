
import { motion } from 'framer-motion';
import {
    Code,
    Cloud,
    Settings,
    Users,
    Brain,
    Lightbulb,
    type LucideIcon
} from 'lucide-react';

interface SkillCardProps {
    title: string;
    skills: string[];
    icon: LucideIcon;
    delay: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, skills, icon: Icon, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-devops-accent/50 transition-colors h-full"
    >
        <div className="flex items-center mb-4">
            <div className="p-2 bg-slate-800 rounded-lg mr-3">
                <Icon className="text-devops-accent" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm hover:bg-slate-700 hover:text-white transition-colors cursor-default">
                    {skill}
                </span>
            ))}
        </div>
    </motion.div>
);

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Compétences & <span className="text-devops-accent">Expertises</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Une approche holistique combinant excellence technique, agilité cognitive et leadership organisationnel.
                    </p>
                </motion.div>

                <div className="space-y-20">
                    {(() => {
                        const categories = [
                            {
                                type: "Hard Skills (Technique)",
                                groups: [
                                    {
                                        title: "DevOps & Industrialisation",
                                        icon: Settings,
                                        skills: ["GitLab CI", "GitHub Actions", "Industrialisation Logicielle", "Traçabilité & Qualité", "DevSecOps"]
                                    },
                                    {
                                        title: "Infrastucture & Conteneurs",
                                        icon: Cloud,
                                        skills: ["Docker", "Kubernetes", "Nexus Repository", "Vault (Secrets)", "Cloud Computing"]
                                    },
                                    {
                                        title: "Développement",
                                        icon: Code,
                                        skills: ["Python", "Java", "Rust", "Bash / Shell", "Vue.js", "React / TS"]
                                    }
                                ]
                            },
                            {
                                type: "Compétences Humaines & Méthodes",
                                groups: [
                                    {
                                        title: "Interpersonnel",
                                        icon: Users,
                                        skills: ["Communication efficace", "Travail en équipe", "Empathie", "Leadership"]
                                    },
                                    {
                                        title: "Cognitif",
                                        icon: Brain,
                                        skills: ["Résolution de problèmes", "Esprit critique", "Adaptabilité", "Curiosité"]
                                    },
                                    {
                                        title: "Organisation & Innovation",
                                        icon: Lightbulb,
                                        skills: ["Gestion du temps", "Planification de projet", "Autonomie", "Esprit d’initiative", "Créativité technique"]
                                    }
                                ]
                            }
                        ];

                        return categories.map((category, catIdx) => (
                            <div key={catIdx}>
                                <h3 className="text-emerald-400 font-mono text-sm uppercase tracking-widest mb-8 flex items-center gap-2">
                                    <span className="w-8 h-px bg-emerald-500/20"></span>
                                    {category.type}
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {category.groups.map((group, groupIdx) => (
                                        <SkillCard
                                            key={groupIdx}
                                            title={group.title}
                                            skills={group.skills}
                                            icon={group.icon}
                                            delay={groupIdx * 0.1}
                                        />
                                    ))}
                                </div>
                            </div>
                        ));
                    })()}
                </div>
            </div>
        </section>
    );
};

export default Skills;
