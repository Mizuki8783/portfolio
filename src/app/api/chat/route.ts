import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';
import { getSectionContext } from '@/data/sections';
import { getSystemPrompt } from './prompt';
import { getContact } from './tools/getContact';
import { getPresentation } from './tools/getPresentation';
import { getProjects } from './tools/getProjects';
import { getResume } from './tools/getResume';
import { getSkills } from './tools/getSkills';
import { getSports } from './tools/getSport';

export const maxDuration = 30;

// ❌ Pas besoin de l'export ici, Next.js n'aime pas ça
function errorHandler(error: unknown) {
  if (error == null) {
    return 'Unknown error';
  }
  if (typeof error === 'string') {
    return error;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return JSON.stringify(error);
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    console.log('[CHAT-API] Incoming messages:', messages);

    // Tools return a short result so the reply doesn't restate the card; past cards get their full content here for follow-ups.
    for (const message of messages) {
      for (const part of message.parts ?? []) {
        if (
          part.type === 'tool-invocation' &&
          part.toolInvocation.state === 'result'
        ) {
          part.toolInvocation.result =
            getSectionContext(part.toolInvocation.toolName) ??
            part.toolInvocation.result;
        }
      }
    }

    messages.unshift(getSystemPrompt());

    const tools = {
      getProjects,
      getPresentation,
      getResume,
      getContact,
      getSkills,
      getSports,
    };

    const result = streamText({
      model: openai('gpt-4o-mini'),
      messages,
      toolCallStreaming: true,
      tools,
      maxSteps: 2,
    });

    return result.toDataStreamResponse({
      getErrorMessage: errorHandler,
    });
  } catch (err) {
    console.error('Global error:', err);
    const errorMessage = errorHandler(err);
    return new Response(errorMessage, { status: 500 });
  }
}
