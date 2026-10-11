import { tool } from 'ai';
import { z } from 'zod';

export const getContact = tool({
  description:
    'This tool shows my contact card: a quick summary of me, contact links, tech stack, what I bring, and my passions. Use it for contact info, job search, or hiring questions.',
  parameters: z.object({}),
  execute: async () => {
    return "Here is my contact informations above, Feel free to contact me I will be happy to answer you 😉";
  },
});
