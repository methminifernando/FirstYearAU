import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, Circle, Clock, ArrowRight, Download, 
  Filter, Sparkles, AlertTriangle, ShieldCheck, HelpCircle, 
  Check, Calendar, ChevronRight
} from 'lucide-react';
import { PLAN_STAGES, PlanStageInfo } from '../data/planData';
import { AustralianState } from '../types';

interface Plan12MonthViewProps {
  currentStageId?: string;
  onNavigate: (path: string) => void;
  onSelectGuide: (guideSlug: string) => void;
  onOpenSubscribeModal: () => void;
}

export const Plan12MonthView: React.FC<Plan12MonthViewProps> = ({
  currentStageId = 'overview',
  onNavigate,
  onSelectGuide,
  onOpenSubscribeModal
}) => {
  const [activeStage, setActiveStage] = useState<string>(
    currentStageId === 'overview' ? 'week-1' : currentStageId
  );
  const [completedTasks, setCompletedTasks] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('fyau_completed_tasks');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });
  const [selectedState, setSelectedState] = useState<AustralianState>('ALL');

  useEffect(() => {
    if (currentStageId && currentStageId !== 'overview') {
      setActiveStage(currentStageId);
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

  // Calculate total tasks and completed tasks
  const allTasks = PLAN_STAGES.flatMap((stage) => stage.tasks);
  const totalTasks = allTasks.length;
  const completedCount = allTasks.filter((t) => !!completedTasks[t.id]).length;
  const progressPercent = Math.round((completedCount / totalTasks) * 100);

  const currentStageData: PlanStageInfo =
    PLAN_STAGES.find((s) => s.id === activeStage) || PLAN_STAGES[1];

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
          Things to do after arriving in Australia: 12-Month Plan
        </h1>
        <p className="text-sm sm:text-base text-[#1B3A34]/80 leading-relaxed">
          From your first week in Australia as an international student or skilled worker, to converting driver licences and lodging your first annual tax return. Follow tasks in chronological order so you never hit a roadblock.
        </p>

        {/* Action Header Button: "Download the free checklist" */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => onNavigate('pricing/free')}
            className="bg-[#F4A261] hover:bg-[#e7924d] text-[#1B3A34] font-bold text-xs sm:text-sm px-6 py-3 rounded-full shadow-md transition-all cursor-pointer flex items-center gap-2 active:scale-95"
          >
            <Download className="w-4 h-4 text-[#1B3A34]" />
            <span>Download the free checklist</span>
          </button>
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

        {/* Progress Bar in Eucalyptus Teal to Warm Orange */}
        <div className="w-full bg-[#E0ECE6]/60 rounded-full h-3 overflow-hidden">
          <div
            className="bg-gradient-to-r from-[#2A9D8F] to-[#F4A261] h-3 rounded-full transition-all duration-500"
            style={{ width: `${Math.max(progressPercent, 4)}%` }}
          ></div>
        </div>
      </div>

      {/* Stage Timeline Navigation Tabs with Week (Light Green) & Month (Light Orange) Tags */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3">
        {PLAN_STAGES.map((stage) => {
          const isActive = activeStage === stage.id;
          const stageTasks = stage.tasks;
          const stageDone = stageTasks.filter((t) => !!completedTasks[t.id]).length;
          const isWeekStage = stage.id === 'before-arrival' || stage.id === 'week-1';

          return (
            <button
              key={stage.id}
              onClick={() => {
                setActiveStage(stage.id);
                onNavigate(`plan/${stage.id}`);
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
            </button>
          );
        })}
      </div>

      {/* Active Stage Detailed View (White card with soft shadow) */}
      <div className="bg-white rounded-3xl border border-[#E0ECE6] p-6 sm:p-8 space-y-8 shadow-xs">
        {/* Stage Header */}
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
                {currentStageData.title}
              </h2>
            </div>
            <span className="bg-[#E2F4EE] text-[#1B4D3E] text-xs px-3 py-1 rounded-full font-semibold">
              Keyword: {currentStageData.seoKeyword}
            </span>
          </div>

          <p className="text-sm sm:text-base text-[#1B3A34]/90 leading-relaxed">
            {currentStageData.summary}
          </p>

          {/* Why this exact order rationale */}
          <div className="bg-[#F6FAF7] border border-[#2A9D8F]/30 rounded-2xl p-4 text-xs sm:text-sm text-[#1B4D3E]">
            <span className="font-bold flex items-center gap-1.5 mb-1">
              <Sparkles className="w-4 h-4 text-[#2A9D8F]" />
              Why this order matters:
            </span>
            <p className="text-[#1B3A34]/80">
              {currentStageData.whyThisOrder}
            </p>
          </div>
        </div>

        {/* Interactive Task Checklist for this Stage */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base sm:text-lg font-bold text-[#1B4D3E]">
              Essential Tasks for {currentStageData.title}
            </h3>
            <span className="text-xs text-[#1B3A34]/70">
              Click checkbox to mark complete
            </span>
          </div>

          <div className="space-y-3">
            {currentStageData.tasks.map((task) => {
              const isChecked = !!completedTasks[task.id];
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

                  {/* Guide Link Button if linked - Pill Shaped */}
                  {task.guideSlug && (
                    <button
                      onClick={() => onSelectGuide(task.guideSlug!)}
                      className="shrink-0 bg-[#EAF5F1] hover:bg-[#d6ece4] text-[#1B4D3E] border border-[#2A9D8F]/30 font-bold text-xs px-4 py-2 rounded-full transition-colors cursor-pointer inline-flex items-center gap-1.5 self-end sm:self-center"
                    >
                      <span>Read guide</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#2A9D8F]" />
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Pitfalls to Avoid in this Stage */}
        <div className="bg-rose-50/70 border border-rose-200 rounded-2xl p-5 space-y-2">
          <span className="text-xs font-bold text-rose-900 uppercase tracking-wider flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4 text-rose-600" />
            Costly Pitfalls to Avoid During {currentStageData.title}
          </span>
          <ul className="space-y-1.5 text-xs sm:text-sm text-rose-950 list-disc pl-5">
            {currentStageData.pitfallsToAvoid.map((pitfall, idx) => (
              <li key={idx} className="leading-relaxed">
                {pitfall}
              </li>
            ))}
          </ul>
        </div>

        {/* Next Stage Teaser */}
        <div className="pt-4 border-t border-[#E0ECE6] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-[#1B3A34]/70">
            Need automated reminders before state deadlines expire?
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('pricing/free')}
              className="text-xs text-[#2A9D8F] hover:text-[#1B4D3E] font-bold cursor-pointer underline"
            >
              Download PDF checklist
            </button>
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
