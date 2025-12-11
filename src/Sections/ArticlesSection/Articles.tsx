import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Article } from "@/lib/articles";

export const Articles = ({
  articles,
  query,
}: {
  articles: Article[];
  query: string;
}) => {
  const [activeSource, setActiveSource] = useState("All");

  // Use the source field as categories
  const sources = ["All", ...new Set(articles.map((a) => a.source))];

  // Filter by source instead of categories
  const filteredBySource =
    activeSource === "All"
      ? articles
      : articles.filter((article) => article.source === activeSource);

  // Further filter by search query
  const finalFiltered = filteredBySource.filter((article) =>
    String(article.title).toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="max-w-6xl mx-auto my-10 px-8 lg:px-0">
      {/* Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
        {sources.map((src) => (
          <button
            key={src}
            className={`px-4 py-2 rounded text-white ${
              activeSource === src ? "bg-blue-600" : "bg-gray-700"
            }`}
            onClick={() => setActiveSource(src)}
            data-cursor="clickable"
          >
            {src}
          </button>
        ))}
      </div>

      {/* Articles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {finalFiltered.map((article) => (
          <Link
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            key={article._id}
            className="rounded-xl border p-4 bg-card shadow-sm hover:shadow-md transition"
            data-cursor="clickable"
          >
            <Image
              width={300}
              height={300}
              src="/placeholder-image.jpeg"
              alt={article.title}
              className="rounded-md mb-4 h-40 w-full object-cover"
            />
            <h1 className="text-lg font-semibold mt-1 text-primary highlight">
              {article.title}
            </h1>

            <span className="text-sm text-primary font-medium">
              {article.source}
            </span>

            <p className="text-xs text-muted-foreground mt-3">
              {new Date(article.publishedAt).toLocaleDateString()}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
};
