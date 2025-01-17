import React, { useState } from 'react';
import { MessageSquare, Sparkles } from 'lucide-react';
import { ChatMessage } from './components/ChatMessage';
import { ChatInput } from './components/ChatInput';
import { aiService } from './services/ai';

interface Message {
  text: string;
  isAi: boolean;
}

export default function App() {
  const [messages, setMessages] = useState<Message[]>([{
    text: `👋 Hi! I'm your AI assistant. Ask me anything about programming, technical concepts, or general knowledge.`,
    isAi: true 
  }]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (message: string) => {
    setMessages(prev => [...prev, { text: message, isAi: false }]);
    setIsLoading(true);

    try {
      const response = await aiService.generateResponse(message);
      setMessages(prev => [...prev, { text: response, isAi: true }]);
    } catch {
      setMessages(prev => [...prev, { 
        text: "Sorry, I couldn't process your request. Please try again.", 
        isAi: true 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto h-screen flex flex-col">
        <header className="bg-white border-b border-gray-200 px-6 py-4 shadow-sm">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100">
              <MessageSquare className="text-blue-600" size={20} />
            </div>
            <h1 className="text-xl font-semibold text-gray-800">AI Assistant</h1>
            <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium">
              <Sparkles size={12} />
              Gemini 1.5
            </span>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto">
          {messages.map((message, index) => (
            <ChatMessage
              key={index}
              message={message.text}
              isAi={message.isAi}
            />
          ))}
          {isLoading && (
            <div className="p-4 bg-gray-50">
              <div className="animate-pulse flex gap-3">
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-2 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-2 bg-gray-300 rounded w-1/2"></div>
                </div>
              </div>
            </div>
          )}
        </div>

        <ChatInput onSendMessage={handleSendMessage} disabled={isLoading} />
      </div>
    </div>
  );
}