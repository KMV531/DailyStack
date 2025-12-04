"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const ActionSection = () => {
  const t = useTranslations("Action");

  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });
  const titleVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  const buttonRef = useRef(null);
  const isButtonInView = useInView(buttonRef, { once: true });
  const buttonVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <main
      className="h-[400px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: "url('/background-icon.png')" }}
    >
      <motion.section className="flex flex-col items-center justify-center space-y-8">
        <motion.h1
          className="text-3xl lg:text-4xl font-semibold max-w-[700px] text-center"
          data-cursor="hover"
          variants={titleVariants}
          initial="initial"
          animate={isTitleInView ? "animate" : "initial"}
          transition={{ duration: 0.8, delay: 0.5 }}
          ref={titleRef}
        >
          {t("title")}
        </motion.h1>
        <motion.div
          variants={buttonVariants}
          initial="initial"
          animate={isButtonInView ? "animate" : "initial"}
          transition={{ duration: 0.8, delay: 0.7 }}
          ref={buttonRef}
        >
          <Link
            href="/articles"
            data-cursor="clickable"
            className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition"
          >
            {t("button")}
          </Link>
        </motion.div>
      </motion.section>
    </main>
  );
};
