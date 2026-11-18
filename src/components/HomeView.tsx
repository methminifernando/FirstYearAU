import React from 'react';
import { 
  ArrowRight, Star, 
  Smartphone, Home, Car, Shield, ChevronRight
} from 'lucide-react';
import heroBgImage from '../assets/images/hero_sydney_blue_1794970409970.jpg';
import { getHref } from '../utils/routing';

interface HomeViewProps {
  onNavigate: (path: string) => void;
  onOpenTemplatePreview: () => void;
  onOpenSubscribeModal: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate
}) => {
  const NavLink: React.FC<{
    path: string;
    className?: string;
    children: React.ReactNode;
  }> = ({ path, className, children }) => (
    <a
      href={getHref(path)}
      onClick={(e) => {
        if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
          e.preventDefault();
          onNavigate(path);
        }
      }}
      className={className}
    >
      {children}
    </a>
  );

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
          "Finding a genuinely practical <strong className="text-[#1B4D3E] font-semibold">new migrant guide Australia</strong> that told me what to do in order saved me from complete overwhelm. During my <strong className="text-[#1B4D3E] font-semibold">first week in Australia</strong> arrival in Adelaide, I followed FirstYear AU to <strong className="text-[#1B4D3E] font-semibold">apply for TFN online</strong> directly via the ATO for free, unlocked my debit card before the 6-week passport cutoff, and got my <strong className="text-[#1B4D3E] font-semibold">18 Plus card South Australia</strong> so I never had to risk carrying my passport around."
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
          "As newcomers with zero local credit, the <strong className="text-[#1B4D3E] font-semibold">rental application template for new migrants</strong> was worth everything. It showed us exactly <strong className="text-[#1B4D3E] font-semibold">how to rent with no rental history Australia</strong> by formatting overseas savings, employment offers, and referee letters the way Australian property managers expect. We inspected on Saturday and our Southbank lease was approved by Tuesday."
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
          "Before leaving Colombo, the <strong className="text-[#1B4D3E] font-semibold">moving to Australia checklist</strong> helped me organize everything in advance. It listed the true priority <strong className="text-[#1B4D3E] font-semibold">things to do after arriving Australia</strong> and showed me the <strong className="text-[#1B4D3E] font-semibold">best SIM card for new arrivals Australia</strong> so I had unlimited data the moment I walked out of Sydney Kingsford Smith Airport."
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
          "I needed an official <strong className="text-[#1B4D3E] font-semibold">police check international student Australia</strong> and hospital volunteering clearance in Brisbane. FirstYear AU showed me the direct Australian Federal Police portal so I avoided shady commercial websites that charge extra. Clear, honest, and zero fluff."
        </>
      )
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-20 bg-[#FBFDFB]">
      {/* 1. HERO SECTION: Edited sunny blue-sky Sydney Harbour panoramic background with original overlay & full-width text layout */}
      <section className="relative overflow-hidden min-h-[440px] lg:min-h-[480px] flex items-center border-b border-[#E0ECE6] bg-[#0E1E1A]">
        {/* Local Blue-Sky Sydney Harbour Hero Image (no CSS colour filters) */}
        <img
          src={heroBgImage}
          alt="Sydney Harbour, Opera House and city skyline on a sunny day with blue sky"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover object-center sm:object-top"
        />

        {/* Original atmospheric overlay: lets the bright blue sky photo shine through while keeping white text crisp */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/15 sm:from-[#0D1F18]/75 sm:via-[#0D1F18]/35 sm:to-transparent"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14 relative z-10 w-full">
          <div className="max-w-5xl space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-[2.5rem] xl:text-[2.85rem] font-extrabold text-white font-display leading-tight lg:whitespace-nowrap drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
              Your New Migrant Guide to Australia
            </h1>

            {/* Welcome intro paragraph (<= 2 lines on desktop) with bold key phrase and subtle shadow */}
            <p className="text-base sm:text-lg lg:text-[17px] font-medium text-white/95 leading-relaxed max-w-[685px] drop-shadow-[0_1px_6px_rgba(0,0,0,0.65)]">
              Welcome to Australia! FirstYear AU is{' '}
              <strong className="font-bold text-white">your friendly guide to settling in</strong>, with step-by-step help for everything you need in your first year. Pick your stage and see what to do next.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <NavLink
                path="plan/overview"
                className="bg-[#F4A261] hover:bg-[#e7924e] text-[#1B3A34] font-extrabold text-sm sm:text-base px-8 py-3.5 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-95"
              >
                <span>Start my plan</span>
                <ArrowRight className="w-4 h-4 text-[#1B3A34]" />
              </NavLink>
              <NavLink
                path="pricing/free"
                className="bg-white/95 hover:bg-white text-[#1B4D3E] font-bold text-sm sm:text-base px-7 py-3.5 sm:py-4 rounded-full shadow-md transition-all cursor-pointer text-center"
              >
                Download free checklist
              </NavLink>
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
            What are the essential things to do after arriving in Australia?
          </h2>
          <p className="text-sm text-[#1B3A34]/80 mt-2">
            Explore every milestone in our moving to Australia checklist with direct answers, step-by-step instructions, and official government links.
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
                  <NavLink path="get-set-up/sim-internet" className="hover:text-[#2A9D8F] flex items-center gap-1.5 text-left cursor-pointer">
                    <ChevronRight className="w-3 h-3 text-[#2A9D8F]" />
                    <span>Best SIM card for new arrivals Australia</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink path="get-set-up/bank-account" className="hover:text-[#2A9D8F] flex items-center gap-1.5 text-left cursor-pointer">
                    <ChevronRight className="w-3 h-3 text-[#2A9D8F]" />
                    <span>Open bank account Australia new arrival</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink path="get-set-up/tax-file-number" className="hover:text-[#2A9D8F] flex items-center gap-1.5 text-left cursor-pointer">
                    <ChevronRight className="w-3 h-3 text-[#2A9D8F]" />
                    <span>How to apply for a TFN online</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink path="get-set-up/superannuation" className="hover:text-[#2A9D8F] flex items-center gap-1.5 text-left cursor-pointer">
                    <ChevronRight className="w-3 h-3 text-[#2A9D8F]" />
                    <span>How does super work in Australia</span>
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="pt-5">
              <NavLink
                path="get-set-up/sim-internet"
                className="block w-full bg-[#EAF5F1] hover:bg-[#d6ece4] text-[#1B4D3E] font-bold py-2.5 px-4 rounded-full text-xs transition-colors cursor-pointer text-center"
              >
                Open Get Set-Up
              </NavLink>
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
                  <NavLink path="find-a-home/renting-inspections" className="hover:text-[#2A9D8F] flex items-center gap-1.5 text-left cursor-pointer">
                    <ChevronRight className="w-3 h-3 text-[#2A9D8F]" />
                    <span>Rent with no rental history Australia</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink path="find-a-home/bond-condition-report" className="hover:text-[#2A9D8F] flex items-center gap-1.5 text-left cursor-pointer">
                    <ChevronRight className="w-3 h-3 text-[#2A9D8F]" />
                    <span>Rental bond and condition report</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink path="find-a-home/furniture" className="hover:text-[#2A9D8F] flex items-center gap-1.5 text-left cursor-pointer">
                    <ChevronRight className="w-3 h-3 text-[#2A9D8F]" />
                    <span>Cheap furniture for students</span>
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="pt-5">
              <NavLink
                path="find-a-home/renting-inspections"
                className="block w-full bg-[#EAF5F1] hover:bg-[#d6ece4] text-[#1B4D3E] font-bold py-2.5 px-4 rounded-full text-xs transition-colors cursor-pointer text-center"
              >
                Open Find a Home
              </NavLink>
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
                  <NavLink path="get-around/public-transport" className="hover:text-[#2A9D8F] flex items-center gap-1.5 text-left cursor-pointer">
                    <ChevronRight className="w-3 h-3 text-[#2A9D8F]" />
                    <span>Public transport cards Australia</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink path="get-around/driver-licence" className="hover:text-[#2A9D8F] flex items-center gap-1.5 text-left cursor-pointer">
                    <ChevronRight className="w-3 h-3 text-[#2A9D8F]" />
                    <span>Driving on overseas licence Australia</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink path="get-around/buying-a-car" className="hover:text-[#2A9D8F] flex items-center gap-1.5 text-left cursor-pointer">
                    <ChevronRight className="w-3 h-3 text-[#2A9D8F]" />
                    <span>Buying a car &amp; PPSR check</span>
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="pt-5">
              <NavLink
                path="get-around/public-transport"
                className="block w-full bg-[#EAF5F1] hover:bg-[#d6ece4] text-[#1B4D3E] font-bold py-2.5 px-4 rounded-full text-xs transition-colors cursor-pointer text-center"
              >
                Open Get Around
              </NavLink>
            </div>
          </div>

          {/* Sub-section 4: ID & Paperwork */}
          <div className="bg-white rounded-3xl border border-[#E0ECE6] p-6 shadow-xs hover:shadow-md hover:border-[#2A9D8F] transition-all flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#E2F4EE] flex items-center justify-center text-[#1B4D3E] group-hover:bg-[#1B4D3E] group-hover:text-white transition-colors">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#1B4D3E] font-display">
                ID &amp; Paperwork
              </h3>
              <p className="text-xs text-[#1B3A34]/70 leading-relaxed">
                Official 18+ photo identity cards, AFP national police checks, and Working with Children certification.
              </p>
              <ul className="space-y-1.5 text-xs text-[#1B3A34] pt-2 border-t border-[#E0ECE6]">
                <li>
                  <NavLink path="id-and-paperwork/proof-of-age" className="hover:text-[#2A9D8F] flex items-center gap-1.5 text-left cursor-pointer">
                    <ChevronRight className="w-3 h-3 text-[#2A9D8F]" />
                    <span>Proof of Age card Australia (18+)</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink path="id-and-paperwork/police-check" className="hover:text-[#2A9D8F] flex items-center gap-1.5 text-left cursor-pointer">
                    <ChevronRight className="w-3 h-3 text-[#2A9D8F]" />
                    <span>AFP police check international student</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink path="id-and-paperwork/working-with-children" className="hover:text-[#2A9D8F] flex items-center gap-1.5 text-left cursor-pointer">
                    <ChevronRight className="w-3 h-3 text-[#2A9D8F]" />
                    <span>Working with Children Check</span>
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="pt-5">
              <NavLink
                path="id-and-paperwork/proof-of-age"
                className="block w-full bg-[#EAF5F1] hover:bg-[#d6ece4] text-[#1B4D3E] font-bold py-2.5 px-4 rounded-full text-xs transition-colors cursor-pointer text-center"
              >
                Open ID &amp; Paperwork
              </NavLink>
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
              How does our moving to Australia checklist work?
            </h2>
            <p className="text-sm text-[#1B3A34]/80 mt-2">
              We cut through conflicting social media advice so every international student and migrant knows the right order.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#F6FAF7] p-6 sm:p-7 rounded-3xl border border-[#E0ECE6] shadow-xs relative">
              <div className="w-10 h-10 rounded-full bg-[#1B4D3E] text-white font-bold flex items-center justify-center text-sm mb-4">
                1
              </div>
              <h3 className="text-lg font-bold text-[#1B4D3E] font-display">
                Choose your stage &amp; state
              </h3>
              <p className="text-sm text-[#1B3A34]/80 mt-2 leading-relaxed">
                Start before you fly or in Week 1, and review state-specific requirements for Victoria, South Australia, NSW, Queensland, or WA.
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
                Complete tasks in their natural sequence—activating a SIM card enables bank PayID, which supports your rental application and bond lodgement.
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
                Every guide links directly to official Australian Government bodies (such as ato.gov.au, Fair Trading, Service SA, and AFP) so you can confirm current rules.
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
            How newcomers use FirstYear AU in their first 12 months
          </h2>
          <p className="text-sm text-[#1B3A34]/80 mt-2">
            General examples showing how international students and skilled migrants navigate their first week and rental setup in Australia.
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
                    New Arrival Experience
                  </span>
                </div>

                {/* Testimonial Quote including organic keywords */}
                <p className="text-sm text-[#1B3A34]/85 leading-relaxed italic">
                  {item.quote}
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
            Ready to organise your first year in Australia?
          </h2>
          <p className="text-sm sm:text-base text-emerald-100 max-w-xl mx-auto">
            Stop wondering which task comes first. Open your free week-by-week moving to Australia checklist right now.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <NavLink
              path="plan/overview"
              className="w-full sm:w-auto bg-[#F4A261] hover:bg-[#e7924e] text-[#1B3A34] font-extrabold text-base px-8 py-4 rounded-full shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Start my plan</span>
              <ArrowRight className="w-4 h-4 text-[#1B3A34]" />
            </NavLink>
            <NavLink
              path="contact/chatbot"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-semibold text-base px-7 py-4 rounded-full border border-white/30 transition-colors cursor-pointer text-center"
            >
              Ask FirstYear AU a question
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};
