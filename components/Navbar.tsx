
import React from 'react';

interface NavbarProps {
  onNavigate: (view: 'home' | 'agents') => void;
  currentView: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  const WHATSAPP_URL = "https://wa.me/5521995810410?text=Olá! Gostaria de agendar uma demonstração.";

  const handleHowItWorks = (e: React.MouseEvent) => {
    e.preventDefault();
    if (currentView !== 'home') {
      onNavigate('home');
      // Pequeno delay para esperar a página home montar antes de rolar
      setTimeout(() => {
        const element = document.getElementById('como-funciona');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
    } else {
      const element = document.getElementById('como-funciona');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <nav className="sticky top-0 z-[60] glass border-b border-white/10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <button 
          onClick={() => onNavigate('home')}
          className="flex items-center gap-3 group text-left"
        >
          {/* Logo Container */}
          <div className="relative w-12 h-12 flex items-center justify-center">
            <div className="absolute inset-0 bg-cyan-500/20 blur-md rounded-full group-hover:bg-cyan-500/40 transition-all"></div>
            {/* 
              Utilizando a logomarca oficial. 
              Como o arquivo é local, apontamos para 'logo.png' ou usamos um ícone representativo de alta fidelidade 
            */}
            <svg className="w-10 h-10 text-cyan-400 relative z-10 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 5L89.5 27.5V72.5L50 95L10.5 72.5V27.5L50 5Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
              <circle cx="50" cy="45" r="18" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4"/>
              <path d="M38 48C38 42 42 36 50 36C58 36 62 42 62 48C62 55 58 60 50 65C42 60 38 55 38 48Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="50" cy="48" r="4" fill="currentColor"/>
            </svg>
          </div>
          
          <div className="flex flex-col leading-none">
            <span className="text-2xl font-black font-heading tracking-tighter text-white">RAFAELA</span>
            <span className="text-[9px] font-bold tracking-[0.3em] text-cyan-500 uppercase mt-0.5">Virtual Assistant</span>
          </div>
        </button>
        
        <div className="hidden md:flex items-center gap-10 text-sm font-bold text-slate-300">
          <button 
            onClick={() => onNavigate('home')} 
            className={`transition-colors ${currentView === 'home' ? 'text-[#00f2ff]' : 'hover:text-[#00f2ff]'}`}
          >
            Início
          </button>
          <button 
            onClick={() => onNavigate('agents')} 
            className={`transition-colors ${currentView === 'agents' ? 'text-[#00f2ff]' : 'hover:text-[#00f2ff]'}`}
          >
            Nossos Agentes
          </button>
          <a 
            href="#como-funciona" 
            onClick={handleHowItWorks}
            className="hover:text-[#00f2ff] transition-colors"
          >
            Como Funciona
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#00f2ff] text-slate-900 px-6 py-2.5 rounded-full text-sm font-black hover:shadow-[0_0_20px_rgba(0,242,255,0.6)] hover:scale-105 transition-all"
          >
            DEMONSTRAÇÃO
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
