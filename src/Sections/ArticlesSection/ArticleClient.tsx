"use client";

import { PortableText } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { Article } from "@/lib/articles";

interface ArticleClientProps {
  article: Article; // ou type Article avec title/body traduit
  locale: string;
}

export const ArticleClient = ({ article, locale }: ArticleClientProps) => {
  return (
    <main className="max-w-6xl mx-auto my-10 text-white px-8 lg:px-0">
      <p className="my-6">
        <Link href={`/articles`} data-cursor="clickable">
          Blog
        </Link>{" "}
        {">"} {String(article.title[locale as keyof typeof article.title])}
      </p>

      {article?.image && (
        <Image
          width={500}
          height={500}
          src={urlFor(article.image).url()}
          alt={`${article.alt} - article image`}
          className="w-full h-90 object-cover rounded-xl mb-6"
        />
      )}

      <h1 className="text-4xl font-bold mb-4">
        {String(article.title[locale as keyof typeof article.title])}
      </h1>

      <div className="flex space-x-4 my-8">
        <p className="text-gray-400 text-sm mb-2">
          {new Date(article.publishedAt).toLocaleDateString()}
        </p>
        <p className="text-gray-400 text-sm mb-2">
          {article.categories.join(", ")}
        </p>
      </div>

      <PortableText value={article.body[locale as keyof typeof article.body]} />
    </main>
  );
};
