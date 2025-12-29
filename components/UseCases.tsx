
import React from 'react';
import { USE_CASES } from '../constants';

const UseCases: React.FC = () => {
  const getWhatsAppForAgent = (title: string) => {
    return `https://wa.me/5521995810410?text=Olá! Gostaria de testar a demonstração do agente: ${title}.`;
  };

  return (
    <section id="agentes" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[#00f2ff] text-xs font-bold mb-6">
            🧩 CATÁLOGO DE AGENTES
          </div>
          <h2 className="text-5xl md:text-6xl font-black font-heading mb-6 text-white">Nossa Força de Trabalho Digital</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Cada agente abaixo é uma configuração especializada da Rafaela, treinada com dados e fluxos específicos para o seu nicho.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {USE_CASES.map((uc) => (
            <div key={uc.id} className="glass rounded-[2.5rem] overflow-hidden group hover:neon-border transition-all duration-500 flex flex-col">
              <div className="p-10 flex-grow">
                <div className="flex items-center justify-between mb-8">
                  <div className="text-5xl group-hover:scale-125 transition-transform duration-500">{uc.icon}</div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 border border-slate-500/20 px-3 py-1.5 rounded-full">
                    {uc.category}
                  </span>
                </div>
                <h3 className="text-2xl font-black mb-4 group-hover:text-[#00f2ff] transition-colors text-white">{uc.title}</h3>
                <p className="text-slate-400 text-base mb-8 leading-relaxed">
                  {uc.description}
                </p>
                <div className="space-y-3 mb-10">
                  {uc.benefits.map((b, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-slate-500 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
                      {b}
                    </div>
                  ))}
                </div>
                <a 
                  href={getWhatsAppForAgent(uc.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-4 rounded-2xl border border-white/10 group-hover:bg-[#00f2ff] group-hover:text-slate-900 font-black transition-all text-sm uppercase tracking-widest"
                >
                  Testar Demonstração
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 rounded-[3rem] glass border-cyan-500/20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 pointer-events-none"></div>
          <h3 className="text-3xl font-black mb-6 text-white">Não encontrou seu nicho?</h3>
          <p className="text-slate-400 mb-10 max-w-xl mx-auto">
            Nós criamos agentes personalizados sob demanda para qualquer tipo de fluxo de negócio em menos de 48 horas.
          </p>
          <a 
            href="https://wa.me/5521995810410?text=Olá! Preciso de um agente de IA personalizado para o meu negócio."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-slate-900 px-10 py-4 rounded-2xl font-black hover:scale-105 transition-all shadow-xl"
          >
            SOLICITAR AGENTE CUSTOMIZADO
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
