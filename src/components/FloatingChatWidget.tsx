import React, { useState, useRef, useEffect } from 'react';
import { Bot, User, Send, X, ArrowRight } from 'lucide-react';
import { SUGGESTED_QUESTIONS, getBotAnswer, BotResponse } from '../data/chatbotKnowledge';
import { getGuideById } from '../data/guidesData';
import { getHref } from '../utils/routing';

interface FloatingChatWidgetProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onSelectGuide: (guideSlug: string) => void;
}

interface WidgetMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  relatedGuideId?: string;
  source?: string;
}

export const FloatingChatWidget: React.FC<FloatingChatWidgetProps> = ({
  currentPath,
  onNavigate,
  onSelectGuide
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<WidgetMessage[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: "G'day! I'm the FirstYear AU assistant. Ask me anything about SIM cards, bank accounts, TFNs, renting with no local history, public transport, or driver licences."
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen, messages, isTyping]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Avoid duplicate widget when already viewing the full-page Chat-Bot route
  if (currentPath === 'contact/chatbot') {
    return null;
  }

  const handleSend = (queryText?: string) => {
    const q = (queryText ?? inputQuery).trim();
    if (!q || isTyping) return;

    const userMsg: WidgetMessage = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text: q
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputQuery('');
    setIsTyping(true);

    setTimeout(() => {
      const resp: BotResponse = getBotAnswer(q);
      const botMsg: WidgetMessage = {
        id: `b-${Date.now() + 1}`,
        sender: 'bot',
        text: resp.answer,
        relatedGuideId: resp.relatedGuideId,
        source: resp.source
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 500);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3">
      {/* Floating Chat Panel */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="FirstYear AU Chat Assistant"
          className="w-[calc(100vw-2rem)] sm:w-[390px] h-[520px] max-h-[75vh] bg-white rounded-2xl border border-[#DCEAE2] shadow-[0_18px_48px_rgba(17,43,35,0.22)] flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="bg-[#1B4D3E] text-white px-4 py-3.5 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-9 h-9 rounded-full bg-[#112B23] border border-[#2A9D8F]/50 flex items-center justify-center shrink-0">
                <Bot className="w-5 h-5 text-[#E9C46A]" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-bold leading-tight truncate">
                  FirstYear AU Assistant
                </p>
                <p className="text-[11px] text-emerald-200/90 leading-tight truncate">
                  Instant newcomer settlement help
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="p-1.5 rounded-lg text-emerald-100 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Message Feed */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-[#F6FAF7]/70">
            {messages.map((msg) => {
              const relatedGuide = msg.relatedGuideId ? getGuideById(msg.relatedGuideId) : undefined;
              const jumpPath =
                msg.relatedGuideId === '12-month-plan'
                  ? 'plan/overview'
                  : relatedGuide
                  ? `${relatedGuide.categorySlug}/${relatedGuide.slug}`
                  : 'plan/overview';

              return (
                <div
                  key={msg.id}
                  className={`flex items-start gap-2.5 ${
                    msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                      msg.sender === 'user'
                        ? 'bg-[#F4A261] text-[#1B3A34]'
                        : 'bg-[#1B4D3E] text-[#E9C46A]'
                    }`}
                  >
                    {msg.sender === 'user' ? (
                      <User className="w-3.5 h-3.5" />
                    ) : (
                      <Bot className="w-3.5 h-3.5" />
                    )}
                  </div>

                  <div
                    className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-xs sm:text-[13px] leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-[#1B4D3E] text-white rounded-tr-xs'
                        : 'bg-white text-[#1B3A34] border border-slate-200 rounded-tl-xs shadow-2xs space-y-2'
                    }`}
                  >
                    <p>{msg.text}</p>

                    {msg.relatedGuideId && (
                      <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                        {msg.source && (
                          <span className="text-[10px] text-slate-500 font-medium">
                            Source: {msg.source}
                          </span>
                        )}
                        <a
                          href={getHref(jumpPath)}
                          onClick={(e) => {
                            if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                              e.preventDefault();
                              setIsOpen(false);
                              if (msg.relatedGuideId === '12-month-plan') {
                                onNavigate('plan/overview');
                              } else {
                                onSelectGuide(msg.relatedGuideId!);
                              }
                            }
                          }}
                          className="bg-[#E2F4EE] hover:bg-[#d4eee4] text-[#1B4D3E] font-bold text-[11px] px-2.5 py-1 rounded-full transition-colors cursor-pointer inline-flex items-center gap-1"
                        >
                          <span>Read full guide</span>
                          <ArrowRight className="w-3 h-3 text-[#2A9D8F]" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {isTyping && (
              <div className="flex items-center gap-2 text-xs text-slate-500 pl-9">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2A9D8F] animate-bounce"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#2A9D8F] animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#2A9D8F] animate-bounce [animation-delay:0.4s]"></span>
                <span className="text-[#1B4D3E]">Finding verified info...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Topic Chips */}
          <div className="px-3 py-2 bg-[#F6FAF7] border-t border-slate-200 flex items-center gap-1.5 overflow-x-auto text-[11px] shrink-0">
            <span className="font-bold text-[#1B4D3E] shrink-0 mr-0.5">Popular:</span>
            {SUGGESTED_QUESTIONS.map((sug, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSend(sug.prompt)}
                className="bg-white hover:bg-[#E2F4EE] text-[#1B3A34] px-2.5 py-1 rounded-full border border-slate-200 whitespace-nowrap cursor-pointer transition-colors font-medium shrink-0"
              >
                {sug.label}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-2.5 bg-white border-t border-slate-200 flex items-center gap-2 shrink-0"
          >
            <input
              ref={inputRef}
              type="text"
              placeholder="Ask about TFN, SIM, bank, rent..."
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              className="flex-1 px-3.5 py-2 text-xs sm:text-sm border border-slate-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#2A9D8F]"
            />
            <button
              type="submit"
              aria-label="Send message"
              className="bg-[#F4A261] hover:bg-[#e7924e] text-[#1B3A34] p-2.5 rounded-full cursor-pointer transition-all active:scale-95 shrink-0 shadow-xs"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Launcher Bar ("Chat with us" white pill + orange circular speech-bubble button) */}
      <div className="flex items-center gap-3">
        {!isOpen && (
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="bg-white hover:bg-slate-50 text-[#1B3A34] font-medium text-sm sm:text-[15px] px-4 py-2.5 rounded-2xl shadow-[0_6px_24px_rgba(0,0,0,0.14)] border border-slate-100 flex items-center gap-2 transition-all hover:shadow-[0_8px_28px_rgba(0,0,0,0.18)] cursor-pointer"
          >
            <span>Chat with us</span>
            <span className="text-base leading-none" aria-hidden="true">
              👋
            </span>
          </button>
        )}

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? 'Close chat assistant' : 'Open chat assistant'}
          aria-expanded={isOpen}
          className="w-14 h-14 rounded-full bg-[#F4A261] hover:bg-[#e7924e] text-white shadow-[0_6px_22px_rgba(244,162,97,0.5)] hover:shadow-[0_8px_26px_rgba(244,162,97,0.65)] flex items-center justify-center transition-all active:scale-95 cursor-pointer shrink-0"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-[#1B3A34]" />
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-white"
              aria-hidden="true"
            >
              <path d="M4 4h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8.83L4.41 21.71A1 1 0 0 1 3 21V6a2 2 0 0 1 2-2Z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};
