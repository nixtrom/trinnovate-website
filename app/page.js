import Image from "next/image";
import { GridBackgroundDemo } from "./components/HeroBackground";

import CustomNavBar from "./components/CustomNavBar";
import { SparklesCore } from "./components/ui/sparkles";
import { TimelineDemo } from "./components/OurApproch";
import { TrustedPartnerMarquee } from "./components/TrustedPartnerMarquee";
import { ContainerTextFlipDemo } from "./components/ContainerParagraph";
import BadgeButton from "./components/BadgeButton";
import ResizeableNavbar from "./components/ResizeableNavbar";

import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import LampDemo from "./components/LampEffect";
import ServicesWeOffer, {
  BentoGridSecondDemo,
} from "./components/ServicesWeOffer";
import CTALandingPage from "./components/CTALandingPage";
import HowWeSolve from "./components/HowWeSolve";
import { FeaturesSectionDemo } from "./components/FeatureGrid";
import {
  IconHandGrab,
  IconLinkOff,
  IconPrismLight,
  IconRectangularPrismPlus,
} from "@tabler/icons-react";

export default function Home() {
  return (
    <main>
      <div className=" bg-[#ffffff] dark:bg-[#000000] md:px-10 px-5">
        <div className="w-full max-w-[100vw] flex flex-col justify-center align-center bg-black-400">
          {/* <CustomNavBar /> */}
          <ResizeableNavbar />
        </div>
      </div>
    </main>
  );
}
