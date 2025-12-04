import { getArticleBySlug } from "@/sanity/helpers";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

const SingleArticlePage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  // handle 404 if article not found
  if (!article) {
    return (
      <main className="max-w-6xl mx-auto my-10">
        <h1 className="text-2xl font-semibold">Article not found</h1>
      </main>
    );
  }

  return (
    <main className="max-w-6xl mx-auto my-10 text-white px-8 lg:px-0">
      <p className="my-6">
        <Link href={"/articles"} data-cursor="clickable">
          Blog
        </Link>{" "}
        {">"} {article.title}
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

      <h1 className="text-4xl font-bold mb-4">{article.title}</h1>

      <div className="flex space-x-4 my-8">
        <p className="text-gray-400 text-sm mb-2">
          {new Date(article.publishedAt).toLocaleDateString()}
        </p>
        <p className="text-gray-400 text-sm mb-2">{article.categories}</p>
      </div>
      <PortableText value={article.body} />
    </main>
  );
};

export default SingleArticlePage;
