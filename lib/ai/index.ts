import { experimental_wrapLanguageModel as wrapLanguageModel } from 'ai';
import { gemini } from '@ai-sdk/gemini'; // Hypothetical SDK, replace with the actual import path.

import { customMiddleware } from './custom-middleware';

export const customModel = (apiIdentifier: string) => {
  return wrapLanguageModel({
    model: gemini(apiIdentifier), // Use Gemini's API here.
    middleware: customMiddleware,
  });
};
