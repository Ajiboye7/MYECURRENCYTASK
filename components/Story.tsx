import React from 'react';
import Image from 'next/image';
import images from '@/constants/images';
import icons from '@/constants/icons';

const Story = () => {
  return (
    
      
    <section className='flex justify-between mt-32 w-[1109px] h-[455px] mx-auto'>
        <div className='w-[475px] h-[366px]'>
            <p className='text-[14px] font-normal leading-[21px] text-primary'>Our Amazing Story</p>
            <p className='text-[36px] font-bold leading-[46px] text-primary'>10k+Happy Customers</p>
            <p className='text-[16px] font-normal leading-[26px] text-secondary'>There’s no secret sauce, no wizard behind the curtain. What makes Aerolab tick is an interdisciplinary team with a framework that fosters candid collaboration.</p>
            <p className='text-[16px] font-normal leading-[24px] text-primary'>Know More About us</p>
        </div>

        <div className='w-[474px] h-[455px]'>
            <p className='text-[24px] font-normal leading-[40px] text-secondary-custom'>I’m a very anxious person but use this and feel so relaxed and sleep way better now with the aid of sleepstiq. </p>
            <div className='flex'>
                <div className=''>
                    <Image 
                    src={images.profilePic}
                    alt='profilepics'
                    width={84}
                    height={84}
                    className='rounded-full'
                    />
                </div>
                <p className='text-[22px] font-bold leading-[33px] text-secondary-custom'>James Miller</p>
                <p className='text-[16px] font-normal leading-[24px] text-tertiary'>CEO, Techbias</p>
                <div></div>
                <div></div>
            </div>
        </div>
    </section>
  );
}

export default Story;
