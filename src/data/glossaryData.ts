export interface GlossaryTerm {
  term: string;
  definition: string;
  context: string;
  category: 'Housing' | 'Finance & Tax' | 'Transport' | 'Everyday Life';
}

export const AUSSIE_TERMS: GlossaryTerm[] = [
  {
    term: 'Bond',
    definition: 'A security deposit paid by tenants before moving in, usually equivalent to 4 weeks of rent. It is held by an independent government authority (not the landlord) and refunded at the end of the lease if there is no damage or unpaid rent.',
    context: 'Held by RTBA in Victoria, RBO in NSW, CBS in SA, and RTA in Queensland.',
    category: 'Housing'
  },
  {
    term: 'Condition Report',
    definition: 'A legal document documenting the physical state of a rental property room-by-room when you move in. You must note pre-existing damage, attach photos, and return it within 3 to 7 business days to safeguard your bond refund.',
    context: 'Your primary evidence if the landlord claims you caused damage when moving out.',
    category: 'Housing'
  },
  {
    term: 'Rego',
    definition: 'Australian slang for vehicle registration. It is an annual or quarterly fee paid to the state government to legally drive a car on public roads, and includes basic Compulsory Third Party (CTP) bodily injury insurance.',
    context: 'Does not cover damage to your car or someone else’s property; you still need property insurance.',
    category: 'Transport'
  },
  {
    term: 'TFN (Tax File Number)',
    definition: 'A unique 9-digit number issued by the Australian Taxation Office (ATO). You must provide this to your employer and bank so you are taxed at normal rates rather than the emergency 47% withholding tax rate.',
    context: 'Free to apply on ato.gov.au; only apply after passing through border control.',
    category: 'Finance & Tax'
  },
  {
    term: 'Superannuation (Super)',
    definition: 'Compulsory retirement savings fund. If you are employed, your employer must pay an additional 11.5% of your ordinary earnings into an accredited super fund on top of your wage.',
    context: 'Temporary migrants can claim this money back via the DASP scheme when departing Australia.',
    category: 'Finance & Tax'
  },
  {
    term: 'Bulk Billing',
    definition: 'A medical payment arrangement where the doctor or clinic accepts the government Medicare or private health insurer rebate as full payment for your consultation, meaning zero ($0) out-of-pocket cost for you.',
    context: 'Check with clinics in advance if they bulk-bill international student OSHC/OVHC.',
    category: 'Everyday Life'
  },
  {
    term: '100 Points of ID',
    definition: 'A standardised identity verification system used by Australian banks, rental agencies, and police checks. Different documents carry different point values (e.g., Passport = 70 points, Driver Licence/Photo Card = 40 points, Bank Card = 25 points).',
    context: 'You must provide documents that total at least 100 points.',
    category: 'Everyday Life'
  },
  {
    term: 'PPSR Check',
    definition: 'Personal Property Securities Register. An official A$2 Australian Government online search on a vehicle’s VIN to verify whether a car has money owing on it to a bank, has been reported stolen, or was written off in a crash.',
    context: 'Essential before handing over any money for a secondhand car.',
    category: 'Transport'
  },
  {
    term: 'Op-Shop',
    definition: 'Short for "opportunity shop". Australian charity thrift shops run by organisations like Salvos (Salvation Army) and Vinnies (St Vincent de Paul) selling affordable secondhand furniture, winter coats, and kitchenware.',
    context: 'Great for furnishing student rentals on a strict budget.',
    category: 'Everyday Life'
  },
  {
    term: 'WWCC',
    definition: 'Working with Children Check. A continuous criminal history screening required by state governments for anyone doing paid work or volunteering with minors under 18 (e.g. tutoring, coaching, or childcare).',
    context: 'Called the "Blue Card" in Queensland.',
    category: 'Everyday Life'
  }
];
