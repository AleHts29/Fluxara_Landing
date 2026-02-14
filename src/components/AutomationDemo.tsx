import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Loader2, Workflow, X } from 'lucide-react';

interface AutomationDemoProps {
    isOpen: boolean;
    onClose: () => void;
}

const AutomationDemo: React.FC<AutomationDemoProps> = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(0);

    useEffect(() => {
        if (isOpen) {
            setStep(0);
            const timers = [
                setTimeout(() => setStep(1), 1500),
                setTimeout(() => setStep(2), 3000),
                setTimeout(() => setStep(3), 4500),
            ];
            return () => timers.forEach(clearTimeout);
        }
    }, [isOpen]);

    const steps = [
        { label: "Analyzing Input Data...", icon: Loader2, color: "text-blue-400" },
        { label: "Optimizing Workflow...", icon: Workflow, color: "text-accent-warm" },
        { label: "Deploying Agents...", icon: Loader2, color: "text-accent-pop" },
        { label: "Automation Complete", icon: CheckCircle, color: "text-emerald-400" },
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary-dark/80 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="w-full max-w-lg glass-panel rounded-lg p-6 border border-primary-light/30 relative"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-primary-light/50 hover:text-white transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <h3 className="text-xl font-bold font-mono mb-6 flex items-center gap-2">
                            <Workflow className="w-5 h-5 text-accent-pop" />
                            <span>LIVE_DEMO_SEQUENCE</span>
                        </h3>

                        <div className="space-y-6">
                            {steps.map((s, idx) => (
                                <div key={idx} className={`flex items-center gap-4 transition-opacity duration-300 ${idx > step ? 'opacity-30' : 'opacity-100'}`}>
                                    <div className={`p-2 rounded-full border border-primary-light/10 bg-primary-dark/50`}>
                                        {idx === step && idx < 3 ? (
                                            <Loader2 className={`w-5 h-5 animate-spin ${s.color}`} />
                                        ) : idx < step || (idx === 3 && step === 3) ? (
                                            <CheckCircle className="w-5 h-5 text-emerald-400" />
                                        ) : (
                                            <div className="w-5 h-5 rounded-full border border-primary-light/20"></div>
                                        )}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between mb-1">
                                            <span className={`font-mono text-sm ${idx === step ? 'text-white' : 'text-primary-light/50'}`}>
                                                {s.label}
                                            </span>
                                            {idx === step && idx < 3 && (
                                                <span className="text-xs font-mono text-accent-pop animate-pulse">PROCESSING</span>
                                            )}
                                        </div>
                                        {idx === step && idx < 3 && (
                                            <div className="h-1 bg-primary-dark rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: "100%" }}
                                                    transition={{ duration: 1.5 }}
                                                    className={`h-full bg-current ${s.color.replace('text-', 'bg-')}`}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {step === 3 && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-8 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded text-center"
                            >
                                <p className="text-emerald-400 font-bold mb-1">OPTIMIZATION SUCCESSFUL</p>
                                <p className="text-xs text-emerald-400/70 font-mono">Efficiency increased by 340%</p>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default AutomationDemo;
