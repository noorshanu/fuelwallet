import React from "react";
import { IoMdArrowUp } from "react-icons/io";

const Button = ({
  text = "GET 1FUEL",
  showArrow = true,
  gradientFrom = "#F16E8B",
  gradientTo = "#8E4E9F",
  className = "",
}) => {
  return (
    <button
      className={`bg-gradient-to-r text-white px-6 py-2 popfont rounded-sm flex items-center gap-2 transition-all duration-300 ease-in-out group hover:scale-105 hover:shadow-lg ${className}`}
      style={{ backgroundImage: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})` }}
    >
      {text}
      {showArrow && (
        <IoMdArrowUp className="text-lg transition-transform duration-300 transform rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1" />
      )}
    </button>
  );
};

export default Button;
