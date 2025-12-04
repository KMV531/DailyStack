"use client";

import { useState } from "react";
import { Articles } from "./Articles";
import { HeroArticlesPage } from "./Hero";
import { Article } from "@/lib/articles";

export function ArticlesPageClient({ articles }: { articles: Article[] }) {
  const [query, setQuery] = useState("");

  return (
    <main>
      <HeroArticlesPage onSearch={setQuery} />
      <Articles articles={articles} query={query} />
    </main>
  );
}
