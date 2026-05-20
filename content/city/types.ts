export type CityLandingArea = {
  name: string;
  /**
   * When present and a matching locality page exists, the area card links to `/${city}/${localitySlug}`.
   * Otherwise it renders as non-clickable text (no broken links).
   */
  localitySlug?: string;
  blurb?: string;
};

export type CityLandingFAQ = {
  question: string;
  answer: string;
};

export type CityLanding = {
  slug: string; // e.g. "indore"
  name: string; // e.g. "Indore"
  title: string; // full SEO title string
  description: string; // meta description + hero supporting copy
  popularAreas: CityLandingArea[];
  faq: CityLandingFAQ[];
};

