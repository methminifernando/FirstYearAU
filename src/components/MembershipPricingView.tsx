import React, { useState } from 'react';
import { 
  Check, X, ShieldCheck, Download, ArrowRight, 
  Tag, ExternalLink, Calendar, Bell, FileText, Video, CheckCircle2, HelpCircle 
} from 'lucide-react';
import { PLAN_COMPARISON, PARTNER_OFFERS } from '../data/pricingData';
import { PLAN_STAGES } from '../data/planData';

interface MembershipPricingViewProps {
  subPage: 'free' | 'plus' | 'compare' | 'partners';
  onNavigate: (path: string) => void;
  onOpenTemplatePreview: () => void;
  onOpenSubscribeModal: () => void;
}

export const MembershipPricingView: React.FC<MembershipPricingViewProps> = ({
  subPage,
  onNavigate,
  onOpenTemplatePreview,
  onOpenSubscribeModal
}) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  // Printable checklist handler
  const handlePrintChecklist = () => {
    window.print();
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Subpage Switcher Tabs */}
      <div className="flex items-center justify-center overflow-x-auto pb-2">
        <div className="bg-slate-100 p-1 rounded-full flex items-center border border-slate-200 text-xs sm:text-sm font-semibold whitespace-nowrap">
          <button
            onClick={() => onNavigate('pricing/free')}
            className={`px-5 py-2 rounded-full transition-all cursor-pointer ${
              subPage === 'free'
                ? 'bg-[#1B4D3E] text-white shadow-xs'
                : 'text-slate-600 hover:text-[#1B4D3E]'
            }`}
          >
            Free plan & checklist
          </button>
          <button
            onClick={() => onNavigate('pricing/plus')}
            className={`px-5 py-2 rounded-full transition-all cursor-pointer ${
              subPage === 'plus'
                ? 'bg-[#1B4D3E] text-white shadow-xs'
                : 'text-slate-600 hover:text-[#1B4D3E]'
            }`}
          >
            FirstYear Plus subscription
          </button>
          <button
            onClick={() => onNavigate('pricing/compare')}
            className={`px-5 py-2 rounded-full transition-all cursor-pointer ${
              subPage === 'compare'
                ? 'bg-[#1B4D3E] text-white shadow-xs'
                : 'text-slate-600 hover:text-[#1B4D3E]'
            }`}
          >
            Compare plans
          </button>
          <button
            onClick={() => onNavigate('pricing/partners')}
            className={`px-5 py-2 rounded-full transition-all cursor-pointer ${
              subPage === 'partners'
                ? 'bg-[#1B4D3E] text-white shadow-xs'
                : 'text-slate-600 hover:text-[#1B4D3E]'
            }`}
          >
            Partner offers
          </button>
        </div>
      </div>

      {/* SUBPAGE 1: Free Plan and Checklist */}
      {subPage === 'free' && (
        <div className="space-y-10 animate-in fade-in duration-200">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold text-[#2A9D8F] tracking-wider uppercase">
              100% Free Settlement Resources
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1B4D3E] font-display">
              Moving to Australia checklist: Free Plan
            </h1>
            <p className="text-sm sm:text-base text-[#1B3A34]/80 leading-relaxed">
              We never hide essential settlement knowledge behind paywalls. Every new migrant and international student can read our complete 13 guides and print our comprehensive settling checklist for free.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={handlePrintChecklist}
                className="bg-[#F4A261] hover:bg-[#e7924e] text-[#1B3A34] font-bold text-xs sm:text-sm px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all cursor-pointer flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Print or Save as PDF Checklist</span>
              </button>
              <button
                onClick={() => onNavigate('plan/overview')}
                className="bg-white hover:bg-[#F6FAF7] text-[#1B4D3E] font-semibold text-xs sm:text-sm px-5 py-3 rounded-full border border-slate-300 transition-colors cursor-pointer"
              >
                Explore Interactive Timeline
              </button>
            </div>
          </div>

          {/* Printable Checklist Section */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-8" id="printable-checklist">
            <div className="border-b border-slate-200 pb-4 flex items-center justify-between">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1B4D3E]">
                  Complete FirstYear AU 12-Month Checklist
                </h2>
                <p className="text-xs text-slate-500">
                  Includes key deadlines, 6-week passport rule, and regulatory checkpoints
                </p>
              </div>
              <span className="text-xs font-semibold bg-[#E2F4EE] text-[#1B4D3E] px-3 py-1 rounded-full">
                Free Edition
              </span>
            </div>

            <div className="space-y-6">
              {PLAN_STAGES.map((stage) => {
                const isWeek = stage.id.includes('week') || stage.id.includes('before');
                return (
                  <div key={stage.id} className="space-y-3">
                    <div className="bg-[#F6FAF7] px-4 py-2.5 rounded-xl flex items-center justify-between border border-slate-100">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-[#1B4D3E] text-sm sm:text-base">
                          {stage.title}
                        </span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          isWeek ? 'bg-[#E2F4EE] text-[#1B4D3E]' : 'bg-[#FDE9DB] text-[#8B4513]'
                        }`}>
                          {stage.timeframe}
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-500 font-mono">
                        {stage.tasks.length} Milestones
                      </span>
                    </div>

                    <div className="divide-y divide-slate-100 pl-2">
                      {stage.tasks.map((task) => (
                        <div key={task.id} className="py-2.5 flex items-start gap-3">
                          <div className="w-4 h-4 rounded border border-slate-300 shrink-0 mt-0.5"></div>
                          <div className="flex-1 text-xs sm:text-sm">
                            <span className="font-semibold text-[#1B3A34]">{task.title}</span>
                            <span className="text-[#2A9D8F] font-mono text-xs ml-2">[{task.estimatedDays}]</span>
                            <p className="text-slate-500 text-xs mt-0.5">{task.description}</p>
                          </div>
                          {task.guideSlug && (
                            <button
                              onClick={() => onNavigate(`get-set-up/${task.guideSlug}`)}
                              className="text-xs text-[#2A9D8F] hover:underline shrink-0 no-print font-medium"
                            >
                              Read guide
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Free vs Plus Upsell Teaser */}
            <div className="bg-gradient-to-r from-[#F6FAF7] to-[#E2F4EE] border border-teal-100 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 no-print shadow-xs">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#1B4D3E] text-sm sm:text-base">
                    Want the full Rental Application Pack & Task Reminders?
                  </span>
                  <span className="bg-[#E9C46A] text-[#1B3A34] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    Plus
                  </span>
                </div>
                <p className="text-xs text-slate-600">
                  Upgrade to FirstYear Plus for A$4.99/month. Cancel anytime. 7-day refund guarantee.
                </p>
              </div>
              <button
                onClick={onOpenSubscribeModal}
                className="bg-[#F4A261] hover:bg-[#e7924e] text-[#1B3A34] font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full shrink-0 shadow-sm transition-all cursor-pointer"
              >
                Upgrade to Plus
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SUBPAGE 2: FirstYear Plus Subscription */}
      {subPage === 'plus' && (
        <div className="space-y-10 animate-in fade-in duration-200">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold text-[#2A9D8F] tracking-wider uppercase">
              Premium Settlement Companion
            </span>
            <div className="flex items-center justify-center gap-2">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1B4D3E] font-display">
                FirstYear Plus Subscription
              </h1>
              <span className="bg-[#E9C46A] text-[#1B3A34] text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                Plus
              </span>
            </div>
            <p className="text-sm sm:text-base text-[#1B3A34]/80 leading-relaxed">
              Your personal settling co-pilot. For less than the price of one flat white coffee a month, get automated deadline reminders, our zero-history rental application pack, video walkthroughs, and self-checks.
            </p>

            {/* Billing Toggle */}
            <div className="pt-2 flex items-center justify-center">
              <div className="bg-slate-100 p-1 rounded-full flex items-center border border-slate-200">
                <button
                  type="button"
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all cursor-pointer ${
                    billingCycle === 'monthly'
                      ? 'bg-white text-[#1B4D3E] shadow-xs'
                      : 'text-slate-600 hover:text-[#1B4D3E]'
                  }`}
                >
                  Monthly: A$4.99 / month
                </button>
                <button
                  type="button"
                  onClick={() => setBillingCycle('annual')}
                  className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all cursor-pointer flex items-center gap-1.5 ${
                    billingCycle === 'annual'
                      ? 'bg-white text-[#1B4D3E] shadow-xs'
                      : 'text-slate-600 hover:text-[#1B4D3E]'
                  }`}
                >
                  <span>Annual: A$49 / year</span>
                  <span className="bg-[#E2F4EE] text-[#1B4D3E] text-[10px] px-2 py-0.5 rounded-full font-bold">Save 18%</span>
                </button>
              </div>
            </div>
          </div>

          {/* Plus Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#E2F4EE] flex items-center justify-center text-[#1B4D3E]">
                <Calendar className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-[#1B4D3E]">Personalised 12-Month Plan</h3>
                <span className="bg-[#FCF4DD] text-[#684C00] text-[10px] font-bold px-2 py-0.5 rounded-full">Plus</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Enter your flight landing date and destination city. We generate a custom calendar that syncs with Google Calendar, Apple iCal, or Outlook.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#FDE9DB] flex items-center justify-center text-[#8B4513]">
                <Bell className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-[#1B4D3E]">Task Reminders via Email & SMS</h3>
                <span className="bg-[#FCF4DD] text-[#684C00] text-[10px] font-bold px-2 py-0.5 rounded-full">Plus</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Critical notifications sent before strict state deadlines: the 6-week passport banking rule, 28-day TFN employer submission, and 3-day condition report returns.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#E2F4EE] flex items-center justify-center text-[#2A9D8F]">
                <FileText className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-[#1B4D3E]">Rental Application Template Pack</h3>
                <span className="bg-[#FCF4DD] text-[#684C00] text-[10px] font-bold px-2 py-0.5 rounded-full">Plus</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Full downloadable Microsoft Word & PDF pack: cover letter explaining student savings, income schedule, and referee questionnaires.
              </p>
              <button
                onClick={onOpenTemplatePreview}
                className="text-xs text-[#2A9D8F] hover:underline font-semibold inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Preview template free</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#FCF4DD] flex items-center justify-center text-[#684C00]">
                <Video className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-[#1B4D3E]">Video Walkthroughs</h3>
                <span className="bg-[#FCF4DD] text-[#684C00] text-[10px] font-bold px-2 py-0.5 rounded-full">Plus</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Real room-by-room walkthroughs demonstrating how to document ovens, carpets, and window seals on incoming condition reports to guarantee 100% bond returns.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#E2F4EE] flex items-center justify-center text-[#1B4D3E]">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-[#1B4D3E]">Interactive Self-Check List</h3>
                <span className="bg-[#FCF4DD] text-[#684C00] text-[10px] font-bold px-2 py-0.5 rounded-full">Plus</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Diagnostic audits to verify if your employment pay slips match Fair Work awards, if your super is being paid quarterly, and if your lease has illegal clauses.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-[#2A9D8F]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-[#1B4D3E]">7-Day Full Refund Guarantee</h3>
                <span className="bg-[#E2F4EE] text-[#1B4D3E] text-[10px] font-bold px-2 py-0.5 rounded-full">Included</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Test FirstYear Plus completely risk-free. If it doesn’t save you time, stress, and money, email us within 7 days for a 100% full refund with zero questions asked.
              </p>
            </div>
          </div>

          {/* Pricing CTA Box */}
          <div className="bg-gradient-to-r from-[#1B4D3E] to-[#2A9D8F] text-white rounded-3xl p-8 sm:p-10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <span className="bg-[#E9C46A] text-[#1B3A34] text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider inline-block">
                Risk-Free Subscription
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
                Subscribe to FirstYear Plus
              </h2>
              <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
                A$4.99 a month or A$49 a year. Cancel anytime with a single click. Includes the complete Rental Application Pack, personalized reminders, and video walkthroughs.
              </p>
            </div>

            <div className="shrink-0 flex flex-col items-center gap-2">
              <button
                onClick={onOpenSubscribeModal}
                className="bg-[#F4A261] hover:bg-[#e7924e] text-[#1B3A34] font-bold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer active:scale-98"
              >
                Subscribe Now
              </button>
              <span className="text-[11px] text-emerald-200">
                Clear confirmation step before payment
              </span>
            </div>
          </div>
        </div>
      )}

      {/* SUBPAGE 3: Compare Plans */}
      {subPage === 'compare' && (
        <div className="space-y-10 animate-in fade-in duration-200">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold text-[#2A9D8F] tracking-wider uppercase">
              Feature Matrix
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1B4D3E] font-display">
              Compare Free vs. FirstYear Plus
            </h1>
            <p className="text-sm sm:text-base text-[#1B3A34]/80 leading-relaxed">
              Transparent side-by-side comparison. Free access for self-directed research; Plus for automated reminders, downloadable templates, and peace of mind.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-[#1B4D3E] text-white border-b border-teal-800">
                    <th className="p-4 sm:p-5 font-bold text-sm sm:text-base w-1/2">Features & Capabilities</th>
                    <th className="p-4 sm:p-5 font-bold text-center w-1/4">Free Plan (A$0)</th>
                    <th className="p-4 sm:p-5 font-bold text-center w-1/4 bg-[#2A9D8F]">
                      <div className="flex items-center justify-center gap-1.5">
                        <span>FirstYear Plus (A$4.99/mo)</span>
                        <span className="bg-[#E9C46A] text-[#1B3A34] text-[10px] font-bold px-1.5 py-0.5 rounded-full">Plus</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {PLAN_COMPARISON.map((feat, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-[#F6FAF7]/60'}>
                      <td className="p-4 sm:p-5">
                        <span className="font-semibold text-[#1B4D3E] block">{feat.name}</span>
                        {feat.note && <span className="text-xs text-slate-500 mt-0.5 block">{feat.note}</span>}
                      </td>

                      {/* Free Column */}
                      <td className="p-4 sm:p-5 text-center">
                        {typeof feat.free === 'boolean' ? (
                          feat.free ? (
                            <Check className="w-5 h-5 text-emerald-600 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-slate-300 mx-auto" />
                          )
                        ) : (
                          <span className="text-xs font-medium text-slate-700 bg-slate-100 px-2.5 py-1 rounded-full">
                            {feat.free}
                          </span>
                        )}
                      </td>

                      {/* Plus Column */}
                      <td className="p-4 sm:p-5 text-center bg-teal-50/40">
                        {typeof feat.plus === 'boolean' ? (
                          feat.plus ? (
                            <Check className="w-5 h-5 text-emerald-600 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-slate-300 mx-auto" />
                          )
                        ) : (
                          <span className="text-xs font-bold text-[#684C00] bg-[#FCF4DD] px-2.5 py-1 rounded-full">
                            {feat.plus}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Table Footer with CTAs */}
            <div className="p-6 bg-[#F6FAF7] border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Cancel anytime with 1 click · 7-day 100% money-back refund guarantee</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => onNavigate('pricing/free')}
                  className="px-5 py-2 text-xs font-semibold text-[#1B4D3E] bg-white border border-slate-300 rounded-full hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  Download Free Checklist
                </button>
                <button
                  onClick={onOpenSubscribeModal}
                  className="px-6 py-2.5 text-xs font-bold text-[#1B3A34] bg-[#F4A261] hover:bg-[#e7924e] rounded-full shadow-sm transition-all cursor-pointer"
                >
                  Subscribe to Plus
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SUBPAGE 4: Partner Offers */}
      {subPage === 'partners' && (
        <div className="space-y-10 animate-in fade-in duration-200">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold text-[#2A9D8F] tracking-wider uppercase">
              Vetted Student & Expat Deals
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1B4D3E] font-display">
              Clearly Labelled Partner Offers
            </h1>
            <p className="text-sm sm:text-base text-[#1B3A34]/80 leading-relaxed">
              We know new arrivals spend hundreds of dollars unnecessarily in their first month. We negotiate special discounts with reliable Australian providers and transparently disclose our commercial partnerships.
            </p>
          </div>

          {/* Partner Disclosure Notice */}
          <div className="bg-[#FFF8F0] border border-amber-200 p-5 rounded-2xl text-xs sm:text-sm text-amber-950 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold">Affiliate Disclosure Policy:</p>
              <p className="text-slate-600 mt-0.5">
                FirstYear AU receives an affiliate commission if you purchase through these links, at zero extra cost to you. We strictly decline partnerships with providers that lock students into predatory contracts, charge hidden account fees, or deliver poor network reception.
              </p>
            </div>
          </div>

          {/* Offers Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PARTNER_OFFERS.map((offer) => (
              <div
                key={offer.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-[#1B4D3E] uppercase tracking-wider bg-[#E2F4EE] px-2.5 py-0.5 rounded-full">
                      {offer.category}
                    </span>
                    <span className="text-xs font-bold text-[#1B4D3E]">
                      {offer.priceNote}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-bold text-slate-400 block">{offer.provider}</span>
                    <h3 className="text-lg font-bold text-[#1B4D3E] mt-0.5">{offer.title}</h3>
                    <p className="text-xs text-slate-500 font-medium italic mt-0.5">{offer.tagline}</p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#1B3A34] leading-relaxed pt-1">
                    {offer.benefit}
                  </p>

                  {offer.dealCode && (
                    <div className="bg-[#F6FAF7] p-2.5 rounded-xl border border-slate-200 flex items-center justify-between text-xs">
                      <span className="text-slate-500">Promo Code:</span>
                      <code className="font-mono font-bold text-[#1B4D3E] bg-[#E9C46A]/30 px-2 py-0.5 rounded">
                        {offer.dealCode}
                      </code>
                    </div>
                  )}

                  {/* Mandatory Clearly Labelled Partner Disclosure */}
                  <div className="text-[11px] text-slate-400 border-t border-slate-100 pt-2 italic">
                    {offer.disclosure}
                  </div>
                </div>

                <div className="pt-5">
                  <a
                    href={offer.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#F4A261] hover:bg-[#e7924e] text-[#1B3A34] font-bold py-2.5 px-4 rounded-full text-xs text-center transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <span>View {offer.provider} Offer</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
