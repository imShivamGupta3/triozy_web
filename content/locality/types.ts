export type Locality = {
  slug: string;
  city: string;
  title: string;
  description?: string;
  averageRent: {
    pg: string;
    room: string;
    flat: string;
  };
  nearbyOffices: string[];
  nearbyColleges: string[];
  transportation?: string[];
  whoShouldLive?: string[];
  relatedAreas?: string[];
  faq?: {
    question: string;
    answer: string;
  }[];
};

export type LocalityData = Locality; // Alias
