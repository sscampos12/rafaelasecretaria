
import React from 'react';

const ProblemSolution: React.FC = () => {
  const problems = [
    "Clientes demoram a ser atendidos",
    "Leads esfriam antes do contato humano",
    "Sua equipe fica presa em tarefas repetitivas",
    "Atendimento fora do horário não existe",
    "Informações se perdem entre canais"
  ];

  return (
    <section id="solucao" className="py-24 px-6 bg-slate-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-start">
          <div className="glass p-8 md:p-12 rounded-3xl border-red-500/10">
            <div className="inline-block px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold mb-6">
              🔥 O PROBLEMA
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-8">
              Você perde vendas e eficiência porque:
            </h2>
            <ul className="space-y-4">
              {problems.map((p, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1.5 w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path></svg>
                  </div>
                  <span className="text-slate-400 text-lg">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 md:p-12">
            <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[#00f2ff] text-xs font-bold mb-6">
              🤖 A SOLUÇÃO: RAFAELA
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Agente de IA criada para executar tarefas reais.
            </h2>
            <p className="text-slate-400 mb-10 text-lg leading-relaxed">
              Diferente de chatbots burros, a Rafaela opera com regras, limites claros e integrações com suas ferramentas favoritas.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="glass p-5 rounded-2xl">
                <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center text-[#00f2ff] mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>
                </div>
                <h3 className="font-bold mb-2">Qualificação</h3>
                <p className="text-sm text-slate-500">Triagem inteligente com perguntas estratégicas.</p>
              </div>
              <div className="glass p-5 rounded-2xl">
                <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
                </div>
                <h3 className="font-bold mb-2">Escalonamento</h3>
                <p className="text-sm text-slate-500">Encaminhamento automático para humano quando necessário.</p>
              </div>
              <div className="glass p-5 rounded-2xl">
                <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center text-purple-400 mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 00-1 1v1a2 2 0 11-4 0v-1a1 1 0 00-1-1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path></svg>
                </div>
                <h3 className="font-bold mb-2">Integrações</h3>
                <p className="text-sm text-slate-500">Conecta com WhatsApp, CRM, planilhas e n8n.</p>
              </div>
              <div className="glass p-5 rounded-2xl">
                <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center text-green-400 mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                </div>
                <h3 className="font-bold mb-2">Métricas</h3>
                <p className="text-sm text-slate-500">Histórico completo e rastreabilidade total.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
