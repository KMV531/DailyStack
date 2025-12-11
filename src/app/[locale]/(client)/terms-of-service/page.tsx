import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Legal" });

  return {
    title: t("termsTitle"),
  };
}

export default function TermsPage() {
  const t = useTranslations("Legal");
  const lastUpdated = "2025-12-11";

  return (
    <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
          {t("termsTitle")}
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {t("lastUpdated")} {lastUpdated}
        </p>
      </header>

      {/* Content Section */}
      <section className="space-y-8 text-gray-700 dark:text-gray-300">
        {/* Intro */}
        <p className="text-lg leading-relaxed border-l-4 border-indigo-500 pl-4 bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
          {t("termsIntro")}
        </p>

        {/* Section 1: Use License */}
        <article className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 border-b pb-1">
            {t("termsUseHeading")}
          </h2>
          <p className="leading-relaxe text-gray-100">{t("termsUseText")}</p>
        </article>

        {/* Section 2: Disclaimer */}
        <article className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 border-b pb-1">
            {t("termsDisclaimerHeading")}
          </h2>
          <p className="leading-relaxed text-gray-100">
            {t("termsDisclaimerText")}
          </p>
        </article>

        {/* Contact Information */}
        <article className="space-y-4 pt-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 border-b pb-1">
            Contact
          </h2>
          <p className="text-gray-400">
            If you have any questions about these Terms, please contact us at
            <a
              href={`mailto:${t("contactEmail")}`}
              className="text-indigo-600 hover:text-indigo-500 ml-1 font-medium"
            >
              contact@dailystack.com
            </a>
            .
          </p>
        </article>
      </section>
    </div>
  );
}
