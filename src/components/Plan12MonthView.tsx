import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, Circle, ArrowRight, Download, 
  Filter, Sparkles, AlertTriangle, Calendar 
} from 'lucide-react';
import { PLAN_STAGES, PlanStageInfo } from '../data/planData';
import { getGuideById } from '../data/guidesData';
import { AustralianState } from '../types';
import { getHref } from '../utils/routing';
import arrivalChecklistImg from '../assets/images/plan_arrival_checklist_1795004747130.jpg';
import simInternetImg from '../assets/images/guide_sim_internet_1795004742804.jpg';
import rentingHomeImg from '../assets/images/guide_renting_home_1795004744162.jpg';
import idPaperworkImg from '../assets/images/guide_id_paperwork_1795004746132.jpg';
import drivingCarImg from '../assets/images/guide_driving_car_1795004746652.jpg';

interface Plan12MonthViewProps {
  currentStageId?: string;
  onNavigate: (path: string) => void;
  onSelectGuide: (guideSlug: string) => void;
  onOpenSubscribeModal: () => void;
}

const STAGE_COPY: Record<
  string,
  { h1: string; intro: string; faqTitle: string }
> = {
  overview: {
    h1: 'Things to Do After Arriving in Australia: 12-Month Plan',
    intro:
      'Sorting out all the things to do after arriving in Australia is much calmer when you follow a clear order. This new migrant Australia setup guide breaks your year—starting with your first week in Australia checklist—into practical, sequential tasks. Confirm current visa, tax, and state rules directly with official portals such as ato.gov.au and homeaffairs.gov.au.',
    faqTitle: 'Frequently Asked Questions About Things to Do After Arriving in Australia'
  },
  'week-1': {
    h1: 'First Week in Australia Checklist: Days 1 to 7',
    intro:
      'Your first week in Australia checklist focuses on the four foundation tasks that unlock every step that follows. In this opening stage of our new migrant Australia setup guide, you can tick off the urgent things to do after arriving in Australia—getting a SIM card, verifying your bank passport ID, picking up a transit card, and applying for a TFN. Confirm current requirements on official government sites such as ato.gov.au and acma.gov.au.',
    faqTitle: 'Frequently Asked Questions About Your First Week in Australia Checklist'
  },
  'before-arrival': {
    h1: 'Moving to Australia Checklist: Before Arrival',
    intro:
      'Starting your moving to Australia checklist a few weeks before departure prevents stress during your first 48 hours on the ground. This pre-flight stage of our new migrant Australia setup guide helps you verify health cover, pre-open a bank account, book temporary accommodation, and prepare printed documents. Check visa entry conditions directly on immi.homeaffairs.gov.au.',
    faqTitle: 'Frequently Asked Questions Before Moving to Australia'
  },
  'month-1': {
    h1: 'Things to Do After Arriving in Australia: Month 1',
    intro:
      'Your Month 1 things to do after arriving in Australia focus on finding stable housing and getting connected at home. Inside this stage of our new migrant Australia setup guide, you will learn how to prepare for rental inspections, protect your bond, return a condition report, and furnish essentials affordably. Verify state bond and tenancy rules on consumer.vic.gov.au, fairtrading.nsw.gov.au, or cbs.sa.gov.au.',
    faqTitle: 'Frequently Asked Questions About Your First Month in Australia'
  },
  'months-2-3': {
    h1: 'New Migrant Australia Setup Guide: Months 2 to 3',
    intro:
      'Months 2 to 3 of our new migrant Australia setup guide shift focus to everyday Australian photo ID, work superannuation, and healthcare registration. Completing these steps protects your passport and ensures your employer super payments go into one low-fee fund. Confirm current Superannuation Guarantee rates directly on ato.gov.au.',
    faqTitle: 'Frequently Asked Questions About Months 2 to 3 in Australia'
  },
  'months-4-12': {
    h1: 'New Migrant Australia Setup Guide: Months 4 to 12',
    intro:
      'In Months 4 to 12 of our new migrant Australia setup guide, you can tackle longer-term milestones including vehicle checks, overseas driver licence conversion, police checks, and your annual tax return. Always verify state licensing cutoffs and clearance fees on official portals such as afp.gov.au, service.nsw.gov.au, vicroads.vic.gov.au, or sa.gov.au.',
    faqTitle: 'Frequently Asked Questions About Settling Long Term in Australia'
  }
};

const STAGE_IMAGES: Record<string, { src: string; alt: string }> = {
  overview: {
    src: arrivalChecklistImg,
    alt: 'Traveller arriving in an Australian international airport arrivals terminal with suitcase'
  },
  'before-arrival': {
    src: arrivalChecklistImg,
    alt: 'Traveller preparing pre-departure documents and luggage at an Australian arrivals terminal'
  },
  'week-1': {
    src: simInternetImg,
    alt: 'New arrival activating an Australian prepaid SIM card on a smartphone in Week 1'
  },
  'month-1': {
    src: rentingHomeImg,
    alt: 'Bright sunlit Australian apartment living room prepared for rental move-in'
  },
  'months-2-3': {
    src: idPaperworkImg,
    alt: 'Passport and document folder at an Australian civic service desk for ID verification'
  },
  'months-4-12': {
    src: drivingCarImg,
    alt: 'Modern silver car along a sunny Australian coastal road for driver licence and vehicle planning'
  }
};

export const Plan12MonthView: React.FC<Plan12MonthViewProps> = ({
  currentStageId = 'overview',
  onNavigate,
  onSelectGuide,
  onOpenSubscribeModal
}) => {
  const [activeStage, setActiveStage] = useState<string>(
    currentStageId === 'overview' ? 'week-1' : currentStageId
  );
  const [completedTasks, setCompletedTasks] = useState<Record<string, boolean>>({});
  const [selectedState, setSelectedState] = useState<AustralianState>('ALL');

  // Hydrate checklist state client-side only so SSR & initial render stay deterministic
  useEffect(() => {
    try {
      const saved = localStorage.getItem('fyau_completed_tasks');
      if (saved) {
        setCompletedTasks(JSON.parse(saved));
      }
    } catch {
      // ignore storage errors
    }
  }, []);

  useEffect(() => {
    if (currentStageId && currentStageId !== 'overview') {
      setActiveStage(currentStageId);
    } else if (currentStageId === 'overview') {
      setActiveStage('week-1');
    }
  }, [currentStageId]);

  const toggleTask = (taskId: string) => {
    const updated = {
      ...completedTasks,
      [taskId]: !completedTasks[taskId]
    };
    setCompletedTasks(updated);
    try {
      localStorage.setItem('fyau_completed_tasks', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const allTasks = PLAN_STAGES.flatMap((stage) => stage.tasks);
  const totalTasks = allTasks.length;
  const completedCount = allTasks.filter((t) => !!completedTasks[t.id]).length;
  const progressPercent = Math.round((completedCount / totalTasks) * 100);

  const currentStageData: PlanStageInfo =
    PLAN_STAGES.find((s) => s.id === activeStage) || PLAN_STAGES[1];

  const copy = STAGE_COPY[currentStageId] || STAGE_COPY.overview;
  const stageVisual =
    STAGE_IMAGES[activeStage] || STAGE_IMAGES[currentStageId] || STAGE_IMAGES.overview;

  const statesList: { code: AustralianState; name: string }[] = [
    { code: 'ALL', name: 'All States (National)' },
    { code: 'SA', name: 'South Australia (Adelaide)' },
    { code: 'VIC', name: 'Victoria (Melbourne)' },
    { code: 'NSW', name: 'New South Wales (Sydney)' },
    { code: 'QLD', name: 'Queensland (Brisbane)' },
    { code: 'WA', name: 'Western Australia (Perth)' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 bg-[#E2F4EE] text-[#1B4D3E] px-3.5 py-1.5 rounded-full text-xs font-bold">
          <Calendar className="w-3.5 h-3.5 text-[#2A9D8F]" />
          <span>Chronological Settlement Roadmap</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1B4D3E] font-display">
          {copy.h1}
        </h1>
        <p className="text-sm sm:text-base text-[#1B3A34]/85 leading-relaxed">
          {copy.intro}
        </p>

        {/* Action Header Button: "Download the free checklist" */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <a
            href={getHref('pricing/free')}
            onClick={(e) => {
              if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                e.preventDefault();
                onNavigate('pricing/free');
              }
            }}
            className="bg-[#F4A261] hover:bg-[#e7924d] text-[#1B3A34] font-bold text-xs sm:text-sm px-6 py-3 rounded-full shadow-md transition-all cursor-pointer flex items-center gap-2 active:scale-95"
          >
            <Download className="w-4 h-4 text-[#1B3A34]" />
            <span>Download the free checklist</span>
          </a>
          <button
            onClick={onOpenSubscribeModal}
            className="bg-white hover:bg-[#F6FAF7] text-[#1B4D3E] font-semibold text-xs sm:text-sm px-6 py-3 rounded-full border border-[#E0ECE6] shadow-xs transition-colors cursor-pointer"
          >
            Sync with Calendar (FirstYear Plus)
          </button>
        </div>
      </div>

      {/* Progress & State Customisation Bar */}
      <div className="bg-white rounded-3xl border border-[#E0ECE6] p-6 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#1B4D3E] text-sm sm:text-base">Your Settlement Progress</span>
              <span className="text-xs font-mono font-bold text-[#1B4D3E] bg-[#E2F4EE] px-3 py-1 rounded-full">
                {completedCount} of {totalTasks} milestones done ({progressPercent}%)
              </span>
            </div>
            <p className="text-xs text-[#1B3A34]/70">
              Tick off tasks as you complete them. Progress is automatically saved in your browser.
            </p>
          </div>

          {/* State Filter Selector */}
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-[#2A9D8F] shrink-0" />
            <label htmlFor="state-filter" className="text-xs font-semibold text-[#1B4D3E] whitespace-nowrap">
              My Destination State:
            </label>
            <select
              id="state-filter"
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value as AustralianState)}
              className="text-xs font-medium border border-[#E0ECE6] rounded-full px-3 py-1.5 bg-white text-[#1B3A34] focus:outline-none focus:ring-2 focus:ring-[#2A9D8F]"
            >
              {statesList.map((st) => (
                <option key={st.code} value={st.code}>
                  {st.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-[#E0ECE6]/60 rounded-full h-3 overflow-hidden">
          <div
            className="bg-gradient-to-r from-[#2A9D8F] to-[#F4A261] h-3 rounded-full transition-all duration-500"
            style={{ width: `${Math.max(progressPercent, 4)}%` }}
          ></div>
        </div>
      </div>

      {/* Stage Timeline Navigation Tabs (Crawlable anchor links) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3">
        {PLAN_STAGES.map((stage) => {
          const isActive = activeStage === stage.id;
          const stageTasks = stage.tasks;
          const stageDone = stageTasks.filter((t) => !!completedTasks[t.id]).length;
          const isWeekStage = stage.id === 'before-arrival' || stage.id === 'week-1';

          return (
            <a
              key={stage.id}
              href={getHref(`plan/${stage.id}`)}
              onClick={(e) => {
                if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                  e.preventDefault();
                  setActiveStage(stage.id);
                  onNavigate(`plan/${stage.id}`);
                }
              }}
              className={`p-4 rounded-3xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                isActive
                  ? 'bg-[#1B4D3E] text-white border-[#1B4D3E] shadow-md ring-2 ring-[#2A9D8F]/50'
                  : 'bg-white text-[#1B3A34] border-[#E0ECE6] hover:border-[#2A9D8F] hover:bg-[#F6FAF7] shadow-xs'
              }`}
            >
              <div>
                <span className={`text-[10px] uppercase font-extrabold tracking-wider px-2 py-0.5 rounded-full inline-block ${
                  isActive 
                    ? 'bg-white/20 text-[#E9C46A]' 
                    : isWeekStage 
                    ? 'bg-[#E2F4EE] text-[#1B4D3E]' 
                    : 'bg-[#FDE9DB] text-[#8B4513]'
                }`}>
                  {stage.timeframe}
                </span>
                <span className={`text-sm font-bold block mt-1.5 ${isActive ? 'text-white' : 'text-[#1B4D3E]'}`}>
                  {stage.title}
                </span>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-100/20 flex items-center justify-between text-[11px]">
                <span className={isActive ? 'text-emerald-100' : 'text-[#1B3A34]/70'}>
                  {stageDone}/{stageTasks.length} Done
                </span>
                {stageDone === stageTasks.length && (
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E9C46A]" />
                )}
              </div>
            </a>
          );
        })}
      </div>

      {/* Active Stage Detailed View */}
      <div className="bg-white rounded-3xl border border-[#E0ECE6] p-6 sm:p-8 space-y-8 shadow-xs">
        <div className="rounded-2xl overflow-hidden border border-[#E0ECE6]">
          <img
            src={stageVisual.src}
            alt={stageVisual.alt}
            referrerPolicy="no-referrer"
            className="w-full h-52 sm:h-72 object-cover"
          />
        </div>
        <div className="space-y-3 pb-6 border-b border-[#E0ECE6]">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <span className={`text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                activeStage === 'before-arrival' || activeStage === 'week-1'
                  ? 'bg-[#E2F4EE] text-[#1B4D3E]'
                  : 'bg-[#FDE9DB] text-[#8B4513]'
              }`}>
                {currentStageData.timeframe}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B4D3E] mt-1.5 font-display">
                {currentStageData.title}: What comes first?
              </h2>
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#1B3A34]/90 leading-relaxed">
            {currentStageData.summary}
          </p>

          {/* Why this exact order rationale */}
          <div className="bg-[#F6FAF7] border border-[#2A9D8F]/30 rounded-2xl p-4 text-xs sm:text-sm text-[#1B4D3E]">
            <h3 className="font-bold flex items-center gap-1.5 mb-1 text-sm sm:text-base">
              <Sparkles className="w-4 h-4 text-[#2A9D8F]" />
              <span>Why does this order matter in your new migrant Australia setup guide?</span>
            </h3>
            <p className="text-[#1B3A34]/80">
              {currentStageData.whyThisOrder}
            </p>
          </div>
        </div>

        {/* Interactive Task Checklist for this Stage */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base sm:text-lg font-bold text-[#1B4D3E]">
              What tasks belong in {currentStageData.title}?
            </h2>
            <span className="text-xs text-[#1B3A34]/70">
              Click checkbox to mark complete
            </span>
          </div>

          <div className="space-y-3">
            {currentStageData.tasks.map((task) => {
              const isChecked = !!completedTasks[task.id];
              const linkedGuide = task.guideSlug ? getGuideById(task.guideSlug) : undefined;
              const guidePath = linkedGuide ? `${linkedGuide.categorySlug}/${linkedGuide.slug}` : undefined;

              return (
                <div
                  key={task.id}
                  className={`p-4 rounded-2xl border transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                    isChecked
                      ? 'bg-[#E2F4EE]/60 border-[#2A9D8F]/40'
                      : 'bg-white border-[#E0ECE6] hover:border-[#2A9D8F] shadow-2xs'
                  }`}
                >
                  <div className="flex items-start gap-3 flex-1">
                    <button
                      onClick={() => toggleTask(task.id)}
                      className="mt-0.5 text-slate-400 hover:text-[#2A9D8F] transition-colors cursor-pointer shrink-0"
                      aria-label={isChecked ? 'Mark task as incomplete' : 'Mark task as complete'}
                    >
                      {isChecked ? (
                        <CheckCircle2 className="w-5 h-5 text-[#2A9D8F]" />
                      ) : (
                        <Circle className="w-5 h-5 text-slate-300 hover:text-[#2A9D8F]" />
                      )}
                    </button>
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`text-sm sm:text-base font-semibold ${
                          isChecked ? 'line-through text-slate-400' : 'text-[#1B4D3E]'
                        }`}>
                          {task.title}
                        </span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          task.priority === 'Essential'
                            ? 'bg-rose-100 text-rose-800'
                            : task.priority === 'High'
                            ? 'bg-[#FDE9DB] text-[#8B4513]'
                            : 'bg-slate-100 text-[#1B3A34]'
                        }`}>
                          {task.priority}
                        </span>
                        <span className="text-[11px] font-mono text-[#1B3A34]/70">
                          {task.estimatedDays}
                        </span>
                      </div>
                      <p className={`text-xs sm:text-sm ${
                        isChecked ? 'text-slate-400' : 'text-[#1B3A34]/80'
                      }`}>
                        {task.description}
                      </p>
                    </div>
                  </div>

                  {/* Keyword-rich Guide Link if linked */}
                  {task.guideSlug && guidePath && (
                    <a
                      href={getHref(guidePath)}
                      onClick={(e) => {
                        if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                          e.preventDefault();
                          onSelectGuide(task.guideSlug!);
                        }
                      }}
                      className="shrink-0 bg-[#EAF5F1] hover:bg-[#d6ece4] text-[#1B4D3E] border border-[#2A9D8F]/30 font-bold text-xs px-4 py-2 rounded-full transition-colors cursor-pointer inline-flex items-center gap-1.5 self-end sm:self-center"
                    >
                      <span>{linkedGuide?.seoKeyword || 'Read guide'}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#2A9D8F]" />
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Pitfalls to Avoid in this Stage */}
        <div className="bg-rose-50/70 border border-rose-200 rounded-2xl p-5 space-y-2">
          <h3 className="text-xs font-bold text-rose-900 uppercase tracking-wider flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4 text-rose-600" />
            <span>Common pitfalls to avoid during {currentStageData.title}</span>
          </h3>
          <ul className="space-y-1.5 text-xs sm:text-sm text-rose-950 list-disc pl-5">
            {currentStageData.pitfallsToAvoid.map((pitfall, idx) => (
              <li key={idx} className="leading-relaxed">
                {pitfall}
              </li>
            ))}
          </ul>
        </div>

        {/* Next Stage & Checklist Links */}
        <div className="pt-4 border-t border-[#E0ECE6] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-[#1B3A34]/70">
            Want automated alerts before bank ID and TFN deadlines expire?
          </span>
          <div className="flex items-center gap-3">
            <a
              href={getHref('pricing/free')}
              onClick={(e) => {
                if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                  e.preventDefault();
                  onNavigate('pricing/free');
                }
              }}
              className="text-xs text-[#2A9D8F] hover:text-[#1B4D3E] font-bold cursor-pointer underline"
            >
              Download free moving to Australia checklist
            </a>
            <button
              onClick={onOpenSubscribeModal}
              className="bg-[#F4A261] hover:bg-[#e7924d] text-[#1B3A34] font-bold text-xs px-5 py-2.5 rounded-full transition-all cursor-pointer inline-flex items-center gap-1"
            >
              <span>Get task reminders (A$4.99/mo)</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#1B3A34]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
