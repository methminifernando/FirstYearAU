import React from 'react';
import { 
  AlertCircle, ExternalLink, Calendar, 
  ArrowRight, ShieldCheck, 
  Sparkles, Info, Users
} from 'lucide-react';
import { GuideItem } from '../types';
import { getGuideById } from '../data/guidesData';
import { getHref } from '../utils/routing';
import simInternetImg from '../assets/images/guide_sim_internet_1795004742804.jpg';
import bankingImg from '../assets/images/guide_banking_1795004744288.jpg';
import taxSuperImg from '../assets/images/guide_tax_super_1795004743348.jpg';
import rentingHomeImg from '../assets/images/guide_renting_home_1795004744162.jpg';
import furnitureImg from '../assets/images/guide_furniture_1795004744660.jpg';
import publicTransportImg from '../assets/images/guide_public_transport_1795004745181.jpg';
import drivingCarImg from '../assets/images/guide_driving_car_1795004746652.jpg';
import idPaperworkImg from '../assets/images/guide_id_paperwork_1795004746132.jpg';
import studentsImg from '../assets/images/students_in_australia_1794143904293.jpg';

const GUIDE_IMAGES: Record<string, { src: string; alt: string }> = {
  'sim-internet': {
    src: simInternetImg,
    alt: 'International student setting up an Australian prepaid SIM card on a smartphone at a city cafe'
  },
  'bank-account': {
    src: bankingImg,
    alt: 'Passport, contactless debit card, and laptop prepared for opening an Australian bank account'
  },
  'tax-file-number': {
    src: taxSuperImg,
    alt: 'Laptop and planning notebook on a sunlit wooden desk for applying for an Australian Tax File Number'
  },
  superannuation: {
    src: taxSuperImg,
    alt: 'Home desk with laptop and financial planner for managing superannuation in Australia'
  },
  'renting-inspections': {
    src: rentingHomeImg,
    alt: 'Bright sunlit Australian apartment living room with house keys on the table'
  },
  'bond-condition-report': {
    src: rentingHomeImg,
    alt: 'Modern Australian rental apartment living area prepared for entry condition inspection'
  },
  furniture: {
    src: furnitureImg,
    alt: 'Cozy furnished Australian student apartment with timber study desk, sofa, and indoor plants'
  },
  'public-transport': {
    src: publicTransportImg,
    alt: 'Modern Australian commuter train and metro platform with passengers boarding in daylight'
  },
  'driver-licence': {
    src: drivingCarImg,
    alt: 'Modern car along a sunny Australian coastal road illustrating state driving rules'
  },
  'buying-a-car': {
    src: drivingCarImg,
    alt: 'Silver hatchback car beside an Australian road illustrating safe vehicle purchase checks'
  },
  'proof-of-age': {
    src: idPaperworkImg,
    alt: 'Australian civic service counter with passport and document folder for photo ID application'
  },
  'police-check': {
    src: idPaperworkImg,
    alt: 'Official document folder and passport ready at a civic desk for police check verification'
  },
  'working-with-children': {
    src: studentsImg,
    alt: 'International students and young professionals preparing for campus and community roles in Australia'
  }
};

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
  const guideVisual = GUIDE_IMAGES[guide.id] || {
    src: studentsImg,
    alt: `${guide.title} settlement guide illustration`
  };

  const nextPath =
    guide.nextStepId === '12-month-plan'
      ? 'plan/overview'
      : (() => {
          const next = getGuideById(guide.nextStepId);
          return next ? `${next.categorySlug}/${next.slug}` : 'plan/overview';
        })();

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* 1. Page Header & Category Kicker */}
      <header className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-bold text-[#1B4D3E] uppercase tracking-wider bg-[#E2F4EE] px-3.5 py-1 rounded-full">
            {guide.category} · Step in Settlement Sequence
          </span>
          <a
            href={getHref('plan/week-1')}
            onClick={(e) => {
              if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                e.preventDefault();
                onNavigate('plan/week-1');
              }
            }}
            className="text-xs text-[#2A9D8F] hover:text-[#1B4D3E] font-semibold underline"
          >
            Part of the first week in Australia checklist
          </a>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1B4D3E] tracking-tight font-display">
          {guide.title}
        </h1>

        {/* Friendly 2-3 sentence introduction paragraph with main keyword in first sentence */}
        <p className="text-sm sm:text-base text-[#1B3A34]/90 leading-relaxed">
          {guide.intro}
        </p>

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
          <a
            href={getHref('plan/overview')}
            onClick={(e) => {
              if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                e.preventDefault();
                onNavigate('plan/overview');
              }
            }}
            className="text-[#2A9D8F] hover:text-[#1B4D3E] font-bold cursor-pointer underline"
          >
            See the full 12-month new migrant Australia setup guide
          </a>
        </div>
      </header>

      {/* Featured Subject Image */}
      <div className="rounded-3xl overflow-hidden border border-[#E0ECE6] shadow-sm bg-white">
        <img
          src={guideVisual.src}
          alt={guideVisual.alt}
          referrerPolicy="no-referrer"
          className="w-full h-56 sm:h-80 object-cover"
        />
      </div>

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
            Need a rental application template for new migrants with zero local references?
          </h3>
          <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed max-w-2xl">
            Don’t let agents skip your rental application in Australia. Preview our Newcomer Rental Application Pack free—featuring cover letter wording explaining overseas savings, proof of funds layout, and referee templates.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={onOpenTemplatePreview}
              className="bg-[#F4A261] hover:bg-[#e7924d] text-[#1B3A34] font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full shadow-sm transition-all cursor-pointer inline-flex items-center gap-1.5 active:scale-95"
            >
              <span>Preview the rental template free</span>
              <ArrowRight className="w-4 h-4 text-[#1B3A34]" />
            </button>
            <a
              href={getHref('pricing/plus')}
              onClick={(e) => {
                if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                  e.preventDefault();
                  onNavigate('pricing/plus');
                }
              }}
              className="bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-full border border-white/30 transition-colors cursor-pointer"
            >
              View Membership &amp; Pricing
            </a>
          </div>
        </section>
      )}

      {/* 4. Numbered Steps (White Cards with Soft Shadows) */}
      <section className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-[#1B4D3E] font-display">
          {guide.stepsHeading}
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
            <h2 className="text-base font-bold">
              How do rules differ across Australian states?
            </h2>
          </div>
          <p className="text-xs text-[#1B3A34]/70">
            Australian statutory rules can vary between states and territories. Always confirm current requirements where you live:
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

      {/* 6. Official Government Sources */}
      <section className="bg-white border border-[#E0ECE6] rounded-3xl p-6 sm:p-8 space-y-4 shadow-xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#2A9D8F]" />
            <h2 className="text-base font-bold text-[#1B4D3E]">
              Official Australian Government Sources
            </h2>
          </div>
          <span className="text-[11px] text-[#2A9D8F] font-mono font-bold">
            Verified Links
          </span>
        </div>

        <p className="text-xs text-[#1B3A34]/70">
          Always confirm current statutory fees, deadlines, and eligibility rules directly with official Australian government websites:
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

      {/* 9. Mandatory Confirmation Notice & General Disclaimer */}
      <div className="p-4 bg-[#E2F4EE] border border-[#2A9D8F]/30 rounded-2xl text-xs text-[#1B4D3E] flex items-start gap-2.5">
        <AlertCircle className="w-4 h-4 text-[#2A9D8F] shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong>Notice:</strong> This guide provides general settlement information only and does not constitute legal, financial, visa, or migration advice. Requirements vary based on your visa subclass and state jurisdiction—always confirm current details with official government portals.
        </p>
      </div>

      {/* 10. Next Step Action Button & Help Links - Pill Button */}
      <footer className="pt-6 border-t border-[#E0ECE6] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs text-[#1B3A34]/70 flex items-center gap-3">
          <span>Stuck or have a question?</span>
          <a
            href={getHref('contact/chatbot')}
            onClick={(e) => {
              if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                e.preventDefault();
                onNavigate('contact/chatbot');
              }
            }}
            className="text-[#2A9D8F] hover:text-[#1B4D3E] font-bold underline cursor-pointer"
          >
            Ask Chat-Bot
          </a>
          <span>·</span>
          <a
            href={getHref('contact/faq')}
            onClick={(e) => {
              if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                e.preventDefault();
                onNavigate('contact/faq');
              }
            }}
            className="text-[#2A9D8F] hover:text-[#1B4D3E] font-bold underline cursor-pointer"
          >
            Read FAQ
          </a>
        </div>

        {/* Go to the next step button - Rounded Pill in Warm Orange with Dark Green Text */}
        <a
          href={getHref(nextPath)}
          onClick={(e) => {
            if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
              e.preventDefault();
              if (guide.nextStepId === '12-month-plan') {
                onNavigate('plan/overview');
              } else {
                onSelectGuide(guide.nextStepId);
              }
            }
          }}
          className="w-full sm:w-auto bg-[#F4A261] hover:bg-[#e7924e] text-[#1B3A34] font-bold text-xs sm:text-sm px-7 py-3.5 rounded-full shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-95"
        >
          <span>Go to the next step: {guide.nextStepTitle}</span>
          <ArrowRight className="w-4 h-4 text-[#1B3A34]" />
        </a>
      </footer>
    </article>
  );
};
