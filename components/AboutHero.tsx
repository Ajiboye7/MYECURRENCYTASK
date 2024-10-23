import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";
import images from "@/constants/images";

const AboutHero = () => {

  return (
    <section className="bg-about-hero-bg  bg-cover bg-center h-[90vh] w-full mb-32">
      <div className=" flex w-full h-full">
        <div className="container mx-auto mt-72 ">
          <p className="text-[18px] font-normal text-primary">
            We are here to help you
          </p>
          <p className="mt-4 text-[60px] font-bold text-primary">
            Relax & Rest
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;