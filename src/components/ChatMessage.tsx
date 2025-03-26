import React from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { Message } from '../types/chat';
import { Bot, User } from 'lucide-react';
import { cn } from '../utils/cn';

interface ChatMessageProps {
  message: Message;
  isLatest: boolean;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message, isLatest }) => {
  const isBot = message.role === 'assistant';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "flex gap-4 p-4 rounded-lg transition-colors",
        isBot ? 'bg-white shadow-sm' : 'bg-transparent',
        isLatest && 'animate-pulse'
      )}
    >
      <div className={cn(
        "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0",
        isBot ? 'bg-blue-100 text-blue-600' : 'bg-indigo-100 text-indigo-600'
      )}>
        {isBot ? (
          <Bot size={24} className={isLatest ? 'animate-[wave_2s_ease-in-out]' : ''} />
        ) : (
          <User size={24} />
        )}
      </div>
      <div className="flex-1 space-y-2">
        <div className="flex items-center gap-2">
          <span className="font-medium text-sm text-gray-700">
            {isBot ? 'College Assistant Bot' : 'You'}
          </span>
          <span className="text-xs text-gray-400">
            {format(message.timestamp, 'h:mm a')}
          </span>
        </div>
        <div className={cn(
          "text-gray-700 leading-relaxed",
          isBot && 'prose prose-blue max-w-none'
        )}>
          {message.content}
        </div>
      </div>
    </motion.div>
  );
};