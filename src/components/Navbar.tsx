import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, ChevronDown, Compass, BookOpen, ShieldCheck, 
  HelpCircle, Sparkles, CheckCircle2
} from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  path: string;
  children: {
    label: string;
    path: string;
    desc?: string;
  }[];
}

const NAV_STRUCTURE: NavItem[] = [
  {
    id: 'about',
    label: 'About',
    path: 'about/story',
    children: [
      { label: 'Our story', path: 'about/story', desc: 'Why FirstYear AU was created for new migrants' },
      { label: 'How we work', path: 'about/how-we-work', desc: 'Official sources, editorial process & independence' }
    ]
  },
  {
    id: 'plan',
    label: '12-Month Plan',
    path: 'plan/overview',
    children: [
      { label: 'Before arrival', path: 'plan/before-arrival', desc: 'Visas, health cover & pre-opening a bank account' },
      { label: 'Week 1', path: 'plan/week-1', desc: 'First week: SIM, banking ID, transit & TFN' },
      { label: 'Month 1', path: 'plan/month-1', desc: 'Inspections, renting, bond lodgement & basic furniture' },
      { label: 'Months 2 to 3', path: 'plan/months-2-3', desc: 'Proof of Age card, Superannuation & GP setup' },
      { label: 'Months 4 to 12', path: 'plan/months-4-12', desc: 'Cars, licence conversion, police checks & WWCC' }
    ]
  },
  {
    id: 'setup',
    label: 'Get Set-Up',
    path: 'get-set-up/sim-internet',
    children: [
      { label: 'SIM and internet', path: 'get-set-up/sim-internet', desc: 'Prepaid SIMs, eSIMs, MVNOs & NBN broadband' },
      { label: 'Bank account', path: 'get-set-up/bank-account', desc: 'Big Four banks, 6-week passport rule & PayID' },
      { label: 'Tax file number', path: 'get-set-up/tax-file-number', desc: 'Free online ATO application & avoid scam fees' },
      { label: 'Super', path: 'get-set-up/superannuation', desc: 'Compulsory 11.5% employer contributions & DASP' }
    ]
  },
  {
    id: 'home',
    label: 'Find a Home',
    path: 'find-a-home/renting-inspections',
    children: [
      { label: 'Renting and inspections', path: 'find-a-home/renting-inspections', desc: 'How to rent with no local rental history' },
      { label: 'Bond and condition report', path: 'find-a-home/bond-condition-report', desc: 'State bond lodging & 3-7 day report rules' },
      { label: 'Furniture', path: 'find-a-home/furniture', desc: 'Budget furnishing via op-shops, IKEA & Marketplace' }
    ]
  },
  {
    id: 'around',
    label: 'Get Around',
    path: 'get-around/public-transport',
    children: [
      { label: 'Public transport', path: 'get-around/public-transport', desc: 'Opal, myki, metroCARD, go card & concessions' },
      { label: 'Driver licence', path: 'get-around/driver-licence', desc: 'Overseas licence rules, translations & conversion' },
      { label: 'Buying a car', path: 'get-around/buying-a-car', desc: 'PPSR check, roadworthy certificate & rego' }
    ]
  },
  {
    id: 'id',
    label: 'ID and Paperwork',
    path: 'id-and-paperwork/proof-of-age',
    children: [
      { label: 'Proof of Age card', path: 'id-and-paperwork/proof-of-age', desc: '18+ Photo Card to safely leave your passport home' },
      { label: 'Police check', path: 'id-and-paperwork/police-check', desc: 'AFP National Police Check for jobs and clinicals' },
      { label: 'Working with Children check', path: 'id-and-paperwork/working-with-children', desc: 'WWCC / Blue Card for tutoring and child work' }
    ]
  },
  {
    id: 'pricing',
    label: 'Membership & Pricing',
    path: 'pricing/compare',
    children: [
      { label: 'Free plan and checklist', path: 'pricing/free', desc: 'Free guides & printable PDF checklist' },
      { label: 'FirstYear Plus subscription', path: 'pricing/plus', desc: 'A$4.99/mo with templates, reminders & video' },
      { label: 'Compare plans', path: 'pricing/compare', desc: 'Feature comparison with 7-day refund guarantee' },
      { label: 'Partner offers', path: 'pricing/partners', desc: 'Vetted student mobile, internet & furniture deals' }
    ]
  },
  {
    id: 'contact',
    label: 'Contact',
    path: 'contact/form',
    children: [
      { label: 'Contact form', path: 'contact/form', desc: 'Reach out with questions or migration concerns' },
      { label: 'FAQ', path: 'contact/faq', desc: 'Answers to the most common newcomer questions' },
      { label: 'Chat-Bot', path: 'contact/chatbot', desc: 'Instant 24/7 AI-guided newcomer assistant' }
    ]
  }
];

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenGlossary: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate, onOpenGlossary }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  const toggleDropdown = (id: string) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  const toggleMobileSection = (id: string) => {
    setMobileExpandedSection(mobileExpandedSection === id ? null : id);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E0ECE6] shadow-xs select-none" ref={navRef}>
      {/* Top Banner with Aussie Glossary and Stage Fast-Switcher */}
      <div className="bg-[#1B4D3E] px-4 py-1.5 text-xs text-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-[#E9C46A] text-[#1B3A34] px-2 py-0.5 rounded-full text-[11px] font-bold">
              <Sparkles className="w-3 h-3 text-[#1B3A34]" /> Australia Settlement
            </span>
            <span className="hidden sm:inline text-emerald-100">Week-by-week guidance for newly arrived migrants & students</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenGlossary}
              className="hover:text-[#E9C46A] text-emerald-100 font-medium transition-colors flex items-center gap-1 cursor-pointer"
            >
              <BookOpen className="w-3 h-3 text-[#2A9D8F]" />
              <span>Aussie Terms (Bond, Rego, TFN)</span>
            </button>
            <button
              onClick={() => handleNavClick('contact/chatbot')}
              className="text-[#E9C46A] hover:text-white flex items-center gap-1 font-semibold transition-colors cursor-pointer"
            >
              <HelpCircle className="w-3 h-3 text-[#2A9D8F]" />
              <span>Ask FirstYear AU</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand Name */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-none"
            >
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#1B4D3E] to-[#2A9D8F] flex items-center justify-center shadow-xs">
                <Compass className="w-5 h-5 text-[#E9C46A] group-hover:rotate-45 transition-transform duration-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-[#1B4D3E] font-display leading-tight">
                  FirstYear <span className="text-[#2A9D8F]">AU</span>
                </span>
                <span className="text-[10px] text-[#1B3A34]/70 uppercase tracking-widest font-medium">
                  Settle with clarity
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation Links with Dropdowns */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-1.5">
            {NAV_STRUCTURE.map((item) => {
              const isOpen = activeDropdown === item.id;
              const isCurrent = currentPath.startsWith(item.id) || 
                (item.id === 'setup' && currentPath.includes('get-set-up')) ||
                (item.id === 'home' && currentPath.includes('find-a-home')) ||
                (item.id === 'around' && currentPath.includes('get-around')) ||
                (item.id === 'id' && currentPath.includes('id-and-paperwork')) ||
                (item.id === 'pricing' && currentPath.includes('pricing')) ||
                (item.id === 'contact' && currentPath.includes('contact'));

              return (
                <div key={item.id} className="relative">
                  <button
                    onClick={() => toggleDropdown(item.id)}
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-full transition-colors cursor-pointer ${
                      isOpen || isCurrent
                        ? 'text-[#1B4D3E] bg-[#EAF5F1]'
                        : 'text-[#1B4D3E] hover:text-[#2A9D8F] hover:bg-[#F6FAF7]'
                    }`}
                    aria-expanded={isOpen}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isOpen ? 'rotate-180 text-[#2A9D8F]' : 'text-[#2A9D8F]/70'}`} />
                  </button>

                  {/* Dropdown Menu */}
                  {isOpen && (
                    <div className="absolute left-0 mt-2 w-72 bg-white text-[#1B3A34] rounded-2xl shadow-xl border border-[#E0ECE6] py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                      <div className="px-3.5 py-1.5 border-b border-[#E0ECE6] bg-[#F6FAF7] rounded-t-xl">
                        <span className="text-[11px] font-bold text-[#1B4D3E] tracking-wider uppercase">
                          {item.label} Directory
                        </span>
                      </div>
                      <div className="py-1">
                        {item.children.map((subItem) => {
                          const isSubActive = currentPath === subItem.path;
                          return (
                            <button
                              key={subItem.path}
                              onClick={() => handleNavClick(subItem.path)}
                              className={`w-full text-left px-4 py-2.5 text-sm hover:bg-[#EAF5F1] transition-colors flex flex-col group cursor-pointer ${
                                isSubActive ? 'bg-[#EAF5F1] text-[#1B4D3E] font-semibold' : 'text-[#1B3A34]'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span className="group-hover:text-[#2A9D8F] transition-colors font-medium">{subItem.label}</span>
                                {isSubActive && <CheckCircle2 className="w-3.5 h-3.5 text-[#2A9D8F]" />}
                              </div>
                              {subItem.desc && (
                                <span className="text-[11px] text-[#1B3A34]/70 line-clamp-1 font-normal group-hover:text-[#1B3A34]">
                                  {subItem.desc}
                                </span>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Action CTA Button - Rounded Pill with Warm Orange and Dark Green Text */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={() => handleNavClick('plan/overview')}
              className="bg-[#F4A261] hover:bg-[#e7924d] text-[#1B3A34] font-bold text-sm px-5 py-2.5 rounded-full shadow-sm hover:shadow transition-all cursor-pointer flex items-center gap-1.5 active:scale-95"
            >
              <span>Start my plan</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={() => handleNavClick('plan/overview')}
              className="bg-[#F4A261] text-[#1B3A34] font-bold text-xs px-3.5 py-1.5 rounded-full cursor-pointer"
            >
              Start plan
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1B4D3E] hover:text-[#2A9D8F] rounded-lg hover:bg-[#F6FAF7] focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#F6FAF7] border-t border-[#E0ECE6] px-4 pt-2 pb-6 max-h-[85vh] overflow-y-auto">
          <div className="space-y-1">
            <button
              onClick={() => handleNavClick('home')}
              className="w-full text-left px-3 py-2 text-base font-bold text-[#1B4D3E] rounded-lg hover:bg-[#EAF5F1] cursor-pointer"
            >
              Home
            </button>

            {NAV_STRUCTURE.map((item) => {
              const isExpanded = mobileExpandedSection === item.id;
              return (
                <div key={item.id} className="border-b border-[#E0ECE6] pb-1">
                  <button
                    onClick={() => toggleMobileSection(item.id)}
                    className="w-full flex items-center justify-between px-3 py-2 text-sm font-semibold text-[#1B4D3E] hover:text-[#2A9D8F] hover:bg-white rounded-lg cursor-pointer"
                  >
                    <span>{item.label}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180 text-[#2A9D8F]' : 'text-[#2A9D8F]/70'}`} />
                  </button>

                  {isExpanded && (
                    <div className="pl-4 pr-2 py-1 space-y-1 bg-white rounded-xl my-1 border border-[#E0ECE6]">
                      {item.children.map((subItem) => (
                        <button
                          key={subItem.path}
                          onClick={() => handleNavClick(subItem.path)}
                          className="w-full text-left px-3 py-2 text-xs text-[#1B3A34] hover:text-[#2A9D8F] hover:bg-[#F6FAF7] rounded-lg cursor-pointer flex flex-col"
                        >
                          <span className="font-semibold text-[#1B4D3E]">{subItem.label}</span>
                          {subItem.desc && <span className="text-[11px] text-[#1B3A34]/70">{subItem.desc}</span>}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-4 pt-3 border-t border-[#E0ECE6] flex flex-col gap-2">
            <button
              onClick={() => handleNavClick('plan/overview')}
              className="w-full bg-[#F4A261] hover:bg-[#e7924d] text-[#1B3A34] font-bold py-2.5 rounded-full text-sm text-center shadow cursor-pointer"
            >
              Start my plan (12-Month Timeline)
            </button>
            <button
              onClick={() => handleNavClick('pricing/free')}
              className="w-full bg-white hover:bg-slate-50 border border-[#E0ECE6] text-[#1B4D3E] font-semibold py-2 rounded-full text-xs text-center cursor-pointer"
            >
              Download the free checklist
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
