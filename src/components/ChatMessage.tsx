import React from 'react';
import { Bot, User } from 'lucide-react';

interface ChatMessageProps {
  message: string;
  isAi: boolean;
}

export function ChatMessage({ message, isAi }: ChatMessageProps) {
  return (
    <div className={`flex gap-3 ${isAi ? 'bg-gray-50' : 'bg-white'} p-4 border-b border-gray-100`}>
      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
        isAi ? 'bg-blue-100 text-blue-600' : 'bg-purple-100 text-purple-600'
      }`}>
        {isAi ? <Bot size={20} /> : <User size={20} />}
      </div>
      <div className="flex-1">
        <p className="text-sm text-gray-800 leading-relaxed whitespace-pre-wrap">{message}</p>
      </div>
    </div>
  );
}