export interface BotResponse {
  answer: string;
  relatedGuideId?: string;
  relatedGuideTitle?: string;
  source?: string;
}

export interface SuggestedQuestion {
  label: string;
  prompt: string;
}

export const SUGGESTED_QUESTIONS: SuggestedQuestion[] = [
  {
    label: 'How to rent with no rental history?',
    prompt: 'How do I apply for a rental apartment in Australia if I have no Australian rental history?'
  },
  {
    label: 'Is TFN application free?',
    prompt: 'How do I apply for a TFN for free and avoid scam websites?'
  },
  {
    label: 'What is a rental bond?',
    prompt: 'What is a rental bond and who holds my money?'
  },
  {
    label: 'Proof of Age card in Adelaide (SA)',
    prompt: 'How do I get an 18+ Proof of Age card in South Australia so I do not carry my passport?'
  },
  {
    label: 'Can I claim my super when I leave?',
    prompt: 'Can international students and temporary visa holders withdraw their super when leaving Australia?'
  },
  {
    label: 'Do students get transport discounts?',
    prompt: 'Do international students get student concession fares on public transport in my state?'
  }
];

export function getBotAnswer(query: string): BotResponse {
  const q = query.toLowerCase();

  if (q.includes('rent') || q.includes('lease') || q.includes('history') || q.includes('inspection') || q.includes('landlord')) {
    return {
      answer:
        'To rent an apartment in Australia with zero local rental history, you should assemble a strong "Newcomer Pack": 3–6 months of certified bank statements showing living savings, an overseas university enrolment (CoE) or employment letter, and a personalised cover letter explaining your arrival story. Real estate agents care most about your ability to pay rent consistently. We also offer a free preview of our Newcomer Rental Application Template to help you format this!',
      relatedGuideId: 'renting-inspections',
      relatedGuideTitle: 'Renting and Attending Inspections',
      source: 'State Residential Tenancy Acts & FirstYear AU Guidance'
    };
  }

  if (q.includes('tfn') || q.includes('tax file number') || q.includes('tax') || q.includes('ato')) {
    return {
      answer:
        'Applying for a Tax File Number (TFN) is 100% FREE on the official ATO website (ato.gov.au). You must wait until you have cleared Australian airport border control so immigration databases recognize your entry. Your 9-digit TFN arrives in the post within 28 days. Never pay third-party websites charging $50–$100!',
      relatedGuideId: 'tax-file-number',
      relatedGuideTitle: 'Applying for a Tax File Number (TFN)',
      source: 'Australian Taxation Office (ATO)'
    };
  }

  if (q.includes('bond') || q.includes('condition report') || q.includes('rtba') || q.includes('deposit')) {
    return {
      answer:
        'A rental bond is usually 4 weeks of rent. In Australia, it is strictly illegal for a landlord to keep bond money in their personal bank account—it must be lodged with your state statutory bond authority (e.g. RTBA in Victoria, RBO in NSW, or CBS in South Australia). When you move in, you have 3 to 7 business days to complete the Incoming Condition Report and take 50+ photos to protect yourself from unfair deductions.',
      relatedGuideId: 'bond-condition-report',
      relatedGuideTitle: 'Bond Lodgement & Condition Reports',
      source: 'State Consumer Affairs & Tenancy Authorities'
    };
  }

  if (q.includes('proof of age') || q.includes('photo card') || q.includes('id') || q.includes('passport') || q.includes('pub') || q.includes('bar')) {
    return {
      answer:
        'An 18+ Proof of Age card (Photo Card) is issued by your state licensing agency (Service SA in Adelaide, Service NSW in Sydney, VicRoads in Melbourne). It costs roughly A$28–$65 and proves your identity at pubs, clubs, domestic flights, and parcel pickups without you having to risk losing your precious foreign passport.',
      relatedGuideId: 'proof-of-age',
      relatedGuideTitle: 'Getting a Proof of Age / Photo Card',
      source: 'Service SA / Service NSW / VicRoads'
    };
  }

  if (q.includes('super') || q.includes('superannuation') || q.includes('dasp') || q.includes('retirement')) {
    return {
      answer:
        'Superannuation is compulsory retirement savings paid by your employer. They must contribute an extra 11.5%+ on top of your hourly pay into an accredited fund. When you leave Australia permanently and your temporary visa expires, you can claim your balance back through the ATO’s Departing Australia Superannuation Payment (DASP).',
      relatedGuideId: 'superannuation',
      relatedGuideTitle: 'Superannuation (Super) Explained',
      source: 'Australian Taxation Office (ATO)'
    };
  }

  if (q.includes('transport') || q.includes('bus') || q.includes('train') || q.includes('tram') || q.includes('myki') || q.includes('opal') || q.includes('metrocard') || q.includes('concession')) {
    return {
      answer:
        'Each Australian state runs its own transit card: Opal in Sydney, myki in Melbourne, go card in Brisbane, and metroCARD in Adelaide. In South Australia, Queensland, WA, and ACT, full-time international students get 50% tertiary concession fares! In Victoria and NSW, international students pay adult fares unless their institution issues special passes.',
      relatedGuideId: 'public-transport',
      relatedGuideTitle: 'Public Transport & Smart Cards Across Australia',
      source: 'State Public Transport Authorities (PTV, Transport for NSW, Adelaide Metro)'
    };
  }

  if (q.includes('sim') || q.includes('phone') || q.includes('mobile') || q.includes('data') || q.includes('internet') || q.includes('telstra') || q.includes('optus')) {
    return {
      answer:
        'For new arrivals, budget MVNOs (Mobile Virtual Network Operators) like Boost Mobile (using 100% of the Telstra network) or Felix offer excellent prepaid 30-day plans with generous data banking for $25–$35/month. You need your foreign passport and a temporary Australian address to complete the mandatory ACMA identity registration.',
      relatedGuideId: 'sim-internet',
      relatedGuideTitle: 'SIM and Internet for New Arrivals',
      source: 'ACMA Telecommunications Regulations'
    };
  }

  if (q.includes('bank') || q.includes('bsb') || q.includes('account') || q.includes('commbank') || q.includes('nab') || q.includes('anz')) {
    return {
      answer:
        'You can apply for an everyday bank account online up to 14 days before departing. Australia allows a 6-week passport identity concession: if you visit an Australian branch within 6 weeks of landing, you only need to show your foreign passport to verify your identity and collect your debit card.',
      relatedGuideId: 'bank-account',
      relatedGuideTitle: 'Opening an Australian Bank Account',
      source: 'AUSTRAC Customer Identification Standards'
    };
  }

  if (q.includes('car') || q.includes('rego') || q.includes('ppsr') || q.includes('buying')) {
    return {
      answer:
        'Before buying any used car in Australia, always run an official A$2 government PPSR check on ppsr.gov.au using the 17-digit VIN. This proves whether a finance company owns the car, or if it was written off or reported stolen. You must also obtain a Roadworthy Certificate (RWC) where required by state law and transfer registration ("rego") within 14 days.',
      relatedGuideId: 'buying-a-car',
      relatedGuideTitle: 'Buying a Used Car in Australia',
      source: 'Australian Financial Security Authority (AFSA)'
    };
  }

  if (q.includes('licence') || q.includes('license') || q.includes('drive') || q.includes('driving')) {
    return {
      answer:
        'Temporary visa holders (such as international students) can legally drive on their valid foreign licence if it is in English or accompanied by an official NAATI-certified translation or International Driving Permit. In states like Victoria and SA, recent regulations require conversion if you live there continuously for more than 6 months.',
      relatedGuideId: 'driver-licence',
      relatedGuideTitle: 'Driving with an Overseas Licence & Conversion',
      source: 'State Licensing Authorities'
    };
  }

  if (q.includes('police') || q.includes('afp') || q.includes('criminal')) {
    return {
      answer:
        'A National Police Check covers criminal history records across all Australian states. For healthcare, aged care, security, and immigration, apply directly through the Australian Federal Police (AFP) portal for $42. It takes 2 to 5 business days for most applicants.',
      relatedGuideId: 'police-check',
      relatedGuideTitle: 'National Police Check for Jobs & Visas',
      source: 'Australian Federal Police'
    };
  }

  if (q.includes('children') || q.includes('wwcc') || q.includes('blue card') || q.includes('tutor') || q.includes('kids')) {
    return {
      answer:
        'Anyone doing paid work or volunteering involving children under 18 (e.g. tutoring, school holiday programs, childcare) must hold a Working with Children Check (called a Blue Card in Queensland). Apply through your state authority online and verify your passport at Australia Post.',
      relatedGuideId: 'working-with-children',
      relatedGuideTitle: 'Working with Children Check (WWCC)',
      source: 'State Child Protection Agencies'
    };
  }

  // Default helpful response
  return {
    answer:
      'Welcome to FirstYear AU! We help new migrants and international students navigate their first 12 months in Australia in plain English. I can help answer questions on setting up a phone SIM, opening a bank account, applying for a TFN, renting with no rental history, paying bond, getting a Proof of Age card, buying a car, or organizing police checks. What task can I assist you with today?',
    relatedGuideId: '12-month-plan',
    relatedGuideTitle: 'Explore the 12-Month Settlement Plan',
    source: 'FirstYear AU Settlement Advisory Team'
  };
}
