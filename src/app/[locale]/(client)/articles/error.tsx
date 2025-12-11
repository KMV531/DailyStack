"use client";

import { useTranslations } from "next-intl";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  const t = useTranslations("error");

  return (
    <main className="flex h-full flex-col items-center justify-center my-32">
      <h1 className="text-center font-bold text-4xl">{t("message")}</h1>
      <button
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        onClick={
          // Attempt to recover by trying to re-render the invoices route
          () => reset()
        }
        data-cursor="clickable"
      >
        {t("retry")}
      </button>
    </main>
  );
}
