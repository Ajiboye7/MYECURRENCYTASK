import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";
import images from "@/constants/images";

const Hero = () => {
  const images = {
    google: "/assests/images/google2.0.0 1.png",
    forbes: "/assests/images/PngItem_272311 1.png",
    bloomberg: "/assests/images/PngItem_2146723 1.png",
    sleepReview: "/assests/images/Sleep-Review-Magazine-Logo 1.png",
    influencive: "/assests/images/Logo_Black_Large_Slogan_newfont2 1.png"
  };

  return (
    <section className="bg-hero-bg bg-cover bg-center h-[90vh] w-full">
      <div className=" flex w-full h-full">
        <div className="container mx-auto mt-72 ">
          <p className="text-[18px] font-normal text-primary">
            We are here to help you
          </p>
          <p className="mt-4 text-[60px] font-bold text-primary">
            Relax & Rest
          </p>
          <p className="text-[16px] font-normal leading[20px] text-primary">
            With the aid of our Melatonin Sleepstiq, we can assure you that you
            can <br /> get quality sleep.
          </p>

          <div className="mt-7">
            <CustomButton title="Visit Shop" />
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1500px] h-[131px]  rounded-[2px] absolute bottom-10 right-0 bg-sponsorBg shadow-2xl px-4 container">
  <div className="flex flex-wrap items-center justify-around h-full gap-4">
    <Image src={images.google} alt="google" width={146} height={51} className="w-[50%] sm:w-auto" />
    <Image src={images.forbes} alt="forbes" width={129} height={32} className="w-[50%] sm:w-auto" />
    <Image src={images.bloomberg} alt="bloomberg" width={226} height={44} className="w-[50%] sm:w-auto" />
    <Image src={images.sleepReview} alt="sleepReview" width={201} height={48} className="w-[50%] sm:w-auto" />
    <Image src={images.influencive} alt="influencive" width={220} height={48} className="w-[50%] sm:w-auto" />
  </div>
</div>

     
      
    </section>
  );
};

export default Hero;
/*

 <div className="w-[1276px] h-[131px] border rounded-[2px] absolute bottom-10 right-0 bg-sponsorBg shadow-2xl container">
        <div className="flex flex-wrap items-center justify-around h-full">
          <Image src={images.google} alt="google" width={146} height={51} />
          <Image src={images.forbes} alt="forbes" width={129} height={32} />
          <Image
            src={images.bloomberg}
            alt="bloomberg"
            width={226}
            height={44}
          />
          <Image
            src={images.sleepReview}
            alt="sleepReview"
            width={201}
            height={48}
          />

          <Image
            src={images.influencive}
            alt="influencive"
            width={220}
            height={48}
          />
        </div>
      </div>
*/