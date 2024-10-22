import React from 'react';
import Image from 'next/image';
import images from '@/constants/images';

const Story = () => {
  return (
    <section className="mt-32 px-4">
      {/* Container with margin and padding for spacing */}
      <div className="mx-auto max-w-[1109px] flex flex-col lg:flex-row justify-between gap-8 h-auto lg:h-[455px] px-4 md:px-0">
        
        {/* Left Section with reduced width and spacing */}
        <div className="w-full lg:w-[55%] h-auto lg:h-[366px] flex flex-col justify-center">
          <p className="text-[14px] font-normal leading-[21px] text-primary">Our Amazing Story</p>
          <p className="text-[28px] lg:text-[36px] font-bold leading-[38px] lg:leading-[46px] text-primary mt-4 mb-6 lg:mb-10">10k+ Happy Customers</p>
          <p className="text-[15px] lg:text-[16px] font-normal leading-[24px] lg:leading-[26px] text-secondary mt-4">
            There’s no secret sauce, no wizard behind the curtain. What makes Aerolab tick is an interdisciplinary team with a framework that fosters candid collaboration.
          </p>
          <p className="text-[15px] lg:text-[16px] font-bold leading-[24px] text-primary mt-6 underline">Know More About Us</p>
        </div>

        {/* Right Section with adjusted width and proper margins */}
        <div className="flex flex-col justify-between w-full sm:w-[80%] md:w-[60%] lg:w-[475px] h-auto lg:h-[455px] bg-cardBg px-6 py-10 mt-8 lg:mt-0 shadow-2xl cardHover mx-auto">
          <p className="text-[18px] md:text-[24px] italic font-normal leading-[30px] md:leading-[40px] text-secondary-custom">
            I’m a very anxious person but use this and feel so relaxed and sleep way better now with the aid of Sleepstiq.
          </p>
          
          <div className="flex gap-8 items-center mt-6">
            <Image 
              src={images.profilePic}
              alt="profilepic"
              width={84}
              height={84}
              className="rounded-full"
            />
            <div className="flex flex-col gap-3">
              <p className="text-[18px] md:text-[22px] font-bold leading-[28px] md:leading-[33px] text-secondary-custom">James Miller</p>
              <p className="text-[14px] md:text-[16px] font-normal leading-[20px] md:leading-[24px] text-tertiary">CEO, Techbias</p>
              <div className="flex gap-3 items-center mt-4">
                <div className="w-[10px] h-[10px] bg-circleBg rounded-full"></div>
                <div className="w-[10px] h-[10px] bg-circleBg rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default Story;
