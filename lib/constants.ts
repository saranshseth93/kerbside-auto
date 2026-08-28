export interface Service {
  id: string
  name: string
  summary: string
  /** Indicative price, in dollars, shown as "from $X". */
  from: number
  duration: string
  includes: string[]
  slot?: string
}

export interface Step {
  number: string
  title: string
  body: string
}

export interface Faq {
  question: string
  answer: string
}

export interface Capability {
  label: string
  detail: string
}

export const business = {
  name: 'Kerbside Auto',
  tagline: 'Mobile mechanics. We come to you.',
  suburb: 'Preston',
  city: 'Melbourne',
  phoneLabel: '0400 000 000',
  phoneHref: 'tel:+61400000000',
  email: 'book@kerbsideauto.example',
  abnLabel: 'ABN 00 000 000 000',
}

/**
 * Capability claims, not social proof.
 *
 * There are no reviews, star ratings or job counts anywhere on this site.
 * Kerbside Auto has never turned a spanner, so it has nothing to be rated on.
 * These are statements about how the (fictional) service is set up.
 */
export const capabilities: Capability[] = [
  {
    label: 'Fully mobile',
    detail: 'Van, tools and parts come to your driveway, kerb or work car park.',
  },
  {
    label: 'Logbook stamped',
    detail: 'Servicing to manufacturer schedule. Your new-car warranty stays intact.',
  },
  {
    label: 'Quoted up front',
    detail: 'Fixed price before we start. If it changes, you approve it first.',
  },
  {
    label: 'Six days a week',
    detail: 'Monday to Saturday, first booking 7am, last booking 4pm.',
  },
]

export const services: Service[] = [
  {
    id: 'logbook',
    name: 'Logbook Service',
    summary:
      'Manufacturer-schedule service done in your driveway. Book stamped, warranty intact.',
    from: 245,
    duration: '90 min',
    includes: [
      'Oil and filter to manufacturer spec',
      'All fluid levels topped up',
      'Full 40-point inspection',
      'Logbook stamped and dated',
      'Written report of anything found',
    ],
    slot: 'service-logbook',
  },
  {
    id: 'brakes',
    name: 'Brakes',
    summary:
      'Pads, rotors, fluid. We measure before we quote, so you are not paying for parts you still have.',
    from: 320,
    duration: '2 hr',
    includes: [
      'Pad and rotor thickness measured',
      'Front or rear pads replaced',
      'Rotors machined or replaced',
      'Brake fluid checked and bled',
      'Road test before we leave',
    ],
    slot: 'service-brakes',
  },
  {
    id: 'inspection',
    name: 'Pre-Purchase Inspection',
    summary:
      'Before you hand over money for a used car, we meet you at the seller and go through it.',
    from: 195,
    duration: '60 min',
    includes: [
      'Full mechanical and body check',
      'Diagnostic scan for stored faults',
      'Tyre, brake and suspension wear',
      'Written report with photos, same day',
      'A straight answer on whether to walk',
    ],
    slot: 'service-inspection',
  },
  {
    id: 'battery',
    slot: 'service-battery',
    name: 'Battery & Starting',
    summary:
      'Not starting? We test the battery, alternator and starter before selling you anything.',
    from: 165,
    duration: '45 min',
    includes: [
      'Battery load and charge test',
      'Alternator output tested',
      'Terminals cleaned and secured',
      'Battery supplied and fitted if needed',
      'Old battery taken away and recycled',
    ],
  },
  {
    id: 'diagnostic',
    slot: 'service-diagnostic',
    name: 'Diagnostic',
    summary:
      'Engine light, odd noise, or a smell you cannot place. We scan it and explain it in English.',
    from: 145,
    duration: '60 min',
    includes: [
      'Full OBD scan, all modules',
      'Fault codes read and interpreted',
      'Physical inspection of the likely cause',
      'Written quote for the repair',
      'Fee credited if we do the repair',
    ],
  },
  {
    id: 'roadworthy',
    slot: 'service-roadworthy',
    name: 'Roadworthy Prep',
    summary:
      'We check the car against the VicRoads list and fix what would fail, before you book the test.',
    from: 180,
    duration: '75 min',
    includes: [
      'Checked against the RWC criteria',
      'Lights, tyres, brakes, steering, seatbelts',
      'List of what would fail, priced',
      'Minor items fixed on the spot',
      'Not a certificate — see the FAQ',
    ],
  },
]

export const steps: Step[] = [
  {
    number: '01',
    title: 'Tell us the car and the problem',
    body: 'Rego or make and model, your postcode, and what it is doing. Thirty seconds on the form or a phone call, whichever you prefer.',
  },
  {
    number: '02',
    title: 'We quote before we book',
    body: 'A fixed price and a time window, in writing. No trip fee, no diagnostic charge to find out what a job costs.',
  },
  {
    number: '03',
    title: 'We turn up and do it',
    body: 'Driveway, kerb, or the office car park. You get the old parts back if you want them, and a written report either way.',
  },
]

/**
 * Suburbs in the (fictional) service area, keyed by postcode. The checker on
 * the page is a real interaction against this list, not a mock.
 */
export const serviceArea: Record<string, string> = {
  '3070': 'Northcote',
  '3071': 'Thornbury',
  '3072': 'Preston',
  '3073': 'Reservoir',
  '3078': 'Fairfield',
  '3079': 'Ivanhoe',
  '3081': 'Heidelberg West',
  '3084': 'Rosanna',
  '3085': 'Macleod',
  '3056': 'Brunswick',
  '3057': 'Brunswick East',
  '3058': 'Coburg',
  '3060': 'Fawkner',
  '3044': 'Pascoe Vale',
  '3055': 'Brunswick West',
  '3065': 'Fitzroy',
  '3066': 'Collingwood',
  '3067': 'Abbotsford',
  '3068': 'Clifton Hill',
  '3121': 'Richmond',
  '3122': 'Hawthorn',
  '3101': 'Kew',
  '3103': 'Balwyn',
  '3126': 'Canterbury',
}

export const faqs: Faq[] = [
  {
    question: 'Does a mobile service void my new-car warranty?',
    answer:
      'No. Australian consumer law means a manufacturer cannot require you to service at their dealership to keep the warranty. What matters is that the service is done to the manufacturer schedule, with the right parts and fluids, and recorded. We do all three and stamp the book.',
  },
  {
    question: 'What if you cannot fix it in my driveway?',
    answer:
      'Some jobs need a hoist. If we open it up and find one of those, we stop, tell you what it needs, and you only pay for the diagnostic time. We are not going to leave your car in pieces on the nature strip.',
  },
  {
    question: 'Can you issue a roadworthy certificate?',
    answer:
      'Not from the van. A roadworthy has to be issued by a licensed vehicle tester at an approved site. What we do is check the car against the same criteria and fix what would fail, so you are not paying for a re-test.',
  },
  {
    question: 'Do I need to be there?',
    answer:
      'Not for the whole job. We need the keys and access to the car. Plenty of customers leave the keys and go back to work. We call before we start anything that was not on the quote.',
  },
  {
    question: 'What about parts?',
    answer:
      'Genuine or quality aftermarket, your call, and the price difference is on the quote before you decide. We carry common filters, pads, fluids and batteries in the van. Anything else is picked up the morning of the booking.',
  },
  {
    question: 'How do I pay?',
    answer:
      'On completion, by card or bank transfer. No deposit to book. If the quote changes mid-job, we ring you and get a yes before we spend your money.',
  },
]

export const hours = [
  { days: 'Mon – Fri', hours: '7.00am – 5.00pm' },
  { days: 'Saturday', hours: '8.00am – 2.00pm' },
  { days: 'Sunday', hours: 'Closed' },
]

export const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Service area', href: '#area' },
  { label: 'How it works', href: '#how' },
  { label: 'FAQ', href: '#faq' },
]

// Written for the person this site is meant to impress: a mechanic or a tradie,
// not a developer. "Spec build" and "portfolio piece" are industry words that
// mean nothing outside the industry, so they are gone. The notice answers the
// three things a real visitor actually wants to know — is this a real business,
// why does it exist, and can I get one.
export const specNotice = {
  short: 'Example site — not a real business',
  bar: 'Kerbside Auto is made up. This site is an example of what we build.',
  long: "Kerbside Auto isn't a real workshop. We invented it so we'd have something honest to show you — a complete, working website, built exactly the way we'd build yours. The services, prices, service area, phone number and ABN on it are all made up.",
  honesty:
    "You won't find reviews, star ratings or job counts anywhere on this site. A made-up business has nothing real to count, and inventing those is the one thing we won't do.",
  ctaLabel: 'Want one for your business?',
  ctaText: 'Every price is published on our site. No quotes on request.',
  ctaHref: 'https://pixelpundit.dev/#pricing',
  ctaButton: 'See what one costs',
  studio: 'Pixel Pundit',
  studioUrl: 'https://pixelpundit.dev',
  creditsUrl:
    'https://github.com/saranshseth93/kerbside-auto/blob/master/CREDITS.md',
}
