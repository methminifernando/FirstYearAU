import React, { useState, useRef } from 'react';
import {
  ArrowRight,
  Star,
  ChevronRight,
  ChevronDown,
  Compass,
  ClipboardCheck,
  Smartphone,
  Home,
  TrainFront,
  IdCard
} from 'lucide-react';
import heroBgImage from '../assets/images/hero_sydney_blue_1794970409970.jpg';
import { getHref } from '../utils/routing';

interface HomeViewProps {
  onNavigate: (path: string) => void;
  onOpenTemplatePreview: () => void;
  onOpenSubscribeModal: () => void;
}

interface HomeTabItem {
  id: string;
  label: string;
  heading: string;
  ctaLabel?: string;
  ctaPath?: string;
  icon: 'compass' | 'clipboard' | 'smartphone' | 'home' | 'train' | 'idcard';
}

const HOME_TABS: HomeTabItem[] = [
  {
    id: 'what-is-firstyear',
    label: 'What is FirstYear AU?',
    heading: 'What is FirstYear AU and how does it make settling in Australia easier?',
    icon: 'compass'
  },
  {
    id: 'your-first-week',
    label: 'Your first week',
    heading: 'What should you complete in your first week in Australia?',
    ctaLabel: 'Read the full guide',
    ctaPath: 'plan/week-1',
    icon: 'clipboard'
  },
  {
    id: 'get-set-up',
    label: 'Get set up',
    heading: 'How do you set up your SIM card, bank account, TFN and super?',
    ctaLabel: 'Read the full guide',
    ctaPath: 'get-set-up/sim-internet',
    icon: 'smartphone'
  },
  {
    id: 'find-a-home',
    label: 'Find a home',
    heading: 'How do you find a rental home in Australia with no local history?',
    ctaLabel: 'Read the full guide',
    ctaPath: 'find-a-home/renting-inspections',
    icon: 'home'
  },
  {
    id: 'get-around',
    label: 'Get around',
    heading: 'How do public transport, overseas licences and buying a car work?',
    ctaLabel: 'Read the full guide',
    ctaPath: 'get-around/public-transport',
    icon: 'train'
  },
  {
    id: 'id-and-paperwork',
    label: 'ID and paperwork',
    heading: 'Which Australian ID cards and police checks do newcomers need?',
    ctaLabel: 'Read the full guide',
    ctaPath: 'id-and-paperwork/proof-of-age',
    icon: 'idcard'
  }
];

function renderTabIcon(icon: HomeTabItem['icon'], isActive: boolean) {
  const cls = `w-5 h-5 shrink-0 ${isActive ? 'text-[#1B3A34]' : 'text-[#1B4D3E]'}`;
  switch (icon) {
    case 'compass':
      return <Compass className={cls} aria-hidden="true" />;
    case 'clipboard':
      return <ClipboardCheck className={cls} aria-hidden="true" />;
    case 'smartphone':
      return <Smartphone className={cls} aria-hidden="true" />;
    case 'home':
      return <Home className={cls} aria-hidden="true" />;
    case 'train':
      return <TrainFront className={cls} aria-hidden="true" />;
    case 'idcard':
      return <IdCard className={cls} aria-hidden="true" />;
  }
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate
}) => {
  const [activeTabId, setActiveTabId] = useState<string>('what-is-firstyear');
  const [mobileOpenTabId, setMobileOpenTabId] = useState<string | null>('what-is-firstyear');
  const [showAllReviews, setShowAllReviews] = useState<boolean>(false);
  const tabButtonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const trackHomeTabClick = (tabLabel: string) => {
    if (typeof window !== 'undefined') {
      const win = window as unknown as { gtag?: (...args: unknown[]) => void };
      if (typeof win.gtag === 'function') {
        win.gtag('event', 'home_tab_click', {
          tab_name: tabLabel
        });
      }
    }
  };

  const handleSelectDesktopTab = (tab: HomeTabItem) => {
    setActiveTabId(tab.id);
    setMobileOpenTabId(tab.id);
    trackHomeTabClick(tab.label);
  };

  const handleToggleMobileTab = (tab: HomeTabItem) => {
    const isClosing = mobileOpenTabId === tab.id;
    setMobileOpenTabId(isClosing ? null : tab.id);
    if (!isClosing) {
      setActiveTabId(tab.id);
      trackHomeTabClick(tab.label);
    }
  };

  const handleTabKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    const lastIndex = HOME_TABS.length - 1;
    let nextIndex: number | null = null;

    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      nextIndex = index === lastIndex ? 0 : index + 1;
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      nextIndex = index === 0 ? lastIndex : index - 1;
    } else if (e.key === 'Home') {
      e.preventDefault();
      nextIndex = 0;
    } else if (e.key === 'End') {
      e.preventDefault();
      nextIndex = lastIndex;
    }

    if (nextIndex !== null) {
      const nextTab = HOME_TABS[nextIndex];
      handleSelectDesktopTab(nextTab);
      tabButtonRefs.current[nextIndex]?.focus();
    }
  };
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
    },
    {
      id: 'minjun',
      name: 'Min-jun Park',
      role: 'Masters of Engineering Student',
      location: 'Perth, WA',
      country: 'South Korea',
      stars: 5,
      avatarColor: 'bg-[#FDE9DB] text-[#8B4513]',
      quote: (
        <>
          "Getting set up in Perth felt straightforward once I had everything in sequence. Using the{' '}
          <strong className="text-[#1B4D3E] font-semibold">public transport cards Australia</strong> guide, I picked up my SmartRider with tertiary concession within days and avoided overpaying for daily train trips between campus and part-time work."
        </>
      )
    },
    {
      id: 'sofia',
      name: 'Sofia Reyes',
      role: 'Registered Nurse (Subclass 482)',
      location: 'Gold Coast, QLD',
      country: 'Philippines',
      stars: 5,
      avatarColor: 'bg-[#FCF4DD] text-[#684C00]',
      quote: (
        <>
          "The <strong className="text-[#1B4D3E] font-semibold">rental bond and condition report</strong> checklist saved us from missing tiny pre-existing scuffs when we moved into our apartment in Southport. Knowing how RTA bond lodgement works in Queensland gave us real peace of mind."
        </>
      )
    },
    {
      id: 'daniel',
      name: 'Daniel & Priya Wijaya',
      role: 'IT Specialist & Accountant',
      location: 'Canberra, ACT',
      country: 'Indonesia',
      stars: 5,
      avatarColor: 'bg-[#E2F4EE] text-[#1B4D3E]',
      quote: (
        <>
          "Understanding <strong className="text-[#1B4D3E] font-semibold">how does super work in Australia</strong> and verifying our employer contributions via myGov was something neither of us had dealt with before moving. The plain-English breakdown helped us avoid ending up with multiple duplicate accounts."
        </>
      )
    },
    {
      id: 'chloe',
      name: 'Chloe Tan',
      role: 'Hospitality Management Graduate',
      location: 'Hobart, TAS',
      country: 'Malaysia',
      stars: 5,
      avatarColor: 'bg-[#E2F4EE] text-[#2A9D8F]',
      quote: (
        <>
          "Between checking rules for <strong className="text-[#1B4D3E] font-semibold">driving on overseas licence Australia</strong> and getting a <strong className="text-[#1B4D3E] font-semibold">PPSR check</strong> before inspecting a used hatchback, FirstYear AU kept every official link in one place so I didn&apos;t miss a state requirement."
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

      {/* 2. COMBINED SETTLEMENT TABS SECTION (Desktop 30% tabs / 70% panel, Mobile accordion, all content pre-rendered in DOM) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="FirstYear AU settlement guide overview">
        {(() => {
          const inlineLinkClass =
            'text-[#2A9D8F] hover:text-[#1B4D3E] font-semibold underline decoration-[#2A9D8F]/40 underline-offset-2 transition-colors';

          const renderTabBody = (tabId: string) => {
            switch (tabId) {
              case 'what-is-firstyear':
                return (
                  <div className="space-y-4 text-sm sm:text-base text-[#1B3A34]/85 leading-relaxed">
                    <p>
                      Moving to a new country is exciting, but your first few months in Australia can quickly feel overwhelming. Everyday essentials are spread across government agencies, banks, mobile providers and real estate websites, and no one tells you which step comes first or how each task connects to the next.
                    </p>
                    <p>
                      FirstYear AU is a new migrant guide to Australia, created for international students, skilled visa holders and new arrivals. Our week-by-week{' '}
                      <NavLink path="plan/overview" className={inlineLinkClass}>
                        moving to Australia checklist
                      </NavLink>{' '}
                      puts the most important{' '}
                      <NavLink path="plan/week-1" className={inlineLinkClass}>
                        things to do after arriving in Australia
                      </NavLink>{' '}
                      in the right order. It covers everything from choosing the{' '}
                      <NavLink path="get-set-up/sim-internet" className={inlineLinkClass}>
                        best SIM card for new arrivals
                      </NavLink>{' '}
                      and{' '}
                      <NavLink path="get-set-up/bank-account" className={inlineLinkClass}>
                        opening an Australian bank account
                      </NavLink>{' '}
                      to{' '}
                      <NavLink path="get-set-up/tax-file-number" className={inlineLinkClass}>
                        applying for your Tax File Number (TFN) online
                      </NavLink>
                      , understanding{' '}
                      <NavLink path="get-set-up/superannuation" className={inlineLinkClass}>
                        how super works in Australia
                      </NavLink>
                      , learning how to{' '}
                      <NavLink path="find-a-home/renting-inspections" className={inlineLinkClass}>
                        rent with no rental history
                      </NavLink>
                      ,{' '}
                      <NavLink path="get-around/public-transport" className={inlineLinkClass}>
                        getting around on public transport
                      </NavLink>
                      ,{' '}
                      <NavLink path="get-around/driver-licence" className={inlineLinkClass}>
                        driving on an overseas licence
                      </NavLink>
                      ,{' '}
                      <NavLink path="id-and-paperwork/proof-of-age" className={inlineLinkClass}>
                        getting a Proof of Age card
                      </NavLink>
                      ,{' '}
                      <NavLink path="id-and-paperwork/police-check" className={inlineLinkClass}>
                        arranging a national police check
                      </NavLink>{' '}
                      and much more.
                    </p>
                    <p>
                      To make settling in even easier, we offer comprehensive packages designed to support you through every stage of your first year in Australia. Our{' '}
                      <NavLink path="pricing/plus" className={inlineLinkClass}>
                        FirstYear Plus membership
                      </NavLink>{' '}
                      brings together a wide range of services, including a personalised 12-month plan, timely task reminders, ready-to-use templates and helpful video walkthroughs, so you can settle in with confidence.
                    </p>
                  </div>
                );

              case 'your-first-week':
                return (
                  <div className="space-y-4 text-sm sm:text-base text-[#1B3A34]/85 leading-relaxed">
                    <p>
                      Your first seven days in Australia set the foundation for everything that follows. Because local phone numbers, bank verification, public transport, and tax registration depend on one another, following them in the right sequence saves time and prevents unnecessary delays.
                    </p>
                    <ul className="space-y-2.5 text-sm sm:text-[15px] text-[#1B3A34] list-disc pl-5 marker:text-[#2A9D8F]">
                      <li>
                        Activate a prepaid Australian{' '}
                        <NavLink path="get-set-up/sim-internet" className={inlineLinkClass}>
                          SIM card or eSIM
                        </NavLink>{' '}
                        using your passport so you can receive bank SMS verification codes right away.
                      </li>
                      <li>
                        Visit a local bank branch in person with your passport to unlock your{' '}
                        <NavLink path="get-set-up/bank-account" className={inlineLinkClass}>
                          Australian bank account
                        </NavLink>{' '}
                        and set up PayID.
                      </li>
                      <li>
                        Pick up your city&apos;s{' '}
                        <NavLink path="get-around/public-transport" className={inlineLinkClass}>
                          public transport card
                        </NavLink>{' '}
                        to travel safely to campus, appointments, and rental inspections.
                      </li>
                      <li>
                        Wait until you pass airport immigration, then submit a free{' '}
                        <NavLink path="get-set-up/tax-file-number" className={inlineLinkClass}>
                          Tax File Number (TFN) application
                        </NavLink>{' '}
                        directly with the ATO.
                      </li>
                    </ul>
                    <p className="text-xs sm:text-sm font-medium text-[#1B4D3E]">
                      Always confirm current rules on official government websites.
                    </p>
                  </div>
                );

              case 'get-set-up':
                return (
                  <div className="space-y-4 text-sm sm:text-base text-[#1B3A34]/85 leading-relaxed">
                    <p>
                      Getting your Australian mobile service, everyday bank account, Tax File Number, and superannuation organised early keeps daily life running smoothly. Having these four essentials connected makes receiving wages, paying rent, and managing bills much simpler from the start.
                    </p>
                    <ul className="space-y-2.5 text-sm sm:text-[15px] text-[#1B3A34] list-disc pl-5 marker:text-[#2A9D8F]">
                      <li>
                        Choose between prepaid SIMs, eSIMs, and NBN broadband options with mandatory passport identity checks.
                      </li>
                      <li>
                        Learn how to{' '}
                        <NavLink path="get-set-up/bank-account" className={inlineLinkClass}>
                          open a bank account as a new arrival
                        </NavLink>{' '}
                        and verify your identity within the initial branch arrival window.
                      </li>
                      <li>
                        Follow our step-by-step{' '}
                        <NavLink path="get-set-up/tax-file-number" className={inlineLinkClass}>
                          apply for TFN online
                        </NavLink>{' '}
                        walkthrough on the official ATO portal and avoid unnecessary third-party service fees.
                      </li>
                      <li>
                        Understand how employer contributions and departure refunds work in our{' '}
                        <NavLink path="get-set-up/superannuation" className={inlineLinkClass}>
                          superannuation guide for new migrants
                        </NavLink>
                        .
                      </li>
                    </ul>
                    <p className="text-xs sm:text-sm font-medium text-[#1B4D3E]">
                      Always confirm current rules on official government websites.
                    </p>
                  </div>
                );

              case 'find-a-home':
                return (
                  <div className="space-y-4 text-sm sm:text-base text-[#1B3A34]/85 leading-relaxed">
                    <p>
                      Securing a long-term home in Australia can feel confusing when you have no local rental history or Australian references yet. Knowing how property inspections work, how to present your documents, and how tenancy bonds are protected helps you apply with confidence.
                    </p>
                    <ul className="space-y-2.5 text-sm sm:text-[15px] text-[#1B3A34] list-disc pl-5 marker:text-[#2A9D8F]">
                      <li>
                        Prepare a clear application pack with overseas savings statements, visa details, and personal references for in-person inspections.
                      </li>
                      <li>
                        Read our{' '}
                        <NavLink path="find-a-home/bond-condition-report" className={inlineLinkClass}>
                          rental bond and condition report guide
                        </NavLink>{' '}
                        so your security deposit is safely lodged with your state bond authority and existing marks are photographed on move-in.
                      </li>
                      <li>
                        Discover practical tips for sourcing{' '}
                        <NavLink path="find-a-home/furniture" className={inlineLinkClass}>
                          affordable furniture and household essentials
                        </NavLink>{' '}
                        while steering clear of common online marketplace scams.
                      </li>
                    </ul>
                    <p className="text-xs sm:text-sm font-medium text-[#1B4D3E]">
                      Always confirm current rules on official government websites.
                    </p>
                  </div>
                );

              case 'get-around':
                return (
                  <div className="space-y-4 text-sm sm:text-base text-[#1B3A34]/85 leading-relaxed">
                    <p>
                      Transport ticketing, concession discounts, and driving laws are managed separately by each Australian state and territory. Understanding how local transit networks operate and when you must transfer an overseas driver licence keeps your daily commute smooth and legal.
                    </p>
                    <ul className="space-y-2.5 text-sm sm:text-[15px] text-[#1B3A34] list-disc pl-5 marker:text-[#2A9D8F]">
                      <li>
                        Set up your city&apos;s smart card—such as Opal, myki, go card, metroCARD, or SmartRider—and check international student concession eligibility in your state.
                      </li>
                      <li>
                        Review our guide to{' '}
                        <NavLink path="get-around/driver-licence" className={inlineLinkClass}>
                          driving on an overseas licence in Australia
                        </NavLink>
                        , including NAATI translation needs and state licence conversion rules.
                      </li>
                      <li>
                        Before purchasing a private vehicle, check our step-by-step{' '}
                        <NavLink path="get-around/buying-a-car" className={inlineLinkClass}>
                          buying a car in Australia guide
                        </NavLink>{' '}
                        covering official PPSR checks, roadworthy inspections, and registration transfer.
                      </li>
                    </ul>
                    <p className="text-xs sm:text-sm font-medium text-[#1B4D3E]">
                      Always confirm current rules on official government websites.
                    </p>
                  </div>
                );

              case 'id-and-paperwork':
                return (
                  <div className="space-y-4 text-sm sm:text-base text-[#1B3A34]/85 leading-relaxed">
                    <p>
                      Carrying your passport everywhere increases the risk of losing your primary travel and visa document. Getting an official local photo ID card alongside workplace and study background clearances prepares you safely for everyday venues, casual jobs, and university placements.
                    </p>
                    <ul className="space-y-2.5 text-sm sm:text-[15px] text-[#1B3A34] list-disc pl-5 marker:text-[#2A9D8F]">
                      <li>
                        Apply for your state or territory 18+ Proof of Age Photo Card so you can leave your foreign passport securely stored at home.
                      </li>
                      <li>
                        See how to apply directly for an{' '}
                        <NavLink path="id-and-paperwork/police-check" className={inlineLinkClass}>
                          Australian Federal Police (AFP) check
                        </NavLink>{' '}
                        for employment, healthcare courses, or volunteer roles.
                      </li>
                      <li>
                        Check whether your job, tutoring, or placement requires a state{' '}
                        <NavLink path="id-and-paperwork/working-with-children" className={inlineLinkClass}>
                          Working with Children Check or Blue Card
                        </NavLink>
                        .
                      </li>
                    </ul>
                    <p className="text-xs sm:text-sm font-medium text-[#1B4D3E]">
                      Always confirm current rules on official government websites.
                    </p>
                  </div>
                );

              default:
                return null;
            }
          };

          return (
            <>
              {/* DESKTOP & LAPTOP TWO-COLUMN ACCESSIBLE TABS (30% Left Tabs / 70% Right Content Column) */}
              <div className="hidden lg:flex items-start gap-10 xl:gap-12">
                {/* Left Vertical Tablist (~30% width) */}
                <div
                  role="tablist"
                  aria-label="FirstYear AU settlement topics"
                  aria-orientation="vertical"
                  className="w-[30%] shrink-0 flex flex-col gap-2"
                >
                  {HOME_TABS.map((tab, index) => {
                    const isActive = activeTabId === tab.id;
                    return (
                      <button
                        key={tab.id}
                        ref={(el) => {
                          tabButtonRefs.current[index] = el;
                        }}
                        type="button"
                        role="tab"
                        id={`home-tab-${tab.id}`}
                        aria-selected={isActive}
                        aria-controls={`home-panel-${tab.id}`}
                        tabIndex={isActive ? 0 : -1}
                        onClick={() => handleSelectDesktopTab(tab)}
                        onKeyDown={(e) => handleTabKeyDown(e, index)}
                        className={`w-full text-left px-4 py-3.5 rounded-md text-[15px] transition-all flex items-center gap-2.5 cursor-pointer ${
                          isActive
                            ? 'bg-[#F4A261] text-[#1B3A34] font-bold'
                            : 'bg-[#EEF4F1] hover:bg-[#DCECE4] text-[#1B4D3E] font-medium'
                        }`}
                      >
                        {isActive && (
                          <ChevronRight className="w-4 h-4 text-[#1B3A34] shrink-0 -ml-1" aria-hidden="true" />
                        )}
                        {renderTabIcon(tab.icon, isActive)}
                        <span className="truncate">{tab.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Right Editorial Content Column (~70% width; all tabpanels stay mounted in HTML for SEO & instant switching) */}
                <div className="w-[70%] pt-0.5">
                  {HOME_TABS.map((tab) => {
                    const isActive = activeTabId === tab.id;
                    return (
                      <div
                        key={tab.id}
                        role="tabpanel"
                        id={`home-panel-${tab.id}`}
                        aria-labelledby={`home-tab-${tab.id}`}
                        hidden={!isActive}
                        className={isActive ? 'space-y-5' : 'hidden'}
                      >
                        <h2 className="text-2xl sm:text-3xl xl:text-[2rem] font-extrabold text-[#1B4D3E] font-display leading-tight">
                          {tab.heading}
                        </h2>

                        {renderTabBody(tab.id)}

                        {tab.ctaLabel && tab.ctaPath && (
                          <div className="pt-2">
                            <NavLink
                              path={tab.ctaPath}
                              className="bg-[#F4A261] hover:bg-[#e7924e] text-[#1B3A34] font-extrabold text-sm px-6 py-3 rounded-full shadow-xs hover:shadow transition-all inline-flex items-center gap-2 cursor-pointer"
                            >
                              <span>{tab.ctaLabel}</span>
                              <ArrowRight className="w-4 h-4 text-[#1B3A34]" aria-hidden="true" />
                            </NavLink>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* MOBILE & TABLET ACCORDION (Tap any heading with icon to expand below) */}
              <div className="lg:hidden space-y-2.5">
                {HOME_TABS.map((tab) => {
                  const isExpanded = mobileOpenTabId === tab.id;
                  return (
                    <div
                      key={tab.id}
                      className="rounded-xl border border-[#E0ECE6] bg-white overflow-hidden"
                    >
                      <button
                        type="button"
                        id={`home-acc-btn-${tab.id}`}
                        aria-expanded={isExpanded}
                        aria-controls={`home-acc-panel-${tab.id}`}
                        onClick={() => handleToggleMobileTab(tab)}
                        className={`w-full text-left px-4 py-3.5 text-sm sm:text-base transition-colors flex items-center justify-between gap-3 cursor-pointer ${
                          isExpanded
                            ? 'bg-[#F4A261] text-[#1B3A34] font-bold'
                            : 'bg-[#EEF4F1] hover:bg-[#DCECE4] text-[#1B4D3E] font-semibold'
                        }`}
                      >
                        <span className="flex items-center gap-3 min-w-0">
                          {renderTabIcon(tab.icon, isExpanded)}
                          <span>{tab.label}</span>
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 shrink-0 transition-transform ${
                            isExpanded ? 'rotate-180 text-[#1B3A34]' : 'text-[#1B4D3E]'
                          }`}
                          aria-hidden="true"
                        />
                      </button>

                      <div
                        id={`home-acc-panel-${tab.id}`}
                        aria-labelledby={`home-acc-btn-${tab.id}`}
                        className={isExpanded ? 'p-5 space-y-4 border-t border-[#E0ECE6] bg-[#FBFDFB]' : 'hidden'}
                      >
                        <h2 className="text-xl sm:text-2xl font-extrabold text-[#1B4D3E] font-display leading-snug">
                          {tab.heading}
                        </h2>

                        {renderTabBody(tab.id)}

                        {tab.ctaLabel && tab.ctaPath && (
                          <div className="pt-1">
                            <NavLink
                              path={tab.ctaPath}
                              className="bg-[#F4A261] hover:bg-[#e7924e] text-[#1B3A34] font-extrabold text-sm px-6 py-3 rounded-full shadow-xs inline-flex items-center gap-2 cursor-pointer"
                            >
                              <span>{tab.ctaLabel}</span>
                              <ArrowRight className="w-4 h-4 text-[#1B3A34]" aria-hidden="true" />
                            </NavLink>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          );
        })()}
      </section>

      {/* 3. TESTIMONIALS WITH KEYWORDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B4D3E] font-display">
            Stories from new arrivals
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {(showAllReviews ? TESTIMONIALS : TESTIMONIALS.slice(0, 4)).map((item) => (
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

        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAllReviews((prev) => !prev)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#CFE0D7] bg-white hover:bg-[#EEF4F1] text-[#1B4D3E] font-bold text-sm shadow-2xs transition-colors cursor-pointer"
          >
            <span>{showAllReviews ? 'Show fewer reviews' : 'View more reviews'}</span>
            <ChevronDown
              className={`w-4 h-4 text-[#1B4D3E] transition-transform ${showAllReviews ? 'rotate-180' : ''}`}
              aria-hidden="true"
            />
          </button>
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
