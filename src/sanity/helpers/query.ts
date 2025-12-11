import { defineQuery } from "next-sanity";

export const GET_ARTICLES = defineQuery(
  `
     *[_type == "post"] | order(publishedAt desc){
      _id,
      title,
      "url": url,
      source,
      publishedAt,
      lang
    }
    `
);
