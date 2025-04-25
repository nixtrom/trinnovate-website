import React from "react";

const BadgeButton = ({ text, children }) => {
  return (
    <button
      type="button"
      className="
      inline-flex w-full items-center justify-center md:w-auto 
      px-4 py-2 md:px-8 text-sm md:text-lg font-medium text-center
      text-neutral-700 dark:text-white
      bg-gradient-to-r from-red-100 to-blue-100
      dark:bg-[#292524] dark:from-transparent dark:to-transparent
      rounded-full
      
    "
    >
      <span className="inline-flex items-center justify-center w-4 h-4 mr-2">
        {children}
      </span>
      {text}
    </button>
  );
};

export default BadgeButton;
