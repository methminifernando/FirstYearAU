import React from 'react';
import { 
  Compass, ArrowRight, CheckCircle2, ShieldCheck, Clock, 
  MapPin, AlertCircle, FileCheck, PhoneCall, Building2, 
  Car, Sparkles, ChevronRight, BookOpen, Layers, Users
} from 'lucide-react';
import { ArrivalStage } from '../types';

interface HomeViewProps {
  onNavigate: (path: string) => void;
  onOpenTemplatePreview: () => void;
  onOpenSubscribeModal: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenTemplatePreview,
  onOpenSubscribeModal
}) => {
  return (
    <div className="space-y-16 sm:space-y-24 bg-[#F6FAF7]">
      {/* 1. Hero Section with Deep Green Gradient (#1B4D3E to #2A9D8F) */}
      <section className="bg-gradient-to-br from-[#1B4D3E] via-[#1E6B58] to-[#2A9D8F] text-white pt-14 pb-20 lg:pt-20 lg:pb-28 border-b border-[#2A9D8F]/30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headline & Action */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-emerald-100 border border-white/20 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-[#E9C46A]"></span>
                <span>The Independent New Migrant Guide Australia</span>
              </div>

              {/* Exact Value Proposition from brief */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] font-display">
                FirstYear AU turns a confusing first year into a clear week-by-week plan: what to do, when to do it and why, in plain English.
              </h1>

              <p className="text-base sm:text-lg text-emerald-50/90 leading-relaxed max-w-2xl">
                Arriving in Australia shouldn’t feel like solving an impossible puzzle. We bridge the gap between complex government rules, state differences, and unfamiliar local jargon—from opening bank accounts and lodging rental bonds to converting driver licences.
              </p>

              {/* Persona Context Card */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-xs sm:text-sm text-emerald-50 flex items-start gap-3 shadow-xs">
                <div className="w-7 h-7 rounded-full bg-[#E9C46A] text-[#1B3A34] flex items-center justify-center font-bold shrink-0 text-xs mt-0.5">
                  AU
                </div>
                <div>
                  <span className="font-bold text-white">Built for international students & skilled visa arrivals:</span>
                  <p className="text-emerald-100/90 mt-0.5">
                    Whether you are starting in Adelaide, Melbourne, Sydney, or Brisbane, follow the exact verified sequence before penalties or missed deadlines strike.
                  </p>
                </div>
              </div>

              {/* Hero Action Buttons - Pill Shaped */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  onClick={() => onNavigate('plan/overview')}
                  className="bg-[#F4A261] hover:bg-[#e7924d] text-[#1B3A34] font-bold text-base px-7 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-95"
                >
                  <span>Start my plan</span>
                  <ArrowRight className="w-4 h-4 text-[#1B3A34]" />
                </button>
                <button
                  onClick={() => onNavigate('pricing/free')}
                  className="bg-white/10 hover:bg-white/20 text-white font-semibold text-base px-6 py-3.5 rounded-full border border-white/30 transition-colors cursor-pointer text-center"
                >
                  Download the free checklist
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-emerald-100/90 pt-2">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E9C46A]" />
                  Free foundational guides
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E9C46A]" />
                  Official government citations
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E9C46A]" />
                  Updated November 2026
                </span>
              </div>
            </div>

            {/* Right Column: Visual Stage Timeline Preview Card (White card with soft shadow) */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl shadow-xl border border-[#E0ECE6] p-6 space-y-5 text-[#1B3A34]">
                <div className="flex items-center justify-between pb-3 border-b border-[#E0ECE6]">
                  <div className="flex items-center gap-2">
                    <Compass className="w-5 h-5 text-[#2A9D8F]" />
                    <span className="font-bold text-[#1B4D3E] text-sm">Settlement Roadmap Sequence</span>
                  </div>
                  <span className="bg-[#E2F4EE] text-[#1B4D3E] text-[11px] font-bold px-3 py-1 rounded-full">
                    13 Core Tasks
                  </span>
                </div>

                <div className="space-y-2.5">
                  {[
                    { step: '01', title: 'SIM & Airport Connectivity', time: 'Day 1', tag: 'Week Stage', tagClass: 'bg-[#E2F4EE] text-[#1B4D3E]', link: 'get-set-up/sim-internet' },
                    { step: '02', title: 'Bank Account & 6-Week Passport ID', time: 'Days 2–3', tag: 'Week Stage', tagClass: 'bg-[#E2F4EE] text-[#1B4D3E]', link: 'get-set-up/bank-account' },
                    { step: '03', title: 'Apply for Tax File Number (TFN)', time: 'Days 2–4', tag: 'Week Stage', tagClass: 'bg-[#E2F4EE] text-[#1B4D3E]', link: 'get-set-up/tax-file-number' },
                    { step: '04', title: 'Public Transport Smart Cards', time: 'Week 1', tag: 'Week Stage', tagClass: 'bg-[#E2F4EE] text-[#1B4D3E]', link: 'get-around/public-transport' },
                    { step: '05', title: 'Renting with Zero History', time: 'Month 1', tag: 'Month Stage', tagClass: 'bg-[#FDE9DB] text-[#8B4513]', link: 'find-a-home/renting-inspections' },
                    { step: '06', title: 'Bond Lodgement & Condition Report', time: 'Move-in Day', tag: 'Month Stage', tagClass: 'bg-[#FDE9DB] text-[#8B4513]', link: 'find-a-home/bond-condition-report' }
                  ].map((item) => (
                    <button
                      key={item.step}
                      onClick={() => onNavigate(item.link)}
                      className="w-full flex items-center justify-between p-2.5 rounded-xl border border-[#E0ECE6] hover:border-[#2A9D8F] hover:bg-[#F6FAF7] transition-all text-left cursor-pointer group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono font-bold text-[#2A9D8F] group-hover:text-[#1B4D3E]">
                          {item.step}
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-[#1B3A34] group-hover:text-[#1B4D3E]">
                          {item.title}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${item.tagClass}`}>
                          {item.time}
                        </span>
                        <ChevronRight className="w-3.5 h-3.5 text-[#2A9D8F] group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </button>
                  ))}
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onNavigate('plan/overview')}
                    className="w-full text-center text-xs font-bold text-[#2A9D8F] hover:text-[#1B4D3E] py-2 transition-colors cursor-pointer flex items-center justify-center gap-1"
                  >
                    <span>View all 5 chronological stages</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Three Routes by Stage */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-[#2A9D8F] tracking-wider uppercase">
            Choose Your Current Stage
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B4D3E] mt-1 font-display">
            Start at exactly the right place
          </h2>
          <p className="text-sm text-[#1B3A34]/80 mt-2">
            Tasks in Australia connect sequentially. Jumping straight to apartment applications without an Australian phone number or bank statement causes instant rejections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Route 1: Moving Soon (Week Stage -> Light Green Tag) */}
          <div className="bg-white rounded-3xl border border-[#E0ECE6] p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#E2F4EE] flex items-center justify-center text-[#1B4D3E]">
                <Clock className="w-6 h-6 text-[#2A9D8F]" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#1B4D3E] bg-[#E2F4EE] px-2.5 py-0.5 rounded-full inline-block">
                  Weeks 4 to 1 Before Departure
                </span>
                <h3 className="text-xl font-bold text-[#1B4D3E] mt-2">
                  Moving soon
                </h3>
              </div>
              <p className="text-sm text-[#1B3A34]/80 leading-relaxed">
                Pre-departure essentials: pre-open an Australian bank account, download your Overseas Student Health Cover (OSHC) card, and book verified short-term accommodation.
              </p>
              <ul className="space-y-2 text-xs text-[#1B3A34] pt-2 border-t border-[#E0ECE6]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2A9D8F] shrink-0" />
                  <span>Pre-apply for Big Four bank account</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2A9D8F] shrink-0" />
                  <span>Verify phone eSIM band compatibility</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2A9D8F] shrink-0" />
                  <span>Print 100-point physical document copies</span>
                </li>
              </ul>
            </div>
            <div className="pt-6">
              <button
                onClick={() => onNavigate('plan/before-arrival')}
                className="w-full bg-[#F4A261] hover:bg-[#e7924d] text-[#1B3A34] font-bold py-2.5 px-4 rounded-full text-xs text-center transition-colors cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>Explore Before Arrival tasks</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Route 2: Just Arrived (Week Stage -> Light Green Tag with Wattle Gold Accent) */}
          <div className="bg-white rounded-3xl border-2 border-[#2A9D8F] p-6 flex flex-col justify-between shadow-md relative">
            <div className="absolute top-4 right-4 bg-[#E9C46A] text-[#1B3A34] text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              High Priority
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#E2F4EE] flex items-center justify-center text-[#2A9D8F]">
                <MapPin className="w-6 h-6 text-[#2A9D8F]" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#1B4D3E] bg-[#E2F4EE] px-2.5 py-0.5 rounded-full inline-block">
                  Days 1 to 14 in Australia
                </span>
                <h3 className="text-xl font-bold text-[#1B4D3E] mt-2">
                  Just arrived
                </h3>
              </div>
              <p className="text-sm text-[#1B3A34]/80 leading-relaxed">
                Critical landing setup: activate your SIM, unlock your bank debit card under the 6-week passport rule, tap on public transport, and submit your free online TFN.
              </p>
              <ul className="space-y-2 text-xs text-[#1B3A34] pt-2 border-t border-[#E0ECE6]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2A9D8F] shrink-0" />
                  <span>SIM card & Australian mobile number</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2A9D8F] shrink-0" />
                  <span>Visit branch for passport ID check</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2A9D8F] shrink-0" />
                  <span>Free ATO Tax File Number (TFN) application</span>
                </li>
              </ul>
            </div>
            <div className="pt-6">
              <button
                onClick={() => onNavigate('plan/week-1')}
                className="w-full bg-[#F4A261] hover:bg-[#e7924d] text-[#1B3A34] font-bold py-2.5 px-4 rounded-full text-xs text-center transition-colors cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>View Week 1 action steps</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Route 3: Settling In (Month Stage -> Light Orange Tag) */}
          <div className="bg-white rounded-3xl border border-[#E0ECE6] p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FDE9DB] flex items-center justify-center text-[#8B4513]">
                <Building2 className="w-6 h-6 text-[#8B4513]" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#8B4513] bg-[#FDE9DB] px-2.5 py-0.5 rounded-full inline-block">
                  Months 1 to 12
                </span>
                <h3 className="text-xl font-bold text-[#1B4D3E] mt-2">
                  Settling in
                </h3>
              </div>
              <p className="text-sm text-[#1B3A34]/80 leading-relaxed">
                Long-term stability: rent with zero rental history, lodge bond with the state authority, obtain an 18+ Photo Card, optimize Super, and convert your driver licence.
              </p>
              <ul className="space-y-2 text-xs text-[#1B3A34] pt-2 border-t border-[#E0ECE6]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2A9D8F] shrink-0" />
                  <span>Rent with zero local rental history</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2A9D8F] shrink-0" />
                  <span>Protect bond with Condition Report</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2A9D8F] shrink-0" />
                  <span>18+ Proof of Age card & Police Check</span>
                </li>
              </ul>
            </div>
            <div className="pt-6">
              <button
                onClick={() => onNavigate('plan/month-1')}
                className="w-full bg-[#F4A261] hover:bg-[#e7924d] text-[#1B3A34] font-bold py-2.5 px-4 rounded-full text-xs text-center transition-colors cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>Explore Month 1 & beyond</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. How It Works in Three Steps */}
      <section className="bg-white py-16 border-y border-[#E0ECE6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#2A9D8F] tracking-wider uppercase">
              Simple 3-Step Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B4D3E] mt-1 font-display">
              How FirstYear AU works
            </h2>
            <p className="text-sm text-[#1B3A34]/80 mt-2">
              We cut through the noise of conflicting advice on social media and group chats with three structured principles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F6FAF7] p-6 rounded-3xl border border-[#E0ECE6] shadow-xs relative">
              <div className="w-10 h-10 rounded-full bg-[#1B4D3E] text-white font-bold flex items-center justify-center text-sm mb-4">
                1
              </div>
              <h3 className="text-lg font-bold text-[#1B4D3E]">
                Choose your stage and visa
              </h3>
              <p className="text-sm text-[#1B3A34]/80 mt-2 leading-relaxed">
                Whether you are on an international student visa (subclass 500) or skilled migration visa, select your Australian state (SA, VIC, NSW, QLD, WA) to filter out irrelevant rules.
              </p>
            </div>

            <div className="bg-[#F6FAF7] p-6 rounded-3xl border border-[#E0ECE6] shadow-xs relative">
              <div className="w-10 h-10 rounded-full bg-[#1B4D3E] text-white font-bold flex items-center justify-center text-sm mb-4">
                2
              </div>
              <h3 className="text-lg font-bold text-[#1B4D3E]">
                Follow the week-by-week plan
              </h3>
              <p className="text-sm text-[#1B3A34]/80 mt-2 leading-relaxed">
                Complete tasks in their true chronological order. Learn why task A unlocks task B (e.g. your SIM number enables your bank PayID, which enables your rental bond).
              </p>
            </div>

            <div className="bg-[#F6FAF7] p-6 rounded-3xl border border-[#E0ECE6] shadow-xs relative">
              <div className="w-10 h-10 rounded-full bg-[#1B4D3E] text-white font-bold flex items-center justify-center text-sm mb-4">
                3
              </div>
              <h3 className="text-lg font-bold text-[#1B4D3E]">
                Verify with official sources
              </h3>
              <p className="text-sm text-[#1B3A34]/80 mt-2 leading-relaxed">
                Every guide directly links to the relevant Australian Government department (ATO, Fair Trading, Service SA, AFP). Zero guesswork, zero scams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Rental Application Pack Callout Banner with Deep Green Gradient */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#1B4D3E] via-[#1E6B58] to-[#2A9D8F] text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="max-w-2xl space-y-4">
            <span className="inline-flex items-center gap-1.5 bg-[#E9C46A] text-[#1B3A34] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> High Demand Template
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display leading-tight text-white">
              Struggling to rent with zero Australian rental history?
            </h2>
            <p className="text-sm sm:text-base text-emerald-50 leading-relaxed">
              Australian real estate agents look for financial reliability and risk reduction. Our tailored Newcomer Rental Application Pack includes the proven cover letter, liquid savings summary, and overseas referee questionnaires that turn "no history" into an approved lease.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
              <button
                onClick={onOpenTemplatePreview}
                className="bg-[#F4A261] hover:bg-[#e7924d] text-[#1B3A34] font-bold text-sm px-6 py-3 rounded-full shadow transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Preview the template for free</span>
                <ArrowRight className="w-4 h-4 text-[#1B3A34]" />
              </button>
              <button
                onClick={() => onNavigate('find-a-home/renting-inspections')}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold text-sm px-6 py-3 rounded-full border border-white/30 transition-colors cursor-pointer text-center"
              >
                Read full renting guide
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Free vs Plus Teaser */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-[#2A9D8F] tracking-wider uppercase">
            Transparent Pricing
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B4D3E] mt-1 font-display">
            Start free, upgrade whenever you need extra help
          </h2>
          <p className="text-sm text-[#1B3A34]/80 mt-2">
            No paywall on our knowledge. Every single guide is completely free to read.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Plan Card */}
          <div className="bg-white rounded-3xl border border-[#E0ECE6] p-8 flex flex-col justify-between shadow-xs">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-[#1B4D3E]">Free Plan</h3>
                <span className="text-2xl font-extrabold text-[#1B4D3E]">A$0</span>
              </div>
              <p className="text-xs text-[#1B3A34]/70">
                Ideal for independent research and reading guides at your own pace.
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-[#1B3A34] pt-2 border-t border-[#E0ECE6]">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2A9D8F] shrink-0" />
                  <span>All 13 in-depth Australian settlement guides</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2A9D8F] shrink-0" />
                  <span>Basic online checklist (browser saved)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2A9D8F] shrink-0" />
                  <span>Printable / PDF checklist download</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2A9D8F] shrink-0" />
                  <span>State variation notes (SA, VIC, NSW, QLD, WA)</span>
                </li>
              </ul>
            </div>
            <div className="pt-6">
              <button
                onClick={() => onNavigate('pricing/free')}
                className="w-full bg-[#EAF5F1] hover:bg-[#d6ece4] text-[#1B4D3E] font-bold py-3 rounded-full text-xs sm:text-sm text-center transition-colors cursor-pointer"
              >
                Use free checklist
              </button>
            </div>
          </div>

          {/* Plus Subscription Card */}
          <div className="bg-white rounded-3xl border-2 border-[#2A9D8F] p-8 flex flex-col justify-between shadow-lg relative">
            <div className="absolute -top-3.5 right-6 bg-[#E9C46A] text-[#1B3A34] text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
              Plus Membership
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#1B4D3E]">FirstYear Plus</h3>
                  <span className="text-xs text-[#1B3A34]/70">Full settlement companion</span>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-extrabold text-[#1B4D3E]">A$4.99</span>
                  <span className="text-xs text-[#1B3A34]/70 block">/ month</span>
                </div>
              </div>
              <p className="text-xs text-[#1B3A34]/80">
                or A$49 billed annually (Save 18%). Cancel anytime.
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-[#1B3A34] pt-2 border-t border-[#E0ECE6]">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2A9D8F] shrink-0" />
                  <span>Personalised 12-month settlement plan</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2A9D8F] shrink-0" />
                  <span>Task reminders (Email & SMS before deadlines)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="bg-[#FCF4DD] text-[#684C00] text-[10px] font-bold px-2 py-0.5 rounded-full">Plus</span>
                  <span>Full Rental Application Pack (Word/PDF)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="bg-[#FCF4DD] text-[#684C00] text-[10px] font-bold px-2 py-0.5 rounded-full">Plus</span>
                  <span>Condition report video walkthroughs</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="bg-[#FCF4DD] text-[#684C00] text-[10px] font-bold px-2 py-0.5 rounded-full">Plus</span>
                  <span>Interactive self-check compliance list</span>
                </li>
              </ul>

              {/* Refund and Cancel Visibility */}
              <div className="bg-[#E2F4EE] border border-[#2A9D8F]/30 rounded-2xl p-2.5 text-[11px] text-[#1B4D3E] flex items-center gap-2 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#2A9D8F] shrink-0" />
                <span>Cancel anytime with 1 click · 7-day 100% refund guarantee</span>
              </div>
            </div>
            <div className="pt-6">
              <button
                onClick={onOpenSubscribeModal}
                className="w-full bg-[#F4A261] hover:bg-[#e7924d] text-[#1B3A34] font-bold py-3 rounded-full text-xs sm:text-sm text-center shadow transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Subscribe for A$4.99/mo</span>
                <ArrowRight className="w-4 h-4 text-[#1B3A34]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Trust Section */}
      <section className="bg-white border-t border-[#E0ECE6] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-[#2A9D8F] tracking-wider uppercase">
              Our Trust Standard
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B4D3E] mt-1 font-display">
              Why newcomers can rely on FirstYear AU
            </h2>
            <p className="text-sm text-[#1B3A34]/80 mt-2">
              We know new migrants receive conflicting advice from friends and WhatsApp groups. Here is how we guarantee accuracy:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-3xl bg-[#F6FAF7] border border-[#E0ECE6] space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-2xl bg-[#E2F4EE] flex items-center justify-center text-[#1B4D3E]">
                <FileCheck className="w-5 h-5 text-[#2A9D8F]" />
              </div>
              <h3 className="text-base font-bold text-[#1B4D3E]">
                100% Verified Official Sources
              </h3>
              <p className="text-xs sm:text-sm text-[#1B3A34]/80 leading-relaxed">
                Every guide cites the exact statutory body: the ATO for tax and super, state transport departments for licences, and official state bond boards for tenancy deposits.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#F6FAF7] border border-[#E0ECE6] space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-2xl bg-[#FCF4DD] flex items-center justify-center text-[#684C00]">
                <Clock className="w-5 h-5 text-[#684C00]" />
              </div>
              <h3 className="text-base font-bold text-[#1B4D3E]">
                Explicit "Last Reviewed" Dates
              </h3>
              <p className="text-xs sm:text-sm text-[#1B3A34]/80 leading-relaxed">
                Australian rules change frequently (such as student work hour caps and state licence conversion windows). We stamp and review every page every single quarter.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#F6FAF7] border border-[#E0ECE6] space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-2xl bg-[#E2F4EE] flex items-center justify-center text-[#1B4D3E]">
                <ShieldCheck className="w-5 h-5 text-[#2A9D8F]" />
              </div>
              <h3 className="text-base font-bold text-[#1B4D3E]">
                Zero-Risk Guarantee
              </h3>
              <p className="text-xs sm:text-sm text-[#1B3A34]/80 leading-relaxed">
                We believe in complete transparency: free preview of our rental application template before paying, 1-click cancellation, and an unconditional 7-day refund guarantee.
              </p>
            </div>
          </div>

          {/* Student Stories Placeholder */}
          <div className="bg-[#F6FAF7] border border-dashed border-[#2A9D8F]/50 rounded-3xl p-8 text-center max-w-2xl mx-auto space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#E2F4EE] text-[#1B4D3E] flex items-center justify-center mx-auto">
              <Users className="w-5 h-5 text-[#2A9D8F]" />
            </div>
            <h3 className="text-lg font-bold text-[#1B4D3E]">
              Student Stories Coming Soon
            </h3>
            <p className="text-xs sm:text-sm text-[#1B3A34]/80 leading-relaxed">
              We do not invent fake star ratings or fabricated customer testimonials. We are currently documenting real arrival experiences with international students in Adelaide, Melbourne, and Sydney. Check back soon for genuine video interviews and settlement case studies.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Final Call to Action with Deep Green Gradient */}
      <section className="bg-gradient-to-r from-[#1B4D3E] to-[#2A9D8F] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display leading-tight text-white">
            Ready to take control of your first year in Australia?
          </h2>
          <p className="text-sm sm:text-base text-emerald-100 max-w-xl mx-auto">
            Stop worrying about which task comes first. Get your clear week-by-week plan right now—completely free.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('plan/overview')}
              className="w-full sm:w-auto bg-[#F4A261] hover:bg-[#e7924d] text-[#1B3A34] font-bold text-base px-8 py-3.5 rounded-full shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Start my plan</span>
              <ArrowRight className="w-4 h-4 text-[#1B3A34]" />
            </button>
            <button
              onClick={() => onNavigate('contact/chatbot')}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-semibold text-base px-6 py-3.5 rounded-full border border-white/30 transition-colors cursor-pointer"
            >
              Ask FirstYear AU a question
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
