
import React from 'react';

interface FooterProps {
  onNavigate: (view: 'home' | 'agents') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="pt-24 pb-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <button 
              onClick={() => onNavigate('home')}
              className="flex items-center gap-3 mb-6 group text-left"
            >
              <div className="relative w-12 h-12 flex items-center justify-center">
                <svg className="w-10 h-10 text-cyan-500" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 5L89.5 27.5V72.5L50 95L10.5 72.5V27.5L50 5Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
                  <circle cx="50" cy="45" r="18" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4"/>
                  <path d="M38 48C38 42 42 36 50 36C58 36 62 42 62 48C62 55 58 60 50 65C42 60 38 55 38 48Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-2xl font-black font-heading text-white tracking-tighter">RAFAELA</span>
                <span className="text-[8px] font-bold tracking-[0.3em] text-cyan-500 uppercase mt-0.5">Virtual Assistant</span>
              </div>
            </button>
            <p className="text-slate-500 max-w-sm mb-8 leading-relaxed">
              Escalando negócios com agentes de IA que realmente executam tarefas, resolvem problemas e vendem 24 horas por dia.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-white uppercase tracking-widest text-xs text-slate-400">Navegação</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><button onClick={() => onNavigate('home')} className="hover:text-[#00f2ff] transition-colors">Início</button></li>
              <li><button onClick={() => onNavigate('agents')} className="hover:text-[#00f2ff] transition-colors">Catálogo de Agentes</button></li>
              <li><a href="#como-funciona" className="hover:text-[#00f2ff] transition-colors">Como Funciona</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-white uppercase tracking-widest text-xs text-slate-400">Suporte</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="https://wa.me/5521995810410" target="_blank" className="hover:text-[#00f2ff] transition-colors font-bold">WhatsApp Direto</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Segurança LGPD</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} Rafaela AI — Inteligência Artificial de Alta Performance. Todos os direitos reservados.</p>
          <div className="flex gap-6 text-xs text-slate-600 font-bold uppercase tracking-widest">
             <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                Sistemas Operacionais
             </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
