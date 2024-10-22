import React from 'react';
import { CustomButtonProps } from '@/types';

const CustomButton = ({ title }: CustomButtonProps) => {
  return (
    <div>
      <button 
        type="submit" 
        className="w-[225px] h-[50px] text-white bg-btnBg rounded-[5px] transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-btnHover shadow-lg"
      >
        {title}
      </button>
    </div>
  );
};

export default CustomButton;
