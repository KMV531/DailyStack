import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import Image from "next/image";

// Define the props interface
// This means:
// - It's a function
// - Takes one parameter named "query" of type string
// - Returns nothing (void)
interface HeroArticlesPageProps {
  onSearch: (query: string) => void;
}

export const HeroArticlesPage = ({ onSearch }: HeroArticlesPageProps) => {
  const t = useTranslations("ArticlesPage");

  return (
    <main className="container mx-auto mt-10">
      <section className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex flex-col items-start justify-start space-y-3">
          <Image src={"/Tag.png"} alt="Blog Tag" width={60} height={60} />
          <h1
            className="text-4xl font-bold mt-4 mb-2 max-w-[400px]"
            data-cursor="hover"
          >
            {t("title")}
          </h1>
        </div>
        <div>
          <Input
            type="text"
            placeholder="Search articles..."
            className="w-full max-w-md mt-4 text-white"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
      </section>
    </main>
  );
};
