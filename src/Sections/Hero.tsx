"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export const HeroSection = () => {
  const t = useTranslations("Hero");

  return (
    <main className="container mx-auto py-5 px-8 mt-10 lg:mt-0">
      <div className="flex flex-col space-y-8 lg:flex-row items-center justify-center lg:space-x-8">
        <div className="flex flex-col space-y-8 items-center justify-center lg:items-start lg:justify-start max-w-[700px] text-center lg:text-left">
          <motion.h1
            className="text-5xl lg:text-6xl leading-tight font-bold max-w-[500px] lg:max-w-none"
            data-cursor="hover"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            {t("welcome")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <span className="text-sm md:text-lg lg:text-xl text-gray-300">
              {t("description1")}
            </span>
          </motion.p>
          <motion.p
            className="inline-flex space-x-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
          >
            <span className="text-sm md:text-lg lg:text-xl text-gray-300">
              {t("description2")}
            </span>
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <Link
              data-cursor="clickable"
              href="/articles"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-medium hover:bg-blue-700 transition"
            >
              {t("action")}
            </Link>
          </motion.div>
        </div>
        <motion.div
          className="hidden lg:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <Image
            src="/background.png"
            alt="Hero Image"
            width={600}
            height={600}
            className="h-auto object-cover"
          />
        </motion.div>
      </div>
    </main>
  );
};
