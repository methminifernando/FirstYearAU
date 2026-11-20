import { GuideItem } from '../types';

export const GUIDES: GuideItem[] = [
  // 1. SIM and Internet
  {
    id: 'sim-internet',
    category: 'Get Set-Up',
    categorySlug: 'get-set-up',
    slug: 'sim-internet',
    title: 'Best SIM Card for New Arrivals in Australia & Home Internet',
    seoKeyword: 'best sim card new arrivals australia',
    intro:
      'Choosing the best SIM card for new arrivals in Australia gives you an active local phone number on Day 1 for banking codes, maps, and job applications. Whether you need a prepaid SIM card as an international student in Australia or NBN internet after signing a lease, this guide walks through your main options in plain English. Always confirm current mobile ID verification requirements on acma.gov.au before activating.',
    question: 'How do I choose a prepaid SIM card as an international student in Australia?',
    directAnswer:
      'You can buy a prepaid Australian SIM card at the airport or activate an eSIM before boarding your flight. Australia has three primary mobile networks—Telstra, Optus, and Vodafone—along with lower-cost resellers called MVNOs (Mobile Virtual Network Operators) that run on those same towers. Under Australian law, you must complete a mandatory identity check using your foreign passport and temporary Australian address.',
    appliesTo:
      'All newly arrived migrants, international students (subclass 500), temporary graduates (subclass 485), and skilled visa holders.',
    stepsHeading: 'How do new arrivals set up a SIM card and home broadband in Australia?',
    steps: [
      {
        stepNumber: 1,
        title: 'Check phone unlock status and eSIM compatibility',
        description:
          'Confirm your phone is unlocked by your home carrier before flying. If your handset supports eSIM, you can download an Australian prepaid plan over airport Wi-Fi or prior to departure.',
        tip: 'Check that your phone supports Australian 4G and 5G bands, especially Band 28 (700 MHz), which is important for regional coverage.'
      },
      {
        stepNumber: 2,
        title: 'Compare major networks vs prepaid MVNO providers',
        description:
          'Telstra has the broadest regional reach, while Optus and Vodafone offer competitive metro coverage. Many international students choose MVNOs such as Boost Mobile, Felix, Belong, or Moose Mobile on no-lock-in 30-day prepaid plans that include international call credits and data banking.',
        tip: 'Look for prepaid plans with unlimited international calls to your home country if you call family regularly.'
      },
      {
        stepNumber: 3,
        title: 'Complete the mandatory ACMA identity verification',
        description:
          'Australian telecommunications regulations require every SIM card to be registered to your legal identity. Keep your passport, visa details, and the address of your hotel, student lodge, or temporary stay handy.',
        caution: 'Never buy an already-activated SIM from an informal seller; your legal name must match your banking and ATO records.'
      },
      {
        stepNumber: 4,
        title: 'Organise short-term wireless or NBN home internet',
        description:
          'If you are in temporary accommodation, a 5G home wireless modem requires no technician visit and plugs straight into a wall socket. Once you sign a lease, check your address on nbnco.com.au to pick an NBN broadband plan.',
        tip: 'Check what NBN technology is installed at your rental (FTTP, FTTC, or FTTN) before purchasing a router.'
      }
    ],
    stateNotes: {
      'Regional WA / SA / QLD / NT': 'If you plan to study or work in regional towns or remote areas, check Telstra or Boost Mobile coverage maps carefully before choosing a provider.',
      'Metro (Sydney, Melbourne, Brisbane, Adelaide, Perth)': 'All three primary mobile networks and major MVNOs offer strong 4G and 5G signals across capital cities and university campuses.'
    },
    faqHeading: 'Frequently Asked Questions About Australian SIM Cards for New Arrivals',
    faqs: [
      {
        question: 'What is the best prepaid SIM card for an international student in Australia?',
        answer: 'Most international students start with a 30-day no-contract prepaid SIM from a major carrier or an MVNO (such as Boost, Belong, or Optus prepaid) that includes generous local data, data rollover, and international minutes. Compare current plan inclusions directly on provider websites.'
      },
      {
        question: 'Can I keep my home WhatsApp number when I switch to an Australian SIM?',
        answer: 'Yes. When you insert an Australian physical SIM or activate an eSIM, WhatsApp asks if you want to keep your existing number. Select "Keep" so your chats and groups remain unchanged.'
      },
      {
        question: 'What ID do I need to activate a prepaid SIM card in Australia?',
        answer: 'You need your current foreign passport and a valid Australian residential or temporary accommodation address to satisfy the Australian Communications and Media Authority (ACMA) identity check.'
      }
    ],
    officialSources: [
      {
        agency: 'Australian Communications and Media Authority (ACMA)',
        title: 'Identity Checks for Prepaid Mobile Services',
        url: 'https://www.acma.gov.au/identity-checks-prepaid-mobiles',
        note: 'Official federal rules explaining mandatory passport verification when buying an Australian SIM card'
      },
      {
        agency: 'NBN Co Australia',
        title: 'Check Your Address for NBN Broadband',
        url: 'https://www.nbnco.com.au/',
        note: 'Verify NBN broadband availability and connection hardware at your Australian address'
      }
    ],
    lastReviewed: 'November 2026',
    reviewedBy: 'FirstYear AU Settlement Advisory Team',
    nextStepId: 'bank-account',
    nextStepTitle: 'Open an Australian Bank Account',
    nextStepAnchorText: 'Next step: how to open a bank account in Australia as a new arrival',
    relatedGuides: [
      { id: 'tax-file-number', anchorText: 'how to apply for a TFN online in Australia' },
      { id: 'public-transport', anchorText: 'setting up public transport cards in Australia' },
      { id: 'renting-inspections', anchorText: 'how to rent with no rental history in Australia' }
    ]
  },

  // 2. Bank Account
  {
    id: 'bank-account',
    category: 'Get Set-Up',
    categorySlug: 'get-set-up',
    slug: 'bank-account',
    title: 'How to Open a Bank Account in Australia as a New Arrival',
    seoKeyword: 'open bank account australia new arrival',
    intro:
      'Learning how to open a bank account in Australia as a new arrival helps you receive wages, pay rent via PayID, and avoid overseas card conversion fees. We also explain what to look for when choosing the best bank account for a new migrant in Australia, from student fee waivers to branch access. Always confirm current verification rules directly with your chosen bank and austrac.gov.au.',
    question: 'Which is the best bank account for a new migrant in Australia?',
    directAnswer:
      'Many new arrivals start with an everyday transaction account from one of Australia’s Big Four banks (Commonwealth Bank, ANZ, NAB, or Westpac), which allow you to apply online before you fly or within 6 weeks of landing using only your passport. Look for accounts with zero monthly maintenance fees or full-time student waivers, wide ATM access, and instant PayID support.',
    appliesTo:
      'All incoming temporary and permanent visa holders. Visiting a branch within 6 weeks of landing lets you verify your identity under Australia’s new-arrival passport concession.',
    stepsHeading: 'How do you open a bank account in Australia as a new arrival?',
    steps: [
      {
        stepNumber: 1,
        title: 'Compare everyday transaction accounts and apply online',
        description:
          'Review fee-free transaction accounts from Commonwealth Bank, NAB, ANZ, or Westpac, or digital-first accounts once you hold local ID. Most major banks let you apply up to 14 days before your flight and choose a convenient branch near your arrival address.',
        tip: 'International students can usually waive monthly account keeping fees by showing university enrolment confirmation.'
      },
      {
        stepNumber: 2,
        title: 'Transfer initial living funds safely',
        description:
          'Once your account is created, your bank provides a 6-digit BSB (Bank State Branch) code and an account number. Compare exchange rates and fees across your bank and regulated remittance providers such as Wise or OFX before moving living funds.',
        tip: 'Keep a screenshot of your BSB and account number handy for employers, rental applications, and your TFN setup.'
      },
      {
        stepNumber: 3,
        title: 'Visit a branch with your passport within 6 weeks of arrival',
        description:
          'Under Australian anti-money-laundering rules overseen by AUSTRAC, new arrivals generally have a 6-week window after landing to verify their identity in branch using just a foreign passport and visa details. Waiting longer can require full 100-point Australian ID.',
        caution: 'Book or visit your bank branch in Week 1 so your debit card and full transfer access are unlocked before you inspect rentals.'
      },
      {
        stepNumber: 4,
        title: 'Activate PayID and link your Tax File Number (TFN)',
        description:
          'Register your Australian mobile number as your PayID inside your banking app for instant, fee-free bank transfers. Once your TFN arrives from the ATO, enter it in your banking app to prevent higher withholding tax on savings interest.',
        tip: 'In Australia, friends and landlords often use PayID rather than sharing full BSB and account numbers.'
      }
    ],
    stateNotes: {
      'National Coverage': 'Major Australian banks operate branches across NSW, VIC, QLD, SA, WA, TAS, ACT, and NT, and follow federal identification standards under AUSTRAC.'
    },
    faqHeading: 'Frequently Asked Questions About Opening an Australian Bank Account',
    faqs: [
      {
        question: 'Can I open a bank account in Australia with no local credit history?',
        answer: 'Yes. Standard everyday transaction and savings accounts in Australia do not require a local credit score. You only need valid passport identification and visa verification.'
      },
      {
        question: 'What happens if I miss the 6-week bank passport verification window?',
        answer: 'If more than 6 weeks pass after your arrival, banks usually require additional Australian documents (such as a state Proof of Age card, lease agreement, or utility bill) to satisfy standard 100-point ID checks. Confirm exact rules with your bank.'
      },
      {
        question: 'What is a BSB number and PayID in Australia?',
        answer: 'A BSB (Bank State Branch) is a 6-digit code identifying your bank and branch, paired with your account number. PayID links your mobile number or email to your account for instant transfers.'
      }
    ],
    officialSources: [
      {
        agency: 'Australian Transaction Reports and Analysis Centre (AUSTRAC)',
        title: 'Customer Identification & Verification Guidance',
        url: 'https://www.austrac.gov.au/business/core-guidance/customer-identification-and-verification',
        note: 'Official Australian rules on identity verification for new arrivals opening bank accounts'
      },
      {
        agency: 'Moneysmart (ASIC)',
        title: 'Banking and Choosing an Account in Australia',
        url: 'https://moneysmart.gov.au/banking/banking-in-australia',
        note: 'Independent government consumer guide to bank accounts, fees, and safe banking'
      }
    ],
    lastReviewed: 'November 2026',
    reviewedBy: 'FirstYear AU Settlement Advisory Team',
    nextStepId: 'tax-file-number',
    nextStepTitle: 'Apply for a Tax File Number (TFN)',
    nextStepAnchorText: 'Next step: how to apply for a TFN online in Australia for free',
    relatedGuides: [
      { id: 'sim-internet', anchorText: 'choosing the best SIM card for new arrivals in Australia' },
      { id: 'superannuation', anchorText: 'learn how superannuation works in Australia for new migrants' },
      { id: 'renting-inspections', anchorText: 'how to prepare a rental application as a new migrant' }
    ]
  },

  // 3. Tax File Number (TFN)
  {
    id: 'tax-file-number',
    category: 'Get Set-Up',
    categorySlug: 'get-set-up',
    slug: 'tax-file-number',
    title: 'How to Apply for TFN Online in Australia (Free ATO Guide)',
    seoKeyword: 'apply for tfn online australia',
    intro:
      'Knowing how to apply for a TFN online in Australia is essential before starting any part-time, casual, or full-time job. This plain-English guide breaks down the official TFN application for international students and skilled migrants so you avoid paid scam websites. Always submit your application directly and confirm current tax rules on the official Australian Taxation Office website at ato.gov.au.',
    question: 'How does a TFN application for international students and migrants work?',
    directAnswer:
      'Applying for a TFN online in Australia is 100% free through the official Australian Taxation Office (ATO) website. You must wait until you have arrived in Australia and cleared border control so the ATO system can verify your passport and visa status automatically with the Department of Home Affairs. Your 9-digit Tax File Number is mailed to your Australian address.',
    appliesTo:
      'International students (subclass 500), temporary graduates, working holiday makers, and skilled migrants who have work rights on their visa.',
    stepsHeading: 'How do I complete a TFN application as an international student online?',
    steps: [
      {
        stepNumber: 1,
        title: 'Arrive in Australia and clear airport immigration first',
        description:
          'The ATO online form checks your passport against Australian border arrival records. Applying from overseas before landing will fail automatically.',
        tip: 'Wait at least 24 hours after passing customs so your arrival record is updated across federal systems.'
      },
      {
        stepNumber: 2,
        title: 'Apply directly on the official ATO website (ato.gov.au)',
        description:
          'Go to ato.gov.au and choose the online application for "Foreign passport holders, permanent migrants and temporary visitors". Enter your passport details, visa subclass, and an Australian postal address where you can receive mail reliably.',
        caution: 'Never pay a third-party website to submit a TFN form—official TFN applications on ato.gov.au are always completely free.'
      },
      {
        stepNumber: 3,
        title: 'Save your Application Reference Number (ARN)',
        description:
          'Once submitted, the screen displays an Application Reference Number (ARN). Save a PDF or screenshot immediately so you can show an employer that your TFN is already in progress.',
        tip: 'You generally have 28 days after starting employment to give your TFN to your employer before higher withholding rates apply—check current timeframes on ato.gov.au.'
      },
      {
        stepNumber: 4,
        title: 'Give your TFN to your employer and link it to your bank',
        description:
          'When your 9-digit TFN letter arrives by post, complete your employer’s TFN Declaration and add your TFN to your Australian bank account and superannuation fund.',
        caution: 'Keep your TFN strictly confidential—never post it in social chats or include it on general job resumes or rental applications.'
      }
    ],
    stateNotes: {
      'National Federal System': 'Tax File Numbers and income tax rules are administered federally by the ATO, meaning the online application process is the same in every Australian state and territory.'
    },
    faqHeading: 'Frequently Asked Questions About Applying for a TFN Online',
    faqs: [
      {
        question: 'How long does a TFN application for an international student take?',
        answer: 'Once submitted online via ato.gov.au, the ATO posts your TFN letter to your nominated Australian address, typically within 28 days. Check current processing times directly on ato.gov.au.'
      },
      {
        question: 'Can I start working while waiting for my TFN to arrive?',
        answer: 'Yes, provided your visa permits work. Let your employer know you have applied for a TFN and supply your Application Reference Number while waiting for the letter, following guidance on ato.gov.au.'
      },
      {
        question: 'Is there any fee to apply for a TFN online in Australia?',
        answer: 'No. Applying for a TFN through ato.gov.au is completely free. Avoid commercial websites that charge a processing fee.'
      }
    ],
    officialSources: [
      {
        agency: 'Australian Taxation Office (ATO)',
        title: 'Foreign Passport Holders & Temporary Visitors – Apply for a TFN',
        url: 'https://www.ato.gov.au/individuals-and-families/tax-file-number/apply-for-a-tfn/foreign-passport-holders-permanent-migrants-and-temporary-visitors-tfn-application',
        note: 'Official, free federal government portal to submit your TFN application'
      },
      {
        agency: 'Department of Home Affairs',
        title: 'Visa Entitlement Verification Online (VEVO)',
        url: 'https://immi.homeaffairs.gov.au/visas/already-have-a-visa/check-visa-details-and-conditions/overview',
        note: 'Verify your visa work conditions before commencing employment'
      }
    ],
    lastReviewed: 'November 2026',
    reviewedBy: 'FirstYear AU Settlement Advisory Team',
    nextStepId: 'public-transport',
    nextStepTitle: 'Set Up Public Transport & Travel Cards',
    nextStepAnchorText: 'Next step: set up public transport cards across Australian cities',
    relatedGuides: [
      { id: 'bank-account', anchorText: 'how to open a bank account in Australia as a new arrival' },
      { id: 'superannuation', anchorText: 'learn how super works in Australia for new migrants' },
      { id: 'police-check', anchorText: 'apply for a police check as an international student in Australia' }
    ]
  },

  // 4. Public Transport
  {
    id: 'public-transport',
    category: 'Get Around',
    categorySlug: 'get-around',
    slug: 'public-transport',
    title: 'Public Transport Cards in Australia: City-by-City Guide',
    seoKeyword: 'public transport cards australia',
    intro:
      'Understanding public transport cards in Australia makes getting to campus, bank appointments, and rental inspections effortless from Day 1. Every Australian state runs its own smart card or contactless payment network, and student concession eligibility depends heavily on which state you live in. Always confirm current fares and concession rules on your local state transport authority website.',
    question: 'How do public transport smart cards and student concessions work across Australia?',
    directAnswer:
      'Australia uses state-based transit ticketing rather than a single national card—such as Opal in Sydney, myki in Melbourne, metroCARD in Adelaide, and go card in South East Queensland. Many networks now support contactless Visa or Mastercard tap-and-go for adult fares, while international student concession discounts vary significantly between states.',
    appliesTo:
      'All newcomers commuting to universities, workplaces, supermarkets, and open-home rental inspections.',
    stepsHeading: 'How do new arrivals set up public transport cards in each Australian city?',
    steps: [
      {
        stepNumber: 1,
        title: 'Get your city’s transport card or check contactless options',
        description:
          'Sydney/NSW: Opal card or contactless payment card. Melbourne/VIC: myki card (or Mobile myki on Android). Brisbane/SE QLD: go card or Smart Ticketing. Adelaide/SA: metroCARD or contactless tap on buses and trams. Perth/WA: SmartRider. Canberra/ACT: MyWay+.',
        tip: 'Always remember to tap on when boarding and tap off when leaving buses, ferries, and gated train stations.'
      },
      {
        stepNumber: 2,
        title: 'Verify international student concession eligibility in your state',
        description:
          'States set their own student fare rules. South Australia, Queensland, WA, ACT, and Tasmania generally offer tertiary concession fares to eligible full-time international students, whereas Victoria and NSW restrict standard concessions primarily to domestic students unless specific pass schemes apply.',
        caution: 'Do not use a concession card unless you meet your state’s official rules and carry valid student proof; transit officers issue heavy fines for invalid concessions.'
      },
      {
        stepNumber: 3,
        title: 'Install official local trip-planning apps',
        description:
          'Google Maps works reliably nationwide, alongside official state apps such as Opal Travel (NSW), PTV (VIC), Translink (QLD), and Adelaide Metro for live platform changes and service alerts.',
        tip: 'Check weekly travel caps and off-peak fare windows on your state transport site to reduce commuting costs.'
      },
      {
        stepNumber: 4,
        title: 'Know late-night station safety zones and emergency contacts',
        description:
          'Major train platforms have marked night-safety zones with bright lighting, CCTV, and emergency help buttons. At night, consider sitting in the carriage near the guard or driver.',
        tip: 'Save 000 for emergencies on your phone as soon as your Australian SIM is active.'
      }
    ],
    stateNotes: {
      'South Australia (Adelaide)': 'Eligible full-time international tertiary students can apply for concession fares using a metroCARD. Check current eligibility on adelaidemetro.com.au.',
      'Victoria (Melbourne)': 'Melbourne uses myki for trains, trams, and buses, and includes a Free Tram Zone inside the central CBD. Check ptv.vic.gov.au for student pass rules.',
      'New South Wales (Sydney)': 'Opal cards and contactless debit/credit cards share adult daily and weekly travel caps across trains, buses, ferries, and light rail. See transportnsw.info.',
      'Queensland (Brisbane)': 'Full-time international students in South East Queensland can register for tertiary concession fares on translink.com.au.'
    },
    faqHeading: 'Frequently Asked Questions About Public Transport in Australia',
    faqs: [
      {
        question: 'Can I tap my foreign bank card or phone on Australian buses and trains?',
        answer: 'Yes, contactless networks in cities like Sydney, Brisbane, and Adelaide accept Visa and Mastercard debit/credit cards and mobile wallets for adult fares, though your overseas bank may charge foreign transaction fees.'
      },
      {
        question: 'Do international students get discounted public transport in Australia?',
        answer: 'It depends on the state. South Australia, Queensland, WA, ACT, and Tasmania offer concession options for eligible full-time students, while NSW and Victoria have specific restrictions. Always verify rules on your state transport authority website.'
      },
      {
        question: 'How does the Melbourne Free Tram Zone work?',
        answer: 'Within central Melbourne CBD and Docklands boundaries, tram rides are free and you do not need to touch on your myki unless your journey travels outside the free zone.'
      }
    ],
    officialSources: [
      {
        agency: 'Transport for NSW',
        title: 'Opal Card and Contactless Ticketing',
        url: 'https://transportnsw.info/tickets-opal',
        note: 'Official Sydney & NSW transit caps, fares, and concession rules'
      },
      {
        agency: 'Public Transport Victoria (PTV)',
        title: 'myki Fares & Concession Eligibility',
        url: 'https://www.ptv.vic.gov.au/tickets/fares/concession-fares/',
        note: 'Official Melbourne ticketing, Free Tram Zone map, and student pass information'
      },
      {
        agency: 'Adelaide Metro',
        title: 'Tertiary Student Concessions (SA)',
        url: 'https://www.adelaidemetro.com.au/tickets-and-fares/tertiary-students',
        note: 'Official concession rules for university students in Adelaide and South Australia'
      }
    ],
    lastReviewed: 'November 2026',
    reviewedBy: 'FirstYear AU Settlement Advisory Team',
    nextStepId: 'renting-inspections',
    nextStepTitle: 'Renting and Attending Inspections',
    nextStepAnchorText: 'Next step: how to rent with no rental history in Australia',
    relatedGuides: [
      { id: 'sim-internet', anchorText: 'best SIM card for new arrivals in Australia' },
      { id: 'driver-licence', anchorText: 'rules for driving in Australia on an overseas licence' },
      { id: 'proof-of-age', anchorText: 'apply for a Proof of Age card in Australia' }
    ]
  },

  // 5. Renting and Inspections
  {
    id: 'renting-inspections',
    category: 'Find a Home',
    categorySlug: 'find-a-home',
    slug: 'renting-inspections',
    title: 'How to Rent With No Rental History in Australia',
    seoKeyword: 'rent with no rental history australia',
    intro:
      'Figuring out how to rent with no rental history in Australia is often the biggest challenge for international students and newly arrived migrants. This guide explains how to rent in Australia without local references and prepare a strong rental application as a new migrant so property managers can assess your reliability quickly. Always verify local tenancy laws and rent-bidding bans on state government websites such as consumer.vic.gov.au, fairtrading.nsw.gov.au, and cbs.sa.gov.au.',
    question: 'How to rent in Australia without local references or credit history?',
    directAnswer:
      'Australian real estate agents look for verified identity, affordability, and reliable character references. When you have no Australian rental history, you can strengthen your rental application by preparing a clear dossier containing certified bank statements showing savings, your university Confirmation of Enrolment (CoE) or employment contract, overseas landlord or employer referees, and a concise cover letter.',
    appliesTo:
      'International students, skilled visa holders, and newcomers applying for apartments, units, or shared houses across Australia.',
    hasTemplateOffer: true,
    stepsHeading: 'How do I prepare a rental application as a new migrant in Australia?',
    steps: [
      {
        stepNumber: 1,
        title: 'Prepare your 100 points of ID and financial proof early',
        description:
          'Property managers assess identity (passport, visa grant letter, bank card, student ID) alongside capacity to pay rent. Notice that rent in Australia is advertised per week even if paid fortnightly or monthly.',
        tip: 'Include a clear summary page showing your liquid savings balance or scholarship/salary letter in Australian dollars.'
      },
      {
        stepNumber: 2,
        title: 'Attend property inspections in person',
        description:
          'Most agencies require you—or someone representing you—to inspect the apartment at an advertised open-for-inspection before processing your application. Arrive slightly early and introduce yourself politely to the leasing agent.',
        caution: 'Never transfer bond money or holding deposits for any property listed privately without inspecting inside in person and verifying the agent or landlord.'
      },
      {
        stepNumber: 3,
        title: 'Build a clean Zero-History New Migrant Rental Application Pack',
        description:
          'Combine your passport, visa grant, financial statement, CoE or job offer, overseas references (in English), and an arrival cover letter into one clean pack. Previewing a structured template helps prevent missing documents.',
        tip: 'You can preview our rental application template for new migrants free before applying on 2Apply or realestate.com.au.'
      },
      {
        stepNumber: 4,
        title: 'Submit quickly after the inspection and alert referees',
        description:
          'Pre-fill your tenant profile on platforms like 2Apply, Ignite, or TenantApp before inspecting so you can apply promptly after leaving. Let your referees know via messaging apps to expect an automated reference email.',
        tip: 'Consider starting in short-term or student accommodation while inspecting private rentals calmly in person.'
      }
    ],
    stateNotes: {
      'South Australia (Adelaide)': 'Consumer and Business Services (cbs.sa.gov.au) oversees residential tenancies; rent bidding is prohibited.',
      'Victoria (Melbourne)': 'Consumer Affairs Victoria (consumer.vic.gov.au) enforces minimum rental standards and bans solicited rent bidding.',
      'New South Wales (Sydney)': 'NSW Fair Trading (fairtrading.nsw.gov.au) regulates residential leases, holding deposits, and tenant rights.'
    },
    faqHeading: 'Frequently Asked Questions About Renting With No Rental History in Australia',
    faqs: [
      {
        question: 'How do I rent in Australia without local references?',
        answer: 'Replace missing local references with strong financial proof (bank savings statements, salary offer, or scholarship letter), overseas landlord or academic references with current email contacts, and a well-structured cover letter.'
      },
      {
        question: 'Can a landlord force me to pay six months of rent upfront?',
        answer: 'Across major Australian states, landlords and agents are restricted by tenancy laws from demanding excessive rent in advance. Check exact state limits on consumer.vic.gov.au, fairtrading.nsw.gov.au, or cbs.sa.gov.au.'
      },
      {
        question: 'What is the 100-point ID check on an Australian rental application?',
        answer: 'Agencies assign points to identification documents—such as a passport, Australian bank card, student ID, or Proof of Age card—to verify identity. Keep clear scans ready before inspecting.'
      }
    ],
    officialSources: [
      {
        agency: 'Consumer Affairs Victoria',
        title: 'Renting a Home and Applying for Properties',
        url: 'https://www.consumer.vic.gov.au/housing/renting',
        note: 'Victorian rules on tenant applications, rent bidding bans, and minimum standards'
      },
      {
        agency: 'NSW Fair Trading',
        title: 'Renting in New South Wales',
        url: 'https://www.fairtrading.nsw.gov.au/housing-and-property/renting',
        note: 'Official NSW tenant information and lease rights'
      },
      {
        agency: 'Consumer and Business Services (SA)',
        title: 'Renting Advice for South Australia',
        url: 'https://www.cbs.sa.gov.au/renting',
        note: 'South Australian residential tenancy guidance and inspection rules'
      }
    ],
    lastReviewed: 'November 2026',
    reviewedBy: 'FirstYear AU Settlement Advisory Team',
    nextStepId: 'bond-condition-report',
    nextStepTitle: 'Pay Rental Bond and Complete Condition Report',
    nextStepAnchorText: 'Next step: how to lodge your rental bond and condition report safely',
    relatedGuides: [
      { id: 'bank-account', anchorText: 'how to open a bank account in Australia as a new arrival' },
      { id: 'furniture', anchorText: 'finding cheap furniture for international students in Australia' },
      { id: 'proof-of-age', anchorText: 'getting a Proof of Age card in Australia for extra ID points' }
    ]
  },

  // 6. Bond and Condition Report
  {
    id: 'bond-condition-report',
    category: 'Find a Home',
    categorySlug: 'find-a-home',
    slug: 'bond-condition-report',
    title: 'Rental Bond and Condition Report Guide for Australia',
    seoKeyword: 'rental bond condition report australia',
    intro:
      'Knowing how a rental bond and condition report work in Australia protects your deposit from unfair deductions when you move out. Your bond is held safely by an independent state authority rather than your landlord, and your incoming condition report documents the property’s exact state on move-in day. Always confirm state deadlines with official portals such as fairtrading.nsw.gov.au, rentalbonds.vic.gov.au, cbs.sa.gov.au, or rta.qld.gov.au.',
    question: 'How do rental bond lodgement and incoming condition reports protect Australian tenants?',
    directAnswer:
      'In Australia, a rental bond (commonly equal to 4 weeks of rent, subject to state rules) must be lodged with an official state bond authority, never kept privately by a landlord. Within the statutory timeframe after collecting keys (typically 2 to 7 business days depending on your state), you inspect the home, add photos and notes to the Incoming Condition Report, and return a signed copy.',
    appliesTo:
      'All newcomers signing a residential tenancy agreement or rooming lease in Australia.',
    stepsHeading: 'How do you pay a rental bond and finish a condition report step by step?',
    steps: [
      {
        stepNumber: 1,
        title: 'Confirm your bond is lodged with your state bond authority',
        description:
          'Each state holds bonds securely: Rental Bonds Online (NSW), RTBA (VIC), Consumer and Business Services (SA), and RTA (QLD). You should receive an official email or SMS receipt with a bond number directly from the government authority.',
        caution: 'Never let a landlord hold your bond in cash or in a personal bank account without lodging it with the state authority.'
      },
      {
        stepNumber: 2,
        title: 'Inspect every room thoroughly before unpacking boxes',
        description:
          'Walk through every room with good lighting before moving heavy furniture in. Test taps, stove burners, exhaust fans, window latches, blinds, and air-conditioning units.',
        tip: 'Check inside ovens, shower grout, and behind doors for pre-existing scratches, stains, or wear.'
      },
      {
        stepNumber: 3,
        title: 'Take timestamped photos and video evidence',
        description:
          'Capture clear photos and a slow walkthrough video of every wall, floor, carpet, and appliance, and save them in cloud storage with dates intact so you have clear proof at lease end.',
        tip: 'Compare the agent’s checklist item by item and write clear notes wherever you spot pre-existing marks.'
      },
      {
        stepNumber: 4,
        title: 'Return your signed Condition Report before the deadline',
        description:
          'Email or upload your amended Incoming Condition Report within your state’s strict window (for example, 2 business days in SA, 5 business days in VIC, or 7 days in NSW) and keep a copy for yourself.',
        caution: 'Missing the return window can mean the landlord’s original report is taken as the agreed baseline.'
      }
    ],
    stateNotes: {
      'Victoria (RTBA)': 'Condition reports must be returned within 5 business days; confirm bond caps on rentalbonds.vic.gov.au.',
      'New South Wales (RBO)': 'Tenants generally have 7 days to return the condition report, and bond lodgement is handled via Rental Bonds Online.',
      'South Australia (CBS)': 'Condition report return periods are very short (2 business days in SA), so start inspecting on move-in day. Check cbs.sa.gov.au for bond caps.'
    },
    faqHeading: 'Frequently Asked Questions About Rental Bonds and Condition Reports',
    faqs: [
      {
        question: 'What is "fair wear and tear" on an Australian rental?',
        answer: 'Fair wear and tear means normal everyday deterioration over time, such as faded paint or minor carpet wear from regular walking. Tenants are not responsible for ordinary fair wear and tear.'
      },
      {
        question: 'Who holds my rental bond money during the lease?',
        answer: 'In every Australian state, your bond is held independently by a government statutory authority (such as RTBA, RBO, CBS, or RTA) until both parties agree on release or a tribunal resolves a claim.'
      },
      {
        question: 'What can I do if there is a bond dispute when moving out?',
        answer: 'Check your state bond portal for how to submit a bond claim or contact your state tenant advice body and tribunal (such as VCAT, NCAT, or SACAT) with your move-in condition photos.'
      }
    ],
    officialSources: [
      {
        agency: 'NSW Fair Trading / Service NSW',
        title: 'Rental Bonds Online (RBO)',
        url: 'https://www.service.nsw.gov.au/transaction/apply-rental-bonds-online',
        note: 'Official NSW state bond lodgement portal and claim instructions'
      },
      {
        agency: 'Victorian Residential Tenancies Bond Authority',
        title: 'RTBA Online Guide for Renters',
        url: 'https://rentalbonds.vic.gov.au/',
        note: 'Victorian statutory bond registration and refund rules'
      },
      {
        agency: 'Residential Tenancies Authority (QLD)',
        title: 'Rental Bonds and Entry Condition Reports',
        url: 'https://www.rta.qld.gov.au/starting-a-tenancy/rental-bond',
        note: 'Queensland bond handling rules and dispute support'
      }
    ],
    lastReviewed: 'November 2026',
    reviewedBy: 'FirstYear AU Settlement Advisory Team',
    nextStepId: 'furniture',
    nextStepTitle: 'Furnish Your Australian Home on a Budget',
    nextStepAnchorText: 'Next step: find cheap furniture for international students in Australia',
    relatedGuides: [
      { id: 'renting-inspections', anchorText: 'how to rent with no rental history in Australia' },
      { id: 'bank-account', anchorText: 'how to open a bank account in Australia as a new arrival' },
      { id: 'proof-of-age', anchorText: 'applying for a Proof of Age card in Australia' }
    ]
  },

  // 7. Furniture
  {
    id: 'furniture',
    category: 'Find a Home',
    categorySlug: 'find-a-home',
    slug: 'furniture',
    title: 'Cheap Furniture for International Students in Australia',
    seoKeyword: 'cheap furniture international students australia',
    intro:
      'Finding cheap furniture for international students in Australia is essential because most private rentals come completely unfurnished without beds, fridges, or tables. Combining secondhand finds from charity op-shops and local marketplaces with affordable flatpack staples keeps setup costs manageable. Always follow Scamwatch safety advice at scamwatch.gov.au when buying secondhand online.',
    question: 'How can new arrivals furnish an unfurnished rental apartment on a student budget?',
    directAnswer:
      'Most long-term Australian rentals include no furniture or whitegoods. You can set up Day 1 essentials—especially a bed and a refrigerator—affordably by buying a new mattress, visiting tested charity op-shops (Salvos, Vinnies), comparing Kmart and IKEA basics, and buying secondhand safely in person without sending advance deposits.',
    appliesTo:
      'International students and new migrants moving into unfurnished flats, apartments, or share houses.',
    stepsHeading: 'Where do new migrants find affordable furniture without getting scammed?',
    steps: [
      {
        stepNumber: 1,
        title: 'Focus on Day 1 sleep and kitchen essentials first',
        description:
          'Avoid overspending before you move in. Prioritise a clean mattress, bed frame, fridge, and simple cooking utensils from budget stores like Kmart, Big W, or IKEA.',
        tip: 'New boxed mattresses delivered to your door avoid hygiene issues common with street or used mattresses.'
      },
      {
        stepNumber: 2,
        title: 'Use Facebook Marketplace and Gumtree safely',
        description:
          'Searching phrases like "moving sale" can turn up gently used study desks, chairs, and dining tables at big discounts from people relocating.',
        caution: 'Pay via cash or PayID only after seeing the item in person. Ignore requests asking for your email for fake "PayID business account upgrades".'
      },
      {
        stepNumber: 3,
        title: 'Shop at charity op-shops for tested secondhand goods',
        description:
          'Charity stores like Salvos Stores and Vinnies often carry secondhand tables, bookshelves, and electrically tested and tagged appliances at student-friendly prices.',
        tip: 'Op-shops check electrical appliances for Australian safety compliance before putting them on the floor.'
      },
      {
        stepNumber: 4,
        title: 'Plan low-cost transport for bulky items',
        description:
          'If you do not own a car, compare short-term van or ute hire, store delivery services, or local transport helpers, and always measure apartment lifts and doorways first.',
        tip: 'Check local council hard-rubbish rules before collecting kerbside items, as council regulations vary by suburb.'
      }
    ],
    stateNotes: {
      'Council By-Laws': 'Local city councils manage kerbside hard-waste rules independently. Check your local council website before leaving or collecting items on nature strips.'
    },
    faqHeading: 'Frequently Asked Questions About Budget Furniture in Australia',
    faqs: [
      {
        question: 'Are Australian rental apartments usually furnished?',
        answer: 'Private long-term rentals in Australia are usually leased unfurnished, meaning tenants supply their own bed, desk, fridge, and washing machine unless the listing specifically says "furnished".'
      },
      {
        question: 'What is an Australian "op-shop"?',
        answer: 'An op-shop (opportunity shop) is a charity retail store selling donated furniture, homewares, and clothing, with proceeds supporting local community services.'
      },
      {
        question: 'How do I avoid online Marketplace PayID scams in Australia?',
        answer: 'Never send advance holding fees or follow email links claiming you must pay to "upgrade PayID". PayID is free and requires no upgrades—report suspicious messages on scamwatch.gov.au.'
      }
    ],
    officialSources: [
      {
        agency: 'Scamwatch (ACCC)',
        title: 'Classified & Online Marketplace Scams',
        url: 'https://www.scamwatch.gov.au/types-of-scams/buying-or-selling/classified-scams',
        note: 'Official Australian consumer guidance on avoiding secondhand buying scams'
      },
      {
        agency: 'Energy Rating Australia',
        title: 'Appliance Energy Rating Calculator',
        url: 'https://www.energyrating.gov.au/',
        note: 'Compare electricity running costs for refrigerators and washing machines'
      }
    ],
    lastReviewed: 'November 2026',
    reviewedBy: 'FirstYear AU Settlement Advisory Team',
    nextStepId: 'proof-of-age',
    nextStepTitle: 'Get an 18+ Proof of Age Card',
    nextStepAnchorText: 'Next step: apply for a Proof of Age card in Australia to protect your passport',
    relatedGuides: [
      { id: 'renting-inspections', anchorText: 'how to rent with no rental history in Australia' },
      { id: 'bond-condition-report', anchorText: 'completing your rental bond and condition report' },
      { id: 'superannuation', anchorText: 'how does super work in Australia for new migrants' }
    ]
  },

  // 8. Proof of Age Card
  {
    id: 'proof-of-age',
    category: 'ID and Paperwork',
    categorySlug: 'id-and-paperwork',
    slug: 'proof-of-age',
    title: 'Proof of Age Card Australia: Everyday 18+ Photo ID Guide',
    seoKeyword: 'proof of age card australia',
    intro:
      'Getting a Proof of Age card in Australia lets you verify your age and identity everywhere without risking your foreign passport on nights out or errands. Every Australian state and territory issues an official 18+ Photo Card through its local transport or service centre, and this guide walks through the documents and steps required nationwide. Always confirm current fees and eligibility on your official state or territory portal.',
    question: 'How do I apply for an 18+ Proof of Age or Photo Card in Australia?',
    directAnswer:
      'An Australian Proof of Age card (often called an 18+ card or state Photo Card) is an official government photo ID issued across all Australian states and territories for adults aged 18 and over who do not hold an Australian driver licence. Applying at your local state or territory service centre (such as Service NSW, VicRoads, TMR Queensland, WA Department of Transport, Service SA, Service Tasmania, Access Canberra, or MVR NT) requires your foreign passport, visa details, and proof of local Australian address.',
    appliesTo:
      'International students and new migrants aged 18+ who do not yet hold an Australian state driver licence.',
    stepsHeading: 'How do new arrivals get a Proof of Age card in Australia?',
    steps: [
      {
        stepNumber: 1,
        title: 'Identify your state issuing authority',
        description:
          'South Australia: Proof of Age card (Service SA). Victoria: Proof of Age card (VicRoads). New South Wales: NSW Photo Card (Service NSW). Queensland: Photo Identification Card (Transport and Main Roads). Western Australia: WA Photo Card (Department of Transport).',
        tip: 'If you live in Adelaide, check Service SA appointment options and required forms at sa.gov.au.'
      },
      {
        stepNumber: 2,
        title: 'Gather your identity and Australian address documents',
        description:
          'Bring your valid foreign passport, visa grant documentation, Australian bank card, and official proof of your local residential address (such as a bank statement, rental lease, or utility bill matching your exact passport spelling).',
        tip: 'Double-check that your middle and family names match across your bank account and lease before applying.'
      },
      {
        stepNumber: 3,
        title: 'Attend a service centre in person for photo verification',
        description:
          'Submit your application in person (or complete online pre-steps where supported), have your photograph captured at the counter, and pay the applicable state card fee.',
        tip: 'States such as NSW and South Australia also support digital passes in official government mobile apps after issuance.'
      },
      {
        stepNumber: 4,
        title: 'Keep your foreign passport safely stored at home',
        description:
          'Once your physical card arrives by post, carry it for domestic flights, parcel collection, licensed venues, and 100-point ID checks while locking your passport securely at home.',
        caution: 'Replacing a lost foreign passport at an embassy is expensive and time-consuming—report any lost state ID promptly.'
      }
    ],
    stateNotes: {
      'South Australia (Service SA)': 'Often searched as the "18 Plus card South Australia" or SA Proof of Age card—apply through Service SA centres with your passport and SA address proof. Confirm current fees at sa.gov.au.',
      'Victoria (VicRoads)': 'Applications require identity verification and witness endorsement where specified. Check current rules at vicroads.vic.gov.au.',
      'New South Wales (Service NSW)': 'Issued as the NSW Photo Card at Service NSW centres, with 5-year and 10-year options. Check service.nsw.gov.au for current pricing.'
    },
    faqHeading: 'Frequently Asked Questions About Australian Proof of Age Cards',
    faqs: [
      {
        question: 'Where do I apply for an 18 Plus card in South Australia?',
        answer: 'In South Australia, Proof of Age cards are issued through Service SA customer service centres. Check the latest ID checklist and application fees on sa.gov.au before visiting.'
      },
      {
        question: 'Can I use an overseas driver licence at pubs and venues in Australia?',
        answer: 'Many Australian venues and bottle shops do not accept overseas driver licences as proof of age. A state-issued Proof of Age or Photo Card is widely recognised across the country.'
      },
      {
        question: 'Does an Australian Proof of Age card work for domestic flights?',
        answer: 'Yes. Major domestic airlines in Australia accept current government-issued state Proof of Age or Photo Cards as photo identification on domestic flights.'
      }
    ],
    officialSources: [
      {
        agency: 'Government of South Australia (Service SA)',
        title: 'Apply for a Proof of Age Card in South Australia',
        url: 'https://www.sa.gov.au/topics/driving-and-transport/licences/proof-of-age-card',
        note: 'Official requirements and application forms for an 18+ Proof of Age card in SA'
      },
      {
        agency: 'Service NSW',
        title: 'Apply for an NSW Photo Card',
        url: 'https://www.service.nsw.gov.au/transaction/apply-for-an-nsw-photo-card',
        note: 'NSW eligibility criteria, digital wallet info, and current card fees'
      },
      {
        agency: 'VicRoads',
        title: 'Victorian Proof of Age Card',
        url: 'https://www.vicroads.vic.gov.au/licences/proof-of-age-card',
        note: 'Victorian ID requirements, referee rules, and application centres'
      }
    ],
    lastReviewed: 'November 2026',
    reviewedBy: 'FirstYear AU Settlement Advisory Team',
    nextStepId: 'superannuation',
    nextStepTitle: 'Set Up and Manage Your Superannuation',
    nextStepAnchorText: 'Next step: learn how superannuation works in Australia for new migrants',
    relatedGuides: [
      { id: 'bank-account', anchorText: 'how to open a bank account in Australia as a new arrival' },
      { id: 'driver-licence', anchorText: 'convert a foreign driver’s licence in Australia' },
      { id: 'police-check', anchorText: 'apply for a police check as an international student in Australia' }
    ]
  },

  // 9. Superannuation
  {
    id: 'superannuation',
    category: 'Get Set-Up',
    categorySlug: 'get-set-up',
    slug: 'superannuation',
    title: 'How Does Super Work in Australia? Guide for New Migrants',
    seoKeyword: 'how does super work in australia',
    intro:
      'Understanding how super works in Australia ensures you do not miss out on mandatory employer retirement contributions when you start working. We break down key superannuation rules for new migrants in Australia—including picking one low-fee fund, tracking payments via myGov, and claiming eligible balances when permanently departing. Always check current Superannuation Guarantee rates and DASP rules on ato.gov.au.',
    question: 'What are the superannuation rules in Australia for new migrants and students?',
    directAnswer:
      'Superannuation ("super") is Australia’s compulsory retirement savings system. Eligible employees receive compulsory Superannuation Guarantee (SG) contributions paid by their employer on top of their ordinary wage into an Australian super fund. Temporary visa holders who leave Australia permanently after their visa ends may be able to apply for a Departing Australia Superannuation Payment (DASP) through the ATO.',
    appliesTo:
      'All eligible full-time, part-time, and casual workers in Australia, including international students and skilled temporary visa holders.',
    stepsHeading: 'How do new migrants set up and track superannuation in Australia?',
    steps: [
      {
        stepNumber: 1,
        title: 'Pick one super fund so you avoid duplicate account fees',
        description:
          'When you start your first Australian job, your employer offers a default fund or asks you to nominate your own using a Superannuation Standard Choice form. Many newcomers compare low-fee industry super funds and keep just one active fund.',
        tip: 'If you work multiple casual jobs, give every employer the exact same super fund details so fees do not erode multiple small accounts.'
      },
      {
        stepNumber: 2,
        title: 'Provide your TFN and check default insurance settings',
        description:
          'Give your Tax File Number (TFN) to your super fund so contributions are taxed at standard concessional rates instead of extra penalty tax. Also check whether default life insurance was added automatically and whether it suits your situation.',
        tip: 'Compare super fund fees and performance independently using the ATO YourSuper comparison tool on ato.gov.au.'
      },
      {
        stepNumber: 3,
        title: 'Link the ATO to myGov to monitor employer deposits',
        description:
          'Create a myGov account (my.gov.au) and link it to the ATO. Inside your ATO portal, you can check whether employers are depositing your super on time and consolidate any duplicate accounts.',
        tip: 'Confirm current pay-day super payment schedules and SG percentage rates directly on ato.gov.au.'
      },
      {
        stepNumber: 4,
        title: 'Learn about Departing Australia Superannuation Payment (DASP)',
        description:
          'If you worked in Australia on an eligible temporary visa and permanently depart once your visa has expired or been cancelled, you can submit a free DASP claim through the ATO online portal.',
        caution: 'DASP withdrawals are subject to specific withholding tax rates set by federal law—verify current rates on ato.gov.au before applying.'
      }
    ],
    stateNotes: {
      'National Federal Law': 'Superannuation is governed federally by the ATO and APRA, so super rules apply uniformly across every Australian state and territory.'
    },
    faqHeading: 'Frequently Asked Questions About Superannuation in Australia for New Migrants',
    faqs: [
      {
        question: 'Is super taken out of my agreed hourly pay in Australia?',
        answer: 'Generally no—Superannuation Guarantee contributions are paid by your employer on top of your ordinary time earnings, unless your contract clearly states a "total remuneration package" including super.'
      },
      {
        question: 'How does super work in Australia for temporary visa holders leaving the country?',
        answer: 'Eligible temporary residents who depart Australia permanently and no longer hold an active visa can apply to withdraw their super via the ATO’s DASP portal, minus applicable withholding tax.'
      },
      {
        question: 'How can I check if my employer is paying my super?',
        answer: 'Log into myGov linked with the ATO to inspect super contributions reported by your employer, alongside checking your payslips and super fund app.'
      }
    ],
    officialSources: [
      {
        agency: 'Australian Taxation Office (ATO)',
        title: 'Super for Individuals & Workers',
        url: 'https://www.ato.gov.au/individuals-and-families/super-for-individuals-and-families/super',
        note: 'Official federal rules on Superannuation Guarantee rates, choice of fund, and unpaid super'
      },
      {
        agency: 'ATO DASP Portal',
        title: 'Departing Australia Superannuation Payment (DASP)',
        url: 'https://www.ato.gov.au/individuals-and-families/super-for-individuals-and-families/super/temporary-residents-and-superannuation/departing-australia-superannuation-payment-dasp',
        note: 'Official rules and application steps for temporary residents leaving Australia'
      }
    ],
    lastReviewed: 'November 2026',
    reviewedBy: 'FirstYear AU Settlement Advisory Team',
    nextStepId: 'buying-a-car',
    nextStepTitle: 'Buying a Car Safely in Australia',
    nextStepAnchorText: 'Next step: buying a car in Australia as a new migrant safely',
    relatedGuides: [
      { id: 'tax-file-number', anchorText: 'how to apply for a TFN online in Australia' },
      { id: 'bank-account', anchorText: 'open a bank account in Australia as a new arrival' },
      { id: 'police-check', anchorText: 'applying for an Australian Federal Police check online' }
    ]
  },

  // 10. Buying a Car
  {
    id: 'buying-a-car',
    category: 'Get Around',
    categorySlug: 'get-around',
    slug: 'buying-a-car',
    title: 'Buying a Car in Australia: Safe New Migrant Guide',
    seoKeyword: 'buying a car in australia new migrant',
    intro:
      'When buying a car in Australia as a new migrant, knowing how local vehicle checks work prevents costly mistakes with hidden finance debt or expired registration. Every car purchase should include an official government PPSR check, roadworthy verification where required, and prompt registration transfer. Always confirm transfer deadlines and stamp duty rules on your state transport authority website.',
    question: 'What checks must new migrants complete before buying a used car in Australia?',
    directAnswer:
      'Before paying for a used car in Australia, always run an official Personal Property Securities Register check on ppsr.gov.au using the car’s 17-character VIN to confirm there is no unpaid loan, stolen flag, or write-off history. You should also verify state roadworthy requirements, understand that "rego" includes Compulsory Third Party (CTP) injury cover only, and lodge transfer paperwork within your state deadline.',
    appliesTo:
      'Migrants living in outer suburbs or regional areas who decide to purchase a car during their first year.',
    stepsHeading: 'How do new arrivals buy and register a used car in Australia safely?',
    steps: [
      {
        stepNumber: 1,
        title: 'Search the official government PPSR database (ppsr.gov.au)',
        description:
          'Ask the seller for the VIN and run a search directly on the official Australian Government site ppsr.gov.au (check current official fee on site). Avoid third-party commercial websites charging inflated prices for the same check.',
        caution: 'Never buy a car with money still owing on it; a lender can legally repossess an encumbered vehicle.'
      },
      {
        stepNumber: 2,
        title: 'Check Roadworthy Certificate rules and book a mechanic inspection',
        description:
          'States handle roadworthiness differently: Victoria and Queensland generally require a valid safety/roadworthy certificate on sale, NSW uses annual Pink Slips, while South Australia does not mandate private-sale certificates—making an independent pre-purchase inspection worthwhile.',
        tip: 'Always verify the seller’s photo ID matches the vehicle registration papers before transferring funds.'
      },
      {
        stepNumber: 3,
        title: 'Know what "rego" covers vs property car insurance',
        description:
          'State registration ("rego") includes statutory Compulsory Third Party (CTP) insurance covering injuries to people, NOT damage to other vehicles. Arrange at least Third-Party Property Damage or Comprehensive insurance before driving away.',
        tip: 'Arrange insurance cover over the phone or online to start the moment you take the keys.'
      },
      {
        stepNumber: 4,
        title: 'Submit the registration transfer within the state deadline',
        description:
          'Complete the signed transfer form with the seller and lodge it with your state authority (such as Service SA, VicRoads, Service NSW, or TMR QLD) within the statutory window (often 14 days) along with transfer fees and stamp duty.',
        caution: 'Late registration transfers attract administrative penalties from state transport departments.'
      }
    ],
    stateNotes: {
      'South Australia (Service SA)': 'Private sales do not require a standard RWC, so book an independent mechanical check. Transfer details are on sa.gov.au.',
      'Victoria (VicRoads)': 'Buyers generally require a current Certificate of Roadworthiness issued within 30 days. Confirm exact transfer rules on vicroads.vic.gov.au.',
      'New South Wales (Service NSW)': 'Annual safety inspections (Pink Slip) apply to older light vehicles; online transfers are available via service.nsw.gov.au.'
    },
    faqHeading: 'Frequently Asked Questions About Buying a Used Car in Australia',
    faqs: [
      {
        question: 'What is a PPSR check when buying a car in Australia?',
        answer: 'The Personal Property Securities Register (ppsr.gov.au) is the official Australian Government check showing if a vehicle has unpaid finance, has been written off, or is reported stolen.'
      },
      {
        question: 'Does Australian car rego include full car insurance?',
        answer: 'No. Rego includes Compulsory Third Party (CTP) cover for personal injuries, not damage to your car or another person’s car. You need separate third-party property or comprehensive insurance.'
      },
      {
        question: 'Can I buy and register a car in Australia on an overseas driver licence?',
        answer: 'Usually yes—state transport agencies can issue you a customer reference number using your passport, visa, and local address, subject to state rules.'
      }
    ],
    officialSources: [
      {
        agency: 'Australian Financial Security Authority (AFSA)',
        title: 'Official PPSR Vehicle Check (ppsr.gov.au)',
        url: 'https://www.ppsr.gov.au/',
        note: 'Official Australian Government register for vehicle debt and write-off checks'
      },
      {
        agency: 'Service SA',
        title: 'Buying and Selling a Vehicle in South Australia',
        url: 'https://www.sa.gov.au/topics/driving-and-transport/vehicles-and-registration/buying-and-selling-a-vehicle',
        note: 'Official SA transfer process, stamp duty details, and buyer obligations'
      },
      {
        agency: 'VicRoads',
        title: 'Buy, Sell or Transfer a Vehicle in Victoria',
        url: 'https://www.vicroads.vic.gov.au/registration/buy-sell-or-transfer-a-vehicle',
        note: 'Victorian roadworthy certificate rules and registration transfer process'
      }
    ],
    lastReviewed: 'November 2026',
    reviewedBy: 'FirstYear AU Settlement Advisory Team',
    nextStepId: 'driver-licence',
    nextStepTitle: 'Convert or Use Your Driver Licence',
    nextStepAnchorText: 'Next step: rules for driving in Australia on an overseas licence',
    relatedGuides: [
      { id: 'public-transport', anchorText: 'comparing public transport cards in Australia first' },
      { id: 'proof-of-age', anchorText: 'applying for a Proof of Age card in Australia' },
      { id: 'police-check', anchorText: 'get a police check as an international student in Australia' }
    ]
  },

  // 11. Driver Licence
  {
    id: 'driver-licence',
    category: 'Get Around',
    categorySlug: 'get-around',
    slug: 'driver-licence',
    title: 'Driving in Australia on an Overseas Licence & Conversion',
    seoKeyword: 'driving in australia on overseas licence',
    intro:
      'Knowing the rules for driving in Australia on an overseas licence protects you from heavy fines and keeps your motor insurance valid. We also cover when and how you need to convert a foreign driver’s licence in Australia, as residency time limits differ from state to state. Always check current state road authority rules on service.nsw.gov.au, vicroads.vic.gov.au, or sa.gov.au before driving.',
    question: 'When do I need to convert a foreign driver’s licence in Australia?',
    directAnswer:
      'Temporary visa holders can often drive on a current, valid overseas licence if it is in English or paired with an International Driving Permit (IDP) or official NAATI translation—however, states like Victoria and NSW enforce 6-month continuous residency cutoffs where temporary residents must convert. Permanent residents must usually convert within 3 to 6 months depending on their state.',
    appliesTo:
      'International students, temporary visa holders, and permanent residents planning to drive anywhere in Australia.',
    stepsHeading: 'How do you stay compliant driving in Australia on an overseas licence?',
    steps: [
      {
        stepNumber: 1,
        title: 'Confirm your licence is valid and translated into English',
        description:
          'You must carry your current physical foreign driver’s licence every time you drive. If it is not in English, carry either an International Driving Permit (IDP) or a certified NAATI translation acceptable in your state.',
        caution: 'Driving with an expired or untranslated overseas licence can be treated as unlicensed driving and invalidate insurance.'
      },
      {
        stepNumber: 2,
        title: 'Check state residency deadlines for licence conversion',
        description:
          'State rules vary significantly. For example, Victoria and NSW require many temporary visa holders who stay continuously for 6 months to convert to a local licence, while South Australia also sets strict timeframes once permanent residency begins. Always verify current dates on your state site.',
        tip: 'Check the exact rule for your specific visa type on vicroads.vic.gov.au, service.nsw.gov.au, or sa.gov.au.'
      },
      {
        stepNumber: 3,
        title: 'Check whether your home country qualifies for direct conversion',
        description:
          'Drivers from Australian-recognised licensing countries who meet age rules may convert without sitting knowledge or practical driving exams. Drivers from non-recognised countries must pass theory, hazard perception, and practical driving assessments.',
        tip: 'Even experienced overseas drivers benefit from 2 or 3 lessons with an accredited Australian driving instructor to learn local road test expectations.'
      },
      {
        stepNumber: 4,
        title: 'Learn core Australian road rules before driving',
        description:
          'Australia drives on the left side of the road, gives way to vehicles already inside roundabouts, enforces strict school zone speed limits, and uses Melbourne CBD hook turns. Speed and mobile-phone cameras operate nationwide.',
        caution: 'Touching an unmounted phone while driving—or even while stopped at red lights—carries steep fines and demerit points.'
      }
    ],
    stateNotes: {
      'South Australia (Service SA)': 'Temporary residents may drive on a current foreign licence with English translation where needed; PR holders generally have 90 days to convert. Check sa.gov.au.',
      'Victoria (VicRoads)': 'Check VicRoads 6-month continuous residency rules requiring overseas licence holders to obtain a Victorian driver licence. See vicroads.vic.gov.au.',
      'New South Wales (Service NSW)': 'Verify whether the 6-month residency conversion rule applies to your visa and arrival date on service.nsw.gov.au.'
    },
    faqHeading: 'Frequently Asked Questions About Driving in Australia on an Overseas Licence',
    faqs: [
      {
        question: 'How do I convert a foreign driver’s licence in Australia?',
        answer: 'Book an appointment at your state licensing agency (Service NSW, VicRoads, Service SA, or equivalent) with your passport, visa, local address proof, and translated foreign licence to complete verification and any required tests.'
      },
      {
        question: 'Do I need a NAATI translation to drive on an overseas licence in Australia?',
        answer: 'If your overseas driver’s licence is not printed in English, you generally need either an official International Driving Permit (IDP) or a NAATI-accredited English translation—confirm exact accepted formats on your state site.'
      },
      {
        question: 'What is the legal blood alcohol limit for drivers in Australia?',
        answer: 'Full licence holders must remain below 0.05 BAC, while learner and provisional (P-plate) drivers must maintain a strict 0.00 blood alcohol limit.'
      }
    ],
    officialSources: [
      {
        agency: 'Service NSW',
        title: 'Transfer an Overseas Driver Licence in NSW',
        url: 'https://www.service.nsw.gov.au/transaction/transfer-an-overseas-driver-licence',
        note: 'Official NSW rules on overseas licences, conversion tests, and 6-month residency cutoffs'
      },
      {
        agency: 'VicRoads',
        title: 'Overseas Drivers in Victoria',
        url: 'https://www.vicroads.vic.gov.au/licences/renew-replace-or-update/new-to-victoria/overseas-drivers',
        note: 'Official Victorian overseas licence conversion guide and residency timeframes'
      },
      {
        agency: 'Service SA',
        title: 'Driving with an Overseas Licence in SA',
        url: 'https://www.sa.gov.au/topics/driving-and-transport/licences/drivers-licence/driving-with-an-overseas-licence',
        note: 'South Australian guidelines for temporary and permanent residents'
      }
    ],
    lastReviewed: 'November 2026',
    reviewedBy: 'FirstYear AU Settlement Advisory Team',
    nextStepId: 'police-check',
    nextStepTitle: 'Apply for a National Police Check',
    nextStepAnchorText: 'Next step: how to apply for an Australian Federal Police check online',
    relatedGuides: [
      { id: 'buying-a-car', anchorText: 'buying a car in Australia as a new migrant safely' },
      { id: 'proof-of-age', anchorText: 'getting a Proof of Age card in Australia' },
      { id: 'public-transport', anchorText: 'using public transport cards in Australia' }
    ]
  },

  // 12. Police Check
  {
    id: 'police-check',
    category: 'ID and Paperwork',
    categorySlug: 'id-and-paperwork',
    slug: 'police-check',
    title: 'Police Check International Student Australia (AFP Online)',
    seoKeyword: 'police check international student australia',
    intro:
      'Getting a police check as an international student in Australia is a common prerequisite for university clinical placements, aged care work, tutoring, and graduate jobs. This guide explains how to apply for an Australian Federal Police check online directly so you choose the right check code and avoid paying extra third-party markups. Always confirm current application fees and check requirements directly on afp.gov.au or acic.gov.au.',
    question: 'How do I apply for an Australian Federal Police check online safely?',
    directAnswer:
      'An Australian National Police Check verifies any disclosable Australian court outcomes across all states and territories. When an employer, health board, or immigration department requires a federal clearance, apply directly through the official Australian Federal Police (AFP) portal at afp.gov.au; for general private employment, an ACIC-accredited provider may also be accepted if approved by your employer.',
    appliesTo:
      'International students and new migrants applying for healthcare placements, hospitality/retail jobs, internships, or background clearances.',
    stepsHeading: 'How do international students complete an Australian Federal Police check online?',
    steps: [
      {
        stepNumber: 1,
        title: 'Confirm whether you need an AFP check or an ACIC-accredited check',
        description:
          'Check your employer or university placement instructions first. Immigration matters, AHPRA health registrations, and many government or clinical roles specifically require an official Australian Federal Police (AFP) National Police Check and a designated Purpose Code.',
        tip: 'Ask your employer or university coordinator for the exact AFP Purpose Code number before starting your online form.'
      },
      {
        stepNumber: 2,
        title: 'Prepare 100 points of identity documents',
        description:
          'Assemble clear colour scans matching the AFP identification point rules—such as your foreign passport paired with an Australian bank statement, debit card, student ID, or Proof of Age card.',
        caution: 'Make sure every letter of your given, middle, and family names matches across your passport and supporting documents.'
      },
      {
        stepNumber: 3,
        title: 'Submit your application directly via afp.gov.au',
        description:
          'Complete the online form directly on the official Australian Federal Police website and pay the standard government fee listed there. You do not need to pay commercial resellers higher fees for an AFP check.',
        tip: 'Elect a digital certificate option where available so you can download and verify it easily.'
      },
      {
        stepNumber: 4,
        title: 'Save and share your certificate securely',
        description:
          'Store your PDF National Police Certificate safely. Employers can confirm its authenticity directly via the AFP verification service.',
        caution: 'Most Australian employers treat a police check as recent only if issued within the past 3 to 6 months, so verify timing before applying.'
      }
    ],
    stateNotes: {
      'National Coverage': 'An Australian National Police Check covers disclosable records held across all Australian states and territories (NSW, VIC, QLD, SA, WA, TAS, ACT, NT) in one single check.'
    },
    faqHeading: 'Frequently Asked Questions About Australian Police Checks for Students',
    faqs: [
      {
        question: 'How do I apply for an Australian Federal Police check online without extra fees?',
        answer: 'Go straight to the official Australian Federal Police portal at afp.gov.au rather than commercial third-party websites, and select the exact check purpose code your employer or placement requires.'
      },
      {
        question: 'Does an Australian police check show criminal history from my home country?',
        answer: 'No. An Australian National Police Check only searches Australian police and court records. If an organisation requires overseas history, you must obtain a police clearance from your home country.'
      },
      {
        question: 'How long does an AFP National Police Check take?',
        answer: 'Many straightforward online checks are issued within a few business days, while applications requiring manual review take longer. Check current processing times directly on afp.gov.au.'
      }
    ],
    officialSources: [
      {
        agency: 'Australian Federal Police (AFP)',
        title: 'National Police Checks Official Online Portal',
        url: 'https://www.afp.gov.au/our-services/national-police-checks',
        note: 'Official federal portal for AFP National Police Checks, purpose codes, and current fees'
      },
      {
        agency: 'Australian Criminal Intelligence Commission (ACIC)',
        title: 'National Police Checking Service',
        url: 'https://www.acic.gov.au/services/national-police-checking-service',
        note: 'Official list of accredited background checking organisations in Australia'
      }
    ],
    lastReviewed: 'November 2026',
    reviewedBy: 'FirstYear AU Settlement Advisory Team',
    nextStepId: 'working-with-children',
    nextStepTitle: 'Apply for a Working with Children Check (WWCC)',
    nextStepAnchorText: 'Next step: apply for a Working with Children Check in Australia',
    relatedGuides: [
      { id: 'proof-of-age', anchorText: 'get a Proof of Age card in Australia for 100-point ID checks' },
      { id: 'tax-file-number', anchorText: 'how to apply for a TFN online in Australia' },
      { id: 'superannuation', anchorText: 'how does super work in Australia for new migrants' }
    ]
  },

  // 13. Working with Children Check (WWCC)
  {
    id: 'working-with-children',
    category: 'ID and Paperwork',
    categorySlug: 'id-and-paperwork',
    slug: 'working-with-children',
    title: 'Working With Children Check Australia: State-by-State Guide',
    seoKeyword: 'working with children check australia',
    intro:
      'Applying for a Working With Children Check in Australia is legally required before starting paid or volunteer roles involving people under 18, including tutoring, coaching, childcare, and school placements. Because child-safety clearances are managed separately by each state and territory, you must apply in the state where you live and work. Always confirm current fees and "No Card, No Start" rules on your state screening portal.',
    question: 'Do new migrants and international students need a Working With Children Check (WWCC)?',
    directAnswer:
      'Yes, anyone working or volunteering in child-related roles in Australia must hold an active state Working With Children Check (known as a Blue Card in Queensland). Unlike a one-off police check, a WWCC provides ongoing monitoring throughout its validity period (typically 3 to 5 years depending on the state).',
    appliesTo:
      'International students and new migrants pursuing paid tutoring, sports coaching, childcare, education placements, or youth volunteering.',
    stepsHeading: 'How do new arrivals apply for a Working With Children Check in Australia?',
    steps: [
      {
        stepNumber: 1,
        title: 'Find your state or territory screening authority',
        description:
          'NSW: Office of the Children’s Guardian (Service NSW). Victoria: Working with Children Check (Service Victoria). Queensland: Blue Card Services. South Australia: DHS Screening Unit. Western Australia: Department of Communities.',
        tip: 'A clearance issued in one state generally does not cover ongoing employment in another state.'
      },
      {
        stepNumber: 2,
        title: 'Choose Volunteer vs Paid Employee clearance carefully',
        description:
          'Volunteer checks are cheaper or free in most states, but legally you CANNOT use a volunteer clearance for paid jobs such as tutoring or nanny work. Apply for a Paid Employee check if you will earn income.',
        caution: 'Working in a paid child-related job with only a volunteer card breaches state law.'
      },
      {
        stepNumber: 3,
        title: 'Submit online and verify your ID at Australia Post or a service centre',
        description:
          'Complete the online form and take your reference barcode plus physical ID documents (passport, bank card, address proof) to a nominated counter such as Australia Post or a state service centre where required.',
        tip: 'Allow several weeks before your job or university placement starts in case processing takes longer.'
      },
      {
        stepNumber: 4,
        title: 'Provide your clearance number to your employer or university',
        description:
          'Give your WWCC or Blue Card number and date of birth to your employer so they can verify it online before your first shift, and update your address with the screening unit whenever you move.',
        tip: 'Wait for formal approval in strict "No Card, No Start" states such as Queensland before working.'
      }
    ],
    stateNotes: {
      'Queensland (Blue Card)': 'Known as the Blue Card; Queensland enforces strict "No Card, No Start" rules. Confirm current fees on qld.gov.au.',
      'South Australia (DHS)': 'Managed online by the Department of Human Services Screening Unit at screening.sa.gov.au.',
      'New South Wales (OCG)': 'Managed through Service NSW and the Office of the Children’s Guardian (ocg.nsw.gov.au).',
      'Victoria (Service Victoria)': 'Apply online and verify ID via Service Victoria / Australia Post (service.vic.gov.au).'
    },
    faqHeading: 'Frequently Asked Questions About Working With Children Checks in Australia',
    faqs: [
      {
        question: 'Can I use a volunteer Working With Children Check for paid tutoring?',
        answer: 'No. If you are receiving payment for child-related work, you must hold a Paid Employee WWCC or upgrade your volunteer clearance through your state screening unit first.'
      },
      {
        question: 'What is the difference between an AFP Police Check and a WWCC?',
        answer: 'A National Police Check is a point-in-time record of disclosable court convictions, while a WWCC assesses child-safety risk and actively monitors records throughout its validity period.'
      },
      {
        question: 'Can international students apply without an Australian driver licence?',
        answer: 'Yes. You can meet state identity checks using combinations of your foreign passport, student ID, Australian bank statement, and Proof of Age card.'
      }
    ],
    officialSources: [
      {
        agency: 'NSW Office of the Children’s Guardian',
        title: 'Working With Children Check NSW',
        url: 'https://ocg.nsw.gov.au/working-with-children-check',
        note: 'Official NSW application portal, paid vs volunteer rules, and verification'
      },
      {
        agency: 'Service Victoria',
        title: 'Apply for a Victorian Working With Children Check',
        url: 'https://www.service.vic.gov.au/services/working-with-children',
        note: 'Official Victorian WWCC instructions, fees, and ID checks'
      },
      {
        agency: 'Department of Human Services South Australia',
        title: 'DHS Screening Unit – Working With Children Check',
        url: 'https://screening.sa.gov.au/types-of-check/working-with-children-check',
        note: 'Official South Australian WWCC application portal'
      }
    ],
    lastReviewed: 'November 2026',
    reviewedBy: 'FirstYear AU Settlement Advisory Team',
    nextStepId: '12-month-plan',
    nextStepTitle: 'View the Complete 12-Month Plan Timeline',
    nextStepAnchorText: 'Next step: return to the complete 12-month new migrant Australia setup guide',
    relatedGuides: [
      { id: 'police-check', anchorText: 'get a police check as an international student in Australia' },
      { id: 'proof-of-age', anchorText: 'apply for a Proof of Age card in Australia' },
      { id: 'tax-file-number', anchorText: 'how to apply for a TFN online in Australia' }
    ]
  }
];

export function getGuideById(id: string): GuideItem | undefined {
  return GUIDES.find((g) => g.id === id || g.slug === id);
}
