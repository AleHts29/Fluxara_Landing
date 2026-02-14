import { Code, Workflow, Bot, Share2, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SpotlightCard from './ui/SpotlightCard';

const solutions = [
    {
        icon: Code,
        title: "Custom Software",
        desc: "Bespoke platforms designed for your unique operational logic.",
        className: "md:col-span-2",
    },
    {
        icon: Workflow,
        title: "Intelligent Automation",
        desc: "Self-correcting workflows that run 24/7.",
        className: "md:col-span-1",
    },
    {
        icon: Bot,
        title: "AI Integration",
        desc: "Injecting LLMs into your stack to unlock predictive insights.",
        className: "md:col-span-1",
    },
    {
        icon: Share2,
        title: "System Unification",
        desc: "Connecting disparate tools into one cohesive ecosystem.",
        className: "md:col-span-2",
    }
];

const Services = () => {
    return (
        <div className="w-full max-w-7xl mx-auto px-6 py-32">
            <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-primary-dark dark:text-white mb-6 transition-colors">
                        Our Products
                    </h2>
                    <p className="text-lg text-primary-dark/70 dark:text-primary-light/60 max-w-xl transition-colors">
                        Architected for scale. Engineered for impact.
                    </p>
                </div>
                <div className="hidden md:block w-32 h-[1px] bg-gradient-to-r from-transparent via-accent-pop to-transparent opacity-50 mb-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {solutions.map((s, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className={s.className}
                    >
                        <SpotlightCard className="h-full p-8 md:p-10 group">

                            <div className="flex flex-col h-full justify-between">
                                <div className="space-y-6">
                                    <div className="w-12 h-12 rounded-xl bg-primary-dark/5 dark:bg-white/10 flex items-center justify-center text-primary-dark dark:text-white group-hover:bg-accent-pop group-hover:text-white transition-colors duration-500">
                                        <s.icon className="w-6 h-6" />
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-primary-dark dark:text-white mb-2 transition-colors">{s.title}</h3>
                                        <p className="text-primary-dark/70 dark:text-primary-light/60 leading-relaxed transition-colors">{s.desc}</p>
                                    </div>
                                </div>

                                <div className="pt-8 flex items-center text-sm font-medium text-accent-pop opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                    <span>Explore Solution</span>
                                    <ArrowUpRight className="w-4 h-4 ml-1" />
                                </div>
                            </div>

                        </SpotlightCard>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Services;
