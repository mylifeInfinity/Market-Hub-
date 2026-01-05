import React, { useState, useRef, useEffect } from 'react';
import { createChatSession } from '../services/geminiService';
import { ChatMessage } from '../types';
import { Chat, GenerateContentResponse } from "@google/genai";

const ChatAssistant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: 'Hello! I am your AI assistant. How can I help you optimize your business or creative workflow today?',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatSessionRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatSessionRef.current = createChatSession();
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || !chatSessionRef.current) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      const result = await chatSessionRef.current.sendMessageStream({ message: userMsg.text });
      
      let fullText = '';
      const modelMsgId = (Date.now() + 1).toString();
      
      // Add empty model message first
      setMessages(prev => [...prev, {
        id: modelMsgId,
        role: 'model',
        text: '',
        timestamp: new Date()
      }]);

      for await (const chunk of result) {
        const c = chunk as GenerateContentResponse;
        const text = c.text || '';
        fullText += text;
        
        setMessages(prev => prev.map(msg => 
          msg.id === modelMsgId ? { ...msg, text: fullText } : msg
        ));
      }
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'model',
        text: "I'm sorry, I encountered an error. Please try again.",
        timestamp: new Date()
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/60 overflow-hidden animate-fade-in">
      {/* Header */}
      <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-white/60">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-teal-400 to-emerald-500 flex items-center justify-center text-white shadow-lg shadow-teal-500/20">
            <i className="fa-solid fa-robot text-xl"></i>
          </div>
          <div>
            <h3 className="font-bold text-slate-800 text-lg">Gemini Assistant</h3>
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-emerald-600">Online & Ready</span>
            </div>
          </div>
        </div>
        <button 
          onClick={() => {
             chatSessionRef.current = createChatSession();
             setMessages([{ id: 'reset', role: 'model', text: 'Chat history cleared. How can I help?', timestamp: new Date() }]);
          }}
          className="w-10 h-10 rounded-xl bg-slate-50 text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors flex items-center justify-center border border-slate-200/50" 
          title="Clear Chat"
        >
          <i className="fa-solid fa-rotate-right"></i>
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50 scroll-smooth">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex animate-fade-in-up ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`
                max-w-[80%] lg:max-w-[70%] rounded-2xl px-6 py-4 shadow-sm text-[15px] leading-relaxed relative
                ${msg.role === 'user' 
                  ? 'bg-slate-900 text-white rounded-tr-none' 
                  : 'bg-white text-slate-700 border border-slate-200/60 rounded-tl-none shadow-md shadow-slate-200/50'}
              `}
            >
              <div className="whitespace-pre-wrap font-medium">{msg.text}</div>
              <div className={`text-[10px] mt-2 font-bold opacity-60 ${msg.role === 'user' ? 'text-slate-300' : 'text-slate-400'} text-right`}>
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start animate-fade-in">
            <div className="bg-white px-5 py-4 rounded-2xl rounded-tl-none border border-slate-200 shadow-sm">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-5 bg-white border-t border-slate-100">
        <div className="relative flex items-end gap-3 bg-slate-50 border-2 border-slate-100 rounded-2xl p-2 focus-within:ring-4 focus-within:ring-teal-500/10 focus-within:border-teal-500 transition-all shadow-inner">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder="Type your message here..."
            className="w-full bg-transparent border-none focus:ring-0 p-3 max-h-40 min-h-[52px] resize-none text-slate-700 placeholder-slate-400 font-medium"
            rows={1}
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isTyping}
            className={`
              p-4 rounded-xl flex-shrink-0 transition-all duration-300
              ${!input.trim() || isTyping 
                ? 'bg-slate-200 text-slate-400 cursor-not-allowed' 
                : 'bg-teal-600 text-white hover:bg-teal-700 shadow-lg shadow-teal-500/30 transform hover:-translate-y-0.5'}
            `}
          >
            <i className="fa-solid fa-paper-plane text-lg"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatAssistant;
