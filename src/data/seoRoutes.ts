export interface SeoRouteMeta {
  path: string;
  fileName: string;
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  keywords: string;
  changefreq: 'weekly' | 'monthly';
  priority: string;
}

export const SITE_BASE_URL = 'https://methminifernando.github.io/FirstYearAU/';

export const SEO_ROUTES: SeoRouteMeta[] = [
  {
    path: 'home',
    fileName: 'index.html',
    title: 'FirstYear AU - Settle into Australia with Confidence | New Migrant Guide Australia',
    description:
      'Your plain-English new migrant guide Australia. Follow our week-by-week moving to Australia checklist for SIMs, banking, TFN & renting. Start free.',
    ogTitle: 'FirstYear AU - Settle into Australia with Confidence',
    ogDescription:
      'FirstYear AU turns a confusing first year into a clear week-by-week plan: what to do, when to do it and why, in plain English.',
    keywords: 'new migrant guide australia, moving to australia checklist, things to do after arriving australia',
    changefreq: 'weekly',
    priority: '1.0'
  },
  {
    path: 'plan/overview',
    fileName: '12-month-plan.html',
    title: 'Things to Do After Arriving Australia | FirstYear AU',
    description:
      'Discover all the things to do after arriving Australia with our 12-month new migrant Australia setup guide and checklist. Start your plan free.',
    ogTitle: 'Things to Do After Arriving Australia | FirstYear AU',
    ogDescription:
      'Discover all the things to do after arriving Australia with our 12-month new migrant Australia setup guide and checklist. Start your plan free.',
    keywords: 'things to do after arriving australia, first week in australia checklist, new migrant australia setup guide',
    changefreq: 'weekly',
    priority: '0.9'
  },
  {
    path: 'plan/week-1',
    fileName: 'week-1.html',
    title: 'First Week in Australia Checklist | FirstYear AU',
    description:
      'Follow our first week in Australia checklist for SIM cards, bank accounts, transit, and TFN. Your clear new migrant Australia setup guide from Day 1.',
    ogTitle: 'First Week in Australia Checklist | FirstYear AU',
    ogDescription:
      'Follow our first week in Australia checklist for SIM cards, bank accounts, transit, and TFN. Your clear new migrant Australia setup guide from Day 1.',
    keywords: 'first week in australia checklist, things to do after arriving australia, new migrant australia setup guide',
    changefreq: 'weekly',
    priority: '0.9'
  },
  {
    path: 'plan/before-arrival',
    fileName: 'before-arrival.html',
    title: 'Moving to Australia Checklist Pre-Flight | FirstYear AU',
    description:
      'Prepare before you fly with our moving to Australia checklist. Organise health cover, pre-arrival banking, documents, and temporary accommodation.',
    ogTitle: 'Moving to Australia Checklist Pre-Flight | FirstYear AU',
    ogDescription:
      'Prepare before you fly with our moving to Australia checklist. Organise health cover, pre-arrival banking, documents, and temporary accommodation.',
    keywords: 'moving to australia checklist, new migrant australia setup guide',
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    path: 'plan/month-1',
    fileName: 'month-1.html',
    title: 'Things to Do After Arriving: Month 1 | FirstYear AU',
    description:
      'Plan the things to do after arriving Australia in Month 1: attend inspections, rent with no history, lodge your rental bond, and furnish on a budget.',
    ogTitle: 'Things to Do After Arriving: Month 1 | FirstYear AU',
    ogDescription:
      'Plan the things to do after arriving Australia in Month 1: attend inspections, rent with no history, lodge your rental bond, and furnish on a budget.',
    keywords: 'things to do after arriving australia, new migrant australia setup guide',
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    path: 'plan/months-2-3',
    fileName: 'months-2-3.html',
    title: 'New Migrant Australia Setup Guide: M2-3 | FirstYear AU',
    description:
      'Follow our new migrant Australia setup guide for Months 2 to 3: get your 18+ Proof of Age card, set up superannuation, and register with a local GP.',
    ogTitle: 'New Migrant Australia Setup Guide: M2-3 | FirstYear AU',
    ogDescription:
      'Follow our new migrant Australia setup guide for Months 2 to 3: get your 18+ Proof of Age card, set up superannuation, and register with a local GP.',
    keywords: 'new migrant australia setup guide, proof of age card australia',
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    path: 'plan/months-4-12',
    fileName: 'months-4-12.html',
    title: 'New Migrant Australia Setup Guide: M4-12 | FirstYear AU',
    description:
      'Finish your first year with our new migrant Australia setup guide for Months 4 to 12: driver licence conversion, buying a car, and police checks.',
    ogTitle: 'New Migrant Australia Setup Guide: M4-12 | FirstYear AU',
    ogDescription:
      'Finish your first year with our new migrant Australia setup guide for Months 4 to 12: driver licence conversion, buying a car, and police checks.',
    keywords: 'new migrant australia setup guide, convert foreign drivers licence australia',
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    path: 'get-set-up/tax-file-number',
    fileName: 'tfn.html',
    title: 'Apply for TFN Online Australia Guide | FirstYear AU',
    description:
      'Learn how to apply for TFN online Australia for free via the ATO. Follow our TFN application international student guide and avoid third-party fees.',
    ogTitle: 'Apply for TFN Online Australia Guide | FirstYear AU',
    ogDescription:
      'Learn how to apply for TFN online Australia for free via the ATO. Follow our TFN application international student guide and avoid third-party fees.',
    keywords: 'apply for tfn online australia, tfn application international student',
    changefreq: 'monthly',
    priority: '0.9'
  },
  {
    path: 'get-set-up/bank-account',
    fileName: 'bank-account.html',
    title: 'Open Bank Account Australia New Arrival | FirstYear AU',
    description:
      'Step-by-step guide to open bank account Australia new arrival. Compare the best bank account new migrant Australia options and meet the 6-week ID rule.',
    ogTitle: 'Open Bank Account Australia New Arrival | FirstYear AU',
    ogDescription:
      'Step-by-step guide to open bank account Australia new arrival. Compare the best bank account new migrant Australia options and meet the 6-week ID rule.',
    keywords: 'open bank account australia new arrival, best bank account new migrant australia',
    changefreq: 'monthly',
    priority: '0.9'
  },
  {
    path: 'get-set-up/sim-internet',
    fileName: 'sim-internet.html',
    title: 'Best SIM Card New Arrivals Australia | FirstYear AU',
    description:
      'Compare the best SIM card new arrivals Australia options and prepaid SIM card international student Australia plans. Set up your phone and NBN fast.',
    ogTitle: 'Best SIM Card New Arrivals Australia | FirstYear AU',
    ogDescription:
      'Compare the best SIM card new arrivals Australia options and prepaid SIM card international student Australia plans. Set up your phone and NBN fast.',
    keywords: 'best sim card new arrivals australia, prepaid sim card international student australia',
    changefreq: 'monthly',
    priority: '0.9'
  },
  {
    path: 'get-set-up/superannuation',
    fileName: 'superannuation.html',
    title: 'How Does Super Work in Australia Guide | FirstYear AU',
    description:
      'Learn how does super work in Australia and how superannuation Australia new migrants rules protect your retirement savings and DASP claims.',
    ogTitle: 'How Does Super Work in Australia Guide | FirstYear AU',
    ogDescription:
      'Learn how does super work in Australia and how superannuation Australia new migrants rules protect your retirement savings and DASP claims.',
    keywords: 'how does super work in australia, superannuation australia new migrants',
    changefreq: 'monthly',
    priority: '0.9'
  },
  {
    path: 'find-a-home/renting-inspections',
    fileName: 'renting.html',
    title: 'Rent With No Rental History Australia | FirstYear AU',
    description:
      'Learn how to rent with no rental history Australia and prepare a strong rental application new migrant Australia pack without local references.',
    ogTitle: 'Rent With No Rental History Australia | FirstYear AU',
    ogDescription:
      'Learn how to rent with no rental history Australia and prepare a strong rental application new migrant Australia pack without local references.',
    keywords: 'rent with no rental history australia, how to rent in australia without local references, rental application new migrant australia',
    changefreq: 'monthly',
    priority: '0.9'
  },
  {
    path: 'find-a-home/bond-condition-report',
    fileName: 'bond-condition-report.html',
    title: 'Rental Bond Condition Report Australia | FirstYear AU',
    description:
      'Protect your deposit with our rental bond condition report Australia guide. Lodge bonds with state authorities and complete your move-in report.',
    ogTitle: 'Rental Bond Condition Report Australia | FirstYear AU',
    ogDescription:
      'Protect your deposit with our rental bond condition report Australia guide. Lodge bonds with state authorities and complete your move-in report.',
    keywords: 'rental bond condition report australia, rent with no rental history australia',
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    path: 'find-a-home/furniture',
    fileName: 'furniture.html',
    title: 'Cheap Furniture International Students AU | FirstYear AU',
    description:
      'Find cheap furniture international students Australia options from op-shops, IKEA, and Marketplace while avoiding common PayID delivery scams.',
    ogTitle: 'Cheap Furniture International Students AU | FirstYear AU',
    ogDescription:
      'Find cheap furniture international students Australia options from op-shops, IKEA, and Marketplace while avoiding common PayID delivery scams.',
    keywords: 'cheap furniture international students australia, furnishing a rental australia',
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    path: 'get-around/public-transport',
    fileName: 'public-transport.html',
    title: 'Public Transport Cards Australia Guide | FirstYear AU',
    description:
      'Navigate Opal, myki, go card, and metroCARD with our public transport cards Australia guide, including international student concession fare rules.',
    ogTitle: 'Public Transport Cards Australia Guide | FirstYear AU',
    ogDescription:
      'Navigate Opal, myki, go card, and metroCARD with our public transport cards Australia guide, including international student concession fare rules.',
    keywords: 'public transport cards australia, student concession opal myki metrocard',
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    path: 'get-around/driver-licence',
    fileName: 'driver-licence.html',
    title: 'Driving in Australia on Overseas Licence | FirstYear AU',
    description:
      'Rules for driving in Australia on overseas licence, NAATI translations, and how to convert foreign drivers licence Australia state by state cleanly.',
    ogTitle: 'Driving in Australia on Overseas Licence | FirstYear AU',
    ogDescription:
      'Rules for driving in Australia on overseas licence, NAATI translations, and how to convert foreign drivers licence Australia state by state cleanly.',
    keywords: 'driving in australia on overseas licence, convert foreign drivers licence australia',
    changefreq: 'monthly',
    priority: '0.9'
  },
  {
    path: 'get-around/buying-a-car',
    fileName: 'buying-a-car.html',
    title: 'Buying a Car in Australia New Migrant | FirstYear AU',
    description:
      'Step-by-step buying a car in Australia new migrant guide. Run an official PPSR check, verify roadworthy certificates, and transfer rego safely.',
    ogTitle: 'Buying a Car in Australia New Migrant | FirstYear AU',
    ogDescription:
      'Step-by-step buying a car in Australia new migrant guide. Run an official PPSR check, verify roadworthy certificates, and transfer rego safely.',
    keywords: 'buying a car in australia new migrant, ppsr check rego australia',
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    path: 'id-and-paperwork/proof-of-age',
    fileName: 'proof-of-age.html',
    title: 'Proof of Age Card Australia Guide | FirstYear AU',
    description:
      'Apply for an official proof of age card Australia or 18 plus card South Australia so you can keep your foreign passport locked safely at home.',
    ogTitle: 'Proof of Age Card Australia Guide | FirstYear AU',
    ogDescription:
      'Apply for an official proof of age card Australia or 18 plus card South Australia so you can keep your foreign passport locked safely at home.',
    keywords: 'proof of age card australia, 18 plus card south australia',
    changefreq: 'monthly',
    priority: '0.9'
  },
  {
    path: 'id-and-paperwork/police-check',
    fileName: 'police-check.html',
    title: 'Police Check International Student Australia | FirstYear AU',
    description:
      'Get a police check international student Australia safely. Follow our official Australian Federal Police check online guide for jobs and placements.',
    ogTitle: 'Police Check International Student Australia | FirstYear AU',
    ogDescription:
      'Get a police check international student Australia safely. Follow our official Australian Federal Police check online guide for jobs and placements.',
    keywords: 'police check international student australia, australian federal police check online',
    changefreq: 'monthly',
    priority: '0.9'
  },
  {
    path: 'id-and-paperwork/working-with-children',
    fileName: 'working-with-children.html',
    title: 'Working With Children Check Australia | FirstYear AU',
    description:
      'Apply for a state Working With Children Check Australia or Queensland Blue Card. Check paid vs volunteer requirements and official portals.',
    ogTitle: 'Working With Children Check Australia | FirstYear AU',
    ogDescription:
      'Apply for a state Working With Children Check Australia or Queensland Blue Card. Check paid vs volunteer requirements and official portals.',
    keywords: 'working with children check australia, blue card international student',
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    path: 'pricing/compare',
    fileName: 'pricing.html',
    title: 'Moving to Australia Checklist & Plans | FirstYear AU',
    description:
      'Compare our free moving to Australia checklist with FirstYear Plus, including the rental application template for new migrants and a 7-day refund.',
    ogTitle: 'Moving to Australia Checklist & Plans | FirstYear AU',
    ogDescription:
      'Compare our free moving to Australia checklist with FirstYear Plus, including the rental application template for new migrants and a 7-day refund.',
    keywords: 'rental application template for new migrants, moving to australia checklist',
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    path: 'pricing/free',
    fileName: 'free-checklist.html',
    title: 'Moving to Australia Checklist Free PDF | FirstYear AU',
    description:
      'Use our free moving to Australia checklist and all 13 public guides. Preview our rental application template for new migrants before upgrading.',
    ogTitle: 'Moving to Australia Checklist Free PDF | FirstYear AU',
    ogDescription:
      'Use our free moving to Australia checklist and all 13 public guides. Preview our rental application template for new migrants before upgrading.',
    keywords: 'moving to australia checklist, rental application template for new migrants',
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    path: 'pricing/plus',
    fileName: 'firstyear-plus.html',
    title: 'Rental Application Template for New Migrants | FirstYear AU',
    description:
      'Unlock our rental application template for new migrants, deadline alerts, and moving to Australia checklist tools with FirstYear Plus risk-free.',
    ogTitle: 'Rental Application Template for New Migrants | FirstYear AU',
    ogDescription:
      'Unlock our rental application template for new migrants, deadline alerts, and moving to Australia checklist tools with FirstYear Plus risk-free.',
    keywords: 'rental application template for new migrants, moving to australia checklist',
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    path: 'pricing/partners',
    fileName: 'partner-offers.html',
    title: 'New Migrant Partner Offers Australia | FirstYear AU',
    description:
      'Explore clearly labelled new migrant partner offers Australia for SIMs, broadband, money transfers, and furniture alongside your free checklist.',
    ogTitle: 'New Migrant Partner Offers Australia | FirstYear AU',
    ogDescription:
      'Explore clearly labelled new migrant partner offers Australia for SIMs, broadband, money transfers, and furniture alongside your free checklist.',
    keywords: 'new migrant partner offers australia, moving to australia checklist',
    changefreq: 'monthly',
    priority: '0.7'
  },
  {
    path: 'about/story',
    fileName: 'about.html',
    title: 'About FirstYear AU New Migrant Guide | FirstYear AU',
    description:
      'Learn why FirstYear AU built a plain-English new migrant guide for international students and skilled visa holders settling into Australian life.',
    ogTitle: 'About FirstYear AU New Migrant Guide | FirstYear AU',
    ogDescription:
      'Learn why FirstYear AU built a plain-English new migrant guide for international students and skilled visa holders settling into Australian life.',
    keywords: 'about firstyear au new migrant guide, new migrant guide australia',
    changefreq: 'monthly',
    priority: '0.7'
  },
  {
    path: 'about/how-we-work',
    fileName: 'how-we-work.html',
    title: 'Official Australian Settlement Sources | FirstYear AU',
    description:
      'See how FirstYear AU verifies every guide against ATO, Home Affairs, and state government sources with quarterly reviews and clear disclosures.',
    ogTitle: 'Official Australian Settlement Sources | FirstYear AU',
    ogDescription:
      'See how FirstYear AU verifies every guide against ATO, Home Affairs, and state government sources with quarterly reviews and clear disclosures.',
    keywords: 'official australian settlement sources, new migrant guide australia',
    changefreq: 'monthly',
    priority: '0.7'
  },
  {
    path: 'contact/form',
    fileName: 'contact.html',
    title: 'Contact FirstYear AU Settlement Team | FirstYear AU',
    description:
      'Contact FirstYear AU settlement team with questions on Australian banking, TFN, renting, or state rule updates. Send an inquiry anytime online.',
    ogTitle: 'Contact FirstYear AU Settlement Team | FirstYear AU',
    ogDescription:
      'Contact FirstYear AU settlement team with questions on Australian banking, TFN, renting, or state rule updates. Send an inquiry anytime online.',
    keywords: 'contact firstyear au settlement team, new migrant australia help',
    changefreq: 'monthly',
    priority: '0.6'
  },
  {
    path: 'contact/faq',
    fileName: 'faq.html',
    title: 'New Migrant Australia FAQ & Answers | FirstYear AU',
    description:
      'Read our new migrant Australia FAQ covering bank accounts, tax file numbers, renting with no history, driver licences, and Proof of Age cards.',
    ogTitle: 'New Migrant Australia FAQ & Answers | FirstYear AU',
    ogDescription:
      'Read our new migrant Australia FAQ covering bank accounts, tax file numbers, renting with no history, driver licences, and Proof of Age cards.',
    keywords: 'new migrant australia faq, things to do after arriving australia',
    changefreq: 'monthly',
    priority: '0.7'
  },
  {
    path: 'contact/chatbot',
    fileName: 'chatbot.html',
    title: 'Australia Settlement Assistant Chat | FirstYear AU',
    description:
      'Ask our Australia settlement assistant chat about SIM cards, applying for a TFN online, rental bonds, and state transport rules 24/7 for free.',
    ogTitle: 'Australia Settlement Assistant Chat | FirstYear AU',
    ogDescription:
      'Ask our Australia settlement assistant chat about SIM cards, applying for a TFN online, rental bonds, and state transport rules 24/7 for free.',
    keywords: 'australia settlement assistant chat, new migrant guide australia',
    changefreq: 'monthly',
    priority: '0.6'
  }
];

export function getSeoRouteByPath(appPath: string): SeoRouteMeta {
  return SEO_ROUTES.find((r) => r.path === appPath) || SEO_ROUTES[0];
}
