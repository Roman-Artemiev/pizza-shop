'use client';

import { cn } from '@/lib/utils';
import React from 'react';
import { PizzaImage } from './product-image';
import { Title } from './title';
import { Button } from '../ui';

interface Props {
  imageUrl: string;
  name: string;
  ingredients: any[];
  items?: any[];
  className?: string;
}

export const ChoosePizzaForm: React.FC<Props> = ({ className,
  imageUrl,
  name,
  ingredients,
  items,
 }) => {
  const textDetails = '30 cm, traditional dough';
  const price = 4.99;
  const size = 30;

  return (
    <div className={cn(className, 'flex flex-1')}>
      <PizzaImage imageUrl={imageUrl} size={size} />

      <div className='w-[490px] bg-[#f7f6f5] p-7'>
        <Title text={name} size='md' className='font-extrabold mb-1' />

        <p className='text-gray-400'>{textDetails}</p>

        <Button className='h-[55px] px-10 text-base rounded-[18px] w-full mt-10'>
          Add to cart, {price}$
        </Button>
      </div>
    </div>
  );
};