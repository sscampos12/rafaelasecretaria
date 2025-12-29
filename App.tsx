
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import UseCases from './components/UseCases';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import DiagnosisModal from './components/DiagnosisModal';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'agents'>('home');
  const [isDiagnosisOpen, setIsDiagnosisOpen] = useState(false);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const WHATSAPP_URL = "https://wa.me/5521995810410?text=Olá! Vim pelo site e gostaria de uma demonstração da Rafaela AI.";

  const openDiagnosis = () => setIsDiagnosisOpen(true);

  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <Navbar onNavigate={setView} currentView={view} />
      
      <main className="transition-all duration-500">
        {view === 'home' ? (
          <>
            <Hero onNavigate={setView} onStartDiagnosis={openDiagnosis} />
            <ProblemSolution />
            <HowItWorks onNavigate={setView} onStartDiagnosis={openDiagnosis} />
            <Benefits />
            <FAQ />
          </>
        ) : (
          <div className="pt-10">
            <UseCases />
          </div>
        )}
      </main>

      <Footer onNavigate={setView} />
      
      <DiagnosisModal isOpen={isDiagnosisOpen} onClose={() => setIsDiagnosisOpen(false)} />

      {/* Floating WhatsApp Button */}
      <a 
        href={WHATSAPP_URL}
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-transform hover:scale-110 flex items-center justify-center"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.48s3.481 5.229 3.481 8.406c0 6.555-5.332 11.887-11.886 11.887-2.015 0-3.991-.512-5.741-1.488l-6.145 1.612zm5.839-4.733l.343.204c1.553.921 3.33 1.408 5.152 1.408 5.405 0 9.803-4.397 9.803-9.803 0-2.618-1.02-5.08-2.871-6.932-1.851-1.852-4.314-2.872-6.932-2.872-5.405 0-9.803 4.398-9.803 9.803 0 1.936.57 3.82 1.649 5.43l.224.336-1.076 3.929 4.026-1.056z"/>
        </svg>
      </a>
    </div>
  );
};

export default App;
