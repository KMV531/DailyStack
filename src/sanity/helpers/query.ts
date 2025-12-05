import { defineQuery } from "next-sanity";

export const GET_ARTICLES = defineQuery(
  `
     *[_type == "post"] | order(publishedAt desc){
      _id,
      title,
      "slug": slug.current,
      "image": mainImage.asset->url,
      "alt": mainImage.alt,
      "categories": categories[]->title,
      publishedAt,
      excerpt,
      body,
      lang
    }
    `
);

export const ARTICLES_BY_SLUG = defineQuery(
  `
    *[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    "image": mainImage.asset->url,
    "alt": mainImage.alt,
    "categories": categories[]->title,
    publishedAt,
    excerpt,
    body,
    lang
  }
  `
);
