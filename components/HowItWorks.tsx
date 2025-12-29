
import React from 'react';

interface HowItWorksProps {
  onNavigate: (view: 'home' | 'agents') => void;
  onStartDiagnosis: () => void;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ onNavigate, onStartDiagnosis }) => {
  const WHATSAPP_BASE = "https://wa.me/5521995810410";

  const handleWhatsApp = (text: string) => {
    const message = encodeURIComponent(text);
    window.open(`${WHATSAPP_BASE}?text=${message}`, '_blank');
  };

  const steps = [
    {
      id: "01",
      title: "Diagnóstico",
      icon: (
        <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      description: "Entendemos seu fluxo, linguagem e metas (vendas, suporte, agendamento, cobrança, etc.).",
      details: ["Mapeamento de processos", "Definição de tom de voz", "Análise de canais"]
    },
    {
      id: "02",
      title: "Configuração do Agente",
      icon: (
        <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      description: "Implementamos a Rafaela com as regras do seu negócio e base de conhecimento validada.",
      details: ["Regras de escalonamento", "Integração com CRM/n8n", "Treinamento específico"]
    },
    {
      id: "03",
      title: "Operação e Melhoria",
      icon: (
        <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      description: "Monitoramento constante e ajustes baseados em métricas reais de atendimento.",
      details: ["Relatórios semanais", "Otimização de respostas", "Escala de performance"]
    }
  ];

  return (
    <section id="como-funciona" className="py-24 bg-black relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Escolha do Modelo de IA */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black mb-6 bg-gradient-to-r from-white via-cyan-400 to-purple-500 bg-clip-text text-transparent uppercase tracking-tight">
            Escolha como a Rafaela assume o trabalho
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
            Oferecemos modelos prontos para nichos específicos ou o desenvolvimento de um cérebro digital 100% customizado.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-24">
            <div className="glass p-10 rounded-[2.5rem] border-white/5 hover:neon-border transition-all group text-left">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-3xl mb-6">🎯</div>
              <h3 className="text-2xl font-bold text-white mb-4">Agente de Catálogo</h3>
              <p className="text-gray-500 mb-8 leading-relaxed italic">
                "Preciso de uma solução rápida e testada para o meu nicho (Salão, Petshop, Imobiliária, etc)."
              </p>
              <button 
                onClick={() => onNavigate('agents')}
                className="w-full py-4 bg-white/5 border border-white/10 rounded-xl font-bold text-white hover:bg-[#00f2ff] hover:text-slate-900 transition-all uppercase tracking-widest text-sm"
              >
                Escolher Modelo Pronto
              </button>
            </div>

            <div className="glass p-10 rounded-[2.5rem] border-cyan-500/20 hover:neon-border transition-all group bg-cyan-500/5 text-left">
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-3xl mb-6">🧪</div>
              <h3 className="text-2xl font-bold text-white mb-4">Agente sob Demanda</h3>
              <p className="text-gray-500 mb-8 leading-relaxed italic">
                "Tenho um fluxo único e preciso de um cérebro digital 100% personalizado para o meu negócio."
              </p>
              <button 
                onClick={onStartDiagnosis}
                className="w-full py-4 bg-[#00f2ff] text-slate-900 rounded-xl font-bold hover:shadow-[0_0_25px_rgba(0,242,255,0.4)] transition-all uppercase tracking-widest text-sm"
              >
                Solicitar Projeto Custom
              </button>
            </div>
          </div>
        </div>

        {/* Fluxo de Implementação */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold text-white/50 uppercase tracking-widest mb-4">Nossa Metodologia</h3>
          <h4 className="text-3xl font-black text-white">Como a Rafaela assume o trabalho</h4>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative mb-16">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-transparent -translate-y-1/2 z-0" />

          {steps.map((step, index) => (
            <div 
              key={index} 
              className="group bg-gray-900/50 border border-white/10 p-8 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 relative z-10 backdrop-blur-sm"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-black/50 rounded-xl border border-white/10 group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <span className="text-5xl font-black text-white/5 group-hover:text-cyan-500/10 transition-colors">
                  {step.id}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                {step.description}
              </p>

              <ul className="space-y-3 mb-8">
                {step.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center text-xs text-gray-500">
                    <svg className="w-4 h-4 mr-2 text-cyan-500/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onStartDiagnosis}
            className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white font-black rounded-full hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all group uppercase tracking-widest"
          >
            <svg className="w-6 h-6 mr-3 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            Quero iniciar meu diagnóstico gratuito
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
