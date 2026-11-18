import React, { useState } from 'react';
import { 
  Check, X, ShieldCheck, Download, ArrowRight, 
  Lock, Calendar, Bell, FileText, Video, CheckCircle2 
} from 'lucide-react';
import { PLAN_COMPARISON, PARTNER_OFFERS } from '../data/pricingData';
import { PLAN_STAGES } from '../data/planData';
import { getGuideById } from '../data/guidesData';
import { getHref } from '../utils/routing';
import pricingFreeChecklistImg from '../assets/images/pricing_free_checklist_1795006589476.jpg';
import plusCommunityImg from '../assets/images/pricing_plus_community_1795004748132.jpg';
import pricingComparePlansImg from '../assets/images/pricing_compare_plans_1795006590976.jpg';
import pricingPartnerOffersImg from '../assets/images/pricing_partner_offers_1795006590443.jpg';

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
          <a
            href={getHref('pricing/free')}
            onClick={(e) => {
              if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                e.preventDefault();
                onNavigate('pricing/free');
              }
            }}
            className={`px-5 py-2 rounded-full transition-all cursor-pointer ${
              subPage === 'free'
                ? 'bg-[#1B4D3E] text-white shadow-xs'
                : 'text-slate-600 hover:text-[#1B4D3E]'
            }`}
          >
            Free plan &amp; checklist
          </a>
          <a
            href={getHref('pricing/plus')}
            onClick={(e) => {
              if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                e.preventDefault();
                onNavigate('pricing/plus');
              }
            }}
            className={`px-5 py-2 rounded-full transition-all cursor-pointer ${
              subPage === 'plus'
                ? 'bg-[#1B4D3E] text-white shadow-xs'
                : 'text-slate-600 hover:text-[#1B4D3E]'
            }`}
          >
            FirstYear Plus subscription
          </a>
          <a
            href={getHref('pricing/compare')}
            onClick={(e) => {
              if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                e.preventDefault();
                onNavigate('pricing/compare');
              }
            }}
            className={`px-5 py-2 rounded-full transition-all cursor-pointer ${
              subPage === 'compare'
                ? 'bg-[#1B4D3E] text-white shadow-xs'
                : 'text-slate-600 hover:text-[#1B4D3E]'
            }`}
          >
            Compare plans
          </a>
          <a
            href={getHref('pricing/partners')}
            onClick={(e) => {
              if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                e.preventDefault();
                onNavigate('pricing/partners');
              }
            }}
            className={`px-5 py-2 rounded-full transition-all cursor-pointer ${
              subPage === 'partners'
                ? 'bg-[#1B4D3E] text-white shadow-xs'
                : 'text-slate-600 hover:text-[#1B4D3E]'
            }`}
          >
            Partner offers
          </a>
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
              Moving to Australia Checklist: Free Plan
            </h1>
            <p className="text-sm sm:text-base text-[#1B3A34]/80 leading-relaxed">
              Our free moving to Australia checklist gives international students and new migrants every essential first-year milestone in clear chronological order. Read all 13 public guides at no cost and preview our rental application template for new migrants before deciding on any upgrade. Always confirm official rules and fees directly with government websites such as ato.gov.au.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={handlePrintChecklist}
                className="bg-[#F4A261] hover:bg-[#e7924e] text-[#1B3A34] font-bold text-xs sm:text-sm px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all cursor-pointer flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Print or Save as PDF Checklist</span>
              </button>
              <a
                href={getHref('plan/overview')}
                onClick={(e) => {
                  if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                    e.preventDefault();
                    onNavigate('plan/overview');
                  }
                }}
                className="bg-white hover:bg-[#F6FAF7] text-[#1B4D3E] font-semibold text-xs sm:text-sm px-5 py-3 rounded-full border border-slate-300 transition-colors cursor-pointer"
              >
                Explore Interactive 12-Month Plan
              </a>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden border border-[#E0ECE6] shadow-sm bg-white no-print">
            <img
              src={pricingFreeChecklistImg}
              alt="Printed moving to Australia settlement checklist beside a laptop and coffee cup on a bright study desk"
              referrerPolicy="no-referrer"
              className="w-full h-52 sm:h-72 object-cover"
            />
          </div>

          {/* Printable Checklist Section */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-8" id="printable-checklist">
            <div className="border-b border-slate-200 pb-4 flex items-center justify-between">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1B4D3E]">
                  What tasks are on your complete moving to Australia checklist?
                </h2>
                <p className="text-xs text-slate-500">
                  Includes key deadlines, 6-week bank passport verification window, and regulatory checkpoints
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
                        <h3 className="font-bold text-[#1B4D3E] text-sm sm:text-base">
                          {stage.title}
                        </h3>
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
                      {stage.tasks.map((task) => {
                        const linkedGuide = task.guideSlug ? getGuideById(task.guideSlug) : undefined;
                        const guidePath = linkedGuide ? `${linkedGuide.categorySlug}/${linkedGuide.slug}` : undefined;
                        return (
                          <div key={task.id} className="py-2.5 flex items-start gap-3">
                            <div className="w-4 h-4 rounded border border-slate-300 shrink-0 mt-0.5"></div>
                            <div className="flex-1 text-xs sm:text-sm">
                              <span className="font-semibold text-[#1B3A34]">{task.title}</span>
                              <span className="text-[#2A9D8F] font-mono text-xs ml-2">[{task.estimatedDays}]</span>
                              <p className="text-slate-500 text-xs mt-0.5">{task.description}</p>
                            </div>
                            {linkedGuide && guidePath && (
                              <a
                                href={getHref(guidePath)}
                                onClick={(e) => {
                                  if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                                    e.preventDefault();
                                    onNavigate(guidePath);
                                  }
                                }}
                                className="text-xs text-[#2A9D8F] hover:underline shrink-0 no-print font-medium"
                              >
                                {linkedGuide.seoKeyword}
                              </a>
                            )}
                          </div>
                        );
                      })}
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
                    Want a customised settlement plan, personalised info &amp; full resources?
                  </span>
                  <span className="bg-[#E9C46A] text-[#1B3A34] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    Plus
                  </span>
                </div>
                <p className="text-xs text-slate-600">
                  Upgrade to FirstYear Plus for tailored arrival milestones, personalised reminders, video walkthroughs, and templates — A$4.99/month. Cancel anytime with a 7-day refund guarantee.
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
                Rental Application Template for New Migrants &amp; FirstYear Plus
              </h1>
              <span className="bg-[#E9C46A] text-[#1B3A34] text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shrink-0">
                Plus
              </span>
            </div>
            <p className="text-sm sm:text-base text-[#1B3A34]/80 leading-relaxed">
              Unlock our editable rental application template for new migrants alongside a personalised moving to Australia checklist synced to your arrival date. For A$4.99 a month or A$49 a year (cancel anytime, 7-day full refund), you also receive deadline reminders, video walkthroughs, and self-checks—with a free rental template preview before subscribing.
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

          <div className="rounded-3xl overflow-hidden border border-[#E0ECE6] shadow-sm bg-white">
            <img
              src={plusCommunityImg}
              alt="International newcomers collaborating with laptops and settlement planners in a sunlit Australian space"
              referrerPolicy="no-referrer"
              className="w-full h-56 sm:h-80 object-cover"
            />
          </div>

          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1B4D3E] font-display">
              What is included in FirstYear Plus for new migrants?
            </h2>
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
                Enter your arrival date and city to tailor your moving to Australia checklist and export milestones to your calendar.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#FDE9DB] flex items-center justify-center text-[#8B4513]">
                <Bell className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-[#1B4D3E]">Task Reminders via Email &amp; SMS</h3>
                <span className="bg-[#FCF4DD] text-[#684C00] text-[10px] font-bold px-2 py-0.5 rounded-full">Plus</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Reminders before important state and federal cutoffs, including the 6-week passport banking rule and condition report return windows.
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
                Full downloadable Microsoft Word &amp; PDF pack: cover letter explaining overseas savings, income schedule, and referee templates.
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
                Room-by-room walkthroughs demonstrating how to document condition reports carefully to protect your rental bond.
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
                Practical self-checks to remind you to verify TFN setup, super fund deposits, and incoming lease documentation.
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
                Try FirstYear Plus risk-free. Cancel anytime in one click, or request a full refund within 7 days with no questions asked.
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
                A$4.99 a month or A$49 a year. Cancel anytime with a single click. Includes our rental application template for new migrants, reminders, and video walkthroughs.
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
              Compare Moving to Australia Checklist &amp; Plus Plans
            </h1>
            <p className="text-sm sm:text-base text-[#1B3A34]/80 leading-relaxed">
              See everything included in our free moving to Australia checklist alongside FirstYear Plus, which unlocks our full rental application template for new migrants, personalised reminders, and video walkthroughs—all backed by a 7-day refund guarantee.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden border border-[#E0ECE6] shadow-sm bg-white">
            <img
              src={pricingComparePlansImg}
              alt="Newcomers reviewing plan features side-by-side on a tablet and notebook in a sunlit workspace"
              referrerPolicy="no-referrer"
              className="w-full h-52 sm:h-72 object-cover"
            />
          </div>

          <h2 className="text-xl font-bold text-[#1B4D3E] text-center font-display">
            How do the Free Plan and FirstYear Plus compare?
          </h2>

          {/* Comparison Table */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-[#1B4D3E] text-white border-b border-teal-800">
                    <th className="p-4 sm:p-5 font-bold text-sm sm:text-base w-1/2">Features &amp; Capabilities</th>
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
                          <span className="inline-block text-xs font-medium text-slate-700 bg-slate-100 px-2.5 py-1 rounded-full">
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
                          <span className="inline-block text-xs font-bold text-[#684C00] bg-[#FCF4DD] px-2.5 py-1 rounded-full">
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
                <a
                  href={getHref('pricing/free')}
                  onClick={(e) => {
                    if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                      e.preventDefault();
                      onNavigate('pricing/free');
                    }
                  }}
                  className="px-5 py-2 text-xs font-semibold text-[#1B4D3E] bg-white border border-slate-300 rounded-full hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  Download Free Checklist
                </a>
                <button
                  onClick={onOpenSubscribeModal}
                  className="px-6 py-2.5 text-xs font-bold text-[#1B3A34] bg-[#F4A261] hover:bg-[#e7924e] rounded-full shadow-sm transition-all cursor-pointer"
                >
                  Subscribe to Plus
                </button>
              </div>
            </div>
          </div>

          <p className="text-xs text-slate-500 text-center max-w-3xl mx-auto leading-relaxed">
            Tax lodgement is provided by registered tax agent partners. FirstYear AU provides general information only and does not give legal, financial, visa or migration advice.
          </p>
        </div>
      )}

      {/* SUBPAGE 4: Partner Offers */}
      {subPage === 'partners' && (
        <div className="space-y-10 animate-in fade-in duration-200">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="text-xs font-bold text-[#2A9D8F] tracking-wider uppercase">
                FirstYear Plus Subscribers Only
              </span>
              <span className="bg-[#E9C46A] text-[#1B3A34] text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Plus Exclusive
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1B4D3E] font-display">
              New Migrant Partner Offers in Australia
            </h1>
            <p className="text-sm sm:text-base text-[#1B3A34]/80 leading-relaxed">
              Partner offers are available exclusively to active <strong>FirstYear Plus</strong> subscribers. Preview vetted member deals on prepaid SIMs, home NBN internet, budget furniture, and international money transfers below—private partner links and member discount codes are unlocked only after subscribing to FirstYear Plus.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden border border-[#E0ECE6] shadow-sm bg-white">
            <img
              src={pricingPartnerOffersImg}
              alt="Everyday newcomer essentials in Australia including prepaid SIM card, router, and home setup kit"
              referrerPolicy="no-referrer"
              className="w-full h-52 sm:h-72 object-cover"
            />
          </div>

          {/* Partner Disclosure Notice */}
          <div className="bg-[#FFF8F0] border border-amber-200 p-5 rounded-2xl text-xs sm:text-sm text-amber-950 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <h2 className="font-bold text-sm">Commercial Partner Disclosure &amp; Plus Exclusivity</h2>
              <p className="text-slate-600 mt-0.5">
                Partner offers and member promo codes are reserved strictly for <strong>FirstYear Plus</strong> subscribers and are not published publicly. FirstYear AU may receive a referral or affiliate commission when Plus members redeem a partner deal through their subscriber portal at zero extra cost. You can always read our public{' '}
                <a
                  href={getHref('get-set-up/sim-internet')}
                  onClick={(e) => {
                    if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                      e.preventDefault();
                      onNavigate('get-set-up/sim-internet');
                    }
                  }}
                  className="text-[#1B4D3E] underline font-semibold"
                >
                  best SIM card for new arrivals Australia
                </a>{' '}
                guide for free.
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

                  <div className="bg-[#FCF4DD]/70 p-2.5 rounded-xl border border-amber-200/80 flex items-center justify-between gap-2 text-xs">
                    <span className="text-[#684C00] font-semibold flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5 shrink-0" />
                      <span>Member offer &amp; promo code</span>
                    </span>
                    <span className="text-[10px] font-bold bg-[#E9C46A] text-[#1B3A34] px-2.5 py-0.5 rounded-full uppercase tracking-wider shrink-0">
                      Plus Only
                    </span>
                  </div>

                  <div className="text-[11px] text-slate-400 border-t border-slate-100 pt-2 italic">
                    {offer.disclosure}
                  </div>
                </div>

                <div className="pt-5">
                  <button
                    type="button"
                    onClick={onOpenSubscribeModal}
                    className="w-full bg-[#F4A261] hover:bg-[#e7924e] text-[#1B3A34] font-bold py-2.5 px-4 rounded-full text-xs text-center transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <Lock className="w-3.5 h-3.5" />
                    <span>Unlock {offer.provider} Offer with Plus</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
