
import React from 'react';
import { UseCase, ModelOption, Plan } from './types';

export const USE_CASES: UseCase[] = [
  {
    id: 'beauty',
    icon: '💇‍♀️',
    title: 'Rafaela Beauty',
    category: 'Salões de Beleza',
    description: 'Agenda horários, confirma clientes e responde sobre serviços 24/7.',
    benefits: ['Reduz faltas (no-show)', 'Agenda organizada', 'Atendimento 24/7'],
    demoScript: [
      'Cliente: Oi, vocês têm horário amanhã?',
      'Rafaela: Oi! Claro! Qual serviço você deseja? (corte, escova, coloração?)',
      'Cliente: Corte feminino',
      'Rafaela: Perfeito 💇‍♀️ Temos às 10h, 14h ou 17h. Qual prefere?'
    ]
  },
  {
    id: 'pet',
    icon: '🐶',
    title: 'Rafaela Pet',
    category: 'Petshops',
    description: 'Cuida de agendamentos de banho e tosa, valores e dúvidas comuns.',
    benefits: ['Mais banhos e tosas', 'Menos chamadas', 'Informações rápidas'],
    demoScript: [
      'Cliente: Quanto custa banho e tosa?',
      'Rafaela: Oi 🐾 O valor varia conforme o porte. Seu pet é pequeno, médio ou grande?',
      'Cliente: Pequeno',
      'Rafaela: Perfeito! O valor é R$ 60. Deseja agendar para amanhã?'
    ]
  },
  {
    id: 'health',
    icon: '🦷',
    title: 'Rafaela Saúde',
    category: 'Clínicas e Consultórios',
    description: 'Agenda consultas, confirma horários e informa sobre convênios aceitos.',
    benefits: ['Redução de faltas', 'Organização da agenda', 'Profissionalismo'],
    demoScript: []
  },
  {
    id: 'fit',
    icon: '🏋️',
    title: 'Rafaela Fit',
    category: 'Academias e Estúdios',
    description: 'Informa planos, aulas e agenda treinos experimentais automaticamente.',
    benefits: ['Mais matrículas', 'Atendimento padronizado', 'Follow-up automático'],
    demoScript: []
  },
  {
    id: 'store',
    icon: '🛒',
    title: 'Rafaela Store',
    category: 'Lojas e E-commerce',
    description: 'Responde sobre produtos, pedidos, trocas e promoções de forma imediata.',
    benefits: ['Aumento de conversão', 'Menos suporte humano', 'Recuperação de carrinho'],
    demoScript: []
  },
  {
    id: 'imob',
    icon: '🏠',
    title: 'Rafaela Imob',
    category: 'Imobiliárias',
    description: 'Qualifica leads, envia opções de imóveis e agenda visitas com corretores.',
    benefits: ['Leads qualificados', 'Foco em fechamento', 'Atendimento imediato'],
    demoScript: []
  }
];

export const MODELS: ModelOption[] = [
  {
    provider: 'OpenAI (GPT)',
    name: 'GPT-4o / GPT-4o-mini',
    type: 'premium',
    description: 'Excelente em atendimento, vendas consultivas e fluxos complexos.',
    bestFor: 'Vendas, negociação e suporte complexo.'
  },
  {
    provider: 'Anthropic (Claude)',
    name: 'Claude 3.5 Sonnet',
    type: 'premium',
    description: 'Forte em textos longos, consistência e análise de documentos.',
    bestFor: 'Análise jurídica, contratos e FAQ extenso.'
  },
  {
    provider: 'Google (Gemini)',
    name: 'Gemini 2.5 Pro',
    type: 'premium',
    description: 'Perfeito para integrações com Google e processamento multimodal.',
    bestFor: 'Análise de imagens e dados em tempo real.'
  },
  {
    provider: 'Meta (Llama)',
    name: 'Llama 3.1 / 3.2',
    type: 'efficient',
    description: 'Ótimo para customização e implantação self-hosted.',
    bestFor: 'Alto volume e privacidade máxima.'
  }
];

export const PLANS: Plan[] = [
  {
    name: 'Starter',
    price: 'R$ 497/mês',
    modelType: 'Efficient ou Híbrido Básico',
    features: [
      '1 Agente IA',
      '1 Canal (WhatsApp ou Site)',
      'Fluxos Essenciais',
      'Suporte Padrão',
      'Base de Conhecimento Básica'
    ]
  },
  {
    name: 'Pro',
    price: 'R$ 997/mês',
    modelType: 'Modo Híbrido Avançado',
    recommended: true,
    features: [
      'Até 3 Agentes IA',
      'Múltiplos Canais',
      'Integrações via Webhook/n8n',
      'Relatórios Mensais de IA',
      'Otimização de Prompt Mensal'
    ]
  },
  {
    name: 'Enterprise',
    price: 'Sob Consulta',
    modelType: 'Premium e Customizado',
    features: [
      'Agentes Ilimitados',
      'SLA de Atendimento',
      'Ambiente Dedicado / Self-host',
      'Governança e Auditoria Avançada',
      'Gerente de Conta Exclusivo'
    ]
  }
];
