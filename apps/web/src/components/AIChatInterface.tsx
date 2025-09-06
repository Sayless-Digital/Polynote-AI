'use client';

import { useState } from 'react';
import { useChat } from '@ai-sdk/react';
import { Message, MessageContent, MessageAvatar } from '@/components/ai-elements/message';
import { Conversation, ConversationContent, ConversationScrollButton } from '@/components/ai-elements/conversation';
import { PromptInput, PromptInputTextarea, PromptInputToolbar, PromptInputSubmit } from '@/components/ai-elements/prompt-input';
import { Response } from '@/components/ai-elements/response';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mic, MicOff, Bot, User } from 'lucide-react';

export function AIChatInterface() {
  const [isRecording, setIsRecording] = useState(false);
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/chat',
  });

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // TODO: Implement actual voice recording functionality
  };

  return (
    <div className="h-full w-full p-4 overflow-hidden">
      <Card className="h-full flex flex-col bg-background/5 backdrop-blur-[1px] border-border/10">
        <CardHeader className="flex-shrink-0">
          <CardTitle className="flex items-center gap-2">
            <Bot className="w-5 h-5" />
            AI Note Assistant
          </CardTitle>
          <CardDescription>
            Chat with AI to analyze, summarize, and organize your notes
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col p-0">
          <Conversation className="flex-1">
            <ConversationContent>
              {messages.length === 0 ? (
                <div className="flex items-center justify-center h-full text-center">
                  <div className="space-y-4">
                    <Bot className="w-12 h-12 mx-auto text-muted-foreground" />
                    <div>
                      <h3 className="text-lg font-medium">Start a conversation</h3>
                      <p className="text-muted-foreground">
                        Ask me to analyze your notes, create summaries, or help organize your thoughts.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                messages.map((message) => (
                  <Message from={message.role} key={message.id}>
                    <MessageAvatar
                      src={message.role === 'user' ? '/user-avatar.png' : '/bot-avatar.png'}
                      name={message.role === 'user' ? 'You' : 'AI'}
                    />
                    <MessageContent>
                      {message.content && (
                        <Response>{message.content}</Response>
                      )}
                    </MessageContent>
                  </Message>
                ))
              )}
            </ConversationContent>
            <ConversationScrollButton />
          </Conversation>
          
          <div className="border-t p-4 flex-shrink-0">
            <PromptInput onSubmit={handleSubmit}>
              <PromptInputTextarea
                value={input || ''}
                onChange={handleInputChange}
                placeholder="Ask me to analyze your notes, create summaries, or help organize your thoughts..."
                disabled={isLoading}
              />
              <PromptInputToolbar>
                <PromptInputSubmit
                  status={isLoading ? 'streaming' : undefined}
                  disabled={!input?.trim() || isLoading}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={toggleRecording}
                  className={isRecording ? 'bg-destructive/10 text-destructive hover:bg-destructive/20' : ''}
                >
                  {isRecording ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                </Button>
              </PromptInputToolbar>
            </PromptInput>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
