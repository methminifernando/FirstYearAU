import React from 'react';
import { Compass } from 'lucide-react';
import { getHref } from '../utils/routing';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenGlossary: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenGlossary }) => {
  const NavLink: React.FC<{ path: string; className?: string; children: React.ReactNode }> = ({
    path,
    className = 'hover:text-[#E9C46A] transition-colors text-left cursor-pointer',
    children
  }) => (
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

  return (
    <footer className="bg-[#112B23] text-emerald-100/90 border-t border-[#1F4E3F] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid: 4 balanced columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-[#1F4E3F]">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-2xl bg-[#1B4D3E] border border-[#2A9D8F]/40 flex items-center justify-center shrink-0">
                <Compass className="w-5 h-5 text-[#E9C46A]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white font-display">
                  FirstYear <span className="text-[#E9C46A]">AU</span>
                </span>
                <span className="text-[10px] text-emerald-300/80 uppercase tracking-widest font-semibold">
                  Settlement &amp; Migration Directory
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links: Planning & Setup */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-[#1F4E3F] pb-1.5 font-display">
              Plan & Set-Up
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink path="plan/before-arrival">Moving to Australia Checklist (Pre-Flight)</NavLink>
              </li>
              <li>
                <NavLink path="plan/week-1">First Week in Australia Checklist</NavLink>
              </li>
              <li>
                <NavLink path="plan/month-1">Things to Do After Arriving: Month 1</NavLink>
              </li>
              <li>
                <NavLink path="plan/overview">Complete 12-Month Setup Guide</NavLink>
              </li>
              <li>
                <NavLink path="get-set-up/sim-internet">Best SIM Card for New Arrivals Australia</NavLink>
              </li>
              <li>
                <NavLink path="get-set-up/bank-account">Open Bank Account Australia New Arrival</NavLink>
              </li>
              <li>
                <NavLink path="get-set-up/tax-file-number">Apply for TFN Online Australia (ATO)</NavLink>
              </li>
              <li>
                <NavLink path="get-set-up/superannuation">How Does Super Work in Australia</NavLink>
              </li>
            </ul>
          </div>

          {/* Housing, Transport & ID */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-[#1F4E3F] pb-1.5 font-display">
              Living in Australia
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink path="find-a-home/renting-inspections">How to Rent With No Rental History</NavLink>
              </li>
              <li>
                <NavLink path="find-a-home/bond-condition-report">Rental Bond & Condition Reports</NavLink>
              </li>
              <li>
                <NavLink path="find-a-home/furniture">Cheap Furniture for Students</NavLink>
              </li>
              <li>
                <NavLink path="get-around/public-transport">Public Transport Cards Australia</NavLink>
              </li>
              <li>
                <NavLink path="get-around/driver-licence">Driving on an Overseas Licence</NavLink>
              </li>
              <li>
                <NavLink path="get-around/buying-a-car">Buying a Used Car Safely</NavLink>
              </li>
              <li>
                <NavLink path="id-and-paperwork/proof-of-age">Proof of Age Card Australia (18+)</NavLink>
              </li>
              <li>
                <NavLink path="id-and-paperwork/police-check">AFP Police Check International Student</NavLink>
              </li>
              <li>
                <NavLink path="id-and-paperwork/working-with-children">Working With Children Check</NavLink>
              </li>
            </ul>
          </div>

          {/* About, Membership & Support */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-[#1F4E3F] pb-1.5 font-display">
              Membership & Help
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink path="pricing/free">Free Moving to Australia Checklist</NavLink>
              </li>
              <li>
                <NavLink path="pricing/plus">Rental Application Template & Plus</NavLink>
              </li>
              <li>
                <NavLink path="pricing/compare">Compare Plans & 7-Day Refund</NavLink>
              </li>
              <li>
                <NavLink path="pricing/partners">New Migrant Partner Offers</NavLink>
              </li>
              <li>
                <NavLink path="about/story">About FirstYear AU</NavLink>
              </li>
              <li>
                <NavLink path="about/how-we-work">How We Verify Official Sources</NavLink>
              </li>
              <li>
                <NavLink path="contact/faq">New Migrant Australia FAQ</NavLink>
              </li>
              <li>
                <NavLink
                  path="contact/chatbot"
                  className="hover:text-[#E9C46A] transition-colors text-left text-[#E9C46A] font-semibold cursor-pointer"
                >
                  Settlement Assistant Chat-Bot
                </NavLink>
              </li>
              <li>
                <button onClick={onOpenGlossary} className="hover:text-[#E9C46A] transition-colors text-left cursor-pointer">
                  Aussie Slang Glossary
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 text-xs text-emerald-100/80 text-center">
          <p>
            &copy; {new Date().getFullYear()} FirstYear AU. All rights reserved. Settle into Australia with confidence.
          </p>
        </div>
      </div>
    </footer>
  );
};
