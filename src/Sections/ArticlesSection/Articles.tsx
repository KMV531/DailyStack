"use client";

import { Article } from "@/lib/articles";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Articles = ({
  articles,
  query,
}: {
  articles: Article[];
  query: string;
}) => {
  const locale = useLocale();
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...new Set(articles.flatMap((a) => a.categories))];

  const filteredByCategory =
    activeCategory === "All"
      ? articles
      : articles.filter((article) =>
          article.categories.includes(activeCategory)
        );

  const finalFiltered = filteredByCategory.filter((article) =>
    String(article.title[locale as keyof typeof article.title])
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  return (
    <main className="max-w-6xl mx-auto my-10 px-8 lg:px-0">
      {/* Tabs */}
      <div className="flex items-center justify-center gap-4 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded text-white ${
              activeCategory === cat ? "bg-blue-600" : "bg-gray-700"
            }`}
            onClick={() => setActiveCategory(cat)}
            data-cursor="clickable"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Articles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {finalFiltered.map((article) => (
          <Link
            href={`/articles/${article.slug}`}
            key={article._id}
            data-cursor="clickable"
            className="rounded-xl border p-4 bg-card shadow-sm hover:shadow-md transition"
          >
            <Image
              width={300}
              height={300}
              src={article.image}
              alt={article.title}
              className="rounded-md mb-4 h-40 w-full object-cover"
            />

            <span className="text-sm text-primary font-medium">
              {article.categories}
            </span>

            <h2 className="text-lg font-semibold mt-1">
              {String(article.title[locale as keyof typeof article.title])}
            </h2>

            <p className="text-sm text-muted-foreground mt-2">
              {String(article.excerpt[locale as keyof typeof article.excerpt])}
            </p>

            <p className="text-xs text-muted-foreground mt-3">
              {new Date(article.publishedAt).toLocaleDateString()}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
};
