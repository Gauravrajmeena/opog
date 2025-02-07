// TypeScript
import OpenAI from 'openai';
import { experimental_wrapLanguageModel as wrapLanguageModel } from 'ai';
import { customMiddleware } from './custom-middleware';

// This function returns a wrapped Deepseek model instance that you can use like ChatGPT.
export const deepseekModel = (apiKey: string) => {
  const deepseekClient = new OpenAI({
    baseURL: 'https://api.deepseek.com',
    apiKey, // Replace with your Deepseek API key or pass it in at runtime.
  });

  return wrapLanguageModel({
    model: deepseekClient,
    middleware: customMiddleware,
  });
};