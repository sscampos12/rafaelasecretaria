
import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const questions = [
    { q: "Eu posso escolher o modelo de IA?", a: "Sim. E nós também recomendamos a melhor configuração baseada em seu objetivo, volume de mensagens e orçamento estimado." },
    { q: "Dá para trocar o modelo depois?", a: "Sim. A arquitetura da Rafaela é modular. Você pode começar com um modelo eficiente e migrar para um premium conforme seu negócio escala." },
    { q: "Isso funciona no WhatsApp?", a: "Sim, e de forma oficial. Também atendemos site, Instagram, Facebook e outros canais via integrações de API." },
    { q: "A Rafaela 'inventa' respostas?", a: "Não. Ela opera baseada em uma base de conhecimento controlada. Se ela não souber a resposta ou sentir risco, o escalonamento humano é acionado imediatamente." }
  ];

  return (
    <section className="py-24 px-6 bg-slate-950/50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold font-heading mb-12 text-center">Perguntas Frequentes</h2>
        <div className="space-y-4">
          {questions.map((item, i) => (
            <div key={i} className="glass rounded-2xl overflow-hidden border-white/5">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <span className="font-bold">{item.q}</span>
                <svg className={`w-5 h-5 text-cyan-500 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
