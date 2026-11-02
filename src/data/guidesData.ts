import { GuideItem } from '../types';

export const GUIDES: GuideItem[] = [
  // 1. SIM and Internet
  {
    id: 'sim-internet',
    category: 'Get Set-Up',
    categorySlug: 'get-set-up',
    slug: 'sim-internet',
    title: 'SIM and Internet for New Arrivals',
    seoKeyword: 'best SIM card for new arrivals Australia',
    question: 'How do I get an Australian mobile SIM card and home internet as a new arrival?',
    directAnswer:
      'You can buy a prepaid Australian SIM card immediately upon landing at the airport or order an eSIM online before you board your flight. Australia has three primary mobile networks—Telstra, Optus, and Vodafone—along with budget-friendly resellers called MVNOs (Mobile Virtual Network Operators). You must provide your foreign passport and a temporary Australian residential address for mandatory identity verification.',
    appliesTo:
      'All newly arrived migrants, international students (subclass 500), temporary graduates (subclass 485), and skilled visa holders (subclass 482, 189, 190).',
    steps: [
      {
        stepNumber: 1,
        title: 'Check your phone compatibility & eSIM support',
        description:
          'Ensure your mobile phone is unlocked by your home carrier. If your phone supports eSIM, you can install your Australian mobile profile before departing or while connected to airport Wi-Fi.',
        tip: 'Check if your device supports Australian 4G/5G frequency bands (Band 28 700MHz is critical for regional coverage on the Telstra network).'
      },
      {
        stepNumber: 2,
        title: 'Choose between the Big 3 networks or budget MVNOs',
        description:
          'Telstra offers the widest rural coverage; Optus and Vodafone offer competitive city pricing. For the best value, consider MVNOs like Boost Mobile (full Telstra network), Felix, Moose Mobile, or Belong, which offer 30-day no-lock-in prepaid plans for A$25 to A$40/month with generous data banking.',
        tip: 'Look for plans with unlimited international calling to your home country if you plan to call family often.'
      },
      {
        stepNumber: 3,
        title: 'Complete the mandatory Australian ID check',
        description:
          'Under Australian telecommunications law, every SIM card must be registered. You will need your passport number, visa grant number, and the address of your temporary hostel, student lodge, or hotel.',
        caution: 'Never buy an activated SIM from an informal third party; your name must match your banking and tax records.'
      },
      {
        stepNumber: 4,
        title: 'Organise short-term portable internet or home broadband',
        description:
          'If you are staying in temporary shared accommodation, 5G home wireless (A$55–A$75/month) requires no technician install and plugs directly into a power socket. Once you sign a residential lease, you can order fixed-line NBN (National Broadband Network).',
        tip: 'Check what NBN technology type is installed at your rental address (FTTP, FTTC, or FTTN) before buying an NBN modem.'
      }
    ],
    stateNotes: {
      'Regional WA / SA / QLD / NT': 'If moving outside capital cities (such as regional South Australia, North Queensland, or Western Australian mining hubs), prioritize Telstra or Boost Mobile for dependable coverage.',
      'Metro (Sydney, Melbourne, Brisbane, Adelaide, Perth)': 'All major networks and MVNOs provide strong 4G/5G reception across metropolitan rail corridors and university campuses.'
    },
    faqs: [
      {
        question: 'Can I keep my home country WhatsApp number when using an Australian SIM?',
        answer: 'Yes. When you insert your Australian physical SIM or activate an eSIM, WhatsApp will ask whether you want to keep your existing phone number. Select "Keep" to maintain all your chat histories and contacts intact.'
      },
      {
        question: 'Should I buy a SIM at Sydney or Melbourne airport upon landing?',
        answer: 'Airport retail kiosks sell SIM cards, but they often push pricier tourist bundles. Buying a basic 7-day starter pack at the airport is fine for immediate transport and Uber access, after which you can port your number to a cheaper monthly MVNO.'
      },
      {
        question: 'What is data banking in Australia?',
        answer: 'Most Australian prepaid providers roll over your unused mobile data at the end of each 30-day recharge cycle if you maintain auto-recharge. This prevents data waste during school holidays or quiet weeks.'
      }
    ],
    officialSources: [
      {
        agency: 'Australian Communications and Media Authority (ACMA)',
        title: 'Prepaid Mobile Phone Customer Verification Guidelines',
        url: 'https://www.acma.gov.au/identity-checks-prepaid-mobiles',
        note: 'Official rules on mandatory passport identification when buying an Australian SIM'
      },
      {
        agency: 'NBN Co Australia',
        title: 'National Broadband Network Address Rollout Checker',
        url: 'https://www.nbnco.com.au/',
        note: 'Check broadband speed tiers and hardware types available at your Australian rental'
      }
    ],
    lastReviewed: 'November 2026',
    reviewedBy: 'FirstYear AU Settlement Advisory Team',
    nextStepId: 'bank-account',
    nextStepTitle: 'Open an Australian Bank Account'
  },

  // 2. Bank Account
  {
    id: 'bank-account',
    category: 'Get Set-Up',
    categorySlug: 'get-set-up',
    slug: 'bank-account',
    title: 'Opening an Australian Bank Account',
    seoKeyword: 'open bank account new arrival Australia',
    question: 'How do new migrants and international students open an Australian bank account without a local credit history?',
    directAnswer:
      'You can apply online with Australia’s major banks up to 14 days before your arrival or within your first 6 weeks in the country. The Big Four banks (Commonwealth Bank, ANZ, NAB, and Westpac) offer fee-free everyday transaction accounts for students and newcomers. When you arrive, visit a branch with your passport and visa to verify your identity and collect your debit card.',
    appliesTo:
      'All incoming temporary and permanent visa holders. Applying within 6 weeks of arrival requires only your foreign passport for identity verification under the 100-point ID concession.',
    steps: [
      {
        stepNumber: 1,
        title: 'Apply online before boarding or in your first 14 days',
        description:
          'Choose an everyday transaction account (such as CommBank Everyday Account Smart Access, NAB Classic Banking, ANZ Plus, or Westpac Choice). Enter your overseas address, anticipated arrival date, and chosen local branch.',
        tip: 'Students can have monthly account fees ($4 to $5) waived entirely by submitting student ID or proof of university enrolment.'
      },
      {
        stepNumber: 2,
        title: 'Transfer initial living funds safely via international transfer',
        description:
          'Once your account number (BSB and Account Number) is generated, you can transfer Australian Dollars from home using regulated services like Wise or OFX to avoid high retail bank wire fees.',
        tip: 'In Australia, account routing uses a 6-digit BSB (Bank State Branch) code and an 8 to 9-digit account number.'
      },
      {
        stepNumber: 3,
        title: 'Visit your chosen branch with your passport (Within 6 weeks)',
        description:
          'Under the Australian Financial Transactions Reports Act, you have 6 weeks from your landing date to verify your identity with just your foreign passport. After 6 weeks, you must produce 100 points of documentation (utility bills, lease agreements, Australian driver licence).',
        caution: 'Do not delay your branch appointment past 6 weeks; otherwise you will need extensive local documentation to unlock your funds.'
      },
      {
        stepNumber: 4,
        title: 'Set up PayID, Beem, and link your debit card to Apple/Google Pay',
        description:
          'PayID links your Australian mobile number or email address directly to your bank account, allowing instant money transfers 24/7 using the New Payments Platform (NPP) with zero fees.',
        tip: 'Most Australians do not share BSB and account numbers with friends; they simply request payment via mobile number using PayID.'
      }
    ],
    stateNotes: {
      'National': 'The Big Four banks operate extensive branch networks and fee-free ATM arrangements across all states and territories (NSW, VIC, QLD, SA, WA, TAS, ACT, NT).'
    },
    faqs: [
      {
        question: 'What is a BSB number?',
        answer: 'A BSB (Bank State Branch) is a six-digit code that identifies the specific Australian financial institution and regional branch where your account is registered. Format is XXX-XXX.'
      },
      {
        question: 'Do I pay taxes on money transferred from my home savings?',
        answer: 'Bringing personal savings or gift funds into Australia to fund your living expenses or university tuition is generally not considered taxable income by the ATO. However, any interest earned inside an Australian savings account is taxable.'
      },
      {
        question: 'Can I open a bank account with zero Australian credit score?',
        answer: 'Yes. Everyday debit transaction accounts and high-interest savings accounts do not require a credit check or local credit rating.'
      }
    ],
    officialSources: [
      {
        agency: 'Australian Transaction Reports and Analysis Centre (AUSTRAC)',
        title: 'Customer Identification & 100-Point ID Verification Rules',
        url: 'https://www.austrac.gov.au/business/core-guidance/customer-identification-and-verification',
        note: 'Federal guidelines explaining the 6-week passport identity concession for new arrivals'
      },
      {
        agency: 'Moneysmart (ASIC)',
        title: 'Choosing a Bank Account in Australia',
        url: 'https://moneysmart.gov.au/banking/banking-in-australia',
        note: 'Independent consumer guide to fee structures and debit cards'
      }
    ],
    lastReviewed: 'November 2026',
    reviewedBy: 'FirstYear AU Settlement Advisory Team',
    nextStepId: 'tax-file-number',
    nextStepTitle: 'Apply for a Tax File Number (TFN)'
  },

  // 3. Tax File Number (TFN)
  {
    id: 'tax-file-number',
    category: 'Get Set-Up',
    categorySlug: 'get-set-up',
    slug: 'tax-file-number',
    title: 'Applying for a Tax File Number (TFN)',
    seoKeyword: 'apply for TFN online',
    question: 'How do I apply for a Tax File Number (TFN) online for free after arriving in Australia?',
    directAnswer:
      'Applying for a TFN is 100% free through the official Australian Taxation Office (ATO) website. You can only apply after you have cleared Australian customs and border control, as your entry is automatically verified against Department of Home Affairs visa records. Your 9-digit TFN will be posted to your Australian residential address within 28 days.',
    appliesTo:
      'Any migrant with work rights (including student visa subclass 500 holders working up to 48 hours per fortnight during terms, WHV 417/462, and permanent residents).',
    steps: [
      {
        stepNumber: 1,
        title: 'Wait until you have passed Australian border control',
        description:
          'The ATO’s online system cross-references your passport number with immigration arrival databases. Attempting to apply before your aircraft lands will result in an immediate rejection.',
        tip: 'Wait 24 hours after your flight lands so the Department of Home Affairs border system updates your entry status.'
      },
      {
        stepNumber: 2,
        title: 'Complete the ATO online foreign passport holder application',
        description:
          'Visit the official ATO portal (ato.gov.au). Select "Foreign passport holders, permanent migrants and temporary visitors – TFN application". Have your passport, current visa subclass, and valid Australian postal address ready.',
        caution: 'Beware of scam websites demanding $50 to $120 to process your TFN. The ATO NEVER charges an application fee.'
      },
      {
        stepNumber: 3,
        title: 'Save your Application Reference Number (ARN)',
        description:
          'At the end of the online form, you will receive an Application Reference Number. Save a screenshot or PDF of this receipt. You can provide this ARN to an employer while waiting for your formal TFN letter.',
        tip: 'Under Australian workplace law, you have 28 days to provide your TFN to your employer without incurring penalty tax withholding.'
      },
      {
        stepNumber: 4,
        title: 'Provide your TFN to your employer and your bank',
        description:
          'Once your TFN letter arrives in the post, provide it to your employer via a Tax File Number Declaration form. Also enter your TFN in your mobile banking app so the bank does not withhold the top marginal tax rate (47%) on your interest earnings.',
        caution: 'Keep your 9-digit TFN strictly private. Never share it over social media, informal WhatsApp messages, or with unverified rental listings.'
      }
    ],
    stateNotes: {
      'National': 'The ATO is a federal government department. The application process, tax brackets, and 28-day delivery timeframe are identical across all Australian states.'
    },
    faqs: [
      {
        question: 'What happens if I work without a Tax File Number?',
        answer: 'If you do not supply a TFN or valid ARN within 28 days of starting work, your employer is legally required to withhold income tax at the highest marginal rate (47%), significantly reducing your pay slip.'
      },
      {
        question: 'Do international students pay tax in Australia?',
        answer: 'Yes, if you work in Australia you pay tax on your earnings. If you stay for more than 6 months, you are typically assessed as an "Australian resident for tax purposes", which entitles you to the tax-free threshold of A$18,200 per financial year (July 1 to June 30).'
      },
      {
        question: 'How do I track my TFN application if 28 days have passed?',
        answer: 'You can phone the ATO directly on 13 28 61 (8:00 am to 6:00 pm Monday–Friday) with your Application Reference Number. If you need language assistance, call the Translating and Interpreting Service (TIS) on 13 14 50 first.'
      }
    ],
    officialSources: [
      {
        agency: 'Australian Taxation Office (ATO)',
        title: 'Foreign Passport Holders Online TFN Application',
        url: 'https://www.ato.gov.au/individuals-and-families/tax-file-number/apply-for-a-tfn/foreign-passport-holders-permanent-migrants-and-temporary-visitors-tfn-application',
        note: 'Official, free federal government portal to submit your TFN'
      },
      {
        agency: 'Department of Home Affairs',
        title: 'Visa Entitlement Verification Online (VEVO)',
        url: 'https://immi.homeaffairs.gov.au/visas/already-have-a-visa/check-visa-details-and-conditions/overview',
        note: 'Check your work conditions and visa grant details before completing your TFN application'
      }
    ],
    lastReviewed: 'November 2026',
    reviewedBy: 'FirstYear AU Settlement Advisory Team',
    nextStepId: 'public-transport',
    nextStepTitle: 'Set Up Public Transport & Travel Cards'
  },

  // 4. Public Transport
  {
    id: 'public-transport',
    category: 'Get Around',
    categorySlug: 'get-around',
    slug: 'public-transport',
    title: 'Public Transport & Smart Cards Across Australia',
    seoKeyword: 'public transport cards Australia international students',
    question: 'How does public transport ticketing work across different Australian capital cities, and do international students get discounts?',
    directAnswer:
      'Australia does not have a single national public transport card; each state operates its own contactless or smart card ticketing network (e.g. Opal in Sydney, myki in Melbourne, go card in Brisbane, and metroCARD in Adelaide). In most cities you can simply tap your physical Visa/Mastercard or phone wallet. Student concession fare eligibility varies dramatically by state, with some states granting 50% discounts while others restrict concessions to domestic students.',
    appliesTo:
      'All newcomers needing daily transit for university commutes, work shifts, grocery shopping, and rental property inspections.',
    steps: [
      {
        stepNumber: 1,
        title: 'Identify your city’s specific transit card system',
        description:
          'Sydney (NSW): Opal card or contactless payment cards. Melbourne (VIC): myki card or Mobile myki on Android. Brisbane/Gold Coast (QLD): go card or Smart Ticketing. Adelaide (SA): metroCARD or contactless on trams/buses. Perth (WA): SmartRider. Canberra (ACT): MyWay+. Hobart (TAS): Greencard.',
        tip: 'In Sydney, contactless bank cards and Apple Pay / Google Pay debit cards qualify for the same daily and weekly travel caps as adult Opal cards.'
      },
      {
        stepNumber: 2,
        title: 'Check student concession fare eligibility for your state',
        description:
          'Rules differ significantly. In South Australia, Queensland, WA, ACT, and Tasmania, full-time international students receive tertiary concession discounts (~50% off). In Victoria and NSW, standard international university students usually pay adult fares unless their institution participates in specific pass schemes (such as Victoria’s International Student Travel Pass or NSW i-Venture).',
        caution: 'Never travel on a concession ticket without carrying your approved physical Student ID or concession transport card; transit inspectors issue on-the-spot fines exceeding A$250.'
      },
      {
        stepNumber: 3,
        title: 'Download local transit apps for real-time timetables',
        description:
          'Google Maps works reliably across all cities. City-specific apps like AnyTrip or Opal Travel (NSW), PTV app (VIC), MyTranslink (QLD), and Adelaide Metro provide live vehicle tracking and crowd indicators.',
        tip: 'Most Australian buses require you to tap on when boarding and tap off when disembarking through the rear door to calculate distance-based fares.'
      },
      {
        stepNumber: 4,
        title: 'Learn suburban safety protocols for late-night travel',
        description:
          'Trains have emergency help buttons (yellow or blue) and designated night-safety zones on platforms marked with high-visibility lighting and CCTV cameras. Travel in the carriage closest to the train guard (marked with a blue light).',
        tip: 'Save your local transport safety number or emergency police number (000) on speed dial.'
      }
    ],
    stateNotes: {
      'South Australia (Adelaide)': 'International tertiary students enrolled full-time get equal concession access on metroCARD. Buy cards at Adelaide Railway Station or InfoCentres.',
      'Victoria (Melbourne)': 'myki is required for trains, trams, and buses. The Melbourne CBD has a Free Tram Zone where you do not need to tap on.',
      'New South Wales (Sydney)': 'Opal network covers trains, ferries, light rail, and buses with weekly spend caps. International students pay adult fares unless on sponsored scholarships.',
      'Queensland (Brisbane)': 'Full-time international students can register their go card online for 50% student concession.'
    },
    faqs: [
      {
        question: 'What is the Melbourne Free Tram Zone?',
        answer: 'In central Melbourne, tram travel within the defined CBD perimeter and Docklands is completely free. You do not need to tap your myki. If your trip extends outside this boundary, you must touch on.'
      },
      {
        question: 'Can I use an overseas debit card on Australian transport?',
        answer: 'Yes, contactless terminals in Sydney, Brisbane, Adelaide, and Canberra accept overseas Visa and Mastercard debit/credit cards, but foreign currency conversion fees may apply from your overseas bank.'
      },
      {
        question: 'What is the penalty for fare evasion?',
        answer: 'Authorised officers routinely patrol trains and trams. Traveling without an activated card or carrying an unauthorized concession incurs fines ranging from $200 to $290 depending on the state.'
      }
    ],
    officialSources: [
      {
        agency: 'Transport for NSW',
        title: 'Opal Card & Contactless Fare Rules',
        url: 'https://transportnsw.info/tickets-opal',
        note: 'Fares, daily/weekly caps, and airport line charges for Sydney and NSW regional'
      },
      {
        agency: 'Public Transport Victoria (PTV)',
        title: 'Ticketing and Concessions Guide',
        url: 'https://www.ptv.vic.gov.au/tickets/fares/concession-fares/',
        note: 'Official rules for myki and the International Student Travel Pass'
      },
      {
        agency: 'Adelaide Metro (SA)',
        title: 'Tertiary Student Concession metroCARD',
        url: 'https://www.adelaidemetro.com.au/tickets-and-fares/tertiary-students',
        note: 'Guidelines for international students studying at Flinders, UniSA, and University of Adelaide'
      }
    ],
    lastReviewed: 'November 2026',
    reviewedBy: 'FirstYear AU Settlement Advisory Team',
    nextStepId: 'renting-inspections',
    nextStepTitle: 'Renting and Attending Inspections'
  },

  // 5. Renting and Inspections
  {
    id: 'renting-inspections',
    category: 'Find a Home',
    categorySlug: 'find-a-home',
    slug: 'renting-inspections',
    title: 'Renting a Home & Attending Inspections',
    seoKeyword: 'how to rent with no rental history',
    question: 'How do new migrants rent a home in Australia with no local rental history or credit score?',
    directAnswer:
      'In Australia, private rentals are secured by attending open-house property inspections and submitting detailed digital applications through portals like 2Apply or realestate.com.au (1Form/Ignite). Because property managers look for reliability, you can compensate for zero Australian rental history by providing certified bank statements showing 3 to 6 months of living funds, an overseas employment letter or scholarship confirmation, and a structured cover letter explaining your arrival story.',
    appliesTo:
      'Anyone looking for a shared apartment, private flat, or suburban house in competitive Australian housing markets.',
    hasTemplateOffer: true,
    steps: [
      {
        stepNumber: 1,
        title: 'Understand the rental application verification standard',
        description:
          'Property managers evaluate your application against three criteria: proof of identity (100 points of ID), proof of capacity to pay rent (gross income should generally be at least 3x the weekly rent), and reliability references.',
        tip: 'Rent in Australia is advertised on a PER WEEK basis (e.g. $450/week), but paid monthly: (Weekly Rent ÷ 7) × 365 ÷ 12.'
      },
      {
        stepNumber: 2,
        title: 'Attend open-for-inspection sessions in person',
        description:
          'Most agencies will not consider your application unless you or an authorised proxy inspects the premises in person. Arrive 10 minutes early, dress neatly, and register your attendance with the leasing agent.',
        caution: 'Never transfer deposit funds or bond money for a property you have only seen in photos or video on Facebook or Gumtree. Rental deposit fraud is widespread.'
      },
      {
        stepNumber: 3,
        title: 'Prepare your "Zero Rental History" application pack',
        description:
          'Assemble your dossier beforehand: certified passport copy, visa grant notice, university enrolment Confirmation of Enrolment (CoE) or Australian employment contract, bank statement showing sufficient savings, and a formal cover letter introducing yourself.',
        tip: 'Our FirstYear Plus rental application template is pre-formatted with proven cover letter wording for international students and new migrants.'
      },
      {
        stepNumber: 4,
        title: 'Submit your digital application within 2 hours of inspecting',
        description:
          'Popular apartments receive 15+ applications within 24 hours. Pre-fill your profile on 2Apply, TenantApp, and realestate.com.au so you can hit "Submit" immediately after walking out of the inspection.',
        tip: 'Notify your overseas referees (past landlords, employers, or academic professors) via WhatsApp so they respond instantly to automated agency emails.'
      }
    ],
    stateNotes: {
      'South Australia (Adelaide)': 'Consumer and Business Services (CBS) regulates residential tenancies. Rent bidding (offering above advertised rent) is illegal.',
      'Victoria (Melbourne)': 'Consumer Affairs Victoria enforces strict rental standards. Rent bidding is banned; landlords must provide minimum heating and safety standards.',
      'New South Wales (Sydney)': 'Fair Trading NSW regulates leases. Rent bidding is banned; holding fees cannot exceed one week rent.'
    },
    faqs: [
      {
        question: 'Can a landlord ask for 6 or 12 months of rent upfront?',
        answer: 'In most Australian states (including Victoria and Queensland), landlords and property managers cannot legally demand more than one month or one fortnight of rent in advance. While some tenants volunteer advance rent to strengthen their application, state tenancy laws prohibit landlords from soliciting it.'
      },
      {
        question: 'What is the 100-point ID system in rental applications?',
        answer: 'Real estate agencies use a point rating system for your identification. A passport is worth 70 points; Australian driver licence/Proof of Age card is 40 points; bank debit card is 25 points; utility bill or student ID is 25 points. You must reach at least 100 points.'
      },
      {
        question: 'Should I live in student accommodation or a private flat?',
        answer: 'Purpose-Built Student Accommodation (PBSA, e.g., Scape, UniLodge, Iglu) includes all utility bills (water, gas, high-speed Wi-Fi) and does not require local rental history, making it an easier landing pad for your first 3 to 6 months before leasing a private apartment.'
      }
    ],
    officialSources: [
      {
        agency: 'Consumer Affairs Victoria',
        title: 'Applying for a Rental Property and Tenant Rights',
        url: 'https://www.consumer.vic.gov.au/housing/renting',
        note: 'Guidelines on rent bidding bans, application standards, and minimum housing requirements'
      },
      {
        agency: 'NSW Fair Trading',
        title: 'Renting a Home in New South Wales',
        url: 'https://www.fairtrading.nsw.gov.au/housing-and-property/renting',
        note: 'Official tenant information statement and leasing agreements'
      },
      {
        agency: 'Consumer and Business Services South Australia (CBS)',
        title: 'Renting in SA: Tenant Information & Rights',
        url: 'https://www.cbs.sa.gov.au/renting',
        note: 'Adelaide residential tenancy legislation and open-inspection guidance'
      }
    ],
    lastReviewed: 'November 2026',
    reviewedBy: 'FirstYear AU Settlement Advisory Team',
    nextStepId: 'bond-condition-report',
    nextStepTitle: 'Pay Rental Bond and Complete Condition Report'
  },

  // 6. Bond and Condition Report
  {
    id: 'bond-condition-report',
    category: 'Find a Home',
    categorySlug: 'find-a-home',
    slug: 'bond-condition-report',
    title: 'Bond Lodgement & Condition Reports',
    seoKeyword: 'rental bond condition report Australia',
    question: 'How do I legally pay a rental bond and complete an incoming condition report to guarantee getting my money back?',
    directAnswer:
      'A rental bond (usually 4 weeks of rent) is held as financial security by an independent state statutory authority, never kept directly in the landlord’s personal bank account. Within 3 to 7 business days of moving into the property, you must fill out, photograph, and return the Incoming Condition Report detailing every pre-existing scuff, stain, crack, or defect. This condition report is your primary legal defence to reclaim 100% of your bond when your lease concludes.',
    appliesTo:
      'All tenants signing a residential tenancy lease, rooming house agreement, or sub-tenancy.',
    steps: [
      {
        stepNumber: 1,
        title: 'Verify that your bond is lodged with the official state authority',
        description:
          'In NSW: Rental Bonds Online (RBO). In Victoria: Residential Tenancies Bond Authority (RTBA). In South Australia: Residential Bonds Online (CBS). In Queensland: Residential Tenancies Authority (RTA). You will receive an official direct SMS and email receipt from the government authority confirming your bond deposit number.',
        caution: 'If a private landlord insists on keeping your 4-week bond in their personal account or in cash, this is illegal. Insist on official state bond lodgement.'
      },
      {
        stepNumber: 2,
        title: 'Conduct a thorough move-in inspection before unpacking',
        description:
          'Before moving heavy furniture into the property, inspect every room with your phone flashlight. Test all light switches, tap water pressure, gas stove burners, door handles, window locks, and bathroom exhaust fans.',
        tip: 'Check inside oven racks, bathroom shower silicone joints, and behind bedroom doors for pre-existing mould, dents, or grease.'
      },
      {
        stepNumber: 3,
        title: 'Photograph and timestamp every pre-existing mark',
        description:
          'Take 50 to 150 high-resolution photos and a continuous video walkthrough. Keep backup copies in Google Drive or iCloud with original metadata timestamps.',
        tip: 'Place a coin or your fingertip next to wall scuffs or carpet stains in photos to show the exact scale of the mark.'
      },
      {
        stepNumber: 4,
        title: 'Return the signed Condition Report within the statutory deadline',
        description:
          'In Victoria, NSW, and SA you must return your amended condition report to the agent within 3 to 7 business days of taking possession. Note any disagreements clearly in the tenant column and retain a signed copy.',
        caution: 'If you fail to return the condition report on time, the law deems you to have agreed with the landlord’s assessment that the property was in pristine condition.'
      }
    ],
    stateNotes: {
      'Victoria (RTBA)': 'Condition reports must be returned within 5 business days. Maximum bond is 4 weeks rent for properties under $900/week.',
      'New South Wales (RBO)': 'Condition reports must be completed and returned within 7 days of moving in. Bond lodgement through Rental Bonds Online is mandatory.',
      'South Australia (CBS)': 'Condition report must be returned within 2 business days in SA. Bonds above $250/week are capped at 6 weeks of rent; under $250/week capped at 4 weeks.'
    },
    faqs: [
      {
        question: 'What is fair wear and tear in Australia?',
        answer: 'Fair wear and tear refers to the reasonable deterioration of a property over time through ordinary use (e.g., faded curtains from sunlight, minor scuffs on high-traffic hallway carpet). You cannot be charged for fair wear and tear.'
      },
      {
        question: 'Can the landlord deduct carpet steam cleaning from my bond?',
        answer: 'In Victoria and NSW, landlords cannot legally mandate professional carpet cleaning unless the carpet was professionally cleaned immediately prior to your lease or you caused abnormal staining or kept pets.'
      },
      {
        question: 'What should I do if the landlord disputes my bond refund at checkout?',
        answer: 'You can immediately submit an independent claim for your bond directly through your state bond authority website as soon as you hand back the keys. The landlord then has 14 days to file a formal dispute in the state tribunal (e.g., VCAT, NCAT, or SACAT) or the bond is automatically paid back to you.'
      }
    ],
    officialSources: [
      {
        agency: 'NSW Rental Bonds Online (RBO)',
        title: 'Lodging and Reclaiming Your Residential Bond',
        url: 'https://www.service.nsw.gov.au/transaction/apply-rental-bonds-online',
        note: 'Official NSW state bond lodgement portal and tracking'
      },
      {
        agency: 'Victorian Residential Tenancies Bond Authority (RTBA)',
        title: 'RTBA Online Guide for Tenants',
        url: 'https://rentalbonds.vic.gov.au/',
        note: 'Victorian statutory bond registration and electronic repayment system'
      },
      {
        agency: 'Residential Tenancies Authority Queensland (RTA)',
        title: 'Bond Management & Condition Report Forms',
        url: 'https://www.rta.qld.gov.au/starting-a-tenancy/rental-bond',
        note: 'Queensland government rules and tenant dispute resolution guidelines'
      }
    ],
    lastReviewed: 'November 2026',
    reviewedBy: 'FirstYear AU Settlement Advisory Team',
    nextStepId: 'furniture',
    nextStepTitle: 'Furnish Your Australian Home on a Budget'
  },

  // 7. Furniture
  {
    id: 'furniture',
    category: 'Find a Home',
    categorySlug: 'find-a-home',
    slug: 'furniture',
    title: 'Furnishing Your Home on a Budget',
    seoKeyword: 'cheap furniture international students Australia',
    question: 'How do I furnish an unfurnished rental apartment in Australia without spending thousands of dollars?',
    directAnswer:
      'Most long-term rental properties in Australia are leased completely unfurnished (without a refrigerator, washing machine, mattress, or dining table). You can furnish a 1-to-2 bedroom flat for under A$800 to A$1,200 by combining second-hand platforms like Facebook Marketplace and charity op-shops (Salvos, Vinnies) with budget retailers like IKEA and Kmart. Always inspect appliances in working order before paying, and watch out for delivery scams.',
    appliesTo:
      'New arrivals moving into unfurnished private rentals or room-share tenancies.',
    steps: [
      {
        stepNumber: 1,
        title: 'Prioritise the Day 1 essentials (Sleep & Food)',
        description:
          'Do not try to buy everything in Week 1. Prioritise two critical items: a clean mattress/bed frame and an energy-efficient refrigerator. Buy small kitchenware (plates, kettles, cutlery, towels) at Kmart or Big W for minimal cost.',
        tip: 'Do not buy a used second-hand foam mattress from the street; buy an affordable boxed mattress from IKEA or Amazon Australia with free home delivery.'
      },
      {
        stepNumber: 2,
        title: 'Master Facebook Marketplace and Gumtree safely',
        description:
          'Search terms like "moving sale", "expat relocating", or "must go this weekend" to find solid oak dining sets, study desks, and sofa beds at 70% to 90% below retail.',
        caution: 'Pay ONLY in cash or PayID in-person once you see the item. Never send money via PayID ahead of time to a "seller" claiming their cousin will arrange courier delivery.'
      },
      {
        stepNumber: 3,
        title: 'Visit charity stores (Op-Shops) for quality secondhand goods',
        description:
          'Salvation Army (Salvos Stores), St Vincent de Paul (Vinnies), and Brotherhood of St Laurence operate large suburban superstores with tested electrical whitegoods, desks, lamps, and bookshelves.',
        tip: 'Charity op-shops test and tag all electrical goods (microwaves, heaters, kettles) to ensure compliance with Australian electrical safety standards.'
      },
      {
        stepNumber: 4,
        title: 'Arrange affordable local transport or van hire',
        description:
          'If you do not have a car, you can book a short-term ute or van through Car Next Door / Uber Carshare, hire a Bunnings ute (A$25/hour), or use Airtasker to hire a local driver with a van for A$50 to A$80.',
        tip: 'Measure your apartment doorway and lift dimensions before purchasing a large 3-seater sofa or large double-door fridge.'
      }
    ],
    stateNotes: {
      'Hard Rubbish Collections': 'Many local city councils (e.g. City of Melbourne, City of Sydney, City of Adelaide) hold scheduled hard rubbish clean-up days where residents leave intact desks and chairs on the kerb, known locally as "kerbside shopping". Check council by-laws first.'
    },
    faqs: [
      {
        question: 'What is an "op shop"?',
        answer: 'An "op shop" (short for opportunity shop) is an Australian charity thrift store selling donated clothes, homewares, and furniture to fund community welfare programs.'
      },
      {
        question: 'Should I buy rented furniture instead?',
        answer: 'Furniture rental services exist (A$80–$160/month), but long-term contracts can end up costing more than buying brand new IKEA items. It is usually more economical to buy flatpack pieces you can resell when moving out.'
      },
      {
        question: 'How do I avoid PayID scams on Facebook Marketplace?',
        answer: 'Scammers will ask for your email address and send a fake email appearing to be from "PayID Support" claiming you must pay an upfront fee to upgrade to a "business account". PayID is free and never requires email account upgrades. Walk away immediately.'
      }
    ],
    officialSources: [
      {
        agency: 'Scamwatch (ACCC)',
        title: 'Classified and Secondhand Goods Buying Scams',
        url: 'https://www.scamwatch.gov.au/types-of-scams/buying-or-selling/classified-scams',
        note: 'Official Australian consumer protection guidance on spotting online marketplace fraud'
      },
      {
        agency: 'Energy Rating Australia',
        title: 'Appliance Energy Consumption Calculator',
        url: 'https://www.energyrating.gov.au/',
        note: 'Calculate electricity running costs for secondhand fridges and washing machines'
      }
    ],
    lastReviewed: 'November 2026',
    reviewedBy: 'FirstYear AU Settlement Advisory Team',
    nextStepId: 'proof-of-age',
    nextStepTitle: 'Get an 18+ Proof of Age Card'
  },

  // 8. Proof of Age Card
  {
    id: 'proof-of-age',
    category: 'ID and Paperwork',
    categorySlug: 'id-and-paperwork',
    slug: 'proof-of-age',
    title: 'Getting a Proof of Age / Photo Card',
    seoKeyword: 'proof of age card South Australia',
    question: 'Why should I get an Australian Proof of Age card, and how do I apply without losing my passport on night outs?',
    directAnswer:
      'An Australian 18+ Proof of Age card (also known as a Photo Card) is an official government-issued photo ID that proves your age and identity without carrying your valuable foreign passport to restaurants, pubs, clubs, domestic flights, or parcel pickups. Losing a passport in Australia costs upwards of A$350 to replace and causes immense immigration stress, whereas a state Photo Card costs only A$25 to A$65 and fits neatly in your wallet.',
    appliesTo:
      'Any migrant or student aged 18 and older who does not hold a full Australian driver licence.',
    steps: [
      {
        stepNumber: 1,
        title: 'Check your state’s issuing department',
        description:
          'South Australia: Service SA (Proof of Age card). Victoria: VicRoads (Victorian Proof of Age card). New South Wales: Service NSW (NSW Photo Card). Queensland: Department of Transport and Main Roads (TMR Photo Identification Card). Western Australia: Department of Transport (WA Photo Card).',
        tip: 'In South Australia, international students can book an appointment at Service SA centres in Adelaide CBD, Marion, or Prospect.'
      },
      {
        stepNumber: 2,
        title: 'Assemble your primary and secondary identification',
        description:
          'You will need your current foreign passport, current Australian visa grant notice, proof of local residential address (bank statement or tenancy agreement issued within 3 months), and your Australian bank debit card.',
        tip: 'Ensure the spelling of your full name matches exactly between your passport, visa grant, and bank statement.'
      },
      {
        stepNumber: 3,
        title: 'Visit the service centre in person for your photograph',
        description:
          'Attend your booked appointment or walk in. The customer service officer will verify your documents, take a digital photo, capture your signature, and process the application fee (approx. A$28–$65).',
        tip: 'In NSW and SA, you can also access a digital version of your card on your smartphone via the Service NSW or mySA GOV mobile apps.'
      },
      {
        stepNumber: 4,
        title: 'Receive your durable plastic card in the post',
        description:
          'Your card will be manufactured and delivered by Australia Post to your registered address within 10 to 14 business days. Keep your foreign passport locked safely in your room.',
        caution: 'Always report a lost photo card immediately to the issuing authority to prevent identity theft.'
      }
    ],
    stateNotes: {
      'South Australia (Service SA)': 'Proof of Age card costs approx. $27. Applications can be lodged at any Service SA customer centre with passport and proof of SA address.',
      'Victoria (VicRoads)': 'Proof of Age card requires an application form signed by an authorised witness or certified documents at a VicRoads customer service centre.',
      'New South Wales (Service NSW)': 'NSW Photo Card is available from Service NSW service centres for $61 (5-year validity) or $107 (10-year validity).'
    },
    faqs: [
      {
        question: 'Can I use an overseas driver licence to enter Australian bars and licensed venues?',
        answer: 'Many venues, security guards, and bottle shops in Australia refuse overseas driver licences because they cannot easily verify the security holograms or language. An Australian Proof of Age card is universally accepted without question.'
      },
      {
        question: 'Can I use my Proof of Age card on Australian domestic flights?',
        answer: 'Yes. Qantas, Virgin Australia, and Jetstar accept state-issued Proof of Age / Photo Cards as valid photo identification for domestic flights across Australia.'
      },
      {
        question: 'Can I hold both a driver licence and a Proof of Age card?',
        answer: 'Yes. If you do not have an Australian driver licence yet, the Proof of Age card serves as your primary day-to-day ID. Once you obtain an Australian driver licence, the licence becomes your primary photo ID.'
      }
    ],
    officialSources: [
      {
        agency: 'Government of South Australia (Service SA)',
        title: 'Apply for a Proof of Age Card in SA',
        url: 'https://www.sa.gov.au/topics/driving-and-transport/licences/proof-of-age-card',
        note: 'Official identity documentation requirements, forms, and service locations in Adelaide'
      },
      {
        agency: 'Service NSW',
        title: 'Apply for an NSW Photo Card',
        url: 'https://www.service.nsw.gov.au/transaction/apply-for-an-nsw-photo-card',
        note: 'NSW requirements, digital wallet setup, and fee schedule'
      },
      {
        agency: 'VicRoads',
        title: 'Victorian Proof of Age Card Application',
        url: 'https://www.vicroads.vic.gov.au/licences/proof-of-age-card',
        note: 'Victorian identity verification, referee rules, and postal processing'
      }
    ],
    lastReviewed: 'November 2026',
    reviewedBy: 'FirstYear AU Settlement Advisory Team',
    nextStepId: 'superannuation',
    nextStepTitle: 'Set Up and Manage Your Superannuation'
  },

  // 9. Superannuation
  {
    id: 'superannuation',
    category: 'Get Set-Up',
    categorySlug: 'get-set-up',
    slug: 'superannuation',
    title: 'Superannuation (Super) Explained',
    seoKeyword: 'superannuation for temporary migrants Australia',
    question: 'What is Australian Superannuation, who pays it, and can I claim it back when I leave the country?',
    directAnswer:
      'Superannuation (commonly known as "Super") is Australia’s compulsory retirement savings system. If you are working in Australia, your employer is legally mandated to pay an extra 11.5% (rising to 12% from July 2025) of your gross wage on top of your standard salary into an accredited super fund. Temporary visa holders can claim this accumulated money back when permanently departing Australia via the ATO’s Departing Australia Superannuation Payment (DASP).',
    appliesTo:
      'All employees working full-time, part-time, or casual in Australia, regardless of how much they earn each month.',
    steps: [
      {
        stepNumber: 1,
        title: 'Choose an Industry Super Fund with low administration fees',
        description:
          'When you start a job, your employer will offer their "default" fund, or you can nominate your own. Australian Industry Super Funds (such as AustralianSuper, Hostplus, Rest, or UniSuper) are run solely to benefit members with low overhead fees and strong long-term returns.',
        tip: 'If working in hospitality or retail, Hostplus or Rest are popular; for university or professional roles, UniSuper or AustralianSuper are standard.'
      },
      {
        stepNumber: 2,
        title: 'Provide your chosen Super fund details to your employer',
        description:
          'Complete the Superannuation Standard Choice form provided during employee onboarding. Provide your fund name, Unique Superannuation Identifier (USI), and your Member Number.',
        caution: 'Do not create a new super fund with every new job. Having multiple accounts means you pay multiple sets of monthly account keeping fees and insurance premiums, draining your balance.'
      },
      {
        stepNumber: 3,
        title: 'Link your super account to your myGov portal',
        description:
          'Connect the Australian Taxation Office (ATO) service to your myGov account. Here you can view every super contribution your boss deposits, view your total balance across funds, and consolidate old accounts with one click.',
        tip: 'Employers are required by law to pay your super at least once every quarter (many pay monthly with payroll).'
      },
      {
        stepNumber: 4,
        title: 'Understand the Departing Australia Superannuation Payment (DASP)',
        description:
          'If you hold an eligible temporary visa (such as subclass 500 or 482) and permanently depart Australia after your visa expires, you can apply online through the ATO to withdraw your accumulated super balance.',
        caution: 'DASP payments are subject to withholding tax (generally 35% or 47% depending on visa type, 65% for Working Holiday Makers).'
      }
    ],
    stateNotes: {
      'Federal Jurisdiction': 'Superannuation is governed by federal legislation under the Australian Prudential Regulation Authority (APRA) and the ATO. Super rules do not change across state lines.'
    },
    faqs: [
      {
        question: 'Does super get deducted from my take-home pay?',
        answer: 'No. The 11.5%+ superannuation guarantee is an additional payment paid by your employer on top of your ordinary earnings. If your employment contract specifies "$30/hour plus super", you receive $30/hour into your bank account and an extra $3.45/hour goes into your super fund.'
      },
      {
        question: 'Can my employer pay me cash-in-hand to avoid super?',
        answer: 'No. "Cash-in-hand" jobs that avoid super and tax are illegal in Australia. You miss out on mandatory super contributions and worker compensation safety protections.'
      },
      {
        question: 'How do I cancel automatic life insurance inside my super fund?',
        answer: 'Most super funds automatically enrol members in death and total disability insurance, deducting fees from your balance. If you are young, have no dependents in Australia, and want to keep 100% of your money, log into your fund portal to opt out.'
      }
    ],
    officialSources: [
      {
        agency: 'Australian Taxation Office (ATO)',
        title: 'Super for Individuals and New Workers',
        url: 'https://www.ato.gov.au/individuals-and-families/super-for-individuals-and-families/super',
        note: 'Complete breakdown of superannuation guarantee rates and employee rights'
      },
      {
        agency: 'ATO DASP Portal',
        title: 'Departing Australia Superannuation Payment (DASP) Online',
        url: 'https://www.ato.gov.au/individuals-and-families/super-for-individuals-and-families/super/temporary-residents-and-superannuation/departing-australia-superannuation-payment-dasp',
        note: 'Official application portal to reclaim accumulated super upon leaving Australia'
      }
    ],
    lastReviewed: 'November 2026',
    reviewedBy: 'FirstYear AU Settlement Advisory Team',
    nextStepId: 'buying-a-car',
    nextStepTitle: 'Buying a Car Safely in Australia'
  },

  // 10. Buying a Car
  {
    id: 'buying-a-car',
    category: 'Get Around',
    categorySlug: 'get-around',
    slug: 'buying-a-car',
    title: 'Buying a Used Car in Australia',
    seoKeyword: 'buying a used car Australia international student',
    question: 'How do I buy a reliable used car in Australia without inheriting debt, getting scammed, or failing registration (rego)?',
    directAnswer:
      'Buying a used car in Australia requires three non-negotiable checks: running an official A$2 government PPSR (Personal Property Securities Register) check to confirm the car has no outstanding financial loan or write-off history, ensuring the seller supplies a current Roadworthy Certificate (RWC / Pink Slip), and transferring the state vehicle registration ("rego") within 14 days. Never purchase a vehicle without a signed transfer form and a clear test drive.',
    appliesTo:
      'Migrants living in suburban, regional, or outer metropolitan areas where public transport is limited.',
    steps: [
      {
        stepNumber: 1,
        title: 'Run an official A$2 PPSR check on the VIN before inspecting',
        description:
          'Obtain the 17-character Vehicle Identification Number (VIN) from the seller. Search it exclusively on the official government website ppsr.gov.au for A$2. This reveals if a bank holds a mortgage over the car, if it has been written off in a flood/crash, or if it has been reported stolen.',
        caution: 'If you buy a car with money owing on it, the bank can legally seize the car from your driveway with zero compensation to you.'
      },
      {
        stepNumber: 2,
        title: 'Verify the Roadworthy Certificate (RWC / Pink Slip / Safety Certificate)',
        description:
          'In Victoria and Queensland, the private seller must provide a valid roadworthy inspection certificate issued by a licensed mechanic before registration can be transferred. In NSW, light vehicles older than 5 years require an annual pink slip inspection.',
        tip: 'In South Australia, annual roadworthy certificates are not mandatory for private sales, making an independent mechanical pre-purchase inspection ($150–$250 via RAA) even more crucial.'
      },
      {
        stepNumber: 3,
        title: 'Understand Registration ("Rego") and Compulsory Third Party (CTP)',
        description:
          'Australian vehicle registration ("rego") is renewed annually or quarterly and includes basic Compulsory Third Party (CTP / Green Slip) insurance that covers human injuries caused in an accident. Rego DOES NOT cover damage to other people’s cars.',
        tip: 'Always buy at least Third-Party Property Damage insurance ($30–$50/month) so you are not personally liable for $80,000 if you accidentally bump into a luxury vehicle.'
      },
      {
        stepNumber: 4,
        title: 'Complete the notice of vehicle transfer within 14 days',
        description:
          'Both the buyer and seller must complete and sign the official state vehicle transfer form. Lodge this at the state transport authority (Service SA, VicRoads, Service NSW) and pay the state transfer fee and stamp duty (usually 3% to 4% of market value).',
        caution: 'Failure to transfer registration within 14 days incurs administrative late penalty fees.'
      }
    ],
    stateNotes: {
      'South Australia (Service SA)': 'Vehicle transfer requires a customer number from Service SA. SA does not require a roadworthy certificate for standard private transfers, but independent RAA check is strongly recommended.',
      'Victoria (VicRoads)': 'Buyer must submit a valid Certificate of Roadworthiness (RWC) issued within 30 days of the sale date.',
      'New South Wales (Service NSW)': 'Safety check (Pink Slip) is required. Registration transfer can be completed online via Service NSW if both parties hold local customer profiles.'
    },
    faqs: [
      {
        question: 'What is PPSR?',
        answer: 'The Personal Property Securities Register (PPSR) is the single official Australian Government register that records security interests, written-off vehicle status, and stolen reports for motor vehicles.'
      },
      {
        question: 'What does "Rego" include?',
        answer: 'Rego includes state vehicle registration fees, roadside administration charges, and statutory Compulsory Third Party (CTP) insurance. It protects against bodily injury compensation claims, but provides $0 coverage for property or car repair costs.'
      },
      {
        question: 'Can I buy a car using an overseas driver licence?',
        answer: 'Yes. You can purchase, register, and insure a car in your name using your overseas passport and visa. The state transport authority will issue you an internal client/customer reference number to register the car.'
      }
    ],
    officialSources: [
      {
        agency: 'Australian Financial Security Authority (AFSA)',
        title: 'Official PPSR Vehicle Check Portal ($2)',
        url: 'https://www.ppsr.gov.au/',
        note: 'Official Australian Government search to verify vehicle debt, written-off status, and theft records'
      },
      {
        agency: 'Service SA / DIT',
        title: 'Vehicle Registration Transfer & Stamp Duty in South Australia',
        url: 'https://www.sa.gov.au/topics/driving-and-transport/vehicles-and-registration/buying-and-selling-a-vehicle',
        note: 'South Australian official transfer forms, stamp duty calculator, and buyer obligations'
      },
      {
        agency: 'VicRoads',
        title: 'Transfer a Victorian Vehicle Registration',
        url: 'https://www.vicroads.vic.gov.au/registration/buy-sell-or-transfer-a-vehicle',
        note: 'Victorian roadworthy requirements, transfer fees, and seller checklists'
      }
    ],
    lastReviewed: 'November 2026',
    reviewedBy: 'FirstYear AU Settlement Advisory Team',
    nextStepId: 'driver-licence',
    nextStepTitle: 'Convert or Use Your Driver Licence'
  },

  // 11. Driver Licence
  {
    id: 'driver-licence',
    category: 'Get Around',
    categorySlug: 'get-around',
    slug: 'driver-licence',
    title: 'Driving with an Overseas Licence & Conversion',
    seoKeyword: 'convert overseas driver licence Australia',
    question: 'Can I drive in Australia with my overseas licence, and when do I need to convert to an Australian state licence?',
    directAnswer:
      'If you hold a temporary visa (such as an international student subclass 500 or temporary graduate subclass 485), you can drive legally using your valid foreign licence provided it is in English or accompanied by an official NAATI-accredited translation or International Driving Permit (IDP). If you become a permanent resident, you must convert to a local state driver licence within 3 to 6 months of landing.',
    appliesTo:
      'All temporary and permanent visa holders who plan to drive cars, scooters, or motorbikes on Australian roads.',
    steps: [
      {
        stepNumber: 1,
        title: 'Ensure your overseas licence is valid and translated',
        description:
          'Your physical licence must remain current and unexpired. If your overseas licence is not written in English, you must carry an International Driving Permit (IDP) or a certified translation produced by a NAATI-accredited translator.',
        caution: 'Driving with an untranslated non-English licence is treated the same as driving unlicenced, leading to heavy court fines and invalidating car insurance.'
      },
      {
        stepNumber: 2,
        title: 'Learn Australian road rules (Left side, roundabouts, hook turns)',
        description:
          'Australia drives strictly on the LEFT side of the road. Familiarise yourself with multi-lane roundabout rules (give way to all vehicles already on your right), school zone speed limits (40 km/h or 25 km/h in SA during school times), and Melbourne CBD hook turns.',
        tip: 'Australia has zero tolerance for mobile phone use while driving; high-tech roadside AI cameras enforce strict fines exceeding A$400.'
      },
      {
        stepNumber: 3,
        title: 'Check Recognized Country status for licence conversion',
        description:
          'If your home country is on the "Recognized Country" list (e.g., UK, USA, Germany, Japan, Singapore) and you are over 25, you can convert to an Australian licence without taking a driving test. If your country is not recognized, you must pass a computer-based road knowledge test and an in-car practical driving assessment.',
        tip: 'In South Australia and Victoria, recent legislative updates require temporary visa holders living in the state continuously for 6 months to convert to a local licence in certain circumstances.'
      },
      {
        stepNumber: 4,
        title: 'Book your knowledge and practical tests',
        description:
          'Visit your state licensing authority (Service SA, VicRoads, Service NSW) with your passport, visa grant, proof of address, and original overseas licence to book your Driver Knowledge Test (DKT) or practical driving exam.',
        tip: 'Take at least 2 or 3 lessons with a local qualified Australian driving instructor to understand local test routes and blind-spot head check requirements.'
      }
    ],
    stateNotes: {
      'South Australia (Service SA)': 'Temporary visa holders can drive on foreign licence if current and in English. PR holders must transfer within 90 days.',
      'Victoria (VicRoads)': 'Temporary visa holders who have resided in Victoria for more than 6 continuous months must hold a Victorian driver licence to drive legally on Victorian roads.',
      'New South Wales (Service NSW)': 'Temporary visa holders in NSW must convert to an NSW licence after 6 months of continuous residence if from specific overseas jurisdictions.'
    },
    faqs: [
      {
        question: 'What is a NAATI translation?',
        answer: 'NAATI (National Accreditation Authority for Translators and Interpreters) is the official national standards body. Australian police and courts only accept foreign document translations stamped by a certified NAATI translator.'
      },
      {
        question: 'What is the blood alcohol limit (BAC) for driving in Australia?',
        answer: 'For full licence holders, the legal blood alcohol limit is strictly under 0.05. For learner, provisional (P-plate), and international drivers converting to probationary status, the limit is strictly 0.00 (Zero Tolerance).'
      },
      {
        question: 'What are Australian speed cameras like?',
        answer: 'Australian police utilize extensive fixed speed cameras, mobile speed camera vans, point-to-point average speed cameras, and red-light cameras. Even exceeding the posted limit by 3 to 5 km/h results in photographic speeding fines.'
      }
    ],
    officialSources: [
      {
        agency: 'Service NSW',
        title: 'Overseas Driver Licence Regulations in NSW',
        url: 'https://www.service.nsw.gov.au/transaction/transfer-an-overseas-driver-licence',
        note: 'Guidelines on the 6-month continuous residency rule and recognized country conversion paths'
      },
      {
        agency: 'VicRoads',
        title: 'Overseas Licences and Victorian Driving Rules',
        url: 'https://www.vicroads.vic.gov.au/licences/renew-replace-or-update/new-to-victoria/overseas-drivers',
        note: 'Conversion processes, test booking, and 6-month residency cut-off dates'
      },
      {
        agency: 'Service SA (Government of South Australia)',
        title: 'Driving with an Overseas Licence in SA',
        url: 'https://www.sa.gov.au/topics/driving-and-transport/licences/drivers-licence/driving-with-an-overseas-licence',
        note: 'Requirements for international students and permanent visa holders in South Australia'
      }
    ],
    lastReviewed: 'November 2026',
    reviewedBy: 'FirstYear AU Settlement Advisory Team',
    nextStepId: 'police-check',
    nextStepTitle: 'Apply for a National Police Check'
  },

  // 12. Police Check
  {
    id: 'police-check',
    category: 'ID and Paperwork',
    categorySlug: 'id-and-paperwork',
    slug: 'police-check',
    title: 'National Police Check for Jobs & Visas',
    seoKeyword: 'national police check for international students',
    question: 'How do international students and new migrants obtain an official Australian National Police Check for work or internships?',
    directAnswer:
      'An Australian National Police Check is a certified document listing any disclosable criminal history outcomes across all Australian states and territories. Most Australian employers in healthcare, aged care, security, banking, and education require this check before onboarding. You can apply directly through the Australian Federal Police (AFP) portal online or through an ACIC-accredited provider for approximately A$42 to A$47.',
    appliesTo:
      'Anyone applying for jobs, internships, volunteer roles, nursing placements, or immigration visa extensions in Australia.',
    steps: [
      {
        stepNumber: 1,
        title: 'Determine whether you need an AFP check or an ACIC check',
        description:
          'If the check is for immigration, citizenship, overseas employment, or registration with regulatory health boards (AHPRA), you MUST use the official Australian Federal Police (AFP) portal. For general retail, warehouse, or hospitality jobs, an ACIC (Australian Criminal Intelligence Commission) accredited provider is usually accepted.',
        tip: 'Always confirm the exact "Code Purpose" required by your employer or university placement coordinator before submitting.'
      },
      {
        stepNumber: 2,
        title: 'Gather 100 points of identification documents',
        description:
          'The AFP uses a strict 100-point identification checklist. Combine your foreign passport (70 points) with an Australian bank statement or debit card (25 points) and your student ID or utility bill (25 points) to exceed 100 points.',
        caution: 'Ensure the name entered matches the exact legal name formatting across all uploaded identity files.'
      },
      {
        stepNumber: 3,
        title: 'Submit your application and payment online',
        description:
          'Fill in the online form, upload scanned colour copies of your identity documents, and pay the fee (standard AFP fee is $42). Do not pay third-party agency markups charging $70+ for the exact same federal check.',
        tip: 'Digital National Police Certificates with cryptographic validation barcodes are issued via email within 2 to 5 business days for most applicants.'
      },
      {
        stepNumber: 4,
        title: 'Store and securely share your digital certificate',
        description:
          'Save the original PDF certificate on your cloud drive. Employers can verify the authenticity of an AFP digital certificate using the official AFP online verification tool.',
        caution: 'Police checks do not have a formal expiry date under Australian law, but most employers specify that a certificate must be no older than 3 to 6 months.'
      }
    ],
    stateNotes: {
      'National Federal Coverage': 'A National Police Check covers records held by all state police forces (NSW Police, Victoria Police, Queensland Police, SA Police, WA Police, etc.). You do not need to apply to individual state police departments.'
    },
    faqs: [
      {
        question: 'Will traffic fines show up on my National Police Check?',
        answer: 'Minor traffic infringements (such as speeding fines or parking tickets) that were paid without court conviction do not appear on a standard National Police Certificate.'
      },
      {
        question: 'Does the Australian police check include offences from my home country?',
        answer: 'No. An Australian National Police Check only searches criminal records and court convictions held within Australian jurisdictions. If an employer or visa requires overseas records, you will need a Police Clearance Certificate from your home country.'
      },
      {
        question: 'How long does an AFP Police Check take to process?',
        answer: 'Approximately 70% of digital AFP checks are completed and dispatched within 24 to 48 hours. If your application is flagged for manual review due to a common name match, it may take up to 10 to 15 business days.'
      }
    ],
    officialSources: [
      {
        agency: 'Australian Federal Police (AFP)',
        title: 'National Police Checks Online Application Portal',
        url: 'https://www.afp.gov.au/our-services/national-police-checks',
        note: 'Official federal application portal for immigration, health, and national employment checks ($42)'
      },
      {
        agency: 'Australian Criminal Intelligence Commission (ACIC)',
        title: 'National Police Checking Service & Accredited Bodies',
        url: 'https://www.acic.gov.au/services/national-police-checking-service',
        note: 'List of authorized commercial screening providers and verification protocols'
      }
    ],
    lastReviewed: 'November 2026',
    reviewedBy: 'FirstYear AU Settlement Advisory Team',
    nextStepId: 'working-with-children',
    nextStepTitle: 'Apply for a Working with Children Check (WWCC)'
  },

  // 13. Working with Children Check (WWCC)
  {
    id: 'working-with-children',
    category: 'ID and Paperwork',
    categorySlug: 'id-and-paperwork',
    slug: 'working-with-children',
    title: 'Working with Children Check (WWCC)',
    seoKeyword: 'working with children check international student',
    question: 'Do I need a Working with Children Check (WWCC), and how do I apply in my state?',
    directAnswer:
      'In Australia, anyone working or volunteering in roles involving contact with individuals under 18—including private tutoring, childcare, swimming coaching, retail toy stores, school campus events, and certain hospitality venues—is legally required to hold an active state Working with Children Check. Unlike a one-off police check, a WWCC provides continuous monitoring for criminal offences over its 3-to-5-year validity period.',
    appliesTo:
      'Any migrant seeking employment or volunteer positions involving child-related work.',
    steps: [
      {
        stepNumber: 1,
        title: 'Identify your state’s specific screening system',
        description:
          'Each state administers its own screening: NSW: Working with Children Check (Service NSW). Victoria: Working with Children Check (Working with Children Victoria). Queensland: Blue Card (Blue Card Services). South Australia: Working with Children Check (DHS Screening Unit). Western Australia: Working with Children Check (Department of Communities).',
        tip: 'In South Australia, checks are administered directly by the Department of Human Services (DHS Screening Unit) online.'
      },
      {
        stepNumber: 2,
        title: 'Select between Volunteer or Paid Employee check',
        description:
          'A Volunteer check is either free or very low cost ($0 to $20), but it CANNOT be used for paid work. If you plan to earn money as a tutor, nanny, or cafe worker at a school venue, you must apply for a Paid Employee check (A$80–$130 depending on the state).',
        caution: 'Working in child-related employment with a volunteer card or without a clearance is an offence subject to heavy financial fines and visa cancellation risks.'
      },
      {
        stepNumber: 3,
        title: 'Complete the online application and verify ID at an agency outlet',
        description:
          'Submit the online application with your passport, visa grant, and residential address. You will receive an application barcode or reference number. Take this barcode and your physical ID documents to an Australia Post outlet or state service centre to verify your identity and have your photo taken.',
        tip: 'Once verified, processing usually takes between 1 and 3 weeks. You will receive an official digital WWCC clearance number via email and SMS.'
      },
      {
        stepNumber: 4,
        title: 'Link your WWCC number with your employer or university portal',
        description:
          'Provide your WWCC number, full legal name, and date of birth to your employer’s HR team. Under Australian law, the employer must verify your clearance online in their organization’s portal before your first shift.',
        tip: 'Keep your contact details up to date; you are legally required to notify the screening unit within 3 months if your phone number or home address changes.'
      }
    ],
    stateNotes: {
      'Queensland': 'Known officially as the "Blue Card". Queensland enforces strict "No Card, No Start" laws—you cannot commence work until your Blue Card is formally issued.',
      'South Australia': 'Administered by DHS Screening Unit. Working with Children Checks are valid for 5 years across South Australia.',
      'New South Wales': 'Administered by Office of the Children’s Guardian. Check costs $80 for paid workers and is valid for 5 years.',
      'Victoria': 'Administered by Department of Justice and Community Safety. Paid check costs $128.20 and lasts 5 years.'
    },
    faqs: [
      {
        question: 'Can I use an NSW WWCC to work with kids in Melbourne or Brisbane?',
        answer: 'Generally no. Child protection screening is managed at the state level. While there are limited temporary exemptions for visiting school camps, regular employment requires a clearance from the state where the work occurs.'
      },
      {
        question: 'What is the difference between a Police Check and a WWCC?',
        answer: 'A Police Check is a point-in-time snapshot of past disclosable court convictions. A WWCC is an active continuous monitoring clearance; if a cardholder is charged with a child-related offence in the future, their employer is immediately notified and the card revoked.'
      },
      {
        question: 'Can international students apply before getting an Australian driver licence?',
        answer: 'Yes. You can complete the 100-point identity check using your foreign passport, student ID card, Australian bank statement, and utility or mobile phone bill.'
      }
    ],
    officialSources: [
      {
        agency: 'NSW Office of the Children’s Guardian',
        title: 'Working with Children Check Verification Portal',
        url: 'https://ocg.nsw.gov.au/working-with-children-check',
        note: 'NSW official guidelines, application forms, and employer online verification'
      },
      {
        agency: 'Working with Children Victoria',
        title: 'Apply for a Victorian WWCC',
        url: 'https://www.service.vic.gov.au/services/working-with-children',
        note: 'Victorian requirements, volunteer vs paid status, and Australia Post verification'
      },
      {
        agency: 'Department of Human Services South Australia',
        title: 'DHS Working with Children Screening Check',
        url: 'https://screening.sa.gov.au/types-of-check/working-with-children-check',
        note: 'South Australian DHS screening applications and employer registration'
      }
    ],
    lastReviewed: 'November 2026',
    reviewedBy: 'FirstYear AU Settlement Advisory Team',
    nextStepId: '12-month-plan',
    nextStepTitle: 'View the Complete 12-Month Plan Timeline'
  }
];

export function getGuideById(id: string): GuideItem | undefined {
  return GUIDES.find((g) => g.id === id || g.slug === id);
}
