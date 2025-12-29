import React from 'react';

interface HeroProps {
  onNavigate: (view: 'home' | 'agents') => void;
  onStartDiagnosis: () => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate, onStartDiagnosis }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-20 overflow-hidden px-6">
      {/* Elementos de Fundo (Luzes) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        
        {/* COLUNA DA ESQUERDA: Texto e Botões */}
        <div className="text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold uppercase tracking-widest mb-8">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            Sistema Online
          </div>
          
          {/* Título Principal */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black font-heading mb-6 leading-[1.1] text-white">
            Rafaela <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-400">
              Virtual Assistant
            </span>
          </h1>
          
          {/* Subtítulo com destaque em azul */}
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-lg leading-relaxed">
            Agentes de IA que <span className="text-cyan-400 font-bold">atendem, qualificam e vendem</span> enquanto você foca no que realmente importa.
          </p>
          
          {/* Botões */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button 
              onClick={onStartDiagnosis}
              className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded-full font-black text-lg transition-all hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
            >
              Iniciar Diagnóstico
            </button>
            <button 
              onClick={() => onNavigate('agents')}
              className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-full font-bold text-lg transition-all backdrop-blur-md"
            >
              Ver Catálogo
            </button>
          </div>

          {/* Estatísticas (Rodapé do Hero) */}
          <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
            <div>
              <div className="text-2xl md:text-3xl font-black text-white mb-1">+500k</div>
              <div className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Interações</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-black text-white mb-1">98%</div>
              <div className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Acurácia</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-black text-white mb-1 flex items-center gap-1">
                5.0 <span className="text-cyan-400 text-lg">★</span>
              </div>
              <div className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Satisfação</div>
            </div>
          </div>
        </div>

        {/* COLUNA DA DIREITA: Imagem da Rafaela */}
        <div className="relative hidden lg:block">
          {/* Brilho atrás da imagem */}
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 blur-[60px] rounded-full transform rotate-6 scale-90"></div>
          
          {/* Container da Imagem */}
          <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-slate-900/50 backdrop-blur-sm shadow-2xl p-2">
            <div className="rounded-[1.5rem] overflow-hidden relative">
              <img 
                src="/hero-img.png" 
                alt="Rafaela AI Avatar" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              
              {/* Elementos Flutuantes Decorativos (HUD) */}
              <div className="absolute top-6 left-6 p-4 glass rounded-xl border border-cyan-500/30 shadow-lg animate-[float_4s_ease-in-out_infinite]">
                <div className="text-xs font-bold text-cyan-400 mb-1">STATUS</div>
                <div className="flex items-center gap-2 text-white font-mono text-sm">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  ONLINE
                </div>
              </div>

              <div className="absolute bottom-6 right-6 p-4 glass rounded-xl border border-white/10 shadow-lg animate-[float_5s_ease-in-out_infinite_reverse]">
                <div className="text-xs font-bold text-slate-400 mb-1">TASK</div>
                <div className="text-white font-mono text-sm">Agendamento...</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;