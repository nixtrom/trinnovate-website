"use client";
import React, { useState, useEffect, useId } from "react";
//import "@/app/styles/prism-theme.css";

import { motion } from "motion/react";
import { cn } from "../../../lib/utils/cn";

export function ContainerTextFlip({
  words = ["Solution", "Tech", "Concept", "Product"],
  interval = 2000,
  className,
  textClassName,
  animationDuration = 700,
}) {
  const id = useId();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [width, setWidth] = useState(100);
  const textRef = React.useRef(null);

  const updateWidthForWord = () => {
    if (textRef.current) {
      // Add some padding to the text width (30px on each side)
      // @ts-ignore
      const textWidth = textRef.current.scrollWidth + 30;
      setWidth(textWidth);
    }
  };

  useEffect(() => {
    // Update width whenever the word changes
    updateWidthForWord();
  }, [currentWordIndex]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      // Width will be updated in the effect that depends on currentWordIndex
    }, interval);

    return () => clearInterval(intervalId);
  }, [words, interval]);

  return (
    <motion.div
      layout
      layoutId={`words-here-${id}`}
      animate={{ width }}
      transition={{ duration: animationDuration / 2000 }}
      className={cn(
        "relative inline-block rounded-lg pt-2 pb-3 text-center text-4xl font-bold text-black md:text-5xl dark:text-white",
        "[background:linear-gradient(to_bottom,var(--color-gray-100),var(--color-gray-200))]",
        "shadow-[inset_0_-1px_var(--color-gray-300),inset_0_0_0_1px_var(--color-gray-300),_0_4px_8px_var(--color-gray-300)]",
        "dark:[background:linear-gradient(to_bottom,var(--color-neutral-700),var(--color-neutral-800))]",
        "dark:shadow-md dark:shadow-red-300/30",
        className
      )}
      key={words[currentWordIndex]}
    >
      <motion.div
        transition={{
          duration: animationDuration / 1000,
          ease: "easeInOut",
        }}
        className={cn("inline-block", textClassName)}
        ref={textRef}
        layoutId={`word-div-${words[currentWordIndex]}-${id}`}
      >
        <motion.div className="inline-block">
          {words[currentWordIndex].split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{
                opacity: 0,
                filter: "blur(10px)",
              }}
              animate={{
                opacity: 1,
                filter: "blur(0px)",
              }}
              transition={{
                delay: index * 0.02,
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
