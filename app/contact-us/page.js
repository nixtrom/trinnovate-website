import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ContactUsPage() {
  return <div className="h-screen pt-[110vh] md:pt-[70vh] w-full flex flex-col items-center justify-center bg-black">
<ContactUs/>
    <Footer/>

  </div>
}

export default ContactUsPage;
