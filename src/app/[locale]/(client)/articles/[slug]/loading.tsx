import { useTranslations } from "next-intl";

const Loading = () => {
  const t = useTranslations("loader");

  return (
    <main className="my-20 flex items-center justify-center space-y-10">
      <h1 className="text-2xl font-semibold">{t("loadingArticle")}</h1>
    </main>
  );
};

export default Loading;
