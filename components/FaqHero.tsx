import SearchInput from '@/components/SearchInput';
import React from 'react';

const FaqHero = () => {
  return (
    <section className="bg-cardBg  bg-cover bg-center h-[60vh] w-full">
       <div className=" flex w-[200px]sm:w-full h-full mx-4">
        <div className="container mx-auto mt-72 ">
          <p className="text-[18px] font-normal text-primary">
            We are here to help you
          </p>
          <p className="mt-4 text-[30px] sm:text-[50px] md:text-[60px] font-bold text-primary">
            How can we assist ?
          </p>
          <div className="mt-7">
            <SearchInput/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqHero;
