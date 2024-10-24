import React from "react";
import Link from "next/link";
import { CustomButtonProps } from "@/types";

const CustomButton = ({ title, link }: CustomButtonProps) => {
  return (
    <div>
      <Link href={link} passHref>
        <button
          type="button"
          className="w-[225px] h-[50px] text-white bg-btnBg rounded-[5px] transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-btnHover shadow-lg"
        >
          {title}
        </button>
      </Link>
    </div>
  );
};

export default CustomButton;
