
import React from 'react';

interface HeroProps {
  onNavigate: (view: 'home' | 'agents') => void;
  onStartDiagnosis: () => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate, onStartDiagnosis }) => {
  const WHATSAPP_URL = "https://wa.me/5521995810410?text=Olá! Gostaria de falar com um consultor sobre a Rafaela AI.";

  return (
    <section className="relative min-h-[85vh] flex items-center pt-32 pb-40 overflow-hidden px-6">
      {/* Elementos Atmosféricos de Fundo */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-cyan-500/10 blur-[160px] rounded-full pointer-events-none"></div>
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Badge de Sistema Centralizada */}
        <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-cyan-500/5 border border-cyan-500/20 text-cyan-400 text-[10px] font-black uppercase tracking-[0.5em] mb-12 backdrop-blur-xl shadow-[0_0_20px_rgba(6,182,212,0.1)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          Sistema Rafaela Online
        </div>
        
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black font-heading mb-10 leading-[0.85] tracking-tighter text-white">
          Rafaela <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-cyan-400 to-cyan-700">
            Virtual Assistant
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-400 mb-14 max-w-3xl mx-auto leading-relaxed font-medium">
          A nova fronteira do atendimento automatizado. Agentes de IA treinados para converter conversas em resultados reais, 24 horas por dia, com precisão absoluta.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
          <button 
            onClick={onStartDiagnosis}
            className="w-full sm:w-auto bg-white text-slate-950 px-14 py-6 rounded-2xl font-black text-xl hover:shadow-[0_0_60px_rgba(255,255,255,0.2)] hover:scale-105 transition-all flex items-center justify-center gap-3 group uppercase tracking-[0.1em]"
          >
            Iniciar Diagnóstico
            <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </button>
          <button 
            onClick={() => onNavigate('agents')}
            className="w-full sm:w-auto px-12 py-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all font-bold text-xl flex items-center justify-center gap-2 text-white shadow-xl backdrop-blur-md"
          >
            Ver Catálogo
          </button>
        </div>

        {/* Slogan e Prova Social Centralizados */}
        <div className="flex flex-col items-center">
          <p className="text-sm text-slate-500 font-bold uppercase tracking-[0.3em] mb-6">
            A Inteligência que <span className="text-cyan-400">Transforma seu Atendimento</span>
          </p>
          
          <div className="flex items-center gap-10">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-black text-white">+500k</span>
              <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mt-1">Interações</span>
            </div>
            <div className="w-px h-10 bg-white/10"></div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-black text-white">98%</span>
              <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mt-1">Assertividade</span>
            </div>
            <div className="w-px h-10 bg-white/10"></div>
            <div className="flex flex-col items-center">
              <div className="flex gap-1 mb-1">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="w-4 h-4 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Satisfação</span>
            </div>
          </div>
        </div>
      </div>

      {/* Elementos de Interface de Fundo (Centralizados) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20 pointer-events-none">
        <div className="w-[80vw] h-[80vw] border border-cyan-500/10 rounded-full animate-[spin_60s_linear_infinite]"></div>
        <div className="absolute w-[60vw] h-[60vw] border border-white/5 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
      </div>
    </section>
  );
};

export default Hero;
