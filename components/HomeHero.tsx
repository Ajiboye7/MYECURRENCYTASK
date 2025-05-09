import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";
import images from "@/constants/images";

const Hero = () => {
  return (
    <section className="bg-hero-bg bg-cover bg-center h-[90vh] w-full">
      <div className=" flex w-full h-full px-5">
        <di our Melatonin Sleepstiq, we can assure you that you
            can
            <br /> get quality sleep.
          </p>

          <div className="mt-7">
            <CustomButton title="Visit Shop" link="/shop" />
          </div>
        </div>
      </div>

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
