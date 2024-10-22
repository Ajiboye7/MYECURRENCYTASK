import React from "react";
import { TestimoniesData } from "@/constants";
import Image from "next/image";
import icons from "@/constants/icons";
import { TestimonyProps } from "@/types";

const Testimonies = () => {
  return (
    <section className="max-w-[1302px] mx-auto mt-40">
      <div className="flex items-center justify-between gap-6">
        {TestimoniesData.map((testimony) => (
          <div
            key={testimony.id}
            className="w-[306px] h-[202px] bg-cardBg px-3 pt-5 pb-8 rounded-md cardHover"
          >
            <div className="flex flex-col justify-between h-full">
              <p className="text-[16px] font-normal italic leading-[26px] text-secondary-custom">
                {testimony.testimony}
              </p>

              <div className="flex flex-col gap-3">
                <p className="text-[16px] font-bold leading-[24px]">
                  {testimony.name}
                </p>

                <div className="flex gap-1">
                  <Image src={icons.star} alt="star" width={12} height={12} />
                  <Image src={icons.star} alt="star" width={12} height={12} />
                  <Image src={icons.star} alt="star" width={12} height={12} />
                  <Image src={icons.star} alt="star" width={12} height={12} />
                  <Image src={icons.star} alt="star" width={12} height={12} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonies;
