import React from 'react';
import { ProductReviews as ReviewData } from '@/constants';
import Image from 'next/image';
import images from '@/constants/images';
import icons from '@/constants/icons';

const ProductReview = () => {
  return (
   <section>
    <div>
        {ReviewData.map((review)=>(
            <div 
            key={review.id}
            >
                <div>
                    <Image
                    src={images.product2}
                    alt='pen'
                    width={306}
                    height={210}
                    />

                    <p>{review.review}</p>

                    <div className="flex flex-col gap-3">
                <p className="text-[16px] font-bold leading-[24px]">
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
   </section>
  );
}

export default ProductReview;
