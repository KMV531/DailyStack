"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const AboutSection = () => {
  const t = useTranslations("About");

  // Create refs for each card
  const firstCardRef = useRef(null);
  const isFirstCardInView = useInView(firstCardRef, {
    once: true,
    amount: 0.3,
  });

  const secondCardRef = useRef(null);
  const isSecondCardInView = useInView(secondCardRef, {
    once: true,
    amount: 0.3,
  });

  const thirdCardRef = useRef(null);
  const isThirdCardInView = useInView(thirdCardRef, {
    once: true,
    amount: 0.3,
  });

  // Animation variants (same as your example)
  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <main className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
        {/* First Card */}
        <motion.div
          ref={firstCardRef}
          variants={cardVariants}
          initial="initial"
          animate={isFirstCardInView ? "animate" : "initial"}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col items-start justify-center bg-[#16181D] rounded-xl p-6 sm:p-8 gap-6 hover:bg-[#1e2229] transition-all duration-300"
        >
          <span className="text-blue-300 bg-blue-600/80 px-3 py-1.5 rounded-md text-sm font-medium">
            {t("badge1")}
          </span>
          <p className="text-lg sm:text-xl lg:text-2xl font-semibold leading-relaxed text-gray-100">
            {t("description1")}
          </p>
        </motion.div>

        {/* Second Card */}
        <motion.div
          ref={secondCardRef}
          variants={cardVariants}
          initial="initial"
          animate={isSecondCardInView ? "animate" : "initial"}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-start justify-center bg-[#16181D] rounded-xl p-6 sm:p-8 gap-6 hover:bg-[#1e2229] transition-all duration-300"
        >
          <span className="text-blue-300 bg-blue-600/80 px-3 py-1.5 rounded-md text-sm font-medium">
            {t("badge2")}
          </span>
          <p className="text-lg sm:text-xl lg:text-2xl font-semibold leading-relaxed text-gray-100">
            {t("description2")}
          </p>
        </motion.div>

        {/* Third Card (Full Width with Image) */}
        <motion.div
          ref={thirdCardRef}
          variants={cardVariants}
          initial="initial"
          animate={isThirdCardInView ? "animate" : "initial"}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="col-span-1 lg:col-span-2 flex flex-col lg:flex-row items-center justify-between bg-[#16181D] rounded-xl p-6 sm:p-8 gap-8 lg:gap-12 hover:bg-[#1e2229] transition-all duration-300"
        >
          {/* Text Content */}
          <div className="flex flex-col items-start justify-center flex-1 gap-6">
            <span className="text-blue-300 bg-blue-600/80 px-3 py-1.5 rounded-md text-sm font-medium">
              {t("badge3")}
            </span>
            <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold leading-relaxed lg:leading-loose text-gray-100">
              {t("description3")}
            </p>
          </div>

          {/* Image Container */}
          <div className="flex-1 w-full max-w-md lg:max-w-lg xl:max-w-xl">
            <div className="relative w-full h-64 sm:h-72 lg:h-80 xl:h-96 rounded-lg overflow-hidden">
              <Image
                src="/image.png"
                alt="About Illustration"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              />
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
};
