export type Locality = {
  slug: string;
  city: string;
  title: string;
  description?: string;
  averageRent: string;
  nearbyOffices: string[];
  nearbyColleges: string[];
  faq?: {
    question: string;
    answer: string;
  }[];
};

export type LocalityData = Locality; // Alias
