export type Lead = {
  name: string;
  phone: string;
  age?: string;
  city?: string;
  profession?: string;
  experience?: string;
  licenseCategory?: string;
  contactMethod?: "phone" | "telegram" | "whatsapp";
  comment?: string;
  sourcePage?: string;
};

export type Profession = {
  slug: string;
  title: string;
  category: string;
  icon: string;
  excerpt: string;
  description: string;
  tasks: string[];
  requirements: string[];
  conditions: string[];
  suitableFor: string;
  documents: string[];
  seoTitle: string;
  seoDescription: string;
  badge?: string;
};

export type Region = {
  slug: string;
  name: string;
  title: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  isMain?: boolean;
};

export type Article = {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  content: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  relatedProfessions?: string[];
  relatedArticles?: string[];
};

export type FAQItem = {
  question: string;
  answer: string;
  category: string;
};
