
export interface UseCase {
  id: string;
  icon: string;
  title: string;
  category: string;
  description: string;
  benefits: string[];
  demoScript: string[];
}

export interface ModelOption {
  name: string;
  type: 'premium' | 'efficient';
  description: string;
  bestFor: string;
  provider: string;
}

export interface Plan {
  name: string;
  price: string;
  features: string[];
  modelType: string;
  recommended?: boolean;
}
