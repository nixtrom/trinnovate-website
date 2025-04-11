import Image from "next/image";
import React from "react";

const CustomNavBar = () => {
  return (
    <nav className="relative sm:block hidden">
      <div className="sticky inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-0" />
      <div className="flex justify-between items-center py-4 px-6 relative z-10">
        <div className="h-full flex gap-20 text-white items-center">
          <Image
            src="/images/trinnovate-logo-white.png"
            alt="Trinnovate Logo"
            width={200}
            height={100}
          />

          <button className=" bg-transparent cursor-pointer text-white/70 rounded-lg font-normal transform hover:-translate-y-1 transition duration-400">
            About us
          </button>
          <button className=" bg-transparent cursor-pointer text-white/70 rounded-lg font-normal transform hover:-translate-y-1 transition duration-400">
            Solutions
          </button>
          <button className=" bg-transparent cursor-pointer text-white/70 rounded-lg font-normal transform hover:-translate-y-1 transition duration-400">
            Products
          </button>
          <button className=" bg-transparent cursor-pointer text-white/70 rounded-lg font-normal transform hover:-translate-y-1 transition duration-400">
            Careers
          </button>
        </div>
        <button className="px-6 py-2 rounded-full bg-gradient-to-br from-white to-white  hover:from-red-600 hover:to-red-300 font-semibold text-black/90 focus:ring-0 hover:shadow-md hover:shadow-red-900 transition duration-400 hover:cursor-pointer">
          Schedule a Demo
        </button>
      </div>
    </nav>
  );
};

export default CustomNavBar;
