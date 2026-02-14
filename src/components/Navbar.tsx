import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
    isDark: boolean;
    toggleTheme: () => void;
}

const Navbar = ({ isDark, toggleTheme }: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

                {/* Logo */}
                <div className={`flex items-center gap-2 p-2 rounded-xl transition-all ${scrolled ? 'bg-white/80 dark:bg-primary-dark/80 backdrop-blur-md border border-slate-200 dark:border-white/5 shadow-sm' : ''}`}>
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-accent-pop to-accent-warm opacity-80"></div>
                    <span className="font-bold text-xl tracking-tighter text-primary-dark dark:text-white transition-colors">Fluxara</span>
                </div>

                {/* Desktop Nav - Centered/Floating */}
                <div className={`hidden md:flex items-center gap-8 px-8 py-3 rounded-full border transition-all ${scrolled ? 'bg-white/80 dark:bg-primary-dark/80 backdrop-blur-md border-slate-200 dark:border-white/5 shadow-lg' : 'bg-transparent border-transparent'}`}>
                    {['Approach', 'Services', 'Work', 'About'].map(item => (
                        <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-primary-dark/70 dark:text-primary-light/80 hover:text-accent-pop dark:hover:text-white transition-colors">
                            {item}
                        </a>
                    ))}
                </div>

                <div className="hidden md:flex items-center gap-4">
                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full bg-slate-100 dark:bg-white/5 text-primary-dark dark:text-white hover:bg-slate-200 dark:hover:bg-white/10 transition-all"
                    >
                        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5 text-primary-dark" />}
                    </button>

                    {/* CTA */}
                    <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent-pop text-white font-medium text-sm hover:scale-105 transition-transform shadow-lg shadow-accent-pop/20">
                        Start Project
                    </button>
                </div>

                {/* Mobile Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <button onClick={toggleTheme} className="p-2 text-primary-dark dark:text-white">
                        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </button>
                    <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-primary-dark dark:text-white">
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-primary-dark border-b border-white/5 overflow-hidden transition-colors"
                    >
                        <div className="flex flex-col p-6 space-y-6">
                            {['Approach', 'Services', 'Work', 'About'].map(item => (
                                <a key={item} href="#" className="text-2xl font-light text-primary-dark dark:text-white" onClick={() => setIsOpen(false)}>
                                    {item}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
