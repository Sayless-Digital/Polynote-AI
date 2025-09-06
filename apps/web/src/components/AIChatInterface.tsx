'use client';

import { useState } from 'react';
import { useTheme } from 'next-themes';
import { useChat } from '@/hooks/useChat';
import { Message, MessageContent, MessageAvatar } from '@/components/ai-elements/message';
import { Conversation, ConversationContent, ConversationScrollButton } from '@/components/ai-elements/conversation';
import { PromptInput, PromptInputTextarea, PromptInputToolbar, PromptInputSubmit } from '@/components/ai-elements/prompt-input';
import { Response } from '@/components/ai-elements/response';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mic, MicOff, Bot, User, Send } from 'lucide-react';

export function AIChatInterface() {
  const { theme } = useTheme();
  const [isRecording, setIsRecording] = useState(false);
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/chat',
  });

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // TODO: Implement actual voice recording functionality
  };

  return (
    <div className="h-full w-full p-4 overflow-visible">
      <Card className="h-full flex flex-col">
        <CardHeader className="flex-shrink-0">
        </CardHeader>
        <CardContent className="flex-1 flex flex-col p-0">
          <Conversation className="flex-1">
            <ConversationContent className="h-full">
              {messages.length === 0 ? (
                <div className="flex items-center justify-center h-full text-center">
                  <div className="space-y-4">
                    <div className="relative w-12 h-12 mx-auto">
                      {/* Light theme logo (white) - shown in dark mode */}
                      <img
                        src="/polynote logo light.svg"
                        alt="PolyNote Logo"
                        width={48}
                        height={48}
                        className={`absolute inset-0 transition-opacity duration-200 w-12 h-12 ${
                          theme === 'dark' ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                      {/* Dark theme logo (black) - shown in light mode */}
                      <img
                        src="/polynote logo dark.svg"
                        alt="PolyNote Logo"
                        width={48}
                        height={48}
                        className={`absolute inset-0 transition-opacity duration-200 w-12 h-12 ${
                          theme === 'dark' ? 'opacity-0' : 'opacity-100'
                        }`}
                      />
                    </div>
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
              <PromptInputToolbar className="justify-end gap-2">
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={toggleRecording}
                  className={`rounded-full w-10 h-10 p-0 bg-white/10 hover:bg-white/20 ${isRecording ? 'bg-destructive/10 text-destructive hover:bg-destructive/20' : ''}`}
                >
                  {isRecording ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                </Button>
                <Button
                  type="submit"
                  variant="ghost"
                  size="icon"
                  disabled={!input?.trim() || isLoading}
                  className="rounded-full w-10 h-10 p-0 bg-white/10 hover:bg-white/20"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </PromptInputToolbar>
            </PromptInput>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
