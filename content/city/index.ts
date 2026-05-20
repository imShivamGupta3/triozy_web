import { CityLanding } from './types';

export const allCities: CityLanding[] = [
  {
    slug: 'indore',
    name: 'Indore',
    title: 'Rooms, Flatmates, PGs & Maids in Indore | Triozy',
    description:
      'Find rooms for rent, PGs, flatmates, maids and local services in Indore with Triozy. Explore popular areas like Vijay Nagar and Bhawarkuan and move broker-free.',
    popularAreas: [
      { name: 'Vijay Nagar', localitySlug: 'vijay-nagar', blurb: 'Student-friendly, cafes, offices, and strong transit.' },
      { name: 'Bhawarkuan', localitySlug: 'bhawarkuan', blurb: 'Great for students, coaching hubs, and daily essentials.' },
      { name: 'Scheme 54', localitySlug: 'scheme-54', blurb: 'Well-connected lanes, mid-to-premium rentals, easy commute.' },
      { name: 'Super Corridor', localitySlug: 'super-corridor', blurb: 'Newer developments near tech and upcoming campuses.' },
      { name: 'Palasia', localitySlug: 'palasia', blurb: 'Central access; popular for working professionals.' },
      { name: 'Rau', localitySlug: 'rau', blurb: 'Value rentals near institutes and highway connectivity.' },
      { name: 'Bengali Square', localitySlug: 'bengali-square', blurb: 'Convenient for families and professionals; markets and food.' },
      { name: 'LIG Colony', localitySlug: 'lig-colony', blurb: 'Budget-friendly central access for renters.' },
      { name: 'Geeta Bhawan', localitySlug: 'geeta-bhawan', blurb: 'Central commute flexibility for students and professionals.' },
      { name: 'Old Palasia', localitySlug: 'old-palasia', blurb: 'Premium-central living with established lanes.' },
    ],
    faq: [
      {
        question: 'How can I find broker-free rooms and PGs in Indore?',
        answer:
          'Use Triozy to explore verified listings and connect directly with owners or verified community members. Shortlist by area (like Vijay Nagar or Bhawarkuan) and compare rent, distance to college/office, and safety before visiting.',
      },
      {
        question: 'What are the best areas for students in Indore?',
        answer:
          'Students often prefer Bhawarkuan, Vijay Nagar, and nearby coaching corridors due to commute convenience, food options, and access to shared autos and buses. The best area depends on your college and daily schedule.',
      },
      {
        question: 'What is the average PG cost in Indore?',
        answer:
          'PG costs vary by room type and amenities. A practical range is typically higher for single rooms and lower for shared rooms. Use the locality cards to compare average rent signals and then verify on the listing before you pay.',
      },
      {
        question: 'How do I find flatmates safely in Indore?',
        answer:
          'Prefer verified profiles, do a short call or chat to align on budget and rules, and meet in a public place first. Confirm rent split, deposit terms, and house rules in writing before moving in.',
      },
    ],
  },
  {
    slug: 'bhopal',
    name: 'Bhopal',
    title: 'Rooms, Flatmates, PGs & Maids in Bhopal | Triozy',
    description:
      'Find rooms for rent, PGs, flatmates, maids and local services in Bhopal with Triozy. Start broker-free and move faster with verified discovery.',
    popularAreas: [
      { name: 'MP Nagar', blurb: 'Business district with strong connectivity.' },
      { name: 'Arera Colony', blurb: 'Residential, calmer, and well-planned streets.' },
      { name: 'Kolar Road', blurb: 'Expanding area with many rental options.' },
      { name: 'Hoshangabad Road', blurb: 'Good for office commuters and newer societies.' },
    ],
    faq: [
      {
        question: 'How can I find rooms for rent in Bhopal quickly?',
        answer:
          'Start by shortlisting 2 to 3 areas near your college/office and filter by budget and room type. Use verified listings first, and always visit once before paying any token amount.',
      },
      {
        question: 'Can I find flatmates in Bhopal on Triozy?',
        answer:
          'Yes. Look for compatible flatmates by budget and lifestyle preferences, and confirm house rules, rent split, and deposit details before finalizing.',
      },
    ],
  },
  {
    slug: 'delhi',
    name: 'Delhi',
    title: 'Rooms, Flatmates, PGs & Maids in Delhi | Triozy',
    description:
      'Find rooms for rent, PGs, flatmates, maids and local services in Delhi with Triozy. Explore rentals area-wise and move broker-free with verified discovery.',
    popularAreas: [
      { name: 'Saket', blurb: 'Popular South Delhi option with metro access.' },
      { name: 'Laxmi Nagar', blurb: 'Budget-friendly rentals with good connectivity.' },
      { name: 'Karol Bagh', blurb: 'Central access, markets, and transit options.' },
      { name: 'Dwarka', blurb: 'Spacious housing and metro connectivity.' },
    ],
    faq: [
      {
        question: 'How do I avoid rental scams in Delhi?',
        answer:
          'Avoid paying deposits before a visit, verify owner identity, and use verified listings whenever possible. Prefer written agreements and don’t share sensitive documents until you confirm legitimacy.',
      },
      {
        question: 'What is the best way to find a PG near my college in Delhi?',
        answer:
          'Choose your campus as the anchor and shortlist areas within a realistic commute time by metro or bus. Compare amenities, safety, and total monthly cost (rent + food + utilities).',
      },
    ],
  },
  {
    slug: 'bangalore',
    name: 'Bangalore',
    title: 'Rooms, Flatmates, PGs & Maids in Bangalore | Triozy',
    description:
      'Find rooms for rent, PGs, flatmates, maids and local services in Bangalore with Triozy. Discover area-wise rentals and connect broker-free with verified profiles.',
    popularAreas: [
      { name: 'HSR Layout', blurb: 'Startup hubs, cafes, and strong flatmate demand.' },
      { name: 'Koramangala', blurb: 'Premium rentals, great food, and offices nearby.' },
      { name: 'Whitefield', blurb: 'Tech corridor with many societies and PGs.' },
      { name: 'Marathahalli', blurb: 'Convenient for office commuters and budget stays.' },
    ],
    faq: [
      {
        question: 'How can I find flatmates in Bangalore efficiently?',
        answer:
          'Shortlist by office commute, then match on budget and lifestyle (work hours, cleanliness, visitors). Confirm the total cost including maintenance and electricity before you commit.',
      },
      {
        question: 'Are maids and tiffin services available through Triozy?',
        answer:
          'Yes. You can discover local services and connect based on locality availability. Always confirm timings, pricing, and trial period details first.',
      },
    ],
  },
  {
    slug: 'pune',
    name: 'Pune',
    title: 'Rooms, Flatmates, PGs & Maids in Pune | Triozy',
    description:
      'Find rooms for rent, PGs, flatmates, maids and local services in Pune with Triozy. Move broker-free with verified discovery and local community signals.',
    popularAreas: [
      { name: 'Hinjewadi', blurb: 'Major IT hub with many PG and shared-flat options.' },
      { name: 'Viman Nagar', blurb: 'Popular with students and professionals; great connectivity.' },
      { name: 'Kothrud', blurb: 'Established residential area with stable rentals.' },
      { name: 'Wakad', blurb: 'Growing corridor with new societies and rentals.' },
    ],
    faq: [
      {
        question: 'Which areas are best for IT professionals in Pune?',
        answer:
          'Hinjewadi and Wakad are common picks due to shorter commutes to IT parks. If you want central access, consider Viman Nagar or Kothrud based on your office location.',
      },
      {
        question: 'How do I choose between PG and a shared flat in Pune?',
        answer:
          'PGs are simpler to start with (often includes food and services) while shared flats can be cheaper per person and offer more control. Compare total monthly cost and commute time before deciding.',
      },
    ],
  },
];

export function getCityBySlug(slug: string) {
  return allCities.find((c) => c.slug === slug);
}
