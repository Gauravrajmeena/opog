// Define your models here.

export interface Model {
  id: string;
  label: string;
  apiIdentifier: string;
  description: string;
}

export const models: Array<Model> = [
  {
    id: 'gpt4-mini',
    label: 'GPT-4 Mini',
    apiIdentifier: 'gpt-4-mini',
    description: 'Smaller, faster version of GPT-4',
  },
  {
    id: 'gemini-pro',
    label: 'Gemini Pro',
    apiIdentifier: 'gemini-pro',
    description: 'Google's most capable AI model for text generation',
  },
] as const;

export const DEFAULT_MODEL_NAME: string = 'gpt-4o-mini';
