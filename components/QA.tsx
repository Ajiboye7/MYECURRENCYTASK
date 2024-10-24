"use client";
import React, { useState } from "react";
import { FaqData } from "@/constants";

const QA = () => {
  const [openQuestion, setOpenQuestion] = useState(null);
  const toggleAnswer = (id: any) => {
    if (openQuestion === id) {
      setOpenQuestion(null);
    } else {
      setOpenQuestion(id);
    }
  };

  return (
    <section className="w-full mt-20  lg:pl-20">
      <div className="flex flex-col lg:flex-row  px-4 lg:px-0 mx-10 max-w-[1240px]">
        <div className="flex-none w-[212px] h-[181px] space-y-4">
          <p className="font-bold cursor-pointer">Sleepstiq Product</p>
          <p className="font-bold cursor-pointer">Order</p>
          <p className="font-bold cursor-pointer">Melatonin</p>
        </div>

        <div className="flex-grow max-w-[912px] mx-auto lg:mx-0">
          {FaqData.map((faq, index) => (
            <div
              key={faq.id}
              className={`mb-5 border-t border-borderColor ${
                index === FaqData.length - 1
                  ? "border-b border-borderColor"
                  : ""
              }`}
            >
              <p
                className="cursor-pointer font-normal text-primary text-[15px] sm:text-[18px] lg:text-[18px] mb-2 pt-4"
                onClick={() => toggleAnswer(faq.id)}
              >
                {faq.que}
              </p>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openQuestion === faq.id
                    ? "max-h-[1000px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-[14px] sm:text-[16px] lg:text-[16px] text-black pb-4 leading-[24px]">
                  {faq.ans}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QA;
