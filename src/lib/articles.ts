export type Article = {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  categories: string | string[];
  excerpt: string;
  image: string;
  content: string;
};
