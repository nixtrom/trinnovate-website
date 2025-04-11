"use client";
import {
  IconBrandLinkedin,
  IconLocation,
  IconMailCheck,
  IconPhone,
} from "@tabler/icons-react";
import AnimatedPinDemo from "./AnimatedPin";
export default function ContactUs() {
  return (
    <div className="lg:py-20  py-5 px-0 lg:px-50 flex xl:flex-row flex-col justify-between items-center md:max-w-8xl max-w-full mx-auto">
      <div className="flex flex-col gap-10 xl:p-10 p-2 xl:max-w-xl  max-w-full">
        <p className="md:text-6xl text-5xl text-black dark:text-white font-bold">
          Contact <span className="text-red-500">Us</span>{" "}
        </p>
        <p className="dark:text-neutral-400 text-gray-500 font-normal text-lg">
          We are always looking for ways to improve our products and services.
          Contact us and let us know how we can help you.
        </p>
        <div className="flex xl:flex-row flex-col gap-8 md:justify-between items-start xl:items-center text-neutral-400 font-normal text-md">
          <p>
            <IconMailCheck /> contact@trinnovate.in
          </p>
          <div className="hidden xl:flex h-2 w-2 rounded-full bg-gray-700"></div>
          <p>
            <IconPhone /> +91-7974810889
          </p>
          <div className="hidden xl:flex h-2 w-2 rounded-full bg-gray-700"></div>
          <p>
            <IconBrandLinkedin /> ops@trinnovate.in
          </p>
          <p className="xl:hidden">
            <IconLocation /> 6-25,Opp. IDPL Factory , Bhavani Nagar, Balanagar ,
            Hyderabad , Telangana , 500037
          </p>
        </div>
        <AnimatedPinDemo />
      </div>

      <div className="flex flex-col mb-10 xl:mb-0 xl:gap-14 gap-10 xl:p-10 p-2 xl:w-[45%] md:w-[70%] w-full  bg-gradient-to-br dark:from-[#171717] dark:to-black rounded-2xl lg:mt-0 mt-10">
        <div className="flex flex-col gap-4">
          <h3 className="text-md text-gray-800 dark:text-white/70 font-normal">
            Your Name{" "}
          </h3>
          <input
            type="text"
            id="large-input"
            className="block w-full p-2 text-gray-900 rounded-lg bg-gray-200 text-base dark:bg-[#262626]  dark:placeholder-gray-400 dark:text-white"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-md text-gray-800 dark:text-white/70 font-normal">
            Email Address{" "}
          </h3>
          <input
            type="text"
            id="large-input"
            className="block w-full p-2 text-gray-900 rounded-lg bg-gray-200 text-base dark:bg-[#262626]  dark:placeholder-gray-400 dark:text-white"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-md text-gray-800 dark:text-white/70 font-normal">
            Subject{" "}
          </h3>
          <input
            type="text"
            id="large-input"
            className="block w-full p-2 text-gray-900 rounded-lg bg-gray-200 text-base dark:bg-[#262626]  dark:placeholder-gray-400 dark:text-white"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-md text-gray-800 dark:text-white/70 font-normal">
            Message
          </h3>
          <textarea
            type="textarea"
            id="large-input"
            rows="4"
            className="block w-full p-2 text-gray-900 rounded-lg bg-gray-200 text-base dark:bg-[#262626]  dark:placeholder-gray-400 dark:text-white"
          />
        </div>
        <button
          type="button"
          className="content-start w-[30%] py-2.5 text-sm font-medium from-red-800 to-red-600 text-white shadow-xl  hover:text-white hover:bg-[#161616] focus:outline-none  focus:z-10  cursor-pointer   bg-gradient-to-b dark:from-[#171717] dark:to-[#1f1f1f] dark:text-gray-400  dark:hover:text-white dark:hover:bg-[#161616] rounded-md"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
