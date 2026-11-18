import React, { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  Compass,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { getHref } from '../utils/routing';

interface SubLinkItem {
  label: string;
  path: string;
  desc?: string;
}

interface GuideColumn {
  id: string;
  title: string;
  overviewPath?: string;
  items: SubLinkItem[];
}

const ABOUT_LINKS: SubLinkItem[] = [
  { label: 'Our story', path: 'about/story', desc: 'Why FirstYear AU was created for new migrants' },
  { label: 'How we work', path: 'about/how-we-work', desc: 'Official sources, editorial process & independence' }
];

const GUIDE_COLUMNS: GuideColumn[] = [
  {
    id: 'plan',
    title: '12-Month Plan',
    overviewPath: 'plan/overview',
    items: [
      { label: 'Before arrival', path: 'plan/before-arrival' },
      { label: 'Week 1', path: 'plan/week-1' },
      { label: 'Month 1', path: 'plan/month-1' },
      { label: 'Months 2 to 3', path: 'plan/months-2-3' },
      { label: 'Months 4 to 12', path: 'plan/months-4-12' }
    ]
  },
  {
    id: 'setup',
    title: 'Get Set-Up',
    items: [
      { label: 'SIM and internet', path: 'get-set-up/sim-internet' },
      { label: 'Bank account', path: 'get-set-up/bank-account' },
      { label: 'Tax file number', path: 'get-set-up/tax-file-number' },
      { label: 'Super', path: 'get-set-up/superannuation' }
    ]
  },
  {
    id: 'home-guides',
    title: 'Find a Home',
    items: [
      { label: 'Renting and inspections', path: 'find-a-home/renting-inspections' },
      { label: 'Bond and condition report', path: 'find-a-home/bond-condition-report' },
      { label: 'Furniture', path: 'find-a-home/furniture' }
    ]
  },
  {
    id: 'around',
    title: 'Get Around',
    items: [
      { label: 'Public transport', path: 'get-around/public-transport' },
      { label: 'Driver licence', path: 'get-around/driver-licence' },
      { label: 'Buying a car', path: 'get-around/buying-a-car' }
    ]
  },
  {
    id: 'id',
    title: 'ID & Paperwork',
    items: [
      { label: 'Proof of Age card', path: 'id-and-paperwork/proof-of-age' },
      { label: 'Police check', path: 'id-and-paperwork/police-check' },
      { label: 'Working with Children check', path: 'id-and-paperwork/working-with-children' }
    ]
  }
];

const PRICING_LINKS: SubLinkItem[] = [
  { label: 'Free plan and checklist', path: 'pricing/free', desc: 'Free guides & printable PDF checklist' },
  { label: 'FirstYear Plus', path: 'pricing/plus', desc: 'A$4.99/mo with templates, reminders & video' },
  { label: 'Compare plans', path: 'pricing/compare', desc: 'Feature comparison with 7-day refund guarantee' },
  { label: 'Partner offers', path: 'pricing/partners', desc: 'Vetted student mobile, internet & furniture deals' }
];

const CONTACT_LINKS: SubLinkItem[] = [
  { label: 'Contact form', path: 'contact/form', desc: 'Reach out with settlement questions or updates' },
  { label: 'FAQ', path: 'contact/faq', desc: 'Answers to common newcomer questions' },
  { label: 'Chat-Bot', path: 'contact/chatbot', desc: 'Instant 24/7 AI-guided newcomer assistant' }
];

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenGlossary?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);
  const [mobileGuidesExpanded, setMobileGuidesExpanded] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  // Active tab detection
  const isHomeActive = currentPath === 'home';
  const isAboutActive = currentPath.startsWith('about/');
  const isGuidesActive =
    currentPath.startsWith('plan/') ||
    currentPath.startsWith('get-set-up/') ||
    currentPath.startsWith('find-a-home/') ||
    currentPath.startsWith('get-around/') ||
    currentPath.startsWith('id-and-paperwork/');
  const isPricingActive = currentPath.startsWith('pricing/');
  const isContactActive = currentPath.startsWith('contact/');

  // Close dropdowns on outside click or Escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Lock body scroll when mobile/tablet slide-out drawer is open
  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  const toggleDropdown = (id: string) => {
    setActiveDropdown((prev) => (prev === id ? null : id));
  };

  const toggleMobileSection = (id: string) => {
    setMobileExpandedSection((prev) => (prev === id ? null : id));
  };

  const toggleMobileGuideGroup = (id: string) => {
    setMobileGuidesExpanded((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <header
        className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-[#E0ECE6] shadow-xs select-none"
        ref={navRef}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-20 gap-3 lg:gap-6">
          {/* Logo / Brand Name */}
          <a
            href={getHref('home')}
            onClick={(e) => {
              if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                e.preventDefault();
                handleNavClick('home');
              }
            }}
            className="flex items-center gap-2.5 sm:gap-3 text-left group cursor-pointer focus:outline-none shrink-0"
          >
            <div className="w-10 h-10 rounded-2xl bg-[#1B4D3E] flex items-center justify-center shadow-xs border border-[#2A9D8F]/30 group-hover:bg-[#163e32] transition-colors shrink-0">
              <Compass className="w-6 h-6 text-[#E9C46A] group-hover:rotate-45 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#1B4D3E] font-display leading-tight whitespace-nowrap">
                FirstYear <span className="text-[#2A9D8F]">AU</span>
              </span>
              <span className="text-[10px] sm:text-[11px] text-slate-500 uppercase tracking-widest font-bold whitespace-nowrap">
                Settlement &amp; Migration Directory
              </span>
            </div>
          </a>

          {/* Desktop & Laptop Horizontal Navigation Menu: Home, About, Guides, Pricing, Contact */}
          <nav
            className="hidden lg:flex items-center justify-center gap-1 xl:gap-2"
            aria-label="Primary Navigation"
          >
            {/* 1. Home */}
            <a
              href={getHref('home')}
              onClick={(e) => {
                if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                  e.preventDefault();
                  handleNavClick('home');
                }
              }}
              className={`px-3.5 py-2 text-sm font-bold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                isHomeActive
                  ? 'text-[#1B4D3E] bg-[#E2F4EE]'
                  : 'text-[#1B4D3E] hover:text-[#2A9D8F] hover:bg-[#F0F7F3]'
              }`}
            >
              Home
            </a>

            {/* 2. About (Small Dropdown) */}
            <div className="relative">
              <button
                type="button"
                onClick={() => toggleDropdown('about')}
                className={`flex items-center gap-1 px-3.5 py-2 text-sm font-bold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                  activeDropdown === 'about' || isAboutActive
                    ? 'text-[#1B4D3E] bg-[#E2F4EE]'
                    : 'text-[#1B4D3E] hover:text-[#2A9D8F] hover:bg-[#F0F7F3]'
                }`}
                aria-expanded={activeDropdown === 'about'}
              >
                <span>About</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform ${
                    activeDropdown === 'about' ? 'rotate-180 text-[#2A9D8F]' : 'text-slate-400'
                  }`}
                />
              </button>

              {activeDropdown === 'about' && (
                <div className="absolute left-0 top-full mt-2 w-72 bg-white text-[#1B3A34] rounded-2xl shadow-xl border border-[#D5E4DC] py-2 z-50">
                  <div className="px-4 py-2 border-b border-[#E8F0EC] bg-[#F6FAF7] rounded-t-xl flex items-center justify-between">
                    <span className="text-[11px] font-bold text-[#1B4D3E] tracking-wider uppercase">
                      About FirstYear AU
                    </span>
                  </div>
                  <div className="py-1">
                    {ABOUT_LINKS.map((subItem) => {
                      const isSubActive = currentPath === subItem.path;
                      return (
                        <a
                          key={subItem.path}
                          href={getHref(subItem.path)}
                          onClick={(e) => {
                            if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                              e.preventDefault();
                              handleNavClick(subItem.path);
                            }
                          }}
                          className={`w-full text-left px-4 py-2.5 text-sm hover:bg-[#EAF5F1] transition-colors flex flex-col group cursor-pointer ${
                            isSubActive ? 'bg-[#EAF5F1] text-[#1B4D3E] font-semibold' : 'text-[#1B3A34]'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="group-hover:text-[#2A9D8F] transition-colors font-semibold">
                              {subItem.label}
                            </span>
                            {isSubActive && <CheckCircle2 className="w-3.5 h-3.5 text-[#2A9D8F]" />}
                          </div>
                          {subItem.desc && (
                            <span className="text-[11px] text-slate-500 line-clamp-1 font-normal group-hover:text-[#1B3A34]">
                              {subItem.desc}
                            </span>
                          )}
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* 3. Guides (Mega Menu Button — Panel rendered relative to max-w-7xl wrapper) */}
            <div>
              <button
                type="button"
                onClick={() => toggleDropdown('guides')}
                className={`flex items-center gap-1 px-3.5 py-2 text-sm font-bold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                  activeDropdown === 'guides' || isGuidesActive
                    ? 'text-[#1B4D3E] bg-[#E2F4EE]'
                    : 'text-[#1B4D3E] hover:text-[#2A9D8F] hover:bg-[#F0F7F3]'
                }`}
                aria-expanded={activeDropdown === 'guides'}
              >
                <span>Guides</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform ${
                    activeDropdown === 'guides' ? 'rotate-180 text-[#2A9D8F]' : 'text-slate-400'
                  }`}
                />
              </button>
            </div>

            {/* 4. Pricing (Direct Link to Membership & Pricing + Small Dropdown) */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('pricing')}
              onMouseLeave={() => setActiveDropdown((prev) => (prev === 'pricing' ? null : prev))}
            >
              <div
                className={`flex items-center rounded-lg transition-colors whitespace-nowrap ${
                  activeDropdown === 'pricing' || isPricingActive
                    ? 'text-[#1B4D3E] bg-[#E2F4EE]'
                    : 'text-[#1B4D3E] hover:text-[#2A9D8F] hover:bg-[#F0F7F3]'
                }`}
              >
                <a
                  href={getHref('pricing/compare')}
                  onClick={(e) => {
                    if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                      e.preventDefault();
                      handleNavClick('pricing/compare');
                    }
                  }}
                  className="pl-3.5 pr-1 py-2 text-sm font-bold cursor-pointer"
                >
                  Pricing
                </a>
                <button
                  type="button"
                  onClick={() => toggleDropdown('pricing')}
                  className="pr-2.5 pl-0.5 py-2 cursor-pointer"
                  aria-label="Toggle Pricing menu"
                  aria-expanded={activeDropdown === 'pricing'}
                >
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform ${
                      activeDropdown === 'pricing' ? 'rotate-180 text-[#2A9D8F]' : 'text-slate-400'
                    }`}
                  />
                </button>
              </div>

              {activeDropdown === 'pricing' && (
                <div className="absolute left-0 top-full pt-2 z-50">
                  <div className="w-80 bg-white text-[#1B3A34] rounded-2xl shadow-xl border border-[#D5E4DC] py-2">
                    <div className="px-4 py-2 border-b border-[#E8F0EC] bg-[#F6FAF7] rounded-t-xl flex items-center justify-between">
                      <span className="text-[11px] font-bold text-[#1B4D3E] tracking-wider uppercase">
                        Membership &amp; Pricing
                      </span>
                      <span className="text-[10px] text-[#2A9D8F] font-semibold">
                        Free &amp; Plus
                      </span>
                    </div>
                    <div className="py-1">
                      {PRICING_LINKS.map((subItem) => {
                        const isSubActive = currentPath === subItem.path;
                        return (
                          <a
                            key={subItem.path}
                            href={getHref(subItem.path)}
                            onClick={(e) => {
                              if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                                e.preventDefault();
                                handleNavClick(subItem.path);
                              }
                            }}
                            className={`w-full text-left px-4 py-2.5 text-sm hover:bg-[#EAF5F1] transition-colors flex flex-col group cursor-pointer ${
                              isSubActive ? 'bg-[#EAF5F1] text-[#1B4D3E] font-semibold' : 'text-[#1B3A34]'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="group-hover:text-[#2A9D8F] transition-colors font-semibold">
                                {subItem.label}
                              </span>
                              {isSubActive && <CheckCircle2 className="w-3.5 h-3.5 text-[#2A9D8F]" />}
                            </div>
                            {subItem.desc && (
                              <span className="text-[11px] text-slate-500 line-clamp-1 font-normal group-hover:text-[#1B3A34]">
                                {subItem.desc}
                              </span>
                            )}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 5. Contact (Small Dropdown) */}
            <div className="relative">
              <button
                type="button"
                onClick={() => toggleDropdown('contact')}
                className={`flex items-center gap-1 px-3.5 py-2 text-sm font-bold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                  activeDropdown === 'contact' || isContactActive
                    ? 'text-[#1B4D3E] bg-[#E2F4EE]'
                    : 'text-[#1B4D3E] hover:text-[#2A9D8F] hover:bg-[#F0F7F3]'
                }`}
                aria-expanded={activeDropdown === 'contact'}
              >
                <span>Contact</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform ${
                    activeDropdown === 'contact' ? 'rotate-180 text-[#2A9D8F]' : 'text-slate-400'
                  }`}
                />
              </button>

              {activeDropdown === 'contact' && (
                <div className="absolute right-0 top-full mt-2 w-72 bg-white text-[#1B3A34] rounded-2xl shadow-xl border border-[#D5E4DC] py-2 z-50">
                  <div className="px-4 py-2 border-b border-[#E8F0EC] bg-[#F6FAF7] rounded-t-xl flex items-center justify-between">
                    <span className="text-[11px] font-bold text-[#1B4D3E] tracking-wider uppercase">
                      Help &amp; Support
                    </span>
                  </div>
                  <div className="py-1">
                    {CONTACT_LINKS.map((subItem) => {
                      const isSubActive = currentPath === subItem.path;
                      return (
                        <a
                          key={subItem.path}
                          href={getHref(subItem.path)}
                          onClick={(e) => {
                            if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                              e.preventDefault();
                              handleNavClick(subItem.path);
                            }
                          }}
                          className={`w-full text-left px-4 py-2.5 text-sm hover:bg-[#EAF5F1] transition-colors flex flex-col group cursor-pointer ${
                            isSubActive ? 'bg-[#EAF5F1] text-[#1B4D3E] font-semibold' : 'text-[#1B3A34]'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="group-hover:text-[#2A9D8F] transition-colors font-semibold">
                              {subItem.label}
                            </span>
                            {isSubActive && <CheckCircle2 className="w-3.5 h-3.5 text-[#2A9D8F]" />}
                          </div>
                          {subItem.desc && (
                            <span className="text-[11px] text-slate-500 line-clamp-1 font-normal group-hover:text-[#1B3A34]">
                              {subItem.desc}
                            </span>
                          )}
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Desktop/Laptop Action CTA Button (Far Right) */}
          <div className="hidden lg:flex items-center shrink-0">
            <a
              href={getHref('plan/overview')}
              onClick={(e) => {
                if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                  e.preventDefault();
                  handleNavClick('plan/overview');
                }
              }}
              className="bg-[#F4A261] hover:bg-[#e7924e] text-[#1B3A34] font-bold text-sm px-5 xl:px-6 py-2.5 rounded-full shadow-sm hover:shadow transition-all cursor-pointer flex items-center gap-1.5 active:scale-95 whitespace-nowrap"
            >
              <span>Start my plan</span>
              <ArrowRight className="w-4 h-4 text-[#1B3A34]" />
            </a>
          </div>

          {/* Mobile & Tablet Hamburger Menu Button */}
          <div className="flex lg:hidden items-center shrink-0">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-[#1B4D3E] hover:bg-[#F0F7F3] rounded-xl cursor-pointer transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* GUIDES MEGA MENU PANEL (5 Neat Columns, bounded inside container width so nothing gets cut off) */}
        {activeDropdown === 'guides' && (
          <div className="hidden lg:block absolute left-4 right-4 sm:left-6 sm:right-6 lg:left-8 lg:right-8 top-full mt-2 bg-white text-[#1B3A34] rounded-3xl shadow-2xl border border-[#D5E4DC] p-6 z-50">
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#E8F0EC]">
              <div>
                <span className="text-[11px] font-bold text-[#2A9D8F] tracking-wider uppercase block">
                  Australian Settlement Guides
                </span>
                <p className="text-sm font-bold text-[#1B4D3E]">
                  Everything you need for your first 12 months in Australia
                </p>
              </div>
              <a
                href={getHref('plan/overview')}
                onClick={(e) => {
                  if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                    e.preventDefault();
                    handleNavClick('plan/overview');
                  }
                }}
                className="text-xs font-bold text-[#1B4D3E] bg-[#EAF5F1] hover:bg-[#d6ece4] px-4 py-2 rounded-full transition-colors flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>View Full 12-Month Overview</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#2A9D8F]" />
              </a>
            </div>

            <div className="grid grid-cols-5 gap-5">
              {GUIDE_COLUMNS.map((col) => (
                <div key={col.id} className="space-y-2.5 min-w-0">
                  {col.overviewPath ? (
                    <a
                      href={getHref(col.overviewPath)}
                      onClick={(e) => {
                        if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                          e.preventDefault();
                          handleNavClick(col.overviewPath!);
                        }
                      }}
                      className="text-xs font-extrabold uppercase tracking-wider text-[#1B4D3E] hover:text-[#2A9D8F] pb-1.5 border-b border-[#E0ECE6] block transition-colors"
                    >
                      {col.title}
                    </a>
                  ) : (
                    <div className="text-xs font-extrabold uppercase tracking-wider text-[#1B4D3E] pb-1.5 border-b border-[#E0ECE6]">
                      {col.title}
                    </div>
                  )}

                  <ul className="space-y-1">
                    {col.items.map((link) => {
                      const isSubActive = currentPath === link.path;
                      return (
                        <li key={link.path}>
                          <a
                            href={getHref(link.path)}
                            onClick={(e) => {
                              if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                                e.preventDefault();
                                handleNavClick(link.path);
                              }
                            }}
                            className={`flex items-center justify-between gap-2 px-2.5 py-2 rounded-xl text-xs xl:text-[13px] transition-colors cursor-pointer ${
                              isSubActive
                                ? 'bg-[#E2F4EE] text-[#1B4D3E] font-bold'
                                : 'text-[#1B3A34] hover:bg-[#F6FAF7] hover:text-[#2A9D8F] font-medium'
                            }`}
                          >
                            <span className="leading-snug">{link.label}</span>
                            {isSubActive && <CheckCircle2 className="w-3.5 h-3.5 text-[#2A9D8F] shrink-0" />}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      </header>

      {/* MOBILE & TABLET SLIDE-OUT MENU DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/45 backdrop-blur-xs"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Slide-out Panel */}
          <div className="relative z-10 w-full max-w-sm bg-white h-screen shadow-2xl flex flex-col border-l border-[#E0ECE6]">
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-5 h-20 border-b border-[#E0ECE6] shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#1B4D3E] flex items-center justify-center">
                  <Compass className="w-5 h-5 text-[#E9C46A]" />
                </div>
                <span className="text-lg font-extrabold text-[#1B4D3E] font-display">
                  FirstYear <span className="text-[#2A9D8F]">AU</span>
                </span>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-[#1B4D3E] hover:bg-[#F0F7F3] rounded-xl cursor-pointer"
                aria-label="Close navigation menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Drawer Body */}
            <div className="flex-1 overflow-y-auto px-5 py-4 divide-y divide-[#E8F0EC]">
              {/* 1. Home */}
              <div className="py-2">
                <a
                  href={getHref('home')}
                  onClick={(e) => {
                    if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                      e.preventDefault();
                      handleNavClick('home');
                    }
                  }}
                  className={`block w-full text-left py-2.5 px-3 rounded-xl text-sm font-bold transition-colors ${
                    isHomeActive ? 'bg-[#E2F4EE] text-[#1B4D3E]' : 'text-[#1B4D3E] hover:bg-[#F6FAF7]'
                  }`}
                >
                  Home
                </a>
              </div>

              {/* 2. About */}
              <div className="py-2">
                <button
                  type="button"
                  onClick={() => toggleMobileSection('about')}
                  className={`w-full flex items-center justify-between py-2.5 px-3 rounded-xl text-sm font-bold cursor-pointer ${
                    isAboutActive ? 'bg-[#E2F4EE] text-[#1B4D3E]' : 'text-[#1B4D3E]'
                  }`}
                  aria-expanded={mobileExpandedSection === 'about'}
                >
                  <span>About</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform ${
                      mobileExpandedSection === 'about' ? 'rotate-180 text-[#2A9D8F]' : ''
                    }`}
                  />
                </button>
                {mobileExpandedSection === 'about' && (
                  <div className="mt-1 pl-3 space-y-1">
                    {ABOUT_LINKS.map((sub) => (
                      <a
                        key={sub.path}
                        href={getHref(sub.path)}
                        onClick={(e) => {
                          if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                            e.preventDefault();
                            handleNavClick(sub.path);
                          }
                        }}
                        className={`block py-2 px-3 rounded-xl text-xs font-semibold ${
                          currentPath === sub.path
                            ? 'bg-[#EAF5F1] text-[#1B4D3E]'
                            : 'text-[#1B3A34] hover:bg-[#F6FAF7]'
                        }`}
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* 3. Guides (Expands to show its 5 sections) */}
              <div className="py-2">
                <button
                  type="button"
                  onClick={() => toggleMobileSection('guides')}
                  className={`w-full flex items-center justify-between py-2.5 px-3 rounded-xl text-sm font-bold cursor-pointer ${
                    isGuidesActive ? 'bg-[#E2F4EE] text-[#1B4D3E]' : 'text-[#1B4D3E]'
                  }`}
                  aria-expanded={mobileExpandedSection === 'guides'}
                >
                  <span>Guides</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform ${
                      mobileExpandedSection === 'guides' ? 'rotate-180 text-[#2A9D8F]' : ''
                    }`}
                  />
                </button>
                {mobileExpandedSection === 'guides' && (
                  <div className="mt-1 pl-2 space-y-1.5">
                    {GUIDE_COLUMNS.map((col) => {
                      const isGroupExpanded = mobileGuidesExpanded === col.id;
                      return (
                        <div key={col.id} className="bg-[#F6FAF7] rounded-xl border border-[#E0ECE6]/80">
                          <button
                            type="button"
                            onClick={() => toggleMobileGuideGroup(col.id)}
                            className="w-full flex items-center justify-between px-3 py-2.5 text-xs font-extrabold uppercase tracking-wider text-[#1B4D3E] cursor-pointer"
                            aria-expanded={isGroupExpanded}
                          >
                            <span>{col.title}</span>
                            <ChevronDown
                              className={`w-3.5 h-3.5 text-[#2A9D8F] transition-transform ${
                                isGroupExpanded ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                          {isGroupExpanded && (
                            <div className="px-2 pb-2 space-y-1">
                              {col.items.map((item) => (
                                <a
                                  key={item.path}
                                  href={getHref(item.path)}
                                  onClick={(e) => {
                                    if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                                      e.preventDefault();
                                      handleNavClick(item.path);
                                    }
                                  }}
                                  className={`block py-2 px-2.5 rounded-lg text-xs font-medium ${
                                    currentPath === item.path
                                      ? 'bg-white text-[#1B4D3E] font-bold shadow-2xs'
                                      : 'text-[#1B3A34] hover:bg-white'
                                  }`}
                                >
                                  {item.label}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* 4. Pricing (Direct link + expandable sublinks) */}
              <div className="py-2">
                <div
                  className={`flex items-center justify-between rounded-xl ${
                    isPricingActive ? 'bg-[#E2F4EE] text-[#1B4D3E]' : 'text-[#1B4D3E]'
                  }`}
                >
                  <a
                    href={getHref('pricing/compare')}
                    onClick={(e) => {
                      if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                        e.preventDefault();
                        handleNavClick('pricing/compare');
                      }
                    }}
                    className="flex-1 py-2.5 pl-3 text-sm font-bold"
                  >
                    Pricing
                  </a>
                  <button
                    type="button"
                    onClick={() => toggleMobileSection('pricing')}
                    className="p-2.5 cursor-pointer"
                    aria-label="Toggle Pricing links"
                    aria-expanded={mobileExpandedSection === 'pricing'}
                  >
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform ${
                        mobileExpandedSection === 'pricing' ? 'rotate-180 text-[#2A9D8F]' : ''
                      }`}
                    />
                  </button>
                </div>
                {mobileExpandedSection === 'pricing' && (
                  <div className="mt-1 pl-3 space-y-1">
                    {PRICING_LINKS.map((sub) => (
                      <a
                        key={sub.path}
                        href={getHref(sub.path)}
                        onClick={(e) => {
                          if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                            e.preventDefault();
                            handleNavClick(sub.path);
                          }
                        }}
                        className={`block py-2 px-3 rounded-xl text-xs font-semibold ${
                          currentPath === sub.path
                            ? 'bg-[#EAF5F1] text-[#1B4D3E]'
                            : 'text-[#1B3A34] hover:bg-[#F6FAF7]'
                        }`}
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* 5. Contact */}
              <div className="py-2">
                <button
                  type="button"
                  onClick={() => toggleMobileSection('contact')}
                  className={`w-full flex items-center justify-between py-2.5 px-3 rounded-xl text-sm font-bold cursor-pointer ${
                    isContactActive ? 'bg-[#E2F4EE] text-[#1B4D3E]' : 'text-[#1B4D3E]'
                  }`}
                  aria-expanded={mobileExpandedSection === 'contact'}
                >
                  <span>Contact</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform ${
                      mobileExpandedSection === 'contact' ? 'rotate-180 text-[#2A9D8F]' : ''
                    }`}
                  />
                </button>
                {mobileExpandedSection === 'contact' && (
                  <div className="mt-1 pl-3 space-y-1">
                    {CONTACT_LINKS.map((sub) => (
                      <a
                        key={sub.path}
                        href={getHref(sub.path)}
                        onClick={(e) => {
                          if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                            e.preventDefault();
                            handleNavClick(sub.path);
                          }
                        }}
                        className={`block py-2 px-3 rounded-xl text-xs font-semibold ${
                          currentPath === sub.path
                            ? 'bg-[#EAF5F1] text-[#1B4D3E]'
                            : 'text-[#1B3A34] hover:bg-[#F6FAF7]'
                        }`}
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Drawer Bottom CTA */}
            <div className="p-5 border-t border-[#E0ECE6] bg-[#F6FAF7] space-y-2.5 shrink-0">
              <a
                href={getHref('plan/overview')}
                onClick={(e) => {
                  if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                    e.preventDefault();
                    handleNavClick('plan/overview');
                  }
                }}
                className="w-full bg-[#F4A261] hover:bg-[#e7924e] text-[#1B3A34] font-bold py-3 rounded-full text-center text-sm shadow-sm cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>Start my plan</span>
                <ArrowRight className="w-4 h-4 text-[#1B3A34]" />
              </a>
              <a
                href={getHref('pricing/free')}
                onClick={(e) => {
                  if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                    e.preventDefault();
                    handleNavClick('pricing/free');
                  }
                }}
                className="w-full bg-white text-[#1B4D3E] font-semibold py-2.5 rounded-full text-center text-xs border border-[#D5E4DC] hover:bg-slate-50 cursor-pointer block"
              >
                Download free checklist
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
