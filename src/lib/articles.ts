export type Article = {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  categories: Array<string>;
  excerpt: string;
  image: string;
  alt: string;
  body: Array<string>;
};
