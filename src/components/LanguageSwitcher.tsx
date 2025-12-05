"use client";

import { useRouter, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { ChangeEvent } from "react";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;

    // Replace with same path and preserve scroll position
    router.replace(pathname, { locale: newLocale, scroll: false });
  };

  return (
    <select
      value={locale}
      onChange={handleChange}
      className="px-2 py-1 cursor-pointer bg-transparent"
      data-cursor="clickable"
    >
      {routing.locales.map((loc) => (
        <option key={loc} value={loc} className="text-black">
          {loc.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
