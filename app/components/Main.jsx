import React from "react";
import Image from "next/image";
import { GridBackgroundDemo } from "./HeroBackground";
import Posts from "./Posts"

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
import { TextChanges } from "./ui/text-changes";






const Main = ({posts}) => {

  const words = ["Robots + ","Code + ","Creativity +"];
  
  return (
    <main>
      {/* <GridBackgroundDemo
        text={"Transforming Challanges into Revolutionary Solutions"}
      /> */}

      <section className="relative w-full h-screen bg-cover bg-center "  style={{ backgroundImage: "url('/images/background-grid-dark.svg')" }}>
      

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 overflow-x-clip">
        <div className="absolute mx-auto bg-cover bg-center  w-[200px]  h-[200px] md:w-[360px] md:h-[360px]" style={{ backgroundImage: "url('/images/cicular-abstract.svg')"}}>

      </div>
      <div className="absolute mx-auto bg-cover bg-center animate-[spin_10s_linear_infinite]  opacity-60 w-[300px] h-[300px] md:w-[600px] md:h-[600px]" style={{ backgroundImage: "url('/images/propeller-abstract.svg')"}}>

      </div>

      {/* <div className="absolute  right-80 top-50   p-2  md:py-4  md:px-6 rounded-md text-6xl font-semibold tracking-wider text-black">
            <TextChanges words={words} />
</div> */}



<button className="absolute bottom-40 bg-gradient-to-r  hover:to-[#C52A30] hover:from-[#892A2E] from-[#C52A30]/90 to-[#892A2E]/90 md:px-5 md:py-2 px-3 py-1 rounded-md border border-red-500 cursor-pointer hover:scale-105 transition-all duration-300 text-white md:text-2xl text-xl font-medium shadow-2xl shadow-red-400/70">
        Book a Demo
</button>




      

      <div className="hidden absolute -right-30 -bottom-90 md:flex items-center justify-center min-h-screen bg-transparent">
  {/* Outer Circle */}
  <div className="w-[400px] h-[400px] rounded-full border-[1px] border-[#f4f4f4]/60 bg-gradient-to-br from-[#220c11] to-[#000000] opacity-60 flex items-center justify-center relative">
    
    {/* Inner Circle */}
    <div className="w-[330px] h-[330px] opacity-90 rounded-full border-[1px] border-[#f4f4f4]/30 backdrop-blur-sm bg-gradient-to-br from-[#220c11]/50 to-[#000000]/50 relative overflow-hidden">
      
      {/* Rotating Arc */}
      <div className="absolute top-0 left-1/2 w-1/2 h-full transform origin-left animate-[spin_6s_linear_infinite]">
        <div className="w-full h-full border-t-4 border-r-4 border-transparent border-t-[#f4f4f4] border-r-[#f4f4f4] rounded-tr-full"></div>
      </div>

    </div>
  </div>
</div>



      
    <h1 className="text-4xl md:text-7xl font-medium mb-4 max-w-3xl tracking-widest">Technology that works for you</h1>
        
  </div>
      </section>
      {/* <div className="w-full h-30 bg-black  flex flex-row justify-between -mt-2 z-10">
      {[...Array(17)].map((_, i) => (
   <div key={i} className={` relative w-[0.5px] bg-neutral-900`} style={{ height: `${(Math.floor(Math.random() * 16) + 5) * 10}px` }}>
 <span className="absolute top-0 left-1/2 -translate-x-1/2 w-[3px] h-6 bg-gradient-to-b from-red-400/40 to-transparent animate-beam" />


   
   </div>
))}
       
         
 
      </div> */}

      {/* <div className="relative w-full py-20 md:py-10 md:px-20 sm:px-1  -top-10 flex items-center justify-center flex-col gap-8">
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
      </div> */}

      {/* <FeaturesSectionDemo /> */}
      <ContainerTextFlipDemo />
      <p className="text-md font-normal text-gray-500 text-center">
        Your intelligent robotic solutions, without limits, creatively solving
        your specific needs.
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

      {/* <h2 className="text-4xl md:text-5xl font-bold  text-black dark:text-white max-w-full text-center mt-40 pb-10">
         Our Latest Blog <span className="text-red-500">Posts</span>
        </h2>
      <Posts posts={posts}/> */}

      <div className="mt-40">
        <ContactUs />

        <Footer />
      </div>

      {/* <HowWeSolve /> */}

      {/* <CTALandingPage /> */}
    </main>
  );
};

export default Main;
