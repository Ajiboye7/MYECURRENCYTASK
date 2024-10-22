import React from "react";
import Image from "next/image";
import images from "@/constants/images";
import CustomButton from "./CustomButton";

const ShopNow = () => {
  return (
    <section className="mt-10">
      <div className="mx-auto max-w-[1445px] flex flex-col lg:flex-row items-center gap-16 px-4 lg:px-0">
        {/* Left side with image and text below it */}
        <div className="relative w-full lg:w-[775px] h-auto lg:h-[580px]">
          <Image
            src={images.product2}
            alt="vape pen"
            width={735}
            height={580}
            className="object-cover w-full h-full"
          />

          {/* Text below the image, positioned near the center */}
          <div className="absolute right-0 bottom-0 w-full lg:w-[453px] h-auto bg-sponsorBg p-5 rounded-md shadow-xl">
            <p className="text-[14px] lg:text-[16px] font-medium mb-2">
              <span className="mr-2">😊</span>Promotes calm and relaxation
            </p>
            <p className="text-[14px] lg:text-[16px] font-medium mb-2">
              <span className="mr-2">💤</span>Inhalation allows for a rapid effect.
            </p>
            <p className="text-[14px] lg:text-[16px] font-medium mb-2">
              <span className="mr-2">✅</span>100% drug-free, plant-based ingredients.
            </p>
            <p className="text-[14px] lg:text-[16px] font-medium">
              <span className="mr-2">‍⚕️</span>3rd-party lab tested.
            </p>
          </div>
        </div>

        {/* Right side with text and button */}
        <div className="w-full lg:w-[453px] text-center lg:text-left">
          <p className="text-[24px] lg:text-[32px] font-bold mb-4">Shop Now</p>
          <p className="text-[16px] lg:text-[18px] font-normal mb-6">
            Our Personal Diffuser is an aromatherapy device that contains a blend of melatonin, lavender, and chamomile. A few breaths of our plant-based essential oil mist will mellow you out, quiet the mind, and lull you to bed.
          </p>
          <div className="flex justify-center lg:justify-start">
            <CustomButton title="View Shop" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopNow;
