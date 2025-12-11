import { getArticles } from "@/sanity/helpers";
import { ArticlesPageClient } from "@/Sections/ArticlesSection/ArticlesPageClient";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ArticlesPage" });

  return {
    title: t("Metadata"),
  };
}

export default async function ArticlesPage() {
  const articles = await getArticles();

  return <ArticlesPageClient articles={articles} />;
}
