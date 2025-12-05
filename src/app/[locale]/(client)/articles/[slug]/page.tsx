import { getArticleBySlug } from "@/sanity/helpers";
import { ArticleClient } from "@/Sections/ArticlesSection/ArticleClient";

const SingleArticlePage = async ({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) => {
  const { slug, locale } = await params;

  const article = await getArticleBySlug(slug, locale);

  if (!article) {
    return (
      <main className="my-20 flex items-center justify-center space-y-10">
        <h1 className="text-2xl font-semibold">Article not found</h1>
      </main>
    );
  }

  // Passe les données au Client Component
  return <ArticleClient article={article} locale={locale} />;
};

export default SingleArticlePage;
