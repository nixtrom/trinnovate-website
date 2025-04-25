"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";

export default function AnimatedPinDemo() {
  return (
    <div className="h-[20rem] w-full items-center justify-center hidden xl:flex ">
      <PinContainer title="Trinnovate" href="https://twitter.com/mannupaaji">
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1 w-[25vw] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Address
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-neutral-500 ">
              6-25, Opp. IDPL Factory, Bhavani Nagar, Balanagar, Hyderabad,
              Telangana 500037
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-red-500 to-blue-800/40 h-[22vh]">
            <img
              src="/images/map.png"
              className=" h-full w-full object-cover rounded-lg"
            ></img>
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
