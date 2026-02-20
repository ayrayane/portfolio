
import { motion } from 'framer-motion';
import { Code, Cloud, GitBranch, Settings, type LucideIcon } from 'lucide-react';

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
        className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-devops-accent/50 transition-colors"
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
    const skillCategories = [
        {
            title: "DevOps & Industrialisation",
            icon: Settings,
            skills: ["CI/CD", "GitLab CI", "GitHub Actions", "Industrialisation", "Qualité & Traçabilité", "DevSecOps", "Agile Kanban"]
        },
        {
            title: "Conteneurisation & Cloud",
            icon: Cloud,
            skills: ["Docker", "Kubernetes", "Nexus Repository", "Vault", "Cloud Computing"]
        },
        {
            title: "Développement",
            icon: Code,
            skills: ["Python", "Java", "Rust", "Bash / Shell", "Vue.js", "React", "TypeScript"]
        },
        {
            title: "Collaboration & Outils",
            icon: GitBranch,
            skills: ["Git", "GitLab", "GitHub", "Jira", "Confluence", "Méthodologie Agile"]
        }
    ];

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
                        Compétences <span className="text-devops-accent">Techniques</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Une stack technique polyvalente orientée vers l'automatisation, la sécurité et la performance.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillCategories.map((category, index) => (
                        <SkillCard
                            key={index}
                            title={category.title}
                            skills={category.skills}
                            icon={category.icon}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
