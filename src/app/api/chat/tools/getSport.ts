
import { tool } from "ai";
import { z } from "zod";

export const getSports = tool({
  description:
    "This tool will show some photos of Mizuki doing activities",
  parameters: z.object({}),
  execute: async () => {
    return "Here are some photos of my activities and interests!";
  },
});
