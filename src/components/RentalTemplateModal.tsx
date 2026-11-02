import React, { useState } from 'react';
import { X, FileText, Check, Download, ShieldCheck, Sparkles, Copy, ArrowRight } from 'lucide-react';
import { RENTAL_TEMPLATE_SAMPLE } from '../data/pricingData';

interface RentalTemplateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubscribe: () => void;
}

export const RentalTemplateModal: React.FC<RentalTemplateModalProps> = ({
  isOpen,
  onClose,
  onSubscribe
}) => {
  const [copiedSection, setCopiedSection] = useState<number | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(index);
    setTimeout(() => setCopiedSection(null), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative bg-white rounded-3xl max-w-3xl w-full shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header with Deep Green Gradient */}
        <div className="bg-gradient-to-r from-[#1B4D3E] to-[#2A9D8F] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-emerald-100 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close Preview"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 bg-[#E9C46A] text-[#1B3A34] text-xs font-bold uppercase tracking-wider px-3 py-0.5 rounded-full mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Free Template Preview</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
            {RENTAL_TEMPLATE_SAMPLE.title}
          </h3>
          <p className="text-xs sm:text-sm text-emerald-100 mt-1">
            {RENTAL_TEMPLATE_SAMPLE.subtitle}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-6 text-sm text-[#1B3A34]">
          <div className="bg-[#F6FAF7] border border-teal-200/80 rounded-2xl p-4 text-xs sm:text-sm text-[#1B3A34] flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#2A9D8F] shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-[#1B4D3E]">Why this template works with Australian property managers:</p>
              <p className="text-slate-600 mt-0.5">
                Agents reject newcomers because of unknown risk. This template presents your liquid funds, immigration standing, and international references in the exact format Australian real estate agencies look for.
              </p>
            </div>
          </div>

          {RENTAL_TEMPLATE_SAMPLE.sections.map((section, idx) => (
            <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden bg-[#F6FAF7]/50 shadow-xs">
              <div className="bg-[#F6FAF7] px-4 py-2.5 border-b border-slate-200 flex items-center justify-between">
                <span className="font-bold text-[#1B4D3E] text-xs sm:text-sm">
                  {section.heading}
                </span>
                <button
                  onClick={() => handleCopy(section.content, idx)}
                  className="inline-flex items-center gap-1 text-xs text-[#2A9D8F] hover:text-[#1B4D3E] font-semibold bg-white px-3 py-1 rounded-full border border-slate-200 transition-colors cursor-pointer"
                >
                  {copiedSection === idx ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy sample</span>
                    </>
                  )}
                </button>
              </div>
              <div className="p-4 bg-white font-mono text-xs text-[#1B3A34] whitespace-pre-wrap leading-relaxed select-text">
                {section.content}
              </div>
            </div>
          ))}

          {/* Plus Upsell Callout */}
          <div className="bg-gradient-to-r from-[#E2F4EE] to-[#F6FAF7] p-5 rounded-2xl border border-teal-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-bold text-[#1B4D3E] text-sm sm:text-base">
                  Get the full editable Microsoft Word & PDF pack
                </h4>
                <span className="bg-[#E9C46A] text-[#1B3A34] text-[10px] font-bold px-2 py-0.5 rounded-full">Plus</span>
              </div>
              <p className="text-xs text-slate-600 mt-1">
                Included with FirstYear Plus (A$4.99/mo or A$49/yr). Cancel anytime. 7-day money-back guarantee.
              </p>
            </div>
            <button
              onClick={() => {
                onClose();
                onSubscribe();
              }}
              className="bg-[#F4A261] hover:bg-[#e7924e] text-[#1B3A34] font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full shrink-0 shadow-sm transition-all cursor-pointer inline-flex items-center gap-1.5 active:scale-98"
            >
              <span>Subscribe for A$4.99</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-[#F6FAF7] px-6 py-4 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Free preview available to all visitors · No sign-up wall
          </span>
          <button
            onClick={onClose}
            className="text-xs sm:text-sm font-semibold text-[#1B4D3E] hover:bg-slate-200 px-5 py-2 rounded-full bg-white border border-slate-300 transition-colors cursor-pointer"
          >
            Close preview
          </button>
        </div>
      </div>
    </div>
  );
};
