"use client";
import { cn } from "../../lib/utils/cn";
import React, { useEffect, useState } from "react";

export function GridBackgroundDemo({ text }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="relative -top-30 flex lg:flex-row flex-col h-screen w-full items-center justify-center bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex-col items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <img
        src="/images/drone-sketch.png"
        alt="outlined-drone-image"
        className="lg:absolute top-20 right-0 opacity-70 h-[45%]"
      ></img>
      <div className="relative z-20 text-center sm:max-w-[70vw] max-w-[95vw] bg-gradient-to-b from-neutral-500 to-black dark:from-neutral-200 dark:to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl flex flex-col">
        <p>{text}</p>
        <p className="py-10 text-2xl  text-red-700 dark:text-red-700/90 font-semibold">
          Imagine the future, Powered by Innovation
        </p>
        <div>
          <a
            className="inline-flex justify-center whitespace-nowrap rounded-lg px-3.5 py-2.5 text-lg font-bold text-slate-200 dark:text-white bg-gradient-to-r from-slate-800 to-slate-700 dark:from-red-500/90 dark:to-red-900  dark:hover:bg-slate-600 shadow focus:outline-none focus:ring focus:ring-slate-500/50 focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-500/50 relative before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white/.5)_50%,transparent_75%,transparent_100%)] dark:before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:[transition:background-position_0s_ease] hover:before:bg-[position:-100%_0,0_0] hover:before:duration-[1500ms]"
            href="#0"
          >
            Schedule a demo
          </a>
        </div>
      </div>
      <img
        src="/images/humonoid-robot.png"
        alt="humonoid-image"
        className={`lg:block hidden absolute left-0 top-30 xl:top-80  ${
          isLoaded ? "scale-100 xl:scale-180" : "scale-70"
        }   duration-[2000ms] opacity-40 `}
      ></img>

      <img
        src="/images/rover.png"
        alt="humonoid-image"
        className="lg:absolute -bottom-0 right-10  opacity-70 transition-transform scale-x-[-1] rotate-0 h-[40%]"
      ></img>
    </div>
  );
}
