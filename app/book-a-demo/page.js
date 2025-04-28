import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function BookADemo() {
  return  <div className="h-screen mt-100 w-full flex flex-col items-center justify-center">
  <ContactUs/>
      <Footer/>
  
    </div>
}

export default BookADemo;
