import React, { useState } from 'react';
import { 
  Mail, MessageSquare, Send, CheckCircle2, AlertCircle, 
  HelpCircle, Sparkles, Bot, User, ArrowRight, ExternalLink, RefreshCw 
} from 'lucide-react';
import { GENERAL_FAQS } from '../data/faqData';
import { SUGGESTED_QUESTIONS, getBotAnswer, BotResponse } from '../data/chatbotKnowledge';

interface ContactViewProps {
  subPage: 'form' | 'faq' | 'chatbot';
  onNavigate: (path: string) => void;
  onSelectGuide: (guideSlug: string) => void;
}

interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  relatedGuideId?: string;
  relatedGuideTitle?: string;
  source?: string;
  timestamp: string;
}

export const ContactView: React.FC<ContactViewProps> = ({
  subPage,
  onNavigate,
  onSelectGuide
}) => {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    stageOfArrival: 'just-arrived',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // FAQ State
  const [faqCategory, setFaqCategory] = useState<string>('All');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // ChatBot State
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: "G'day! I'm your FirstYear AU assistant. Whether you're an international student arriving for study, a skilled visa holder, or relocating with your family, ask me anything about SIM cards, banking, TFNs, renting with no local history, bonds, or driver licences.",
      timestamp: 'Just now'
    }
  ]);
  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Handle Contact Form Submit
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  // Handle Chat Submit
  const handleChatSubmit = (queryText?: string) => {
    const q = queryText || inputQuery;
    if (!q.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: q,
      timestamp: 'Just now'
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputQuery('');
    setIsTyping(true);

    setTimeout(() => {
      const resp: BotResponse = getBotAnswer(q);
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: resp.answer,
        relatedGuideId: resp.relatedGuideId,
        relatedGuideTitle: resp.relatedGuideTitle,
        source: resp.source,
        timestamp: 'Just now'
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  // FAQ Filtering
  const faqCategories = ['All', 'Getting Started', 'Housing & Renting', 'Work & Tax', 'Identity & Transport', 'Subscription & Refunds'];
  const filteredFaqs = GENERAL_FAQS.filter((f) => faqCategory === 'All' || f.category === faqCategory);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Subpage Switcher Tabs */}
      <div className="flex items-center justify-center">
        <div className="bg-slate-100 p-1 rounded-full flex items-center border border-slate-200 text-xs sm:text-sm font-semibold">
          <button
            onClick={() => onNavigate('contact/form')}
            className={`px-5 py-2 rounded-full transition-all cursor-pointer ${
              subPage === 'form'
                ? 'bg-[#1B4D3E] text-white shadow-xs'
                : 'text-slate-600 hover:text-[#1B4D3E]'
            }`}
          >
            Contact form
          </button>
          <button
            onClick={() => onNavigate('contact/faq')}
            className={`px-5 py-2 rounded-full transition-all cursor-pointer ${
              subPage === 'faq'
                ? 'bg-[#1B4D3E] text-white shadow-xs'
                : 'text-slate-600 hover:text-[#1B4D3E]'
            }`}
          >
            FAQ
          </button>
          <button
            onClick={() => onNavigate('contact/chatbot')}
            className={`px-5 py-2 rounded-full transition-all cursor-pointer flex items-center gap-1.5 ${
              subPage === 'chatbot'
                ? 'bg-[#1B4D3E] text-white shadow-xs'
                : 'text-slate-600 hover:text-[#1B4D3E]'
            }`}
          >
            <Bot className="w-3.5 h-3.5 text-[#E9C46A]" />
            <span>Chat-Bot</span>
          </button>
        </div>
      </div>

      {/* SUBPAGE 1: Contact Form */}
      {subPage === 'form' && (
        <div className="space-y-10 animate-in fade-in duration-200 max-w-2xl mx-auto">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold text-[#2A9D8F] tracking-wider uppercase">
              We Are Here to Help
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1B4D3E] font-display">
              Contact FirstYear AU
            </h1>
            <p className="text-sm sm:text-base text-[#1B3A34]/80 leading-relaxed">
              Have a question about an Australian statutory requirement or spotted a regulation change in your state? Send us a message and our settlement team will reply within 24 hours.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 bg-[#E2F4EE] rounded-full flex items-center justify-center mx-auto text-[#1B4D3E]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#1B4D3E]">
                  Message Received!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. We have received your inquiry regarding your{' '}
                  <span className="font-semibold text-[#1B3A34]">{formData.stageOfArrival.replace('-', ' ')}</span> stage and will respond to <strong>{formData.email}</strong> shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', stageOfArrival: 'just-arrived', message: '' });
                    }}
                    className="text-xs text-[#2A9D8F] hover:underline font-semibold cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2A9D8F]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2A9D8F]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Stage of Arrival
                  </label>
                  <select
                    value={formData.stageOfArrival}
                    onChange={(e) => setFormData({ ...formData, stageOfArrival: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2A9D8F] bg-white"
                  >
                    <option value="moving-soon">Moving soon (Pre-departure)</option>
                    <option value="just-arrived">Just arrived (Days 1 to 14 in Australia)</option>
                    <option value="settling-in">Settling in (Months 1 to 12)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Message or Question
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="How can we assist your arrival or settlement process?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2A9D8F]"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-[#F4A261] hover:bg-[#e7924e] text-[#1B3A34] font-bold py-3.5 rounded-full shadow-sm hover:shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 text-sm disabled:opacity-50 active:scale-98"
                  >
                    {submitting ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Ask a question</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* SUBPAGE 2: FAQ */}
      {subPage === 'faq' && (
        <div className="space-y-10 animate-in fade-in duration-200">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold text-[#2A9D8F] tracking-wider uppercase">
              Immediate Answers
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1B4D3E] font-display">
              Frequently Asked Questions
            </h1>
            <p className="text-sm sm:text-base text-[#1B3A34]/80 leading-relaxed">
              Find answers to the most common questions new migrants ask about Australian banking, renting, taxes, and daily life.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 text-xs justify-center">
            {faqCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFaqCategory(cat)}
                className={`px-4 py-1.5 rounded-full font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  faqCategory === cat
                    ? 'bg-[#1B4D3E] text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* FAQ Accordions */}
          <div className="bg-white rounded-2xl border border-slate-200 divide-y divide-slate-100 overflow-hidden shadow-xs">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className="p-5 sm:p-6">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between text-left font-bold text-[#1B4D3E] hover:text-[#2A9D8F] transition-colors cursor-pointer text-base sm:text-lg"
                  >
                    <span>{faq.question}</span>
                    <span className="text-xs text-[#2A9D8F] font-mono ml-4 shrink-0 font-bold">
                      {isOpen ? '—' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="mt-3 text-sm text-[#1B3A34]/80 leading-relaxed animate-in fade-in duration-150">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Still have questions */}
          <div className="bg-[#F6FAF7] p-6 sm:p-8 rounded-2xl border border-teal-100 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
            <div>
              <h3 className="font-bold text-[#1B4D3E] text-base sm:text-lg">
                Can’t find what you are looking for?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                Chat with our interactive settlement assistant or submit a custom question.
              </p>
            </div>
            <button
              onClick={() => onNavigate('contact/chatbot')}
              className="bg-[#F4A261] hover:bg-[#e7924e] text-[#1B3A34] font-bold text-xs sm:text-sm px-6 py-3 rounded-full shadow-sm transition-all cursor-pointer inline-flex items-center gap-2 shrink-0"
            >
              <span>Chat with Assistant</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* SUBPAGE 3: Chat-Bot */}
      {subPage === 'chatbot' && (
        <div className="space-y-8 animate-in fade-in duration-200 max-w-3xl mx-auto">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 bg-[#E2F4EE] text-[#1B4D3E] px-3.5 py-1 rounded-full text-xs font-bold">
              <Bot className="w-3.5 h-3.5 text-[#2A9D8F]" />
              <span>Ask FirstYear AU · 24/7 Newcomer Assistant</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1B4D3E] font-display">
              Instant Settlement Guidance
            </h1>
            <p className="text-xs sm:text-sm text-[#1B3A34]/80 max-w-lg mx-auto">
              Ask questions about opening a bank account, TFN online application, renting with no history, or state road rules.
            </p>
          </div>

          {/* Chat Container */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-md flex flex-col h-[560px] overflow-hidden">
            {/* Chat Messages Log */}
            <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 bg-[#F6FAF7]/50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-start gap-3 ${
                    msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs font-bold ${
                      msg.sender === 'user'
                        ? 'bg-[#F4A261] text-[#1B3A34]'
                        : 'bg-[#1B4D3E] text-[#E9C46A]'
                    }`}
                  >
                    {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>

                  <div
                    className={`max-w-[82%] sm:max-w-[75%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-[#1B4D3E] text-white rounded-tr-xs'
                        : 'bg-white text-[#1B3A34] border border-slate-200 rounded-tl-xs shadow-xs space-y-2'
                    }`}
                  >
                    <p>{msg.text}</p>

                    {/* Related Guide Quick Jump */}
                    {msg.relatedGuideId && (
                      <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                        <span className="text-[11px] text-slate-500 font-medium">
                          Source: {msg.source}
                        </span>
                        <button
                          onClick={() => {
                            if (msg.relatedGuideId === '12-month-plan') {
                              onNavigate('plan/overview');
                            } else {
                              onSelectGuide(msg.relatedGuideId!);
                            }
                          }}
                          className="bg-[#E2F4EE] hover:bg-[#d4eee4] text-[#1B4D3E] font-bold text-[11px] px-3 py-1 rounded-full transition-colors cursor-pointer inline-flex items-center gap-1"
                        >
                          <span>Read full guide</span>
                          <ArrowRight className="w-3 h-3 text-[#2A9D8F]" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-2 text-xs text-slate-400 pl-11">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2A9D8F] animate-bounce"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2A9D8F] animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2A9D8F] animate-bounce [animation-delay:0.4s]"></span>
                  <span className="text-[#1B4D3E]">FirstYear AU is looking up verified guidelines...</span>
                </div>
              )}
            </div>

            {/* Suggested Prompts Strip */}
            <div className="p-2.5 bg-[#F6FAF7] border-t border-slate-200 flex items-center gap-2 overflow-x-auto text-[11px]">
              <span className="font-bold text-[#1B4D3E] shrink-0">Popular:</span>
              {SUGGESTED_QUESTIONS.map((sug, idx) => (
                <button
                  key={idx}
                  onClick={() => handleChatSubmit(sug.prompt)}
                  className="bg-white hover:bg-[#E2F4EE] text-[#1B3A34] px-3 py-1 rounded-full border border-slate-200 whitespace-nowrap cursor-pointer transition-colors shadow-2xs font-medium"
                >
                  {sug.label}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleChatSubmit();
              }}
              className="p-3 bg-white border-t border-slate-200 flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Ask about TFN, banking, rent, bond, driver licence..."
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                className="flex-1 px-4 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#2A9D8F]"
              />
              <button
                type="submit"
                className="bg-[#F4A261] hover:bg-[#e7924e] text-[#1B3A34] p-3 rounded-full cursor-pointer transition-all active:scale-95 shrink-0 shadow-xs"
                aria-label="Send query"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
