import React from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import { motion } from "motion/react";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";

export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[12rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black ">
    <video
      className="w-full h-full opacity-90 hover:opacity-100 rounded-2xl"
      autoPlay
      loop
      muted
      playsInline
    >
      <source src="/ai-tracking.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
);

const SkeletonOne = () => {
  return (
    <div className="group flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2  dark:bg-black hover:[mask-image:none]">
      <div className="w-1/4 rounded-2xl bg-white md:p-1 dark:bg-black border border-neutral-500 flex flex-col items-center justify-center transform transition-all duration-300 group-hover:rotate-0 group-hover:translate-x-0 md:rotate-[-5deg] md:translate-x-5">
        <img
          className="w-full h-full rounded-2xl object-cover"
          src="/images/underwater-robot.png"
          alt="UGV"
        />
      </div>

      <div className="w-1/4 rounded-2xl bg-white md:p-1 dark:bg-black border border-neutral-500 flex flex-col items-center justify-center relative z-20">
        <img
          className="w-full h-full rounded-2xl object-cover"
          src="/images/drone.png"
          alt="drone"
        />
      </div>

      <div className="w-1/4 rounded-2xl bg-white md:p-1 dark:bg-black border border-neutral-500 flex flex-col items-center justify-center transform transition-all duration-300 group-hover:rotate-0 group-hover:translate-x-0 md:rotate-[5deg] md:-translate-x-5">
        <img
          className="w-full h-full rounded-2xl object-cover"
          src="/images/land-ugv.png"
          alt="UGV"
        />
      </div>

      <div className="w-1/4 rounded-2xl bg-white md:p-1 dark:bg-black border border-neutral-500 flex flex-col items-center justify-center transform transition-all duration-300 group-hover:rotate-0 group-hover:translate-x-0 md:-rotate-[5deg] md:-translate-x-10">
        <img
          className="w-full h-full rounded-2xl object-cover"
          src="/images/rooster-drone.jpeg"
          alt="UGV"
        />
      </div>
    </div>
  );
};

const Skeleton3 = () => (
  <div className="flex flex-1 w-full h-full min-h-[12rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black hover:[mask-image:none]">
    <img
      className="w-full h-full opacity-80 hover:opacity-100 rounded-xl"
      src="/images/dashboard.png"
      alt="Dashboard"
    />
  </div>
);

const Skeleton4 = () => (
  <div className="flex flex-1 w-full h-full min-h-[12rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2]   border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black hover:[mask-image:none]">
    <img
      className="w-full h-full object-cover relative opacity-80 hover:opacity-100 rounded-xl"
      style={{ transform: "translateY(0px)" }}
      src="/images/iot-sensor.png"
      alt="iot-sensors"
    />
  </div>
);
const items = [
  {
    title: "Robotics & Automation Solutions",
    description:
      "Customized robotic systems for land, air, and water applications.",
    header: <SkeletonOne />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "AI & Computer Vision Integration",
    description: "",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Control Systems & Dashboards",
    description: "",
    header: <Skeleton3 />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "IoT & Sensor-Based Automation",
    description:
      "Integrate depth sensors, LiDAR, and real-time analytics for smart robotics.",
    header: <Skeleton4 />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
];
