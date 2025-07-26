import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";
import images from "@/constants/images";

const Hero = () => {
  return (
    <section className="bg-hero-bg bg-cover bg-center h-[90vh] w-full">
      <div className=" flex w-full h-full px-5">
        <div className="container mx-auto mt-52 sm:mt-72 ">
          <p className="sm:text-[16px] text-[18px] font-normal text-primary">
            We are here to help you
          </p>
          <p className="text-[40px] sm:text-[60px] font-bold mt-4 text-primary">
            Relax & Rest 
      <div className="sm:absolute sm:bottom-10 right-0 w-full max-w-[1500px] h-[131px] rounded-[2px] px-5 sm:px-4 bg-sponsorBg shadow-2xl container">
        <div className="flex flex-wrap items-center justify-around mx-4 h-full gap-4">
          <Image
            src={images.google}
            alt="google"
            width={146}
            height={51}
            className="w-[90px] sm:w-auto"
          />
          <Image
            src={images.forbes}
            alt="forbes"
            width={129}
            height={32}
            className="w-[90px] sm:w-auto"
          />
          <Image
            src={images.bloomberg}
            alt="bloomberg"
            width={226}
            height={44}
            className="w-[90px] sm:w-auto"
          />
          <Image
            src={images.sleepReview}
            alt="sleepReview"
            width={201}
            height={48}
            className="w-[90px] sm:w-auto"
          />
          <Image
            src={images.influencive}
            alt="influencive"
            width={220}
            height={48}
            className="w-[90px] sm:w-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
