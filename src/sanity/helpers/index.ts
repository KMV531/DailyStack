import { sanityFetch } from "../lib/live";
import { ARTICLES_BY_SLUG, GET_ARTICLES } from "./query";

export const getArticles = async () => {
  try {
    const articles = await sanityFetch({
      query: GET_ARTICLES,
    });
    return articles?.data || [];
  } catch (error) {
    console.error("Error fetching articles:", error);
    return [];
  }
};

export const getArticleBySlug = async (slug: string, locale: string) => {
  try {
    const article = await sanityFetch({
      query: ARTICLES_BY_SLUG,
      params: { slug, locale },
    });
    return article?.data || null;
  } catch (error) {
    console.error(`Error fetching article with slug ${slug}:`, error);
    return null;
  }
};
