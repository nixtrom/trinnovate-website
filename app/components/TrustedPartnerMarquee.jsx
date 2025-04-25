"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function TrustedPartnerMarquee() {
  return (
    <div className="h-[8rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={testimonials} direction="left" speed="fast" />
    </div>
  );
}

const testimonials = [
  {
    name: "RRU",
  },
  {
    name: "Birla Opus",
  },
  {
    name: "DRDO",
  },
  {
    name: "Rashtriya Rifles",
  },
  {
    name: "SEC Industries",
  },
];
