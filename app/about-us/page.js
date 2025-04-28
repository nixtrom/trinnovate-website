import Image from "next/image";
import Link from "next/link";
import React from "react";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

function AboutUs() {

  const whyChooseTrinnovate = [{title:"Tailored Solutions",text:"We craft bespoke autonomous robotics solutions that address your unique challenges, ensuring optimal performance and seamless integration into your existing systems."},
    {title:"Cutting-Edge Technology",text:"Our innovations leverage the latest advancements in AI, machine learning, and robotics to push the boundaries of what possible in automation and efficiency."},
    {title:"Collaborative Approach",text:"We work closely with our clients, combining our expertise with your industry knowledge to create revolutionary solutions that drive tangible results."},
    {title:"Measurable Impact",text:"Our solutions are designed to deliver quantifiable improvements in productivity, precision, and cost-effectiveness across various industries."},
  ]
  return (
    <div className="flex flex-col gap-10 w-full  px-2 md:px-[15vw] mx-auto  bg-black pt-30">

      <section
        id="who-we-are"
        className="flex md:flex-row flex-col-reverse gap-8 justify-between items-center md:py-40 px-4 md:px-0"
      >
        <div className="flex flex-col gap-10 flex-2">
          <p className="text-3xl md:text-6xl">Who we <span className="text-red-500">are ?</span></p>
          <p className="text-2xl md:text-4xl text-neutral-600">
            Pioneers in Autonomous Robotics Innovating Autonomy, Empowering the
            Future
          </p>
          <p className="text-2xl w-full md:text-4xl md:w-[90%] tracking-wide md:tracking-wider">
            {" "}
            At Trinnovate Synergy Technologies, we are on a mission to
            revolutionize industries through cutting-edge autonomous robotics.
            Our expertise spans <span className="text-red-800">air</span> , <span className="text-red-800">ground</span>, and <span className="text-red-800">underwater</span> domains, delivering
            customized solutions that address unique challenges with unmatched
            precision and innovation.
          </p>
        </div>
        <div className="flex flex-col p-10 w-full md:h-[20vh] rounded-xl md:flex-1 justify-center items-center bg-black">
          <img class="w-[50%] md:w-full"  src="/images/trinnovate-symbol-white.svg"></img>
        </div>
      </section>

      {/* <section id="trinnovate-team-image">
        <div className="md:h-[60vh] h-[20vh] w-full rounded-2xl bg-neutral-600"></div>
      </section> */}

      <section
        id="who-choose-trinnovate"
        className="md:hidden md:flex-row flex-col gap-10 w-full  px-2  mx-auto  bg-black md:py-30 flex"
      >
        <div className="flex flex-col gap-10 flex-2">
          <p className="text-3xl md:text-6xl">Why Choose <span className="text-red-500">Trinnovate ?</span></p>
          <p className="text-2xl md:text-3xl w-full md:w-[70%]">
          From design to deployment, we deliver seamless automation that empowers businesses to achieve unparalleled precision and performance. 
          </p>
        </div>
        <div className="flex flex-col gap-5 flex-1">
          {whyChooseTrinnovate.map((item, index) => {
            return (
              <div key={item.title} className="p-4 md:p-6 flex gap-5 rounded-xl border border-neutral-600 bg-gradient-to-br from-neutral-900 to-neutral-700">
                <div className=" my-2 h-20 rounded-sm w-3 bg-gray-400"></div>
                <div>
                  <p className="text-xl md:text-3xl mb-2">{item.title}</p>
                  <p className="text-md md:text-lg">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="md:flex hidden py-40">
            <img src="/images/who we are.svg"></img>
      </section>

     
      <Footer />
    </div>
  );
}

export default AboutUs;
