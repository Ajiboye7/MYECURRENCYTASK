/*import React from "react";
import { TestimoniesData } from "@/constants";
import Image from "next/image";
import icons from "@/constants/icons";

const Testimonies = () => {
  return (
    <section className="max-w-[1302px] mx-auto mt-40 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-16 justify-items-center">
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

export default Testimonies;*/

import React from 'react';
import { TestimoniesData } from '@/constants';
import Image from 'next/image';
import icons from '@/constants/icons';

const Testimonies = () => {
  return (
    <section className="max-w-[1302px] mx-auto mt-40 px-4 sm:px-6 lg:px-8 border-b border-gray-300 pb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-16 justify-items-center">
        {TestimoniesData.map((testimony) => (
          <div
            key={testimony.id}
            className="w-[306px] h-auto bg-cardBg px-3 pt-5 pb-8 rounded-md cardHover"
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

