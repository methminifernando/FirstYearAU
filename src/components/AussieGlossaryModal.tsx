import React, { useState } from 'react';
import { X, Search, BookOpen, ExternalLink, HelpCircle } from 'lucide-react';
import { AUSSIE_TERMS } from '../data/glossaryData';

interface AussieGlossaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToGuide?: (guideSlug: string) => void;
}

export const AussieGlossaryModal: React.FC<AussieGlossaryModalProps> = ({
  isOpen,
  onClose,
  onNavigateToGuide
}) => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  if (!isOpen) return null;

  const categories = ['All', 'Housing', 'Finance & Tax', 'Transport', 'Everyday Life'];

  const filtered = AUSSIE_TERMS.filter((item) => {
    const matchesSearch =
      item.term.toLowerCase().includes(search.toLowerCase()) ||
      item.definition.toLowerCase().includes(search.toLowerCase()) ||
      item.context.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header with Deep Green Gradient */}
        <div className="bg-gradient-to-r from-[#1B4D3E] to-[#2A9D8F] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-emerald-100 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 bg-[#E9C46A] text-[#1B3A34] text-xs font-bold uppercase tracking-wider px-3 py-0.5 rounded-full mb-1">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Australian Slang & Official Terms Explained</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
            Aussie Terminology Glossary
          </h3>
          <p className="text-xs sm:text-sm text-emerald-100 mt-1">
            Unfamiliar words like "bond", "rego", or "condition report" made simple for new arrivals.
          </p>

          {/* Search Bar */}
          <div className="mt-4 relative">
            <Search className="w-4 h-4 text-emerald-200 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search words (e.g. bond, rego, tfn, op-shop)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white/15 border border-white/20 rounded-full text-white placeholder-emerald-100 text-sm focus:outline-none focus:ring-2 focus:ring-[#F4A261]"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="bg-[#F6FAF7] border-b border-slate-200 px-6 py-2.5 flex items-center gap-1.5 overflow-x-auto text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1 rounded-full font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#1B4D3E] text-white shadow-2xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Terms List */}
        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-3.5 bg-slate-50/50">
          {filtered.length === 0 ? (
            <div className="text-center py-8 text-slate-500 text-sm">
              No matching Aussie terms found. Try searching for "bond", "rego", or "super".
            </div>
          ) : (
            filtered.map((item) => (
              <div
                key={item.term}
                className="p-4 rounded-2xl border border-slate-200/90 hover:border-teal-200 bg-white transition-all shadow-xs"
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h4 className="text-base font-bold text-[#1B4D3E]">
                    {item.term}
                  </h4>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#1B4D3E] bg-[#E2F4EE] px-2.5 py-0.5 rounded-full">
                    {item.category}
                  </span>
                </div>
                <p className="text-sm text-[#1B3A34] leading-relaxed">
                  {item.definition}
                </p>
                <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="italic">Context: {item.context}</span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="bg-[#F6FAF7] px-6 py-3.5 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Terms verified against Australian statutory regulations
          </span>
          <button
            onClick={onClose}
            className="px-5 py-1.5 text-xs font-semibold text-[#1B4D3E] bg-white border border-slate-300 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
