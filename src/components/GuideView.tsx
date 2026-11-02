import React, { useState } from 'react';
import { 
  CheckCircle2, AlertCircle, ExternalLink, Calendar, 
  ChevronRight, ArrowRight, ShieldCheck, FileText, 
  Sparkles, HelpCircle, MessageSquareQuote, Check, Info, Users
} from 'lucide-react';
import { GuideItem } from '../types';

interface GuideViewProps {
  guide: GuideItem;
  onNavigate: (path: string) => void;
  onSelectGuide: (guideSlug: string) => void;
  onOpenTemplatePreview: () => void;
}

export const GuideView: React.FC<GuideViewProps> = ({
  guide,
  onNavigate,
  onSelectGuide,
  onOpenTemplatePreview
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleNextStep = () => {
    if (guide.nextStepId === '12-month-plan') {
      onNavigate('plan/overview');
    } else {
      onSelectGuide(guide.nextStepId);
    }
  };

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* 1. Page Header & Category Kicker */}
      <header className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-bold text-[#1B4D3E] uppercase tracking-wider bg-[#E2F4EE] px-3.5 py-1 rounded-full">
            {guide.category} · Step in Settlement Sequence
          </span>
          <span className="text-xs text-[#1B3A34]/70 font-medium">
            Keyword: <span className="font-semibold text-[#1B4D3E]">{guide.seoKeyword}</span>
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1B4D3E] tracking-tight font-display">
          {guide.title}
        </h1>

        {/* Metadata: Reviewer & Last Reviewed Date */}
        <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-[#1B3A34]/70 border-y border-[#E0ECE6] py-2.5">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#2A9D8F]" />
            <span>Last reviewed: <strong className="text-[#1B4D3E]">{guide.lastReviewed}</strong></span>
          </div>
          <span className="text-slate-300">·</span>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#2A9D8F]" />
            <span>Reviewed by: <strong className="text-[#1B4D3E]">{guide.reviewedBy}</strong></span>
          </div>
          <span className="text-slate-300">·</span>
          <button
            onClick={() => onNavigate('plan/overview')}
            className="text-[#2A9D8F] hover:text-[#1B4D3E] font-bold cursor-pointer underline"
          >
            See the full 12-month plan
          </button>
        </div>
      </header>

      {/* 2. Plain Language Question & Direct Answer First (Soft Mint Card) */}
      <section className="bg-white border-2 border-[#2A9D8F]/40 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xs">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-[#1B4D3E] text-[#E9C46A] flex items-center justify-center font-bold text-base shrink-0 mt-0.5">
            ?
          </div>
          <div className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-[#1B4D3E] font-display">
              {guide.question}
            </h2>
            <div className="text-sm sm:text-base text-[#1B3A34] leading-relaxed font-normal pt-1">
              {guide.directAnswer}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Who it Applies to */}
      <section className="bg-white border border-[#E0ECE6] rounded-2xl p-5 flex items-start gap-3.5 text-xs sm:text-sm text-[#1B3A34] shadow-2xs">
        <Users className="w-5 h-5 text-[#2A9D8F] shrink-0 mt-0.5" />
        <div>
          <span className="font-bold text-[#1B4D3E] block mb-0.5">Who this applies to:</span>
          <p className="text-[#1B3A34]/80 leading-relaxed">{guide.appliesTo}</p>
        </div>
      </section>

      {/* Template Offer Callout Box for Renting Guide with Deep Green Gradient */}
      {guide.hasTemplateOffer && (
        <section className="bg-gradient-to-r from-[#1B4D3E] via-[#1E6B58] to-[#2A9D8F] text-white rounded-3xl p-6 sm:p-8 shadow-md space-y-4">
          <div className="flex items-center gap-2 text-[#E9C46A] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Recommended Resource</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
            Applying with no Australian rental history?
          </h3>
          <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed max-w-2xl">
            Don’t let agents skip your application. Use our proven Newcomer Rental Application Pack—featuring pre-written cover letter wording explaining overseas savings, proof of funds layout, and guarantor templates.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={onOpenTemplatePreview}
              className="bg-[#F4A261] hover:bg-[#e7924d] text-[#1B3A34] font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full shadow-sm transition-all cursor-pointer inline-flex items-center gap-1.5 active:scale-95"
            >
              <span>Preview the template for free</span>
              <ArrowRight className="w-4 h-4 text-[#1B3A34]" />
            </button>
            <button
              onClick={() => onNavigate('pricing/plus')}
              className="bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-full border border-white/30 transition-colors cursor-pointer"
            >
              View Membership & Pricing
            </button>
          </div>
        </section>
      )}

      {/* 4. Numbered Steps (White Cards with Soft Shadows) */}
      <section className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-[#1B4D3E] font-display">
          Step-by-Step Instructions
        </h2>

        <div className="space-y-5">
          {guide.steps.map((step) => (
            <div
              key={step.stepNumber}
              className="bg-white border border-[#E0ECE6] rounded-3xl p-6 space-y-3 hover:border-[#2A9D8F] transition-all shadow-xs"
            >
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#1B4D3E] text-white font-bold flex items-center justify-center text-sm shrink-0">
                  {step.stepNumber}
                </div>
                <div className="space-y-2 flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-[#1B4D3E]">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#1B3A34] leading-relaxed">
                    {step.description}
                  </p>

                  {/* Optional Tip */}
                  {step.tip && (
                    <div className="bg-[#E2F4EE]/70 border border-[#2A9D8F]/30 rounded-2xl p-3 text-xs text-[#1B4D3E] flex items-start gap-2 mt-2">
                      <Sparkles className="w-4 h-4 text-[#2A9D8F] shrink-0 mt-0.5" />
                      <div>
                        <strong>Settlement Tip:</strong> {step.tip}
                      </div>
                    </div>
                  )}

                  {/* Optional Caution */}
                  {step.caution && (
                    <div className="bg-rose-50 border border-rose-200 rounded-2xl p-3 text-xs text-rose-950 flex items-start gap-2 mt-2">
                      <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                      <div>
                        <strong>Warning:</strong> {step.caution}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. State-by-State Differences Note */}
      {guide.stateNotes && (
        <section className="bg-white border border-[#E0ECE6] rounded-3xl p-6 space-y-3 shadow-xs">
          <div className="flex items-center gap-2 text-[#1B4D3E]">
            <Info className="w-5 h-5 text-[#2A9D8F]" />
            <h3 className="text-base font-bold">
              State-Specific Rules & Variations
            </h3>
          </div>
          <p className="text-xs text-[#1B3A34]/70">
            Australian statutory rules differ between states. Please check the rules for where you are residing:
          </p>
          <div className="divide-y divide-[#E0ECE6] text-xs sm:text-sm">
            {Object.entries(guide.stateNotes).map(([jurisdiction, note]) => (
              <div key={jurisdiction} className="py-2.5">
                <strong className="text-[#1B4D3E]">{jurisdiction}:</strong>{' '}
                <span className="text-[#1B3A34]/80">{note}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 6. Short FAQ */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[#1B4D3E] font-display">
          Frequently Asked Questions
        </h2>

        <div className="divide-y divide-[#E0ECE6] border border-[#E0ECE6] bg-white rounded-3xl shadow-xs overflow-hidden">
          {guide.faqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div key={index} className="py-4 px-5 sm:px-6">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between text-left font-bold text-[#1B4D3E] hover:text-[#2A9D8F] transition-colors cursor-pointer text-sm sm:text-base"
                >
                  <span>{faq.question}</span>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform text-[#2A9D8F] shrink-0 ml-2 ${
                      isOpen ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="mt-2.5 text-xs sm:text-sm text-[#1B3A34]/80 leading-relaxed pr-6 animate-in fade-in duration-150">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. Official Government Sources */}
      <section className="bg-white border border-[#E0ECE6] rounded-3xl p-6 sm:p-8 space-y-4 shadow-xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#2A9D8F]" />
            <h3 className="text-base font-bold text-[#1B4D3E]">
              Official Australian Government Sources
            </h3>
          </div>
          <span className="text-[11px] text-[#2A9D8F] font-mono font-bold">
            Verified Links
          </span>
        </div>

        <p className="text-xs text-[#1B3A34]/70">
          Always confirm current statutory details with the official regulatory agencies:
        </p>

        <div className="space-y-2.5">
          {guide.officialSources.map((source, index) => (
            <a
              key={index}
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#F6FAF7] p-4 rounded-2xl border border-[#E0ECE6] hover:border-[#2A9D8F] hover:bg-white transition-all group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold text-[#2A9D8F] uppercase tracking-wider block">
                    {source.agency}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#1B4D3E] group-hover:text-[#2A9D8F] transition-colors">
                    {source.title}
                  </span>
                </div>
                <ExternalLink className="w-4 h-4 text-[#2A9D8F] shrink-0 ml-2" />
              </div>
              <p className="text-[11px] text-[#1B3A34]/70 mt-1">
                {source.note}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* 8. Mandatory Confirmation Notice & General Disclaimer */}
      <div className="p-4 bg-[#E2F4EE] border border-[#2A9D8F]/30 rounded-2xl text-xs text-[#1B4D3E] flex items-start gap-2.5">
        <AlertCircle className="w-4 h-4 text-[#2A9D8F] shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong>Notice:</strong> This guide provides general settlement information only and does not constitute legal, financial, or migration advice. Specific requirements may vary based on your visa subclass and state jurisdiction. Always confirm current details with the official source.
        </p>
      </div>

      {/* 9. Next Step Action Button & Help Links - Pill Button */}
      <footer className="pt-6 border-t border-[#E0ECE6] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs text-[#1B3A34]/70 flex items-center gap-3">
          <span>Stuck or have a question?</span>
          <button
            onClick={() => onNavigate('contact/chatbot')}
            className="text-[#2A9D8F] hover:text-[#1B4D3E] font-bold underline cursor-pointer"
          >
            Ask Chat-Bot
          </button>
          <span>·</span>
          <button
            onClick={() => onNavigate('contact/faq')}
            className="text-[#2A9D8F] hover:text-[#1B4D3E] font-bold underline cursor-pointer"
          >
            Read FAQ
          </button>
        </div>

        {/* Go to the next step button - Rounded Pill in Warm Orange with Dark Green Text */}
        <button
          onClick={handleNextStep}
          className="w-full sm:w-auto bg-[#F4A261] hover:bg-[#e7924d] text-[#1B3A34] font-bold text-xs sm:text-sm px-7 py-3.5 rounded-full shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-95"
        >
          <span>Go to the next step: {guide.nextStepTitle}</span>
          <ArrowRight className="w-4 h-4 text-[#1B3A34]" />
        </button>
      </footer>
    </article>
  );
};
