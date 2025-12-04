import { getArticles } from "@/sanity/helpers";
import { ArticlesPageClient } from "@/Sections/ArticlesSection/ArticlesPageClient";

export default async function ArticlesPage() {
  const articles = await getArticles();

  return <ArticlesPageClient articles={articles} />;
}
