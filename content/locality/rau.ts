import { LocalityData } from './types';

export const rau: LocalityData = {
  slug: 'rau',
  city: 'indore',
  title: 'Rau',
  description:
    'Rau is a practical Indore rental zone known for educational institutes, highway connectivity, and more budget-friendly options compared to premium central pockets. It works well if you want space and value, and you do not mind a slightly longer city commute.',
  averageRent: {
    pg: '₹5k–10k',
    room: '₹6k–12k',
    flat: '₹8k–18k',
  },
  nearbyOffices: ['Pithampur industrial belt (commute dependent)', 'AB Road business corridors'],
  nearbyColleges: ['Medicaps University', 'Local institutes around Rau'],
  transportation: ['city buses (route dependent)', 'shared autos', 'cab services'],
  whoShouldLive: ['Students', 'Industrial workers', 'Budget renters'],
  relatedAreas: ['super-corridor', 'vijay-nagar', 'bhawarkuan'],
  faq: [
    {
      question: 'Is Rau good for students?',
      answer:
        'Yes. Rau is popular with students because it can offer better value rentals, and some institutes are nearby depending on your campus.',
    },
    {
      question: 'Is daily commute to central Indore easy from Rau?',
      answer:
        'It depends on your exact route and time. Check peak-hour travel time before finalizing, and ensure your lane has reliable pickup points.',
    },
  ],
};

