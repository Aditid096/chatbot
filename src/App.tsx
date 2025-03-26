import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatMessage } from './components/ChatMessage';
import { ChatInput } from './components/ChatInput';
import { TrainingPanel } from './components/TrainingPanel';
import { Message, Intent } from './types/chat';
import { Bot, Settings, X, Maximize2, Minimize2 } from 'lucide-react';
import { findBestMatch } from './utils/intent-matcher';
import { cn } from './utils/cn';
import { initialIntents } from './data/intents';

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [intents, setIntents] = useState<Intent[]>(initialIntents.intents);
  const [showTraining, setShowTraining] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);
  const [adminPassword, setAdminPassword] = useState('');
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const ADMIN_PASSWORD = 'admin123'; // This should be stored securely in a real application

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (messages.length === 0) {
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        content: "Hello! I'm your KITCOEK Assistant. How can I help you today?",
        role: 'assistant',
        timestamp: new Date(),
      };
      setMessages([welcomeMessage]);
    }
  }, []);

  const handleSendMessage = async (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      role: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    const delay = Math.random() * 500 + 800;
    await new Promise(resolve => setTimeout(resolve, delay));

    const botResponse: Message = {
      id: (Date.now() + 1).toString(),
      content: findBestMatch(content, intents),
      role: 'assistant',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, botResponse]);
    setIsTyping(false);
  };

  const handleSaveTraining = (newIntents: Intent[]) => {
    setIntents(newIntents);
    setShowTraining(false);
    setIsPasswordCorrect(false);
    setAdminPassword('');
  };

  const handleAdminAccess = () => {
    if (adminPassword === ADMIN_PASSWORD) {
      setIsPasswordCorrect(true);
    } else {
      alert('Incorrect password');
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <motion.div
        initial={false}
        animate={{
          width: isExpanded ? '600px' : '380px',
          height: isExpanded ? '80vh' : '500px',
        }}
        transition={{ duration: 0.3 }}
        className={cn(
          "bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100",
          "flex flex-col"
        )}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 text-white flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-white/10 p-1.5 ring-2 ring-white/20">
                {/* Placeholder for the actual logo */}
                <img 
                  src="src\assets\logo.png" 
                  alt="Logo" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h1 
                    className="text-2xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white"
                    style={{ 
                      fontFamily: 'Inter, system-ui, sans-serif',
                      textShadow: '0 2px 10px rgba(255,255,255,0.2)'
                    }}
                  >
                    KIT
                  </h1>
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                </div>
                <p className="text-sm font-medium text-blue-100 tracking-wide">
                  Your KITCOEK Assistant
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-1.5 hover:bg-white/10 rounded-lg transition-colors"
              >
                {isExpanded ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
              </button>
              {!showTraining && (
                <button
                  onClick={() => setShowTraining(true)}
                  className="p-1.5 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <Settings size={18} />
                </button>
              )}
              {showTraining && (
                <button
                  onClick={() => {
                    setShowTraining(false);
                    setIsPasswordCorrect(false);
                    setAdminPassword('');
                  }}
                  className="p-1.5 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X size={18} />
                </button>
              )}
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {showTraining ? (
            <motion.div
              key="training"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex-1 overflow-y-auto"
            >
              {!isPasswordCorrect ? (
                <div className="p-6 flex flex-col items-center justify-center h-full">
                  <div className="w-full max-w-sm space-y-4">
                    <h2 className="text-xl font-semibold text-center text-gray-800">Admin Access Required</h2>
                    <input
                      type="password"
                      value={adminPassword}
                      onChange={(e) => setAdminPassword(e.target.value)}
                      placeholder="Enter admin password"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button
                      onClick={handleAdminAccess}
                      className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Access Training Panel
                    </button>
                  </div>
                </div>
              ) : (
                <TrainingPanel intents={intents} onSave={handleSaveTraining} />
              )}
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex-1 flex flex-col min-h-0"
            >
              {/* Welcome Message */}
              {showWelcomeMessage && (
                <div className="p-3 bg-blue-50 border-b flex-shrink-0">
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-blue-700">
                      👋 How can I help you today?
                    </p>
                    <button
                      onClick={() => setShowWelcomeMessage(false)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <X size={14} />
                    </button>
                  </div>
                </div>
              )}

              {/* Chat Messages */}
              <div 
                ref={chatContainerRef}
                className="flex-1 overflow-y-auto bg-gray-50/50 min-h-0"
              >
                <div className="p-4 space-y-4">
                  {messages.map((message, index) => (
                    <ChatMessage
                      key={message.id}
                      message={message}
                      isLatest={index === messages.length - 1}
                    />
                  ))}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex gap-2 items-center text-gray-500 text-sm"
                    >
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <Bot size={20} className="text-blue-600" />
                      </div>
                      <div className="flex gap-1">
                        <motion.span
                          animate={{
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            repeatDelay: 0.2,
                          }}
                        >
                          •
                        </motion.span>
                        <motion.span
                          animate={{
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            repeatDelay: 0.3,
                          }}
                        >
                          •
                        </motion.span>
                        <motion.span
                          animate={{
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            repeatDelay: 0.4,
                          }}
                        >
                          •
                        </motion.span>
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </div>

              {/* Chat Input */}
              <ChatInput onSendMessage={handleSendMessage} isTyping={isTyping} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;