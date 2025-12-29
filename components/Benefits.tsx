
import React from 'react';

const Benefits: React.FC = () => {
  const benefitList = [
    { title: "Resposta Imediata", desc: "Menos abandono, mais conversão em tempo real.", icon: "⚡" },
    { title: "Redução de Custos", desc: "Economize em atendimento sem perder qualidade.", icon: "💰" },
    { title: "Padronização", desc: "Processos consistentes em todos os contatos.", icon: "✅" },
    { title: "Atendimento 24/7", desc: "Sua empresa nunca dorme, nem para feriados.", icon: "🌙" },
    { title: "Escala Infinita", desc: "Atenda 1 ou 10.000 clientes sem contratar mais.", icon: "📈" },
    { title: "Governança", desc: "Auditoria, relatórios e melhoria contínua.", icon: "⚖️" },
  ];

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">Benefícios Reais</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A Rafaela não é apenas um bot, é uma extensão produtiva e inteligente da sua equipe.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitList.map((b, i) => (
            <div key={i} className="glass p-8 rounded-3xl group hover:neon-border transition-all duration-300">
              <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">{b.icon}</div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-[#00f2ff] transition-colors">{b.title}</h3>
              <p className="text-slate-500">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
