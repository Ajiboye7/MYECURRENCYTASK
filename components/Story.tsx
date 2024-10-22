import React from 'react';
import Image from 'next/image';
import images from '@/constants/images';

const Story = () => {
  return (
    <section className='w-full mt-32 px-4'>
      <div className='container mx-auto max-w-[1109px] flex flex-col lg:flex-row justify-between h-auto lg:h-[455px]'>
        
        {/* Left Section */}
        <div className='w-full lg:w-[475px] h-auto lg:h-[366px] flex flex-col justify-center'>
          <p className='text-[14px] font-normal leading-[21px] text-primary'>Our Amazing Story</p>
          <p className='text-[36px] font-bold leading-[46px] text-primary mt-4'>10k+ Happy Customers</p>
          <p className='w-full lg:w-[475px] text-[16px] font-normal leading-[26px] text-secondary mt-4'>
            There’s no secret sauce, no wizard behind the curtain. What makes Aerolab tick is an interdisciplinary team with a framework that fosters candid collaboration.
          </p>
          <p className='text-[16px] font-normal leading-[24px] text-primary mt-6'>Know More About Us</p>
        </div>

        {/* Right Section */}
        <div className='w-full lg:w-[475px] h-auto lg:h-[455px] bg-cardBg flex flex-col px-6 py-10 justify-between mt-8 lg:mt-0'>
          <p className='text-[24px] font-normal leading-[40px] text-secondary-custom'>
            I’m a very anxious person but use this and feel so relaxed and sleep way better now with the aid of Sleepstiq.
          </p>
          
          <div className='flex gap-8 items-center'>
            <Image 
              src={images.profilePic}
              alt='profilepics'
              width={84}
              height={84}
              className='rounded-full'
            />
            <div className='flex flex-col gap-3'>
              <p className='text-[22px] font-bold leading-[33px] text-secondary-custom'>James Miller</p>
              <p className='text-[16px] font-normal leading-[24px] text-tertiary'>CEO, Techbias</p>
              <div className='flex gap-3 items-center mt-4'>
                <div className='w-[10px] h-[10px] bg-circleBg rounded-full'></div>
                <div className='w-[10px] h-[10px] bg-circleBg rounded-full'></div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default Story;
