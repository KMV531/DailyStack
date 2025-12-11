import Link from "next/link";
import Image from "next/image";
import { useState, useMemo } from "react";
import { Article } from "@/lib/articles";
import { ArticlesPaginationComponent } from "@/components/PaginationComponent";

// -------------------------------------------------------------------
// 1. DEFINE THE SOURCE-TO-IMAGE MAP (OUTSIDE THE COMPONENT)
// -------------------------------------------------------------------

// IMPORTANT: Ensure the keys (e.g., "Tech News") exactly match the values
// in your article.source property.
const SOURCE_IMAGE_MAP: { [key: string]: string } = {
  // Replace these with the actual image paths for your sources
  "Next.js Official": "/nextjs_image.jpeg",
  "React Official": "/react_image.png",
  "TypeScript Dev Blog": "/typescript_image.png",
  "Smashing Magazine (Design/UX)": "/Smashing_Magazine_(Design-UX)_image.jpg",
  "DEV Community": "/DEV-Community_image.png",
  "Hacker News (Trends)": "/Hacker-News_(Trends)_image.webp",
  "Anime News Network (ANN)": "/animes_image.jpg",
  // Add all other sources here
};

const DEFAULT_IMAGE_SRC = "/placeholder-image.jpeg";

// -------------------------------------------------------------------
// 2. ARTICLES COMPONENT
// -------------------------------------------------------------------

export const Articles = ({
  articles,
  query,
}: {
  articles: Article[];
  query: string;
}) => {
  const [activeSource, setActiveSource] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  // ... (Filtering and Pagination Calculations remain the same)

  const sources = ["All", ...new Set(articles.map((a) => a.source))];
  // ... (filteredBySource, finalFiltered, totalPages, paginatedArticles definitions) ...

  const filteredBySource =
    activeSource === "All"
      ? articles
      : articles.filter((article) => article.source === activeSource);

  const finalFiltered = filteredBySource.filter((article) =>
    String(article.title).toLowerCase().includes(query.toLowerCase())
  );

  const totalPages = useMemo(() => {
    return Math.ceil(finalFiltered.length / articlesPerPage);
  }, [finalFiltered.length]);

  const paginatedArticles = useMemo(() => {
    const startIndex = (currentPage - 1) * articlesPerPage;
    const endIndex = startIndex + articlesPerPage;
    return finalFiltered.slice(startIndex, endIndex);
  }, [finalFiltered, currentPage, articlesPerPage]);

  // Handle page reset if filters change drastically
  if (currentPage > totalPages && totalPages > 0) {
    setCurrentPage(totalPages);
  }
  if (currentPage > 1 && finalFiltered.length === 0) {
    setCurrentPage(1);
  }

  // Not Found Condition (remains the same)
  if (query && finalFiltered.length === 0) {
    return (
      <div className="my-32 flex items-center justify-center">
        <h2 className="text-4xl font-bold">Not Found {":("}</h2>
      </div>
    );
  }

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
            onClick={() => {
              setActiveSource(src);
              setCurrentPage(1); // Reset to page 1 on filter change
            }}
            data-cursor="clickable"
          >
            {src}
          </button>
        ))}
      </div>

      {/* Articles Grid (Mapping over paginatedArticles) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {paginatedArticles.map((article) => {
          // 3. GET THE DYNAMIC IMAGE SOURCE HERE
          const imageSrc =
            SOURCE_IMAGE_MAP[article.source] || DEFAULT_IMAGE_SRC;

          return (
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
                // 4. USE THE DYNAMIC SOURCE
                src={imageSrc}
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
          );
        })}
      </div>

      {/* Pagination Component (Cleanly imported and used!) */}
      {totalPages > 1 && (
        <div className="mt-10 flex justify-center">
          <ArticlesPaginationComponent
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      )}
    </main>
  );
};
