import { LocalityData } from './types';

export const superCorridor: LocalityData = {
  slug: "super-corridor",
  city: "indore",
  title: "Super Corridor",
  description: "Super Corridor is a newer-growth zone in Indore with modern societies near IT campuses. It can be a strong choice if your work or college is nearby and you prefer planned society living with newer infrastructure.",
  averageRent: {
    pg: "₹6k–12k",
    room: "₹8k–16k",
    flat: "₹8k–22k"
  },
  nearbyOffices: ["TCS SEZ", "Infosys SEZ", "Symbiosis"],
  nearbyColleges: ["Symbiosis University"],
  transportation: ["cab services", "shared autos (pocket-dependent)", "city buses (limited pockets)"],
  whoShouldLive: ["IT employees", "Working professionals", "Families"],
  relatedAreas: ["vijay-nagar", "scheme-54", "palasia"],
  faq: [
    {
      question: "Is Super Corridor good for IT employees?",
      answer: "Yes. It is often convenient for people working near nearby campuses because commute times can be shorter from the right pockets."
    },
    {
      question: "What should I check before renting in Super Corridor?",
      answer: "Confirm cab/auto availability, network strength, and daily-need convenience around the exact society. Pockets can vary a lot."
    }
  ]
};
