
import { motion } from 'framer-motion';
import { Mail, Phone, ExternalLink } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-slate-800 rounded-3xl p-8 md:p-16 text-center border border-slate-700 shadow-2xl relative overflow-hidden"
                >
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-devops-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Intéressé par mon <span className="text-devops-accent">profil ?</span>
                        </h2>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
                            Je suis actuellement à l'écoute d'opportunités en tant qu'Ingénieur DevSecOps. N'hésitez pas à me contacter pour échanger sur vos projets ou simplement pour dire bonjour.
                        </p>

                        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
                            <a href="mailto:rayane.ahmed-yahia@isen.yncrea.fr" className="flex items-center gap-3 px-6 py-4 bg-slate-700 hover:bg-slate-600 rounded-xl text-white transition-all w-full md:w-auto justify-center">
                                <Mail className="text-emerald-400" />
                                <span>rayane.ahmed-yahia@isen.yncrea.fr</span>
                            </a>
                            <a href="tel:+33695548672" className="flex items-center gap-3 px-6 py-4 bg-slate-700 hover:bg-slate-600 rounded-xl text-white transition-all w-full md:w-auto justify-center">
                                <Phone className="text-sky-400" />
                                <span>06 95 54 86 72</span>
                            </a>
                        </div>

                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-devops-accent hover:text-white transition-colors font-medium">
                            Voir mon LinkedIn <ExternalLink size={16} className="ml-2" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
