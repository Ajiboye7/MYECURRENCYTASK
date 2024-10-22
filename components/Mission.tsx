/*import React from 'react';
import Image from 'next/image';
import images from '@/constants/images';

const Mission = () => {
  return (
    <section>
        <div className='max-w-[1268px] h-[550px]'>
            <div className='w-[475px] h-[397px]'>
                <p className='text-[36px] font-bold leading-[48px] text-primary'>Our Mission</p>
                <p className='text-[16px] font-normal leading-[26px] text-secondary'>We started Sleepstiq with 1 simple goal: to be your best friend at bedtime. We, just like you, deal with stress, unease, and trouble sleeping from a number of silly things like school, work, screens, numbers, and people. That's why we created products that aim to - </p>

                <p className='text-[16px] font-normal leading-[26px] text-secondary'><span>✓</span> Promote Calm </p>
                <p className='text-[16px] font-normal leading-[26px] text-secondary'><span>✓</span> Support Sleep  </p>
                <p className='text-[16px] font-normal leading-[26px] text-secondary'><span>✓</span> Reduce Stress </p>
                <p className='text-[16px] font-normal leading-[26px] text-secondary'><span>✓</span> Aid Relaxation </p>
            </div>

            <Image
            src={images.missionBg}
            alt='mission'
            width={735}
            height={550}
            className='w-[735px] h-[550px]'

            />
        </div>
    </section>
  );
}

export default Mission;*/
import React from 'react';
import Image from 'next/image';
import images from '@/constants/images';

const Mission = () => {
  return (
    <section className="mt-10">
      {/* Add horizontal padding to ensure no content touches the edges of the screen */}
      <div className="max-w-[1268px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left side with text */}
          <div className="w-full lg:w-[475px] h-auto lg:h-[397px]">
            <p className="text-[28px] lg:text-[36px] font-bold leading-[40px] lg:leading-[48px] text-primary mb-4">
              Our Mission
            </p>
            <p className="text-[14px] lg:text-[16px] font-normal leading-[22px] lg:leading-[26px] text-secondary mb-4">
              We started Sleepstiq with 1 simple goal: to be your best friend at bedtime. We, just like you, deal with stress, unease, and trouble sleeping from a number of silly things like school, work, screens, numbers, and people. That's why we created products that aim to:
            </p>

            {/* Mission bullet points */}
            <div className="space-y-2">
              <p className="text-[14px] lg:text-[16px] font-normal leading-[22px] lg:leading-[26px] text-secondary">
                <span>✓</span> Promote Calm
              </p>
              <p className="text-[14px] lg:text-[16px] font-normal leading-[22px] lg:leading-[26px] text-secondary">
                <span>✓</span> Support Sleep
              </p>
              <p className="text-[14px] lg:text-[16px] font-normal leading-[22px] lg:leading-[26px] text-secondary">
                <span>✓</span> Reduce Stress
              </p>
              <p className="text-[14px] lg:text-[16px] font-normal leading-[22px] lg:leading-[26px] text-secondary">
                <span>✓</span> Aid Relaxation
              </p>
            </div>
          </div>

          {/* Right side with image */}
          <div className="w-full lg:w-[735px] h-auto lg:h-[550px]">
            <Image
              src={images.missionBg}
              alt="mission"
              width={735}
              height={550}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;

