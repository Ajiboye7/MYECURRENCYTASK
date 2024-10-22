import React from 'react';
import Image from 'next/image';
import images from '@/constants/images';
import icons from '@/constants/icons';
icons

const Footer = () => {
  return (
    <footer className="bg-footerBg">
      {/* Image at the top */}
      <div className="flex justify-center mb-6">
        <Image src={icons.navLogo} alt="Footer Image" width={150} height={100} />
      </div>

      <div className="max-w-[1440px] mx-auto flex flex-wrap justify-between px-4">
        {/* Company section */}
        <div className="flex-1 mb-6">
          <h2 className="text-[16px] font-bold text-white leading-[38px]">COMPANY</h2>
          <ul className="mt-2">
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>Jobs</li>
          </ul>
        </div>

        {/* Contact section */}
        <div className="flex-1 mb-6">
          <h2 className="text-lg font-bold">CONTACT</h2>
          <ul className="mt-2">
            <li>Phone</li> 
            <li className=''>+234 708 507 3128</li>
            <li>Address</li>
             <li>16, Ogindipe Close</li>
          </ul>
        </div>

        {/* Consumer Advisory section */}
        <div className="flex-1 mb-6">
          <h2 className="text-lg font-bold">Consumer Advisory</h2>
          <p className="mt-2">
          These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. This product should be used only as directed on the label. All trademarks and copyrights are property of their respective owners and not affiliated with nor do they endorse this product. Results may vary.
          </p>
          <p className="text-sm  mt-2 cursor-pointer">By using our website or product, you agree to follow our terms of service.</p>
        </div>

        {/* Get in Touch section with left border */}
        <div className="flex-1 mb-6 border-l-2 border-gray-300 pl-4">
          <h2 className="text-lg font-bold">Get In Touch</h2>
          <p className="mt-2">Feel free to get in touch with us vai email</p>
          <p>hello@sleepstiq.com</p>
          <div className="flex gap-2 mt-2">
            
          </div>
          <p className="mt-2 text-sm text-gray-500">© 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
