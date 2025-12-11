import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  const t = useTranslations("Footer");
  return (
    <footer className="bg-[#16181D] py-8 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4 max-w-6xl mx-auto">
        {/* Logo */}
        <Link href={"/"} data-cursor="clickable" className="shrink-0">
          <Image
            src="/Brand-Logo_2.png"
            alt="Logo"
            width={120}
            height={120}
            className="w-24 sm:w-32 md:w-36 lg:w-40"
          />
        </Link>

        {/* Links Container */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12 text-[#7EA4D7] text-sm sm:text-base">
          <Link
            href={"/terms-of-service"}
            className="hover:text-white transition-colors duration-300 cursor-pointer"
            data-cursor="clickable"
          >
            {t("items.terms")}
          </Link>
          <Link
            href={"/privacy-policy"}
            className="hover:text-white transition-colors duration-300 cursor-pointer"
            data-cursor="clickable"
          >
            {t("items.privacy")}
          </Link>
        </div>
      </div>
    </footer>
  );
};
