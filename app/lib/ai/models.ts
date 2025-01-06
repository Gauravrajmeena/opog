// Define your models here.

export interface Model {
  id: string;
  label: string;
  apiIdentifier: string;
  description: string;
}

export const models: Array<Model> = [
  {
    id: 'gemini-pro',
    label: 'Gemini Pro',
    apiIdentifier: 'gemini-pro',
    description: 'Most capable Gemini model for text generation',
  },
  {
    id: 'gemini-pro-vision',
    label: 'Gemini Pro Vision',
    apiIdentifier: 'gemini-pro-vision',
    description: 'For tasks involving both text and images',
  },
] as const;

export const DEFAULT_MODEL_NAME: string = 'gemini-pro';
