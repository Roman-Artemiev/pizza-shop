import React from 'react';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
  imageUrl: string;
  size: 20 | 30 | 40;
}

export const PizzaImage: React.FC<Props> = ({ className, imageUrl, size }) => {
  return (
    <div className={cn("flex items-center justify-center flex-1 relative w-full", className)}>
      <img
        src={imageUrl}
        alt='Logo'
        className={cn('relative left-2 top-2 transition-all z-10 duration-300', {
          'w-[300px] h-[300px]': size === 20,
          'w-[400px] h-[400px]': size === 30,
          'w-[500px] h-[500px]': size === 40,
        })}
      />

      <div className='absolute border-dashed border-2 rounded-full border-gray-200 w-[450px] h-[450px]'></div>
      <div className='absolute border-dashed border-2 rounded-full border-gray-200 w-[370px] h-[370px]'></div>
    </div>
  );
};