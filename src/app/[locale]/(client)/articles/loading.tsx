import { useTranslations } from "next-intl";

const Loading = () => {
  const t = useTranslations("loader");

  return (
    <main className="my-52 flex items-center justify-center space-y-10">
      <h1 className="text-center font-bold text-4xl">{t("loadingArticles")}</h1>
    </main>
  );
};

export default Loading;
