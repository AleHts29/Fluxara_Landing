import { Code, Workflow, Bot, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

const solutions = [
    {
        icon: Code,
        title: "Custom Software",
        desc: "Bespoke platforms designed for your unique operational logic.",
    },
    {
        icon: Workflow,
        title: "Intelligent Automation",
        desc: "Self-correcting workflows that run 24/7 without human oversight.",
    },
    {
        icon: Bot,
        title: "AI Integration",
        desc: "Injecting LLMs into your stack to unlock predictive insights.",
    },
    {
        icon: Share2,
        title: "System Unification",
        desc: "Connecting disparate tools into one cohesive ecosystem.",
    }
];

const Services = () => {
    return (
        <div className="w-full max-w-7xl mx-auto px-6 py-32">
            <div className="mb-20">
                <h2 className="text-4xl md:text-5xl font-bold text-primary-dark dark:text-white mb-6 transition-colors">Our Solutions</h2>
                <p className="text-lg text-primary-dark/70 dark:text-primary-light/60 max-w-xl transition-colors">
                    We don't just write code. We architect systems that scale with your ambition.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {solutions.map((s, idx) => (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        key={idx}
                        className="group relative p-10 rounded-3xl bg-white border border-primary-dark/5 shadow-xl dark:shadow-none dark:bg-white/[0.03] dark:border-white/10 hover:border-accent-pop/50 dark:hover:border-accent-pop/50 dark:hover:bg-accent-pop/[0.05] transition-all duration-500 overflow-hidden"
                    >
                        {/* Hover Gradient Bloom */}
                        <div className="absolute -right-20 -top-20 w-64 h-64 bg-accent-pop/10 dark:bg-accent-pop/20 rounded-full blur-3xl group-hover:opacity-100 opacity-0 transition-opacity duration-700 pointer-events-none"></div>

                        <div className="relative z-10 mb-8">
                            <div className="w-14 h-14 rounded-2xl bg-primary-dark/5 border border-primary-dark/10 dark:bg-white/5 dark:border-white/10 flex items-center justify-center text-primary-dark dark:text-white group-hover:scale-110 group-hover:bg-accent-pop group-hover:border-accent-pop group-hover:text-white transition-all duration-500 shadow-sm dark:shadow-lg">
                                <s.icon className="w-7 h-7" />
                            </div>
                        </div>

                        <h3 className="relative z-10 text-2xl font-bold text-primary-dark dark:text-white mb-4 group-hover:text-accent-pop transition-colors">{s.title}</h3>
                        <p className="relative z-10 text-primary-dark/70 dark:text-primary-light/80 leading-relaxed text-lg group-hover:text-primary-dark dark:group-hover:text-white transition-colors">{s.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Services;
