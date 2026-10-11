import { tool } from 'ai';
import { z } from 'zod';
import { about } from '@/data/profile';

export const getPresentation = tool({
  description:
    'This tool returns a concise personal introduction of Mizuki Nakano. It is used to answer the question "Who are you?" or "Tell me about yourself"',
  parameters: z.object({}),
  execute: async () => {
    return {
      presentation: about.intro,
    };
  },
});
