import React from 'react';
import { CustomButtonProps } from '@/types';

const CustomButton = ({title}: CustomButtonProps) => {
  return (
    <div>
      <button type='submit' className='bg-primary'>
        {title}
      </button>
    </div>
  );
}

export default CustomButton;
