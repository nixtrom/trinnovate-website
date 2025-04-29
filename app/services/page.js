import Image from "next/image";
import Link from "next/link";
import React from "react";
import Footer from "../components/Footer";

function Services() {
  const services = [
    {
      icon: "",
      title: "ROBOTICS SOLUTIONS",
      text: "We design and build advanced autonomous systems tailored for air, land, and underwater applications.Our robotics solutions empower industries to achieve operational excellence through precision, adaptability, and innovation.",
      subServices: [
        { title: "Drone", icon: "" },
        { title: "Rover", icon: "" },
        { title: "Underwater", icon: "" },
        { title: "Robotic Arm", icon: "" },
        { title: "Quadraped", icon: "" },
        { title: "Hybrid", icon: "" },
      ],
    },
    {
      icon: "",
      title: "HARDWARE SOLUTIONS",
      text: "We engineer high-performance hardware platforms optimized for durability, efficiency, and scalability.From custom electronics to robust mechanical systems, our hardware ensures reliability even in the harshest environments.",
      subServices: [
        { title: "Mechanism", icon: "" },
        { title: "Electronics", icon: "" },
        { title: "Sensor", icon: "" },
        { title: "Actuators", icon: "" },
      ],
    },
    {
      icon: "",
      title: "SOFTWARE SOLUTIONS",
      text: "We develop intelligent software ecosystems that drive seamless operation, control, and data analysis for autonomous systems.",
      subServices: [
        { title: "GCS", icon: "" },
        { title: "Firmware", icon: "" },
        { title: "Computer Vision", icon: "" },
        { title: "AI Integration", icon: "" },
        { title: "Cloud", icon: "" },
        { title: "Security", icon: "" },
      ],
    },
  ];
  return (
    <div className=" w-screen h-full flex flex-col gap-20 bg-black pt-40">
      <div className="px-6 md:px-40 ">
        <p className="text-3xl md:text-6xl mb-4">Services we offer</p>
        <p className=" text-xl  text-neutral-300 md:text-3xl md:w-5xl">
        Our comprehensive services span robotics, hardware, and software domains, combining advanced engineering with deep industry insights to build reliable, future-ready solutions.
        </p>
      </div>

      {services.map((service, index) => {
        return (
          <div key={index} className="relative px-1 w-[100vw] md:w-[70vw] mx-auto flex md:flex-row flex-col justify-between py-4">
            <div className="flex ml-4 md:ml-0 gap-2 md:gap-10 ">
              <div className="sm:block hidden h-20 w-2 rounded-sm bg-gradient-to-b from-red-500 to-neutral-900"></div>
              <p className=" text-3xl md:text-5xl text-wrap w-sm md:w-md">{service.title}</p>
            </div>

            <div className="flex flex-col gap-10">
              <p className="text-md text-neutral-400 px-4">
                {service.text}
              </p>
              <div className="flex flex-wrap gap-10 justify-start">
  {service.subServices.map((subService, index) => (
    <div key={index} className=" mx-auto w-[90%] md:w-[25%] min-w-[100px] flex flex-col items-center">
      <div className="flex p-6 items-center justify-center h-40 md:h-30 w-[100%] mx-auto md:w-40 rounded-md bg-gradient-to-br from-neutral-600 to-neutral-900 mb-4">
        <img alt={`${subService.title}`} className="" src={`/images/services/${subService.title}.svg`}></img>
      </div>
      <p className="text-center">{subService.title}</p>
    </div>
  ))}
</div>
            </div>

            <div className={`${index == services.length-1 ? 'hidden':'block'} absolute h-[2px] w-full -bottom-10 mx-auto bg-gradient-to-r from-transparent via-neutral-600 to-transparent`}></div>
          </div>
        );
      })}

      <Footer/>
    </div>
  );
}

export default Services;
