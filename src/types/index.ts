export type ArrivalStage = 'moving-soon' | 'just-arrived' | 'settling-in';

export type AustralianState = 'ALL' | 'NSW' | 'VIC' | 'QLD' | 'SA' | 'WA' | 'TAS' | 'ACT' | 'NT';

export interface GuideOfficialSource {
  title: string;
  agency: string;
  url: string;
  note: string;
}

export interface GuideFAQ {
  question: string;
  answer: string;
}

export interface GuideStep {
  stepNumber: number;
  title: string;
  description: string;
  tip?: string;
  caution?: string;
}

export interface GuideItem {
  id: string; // e.g. 'sim-internet', 'bank-account', etc.
  category: 'Get Set-Up' | 'Find a Home' | 'Get Around' | 'ID and Paperwork';
  categorySlug: 'get-set-up' | 'find-a-home' | 'get-around' | 'id-and-paperwork';
  slug: string;
  title: string;
  seoKeyword: string;
  question: string;
  directAnswer: string;
  appliesTo: string;
  steps: GuideStep[];
  stateNotes?: Record<string, string>;
  faqs: GuideFAQ[];
  officialSources: GuideOfficialSource[];
  lastReviewed: string;
  reviewedBy: string;
  nextStepId: string;
  nextStepTitle: string;
  hasTemplateOffer?: boolean;
}

export interface ChecklistTask {
  id: string;
  stage: 'before-arrival' | 'week-1' | 'month-1' | 'months-2-3' | 'months-4-12';
  stageTitle: string;
  title: string;
  description: string;
  guideSlug?: string;
  category: string;
  priority: 'Essential' | 'High' | 'Medium';
  estimatedDays: string;
  done?: boolean;
}

export interface PartnerOffer {
  id: string;
  provider: string;
  category: 'Mobile & SIM' | 'Home Broadband' | 'Budget Furniture' | 'Banking & Money Transfer';
  title: string;
  tagline: string;
  benefit: string;
  priceNote: string;
  dealCode?: string;
  disclosure: string;
  url: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
