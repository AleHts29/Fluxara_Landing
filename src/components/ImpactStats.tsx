import { motion } from 'framer-motion';

const stats = [
    { label: "Efficiency Boost", value: "+340%" },
    { label: "Autonomous Uptime", value: "24/7" },
    { label: "Error Rate", value: "0.01%" },
];

const ImpactStats = () => {
    return (
        <div className="w-full max-w-6xl mx-auto px-6 py-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-primary-dark/10 dark:divide-white/5 transition-colors">
                {stats.map((stat, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        className="flex flex-col items-center justify-center p-4"
                    >
                        <span className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-primary-dark to-primary-blue dark:from-white dark:to-white/50 mb-4 tracking-tight transition-all">
                            {stat.value}
                        </span>
                        <span className="text-sm font-medium text-primary-dark/70 dark:text-primary-light/60 uppercase tracking-widest transition-colors">
                            {stat.label}
                        </span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ImpactStats;
