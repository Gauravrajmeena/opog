import { openai } from '@ai-sdk/openai';
import { experimental_wrapLanguageModel as wrapLanguageModel } from 'ai';
import { GoogleGenerativeAI } from '@google/generative-ai';

import { customMiddleware } from './custom-middleware';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY || '');

export const customModel = (apiIdentifier: string) => {
  if (apiIdentifier === 'gemini-pro') {
    return wrapLanguageModel({
      model: {
        invoke: async ({ messages, functions, temperature = 0.7 }) => {
          const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
          const chat = model.startChat({
            history: messages.map(m => ({
              role: m.role,
              parts: m.content,
            })),
          });
          
          const result = await chat.sendMessage(messages[messages.length - 1].content);
          const response = await result.response;
          return response.text();
        },
      },
      middleware: customMiddleware,
    });
  }

  // Default to OpenAI for other models
  return wrapLanguageModel({
    model: openai(apiIdentifier),
    middleware: customMiddleware,
  });
};
