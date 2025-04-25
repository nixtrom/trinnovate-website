import Image from "next/image";
import Link from "next/link";
import React from "react";

function Products() {
  return <div className="h-screen w-screen flex flex-col items-center justify-center">
   <img src="/images/coding-illustration.svg" className="mb-4"></img>
    <p className="text-xl md:text-3xl mb-4 font-medium text-center">We are revamping ,  Page under Development</p>
    <p className="text-base md:text-2xl mb-4">
  Meanwhile have a look at our{" "}
  <Link href="/">
    <span className="text-red-500 underline cursor-pointer">home page</span>
  </Link>
</p>
  </div>
}

export default Products;
