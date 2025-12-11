import { sanityFetch } from "../lib/live";
import { GET_ARTICLES } from "./query";

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
