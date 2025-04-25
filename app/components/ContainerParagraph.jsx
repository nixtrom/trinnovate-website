"use client";
import { ContainerTextFlip } from "./ui/container-text-flip";
import { motion } from "motion/react";
import { cn } from "../../lib/utils/cn";

export function ContainerTextFlipDemo() {
  const words = ["software", "electronics", "mechanical"];
  return (
    <motion.h1
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      className={cn(
        "relative mb-6  mt-0 md:mt-40 text-center text-4xl leading-normal font-bold tracking-normal text-zinc-700 md:text-5xl dark:text-zinc-100"
      )}
      layout
    >
      <div className="inline-block">
        Building intelligent systems through <ContainerTextFlip words={words} />{" "}
        solutions.
        {/* <Blips /> */}
      </div>
    </motion.h1>
  );
}
