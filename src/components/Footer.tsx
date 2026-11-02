import React from 'react';
import { Compass, ShieldCheck, HeartHandshake, FileText, ArrowRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenGlossary: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenGlossary }) => {
  return (
    <footer className="bg-[#1B4D3E] text-emerald-100/90 border-t border-[#2A9D8F]/30 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid: 5 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-[#2A9D8F]/30">
          {/* Brand & Purpose */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#2A9D8F] flex items-center justify-center">
                <Compass className="w-4 h-4 text-[#E9C46A]" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-display">
                FirstYear <span className="text-[#E9C46A]">AU</span>
              </span>
            </div>

            <p className="text-sm text-emerald-100/80 leading-relaxed max-w-sm">
              FirstYear AU turns a confusing first year into a clear week-by-week plan: what to do, when to do it and why, in plain English.
            </p>

            <div className="bg-[#143B2F] p-4 rounded-2xl border border-[#2A9D8F]/30 text-xs text-emerald-100/90 space-y-2 shadow-xs">
              <div className="flex items-center gap-2 text-[#E9C46A] font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Our Honesty & Trust Pledge</span>
              </div>
              <p>
                Every guide is cross-referenced with official Australian Government agencies (ATO, Services Australia, state transport & tenancy departments) and displays a verified "Last reviewed" date.
              </p>
            </div>
          </div>

          {/* Quick Links: Planning & Setup */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-[#2A9D8F]/30 pb-1 font-display">
              Plan & Set-Up
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => onNavigate('plan/before-arrival')} className="hover:text-[#E9C46A] transition-colors text-left cursor-pointer">
                  Before Arrival
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('plan/week-1')} className="hover:text-[#E9C46A] transition-colors text-left cursor-pointer">
                  Week 1 (Landing)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('plan/month-1')} className="hover:text-[#E9C46A] transition-colors text-left cursor-pointer">
                  Month 1 (Housing)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('get-set-up/sim-internet')} className="hover:text-[#E9C46A] transition-colors text-left cursor-pointer">
                  SIM & Internet
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('get-set-up/bank-account')} className="hover:text-[#E9C46A] transition-colors text-left cursor-pointer">
                  Bank Account (6-Wk Rule)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('get-set-up/tax-file-number')} className="hover:text-[#E9C46A] transition-colors text-left cursor-pointer">
                  Tax File Number (TFN)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('get-set-up/superannuation')} className="hover:text-[#E9C46A] transition-colors text-left cursor-pointer">
                  Superannuation & DASP
                </button>
              </li>
            </ul>
          </div>

          {/* Housing, Transport & ID */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-[#2A9D8F]/30 pb-1 font-display">
              Living in Australia
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => onNavigate('find-a-home/renting-inspections')} className="hover:text-[#E9C46A] transition-colors text-left cursor-pointer">
                  Renting (No History)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('find-a-home/bond-condition-report')} className="hover:text-[#E9C46A] transition-colors text-left cursor-pointer">
                  Bond & Condition Reports
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('find-a-home/furniture')} className="hover:text-[#E9C46A] transition-colors text-left cursor-pointer">
                  Furniture on a Budget
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('get-around/public-transport')} className="hover:text-[#E9C46A] transition-colors text-left cursor-pointer">
                  Public Transport Cards
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('get-around/driver-licence')} className="hover:text-[#E9C46A] transition-colors text-left cursor-pointer">
                  Driver Licence Rules
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('id-and-paperwork/proof-of-age')} className="hover:text-[#E9C46A] transition-colors text-left cursor-pointer">
                  Proof of Age 18+ Card
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('id-and-paperwork/police-check')} className="hover:text-[#E9C46A] transition-colors text-left cursor-pointer">
                  National Police Check
                </button>
              </li>
            </ul>
          </div>

          {/* About, Membership & Support */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-[#2A9D8F]/30 pb-1 font-display">
              Membership & Help
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => onNavigate('pricing/free')} className="hover:text-[#E9C46A] transition-colors text-left cursor-pointer">
                  Free Checklist Download
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('pricing/plus')} className="hover:text-[#E9C46A] transition-colors text-left cursor-pointer">
                  FirstYear Plus (A$4.99/mo)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('pricing/compare')} className="hover:text-[#E9C46A] transition-colors text-left cursor-pointer">
                  Compare Plans & 7-Day Refund
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('pricing/partners')} className="hover:text-[#E9C46A] transition-colors text-left cursor-pointer">
                  Vetted Partner Offers
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about/how-we-work')} className="hover:text-[#E9C46A] transition-colors text-left cursor-pointer">
                  How We Work
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact/faq')} className="hover:text-[#E9C46A] transition-colors text-left cursor-pointer">
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact/chatbot')} className="hover:text-[#E9C46A] transition-colors text-left text-[#E9C46A] font-semibold cursor-pointer">
                  Chat-Bot Assistant
                </button>
              </li>
              <li>
                <button onClick={onOpenGlossary} className="hover:text-[#E9C46A] transition-colors text-left cursor-pointer">
                  Aussie Slang Glossary
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Partner Disclosure & Legal Disclaimers */}
        <div className="pt-8 space-y-4 text-xs text-emerald-100/70">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-[#143B2F] p-4 rounded-2xl border border-[#2A9D8F]/30">
            <div>
              <p className="font-bold text-white">
                Partner Disclosure
              </p>
              <p className="text-emerald-100/80 mt-0.5">
                FirstYear AU features carefully vetted partner offers (such as mobile SIMs, NBN broadband, and student furniture). We receive an affiliate referral commission if you choose to activate through these links, at zero extra cost to you. All partner products are chosen strictly for student affordability and reliability.
              </p>
            </div>
            <button
              onClick={() => onNavigate('pricing/partners')}
              className="shrink-0 text-[#E9C46A] hover:text-white font-semibold inline-flex items-center gap-1 cursor-pointer"
            >
              <span>See partner policy</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 text-emerald-100/80">
            <p className="text-center md:text-left font-medium">
              Important: General information only, not legal or financial advice. Confirm current regulations with the relevant Australian government authority before making decisions.
            </p>
            <p className="shrink-0 text-center md:text-right">
              &copy; {new Date().getFullYear()} FirstYear AU. All rights reserved. Built for newcomers to Australia.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
