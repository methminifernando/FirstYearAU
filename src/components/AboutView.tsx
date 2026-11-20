import React from 'react';
import { 
  ShieldCheck, FileText, HeartHandshake, 
  ArrowRight, Scale
} from 'lucide-react';
import studentsCampusImg from '../assets/images/students_in_australia_1794143904293.jpg';
import editorialTeamImg from '../assets/images/about_editorial_team_1795006583992.jpg';
import { getHref } from '../utils/routing';

interface AboutViewProps {
  subPage: 'story' | 'how-we-work';
  onNavigate: (path: string) => void;
  onOpenSubscribeModal: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  subPage,
  onNavigate
}) => {

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12">
      {/* Subpage Switcher Tabs */}
      <div className="flex items-center justify-center">
        <div className="bg-white p-1 rounded-full flex items-center border border-[#E0ECE6] shadow-xs text-xs sm:text-sm font-semibold">
          <a
            href={getHref('about/story')}
            onClick={(e) => {
              if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                e.preventDefault();
                onNavigate('about/story');
              }
            }}
            className={`px-6 py-2 rounded-full transition-all cursor-pointer ${
              subPage === 'story'
                ? 'bg-[#1B4D3E] text-white shadow-xs'
                : 'text-[#1B3A34]/70 hover:text-[#1B4D3E]'
            }`}
          >
            Our story
          </a>
          <a
            href={getHref('about/how-we-work')}
            onClick={(e) => {
              if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                e.preventDefault();
                onNavigate('about/how-we-work');
              }
            }}
            className={`px-6 py-2 rounded-full transition-all cursor-pointer ${
              subPage === 'how-we-work'
                ? 'bg-[#1B4D3E] text-white shadow-xs'
                : 'text-[#1B3A34]/70 hover:text-[#1B4D3E]'
            }`}
          >
            How we work
          </a>
        </div>
      </div>

      {/* Subpage 1: Our Story */}
      {subPage === 'story' && (
        <div className="space-y-10 animate-in fade-in duration-200">
          <div className="space-y-3 text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold text-[#2A9D8F] tracking-wider uppercase">
              The FirstYear AU Story
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1B4D3E] font-display">
              About FirstYear AU: New Migrant Guide Australia
            </h1>
            <p className="text-base text-[#1B3A34]/80 leading-relaxed">
              Every year, international students and skilled visa holders arrive across Australia facing the same hurdle: nobody explains which everyday setup tasks come first or how they fit together. We created this new migrant guide Australia to bring all foundational steps into one clear timeline, with reminders to confirm current rules on official sites such as ato.gov.au and homeaffairs.gov.au.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden border border-[#E0ECE6] shadow-sm bg-white">
            <img
              src={studentsCampusImg}
              alt="International students and newcomers connecting on a sunny Australian university campus"
              referrerPolicy="no-referrer"
              className="w-full h-56 sm:h-80 object-cover"
            />
          </div>

          {/* Narrative Content */}
          <div className="bg-white rounded-3xl border border-[#E0ECE6] p-6 sm:p-10 space-y-6 text-[#1B3A34] leading-relaxed text-sm sm:text-base shadow-xs">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1B4D3E]">
              Why do new arrivals struggle with Australian rules and terminology?
            </h2>
            <p>
              When a newcomer lands at Sydney, Melbourne, Brisbane, or Adelaide airport, information is scattered across government agencies, banks, and social media chats. Bank staff ask for 100 points of ID without explaining what qualifies, and landlords ask for rental history new migrants have not yet built.
            </p>
            <p>
              Australian services are also split across three levels of government:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-[#1B3A34]/80">
              <li><strong>Federal Government</strong> administers visas (Department of Home Affairs), Tax File Numbers and superannuation (ato.gov.au).</li>
              <li><strong>State Governments</strong> run public transport cards, driver licensing, rental bond authorities, Proof of Age cards, and Working with Children Checks.</li>
              <li><strong>Local City Councils</strong> manage household waste rules and community services.</li>
            </ul>
            <p>
              Because no single government portal maps the end-to-end journey, newcomers get caught in frustrating loops—needing a local phone number for banking, and needing bank statements to apply for a rental home.
            </p>

            <div className="bg-[#F6FAF7] border border-[#2A9D8F]/30 p-5 rounded-2xl my-6">
              <h3 className="text-base font-bold text-[#1B4D3E] mb-1">
                Who We Build For: New Migrants &amp; International Students
              </h3>
              <p className="text-sm text-[#1B3A34]/80">
                Whether you are an international student starting university in Adelaide, Melbourne, or Sydney, a skilled professional on a work visa, or a family settling in—everyone encounters unfamiliar terms (&quot;rego&quot;, &quot;bond&quot;, &quot;condition report&quot;, &quot;TFN&quot;). FirstYear AU gives every newcomer a trusted roadmap without providing visa or migration advice.
              </p>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-[#1B4D3E]">
              How does our moving to Australia checklist keep things simple?
            </h2>
            <p>
              FirstYear AU turns a confusing first year into a clear week-by-week plan: <strong>what to do, when to do it and why, in plain English</strong>. All 13 core guides are free to read anytime, with direct links to start your{' '}
              <a
                href={getHref('plan/week-1')}
                onClick={(e) => {
                  if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                    e.preventDefault();
                    onNavigate('plan/week-1');
                  }
                }}
                className="text-[#2A9D8F] font-semibold underline hover:text-[#1B4D3E]"
              >
                first week in Australia checklist
              </a>.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#E0ECE6]">
              <span className="text-xs text-[#1B3A34]/70">
                Want to know how we verify every settlement guide?
              </span>
              <a
                href={getHref('about/how-we-work')}
                onClick={(e) => {
                  if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                    e.preventDefault();
                    onNavigate('about/how-we-work');
                  }
                }}
                className="bg-[#F4A261] hover:bg-[#e7924d] text-[#1B3A34] font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full shadow-sm transition-all cursor-pointer inline-flex items-center gap-1.5"
              >
                <span>See how we work</span>
                <ArrowRight className="w-4 h-4 text-[#1B3A34]" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Subpage 2: How We Work */}
      {subPage === 'how-we-work' && (
        <div className="space-y-10 animate-in fade-in duration-200">
          <div className="space-y-3 text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold text-[#2A9D8F] tracking-wider uppercase">
              Standards &amp; Integrity
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1B4D3E] font-display">
              Official Australian Settlement Sources &amp; How We Work
            </h1>
            <p className="text-base text-[#1B3A34]/80 leading-relaxed">
              Clear settlement information depends on checking primary government portals. Here is how FirstYear AU researches every guide, marks Last Reviewed dates, and clearly labels partner offers so readers can verify rules independently.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden border border-[#E0ECE6] shadow-sm bg-white">
            <img
              src={editorialTeamImg}
              alt="FirstYear AU editors reviewing official Australian federal and state settlement portals"
              referrerPolicy="no-referrer"
              className="w-full h-52 sm:h-72 object-cover"
            />
          </div>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-[#E0ECE6] space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-2xl bg-[#E2F4EE] flex items-center justify-center text-[#1B4D3E]">
                <FileText className="w-5 h-5 text-[#2A9D8F]" />
              </div>
              <h2 className="text-lg font-bold text-[#1B4D3E]">1. How do we verify official government sources?</h2>
              <p className="text-xs sm:text-sm text-[#1B3A34]/80 leading-relaxed">
                We cross-reference guides against Australian Taxation Office (ato.gov.au), Department of Home Affairs, ACMA, Australian Federal Police (afp.gov.au), and state agencies (Consumer Affairs Victoria, NSW Fair Trading, Service SA, RTBA) rather than unverified social forums.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-[#E0ECE6] space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-2xl bg-[#FCF4DD] flex items-center justify-center text-[#684C00]">
                <Scale className="w-5 h-5 text-[#684C00]" />
              </div>
              <h2 className="text-lg font-bold text-[#1B4D3E]">2. Why do we display Last Reviewed dates?</h2>
              <p className="text-xs sm:text-sm text-[#1B3A34]/80 leading-relaxed">
                State fees, concession rules, and reporting periods change over time. Every guide states its reviewer and Last Reviewed date while reminding readers to confirm current details directly on official government websites.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-[#E0ECE6] space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-2xl bg-[#E2F4EE] flex items-center justify-center text-[#1B4D3E]">
                <ShieldCheck className="w-5 h-5 text-[#2A9D8F]" />
              </div>
              <h2 className="text-lg font-bold text-[#1B4D3E]">3. How do we maintain editorial independence?</h2>
              <p className="text-xs sm:text-sm text-[#1B3A34]/80 leading-relaxed">
                Partners cannot alter our factual steps. Whenever an official government portal is free or low cost—such as applying for a TFN on ato.gov.au or running a vehicle check on ppsr.gov.au—we point directly to the official government option.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-[#E0ECE6] space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-2xl bg-[#E2F4EE] flex items-center justify-center text-[#1B4D3E]">
                <HeartHandshake className="w-5 h-5 text-[#2A9D8F]" />
              </div>
              <h2 className="text-lg font-bold text-[#1B4D3E]">4. How are partner offers disclosed?</h2>
              <p className="text-xs sm:text-sm text-[#1B3A34]/80 leading-relaxed">
                Every commercial link on our{' '}
                <a
                  href={getHref('pricing/partners')}
                  onClick={(e) => {
                    if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                      e.preventDefault();
                      onNavigate('pricing/partners');
                    }
                  }}
                  className="text-[#2A9D8F] underline font-semibold"
                >
                  partner offers page
                </a>{' '}
                carries a clear affiliate disclosure label so you always know how FirstYear AU is funded.
              </p>
            </div>
          </div>

          {/* Action Row */}
          <div className="bg-gradient-to-r from-[#1B4D3E] to-[#2A9D8F] text-white p-6 sm:p-8 rounded-3xl shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h2 className="font-bold text-white text-base sm:text-lg">
                Ready to open the 12-Month New Migrant Setup Guide?
              </h2>
              <p className="text-xs sm:text-sm text-emerald-100 mt-0.5">
                Start with Week 1 tasks or download the free printable checklist.
              </p>
            </div>
            <a
              href={getHref('plan/overview')}
              onClick={(e) => {
                if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                  e.preventDefault();
                  onNavigate('plan/overview');
                }
              }}
              className="bg-[#F4A261] hover:bg-[#e7924d] text-[#1B3A34] font-bold text-xs sm:text-sm px-7 py-3 rounded-full shadow-sm transition-all cursor-pointer inline-flex items-center gap-2 shrink-0 active:scale-95"
            >
              <span>Explore 12-Month Plan</span>
              <ArrowRight className="w-4 h-4 text-[#1B3A34]" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
