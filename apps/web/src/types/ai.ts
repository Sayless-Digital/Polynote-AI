// Local type definitions to avoid importing from 'ai' package in client components

export type UIMessage = {
  id: string;
  role: 'user' | 'assistant' | 'system' | 'tool';
  content: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export type ChatStatus = 'awaiting_message' | 'in_progress' | 'awaiting_tool_calls' | 'awaiting_tool_results';

export type ToolUIPart = {
  toolCallId: string;
  toolName: string;
  args: Record<string, any>;
  result?: any;
  state: 'call' | 'result';
};

export type Experimental_GeneratedImage = {
  url: string;
  alt?: string;
};
