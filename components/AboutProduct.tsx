'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import images from '@/constants/images';
import CustomButton from './CustomButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';

const AboutProduct = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <section className="mt-10">
      <div className="mx-auto max-w-[1101px] flex flex-col lg:flex-row items-center gap-16 px-4 lg:px-0 border-b border-gray-300 pb-8">
        {/* Left side with image and text below it */}
        <div className="relative w-full lg:w-[775px] h-auto lg:h-[580px]">
          <Image
            src={images.product2}
            alt="vape pen"
            width={735}
            height={580}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right side with text and button */}
        <div className="w-full lg:w-[453px] text-center lg:text-left">
          <p className="text-[24px] lg:text-[32px] font-bold mb-4">Shop Now</p>
          <p className="text-[16px] lg:text-[18px] font-normal">
            Our Personal Diffuser is an aromatherapy device that contains a
            blend of melatonin, lavender, and chamomile. A few breaths of our
            plant-based essential oil mist will mellow you out, quiet the mind,
            and lull you to bed.
          </p>

          {/* Product info section */}
          <div className="w-full lg:w-[453px] my-5 h-auto bg-sponsorBg rounded-md">
            <p className="text-[14px] lg:text-[16px] font-medium mb-2">
              <span className="mr-2">😊</span>Promotes calm and relaxation
            </p>
            <p className="text-[14px] lg:text-[16px] font-medium mb-2">
              <span className="mr-2">💤</span>Inhalation allows for a rapid
              effect.
            </p>
            <p className="text-[14px] lg:text-[16px] font-medium mb-2">
              <span className="mr-2">✅</span>100% drug-free, plant-based
              ingredients.
            </p>
            <p className="text-[14px] lg:text-[16px] font-medium">
              <span className="mr-2">‍⚕️</span>3rd-party lab tested.
            </p>
          </div>

          {/* Counter and Price */}
          <div className="w-full flex flex-col gap-4 my-5 lg:items-start items-center">
            <div className="w-[190px] flex flex-col gap-1">
              <div className="flex items-center justify-between pr-7">
                <p className="text-[16px] font-normal leading-[26px]">Price</p>
                <p className="text-[16px] font-normal leading-[26px]">Unit</p>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-[16px] font-bold text-primary">USD 50</p>

                {/* Counter with arrows */}
                <div className="relative flex items-center justify-between w-[63px] h-[33px] border border-primary rounded-md">
                  <div className="absolute top-1 right-0 mr-2">
                    <button
                      onClick={increment}
                      className="flex items-center justify-center w-[4px] h-[6px]"
                    >
                      <FontAwesomeIcon
                        icon={faCaretUp}
                        className="text-primary"
                      />
                    </button>
                  </div>

                  <span className="text-[16px] font-bold text-center text-primary ml-4">
                    {count}
                  </span>
                  <div className="absolute bottom-2 right-0 mr-2">
                    <button
                      onClick={decrement}
                      className="flex items-center justify-center w-[4px] h-[6px]"
                    >
                      <FontAwesomeIcon
                        icon={faCaretDown}
                        className="text-primary"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Buy Button */}
          <div className="flex justify-center lg:justify-start mt-10">
            <CustomButton title="Buy" />
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default AboutProduct;
