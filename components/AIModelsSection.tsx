
import React from 'react';
import { MODELS } from '../constants';

const AIModelsSection: React.FC = () => {
  return (
    <section id="modelos" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 blur-[120px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-6 uppercase tracking-widest">
            🧠 CÉREBRO DA RAFAELA
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">Transparência nos Modelos de IA</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Você não compra apenas um "prompt". Você escolhe a tecnologia que melhor se adapta ao seu custo e objetivo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-sm">1</span>
              Como escolhemos o modelo certo
            </h3>
            <div className="space-y-6">
              {[
                { t: "Volume de Mensagens", d: "Avaliamos a escala diária para otimizar custos." },
                { t: "Complexidade", d: "Perguntas simples pedem modelos rápidos; casos críticos pedem modelos premium." },
                { t: "Tom de Voz", d: "Calibragem para regionalismos e persuasão humana." },
                { t: "Privacidade", d: "Opções de nuvem pública ou infraestrutura dedicada." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-2xl border border-white/5 hover:bg-white/5 transition-colors">
                  <div className="mt-1 w-2 h-2 rounded-full bg-cyan-500 shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{item.t}</h4>
                    <p className="text-sm text-slate-500">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass p-8 rounded-3xl border-cyan-500/10">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 text-sm">2</span>
              Modelos Híbridos (Recomendado)
            </h3>
            <p className="text-slate-400 mb-8">
              Para otimizar custo e qualidade, a Rafaela trabalha alternando entre cérebros de acordo com o contexto da conversa.
            </p>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-500 mb-1">Triagem e FAQ</div>
                  <div className="text-sm font-bold">Modelos Efficient (Rápido/Barato)</div>
                </div>
                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
              </div>
              <div className="flex justify-center">
                <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
              </div>
              <div className="p-4 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-[#00f2ff] mb-1">Negociação / Retenção</div>
                  <div className="text-sm font-bold">Modelos Premium (Raciocínio Avançado)</div>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#00f2ff]/10 flex items-center justify-center text-[#00f2ff]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.989-2.386l-.548-.547z"></path></svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-3xl glass border-white/5">
          <table className="w-full text-left min-w-[800px]">
            <thead className="bg-white/5 border-b border-white/10">
              <tr>
                <th className="px-8 py-5 text-sm font-bold uppercase tracking-wider text-slate-400">Modelo</th>
                <th className="px-8 py-5 text-sm font-bold uppercase tracking-wider text-slate-400">Tipo</th>
                <th className="px-8 py-5 text-sm font-bold uppercase tracking-wider text-slate-400">Melhor Para</th>
                <th className="px-8 py-5 text-sm font-bold uppercase tracking-wider text-slate-400">Destaque</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {MODELS.map((m, i) => (
                <tr key={i} className="hover:bg-white/5 transition-colors group">
                  <td className="px-8 py-6">
                    <div className="font-bold text-white group-hover:text-[#00f2ff] transition-colors">{m.provider}</div>
                    <div className="text-xs text-slate-500">{m.name}</div>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${m.type === 'premium' ? 'bg-cyan-500/10 text-cyan-400' : 'bg-slate-500/10 text-slate-400'}`}>
                      {m.type}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-sm text-slate-300">{m.bestFor}</td>
                  <td className="px-8 py-6 text-sm text-slate-400">{m.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default AIModelsSection;
