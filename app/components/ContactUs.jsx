"use client";
import {
  IconBrandLinkedin,
  IconLocation,
  IconMailCheck,
  IconPhone,
} from "@tabler/icons-react";

import AnimatedPinDemo from "./AnimatedPin";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      toast.error("Please fix the errors in the form.");
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/xzzzgwdd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      toast.success("Form submitted successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      console.error("Error:", error);
      toast.error("Submission failed. Please try again.");
    }
  };

  return (
    <div className="lg:py-20  py-5 px-0 lg:px-50 flex xl:flex-row flex-col justify-between items-center w-full mx-auto">
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
            <IconMailCheck /> info@trinnovate.in
          </p>

          <p>
            <IconPhone /> +91-9063569992
          </p>

          <p className="xl:hidden">
            <IconLocation /> 6-25,Opp. IDPL Factory , Bhavani Nagar, Balanagar ,
            Hyderabad , Telangana , 500037
          </p>
        </div>
        <AnimatedPinDemo />
      </div>

      <Toaster position="top-right" reverseOrder={false} />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col mb-10 xl:mb-0 xl:gap-14 gap-10 xl:p-10 p-2 xl:w-[45%] md:w-[70%] w-full bg-gradient-to-br dark:from-[#171717] dark:to-black rounded-2xl lg:mt-0 mt-10"
      >
        {["name", "email", "subject"].map((field) => (
          <div key={field} className="flex flex-col gap-2">
            <h3 className="text-md text-gray-800 dark:text-white/70 font-normal capitalize">
              {field === "email" ? "Email Address" : field}
            </h3>
            <input
              type={field === "email" ? "email" : "text"}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              className="block w-full p-2 text-gray-900 rounded-lg bg-gray-200 text-base dark:bg-[#262626] dark:placeholder-gray-400 dark:text-white"
            />
            {errors[field] && (
              <p className="text-sm text-red-500">{errors[field]}</p>
            )}
          </div>
        ))}

        <div className="flex flex-col gap-2">
          <h3 className="text-md text-gray-800 dark:text-white/70 font-normal">
            Message
          </h3>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="block w-full p-2 text-gray-900 rounded-lg bg-gray-200 text-base dark:bg-[#262626] dark:placeholder-gray-400 dark:text-white"
          />
          {errors.message && (
            <p className="text-sm text-red-500">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="content-start w-[30%] py-2.5 text-sm font-medium from-red-800 to-red-600 text-white shadow-xl hover:text-white hover:bg-[#161616] focus:outline-none focus:z-10 cursor-pointer bg-gradient-to-b dark:from-[#171717] dark:to-[#1f1f1f] dark:text-gray-400 dark:hover:text-white dark:hover:bg-[#161616] rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
