import React from "react";
import Navbar from "./Navbar";
import CustomButton from "./CustomButton";

const Hero = () => {
  return (
    <section className="bg-hero-bg bg-cover bg-center h-[90vh] w-full">
      <div className="w-full flex h-full">
        <div className="container mx-auto mt-72 ">
          <p className="text-[18px] font-normal text-primary">
            We are here to help you
          </p>
          <p className="mt-4 text-[60px] font-bold text-primary">
            Relax & Rest
          </p>
          <p className="text-[16px] font-normal leading[20px] text-primary">
            With the aid of our Melatonin Sleepstiq, we can assure you that you
            can <br /> get quality sleep.
          </p>
        </div>
       
      </div>

      <div>
        <CustomButton
        title="Visit Shop"
        />
      </div>
    </section>
  );
};

export default Hero;
