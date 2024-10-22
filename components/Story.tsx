import React from 'react';
import Image from 'next/image';
import images from '@/constants/images';
import icons from '@/constants/icons';

const Story = () => {
  return (
    
      
    <section className='flex mt-32 w-[1109px] h-[455px] mx-auto'>
        <div>
            <p>Our Amazing Story</p>
            <p>10k+Happy Customers</p>
            <p>There’s no secret sauce, no wizard behind the curtain. What makes Aerolab tick is an interdisciplinary team with a framework that fosters candid collaboration.</p>
            <p>Know More About us</p>
        </div>

        <div>
            <p>I’m a very anxious person but use this and feel so relaxed and sleep way better now with the aid of sleepstiq. </p>
            <div>
                <div className='rounded-full'>
                    <Image 
                    src={images.profilePic}
                    alt='profilepics'
                    width={84}
                    height={84}
                    />
                </div>
                <p>James Miller</p>
                <p>CEO, Techbias</p>
                <div></div>
                <div></div>
            </div>
        </div>
    </section>
  );
}

export default Story;
