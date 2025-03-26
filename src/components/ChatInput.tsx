import React, { useState, useRef, useEffect } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isTyping: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isTyping }) => {
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = 'auto';
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    }
  }, [input]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isTyping) {
      onSendMessage(input.trim());
      setInput('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onSubmit={handleSubmit}
      className="border-t p-4 bg-white"
    >
      <div className="flex gap-4 items-end">
        <div className="flex-1 relative">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message... (Press Enter to send)"
            rows={1}
            disabled={isTyping}
            className={cn(
              "w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
              "resize-none max-h-32 pr-12 transition-colors duration-200",
              "placeholder:text-gray-400",
              isTyping && "bg-gray-50 cursor-not-allowed opacity-80"
            )}
          />
          <button
            type="submit"
            disabled={!input.trim() || isTyping}
            className={cn(
              "absolute right-2 bottom-2 p-2 rounded-lg transition-colors duration-200",
              "focus:outline-none focus:ring-2 focus:ring-blue-500",
              input.trim() && !isTyping
                ? "text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                : "text-gray-400 cursor-not-allowed"
            )}
          >
            {isTyping ? (
              <Loader2 size={20} className="animate-spin" />
            ) : (
              <Send size={20} />
            )}
          </button>
        </div>
      </div>
      <div className="mt-2 text-xs text-gray-400 text-right flex items-center justify-end gap-2">
        <kbd className="px-2 py-1 bg-gray-100 rounded-md text-gray-500">Enter</kbd>
        <span>to send,</span>
        <kbd className="px-2 py-1 bg-gray-100 rounded-md text-gray-500">Shift + Enter</kbd>
        <span>for new line</span>
      </div>
    </motion.form>
  );
};