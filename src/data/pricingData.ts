import { PartnerOffer } from '../types';

export interface PlanFeature {
  name: string;
  free: boolean | string;
  plus: boolean | string;
  note?: string;
}

export const PLAN_COMPARISON: PlanFeature[] = [
  {
    name: 'All 13 In-Depth Australian Settlement Guides',
    free: true,
    plus: true,
    note: 'SIM, banking, TFN, transport, renting, bond, furniture, ID, super, car, licence, police check, WWCC'
  },
  {
    name: 'Interactive Settlement Checklist',
    free: 'Basic (Browser Only)',
    plus: 'Personalised & Cloud Synced',
    note: 'Track completed milestones across devices'
  },
  {
    name: 'Printable / PDF Checklist Download',
    free: true,
    plus: true,
    note: 'Take your physical checklist to inspections and appointments'
  },
  {
    name: 'State-Specific Rule Customisation (SA, VIC, NSW, QLD, WA)',
    free: true,
    plus: true,
    note: 'View state-level concession, bond and licensing variations'
  },
  {
    name: 'Rental Application Pack (Zero Rental History)',
    free: 'Preview Sample Only',
    plus: 'Full Editable Pack (Word & PDF)',
    note: 'Cover letter, overseas income proof format, guarantor letter & referee templates'
  },
  {
    name: 'Personalised 12-Month Calendar & Reminders',
    free: false,
    plus: true,
    note: 'Automated email & SMS alerts before state deadlines expire (e.g. 6-week bank ID, 28-day TFN)'
  },
  {
    name: 'Condition Report Video Walkthrough & Inspection Kit',
    free: false,
    plus: true,
    note: 'Step-by-step room walkthrough to prevent unfair bond deductions at move-out'
  },
  {
    name: 'Interactive Self-Check Diagnostic List',
    free: false,
    plus: true,
    note: 'Verify if your lease, pay slip, super and contracts comply with Australian law'
  },
  {
    name: 'Priority Access to New Settlement Modules',
    free: false,
    plus: true,
    note: 'Tax return lodgement walkthroughs and visa transition guides'
  }
];

export const PARTNER_OFFERS: PartnerOffer[] = [
  {
    id: 'partner-sim',
    provider: 'Boost Mobile Australia',
    category: 'Mobile & SIM',
    title: 'Full Telstra Network 4G/5G Coverage',
    tagline: 'Stay connected anywhere from Sydney to regional university campuses',
    benefit: 'No lock-in contracts, generous rollover data banking, and unlimited international calls to 30+ countries including India, China, UK, and Nepal.',
    priceNote: 'Plans from A$25/month',
    dealCode: 'FIRSTYEAR25',
    disclosure: 'Disclosed Partner Offer: FirstYear AU receives a modest referral commission if you activate through this link at no extra cost to you.',
    url: 'https://boost.com.au/'
  },
  {
    id: 'partner-nbn',
    provider: 'Superloop NBN Broadband',
    category: 'Home Broadband',
    title: 'High-Speed Student & Expat NBN Fibre',
    tagline: 'Reliable unlimited internet with quick setup in metropolitan rentals',
    benefit: 'A$15/month discount for your first 6 months. Free eero Wi-Fi 6 router included on eligible 12-month plans, with Australian-based technical support.',
    priceNote: 'From A$65/month (NBN 50)',
    dealCode: 'FIRSTYEARNBN',
    disclosure: 'Disclosed Partner Offer: FirstYear AU receives an affiliate fee if you connect home broadband via this offer.',
    url: 'https://www.superloop.com/'
  },
  {
    id: 'partner-furniture',
    provider: 'Salvos Stores & MoveIn Essentials',
    category: 'Budget Furniture',
    title: 'Affordable Student Bed & Desk Starter Bundles',
    tagline: 'Furnish your new bedroom sustainably without paying retail prices',
    benefit: '15% student discount voucher code for clean, tested flatpack bedroom sets, study desks, and kitchen homewares delivered directly to your rental.',
    priceNote: 'Starter packs from A$290',
    dealCode: 'FYSTUDENT15',
    disclosure: 'Disclosed Partner Offer: Curated partner promotion verified for transparent pricing and student affordability.',
    url: 'https://www.salvosstores.com.au/'
  },
  {
    id: 'partner-wise',
    provider: 'Wise (formerly TransferWise)',
    category: 'Banking & Money Transfer',
    title: 'Mid-Market Currency Exchange for Living Costs',
    tagline: 'Transfer tuition fees and living expenses without hidden bank spreads',
    benefit: 'Zero transfer fee on your first international money transfer up to A$1,000 equivalent into your new Australian bank account.',
    priceNote: 'Real mid-market exchange rate',
    dealCode: 'FIRSTYEARFREE',
    disclosure: 'Disclosed Partner Offer: Regulated international payments provider partnership; affiliate commission applies.',
    url: 'https://wise.com/'
  }
];

export const RENTAL_TEMPLATE_SAMPLE = {
  title: 'FirstYear AU Newcomer Rental Application Pack',
  subtitle: 'Specially engineered for applicants with ZERO Australian rental or credit history',
  sections: [
    {
      heading: '1. Professional Cover Letter (The "Arrival Story")',
      content: `Dear Property Manager / Landlord,\n\nRe: Application for Tenancy at [Property Address]\n\nMy name is [Full Name], and I am a [Postgraduate Student / Skilled Professional] recently arrived in [City] on an approved subclass [Visa Subclass, e.g. 500 Student / 482 Skilled] visa.\n\nWhile I am new to the Australian rental system and do not yet hold a local residential tenancy ledger, I am writing to provide complete financial verification demonstrating my capacity as an exemplary, quiet, and reliable tenant.\n\nKey Highlights of My Application:\n• Verified Financial Security: Attached are certified bank statements demonstrating [A$XX,XXX] in Australian liquid funds—equivalent to more than [X months] of rent.\n• Steady Income / Support: [Enrolment at University of Adelaide with confirmed fellowship / Full-time employment contract with Tech Services Australia at $XX,XXX/year].\n• Responsible Track Record: Attached is a formal letter of reference from my previous overseas landlord / university housing dean confirming 100% on-time rent payment and spotless property care.\n• Move-In Readiness: I have personally inspected the property, am ready to lodge the standard 4-week bond with [State Bond Authority, e.g., CBS / RTBA] immediately, and have arranged contents insurance.\n\nI treat my home with meticulous care and respect. Thank you for your consideration, and I welcome any questions.\n\nSincerely,\n[Full Name]\n[Australian Mobile Number] | [Australian Email Address]`
    },
    {
      heading: '2. Zero-History Financial Summary Schedule',
      content: `Itemised proof of income & living allowances:\n• Document A: Australian Bank Statement (BSB: XXX-XXX, Account: XXXXXXXX) showing A$XX,XXX.\n• Document B: Confirmation of Enrolment (CoE) + Scholarship / Salary Letter.\n• Document C: 100 Points of Identification Schedule (Passport: 70 pts, Debit Card: 25 pts, Utility/Student ID: 25 pts = 120 Points total).`
    },
    {
      heading: '3. Overseas Landlord & Character Referee Questionnaire',
      content: `Pre-formatted English reference verification questionnaire with contact details, time zone differences, and WhatsApp availability for quick response by your overseas referees.`
    }
  ]
};
