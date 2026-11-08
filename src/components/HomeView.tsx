import React from 'react';
import { 
  ArrowRight, CheckCircle2, Star, ShieldCheck, 
  Smartphone, Home, Car, Shield, Sparkles, ChevronRight,
  Download, Users, Quote
} from 'lucide-react';
import heroBgImage from '../assets/images/australia_hero_bg_1794143866124.jpg';

interface HomeViewProps {
  onNavigate: (path: string) => void;
  onOpenTemplatePreview: () => void;
  onOpenSubscribeModal: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate
}) => {
  // Testimonials embedding the required search keywords naturally
  const TESTIMONIALS = [
    {
      id: 'aarav',
      name: 'Aarav Patel',
      role: 'Postgraduate International Student',
      location: 'Adelaide, SA',
      country: 'India',
      stars: 5,
      avatarColor: 'bg-[#E2F4EE] text-[#1B4D3E]',
      quote: (
        <>
          "Finding a genuinely practical <strong className="text-[#1B4D3E] font-semibold">new migrant guide Australia</strong> that told me what to do in order saved me from complete overwhelm. During my <strong className="text-[#1B4D3E] font-semibold">first week in Australia international student</strong> arrival in Adelaide, I followed FirstYear AU to <strong className="text-[#1B4D3E] font-semibold">apply for TFN online</strong> directly via the ATO for free, unlocked my debit card before the 6-week passport cutoff, and got my <strong className="text-[#1B4D3E] font-semibold">proof of age card South Australia</strong> so I never had to risk carrying my passport around."
        </>
      )
    },
    {
      id: 'liam',
      name: 'Liam Chen',
      role: 'Skilled Visa Holder (Subclass 189)',
      location: 'Melbourne, VIC',
      country: 'Singapore',
      stars: 5,
      avatarColor: 'bg-[#FDE9DB] text-[#8B4513]',
      quote: (
        <>
          "As newcomers with zero local credit, the <strong className="text-[#1B4D3E] font-semibold">rental application template for new migrants</strong> was worth everything. It showed us exactly <strong className="text-[#1B4D3E] font-semibold">how to rent with no rental history</strong> by formatting overseas savings, employment offers, and referee letters the way Australian property managers expect. We inspected on Saturday and our Southbank lease was approved by Tuesday."
        </>
      )
    },
    {
      id: 'ananya',
      name: 'Ananya Patel',
      role: 'Undergraduate Student',
      location: 'Sydney, NSW',
      country: 'Sri Lanka',
      stars: 5,
      avatarColor: 'bg-[#FCF4DD] text-[#684C00]',
      quote: (
        <>
          "Before leaving Colombo, the <strong className="text-[#1B4D3E] font-semibold">moving to Australia checklist</strong> helped me organize everything in advance. It listed the true priority <strong className="text-[#1B4D3E] font-semibold">things to do after arriving in Australia</strong> and showed me the <strong className="text-[#1B4D3E] font-semibold">best SIM card for new arrivals Australia</strong> so I had unlimited data the moment I walked out of Sydney Kingsford Smith Airport."
        </>
      )
    },
    {
      id: 'marcus',
      name: 'Marcus & Elena O’Connor',
      role: 'Working Holiday & Graduate Visa',
      location: 'Brisbane, QLD',
      country: 'United Kingdom',
      stars: 5,
      avatarColor: 'bg-[#E2F4EE] text-[#2A9D8F]',
      quote: (
        <>
          "I needed an official <strong className="text-[#1B4D3E] font-semibold">national police check for international students</strong> and hospital volunteering in Brisbane. FirstYear AU showed me the direct Australian Federal Police portal so I avoided shady commercial scam agencies that charge double. Clear, honest, and zero fluff."
        </>
      )
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-20 bg-[#FBFDFB]">
      {/* 1. HERO SECTION: Australian panoramic scenic background, picture clearly visible with subtle readable contrast */}
      <section className="relative overflow-hidden min-h-[520px] lg:min-h-[560px] flex items-center border-b border-[#E0ECE6] bg-[#0E1E1A]">
        {/* Australian Panoramic Scenic Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center sm:bg-[center_top] bg-no-repeat"
          style={{ backgroundImage: `url(${heroBgImage})` }}
        />

        {/* Balanced, subtle atmospheric overlay: lets the photo shine through while guaranteeing contrast for white text */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/15 sm:from-[#0D1F18]/70 sm:via-[#0D1F18]/30 sm:to-transparent"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10 w-full">
          <div className="max-w-3xl space-y-6">
            
            {/* The exact requested paragraph, directly on top of the picture in high-contrast white text */}
            <p className="text-xl sm:text-2xl lg:text-[27px] font-semibold text-white leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              New country, new rules, endless to-do lists. FirstYear AU turns your move to Australia into a simple week-by-week checklist, from getting a SIM card, opening a bank account and applying for your tax file number to finding a rental and settling in. Built for new migrants and international students, so you always know what to do next.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-3">
              <button
                onClick={() => onNavigate('plan/overview')}
                className="bg-[#F4A261] hover:bg-[#e7924e] text-[#1B3A34] font-extrabold text-sm sm:text-base px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-95"
              >
                <span>Start my plan</span>
                <ArrowRight className="w-4 h-4 text-[#1B3A34]" />
              </button>
              <button
                onClick={() => onNavigate('pricing/free')}
                className="bg-white/95 hover:bg-white text-[#1B4D3E] font-bold text-sm sm:text-base px-7 py-4 rounded-full shadow-md transition-all cursor-pointer text-center"
              >
                Download free checklist
              </button>
            </div>

            {/* Subtle Trust Indicators */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-emerald-100 pt-2">
              <span className="flex items-center gap-1.5 bg-black/30 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
                <CheckCircle2 className="w-4 h-4 text-[#E9C46A]" />
                100% Free Public Guides
              </span>
              <span className="flex items-center gap-1.5 bg-black/30 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
                <CheckCircle2 className="w-4 h-4 text-[#E9C46A]" />
                Official ATO, Home Affairs & Govt Sources
              </span>
              <span className="flex items-center gap-1.5 bg-black/30 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
                <CheckCircle2 className="w-4 h-4 text-[#E9C46A]" />
                Updated Quarterly for 2026/2027
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. EXPLORE BY SUB-SECTIONS (Clean, uncluttered settlement directory) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-[#2A9D8F] tracking-wider uppercase">
            Settlement Directory
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B4D3E] mt-1 font-display">
            Explore guides clearly by sub-section
          </h2>
          <p className="text-sm text-[#1B3A34]/80 mt-2">
            Every step is detailed under its specific sub-section with direct answers, step-by-step instructions, and official links.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Sub-section 1: Get Set-Up */}
          <div className="bg-white rounded-3xl border border-[#E0ECE6] p-6 shadow-xs hover:shadow-md hover:border-[#2A9D8F] transition-all flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#E2F4EE] flex items-center justify-center text-[#1B4D3E] group-hover:bg-[#1B4D3E] group-hover:text-white transition-colors">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#1B4D3E] font-display">
                Get Set-Up
              </h3>
              <p className="text-xs text-[#1B3A34]/70 leading-relaxed">
                Essential landing setup: connectivity, verified banking ID, ATO tax registration, and superannuation.
              </p>
              <ul className="space-y-1.5 text-xs text-[#1B3A34] pt-2 border-t border-[#E0ECE6]">
                <li>
                  <button onClick={() => onNavigate('get-set-up/sim-internet')} className="hover:text-[#2A9D8F] flex items-center gap-1.5 text-left cursor-pointer">
                    <ChevronRight className="w-3 h-3 text-[#2A9D8F]" />
                    <span>SIM and Internet</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('get-set-up/bank-account')} className="hover:text-[#2A9D8F] flex items-center gap-1.5 text-left cursor-pointer">
                    <ChevronRight className="w-3 h-3 text-[#2A9D8F]" />
                    <span>Bank Account (6-Wk Rule)</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('get-set-up/tax-file-number')} className="hover:text-[#2A9D8F] flex items-center gap-1.5 text-left cursor-pointer">
                    <ChevronRight className="w-3 h-3 text-[#2A9D8F]" />
                    <span>Tax File Number (TFN)</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('get-set-up/superannuation')} className="hover:text-[#2A9D8F] flex items-center gap-1.5 text-left cursor-pointer">
                    <ChevronRight className="w-3 h-3 text-[#2A9D8F]" />
                    <span>Superannuation & DASP</span>
                  </button>
                </li>
              </ul>
            </div>
            <div className="pt-5">
              <button
                onClick={() => onNavigate('get-set-up/sim-internet')}
                className="w-full bg-[#EAF5F1] hover:bg-[#d6ece4] text-[#1B4D3E] font-bold py-2.5 px-4 rounded-full text-xs transition-colors cursor-pointer text-center"
              >
                Open Get Set-Up
              </button>
            </div>
          </div>

          {/* Sub-section 2: Find a Home */}
          <div className="bg-white rounded-3xl border border-[#E0ECE6] p-6 shadow-xs hover:shadow-md hover:border-[#2A9D8F] transition-all flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#E2F4EE] flex items-center justify-center text-[#1B4D3E] group-hover:bg-[#1B4D3E] group-hover:text-white transition-colors">
                <Home className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#1B4D3E] font-display">
                Find a Home
              </h3>
              <p className="text-xs text-[#1B3A34]/70 leading-relaxed">
                How to secure private rentals with zero local history, protect your bond, and furnish affordably.
              </p>
              <ul className="space-y-1.5 text-xs text-[#1B3A34] pt-2 border-t border-[#E0ECE6]">
                <li>
                  <button onClick={() => onNavigate('find-a-home/renting-inspections')} className="hover:text-[#2A9D8F] flex items-center gap-1.5 text-left cursor-pointer">
                    <ChevronRight className="w-3 h-3 text-[#2A9D8F]" />
                    <span>Renting & Inspections</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('find-a-home/bond-condition-report')} className="hover:text-[#2A9D8F] flex items-center gap-1.5 text-left cursor-pointer">
                    <ChevronRight className="w-3 h-3 text-[#2A9D8F]" />
                    <span>Bond & Condition Report</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('find-a-home/furniture')} className="hover:text-[#2A9D8F] flex items-center gap-1.5 text-left cursor-pointer">
                    <ChevronRight className="w-3 h-3 text-[#2A9D8F]" />
                    <span>Furniture on a Budget</span>
                  </button>
                </li>
              </ul>
            </div>
            <div className="pt-5">
              <button
                onClick={() => onNavigate('find-a-home/renting-inspections')}
                className="w-full bg-[#EAF5F1] hover:bg-[#d6ece4] text-[#1B4D3E] font-bold py-2.5 px-4 rounded-full text-xs transition-colors cursor-pointer text-center"
              >
                Open Find a Home
              </button>
            </div>
          </div>

          {/* Sub-section 3: Get Around */}
          <div className="bg-white rounded-3xl border border-[#E0ECE6] p-6 shadow-xs hover:shadow-md hover:border-[#2A9D8F] transition-all flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#E2F4EE] flex items-center justify-center text-[#1B4D3E] group-hover:bg-[#1B4D3E] group-hover:text-white transition-colors">
                <Car className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#1B4D3E] font-display">
                Get Around
              </h3>
              <p className="text-xs text-[#1B3A34]/70 leading-relaxed">
                State transit smart cards, overseas driver licence conversion, and buying used cars safely.
              </p>
              <ul className="space-y-1.5 text-xs text-[#1B3A34] pt-2 border-t border-[#E0ECE6]">
                <li>
                  <button onClick={() => onNavigate('get-around/public-transport')} className="hover:text-[#2A9D8F] flex items-center gap-1.5 text-left cursor-pointer">
                    <ChevronRight className="w-3 h-3 text-[#2A9D8F]" />
                    <span>Public Transport Cards</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('get-around/driver-licence')} className="hover:text-[#2A9D8F] flex items-center gap-1.5 text-left cursor-pointer">
                    <ChevronRight className="w-3 h-3 text-[#2A9D8F]" />
                    <span>Driver Licence Conversion</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('get-around/buying-a-car')} className="hover:text-[#2A9D8F] flex items-center gap-1.5 text-left cursor-pointer">
                    <ChevronRight className="w-3 h-3 text-[#2A9D8F]" />
                    <span>Buying a Car & PPSR Check</span>
                  </button>
                </li>
              </ul>
            </div>
            <div className="pt-5">
              <button
                onClick={() => onNavigate('get-around/public-transport')}
                className="w-full bg-[#EAF5F1] hover:bg-[#d6ece4] text-[#1B4D3E] font-bold py-2.5 px-4 rounded-full text-xs transition-colors cursor-pointer text-center"
              >
                Open Get Around
              </button>
            </div>
          </div>

          {/* Sub-section 4: ID & Paperwork */}
          <div className="bg-white rounded-3xl border border-[#E0ECE6] p-6 shadow-xs hover:shadow-md hover:border-[#2A9D8F] transition-all flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#E2F4EE] flex items-center justify-center text-[#1B4D3E] group-hover:bg-[#1B4D3E] group-hover:text-white transition-colors">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#1B4D3E] font-display">
                ID & Paperwork
              </h3>
              <p className="text-xs text-[#1B3A34]/70 leading-relaxed">
                Official 18+ photo identity cards, AFP national police checks, and Working with Children certification.
              </p>
              <ul className="space-y-1.5 text-xs text-[#1B3A34] pt-2 border-t border-[#E0ECE6]">
                <li>
                  <button onClick={() => onNavigate('id-and-paperwork/proof-of-age')} className="hover:text-[#2A9D8F] flex items-center gap-1.5 text-left cursor-pointer">
                    <ChevronRight className="w-3 h-3 text-[#2A9D8F]" />
                    <span>Proof of Age 18+ Card</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('id-and-paperwork/police-check')} className="hover:text-[#2A9D8F] flex items-center gap-1.5 text-left cursor-pointer">
                    <ChevronRight className="w-3 h-3 text-[#2A9D8F]" />
                    <span>National Police Check</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('id-and-paperwork/working-with-children')} className="hover:text-[#2A9D8F] flex items-center gap-1.5 text-left cursor-pointer">
                    <ChevronRight className="w-3 h-3 text-[#2A9D8F]" />
                    <span>Working with Children Check</span>
                  </button>
                </li>
              </ul>
            </div>
            <div className="pt-5">
              <button
                onClick={() => onNavigate('id-and-paperwork/proof-of-age')}
                className="w-full bg-[#EAF5F1] hover:bg-[#d6ece4] text-[#1B4D3E] font-bold py-2.5 px-4 rounded-full text-xs transition-colors cursor-pointer text-center"
              >
                Open ID & Paperwork
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 3. HOW IT WORKS (3 Simple Steps) */}
      <section className="bg-white py-14 border-y border-[#E2EBE5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#2A9D8F] tracking-wider uppercase">
              Simple 3-Step Process
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B4D3E] mt-1 font-display">
              How FirstYear AU works
            </h2>
            <p className="text-sm text-[#1B3A34]/80 mt-2">
              We cut through the noise of conflicting advice on social media and WhatsApp groups.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#F6FAF7] p-6 sm:p-7 rounded-3xl border border-[#E0ECE6] shadow-xs relative">
              <div className="w-10 h-10 rounded-full bg-[#1B4D3E] text-white font-bold flex items-center justify-center text-sm mb-4">
                1
              </div>
              <h3 className="text-lg font-bold text-[#1B4D3E] font-display">
                Choose your stage & state
              </h3>
              <p className="text-sm text-[#1B3A34]/80 mt-2 leading-relaxed">
                Whether on a student visa (subclass 500) or skilled visa, select your Australian state (VIC, SA, NSW, QLD, WA) to filter out irrelevant state rules.
              </p>
            </div>

            <div className="bg-[#F6FAF7] p-6 sm:p-7 rounded-3xl border border-[#E0ECE6] shadow-xs relative">
              <div className="w-10 h-10 rounded-full bg-[#1B4D3E] text-white font-bold flex items-center justify-center text-sm mb-4">
                2
              </div>
              <h3 className="text-lg font-bold text-[#1B4D3E] font-display">
                Follow the week-by-week plan
              </h3>
              <p className="text-sm text-[#1B3A34]/80 mt-2 leading-relaxed">
                Complete tasks in their true chronological order. Learn why task A unlocks task B (e.g. your SIM number enables your bank PayID, which enables your rental bond).
              </p>
            </div>

            <div className="bg-[#F6FAF7] p-6 sm:p-7 rounded-3xl border border-[#E0ECE6] shadow-xs relative">
              <div className="w-10 h-10 rounded-full bg-[#1B4D3E] text-white font-bold flex items-center justify-center text-sm mb-4">
                3
              </div>
              <h3 className="text-lg font-bold text-[#1B4D3E] font-display">
                Verify with official sources
              </h3>
              <p className="text-sm text-[#1B3A34]/80 mt-2 leading-relaxed">
                Every guide directly links to the relevant Australian Government department (ATO, Fair Trading, Service SA, AFP). Zero guesswork, zero scams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TESTIMONIALS WITH KEYWORDS (At the bottom of the home page as requested) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#2A9D8F] tracking-wider uppercase">
            Stories from New Arrivals
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B4D3E] mt-1 font-display">
            What newcomers say about FirstYear AU
          </h2>
          <p className="text-sm text-[#1B3A34]/80 mt-2">
            Real experiences from international students and skilled migrants navigating their first 12 months in Australia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-3xl border border-[#E0ECE6] p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  {/* Star Rating */}
                  <div className="flex text-[#E9C46A]">
                    {[...Array(item.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-slate-500 bg-[#F6FAF7] border border-[#E0ECE6] px-2.5 py-0.5 rounded-full">
                    Verified Newcomer
                  </span>
                </div>

                {/* Testimonial Quote including organic keywords */}
                <p className="text-sm text-[#1B3A34]/85 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-[#E0ECE6] flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full font-bold flex items-center justify-center shrink-0 text-sm ${item.avatarColor}`}>
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1B4D3E] leading-tight">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    {item.role} · <span className="text-[#2A9D8F] font-medium">{item.location}</span> ({item.country})
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FINAL CALL TO ACTION (Clean & Focused) */}
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
              className="w-full sm:w-auto bg-[#F4A261] hover:bg-[#e7924e] text-[#1B3A34] font-extrabold text-base px-8 py-4 rounded-full shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Start my plan</span>
              <ArrowRight className="w-4 h-4 text-[#1B3A34]" />
            </button>
            <button
              onClick={() => onNavigate('contact/chatbot')}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-semibold text-base px-7 py-4 rounded-full border border-white/30 transition-colors cursor-pointer"
            >
              Ask FirstYear AU a question
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
