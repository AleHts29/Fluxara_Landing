import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
    onStartDemo?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStartDemo }) => {
    return (
        <div className="relative w-full min-h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden px-6">

            {/* Abstract Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-pop/10 dark:bg-accent-pop/20 rounded-full blur-[120px] opacity-40 animate-pulse-slow pointer-events-none transition-all duration-500"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-300/30 dark:bg-indigo-500/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-overlay pointer-events-none transition-all duration-500"></div>

            <div className="relative z-10 max-w-4xl mx-auto space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-dark/5 border border-primary-dark/10 dark:bg-white/5 dark:border-white/10 backdrop-blur-sm mb-4 transition-colors"
                >
                    <div className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse"></div>
                    <span className="text-xs font-medium text-primary-dark/70 dark:text-primary-light tracking-widest uppercase transition-colors">Accepting New Ventures</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-6xl md:text-8xl font-bold tracking-tighter leading-[1.1] text-primary-dark dark:text-white transition-colors"
                >
                    From Chaos <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-pop via-indigo-600 to-accent-pop dark:from-primary-light dark:via-white dark:to-primary-light animate-gradient-x">
                        To Clarity.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="text-xl text-primary-dark/70 dark:text-primary-light/60 max-w-2xl mx-auto font-light leading-relaxed transition-colors"
                >
                    We build custom software & intelligent agents that turn your manual processes into autonomous revenue engines.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="pt-8"
                >
                    <button
                        onClick={onStartDemo}
                        className="group relative px-8 py-4 bg-primary-dark dark:bg-white text-white dark:text-primary-dark font-medium rounded-full transition-all hover:scale-105 active:scale-95 flex items-center gap-3 mx-auto shadow-xl dark:shadow-none"
                    >
                        <span className="relative z-10">Start Transformation</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        <div className="absolute inset-0 rounded-full bg-white/20 blur-lg group-hover:blur-xl transition-all opacity-50"></div>
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
