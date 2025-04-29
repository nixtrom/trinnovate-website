import Image from "next/image";
import Link from "next/link";
import React from "react";
import Footer from "../components/Footer";

function Applications() {
  const applications = [
    {
      icon: "",
      title: "Applications",
      text: "We design autonomous systems to enhance surveillance, reconnaissance, and tactical operations. Our solutions ensure mission success with precision, reliability, and safety.",
      subApplications: [
        { title: "Defense", icon: "" },
        { title: "Industries", icon: "" },
        { title: "Education", icon: "" },
      ],
    },
    // {
    //   icon: "",
    //   title: "DEFENSE AND SECURITY",
    //   text: "We design autonomous systems to enhance surveillance, reconnaissance, and tactical operations. Our solutions ensure mission success with precision, reliability, and safety.",
    //   subApplications: [
    //     { title: "Armed Force", icon: "" },
    //     { title: "Threat Assesment", icon: "" },
    //     { title: "Disaster Management", icon: "" },
    //     { title: "Naval Defense", icon: "" },
    //     { title: "Infrastructure Protection", icon: "" },
    //     { title: "Counter Terrorism ", icon: "" },
    //   ],
    // },
    // {
    //   icon: "",
    //   title: "INDUSTRIES",
    //   text: "We deliver intelligent automation to optimize manufacturing, logistics, and inspection processes. Our technologies drive efficiency, reduce costs, and future-proof industrial operations.",
    //   subApplications: [
    //     { title: "WareHouse Robotics", icon: "" },
    //     { title: "Infrastructure Robotics", icon: "" },
    //   ],
    // },
    // {
    //   icon: "",
    //   title: "EDUCATION AND RESEARCH",
    //   text: "We enable innovation by providing advanced robotic platforms for academic learning and scientific exploration. Our solutions foster creativity, experimentation, and breakthrough discoveries.",
    //   subApplications: [
    //     { title: "Autonomous Robotics Center", icon: "" },
    //   ],
    // },
  ];
  return (
    <div className=" w-screen h-full flex flex-col gap-20 bg-black pt-40">
      <div className="px-6 md:px-40 ">
        <p className="text-3xl md:text-6xl mb-4">Applications We Provide</p>
        <p className=" text-xl  text-neutral-300 md:text-3xl md:w-5xl">
        We empower industries by delivering cutting-edge autonomous solutions tailored to specific operational challenges, ensuring greater efficiency, safety, and innovation.
        </p>
      </div>

      {applications.map((application, index) => {
        return (
          <div key={index} className="relative px-1 w-[100vw] md:w-[70vw] mx-auto flex md:flex-row flex-col justify-between py-4">
            <div className="flex ml-4 md:ml-0 gap-2 md:gap-10 ">
              <div className="sm:block hidden h-20 w-2 rounded-sm bg-gradient-to-b from-red-500 to-neutral-900"></div>
              <p className=" text-3xl md:text-5xl text-wrap w-sm md:w-md">{application.title}</p>
            </div>

            <div className="flex flex-col gap-10">
              <p className="text-md text-neutral-400 px-4">
                {application.text}
              </p>
              <div className="flex flex-wrap gap-10 justify-start">
  {application.subApplications.map((subApplication, index) => (
    <div key={index} className=" mx-auto w-[90%] md:w-[25%] min-w-[100px] flex flex-col items-center">
       <div className="flex p-6 items-center justify-center h-40 md:h-30 w-[100%] mx-auto md:w-40 rounded-md bg-gradient-to-br from-neutral-600 to-neutral-900 mb-4">
        <img alt={`${subApplication.title}`} className="" src={`/images/products/${subApplication.title}.svg`}></img>
      </div>
      <p className="text-center">{subApplication.title}</p>
    </div>
  ))}
</div>
            </div>

            <div className={`${index == applications.length-1 ? 'hidden':'block'} absolute h-[2px] w-full -bottom-10 mx-auto bg-gradient-to-r from-transparent via-neutral-600 to-transparent`}></div>
          </div>
        );
      })}

      <Footer/>
    </div>
  );
}

export default Applications;
