import { GuideFAQ } from '../types';

export const PLAN_FAQS: Record<string, GuideFAQ[]> = {
  overview: [
    {
      question: 'What are the first things to do after arriving in Australia?',
      answer:
        'Start with your first week in Australia checklist: activate an Australian prepaid SIM or eSIM, verify your passport at your bank branch within the 6-week window, get your city transit card, and apply for a Tax File Number free on ato.gov.au.'
    },
    {
      question: 'Why does the order of tasks in this new migrant Australia setup guide matter?',
      answer:
        'Each step unlocks the next—you need an active Australian phone number for bank SMS codes and rental portals, an Australian bank account to lodge a rental bond, and proof of address before applying for a state Proof of Age card.'
    },
    {
      question: 'Should I confirm dates and rules with official Australian government websites?',
      answer:
        'Yes. Tax rules, state bond caps, public transport concessions, and driver licence deadlines can change. Always double-check current requirements on ato.gov.au, homeaffairs.gov.au, and your state government website.'
    }
  ],
  'week-1': [
    {
      question: 'What should be on my first week in Australia checklist?',
      answer:
        'Focus on four priorities during Days 1 to 7: getting a local SIM card, completing your in-branch bank passport check, setting up a city public transport card (Opal, myki, go card, or metroCARD), and submitting your online TFN application at ato.gov.au.'
    },
    {
      question: 'Can I apply for my Tax File Number before landing in Australia?',
      answer:
        'No. The ATO online TFN application checks your passport against Department of Home Affairs border arrival records, so you must clear Australian airport immigration before applying on ato.gov.au.'
    },
    {
      question: 'Why do I need to visit my bank branch within 6 weeks of arriving?',
      answer:
        'Under AUSTRAC verification concessions, new arrivals can typically verify a bank account using just their passport within 6 weeks of landing. Missing that window usually requires full 100-point Australian ID.'
    }
  ],
  'before-arrival': [
    {
      question: 'Can I start my moving to Australia checklist before my flight?',
      answer:
        'Yes. Before departing, you can confirm Overseas Student Health Cover (OSHC) or visitor cover, pre-apply for a bank account with a major Australian bank, book temporary accommodation, and check if your phone supports eSIM.'
    },
    {
      question: 'Should I sign a private rental lease from overseas before arriving?',
      answer:
        'Be very cautious. Most legitimate Australian agencies require an in-person inspection, and online deposit scams target newcomers overseas. Book short-term hotel or student accommodation for your first 10 to 14 nights instead.'
    },
    {
      question: 'What documents should I bring in my carry-on luggage to Australia?',
      answer:
        'Pack printed copies of your passport, visa grant notice, university Confirmation of Enrolment (CoE) or job contract, health insurance certificate, and any NAATI-accredited English translations.'
    }
  ],
  'month-1': [
    {
      question: 'What are the main housing tasks in Month 1 after arriving in Australia?',
      answer:
        'Attend open-home rental inspections in person, submit a well-documented application pack, verify that your 4-week rental bond is lodged with your state bond authority, and return your Incoming Condition Report within the state deadline.'
    },
    {
      question: 'How soon must I return my Incoming Condition Report?',
      answer:
        'Return periods are short and set by state law—for instance, 2 business days in South Australia, 5 business days in Victoria, and 7 days in NSW. Confirm the exact window on your state tenancy portal.'
    },
    {
      question: 'Where can international students find affordable furniture in Month 1?',
      answer:
        'Combine a new mattress from budget retailers (like IKEA or Kmart) with tested whitegoods and desks from charity op-shops (Salvos, Vinnies) and in-person Marketplace pickups—avoiding advance PayID transfers.'
    }
  ],
  'months-2-3': [
    {
      question: 'Why should I get a Proof of Age card in Months 2 to 3?',
      answer:
        'Once you have a lease and bank statement showing your Australian address, you can apply for an official state 18+ Proof of Age or Photo Card so you never have to carry your foreign passport to venues or parcel pickups.'
    },
    {
      question: 'What should new migrants check about superannuation in Months 2 to 3?',
      answer:
        'Choose one low-fee super fund, provide your TFN to avoid extra tax, review automatic insurance fees, and link the ATO to your myGov account on my.gov.au so you can verify employer contributions.'
    },
    {
      question: 'Should I register with a local doctor (GP) during Months 2 to 3?',
      answer:
        'Yes. Finding a medical clinic near your university or home that direct-bills your OSHC or OVHC insurer helps avoid unexpected upfront medical costs when you get sick.'
    }
  ],
  'months-4-12': [
    {
      question: 'When should I look into converting an overseas driver licence in Australia?',
      answer:
        'Check your state transport department early—some states like Victoria and NSW enforce a 6-month continuous residency rule even for temporary visa holders, while permanent residents face shorter windows. Verify rules at vicroads.vic.gov.au, service.nsw.gov.au, or sa.gov.au.'
    },
    {
      question: 'What background checks help international students find jobs in Australia?',
      answer:
        'Depending on your industry, employers often ask for an Australian Federal Police (AFP) National Police Check (afp.gov.au) or a state Working with Children Check / Queensland Blue Card.'
    },
    {
      question: 'When do new migrants lodge an Australian tax return?',
      answer:
        'The Australian financial year runs from July 1 to June 30, and most individuals lodge between July 1 and October 31 via myTax on my.gov.au / ato.gov.au.'
    }
  ]
};

export const PRICING_FAQS: GuideFAQ[] = [
  {
    question: 'What is included free vs inside FirstYear Plus?',
    answer:
      'All 13 plain-English settlement guides, official government source links, and the printable moving to Australia checklist are free forever. FirstYear Plus (A$4.99/month or A$49/year) adds our full editable rental application template for new migrants, deadline reminders, video walkthroughs, and self-checks.'
  },
  {
    question: 'Can I preview the rental application template for new migrants before paying?',
    answer:
      'Yes. We provide a free preview of the cover letter, 100-point ID summary, and overseas referee layout right on our website with no sign-up required.'
  },
  {
    question: 'How do cancellation and the 7-day refund policy work?',
    answer:
      'You can cancel FirstYear Plus anytime with one click, with no lock-in contract. If you are not satisfied within 7 days of subscribing, request a full refund with no questions asked.'
  }
];

export const ABOUT_FAQS: GuideFAQ[] = [
  {
    question: 'Who writes and reviews the guides on FirstYear AU?',
    answer:
      'Our settlement team compiles step-by-step instructions directly from primary Australian government authorities (ato.gov.au, homeaffairs.gov.au, acma.gov.au, afp.gov.au, and state agencies) and stamps every guide with a Last Reviewed date.'
  },
  {
    question: 'Does FirstYear AU give visa or migration advice?',
    answer:
      'No. FirstYear AU provides general everyday settlement information (banking, TFN, housing, transport, and ID). For visa or migration advice, always check immi.homeaffairs.gov.au or consult a registered migration agent (MARA).'
  },
  {
    question: 'How does FirstYear AU make money if the guides are free?',
    answer:
      'Core guides and our basic moving to Australia checklist remain free. Revenue comes from optional FirstYear Plus subscriptions (A$4.99/month or A$49/year) and clearly labelled partner offers that never influence our editorial advice.'
  }
];
