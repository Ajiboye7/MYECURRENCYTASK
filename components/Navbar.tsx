import React from 'react';
import Image from 'next/image';
import icons from '@/constants/icons';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className=' absolute top-0 left-0 w-full'>
        <div className='flex items-center justify-start z-10 gap-36 mt-3 w-[1276px] mx-auto'>
        <div>
        <Image
        src={icons.footerLogo}
        alt='navLogo'
        width={57.01}
        height={17.49}
        />
        <p className='text-primary font-semibold'>Sleepstiq</p>
      </div>

      <div className='flex items-center gap-14'>
        <Link href='/' className='nav-link font-bold'>Home</Link>
        <Link href='/about' className='nav-link font-normal'>About</Link>
        <Link href='/shop' className='nav-link font-normal'>Shop</Link>
        <Link href='/faqs' className='nav-link font-normal'>FAQs</Link>
      </div>
        </div>
      
    </nav>
  );
}

export default Navbar;