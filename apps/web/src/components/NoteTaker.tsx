'use client';

import { useEffect, useRef, useCallback, useTransition } from 'react';
import { useState } from 'react';
import { useRouter } from "next/navigation";
import { cn } from '@/lib/utils';

// Type declarations for Speech Recognition API
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

interface SpeechRecognitionEvent extends Event {
  resultIndex: number;
  results: any;
}

interface SpeechRecognitionErrorEvent extends Event {
  error: string;
  message: string;
}
import { 
  ImageIcon, 
  Figma, 
  MonitorIcon, 
  Paperclip, 
  SendIcon, 
  XIcon, 
  LoaderIcon, 
  Sparkles, 
  Mic,
  MicOff,
  Save,
  Loader2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
// File extraction is now handled server-side

interface UseAutoResizeTextareaProps {
  minHeight: number;
  maxHeight?: number;
}

function useAutoResizeTextarea({
  minHeight,
  maxHeight,
}: UseAutoResizeTextareaProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const adjustHeight = useCallback(
    (reset?: boolean) => {
      const textarea = textareaRef.current;
      if (!textarea) return;
      if (reset) {
        textarea.style.height = `${minHeight}px`;
        return;
      }
      textarea.style.height = `${minHeight}px`;
      const newHeight = Math.max(
        minHeight,
        Math.min(textarea.scrollHeight, maxHeight ?? Number.POSITIVE_INFINITY),
      );
      textarea.style.height = `${newHeight}px`;
    },
    [minHeight, maxHeight],
  );
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = `${minHeight}px`;
    }
  }, [minHeight]);
  useEffect(() => {
    const handleResize = () => adjustHeight();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [adjustHeight]);
  return { textareaRef, adjustHeight };
}


interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  containerClassName?: string;
  showRing?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, containerClassName, showRing = true, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);
    return (
      <div className={cn('relative', containerClassName)}>
        <textarea
          className={cn(
            'border-white/20 bg-background/10 backdrop-blur-md flex min-h-[80px] w-full rounded-md border px-3 py-2 text-sm',
            'transition-all duration-200 ease-in-out',
            'placeholder:text-muted-foreground',
            'disabled:cursor-not-allowed disabled:opacity-50',
            showRing
              ? 'focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none'
              : '',
            className,
          )}
          ref={ref}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        {showRing && isFocused && (
          <motion.span
            className="ring-primary/30 pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
        {props.onChange && (
          <div
            className="bg-primary absolute right-2 bottom-2 h-2 w-2 rounded-full opacity-0"
            style={{
              animation: 'none',
            }}
            id="textarea-ripple"
          />
        )}
      </div>
    );
  },
);
Textarea.displayName = 'Textarea';

export function NoteTaker() {
  const [isRecording, setIsRecording] = useState(false);
const router = useRouter();
  const [transcript, setTranscript] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [isListening, setIsListening] = useState(false);
  const [interimTranscript, setInterimTranscript] = useState('');
  const [useManualInput, setUseManualInput] = useState(false);
  const [manualText, setManualText] = useState('');

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const recognitionRef = useRef<any | null>(null);

  // New animated layout state
  const [value, setValue] = useState('');
  const [attachments, setAttachments] = useState<Array<{
    name: string;
    size: number;
    type: string;
    file: File;
    content?: string;
  }>>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [thinkingState, setThinkingState] = useState<string>('');
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 60,
    maxHeight: 200,
  });
  const [inputFocused, setInputFocused] = useState(false);

  const startSpeechRecognition = async () => {
    // Check if speech recognition is supported
    if (!('webkitSpeechRecognition' in (window as any)) && !('SpeechRecognition' in (window as any))) {
      alert('Speech recognition is not supported in this browser. Please use Chrome, Edge, or Safari.');
      return;
    }

    // Test network connectivity to Google's speech service
    try {
      const testResponse = await fetch('https://www.google.com/favicon.ico', {
        method: 'HEAD',
        mode: 'no-cors'
      });
      console.log('Network connectivity test passed');
    } catch (error) {
      console.warn('Network connectivity test failed:', error);
      alert('Network connection issue detected. Speech recognition requires internet access. Please check your connection and try again.');
      return;
    }

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      setIsListening(true);
      setInterimTranscript('');
    };

    recognition.onresult = (event: any) => {
      let finalTranscript = '';
      let interimTranscript = '';

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcript;
        } else {
          interimTranscript += transcript;
        }
      }

      if (finalTranscript) {
        setTranscript(prev => prev + finalTranscript);
        setValue(prev => prev + finalTranscript);
      }
      setInterimTranscript(interimTranscript);
    };

    recognition.onerror = (event: any) => {
      console.error('Speech recognition error:', event.error);
      setIsListening(false);

      // Provide user-friendly error messages
      let errorMessage = 'Speech recognition failed.';
      let suggestions = '';

      switch (event.error) {
        case 'network':
          errorMessage = 'Network connection error.';
          suggestions = 'Speech recognition requires internet access. Check your connection or try:\n• Using a different network\n• Disabling VPN/proxy\n• Using Chrome or Edge browser\n• Typing notes manually instead';
          break;
        case 'not-allowed':
          errorMessage = 'Microphone access denied.';
          suggestions = 'Please click "Allow" when your browser asks for microphone permission, then try recording again.';
          break;
        case 'no-speech':
          errorMessage = 'No speech detected.';
          suggestions = 'Please speak clearly into your microphone and try again.';
          break;
        case 'aborted':
          errorMessage = 'Speech recognition was stopped.';
          suggestions = 'The recording was interrupted. Please try again.';
          break;
        case 'audio-capture':
          errorMessage = 'Audio capture failed.';
          suggestions = 'Please check that your microphone is properly connected and not being used by another application.';
          break;
        case 'service-not-allowed':
          errorMessage = 'Speech recognition service not allowed.';
          suggestions = 'Your browser or network administrator may have disabled speech recognition.';
          break;
        default:
          errorMessage = `Speech recognition error: ${event.error}`;
          suggestions = 'An unexpected error occurred. Please try again or check the browser console for details.';
      }

      // Show a more detailed alert with suggestions
      alert(`${errorMessage}\n\n${suggestions}`);
    };

    recognition.onend = () => {
      setIsListening(false);
      setInterimTranscript('');
    };

    recognitionRef.current = recognition;
    recognition.start();
  };

  const stopSpeechRecognition = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      const audioChunks: Blob[] = [];

      mediaRecorder.ondataavailable = (event) => {
        audioChunks.push(event.data);
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
        await processAudio(audioBlob);
      };

      mediaRecorder.start();
      setIsRecording(true);
      startSpeechRecognition(); // Start speech recognition alongside recording
    } catch (error) {
      console.error('Error starting recording:', error);
      alert('Error accessing microphone. Please check permissions.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      stopSpeechRecognition();

      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    }
  };

  const processAudio = async (audioBlob: Blob) => {
    setIsProcessing(true);
    try {
      // For now, we'll use a mock transcription
      // In a production app, you'd integrate with:
      // - Google Speech-to-Text API
      // - OpenAI Whisper API
      // - Azure Speech Services
      setTimeout(async () => {
        const mockTranscript = "This is a sample transcript from your voice recording. The AI will analyze this content and provide tags, categories, and a summary.";
        setTranscript(mockTranscript);
        setValue(mockTranscript);

        // Use Gemini AI to analyze the transcript
        try {
          // Import the AI function dynamically to avoid SSR issues
          const { analyzeNote } = await import('@/lib/ai');
          const analysis = await analyzeNote(mockTranscript);
          console.log('AI analysis completed:', analysis);

          setTitle(analysis.title);
          setTags(analysis.tags);
          setCategories(analysis.categories);
        } catch (aiError) {
          console.error('Error with AI analysis:', aiError);
          // Fallback to basic analysis
          setTitle("Voice Note");
          setTags(["note"]);
          setCategories(["general"]);
        }

        setIsProcessing(false);
      }, 2000);
    } catch (error) {
      console.error('Error processing audio:', error);
      setIsProcessing(false);
    }
  };

  const saveNote = async () => {
    const contentToSave = useManualInput ? manualText : (value || transcript);
    if (!contentToSave.trim()) return;

    setIsProcessing(true);
    try {
      const response = await fetch('/api/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: title || undefined,
          content: contentToSave,
          transcript: useManualInput ? null : transcript,
          tags,
          categories,
        }),
      });

      if (!response.ok) {
        let errorMessage = 'Failed to save note';
        try {
          const contentType = response.headers.get('content-type');
          if (contentType && contentType.includes('application/json')) {
            const errorData: { error?: string } = await response.json();
            errorMessage = errorData.error || errorMessage;
          }
        } catch (parseError) {
          console.warn('Failed to parse save error response as JSON:', parseError);
        }
        throw new Error(errorMessage);
      }

      const savedNote = await response.json();

      // Reset form
      setTranscript('');
      setManualText('');
      setValue('');
      setTitle('');
      setTags([]);
      setCategories([]);

      router.push(`/notes/${savedNote.id}`);
    } catch (error) {
      console.error('Error saving note:', error);
      alert('Error saving note. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };




  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (value.trim()) {
        handleSendMessage();
      }
    }
  };

  const handleSendMessage = async () => {
    if (value.trim()) {
      startTransition(() => {
        setIsTyping(true);
        setIsProcessing(true);
        
        // Auto-create note with the text
        processAndSaveNote(value);
        setValue('');
        adjustHeight(true);
      });
    }
  };

  const processAndSaveNote = async (content: string) => {
    try {
      // Step 1: Uploading files and extracting content (if any)
      let uploadedFiles: any[] = [];
      if (attachments.length > 0) {
        setThinkingState('Uploading files...');
        const uploadPromises = attachments.map(async (attachment) => {
          const formData = new FormData();
          formData.append('file', attachment.file);
          
          const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData,
          });
          
          if (!response.ok) {
            let errorData: { details?: string; error?: string } = {};
            try {
              const contentType = response.headers.get('content-type');
              if (contentType && contentType.includes('application/json')) {
                errorData = await response.json();
              }
            } catch (parseError) {
              console.warn('Failed to parse error response as JSON:', parseError);
            }
            const errorMessage = errorData.details || errorData.error || `Failed to upload ${attachment.name}`;
            throw new Error(errorMessage);
          }
          
          const uploadResult = await response.json();
          
          // Extract content immediately after upload
          let extractedContent = null;
          try {
            const extractFormData = new FormData();
            extractFormData.append('file', attachment.file);
            
            const extractResponse = await fetch('/api/extract-content', {
              method: 'POST',
              body: extractFormData,
            });
            
            if (extractResponse.ok) {
              try {
                const extracted = await extractResponse.json();
                console.log(`/Content extraction result for ${attachment.name}:`, {
                  success: extracted.success,
                  contentLength: extracted.content?.length || 0,
                  contentPreview: extracted.content?.substring(0, 100) || 'No content',
                  type: extracted.type
                });
                
                if (extracted.success) {
                  extractedContent = extracted.content;
                  // Also update the local attachment object
                  attachment.content = extracted.content;
                  console.log(`Successfully extracted and stored content for ${attachment.name}`);
                } else {
                  console.warn(`Content extraction failed for ${attachment.name}:`, extracted.error);
                }
              } catch (parseError) {
                console.error(`Failed to parse extract response for ${attachment.name}:`, parseError);
              }
            } else {
              console.error(`Content extraction API failed for ${attachment.name}:`, extractResponse.status);
            }
          } catch (extractError) {
            console.warn(`Failed to extract content from ${attachment.name}:`, extractError);
          }
          
          // Add extracted content to the upload result
          return {
            ...uploadResult,
            content: extractedContent,
          };
        });
        
        uploadedFiles = await Promise.all(uploadPromises);
        await new Promise(resolve => setTimeout(resolve, 500));
        
        console.log('Uploaded files result:', uploadedFiles.map(file => ({
          originalName: file.originalName,
          hasContent: !!file.content,
          contentLength: file.content?.length || 0,
          contentPreview: file.content?.substring(0, 100) || 'No content',
          fullFileObject: file
        })));
      }
      
      // Extract text from files for analysis (use uploadedFiles which has the extracted content) - FIXED
      let fileContent = '';
      if (uploadedFiles.length > 0) {
        setThinkingState('Processing file content...');
        await new Promise(resolve => setTimeout(resolve, 300));
        
        console.log('Processing uploadedFiles for AI analysis (FIXED):', uploadedFiles.length);
        
        for (const uploadedFile of uploadedFiles) {
          console.log(`Processing uploaded file: ${uploadedFile.originalName}`, {
            hasContent: !!uploadedFile.content,
            contentLength: uploadedFile.content?.length || 0,
            contentPreview: uploadedFile.content?.substring(0, 100) || 'No content'
          });
          
          if (uploadedFile.content) {
            fileContent += `\n\n${uploadedFile.content}`;
          } else {
            fileContent += `\n\n[No content extracted from ${uploadedFile.originalName}]`;
          }
        }
      }

      // Combine user content with file content
      const combinedContent = content + fileContent;
      
      console.log('Content combination for AI analysis:', {
        userContent: content,
        fileContent: fileContent,
        combinedLength: combinedContent.length,
        hasFileContent: fileContent.length > 0,
        fullCombinedContent: combinedContent
      });
      
      // Step 2: Analyzing content
      setThinkingState('Analyzing content...');
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Step 3: Creating title
      setThinkingState('Creating title...');
      await new Promise(resolve => setTimeout(resolve, 600));
      
      // Step 4: Generating summary
      setThinkingState('Generating summary...');
      await new Promise(resolve => setTimeout(resolve, 700));
      
      // Step 5: Extracting tags
      setThinkingState('Extracting tags...');
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Step 6: Categorizing
      setThinkingState('Categorizing...');
      await new Promise(resolve => setTimeout(resolve, 400));

      // Use AI to analyze the content and generate title, tags, categories via API
      console.log('Sending to AI analysis API:', {
        contentLength: combinedContent.length,
        contentPreview: combinedContent.substring(0, 500),
        hasFileContent: combinedContent.includes('--- Content from'),
        fileSections: (combinedContent.match(/--- Content from .+? ---/g) || []).length,
        fullContent: combinedContent
      });
      
      console.log('About to send this exact content to AI:', combinedContent);
      
      const analysisResponse = await fetch('/api/notes/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: combinedContent,
        }),
      });

      if (!analysisResponse.ok) {
        let errorMessage = 'Failed to analyze note';
        try {
          const contentType = analysisResponse.headers.get('content-type');
          if (contentType && contentType.includes('application/json')) {
            const errorData: { error?: string } = await analysisResponse.json();
            errorMessage = errorData.error || errorMessage;
          }
        } catch (parseError) {
          console.warn('Failed to parse analysis error response as JSON:', parseError);
        }
        throw new Error(errorMessage);
      }

      const analysis = await analysisResponse.json();
      
      // Step 7: Saving note
      setThinkingState('Saving note...');
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // Create the note with attachments
      const response = await fetch('/api/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: analysis.title,
          content: content,
          tags: analysis.tags,
          categories: analysis.categories,
          attachments: uploadedFiles,
          aiAnalysis: analysis, // Send the complete AI analysis result
        }),
      });

      if (!response.ok) {
        let errorMessage = 'Failed to save note';
        try {
          const contentType = response.headers.get('content-type');
          if (contentType && contentType.includes('application/json')) {
            const errorData: { error?: string } = await response.json();
            errorMessage = errorData.error || errorMessage;
          }
        } catch (parseError) {
          console.warn('Failed to parse save error response as JSON:', parseError);
        }
        throw new Error(errorMessage);
      }

      const savedNote = await response.json();
      
      // Step 8: Finalizing
      setThinkingState('Finalizing...');
      await new Promise(resolve => setTimeout(resolve, 200));
      
      // Clear attachments
      setAttachments([]);
      
      // Navigate to the saved note
      router.push(`/notes/${savedNote.id}`);
      
    } catch (error) {
      console.error('Error processing and saving note:', error);
      alert('Error saving note. Please try again.');
    } finally {
      setIsTyping(false);
      setIsProcessing(false);
      setThinkingState('');
    }
  };

  const handleAttachFile = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.multiple = true;
    input.accept = '.pdf,.doc,.docx,.txt,.md,.jpg,.jpeg,.png,.gif,.mp3,.mp4,.wav';
    
    input.onchange = (e) => {
      const files = (e.target as HTMLInputElement).files;
      if (files) {
        Array.from(files).forEach(file => {
          setAttachments((prev) => [...prev, {
            name: file.name,
            size: file.size,
            type: file.type,
            file: file
          }]);
        });
      }
    };
    
    input.click();
  };

  const removeAttachment = (index: number) => {
    setAttachments((prev) => prev.filter((_, i) => i !== index));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };


  return (
    <div className="h-full w-full p-4 overflow-hidden">
      <Card className="h-full flex flex-col relative bg-background/5 backdrop-blur-[1px] border-border/10">
        <div className="flex-1 flex flex-col space-y-6 overflow-visible relative z-10 p-6">
          
          <div className="flex w-full overflow-visible flex-1 items-center justify-center">
            <div className="text-foreground relative flex w-full flex-col items-center justify-center overflow-visible bg-transparent">
              <div className="relative mx-auto w-full max-w-2xl">
                <motion.div
                  className="relative z-10 space-y-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                  <div className="space-y-3 text-center">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="inline-block"
                    >
                      <h1 className="pb-1 text-2xl font-medium tracking-tight">
                        What's on your mind?
                      </h1>
                      <motion.div
                        className="via-primary/50 h-px bg-gradient-to-r from-transparent to-transparent"
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: '100%', opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                      />
                    </motion.div>
                    <motion.p
                      className="text-muted-foreground text-sm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      Capture your thoughts and let AI bring them to life
                    </motion.p>
            </div>
                  <motion.div
                    className="bg-background/15 backdrop-blur-[1px] border-border/50 relative rounded-2xl border shadow-sm"
                    initial={{ scale: 0.98 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1 }}
                    style={{ marginTop: '60px', overflow: 'visible' }}
                  >
                    <div className="p-4 bg-transparent">
                      <textarea
                        ref={textareaRef}
                        value={value}
                        onChange={(e) => {
                          setValue(e.target.value);
                          adjustHeight();
                        }}
                        onKeyDown={handleKeyDown}
                        onFocus={() => setInputFocused(true)}
                        onBlur={() => setInputFocused(false)}
                        placeholder="Type your note here..."
                        className="w-full px-4 py-3 resize-none bg-transparent border-none outline-none text-foreground text-sm placeholder:text-muted-foreground min-h-[60px]"
                        style={{
                          overflow: 'auto',
                        }}
                      />
        </div>
                    <AnimatePresence>
                      {attachments.length > 0 && (
                        <motion.div
                          className="flex flex-wrap gap-2 px-4 pb-3"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                        >
                          {attachments.map((attachment, index) => (
                            <motion.div
                              key={index}
                              className="bg-primary/5 text-muted-foreground flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs"
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.9 }}
                            >
                              <div className="flex flex-col">
                                <span className="font-medium">{attachment.name}</span>
                                <span className="text-xs opacity-75">{formatFileSize(attachment.size)}</span>
                              </div>
            <button
                                onClick={() => removeAttachment(index)}
                                className="text-muted-foreground hover:text-foreground transition-colors ml-auto"
            >
                                <XIcon className="h-3 w-3" />
            </button>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <div className="border-border/10 flex items-center justify-between gap-4 border-t p-4">
                      <div className="flex items-center gap-3">
                        <motion.button
                          type="button"
                          onClick={handleAttachFile}
                          whileTap={{ scale: 0.94 }}
                          className="group text-muted-foreground hover:text-foreground relative rounded-lg p-2 transition-colors bg-background/5 backdrop-blur-[1px] border border-border/10"
                        >
                          <Paperclip className="h-4 w-4" />
                          <motion.span
                            className="bg-background/10 absolute inset-0 rounded-lg opacity-0 transition-opacity group-hover:opacity-100"
                            layoutId="button-highlight"
                          />
                        </motion.button>
          </div>
                      <motion.button
                        type="button"
                        onClick={handleSendMessage}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={isTyping || !value.trim()}
                        className={cn(
                          'rounded-lg px-4 py-2 text-sm font-medium transition-all',
                          'flex items-center gap-2',
                          'backdrop-blur-[1px] border border-border/10',
                          value.trim()
                            ? 'bg-primary text-primary-foreground shadow-primary/10 shadow-lg'
                            : 'bg-background/5 text-muted-foreground',
                        )}
                      >
                        {isTyping ? (
                          <LoaderIcon className="h-4 w-4 animate-[spin_2s_linear_infinite]" />
                        ) : (
                          <SendIcon className="h-4 w-4" />
                        )}
                        <span>Create</span>
                      </motion.button>
            </div>
                  </motion.div>
                </motion.div>
          </div>
              <AnimatePresence>
                {isTyping && (
                  <motion.div
                    className="border-border/10 bg-background/5 fixed bottom-8 left-1/2 -translate-x-1/2 transform rounded-full border px-4 py-2 shadow-sm backdrop-blur-[1px]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 flex h-7 w-8 items-center justify-center rounded-full text-center">
                        <Sparkles className="text-primary h-4 w-4" />
          </div>
                      <div className="text-muted-foreground flex items-center gap-2 text-sm">
                        <span>{thinkingState || 'Thinking'}</span>
                        <TypingDots />
            </div>
        </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

            </div>
      </Card>
              </div>
  );
}

function TypingDots() {
  return (
    <div className="ml-1 flex items-center">
      {[1, 2, 3].map((dot) => (
        <motion.div
          key={dot}
          className="bg-primary mx-0.5 h-1.5 w-1.5 rounded-full"
          initial={{ opacity: 0.3 }}
          animate={{
            opacity: [0.3, 0.9, 0.3],
            scale: [0.85, 1.1, 0.85],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            delay: dot * 0.15,
            ease: 'easeInOut',
          }}
          style={{
            boxShadow: '0 0 4px rgba(255, 255, 255, 0.3)',
          }}
        />
      ))}
    </div>
  );
}

const rippleKeyframes = `@keyframes ripple {
  0% { transform: scale(0.5); opacity: 0.6; }
  100% { transform: scale(2); opacity: 0; }
}`;

if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.innerHTML = rippleKeyframes;
  document.head.appendChild(style);
}