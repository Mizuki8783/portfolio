import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'This tool returns a concise personal introduction of Mizuki Nakano. It is used to answer the question "Who are you?" or "Tell me about yourself"',
  parameters: z.object({}),
  execute: async () => {
    return {
      presentation:
        "I'm Mizuki Nakano, a Data Engineer based in Vancouver, BC with experience in data architecture and analytics. I've worked at Accenture as a Data Architect and Panalyt as a Junior Data Engineer, building scalable data solutions and ETL pipelines. I'm passionate about data engineering and innovative AI/ML solutions that drive business value",
    };
  },
});
