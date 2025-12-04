import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslations } from "next-intl";
import Link from "next/link";

export const Header = () => {
  const t = useTranslations("Header");

  return (
    <header className="container mx-auto px-10 py-5">
      <div className="flex items-center justify-between">
        <Link href={"/"} data-cursor="clickable" className="shrink-0">
          <Image
            src="/Brand-Logo_2.png"
            alt="Logo"
            width={120}
            height={120}
            className="w-24 sm:w-32 md:w-36 lg:w-40"
          />
        </Link>
        <nav className="flex items-center justify-between space-x-8 cursor-pointer text-white">
          <Link href={"/"} data-cursor="clickable">
            {t("link1")}
          </Link>
          <Link href={"/articles"} data-cursor="clickable">
            {t("link2")}
          </Link>
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
};
