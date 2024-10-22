import React from "react";
import { ProductReviews as ReviewData } from "@/constants";
import Image from "next/image";
import images from "@/constants/images";
import icons from "@/constants/icons";

const ProductReview = () => {
  return (
    <section className="mt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <p className="text-[28px] sm:text-[36px] font-bold text-secondary-custom mb-10">
          Product Review
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 justify-items-center">
          {ReviewData.map((review) => (
            <div
              key={review.id}
              className="w-[280px] sm:w-[306px] h-auto bg-sponsorBg rounded-[8px] shadow-2xl py-8 px-5"
            >
              <div className="flex flex-col justify-between h-full">
                <div>
                  <Image
                    src={images.product1}
                    alt="pen"
                    width={306}
                    height={210}
                    className="object-cover"
                  />

                  <p className="text-[16px] italic font-normal leading-[26px] text-secondary-custom mt-4">
                    {review.review}
                  </p>
                </div>
                <div className="flex flex-col gap-3 mt-4">
                  <p className="text-[16px] font-bold leading-[24px] text-secondary-custom">
                    {review.name}
                  </p>

                  <div className="flex gap-1">
                    <Image src={icons.star} alt="star" width={12} height={12} />
                    <Image src={icons.star} alt="star" width={12} height={12} />
                    <Image src={icons.star} alt="star" width={12} height={12} />
                    <Image src={icons.star} alt="star" width={12} height={12} />
                    <Image src={icons.star} alt="star" width={12} height={12} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductReview;
