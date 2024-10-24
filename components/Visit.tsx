import React from 'react';
import CustomButton from './CustomButton';

const Visit = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-[920px] w-full mx-auto text-center px-4 sm:px-6 lg:px-8 mt-20 border-b border-gray-300 pb-28">
      <p className="text-[28px] sm:text-[36px] font-bold leading-[40px] sm:leading-[74px] text-primary mb-6">
        Visit Our Shop
      </p>
      <p className="text-[14px] sm:text-[16px] font-normal leading-[22px] sm:leading-[26px] text-secondary mb-8">
        Our Personal Diffuser is an aromatherapy device that contains a blend of melatonin, lavender, and chamomile. 
        A few breaths of our plant-based essential oil mist will mellow you out, quiet the mind, and lull you to bed.
      </p>
      <CustomButton title="Visit Shop"
      link='/shop'
       />
    </div>
  );
};

export default Visit;
