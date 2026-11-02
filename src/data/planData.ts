import { ChecklistTask } from '../types';

export interface PlanStageInfo {
  id: 'before-arrival' | 'week-1' | 'month-1' | 'months-2-3' | 'months-4-12';
  slug: string;
  title: string;
  timeframe: string;
  summary: string;
  seoKeyword: string;
  whyThisOrder: string;
  keyGoals: string[];
  pitfallsToAvoid: string[];
  tasks: ChecklistTask[];
}

export const PLAN_STAGES: PlanStageInfo[] = [
  {
    id: 'before-arrival',
    slug: 'before-arrival',
    title: 'Before Arrival',
    timeframe: 'Weeks 4 to 1 Before Departure',
    summary:
      'Laying the foundations from your home country so your first 48 hours in Australia are stress-free and organized.',
    seoKeyword: 'moving to Australia checklist',
    whyThisOrder:
      'Opening a bank account early lets you transfer settlement funds before flight day. Securing initial accommodation and health insurance are mandatory visa requirements.',
    keyGoals: [
      'Confirm overseas student or visitor health cover (OSHC or OVHC)',
      'Pre-apply for an Australian bank account with CommBank, NAB, or ANZ',
      'Book 10 to 14 nights of verified temporary accommodation near your campus or workplace',
      'Check device eSIM compatibility and print physical document backups'
    ],
    pitfallsToAvoid: [
      'Do not pay long-term rental deposits on Facebook Marketplace before landing in person',
      'Do not forget to inform your home banks that you are travelling abroad to prevent card blocks'
    ],
    tasks: [
      {
        id: 'task-oshc',
        stage: 'before-arrival',
        stageTitle: 'Before Arrival',
        title: 'Activate Overseas Health Cover (OSHC / OVHC)',
        description: 'Verify your health insurance policy number and download your digital membership card (Medibank, Bupa, Allianz Care).',
        category: 'Health & Visa',
        priority: 'Essential',
        estimatedDays: 'Day -21'
      },
      {
        id: 'task-pre-bank',
        stage: 'before-arrival',
        stageTitle: 'Before Arrival',
        title: 'Submit online pre-arrival bank account application',
        description: 'Open a fee-free transaction account with a Big Four bank up to 14 days before your flight.',
        guideSlug: 'bank-account',
        category: 'Banking',
        priority: 'Essential',
        estimatedDays: 'Day -14'
      },
      {
        id: 'task-temp-stay',
        stage: 'before-arrival',
        stageTitle: 'Before Arrival',
        title: 'Book 10-14 days of verified landing accommodation',
        description: 'Reserve student lodging (UniLodge/Scape) or a hotel with easy public transit access to campus/office.',
        category: 'Housing',
        priority: 'High',
        estimatedDays: 'Day -10'
      },
      {
        id: 'task-docs-pack',
        stage: 'before-arrival',
        stageTitle: 'Before Arrival',
        title: 'Organise printed documents and certified translations',
        description: 'Carry printed copies of your passport, visa grant letter, CoE / employment contract, and NAATI translations.',
        category: 'Paperwork',
        priority: 'High',
        estimatedDays: 'Day -3'
      }
    ]
  },
  {
    id: 'week-1',
    slug: 'week-1',
    title: 'Week 1: First 7 Days',
    timeframe: 'Days 1 to 7 in Australia',
    summary:
      'The critical landing window: connectivity, local banking activation, transit cards, and establishing your Australian identity.',
    seoKeyword: 'first week in Australia international student',
    whyThisOrder:
      'You cannot register your bank account or receive SMS verification codes without an Australian phone number. Having transit access enables property inspections and branch visits.',
    keyGoals: [
      'Activate an Australian SIM or eSIM and complete ACMA passport identity check',
      'Visit your nominated bank branch to verify your passport under the 6-week concession',
      'Acquire your state public transport card (Opal, myki, metroCARD, go card)',
      'Apply online for your Tax File Number (TFN) through the ATO'
    ],
    pitfallsToAvoid: [
      'Applying for a TFN before passing through Australian airport immigration (it will auto-reject)',
      'Travelling on public transport without touching on or on unverified concession tickets'
    ],
    tasks: [
      {
        id: 'task-sim',
        stage: 'week-1',
        stageTitle: 'Week 1',
        title: 'Activate Australian SIM card & mobile plan',
        description: 'Get an Australian number for multi-factor SMS codes, bank verification, and rental portals.',
        guideSlug: 'sim-internet',
        category: 'Connectivity',
        priority: 'Essential',
        estimatedDays: 'Day 1'
      },
      {
        id: 'task-bank-verify',
        stage: 'week-1',
        stageTitle: 'Week 1',
        title: 'Complete in-branch bank identity verification',
        description: 'Show your foreign passport at a local branch to unlock your debit card and set up PayID.',
        guideSlug: 'bank-account',
        category: 'Banking',
        priority: 'Essential',
        estimatedDays: 'Days 2-3'
      },
      {
        id: 'task-pt-card',
        stage: 'week-1',
        stageTitle: 'Week 1',
        title: 'Set up state public transport card or contactless pass',
        description: 'Get an Opal/myki/metroCARD or verify student concession discount eligibility.',
        guideSlug: 'public-transport',
        category: 'Transport',
        priority: 'Essential',
        estimatedDays: 'Day 2'
      },
      {
        id: 'task-tfn-apply',
        stage: 'week-1',
        stageTitle: 'Week 1',
        title: 'Submit free online TFN application on ATO website',
        description: 'Apply via the official ATO portal once your entry is verified in immigration systems.',
        guideSlug: 'tax-file-number',
        category: 'Tax & Work',
        priority: 'Essential',
        estimatedDays: 'Days 2-4'
      },
      {
        id: 'task-emergency-numbers',
        stage: 'week-1',
        stageTitle: 'Week 1',
        title: 'Save Australian emergency and consular contacts',
        description: 'Save 000 (Police/Ambulance/Fire), 131 444 (Police Assistance), and your campus security line.',
        category: 'Safety',
        priority: 'High',
        estimatedDays: 'Day 1'
      }
    ]
  },
  {
    id: 'month-1',
    slug: 'month-1',
    title: 'Month 1: Finding a Home & Routines',
    timeframe: 'Weeks 2 to 4',
    summary:
      'Securing your private rental or long-term lease, signing tenancy documents, setting up home utilities, and learning daily living rhythms.',
    seoKeyword: 'things to do after arriving in Australia',
    whyThisOrder:
      'With your bank account running, phone active, and TFN ARN ready, you have the financial dossier needed to pass real estate agency tenant checks.',
    keyGoals: [
      'Attend in-person property inspections and submit digital applications',
      'Pay residential tenancy bond to the official state statutory bond authority',
      'Complete and return the Incoming Condition Report within 3 to 7 business days',
      'Furnish Day 1 essentials (bed and fridge) without getting scammed on Marketplace'
    ],
    pitfallsToAvoid: [
      'Sending rental bonds directly to private bank accounts instead of government bond authorities',
      'Skipping the detailed condition report inspection and taking zero move-in photos'
    ],
    tasks: [
      {
        id: 'task-inspect-rent',
        stage: 'month-1',
        stageTitle: 'Month 1',
        title: 'Attend rental inspections and submit applications',
        description: 'Use the FirstYear AU rental application template pack for applicants with zero Australian rental history.',
        guideSlug: 'renting-inspections',
        category: 'Housing',
        priority: 'Essential',
        estimatedDays: 'Weeks 2-3'
      },
      {
        id: 'task-bond-lodge',
        stage: 'month-1',
        stageTitle: 'Month 1',
        title: 'Lodge bond with official state authority & save receipt',
        description: 'Ensure bond is sent to RTBA/RBO/CBS/RTA, not retained in the landlord’s personal account.',
        guideSlug: 'bond-condition-report',
        category: 'Housing',
        priority: 'Essential',
        estimatedDays: 'Move-in Day'
      },
      {
        id: 'task-cond-report',
        stage: 'month-1',
        stageTitle: 'Month 1',
        title: 'Complete and photograph Incoming Condition Report',
        description: 'Photograph all pre-existing wall marks, carpet stains, and appliance defects within the legal return window.',
        guideSlug: 'bond-condition-report',
        category: 'Housing',
        priority: 'Essential',
        estimatedDays: 'Days 1-5 of Lease'
      },
      {
        id: 'task-furnish-budget',
        stage: 'month-1',
        stageTitle: 'Month 1',
        title: 'Furnish bedroom and kitchen essentials on a budget',
        description: 'Source tested whitegoods, desks, and kitchenware from charity op-shops, Kmart, and Marketplace.',
        guideSlug: 'furniture',
        category: 'Housing',
        priority: 'High',
        estimatedDays: 'Weeks 3-4'
      },
      {
        id: 'task-connect-utilities',
        stage: 'month-1',
        stageTitle: 'Month 1',
        title: 'Set up electricity, gas, and home broadband',
        description: 'Compare energy offers on Victorian Energy Compare or Energy Made Easy to find lowest supply rates.',
        category: 'Utilities',
        priority: 'High',
        estimatedDays: 'Week 3'
      }
    ]
  },
  {
    id: 'months-2-3',
    slug: 'months-2-3',
    title: 'Months 2 to 3: Employment, ID & Finance',
    timeframe: 'Weeks 5 to 12',
    summary:
      'Safeguarding your passport with a local photo card, optimising employee superannuation, and exploring work opportunities.',
    seoKeyword: 'proof of age card South Australia',
    whyThisOrder:
      'Now that you have a permanent lease and utility bills in your name, you have the required proof of address to obtain a state Proof of Age card and start paid work legally.',
    keyGoals: [
      'Get an official 18+ Proof of Age card (Service SA, Service NSW, VicRoads)',
      'Choose a low-fee Industry Super Fund and link to myGov',
      'Provide TFN and Super details to your employer',
      'Register with a local bulk-billing or student-friendly General Practitioner (GP) clinic'
    ],
    pitfallsToAvoid: [
      'Carrying your foreign passport to pubs or clubs where it can easily be misplaced or stolen',
      'Accidentally creating multiple super accounts that drain balances in duplicate admin fees'
    ],
    tasks: [
      {
        id: 'task-proof-age',
        stage: 'months-2-3',
        stageTitle: 'Months 2 to 3',
        title: 'Apply for an 18+ Proof of Age / Photo Card',
        description: 'Get an official state photo ID card so you can safely leave your passport locked at home.',
        guideSlug: 'proof-of-age',
        category: 'Identity',
        priority: 'High',
        estimatedDays: 'Week 6'
      },
      {
        id: 'task-super-setup',
        stage: 'months-2-3',
        stageTitle: 'Months 2 to 3',
        title: 'Select an Industry Super Fund & link to myGov',
        description: 'Nominate Hostplus, AustralianSuper, or UniSuper to secure your mandatory 11.5%+ employer contributions.',
        guideSlug: 'superannuation',
        category: 'Finance & Tax',
        priority: 'High',
        estimatedDays: 'Weeks 6-8'
      },
      {
        id: 'task-gp-doctor',
        stage: 'months-2-3',
        stageTitle: 'Months 2 to 3',
        title: 'Register with a local medical clinic & GP',
        description: 'Find a medical centre that bills your OSHC/OVHC insurer directly to avoid out-of-pocket medical fees.',
        category: 'Health',
        priority: 'Medium',
        estimatedDays: 'Week 7'
      },
      {
        id: 'task-tax-deductions',
        stage: 'months-2-3',
        stageTitle: 'Months 2 to 3',
        title: 'Set up an expense log for work-related tax deductions',
        description: 'Keep receipts for work uniforms, course supplies, and home office expenses for the end-of-year tax return.',
        category: 'Finance & Tax',
        priority: 'Medium',
        estimatedDays: 'Week 10'
      }
    ]
  },
  {
    id: 'months-4-12',
    slug: 'months-4-12',
    title: 'Months 4 to 12: Long-Term Independence',
    timeframe: 'Months 4 through 12',
    summary:
      'Achieving full independence: buying a vehicle if needed, converting to an Australian driver licence, and securing work clearances for career growth.',
    seoKeyword: 'national police check for international students',
    whyThisOrder:
      'Vehicle purchases and licensing conversions require a stable residential address, settled budget, and understanding of local road regulations.',
    keyGoals: [
      'Decide whether a car is necessary and execute a PPSR check before purchasing',
      'Convert foreign licence to a local state driver licence (if required by residency rules)',
      'Obtain an AFP National Police Check for professional job applications',
      'Obtain a Working with Children Check (WWCC / Blue Card) for education or tutoring roles'
    ],
    pitfallsToAvoid: [
      'Buying a secondhand car without an official $2 PPSR check or roadworthy certificate',
      'Driving on an untranslated overseas licence past state-mandated residency limits'
    ],
    tasks: [
      {
        id: 'task-car-purchase',
        stage: 'months-4-12',
        stageTitle: 'Months 4 to 12',
        title: 'Run PPSR check & buy a vehicle (if required)',
        description: 'Verify VIN status on ppsr.gov.au to ensure zero financial encumbrance, theft, or write-off history.',
        guideSlug: 'buying-a-car',
        category: 'Transport',
        priority: 'Medium',
        estimatedDays: 'Months 4-6'
      },
      {
        id: 'task-licence-convert',
        stage: 'months-4-12',
        stageTitle: 'Months 4 to 12',
        title: 'Convert overseas licence to Australian state licence',
        description: 'Book road knowledge and driving tests at Service SA, VicRoads, or Service NSW before grace periods expire.',
        guideSlug: 'driver-licence',
        category: 'Transport',
        priority: 'High',
        estimatedDays: 'Months 5-8'
      },
      {
        id: 'task-police-check',
        stage: 'months-4-12',
        stageTitle: 'Months 4 to 12',
        title: 'Obtain an Australian Federal Police (AFP) Check',
        description: 'Required for university clinical placements, healthcare, aged care, and corporate internships.',
        guideSlug: 'police-check',
        category: 'Employment',
        priority: 'High',
        estimatedDays: 'Months 4-6'
      },
      {
        id: 'task-wwcc-card',
        stage: 'months-4-12',
        stageTitle: 'Months 4 to 12',
        title: 'Apply for state Working with Children Check (WWCC)',
        description: 'Enables paid tutoring, school sports coaching, retail, and childcare employment.',
        guideSlug: 'working-with-children',
        category: 'Employment',
        priority: 'High',
        estimatedDays: 'Months 5-7'
      },
      {
        id: 'task-tax-return',
        stage: 'months-4-12',
        stageTitle: 'Months 4 to 12',
        title: 'Lodge annual tax return via myTax (July 1 - Oct 31)',
        description: 'Lodge online for free through myGov to claim back excess tax withheld by employers.',
        category: 'Finance & Tax',
        priority: 'Essential',
        estimatedDays: 'Months 8-10'
      }
    ]
  }
];
