import React from 'react';
import { 
  ShieldCheck, FileText, CheckCircle2, HeartHandshake, 
  Compass, ArrowRight, Eye, Scale, Sparkles, Building, ExternalLink 
} from 'lucide-react';
import sitemapDiagram from '../assets/sitemap.png';

interface AboutViewProps {
  subPage: 'story' | 'how-we-work';
  onNavigate: (path: string) => void;
  onOpenSubscribeModal: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  subPage,
  onNavigate,
  onOpenSubscribeModal
}) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12">
      {/* Subpage Switcher Tabs */}
      <div className="flex items-center justify-center">
        <div className="bg-white p-1 rounded-full flex items-center border border-[#E0ECE6] shadow-xs text-xs sm:text-sm font-semibold">
          <button
            onClick={() => onNavigate('about/story')}
            className={`px-6 py-2 rounded-full transition-all cursor-pointer ${
              subPage === 'story'
                ? 'bg-[#1B4D3E] text-white shadow-xs'
                : 'text-[#1B3A34]/70 hover:text-[#1B4D3E]'
            }`}
          >
            Our story
          </button>
          <button
            onClick={() => onNavigate('about/how-we-work')}
            className={`px-6 py-2 rounded-full transition-all cursor-pointer ${
              subPage === 'how-we-work'
                ? 'bg-[#1B4D3E] text-white shadow-xs'
                : 'text-[#1B3A34]/70 hover:text-[#1B4D3E]'
            }`}
          >
            How we work
          </button>
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
              Why we started: Turning Australian settlement chaos into clarity
            </h1>
            <p className="text-base text-[#1B3A34]/80 leading-relaxed">
              Every year, over 500,000 international students and skilled visa holders arrive in Australia. Almost all of them face the same painful shock: nobody tells you which tasks come first, or how they connect.
            </p>
          </div>

          {/* Narrative Content */}
          <div className="bg-white rounded-3xl border border-[#E0ECE6] p-6 sm:p-10 space-y-6 text-[#1B3A34] leading-relaxed text-sm sm:text-base shadow-xs">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1B4D3E]">
              The Problem: Scattered Rules, Unfamiliar Words & Culture Shock
            </h2>
            <p>
              When a newcomer lands at Sydney, Melbourne, Brisbane, or Adelaide airport, they are bombarded with conflicting advice. Friends suggest one thing, social media reels suggest another, and bank clerks ask for "100 points of ID" without explaining what that means.
            </p>
            <p>
              Worse, Australian bureaucracy is split across different government tiers:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-[#1B3A34]/80">
              <li><strong>Federal Government</strong> controls visas, tax file numbers (ATO), and superannuation.</li>
              <li><strong>State Governments</strong> control public transport smart cards, driver licensing, rental bond authorities, and working with children checks.</li>
              <li><strong>Local City Councils</strong> govern municipal waste, kerbside collections, and library proof-of-address.</li>
            </ul>
            <p>
              Because no single government department explains the full journey, newcomers get stuck in "Catch-22" loops: you can’t get a rental without a bank statement, you can’t unlock your bank account without proof of address, and you can’t get proof of address without a rental.
            </p>

            <div className="bg-[#F6FAF7] border border-[#2A9D8F]/30 p-5 rounded-2xl my-6">
              <h3 className="text-base font-bold text-[#1B4D3E] mb-1">
                Who We Build For: New Migrants & International Students
              </h3>
              <p className="text-sm text-[#1B3A34]/80">
                Whether you are an international student landing for university in Adelaide, Melbourne, or Sydney, a skilled professional on a work visa, or a newcomer starting fresh with your family—everyone faces unfamiliar Australian terminology ("rego", "bond", "condition report", "TFN"), zero local credit history, and conflicting state-by-state advice. FirstYear AU was designed from the ground up to give every new arrival a trusted, step-by-step roadmap to settle in Australia with total peace of mind.
              </p>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-[#1B4D3E]">
              Our Mission: A Clear, Week-by-Week Path
            </h2>
            <p>
              We created FirstYear AU to turn this confusing maze into a calm, sequential plan: <strong>what to do, when to do it, and why, in plain English</strong>. We believe access to accurate settlement information is a fundamental right, which is why all our foundational guides are completely free to read with zero sign-up wall.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#E0ECE6]">
              <span className="text-xs text-[#1B3A34]/70">
                Want to know how we ensure our information remains 100% accurate?
              </span>
              <button
                onClick={() => onNavigate('about/how-we-work')}
                className="bg-[#F4A261] hover:bg-[#e7924d] text-[#1B3A34] font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full shadow-sm transition-all cursor-pointer inline-flex items-center gap-1.5"
              >
                <span>See how we work</span>
                <ArrowRight className="w-4 h-4 text-[#1B3A34]" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Subpage 2: How We Work */}
      {subPage === 'how-we-work' && (
        <div className="space-y-10 animate-in fade-in duration-200">
          <div className="space-y-3 text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold text-[#2A9D8F] tracking-wider uppercase">
              Standards & Integrity
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1B4D3E] font-display">
              How we work: Official sources, rigorous review & independence
            </h1>
            <p className="text-base text-[#1B3A34]/80 leading-relaxed">
              We know misinformation causes fines, rejected leases, and immense visa anxiety. Here is the strict editorial constitution that governs every guide we publish.
            </p>
          </div>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-[#E0ECE6] space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-2xl bg-[#E2F4EE] flex items-center justify-center text-[#1B4D3E]">
                <FileText className="w-5 h-5 text-[#2A9D8F]" />
              </div>
              <h2 className="text-lg font-bold text-[#1B4D3E]">1. Official Government Sources Only</h2>
              <p className="text-xs sm:text-sm text-[#1B3A34]/80 leading-relaxed">
                We never base our guides on forum rumors or informal advice. Every rule is cross-referenced with legislation from the Australian Taxation Office (ATO), Department of Home Affairs, Australian Communications and Media Authority (ACMA), Australian Federal Police (AFP), and state tenancy and licensing authorities (Consumer Affairs Victoria, NSW Fair Trading, Service SA).
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-[#E0ECE6] space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-2xl bg-[#FCF4DD] flex items-center justify-center text-[#684C00]">
                <Scale className="w-5 h-5 text-[#684C00]" />
              </div>
              <h2 className="text-lg font-bold text-[#1B4D3E]">2. Quarterly Review & "Last Reviewed" Dates</h2>
              <p className="text-xs sm:text-sm text-[#1B3A34]/80 leading-relaxed">
                Migration settings and state transport fees change regularly. Our settlement research team audits every page quarterly, checking fee schedules, concession eligibility, and regulatory updates. Every guide prominently displays its "Last reviewed" date and reviewer credentials.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-[#E0ECE6] space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-2xl bg-[#E2F4EE] flex items-center justify-center text-[#1B4D3E]">
                <ShieldCheck className="w-5 h-5 text-[#2A9D8F]" />
              </div>
              <h2 className="text-lg font-bold text-[#1B4D3E]">3. Editorial Independence</h2>
              <p className="text-xs sm:text-sm text-[#1B3A34]/80 leading-relaxed">
                Commercial partners cannot buy editorial placement or alter our advice. If an official government pathway is free (such as applying for a TFN on ato.gov.au or checking vehicle VINs on ppsr.gov.au for $2), we say so loudly and explicitly warn users against commercial markup scams.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-[#E0ECE6] space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-2xl bg-[#E2F4EE] flex items-center justify-center text-[#1B4D3E]">
                <HeartHandshake className="w-5 h-5 text-[#2A9D8F]" />
              </div>
              <h2 className="text-lg font-bold text-[#1B4D3E]">4. Full Partner Disclosure</h2>
              <p className="text-xs sm:text-sm text-[#1B3A34]/80 leading-relaxed">
                To sustain our free guides, we feature selected partner offers (e.g. mobile SIMs, NBN fibre, and student furniture packages). Every partner offer is explicitly labelled as a "Disclosed Partner Offer". We only partner with providers that offer genuine, verified value for newcomers.
              </p>
            </div>
          </div>

          {/* Website Structure Diagram from User Attachment */}
          <div className="bg-white rounded-3xl border border-[#E0ECE6] p-6 sm:p-8 space-y-4 shadow-xs">
            <div className="flex items-center justify-between pb-3 border-b border-[#E0ECE6]">
              <div className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-[#2A9D8F]" />
                <h3 className="font-bold text-[#1B4D3E] text-base">
                  FirstYear AU Architectural Sitemap & Hierarchy
                </h3>
              </div>
              <span className="text-xs text-[#2A9D8F] font-bold">
                Verified Site Blueprint
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#1B3A34]/80 leading-relaxed">
              Below is the verified structural sitemap for the FirstYear AU platform, detailing how each tier flows seamlessly into sequential settlement milestones:
            </p>
            <div className="border border-[#E0ECE6] rounded-2xl overflow-hidden bg-[#F6FAF7] p-2 sm:p-4 flex items-center justify-center">
              <img
                src={sitemapDiagram}
                alt="FirstYear AU Website and Content Plan Sitemap Diagram"
                className="max-w-full h-auto rounded-xl shadow-xs"
                loading="lazy"
              />
            </div>
          </div>

          {/* Action Row */}
          <div className="bg-gradient-to-r from-[#1B4D3E] to-[#2A9D8F] text-white p-6 sm:p-8 rounded-3xl shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-white text-base sm:text-lg">
                Ready to review the full 12-Month Settlement Plan?
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100 mt-0.5">
                Start with Week 1 tasks or download the free printable checklist.
              </p>
            </div>
            <button
              onClick={() => onNavigate('plan/overview')}
              className="bg-[#F4A261] hover:bg-[#e7924d] text-[#1B3A34] font-bold text-xs sm:text-sm px-7 py-3 rounded-full shadow-sm transition-all cursor-pointer inline-flex items-center gap-2 shrink-0 active:scale-95"
            >
              <span>Explore 12-Month Plan</span>
              <ArrowRight className="w-4 h-4 text-[#1B3A34]" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
