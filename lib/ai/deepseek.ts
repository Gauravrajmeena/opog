import { customModel } from './index';

export const deepSeekModel = (apiIdentifier: string) => {
  return customModel(apiIdentifier);
};

export const callDeepSeekAPI = async (input: string) => {
  const response = await fetch('https://api.deepseek.ai/endpoint', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer YOUR_DEEPSEEK_API_KEY`,
    },
    body: JSON.stringify({ input }),
  });

  if (!response.ok) {
    throw new Error('Failed to call DeepSeek API');
  }

  return await response.json();
}; 