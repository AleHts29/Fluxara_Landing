import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImpactStats from './components/ImpactStats';
import Services from './components/Services';
import Footer from './components/Footer';
import AutomationDemo from './components/AutomationDemo';

function App() {
  const [booted, setBooted] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => setIsDark(!isDark);

  useEffect(() => {
    // Shorter boot for minimalist feel (just a quick fade in essentially)
    const timer = setTimeout(() => setBooted(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!booted) {
    return (
      <div className="min-h-screen bg-primary-dark flex items-center justify-center font-sans text-white">
        <div className="flex flex-col items-center gap-4 animate-pulse">
          <div className="w-12 h-12 rounded-xl bg-white/10"></div>
          <span className="text-xs font-medium text-white/40 tracking-widest uppercase">Initializing...</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`${isDark ? 'dark' : ''}`}>
      <div className="min-h-screen transition-colors duration-500 bg-white text-primary-dark dark:bg-primary-dark dark:text-white font-sans selection:bg-accent-pop selection:text-white overflow-x-hidden relative">
        <div className="fixed inset-0 z-0 bg-gradient-to-b from-white via-primary-blue/5 to-white dark:from-primary-dark dark:via-primary-blue/20 dark:to-primary-dark pointer-events-none transition-colors duration-500"></div>

        <Navbar isDark={isDark} toggleTheme={toggleTheme} />

        {/* Main Content - Single Column Scroll */}
        <main className="relative z-10">

          <Hero onStartDemo={() => setDemoOpen(true)} />

          <ImpactStats />

          <Services />

          {/* Contact / Final CTA Section */}
          <div className="w-full py-32 px-6 flex flex-col items-center justify-center text-center bg-gradient-to-b from-transparent to-primary-dark/5 dark:to-black/20">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary-dark dark:text-white transition-colors">Ready to automate the boring stuff?</h2>
            <button className="px-8 py-4 bg-accent-pop text-white font-medium rounded-full shadow-lg hover:shadow-accent-pop/25 hover:-translate-y-1 transition-all">
              Book a Consultation
            </button>
          </div>

        </main>

        <Footer />
        <AutomationDemo isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
      </div>
    </div>
  );
}

export default App
