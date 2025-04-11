import React from "react";
import Image from "next/image";
import { GridBackgroundDemo } from "./HeroBackground";

import CustomNavBar from "./CustomNavBar";
// import { SparklesCore } from "./components/ui/sparkles";
import { TimelineDemo } from "./OurApproch";
import { TrustedPartnerMarquee } from "./TrustedPartnerMarquee";
import { ContainerTextFlipDemo } from "./ContainerParagraph";
import BadgeButton from "./BadgeButton";

import ContactUs from "./ContactUs";
import Footer from "./Footer";
// import LampDemo from "./components/LampEffect";
import ServicesWeOffer, { BentoGridSecondDemo } from "./ServicesWeOffer";
// import CTALandingPage from "./components/CTALandingPage";
// import HowWeSolve from "./components/HowWeSolve";
import { FeaturesSectionDemo } from "./FeatureGrid";
import {
  IconHandGrab,
  IconLinkOff,
  IconPrismLight,
  IconRectangularPrismPlus,
} from "@tabler/icons-react";

const Main = () => {
  return (
    <>
      <GridBackgroundDemo
        text={"Transforming Challanges into Revolutionary Solutions"}
      />
      {/* <div className="h-[20rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
            <h1 className="md:text-5xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
              What we do
            </h1>
            <div className="w-[40rem] h-40 relative">
          
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

       
           

           
              <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
          </div> */}

      <div className="relative w-full py-20 md:py-10 md:px-20 sm:px-1  -top-10 flex items-center justify-center flex-col gap-8">
        <p className="md:text-5xl  text-4xl font-bold text-black dark:text-white">
          Trusted by the Indian robotics{" "}
          <span className="text-red-600">Ecosystem</span>
        </p>

        <p className="text-lg font-normal text-gray-500">
          We efficiently Delivering reliability, performance, and scale for
          robotics innovation.
        </p>
        <div className="w-full">
          <TrustedPartnerMarquee />
        </div>
      </div>

      {/* <FeaturesSectionDemo /> */}
      <ContainerTextFlipDemo />
      <p className="text-md font-normal text-gray-500 text-center">
        From conversational AI agents to co-pilots, unlock endless possibilities
        to transform your business
      </p>
      <div className="mx-auto flex flex-col md:flex-row md:gap-15 gap-4 items-center justify-center py-6">
        <BadgeButton
          text={"Efficient"}
          children={
            <IconPrismLight className="text-orange-600 dark:text-orange-400" />
          }
        />
        <BadgeButton
          text={"Reliable"}
          children={
            <IconLinkOff className="text-blue-400 dark:text-blue-300" />
          }
        />
        <BadgeButton
          text={"Seemless"}
          children={
            <IconRectangularPrismPlus className="text-yellow-600 dark:text-blue-300" />
          }
        />
      </div>

      <FeaturesSectionDemo />

      <TimelineDemo />

      <div className="max-w-full mx-auto px-4 md:px-8 lg:px-10 mt-40">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white max-w-full text-center">
          Let's talk about our <span className="text-red-500">Offerings</span>
        </h2>
        <p className="py-8 text-md font-normal text-gray-500 text-center max-w-4xl mx-auto">
          We offer cutting-edge Robotics & Automation Solutions to enhance
          efficiency and precision across industries. Our expertise in Digital
          Transformation leverages AI, IoT, and cloud solutions to drive
          innovation. With Creative Design Solutions, we craft intuitive and
          visually compelling user experiences.
        </p>
      </div>
      <BentoGridSecondDemo />
      <div className="mt-40">
        <ContactUs />

        <Footer />
      </div>

      {/* <HowWeSolve /> */}

      {/* <CTALandingPage /> */}
    </>
  );
};

export default Main;
