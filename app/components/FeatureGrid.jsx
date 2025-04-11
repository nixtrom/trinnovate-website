"use client";

import React from "react";
import { cn } from "../../lib/utils/cn";
import Image from "next/image";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import {
  IconAntennaBars5,
  IconBrandYoutubeFilled,
  IconCaretDownFilled,
  IconCaretLeftFilled,
  IconCaretRightFilled,
  IconCaretUpFilled,
  IconDrone,
  IconFocus2,
  IconFocusCentered,
  IconNetwork,
  IconPlaneArrival,
  IconPlaneDeparture,
  IconPower,
  IconSatellite,
  IconScreenShare,
  IconZodiacGemini,
} from "@tabler/icons-react";
import Link from "next/link";
import { Compare } from "./compare";
import { CardDemo } from "./AnimatedCard";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Intelligent Robotics Solutions for your need",
      description:
        "Seamless data integration for real-time decision-making and problem solving",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-2 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Robotics for Every Terrain – Land, Water & Air",
      description:
        "Capture stunning photos effortlessly using our advanced AI technology.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
      title: "Smart Dashboard & Control Systems",
      description:
        "Capture stunning photos effortlessly using our advanced AI technology.",
      skeleton: <SkeletonOneLong />,
      className:
        "lg:border-l border-b col-span-1 row-span-2 lg:col-span-2  dark:border-neutral-800",
    },
    {
      title: "AI-Powered Automation & Decision-Making",
      description:
        "Whether its you or Tyler Durden, you can get to know about our product on YouTube",
      skeleton: <SkeletonFour />,
      className:
        "col-span-1 lg:col-span-2 lg:border-r  border-b dark:border-neutral-800",
    },
    {
      title: "Real-Time Analytics & Smart Insights",
      description:
        "Whether its you or Tyler Durden, you can get to know about our product on YouTube",
      skeleton: <SkeletonThree />,
      className: "col-span-1 lg:col-span-2 border-b lg:border-none",
    },
    // {
    //   title: "Capture pictures with AI",
    //   description:
    //     "Capture stunning photos effortlessly using our advanced AI technology.",
    //   skeleton: <SkeletonOne />,
    //   className: "border-l  col-span-1 lg:col-span-2 dark:border-neutral-800",
    // },
    {
      title: "Advanced Computer Vision & AI Analytics",
      description:
        "Whether its you or Tyler Durden, you can get to know about our product on YouTube",
      skeleton: <SkeletonSix />,
      className:
        "col-span-1 lg:col-span-3 border-b lg:border-r lg:border-t lg:border-b-0  dark:border-neutral-800",
    },
    {
      title: "Seamless Multi-Platform Integration",
      description:
        "With our blazing fast, state of the art, cutting edge, we are so back cloud servies (read AWS)",
      skeleton: <SkeletonFive />,
      className: "col-span-1 lg:col-span-3 lg:border-t dark:border-neutral-800",
    },
  ];
  return (
    <div className="relative z-20  lg:py-20 max-w-7xl mx-auto">
      <div className="relative ">
        <div className="grid grid-cols-1 lg:grid-cols-6">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className=" h-full w-full py-6">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({ children, className }) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }) => {
  return (
    <p className=" max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug font-bold">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base  max-w-4xl text-left mx-auto",
        "text-neutral-500 text-center font-normal dark:text-neutral-300",
        "text-left max-w-sm mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <div className="flex h-[30vh] w-full bg-neutral-800 border border-neutral-700 rounded-2xl p-4">
      <div className="h-full w-full border rounded-2xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800 ">
        <Compare
          firstImage="https://assets.aceternity.com/code-problem.png"
          secondImage="/images/drone-compare-feature.jpeg"
          firstImageClassName="object-cover object-left-top"
          secondImageClassname="object-cover object-center"
          className="h-full w-full md:h-full md:w-full"
          slideMode="hover"
        />
      </div>
    </div>
    // <div className="relative flex py-8 px-2 gap-10 h-full bg-red-100">
    //   <div className="w-full  p-5  mx-auto bg-green-00 dark:bg-neutral-900 shadow-2xl group h-full ">
    //     <div className="flex flex-1 w-full h-full flex-col space-y-2  ">
    //       <Image
    //         src="/images/smart-robotics.gif"
    //         alt="header"
    //         width={100}
    //         priority={true}
    //         height={100}
    //         className="h-[90%] w-full aspect-square object-cover rounded-lg"
    //       />
    //     </div>
    //   </div>
    //   <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
    //   <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
    // </div>
  );
};

export const SkeletonOneLong = () => {
  return (
    <>
      <div className="absolute z-10 bottom-0 w-full h-50 bg-gradient-to-t from-black to-transparent"></div>
      <div className=" h-full w-full bg-[#212121] border border-neutral-700 rounded-2xl p-4">
        <div className="h-full w-full bg-neutral-900 rounded-xl p-4 flex flex-col items-center gap-10">
          <div className="w-20 h-3 rounded-full bg-black"></div>

          <div className="w-full flex flex-row justify-between gap-6">
            <div className="flex flex-col gap-6">
              <div className="bg-gradient-to-br from-neutral-600 to-neutral-900 text-white w-12 h-12 rounded-xl flex items-center justify-center border border-neutral-500/50 shadow-sm shadow-neutral-900">
                <IconPower className="text-neutral-300" />
              </div>
              <div className="bg-gradient-to-br from-neutral-600 to-neutral-900 text-white w-12 h-12 rounded-xl flex items-center justify-center border border-neutral-500/50 shadow-sm shadow-neutral-900">
                <IconFocusCentered className="text-neutral-300" />
              </div>
            </div>

            <div className="w-full h-40 bg-red-400 rounded-md">
              <img
                src="/images/drone-inelli-tracking-feature.jpg"
                className="h-full object-cover rounded-md"
              ></img>
            </div>
          </div>

          <div className="w-full flex flex-row justify-between gap-1 bg-transparent">
            <div className="flex flex-col items-center gap-6 flex-2 bg-neutral-800 py-4 border border-neutral-500/20 rounded-xl">
              <p className="font-semibold text-neutral-500">NAVIGATION</p>
              <div className="flex items-center justify-center ">
                <div className="grid grid-cols-3 gap-2">
                  <div></div>
                  <div className="bg-gradient-to-br from-neutral-600 to-neutral-900 text-white w-12 h-12 rounded-xl flex items-center justify-center border border-neutral-500/50 shadow-sm shadow-neutral-900">
                    <IconCaretUpFilled className="text-neutral-300" />
                  </div>
                  <div></div>

                  <div className="bg-gradient-to-br from-neutral-600 to-neutral-900 text-white w-12 h-12 rounded-xl flex items-center justify-center border border-neutral-500/50">
                    <IconCaretLeftFilled className="text-neutral-300" />
                  </div>

                  <div className="bg-gradient-to-br from-neutral-600 to-neutral-900 text-white w-12 h-12 rounded-xl flex items-center justify-center border border-neutral-500/50">
                    <IconFocus2 className="text-neutral-300" />
                  </div>

                  <div className="bg-gradient-to-br from-neutral-600 to-neutral-900 text-white w-12 h-12 rounded-xl flex items-center justify-center border border-neutral-500/50">
                    <IconCaretRightFilled className="text-neutral-300" />
                  </div>

                  <div></div>
                  <div className="bg-gradient-to-br from-neutral-600 to-neutral-900 text-white w-12 h-12 rounded-xl flex items-center justify-center border border-neutral-500/50">
                    <IconCaretDownFilled className="text-neutral-300" />
                  </div>
                  <div></div>
                </div>
              </div>
              <div className="w-full px-4 flex gap-2">
                <div className="bg-gradient-to-br from-neutral-600 to-neutral-900 text-white w-[50%]  rounded-xl flex flex-col items-center justify-center border border-neutral-500/50 shadow-sm shadow-neutral-900 py-2">
                  <IconPlaneDeparture className="text-neutral-300" />
                  <p className="font-semibold text-neutral-500 mt-2">TAKEOFF</p>
                </div>

                <div className="bg-gradient-to-br from-neutral-600 to-neutral-900 text-white w-[50%]  rounded-xl flex flex-col items-center justify-center border border-neutral-500/50 shadow-sm shadow-neutral-900 py-2">
                  <IconPlaneArrival className="text-neutral-300" />
                  <p className="font-semibold text-neutral-500 mt-2">LAND</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-center items-center gap-10">
            <div className="flex items-center justify-center  bg-transparent">
              <div
                className="relative w-20 h-20 rounded-full bg-gray-800 shadow-inner"
                style={{
                  background: "conic-gradient(#3b82f6 0% 20%, #27272a 20% 80%)",
                }}
              >
                <div className="absolute inset-1 rounded-full bg-gray-900 flex flex-col items-center justify-center">
                  <span className="text-sm text-gray-400">Altitude</span>
                  <span className="text-lg font-bold text-white">
                    120 <span className="text-gray-400 text-lg">m</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center  bg-transparent">
              <div
                className="relative w-20 h-20 rounded-full bg-gray-800 shadow-inner"
                style={{
                  background: "conic-gradient(#3b82f6 0% 20%, #27272a 40% 80%)",
                }}
              >
                <div className="absolute inset-1 rounded-full bg-gray-900 flex flex-col items-center justify-center">
                  <span className="text-sm text-gray-400">Speed</span>
                  <span className="text-lg font-bold text-white">
                    5 <span className="text-gray-400 text-lg">m/s</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className=" absolute bottom-4 flex flex-row justify-center items-center gap-10">
            <div className="bg-gradient-to-br from-neutral-600 to-neutral-900 text-white px-6  rounded-xl flex flex-col items-center justify-center border border-neutral-500/50 shadow-sm shadow-neutral-900 py-2">
              <IconSatellite className="text-neutral-300" />
            </div>

            <div className="bg-gradient-to-br from-neutral-600 to-neutral-900 text-white px-6  rounded-xl flex flex-col items-center justify-center border border-neutral-500/50 shadow-sm shadow-neutral-900 py-2">
              <IconAntennaBars5 className="text-neutral-300" />
            </div>

            <div className="bg-gradient-to-br from-neutral-600 to-neutral-900 text-white px-6  rounded-xl flex flex-col items-center justify-center border border-neutral-500/50 shadow-sm shadow-neutral-900 py-2">
              <IconDrone className="text-neutral-300" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const SkeletonThree = () => {
  return (
    <>
      <div className="bg-transparent flex items-center justify-center group">
        <div className="bg-[#1a1a1a] rounded-2xl p-6 relative w-80 shadow-md">
          {/* Top buttons */}
          <div className="flex gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>

          {/* Bars */}
          <div className="flex justify-between items-end h-40">
            {[
              { height: "h-20", height2: "h-46", label: "Terrain Mapping" },
              { height: "h-34", height2: "h-46", label: "Sensor AI" },
              {
                height: "h-26 ",
                height2: "h-46",
                label: "Autonomous Robotics",
              },
              { height: "h-46", height2: "h-46", label: "Drone Vision" },
            ].map((bar, idx) => (
              <div key={idx} className="relative flex flex-col items-center ">
                <div
                  className={`w-10 rounded-t-full bg-gradient-to-b from-neutral-600 to-transaprent duration-300 ease-in-out
          ${bar.height} hover:$`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export const SkeletonTwo = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-10"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-1  items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="flex items-center justify-center w-full bg-neutral-100 h-8 md:h-12 rounded-full dark:bg-neutral-800">
          <div
            className="flex justify-center text-xl  md:text-2xl lg:text-2xl  font-normal text-transparent bg-clip-text 
bg-gradient-to-b from-neutral-100/40  to-red-900/40 dark:from-gray-700/20 dark:via-gray-500 dark:to-gray-300/10 opacity-100"
          >
            <p>
              Our Robots can ,{" "}
              <span
                className="text-2xl md:text-3xl font-bold bg-clip-text 
bg-gradient-to-b from-neutral-100/40  to-red-900/40 dark:from-red-700/30 dark:via-red-500/95 dark:to-red-300/20 opacity-90"
              >
                Fly
              </span>
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-1 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <div className="flex items-center justify-center w-full bg-gray-100 h-8 md:h-12 rounded-full dark:bg-neutral-800">
          <div
            className="flex justify-center text-2xl   md:text-3xl  font-bold text-transparent bg-clip-text 
bg-gradient-to-b from-neutral-100/40  to-red-900/40 dark:from-red-700/30 dark:via-red-500/95 dark:to-red-300/20 opacity-90"
          >
            Roll / Walk
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-1 items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="flex items-center justify-center w-full bg-gray-100 h-8 md:h-12 rounded-full dark:bg-neutral-800">
          <div
            className="flex justify-center text-xl  md:text-2xl lg:text-2xl  font-normal text-transparent bg-clip-text 
bg-gradient-to-b from-neutral-100/40  to-red-900/40 dark:from-gray-700/20 dark:via-gray-500/90 dark:to-gray-300/10 opacity-90"
          >
            <p>
              and{"  "}
              <span
                className="text-2xl md:text-3xl font-bold bg-clip-text 
bg-gradient-to-b from-neutral-100/40  to-red-900/40 dark:from-red-700/30 dark:via-red-500/95 dark:to-red-300/20 opacity-90"
              >
                Dive{"  "}
              </span>
              too !!
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const SkeletonSix = () => {
  return (
    <div className="w-full h-80 bg-neutral-800 rounded-2xl p-4">
      <img
        src="/images/open-cv-feature.gif"
        className="w-full h-full object-cover rounded-xl"
      ></img>
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="h-60 md:h-60  flex flex-col items-center relative bg-transparent dark:bg-neutral-900/50 rounded-md">
      {/* <Globe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" /> */}
      <CardDemo />
    </div>
  );
};

export const SkeletonFive = () => {
  return (
    <>
      <div className="relative flex justify-center">
        <div className="flex items-center justify-center mx-auto  h-75 w-75 md:h-80 md:w-80 rounded-4xl bg-transparent border md:border-gray-600/50 border-gray-0 [animation:spin_8s_linear_infinite_reverse]"></div>

        <div className="flex justify-center items-center absolute top-10 mx-auto h-70 w-70 rounded-4xl bg-transparent border border-gray-600/50 [animation:spin_7s_linear_infinite]"></div>
        <div className="absolute top-10 mx-auto h-70 w-70 rounded-4xl bg-transparent border border-transparent ">
          <div className=" flex items-center justify-center absolute -left-7 top-10 shadow-lg shadow-red-900/70 h-14 w-14 bg-gray-950 rounded-2xl border border-red-700">
            <img src="/images/open-cv.png" className="h-10 w-10"></img>
          </div>
          <div className="flex items-center justify-center absolute -left-7 top-45 shadow-lg shadow-red-900/70  h-14 w-14 bg-gray-950 rounded-2xl border border-red-700">
            <img src="/images/nvidia.png" className="h-10 w-10"></img>
          </div>
          <div className=" flex items-center justify-center absolute -right-7 top-45 shadow-lg shadow-red-900/70  h-14 w-14 bg-gray-950 rounded-2xl border border-red-700">
            <img src="/images/tensor-flow.png" className="h-10 w-10"></img>
          </div>
          <div className="flex items-center justify-center absolute -right-7 top-10 shadow-lg shadow-red-900/70  h-14 w-14 bg-gray-950 rounded-2xl border border-red-700">
            <img src="/images/raspberry-pi.png" className="h-10 w-10"></img>
          </div>
          <div className=" flex items-center justify-center absolute left-27.5 -top-7 shadow-lg shadow-red-900/70  h-14 w-14 bg-gray-950 rounded-2xl border border-red-700">
            <img src="/images/aws.png" className="h-10 w-10"></img>
          </div>
        </div>
        <div className="absolute top-20 mx-auto h-50 w-50 rounded-4xl bg-transparent border border-gray-600/50 [animation:spin_6s_linear_infinite_reverse]"></div>
        <div
          className="absolute top-35 rounded-sm  flex items-center justify-center p-4  
        bg-transparent border-gray-500/60
    shadow-2xl  border-1"
        >
          <p className="text-black dark:text-red-500 text-xl font-bold">
            Trinnovate
          </p>
        </div>
      </div>
    </>
  );
};

export const Globe = ({ className }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],

      //for light Mode
      // dark: 0,
      // diffuse: 1.2,
      // mapSamples: 16000,
      // mapBrightness: 3,
      // baseColor: [1, 1, 1],
      // markerColor: [1, 0, 0],
      // glowColor: [0.6, 0.6, 0.6],

      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};
