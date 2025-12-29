
import React from 'react';
import { PLANS } from '../constants';

const Pricing: React.FC = () => {
  return (
    <section id="planos" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[#00f2ff] text-xs font-bold mb-6">
            💰 PLANOS E INVESTIMENTO
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">IA com ROI estimado</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Todos os planos incluem o custo do modelo de IA e suporte especializado.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PLANS.map((plan, i) => (
            <div 
              key={i} 
              className={`relative glass p-8 rounded-[2.5rem] flex flex-col h-full border-white/5 transition-all duration-300 hover:scale-[1.02] ${plan.recommended ? 'neon-border bg-slate-900/80 scale-105' : ''}`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00f2ff] text-slate-900 px-4 py-1 rounded-full text-xs font-bold shadow-[0_0_15px_#00f2ff]">
                  MAIS ESCOLHIDO
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-extrabold mb-2 font-heading">{plan.price}</div>
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">{plan.modelType}</div>
              </div>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-slate-400">
                    <svg className="w-5 h-5 text-cyan-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                    {f}
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.recommended ? 'bg-[#00f2ff] text-slate-900 hover:shadow-[0_0_20px_rgba(0,242,255,0.4)]' : 'bg-white/5 hover:bg-white/10 text-white'}`}>
                Escolher {plan.name}
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center text-slate-500 text-sm">
          Precisa de algo mais específico? <button className="text-[#00f2ff] font-bold underline">Fale com um consultor</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
