"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const MethodsSection = () => {
  const t = useTranslations("Methods");

  // Refs for title animation
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.5 });

  // Refs for each card animation
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

  // Animation variants
  const fadeUpVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  const fadeLeftVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
  };

  const fadeRightVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
  };

  return (
    <main
      className="min-h-screen lg:min-h-[600px] bg-cover bg-center bg-no-repeat flex items-center justify-center py-12"
      style={{
        backgroundImage: "url('/background2.png')",
      }}
    >
      <section className="inset-0 px-4 sm:px-6 lg:px-8 flex items-center justify-center flex-col space-y-12 w-full max-w-7xl">
        {/* Title */}
        <motion.div
          ref={titleRef}
          variants={fadeUpVariants}
          initial="initial"
          animate={isTitleInView ? "animate" : "initial"}
          transition={{ duration: 0.6 }}
          className="w-full flex justify-center"
        >
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold max-w-4xl text-center leading-tight"
            data-cursor="hover"
          >
            {t("title")}
          </motion.h1>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 w-full max-w-6xl mx-auto">
          {/* First Card */}
          <motion.div
            ref={firstCardRef}
            variants={fadeLeftVariants}
            initial="initial"
            animate={isFirstCardInView ? "animate" : "initial"}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-start justify-center bg-[#0D284C] rounded-xl p-6 sm:p-8 gap-6 hover:bg-[#0f2f5a] transition-all duration-300 hover:scale-[1.02] h-full"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isFirstCardInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <Image
                src="/icon-1.png"
                alt="Paint Icon"
                width={50}
                height={50}
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isFirstCardInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl lg:text-2xl font-semibold leading-relaxed text-gray-100"
            >
              {t("step1.title")}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isFirstCardInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-sm sm:text-base lg:text-lg font-medium leading-relaxed text-gray-300"
            >
              {t("step1.description")}
            </motion.p>
          </motion.div>

          {/* Second Card */}
          <motion.div
            ref={secondCardRef}
            variants={fadeUpVariants}
            initial="initial"
            animate={isSecondCardInView ? "animate" : "initial"}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-start justify-center bg-[#0E474C] rounded-xl p-6 sm:p-8 gap-6 hover:bg-[#0f5258] transition-all duration-300 hover:scale-[1.02] h-full"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isSecondCardInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <Image
                src="/icon-2.png"
                alt="House Icon"
                width={50}
                height={50}
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isSecondCardInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl lg:text-2xl font-semibold leading-relaxed text-gray-100"
            >
              {t("step2.title")}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isSecondCardInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-sm sm:text-base lg:text-lg font-medium leading-relaxed text-gray-300"
            >
              {t("step2.description")}
            </motion.p>
          </motion.div>

          {/* Third Card */}
          <motion.div
            ref={thirdCardRef}
            variants={fadeRightVariants}
            initial="initial"
            animate={isThirdCardInView ? "animate" : "initial"}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-1 flex flex-col items-start justify-center bg-[#0D284C] rounded-xl p-6 sm:p-8 gap-6 hover:bg-[#0f2f5a] transition-all duration-300 hover:scale-[1.02] h-full"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isThirdCardInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <Image
                src="/icon-3.png"
                alt="Heart Icon"
                width={50}
                height={50}
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isThirdCardInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl lg:text-2xl font-semibold leading-relaxed text-gray-100"
            >
              {t("step3.title")}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isThirdCardInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-sm sm:text-base lg:text-lg font-medium leading-relaxed text-gray-300"
            >
              {t("step3.description")}
            </motion.p>
          </motion.div>
        </div>
      </section>
    </main>
  );
};
