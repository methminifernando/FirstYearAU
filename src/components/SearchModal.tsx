import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Search, X, ArrowRight, FileText, Compass } from 'lucide-react';
import { GUIDES } from '../data/guidesData';
import { SEO_ROUTES } from '../data/seoRoutes';
import { getHref } from '../utils/routing';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
}

interface SearchEntry {
  path: string;
  title: string;
  category: string;
  summary: string;
  keywords: string;
}

const QUICK_TERMS = [
  'Tax file number',
  'Bank account',
  'SIM card',
  'Rent with no history',
  'Driver licence',
  'Proof of Age card',
  'Week 1 checklist',
  'Police check'
];

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const searchIndex = useMemo<SearchEntry[]>(() => {
    const guidePaths = new Set<string>();
    const entries: SearchEntry[] = [];

    for (const guide of GUIDES) {
      const fullPath = `${guide.categorySlug}/${guide.slug}`;
      guidePaths.add(fullPath);
      entries.push({
        path: fullPath,
        title: guide.title,
        category: guide.category,
        summary: guide.intro,
        keywords: `${guide.seoKeyword} ${guide.question} ${guide.appliesTo}`
      });
    }

    for (const route of SEO_ROUTES) {
      if (guidePaths.has(route.path)) continue;
      let category = 'Directory';
      if (route.path.startsWith('plan/')) category = '12-Month Plan';
      else if (route.path.startsWith('pricing/')) category = 'Membership & Pricing';
      else if (route.path.startsWith('about/')) category = 'About';
      else if (route.path.startsWith('contact/')) category = 'Support';
      else if (route.path === 'home') category = 'Home';

      entries.push({
        path: route.path,
        title: route.title.replace(/\s*\|\s*FirstYear AU$/, ''),
        category,
        summary: route.description,
        keywords: route.keywords
      });
    }

    return entries;
  }, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      return searchIndex.slice(0, 6);
    }
    const tokens = q.split(/\s+/).filter(Boolean);
    return searchIndex
      .filter((entry) => {
        const haystack = `${entry.title} ${entry.category} ${entry.summary} ${entry.keywords}`.toLowerCase();
        return tokens.every((token) => haystack.includes(token));
      })
      .slice(0, 8);
  }, [query, searchIndex]);

  useEffect(() => {
    if (!isOpen) {
      setQuery('');
      return;
    }
    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 30);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSelect = (path: string) => {
    onNavigate(path);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/55 backdrop-blur-xs flex items-start justify-center p-4 pt-16 sm:pt-24"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-[#D5E4DC] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Header */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-[#E0ECE6] bg-[#F6FAF7]">
          <Search className="w-5 h-5 text-[#1B4D3E] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search guides, checklists, TFN, bank account, renting, licence..."
            aria-label="Search FirstYear AU guides and pages"
            className="flex-1 bg-transparent text-sm sm:text-base text-[#1B3A34] placeholder:text-slate-400 focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="text-xs font-semibold text-slate-500 hover:text-[#1B4D3E] px-2 py-1 rounded-lg cursor-pointer"
            >
              Clear
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-500 hover:bg-[#E2F4EE] hover:text-[#1B4D3E] transition-colors cursor-pointer"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Popular Search Chips */}
        {!query.trim() && (
          <div className="px-5 pt-4 pb-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#2A9D8F] block mb-2">
              Popular Searches
            </span>
            <div className="flex flex-wrap gap-1.5">
              {QUICK_TERMS.map((term) => (
                <button
                  key={term}
                  type="button"
                  onClick={() => setQuery(term)}
                  className="text-xs font-semibold bg-[#F6FAF7] hover:bg-[#E2F4EE] text-[#1B4D3E] border border-[#D5E4DC] px-3 py-1.5 rounded-full transition-colors cursor-pointer"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Matching Results */}
        <div className="p-4 max-h-[60vh] overflow-y-auto space-y-2">
          {results.length > 0 ? (
            results.map((item) => (
              <a
                key={item.path}
                href={getHref(item.path)}
                onClick={(e) => {
                  if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                    e.preventDefault();
                    handleSelect(item.path);
                  }
                }}
                className="flex items-start justify-between gap-3 p-3.5 rounded-2xl border border-transparent hover:border-[#D5E4DC] hover:bg-[#F6FAF7] transition-all group cursor-pointer"
              >
                <div className="flex items-start gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-xl bg-[#E2F4EE] text-[#1B4D3E] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#1B4D3E] group-hover:text-white transition-colors">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#2A9D8F] bg-[#EAF5F1] px-2 py-0.5 rounded-full">
                        {item.category}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-[#1B4D3E] group-hover:text-[#2A9D8F] transition-colors mt-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#1B3A34]/75 line-clamp-2 mt-0.5">
                      {item.summary}
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#2A9D8F] shrink-0 mt-2 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
              </a>
            ))
          ) : (
            <div className="text-center py-8 px-4 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#F6FAF7] border border-[#E0ECE6] flex items-center justify-center mx-auto text-[#2A9D8F]">
                <Compass className="w-6 h-6" />
              </div>
              <p className="text-sm font-bold text-[#1B4D3E]">
                No guides matched &ldquo;{query}&rdquo;
              </p>
              <p className="text-xs text-[#1B3A34]/75">
                Try searching for TFN, bank account, SIM, renting, licence, Proof of Age, or ask our Chat-Bot assistant.
              </p>
              <a
                href={getHref('contact/chatbot')}
                onClick={(e) => {
                  if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                    e.preventDefault();
                    handleSelect('contact/chatbot');
                  }
                }}
                className="inline-flex items-center gap-1.5 bg-[#F4A261] hover:bg-[#e7924e] text-[#1B3A34] font-bold text-xs px-5 py-2.5 rounded-full cursor-pointer"
              >
                <span>Ask the Settlement Chat-Bot</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
