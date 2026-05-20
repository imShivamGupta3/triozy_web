export type BlogSection = {
  heading: string;
  type?: "paragraph" | "list" | "cost-table";
  content: string[];
  items?: string[];
  tableData?: {
    category: string;
    low: string;
    high: string;
  }[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  heroImage?: string;
  keywords?: string | string[];
  sections: BlogSection[];
  faq?: {
    question: string;
    answer: string;
  }[];
  relatedArticles?: string[];
};

export type Blog = BlogPost;
