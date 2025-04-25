import Image from "next/image";
import React from "react";

function AboutUs() {
  return <div className="h-screen w-screen flex flex-col items-center justify-center">
   <img src="/images/coding-illustration.svg" className="mb-4"></img>
    <p className="text-xl md:text-3xl mb-4 font-medium text-center">We are revamping ,  Page under Development</p>
    <p className="text-md md:text-2xl mb-4">Meanwhile have a look at our <a href="/" className="text-red-500 underline cursor-pointer">home page</a> </p>
  </div>
}

export default AboutUs;
