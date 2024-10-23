import React from "react";
import Image from "next/image";
import icons from "@/constants/icons";

const Footer = () => {
  return (
    <footer className="bg-footerBg py-10 px-10">
      <div className="flex justify-center mb-6">
        <Image
          src={icons.navLogo}
          alt="Footer Image"
          width={150}
          height={100}
        />
      </div>

      <div
        className="max-w-[1325px] mx-auto sm:grid gap-8 px-4 sm:px-6 lg:px-8"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        }}
      >
        <div className="mb-6">
          <p className="text-[16px] font-bold text-white leading-[38px]">
            COMPANY
          </p>
          <ul className="mt-2">
            <li className="text-[16px] font-normal leading-[40px] text-footerLink">
              About
            </li>
            <li className="text-[16px] font-normal leading-[40px] text-footerLink">
              Blog
            </li>
            <li className="text-[16px] font-normal leading-[40px] text-footerLink">
              Contact
            </li>
            <li className="text-[16px] font-normal leading-[40px] text-footerLink">
              Jobs
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-[16px] font-bold text-white leading-[38px]">
            CONTACT
          </h2>
          <ul className="mt-2">
            <li className="text-[16px] font-normal leading-[40px] text-footerLink">
              Phone
            </li>
            <li className="text-[16px] font-bold text-white leading-[40px]">
              +234 708 507 3128
            </li>
            <li className="text-[16px] font-normal leading-[40px] text-footerLink">
              Address
            </li>
            <li className="text-[16px] font-bold leading-[40px] text-white">
              16, Ogindipe Close, Upston Close
            </li>
          </ul>
        </div>

        <div className="mb-6" style={{ gridColumn: "span 2" }}>
          <p className="text-[16px] font-bold text-white leading-[38px]">
            CONSUMER ADVISORY
          </p>
          <p className="text-[14px] sm:text-[16px] font-normal leading-[26px] w-[280px] sm:w-[483px] text-white mt-2">
            These statements have not been evaluated by the Food and Drug
            Administration. This product is not intended to diagnose, treat,
            cure, or prevent any disease. This product should be used only as
            directed on the label. All trademarks and copyrights are property of
            their respective owners and not affiliated with nor do they endorse
            this product. Results may vary.
          </p>
          <p className="text-[16px] font-normal leading-[26px] text-white mt-2 cursor-pointer">
            By using our website or product, you agree to follow our
            <span className="text-socialBg">terms of service</span>.
          </p>
        </div>

        <div className="flex-1 w-full sm:w-auto max-w-[322px] mb-6">
          <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col gap-5 border-l-2 border-footerBorder pl-5 sm:pl-10">
              <h2 className="text-[16px] font-bold text-white leading-[38px]">
                GET IN TOUCH
              </h2>
              <p className="text-[16px] font-normal leading-[26px] text-footerLink sm:text-[14px] sm:leading-[24px]">
                Feel free to get in touch with us via email
              </p>
              <p className="text-[24px] font-bold leading-[38px] text-white">
                hello@sleepstiq.com
              </p>
              <div className="flex gap-2 mt-2">
                <div className="flex justify-center items-center bg-socialBg p-2 w-[30px] h-[30px] rounded-full">
                  <Image
                    src={icons.facebook}
                    alt="facebook"
                    width={8.68}
                    height={16.71}
                    className="rounded-full"
                  />
                </div>

                <div className="flex justify-center items-center bg-socialBg p-2 w-[30px] h-[30px] rounded-full">
                  <Image
                    src={icons.twitter}
                    alt="twitter"
                    width={15.83}
                    height={12.86}
                    className="rounded-full"
                  />
                </div>

                <div className="flex justify-center items-center bg-socialBg p-2 w-[30px] h-[30px] rounded-full">
                  <Image
                    src={icons.google}
                    alt="google"
                    width={23.14}
                    height={14.73}
                    className="rounded-full"
                  />
                </div>

                <div className="flex justify-center items-center bg-socialBg p-2 w-[30px] h-[30px] rounded-full">
                  <Image
                    src={icons.linkdin}
                    alt="linkedin"
                    width={15.43}
                    height={14.75}
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>

            <p className="mt-2 text-sm text-gray-500 sm:whitespace-nowrap w-full sm:w-auto text-center pl-10">
              © 2024 Your Company. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
