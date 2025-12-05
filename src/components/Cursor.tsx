"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const [isHovering, setIsHovering] = useState(false);

  const [hoverText, setHoverText] = useState("");

  // raw mouse position
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // instant dot (no delay)
  const dotX = mouseX;
  const dotY = mouseY;

  // trailing ring (delay)
  const springConfig = { damping: 20, stiffness: 150, mass: 0.4 };
  const ringX = useSpring(mouseX, springConfig);
  const ringY = useSpring(mouseY, springConfig);

  // track mouse
  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  // detect hover on elements marked with data-cursor="hover"
  useEffect(() => {
    const over = (e: Event) => {
      const el = e.target as HTMLElement;

      if (el.closest('[data-cursor="clickable"]')) {
        setIsHovering(true);
        setHoverText("Click me");
      } else if (el.closest('[data-cursor="hover"]')) {
        setIsHovering(true);
        setHoverText("");
      }
    };

    const out = (e: Event) => {
      const el = e.target as HTMLElement;
      if (
        el.closest('[data-cursor="clickable"]') ||
        el.closest('[data-cursor="hover"]')
      ) {
        setIsHovering(false);
        setHoverText("");
      }
    };

    document.addEventListener("pointerover", over);
    document.addEventListener("pointerout", out);

    return () => {
      document.removeEventListener("pointerover", over);
      document.removeEventListener("pointerout", out);
    };
  }, []);

  return (
    <>
      {/* INNER DOT — instant, small */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-9999"
        style={{
          translateX: dotX,
          translateY: dotY,
        }}
      >
        <div className="w-2 h-2 rounded-full bg-white" />
      </motion.div>

      {/* OUTER RING — delayed, fills on hover */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-9998"
        style={{
          translateX: ringX,
          translateY: ringY,
        }}
      >
        <motion.div
          className="relative flex items-center justify-center rounded-full border-2 border-white"
          animate={{
            width: isHovering ? 70 : 50,
            height: isHovering ? 70 : 50,
            backgroundColor: isHovering ? "#fff" : "rgba(0,0,0,0)",
            borderColor: "#fff",
            transition: {
              type: "spring",
              stiffness: 200,
              damping: 20,
            },
          }}
        >
          {hoverText && (
            <motion.span
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="
        absolute top-1/2 left-1/2
        -translate-x-1/2 -translate-y-1/2
        text-black text-[10px] font-bold
        pointer-events-none select-none text-center
      "
            >
              {hoverText}
            </motion.span>
          )}
        </motion.div>
      </motion.div>
    </>
  );
}
