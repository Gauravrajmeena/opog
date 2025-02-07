// Define your models here.

export interface Model {
  id: string;
  label: string;
  apiIdentifier: string;
  description: string;
}

export const MODELS = [
  {
    id: 'gpt-4o-mini',
    label: 'GPT 4o-mini',
    apiIdentifier: 'gpt-4o-mini',
    description: 'For quick tasks',
  },
  {
    id: 'deepseek-ai',
    label: 'DeepSeek AI',
    apiIdentifier: 'deepseek-ai',
    description: 'For deep search tasks and assistance',
  },
] as const;

export const DEFAULT_MODEL_NAME: string = 'gpt-4o-mini';

// TypeScript
import { customModel } from './index';
import { deepseekModel } from './deepseek';

export const getModel = (modelName: string) => {
  switch (modelName) {
    // Removed case "gpt-4o"
    case "gpt-4o-mini":
      return customModel("gpt-4o-mini");
    case "deepseek-ai":
      return deepseekModel(process.env.DEEPSEEK_API_KEY || '');
    default:
      throw new Error(`Unknown model: ${modelName}`);
  }
};
