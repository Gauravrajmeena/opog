import { openai } from '@ai-sdk/openai';
import { experimental_wrapLanguageModel as wrapLanguageModel } from 'ai';

import { customMiddleware } from './custom-middleware';

export const customModel = (apiIdentifier: string) => {
  return wrapLanguageModel({
    model: openai(
      base_url="https://api.sree.shop/v1",
          api_key="ddc-xxx"
    ),
    middleware: customMiddleware,
  });
};
