import { LocalityData } from './types';

export const ligColony: LocalityData = {
  slug: 'lig-colony',
  city: 'indore',
  title: 'LIG Colony',
  description:
    'LIG Colony is a budget-friendly Indore residential pocket that is often shortlisted by renters who want central access without premium pricing. It is a practical option if you want a straightforward locality with common daily needs nearby.',
  averageRent: {
    pg: '₹5k–9k',
    room: '₹6k–14k',
    flat: '₹6k–18k',
  },
  nearbyOffices: ['Central Indore business areas (short commute in many routes)'],
  nearbyColleges: ['Local colleges and coaching hubs (route dependent)'],
  transportation: ['shared autos', 'city buses', 'cab services'],
  whoShouldLive: ['Budget renters', 'Students', 'Young professionals'],
  relatedAreas: ['geeta-bhawan', 'bhawarkuan', 'palasia'],
  faq: [
    {
      question: 'Is LIG Colony a good budget area to rent in Indore?',
      answer:
        'Yes. LIG Colony is often considered a value option because it can provide central access while staying more budget friendly than premium pockets.',
    },
    {
      question: 'What should I check before finalizing a room in LIG Colony?',
      answer:
        'Check lane lighting, water supply, and parking. If the building is older, confirm maintenance condition and power backup availability.',
    },
  ],
};

