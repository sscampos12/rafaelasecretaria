
import React, { useState } from 'react';

interface DiagnosisModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DiagnosisModal: React.FC<DiagnosisModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    niche: '',
    problem: '',
    volume: '',
  });

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `*DIAGNÓSTICO RAFAELA AI*%0A%0A` +
      `*Nome:* ${formData.name}%0A` +
      `*Empresa:* ${formData.company}%0A` +
      `*Nicho:* ${formData.niche}%0A` +
      `*Desafio:* ${formData.problem}%0A` +
      `*Volume Mensal:* ${formData.volume}%0A%0A` +
      `_Enviado via Diagnóstico Online_`;

    window.open(`https://wa.me/5521995810410?text=${message}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative w-full max-w-xl glass border-cyan-500/30 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.2)] animate-in fade-in zoom-in duration-300">
        {/* Header */}
        <div className="px-8 py-6 border-b border-white/10 flex justify-between items-center bg-cyan-500/5">
          <div>
            <h3 className="text-xl font-black text-white">Diagnóstico Gratuito</h3>
            <p className="text-xs text-cyan-500 uppercase font-bold tracking-widest mt-1">Passo {step} de 3</p>
          </div>
          <button onClick={onClose} className="text-slate-500 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1 bg-white/5">
          <div 
            className="h-full bg-cyan-500 transition-all duration-500" 
            style={{ width: `${(step / 3) * 100}%` }}
          ></div>
        </div>

        <form onSubmit={handleSubmit} className="p-8">
          {step === 1 && (
            <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
              <div>
                <label className="block text-sm font-bold text-slate-400 mb-2 uppercase tracking-widest">Seu Nome</label>
                <input 
                  required
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Ex: João Silva"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-400 mb-2 uppercase tracking-widest">Nome da Empresa</label>
                <input 
                  required
                  type="text" 
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Ex: Clínica Bem Estar"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>
              <button 
                type="button" 
                onClick={nextStep}
                disabled={!formData.name || !formData.company}
                className="w-full py-4 bg-cyan-500 text-slate-950 font-black rounded-xl hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all disabled:opacity-50 disabled:hover:shadow-none"
              >
                PRÓXIMO PASSO
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
              <div>
                <label className="block text-sm font-bold text-slate-400 mb-2 uppercase tracking-widest">Nicho de Atuação</label>
                <select 
                  name="niche"
                  value={formData.niche}
                  onChange={handleInputChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                >
                  <option value="" className="bg-slate-950">Selecione...</option>
                  <option value="Beleza" className="bg-slate-950">Beleza e Estética</option>
                  <option value="Saúde" className="bg-slate-950">Saúde e Clínicas</option>
                  <option value="Varejo" className="bg-slate-950">Varejo e E-commerce</option>
                  <option value="Imobiliário" className="bg-slate-950">Imobiliário</option>
                  <option value="Serviços" className="bg-slate-950">Prestação de Serviços</option>
                  <option value="Outro" className="bg-slate-950">Outro</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-400 mb-2 uppercase tracking-widest">Qual seu maior desafio hoje?</label>
                <textarea 
                  name="problem"
                  rows={3}
                  value={formData.problem}
                  onChange={handleInputChange}
                  placeholder="Ex: Muitos leads chegam mas demoramos a responder..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                ></textarea>
              </div>
              <div className="flex gap-4">
                <button type="button" onClick={prevStep} className="flex-1 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl">VOLTAR</button>
                <button 
                  type="button" 
                  onClick={nextStep}
                  disabled={!formData.niche || !formData.problem}
                  className="flex-[2] py-4 bg-cyan-500 text-slate-950 font-black rounded-xl hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all disabled:opacity-50"
                >
                  CONTINUAR
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 animate-in slide-in-from-right-4 duration-300 text-center">
              <div className="py-4">
                <div className="w-16 h-16 bg-cyan-500/20 text-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Quase lá!</h4>
                <p className="text-sm text-slate-500">Escolha o volume de atendimento mensal para finalizarmos.</p>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {['0 - 100', '100 - 500', '500 - 2000', '2000+'].map(val => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, volume: val }))}
                    className={`py-3 rounded-xl border transition-all text-sm font-bold ${formData.volume === val ? 'bg-cyan-500 border-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.3)]' : 'bg-white/5 border-white/10 text-slate-400 hover:border-white/20'}`}
                  >
                    {val} contatos
                  </button>
                ))}
              </div>

              <div className="flex gap-4 pt-4">
                <button type="button" onClick={prevStep} className="flex-1 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl">VOLTAR</button>
                <button 
                  type="submit"
                  disabled={!formData.volume}
                  className="flex-[2] py-4 bg-green-500 text-white font-black rounded-xl hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.48s3.481 5.229 3.481 8.406c0 6.555-5.332 11.887-11.886 11.887-2.015 0-3.991-.512-5.741-1.488l-6.145 1.612zm5.839-4.733l.343.204c1.553.921 3.33 1.408 5.152 1.408 5.405 0 9.803-4.397 9.803-9.803 0-2.618-1.02-5.08-2.871-6.932-1.851-1.852-4.314-2.872-6.932-2.872-5.405 0-9.803 4.398-9.803 9.803 0 1.936.57 3.82 1.649 5.43l.224.336-1.076 3.929 4.026-1.056z"/>
                  </svg>
                  ENVIAR NO WHATSAPP
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default DiagnosisModal;
