'use client';

import { cn } from '@/lib/utils';
import React from 'react';
import { ProductImage } from './product-image';
import { Title } from './title';
import { Button } from '../ui';

interface Props {
  imageUrl: string;
  name: string;
  // items?: Product['ingredients'];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ingredients: any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
  const price = 499;

  return (
    <div className={cn(className, 'flex flex-1')}>
      {/* <ProductImage imageUrl={imageUrl} size={30} />

      <div className='w-[490px] bg-[#f7f6f5] p-7'>
        <Title text={name} size='md' className='font-extrabold mb-1' />

        <p className='text-gray-400'>{textDetails}</p>

        <Button className='h-[55px] px-10 text-base rounded-[18px] w-full'>
          Add to cart, {price}$
        </Button>
      </div> */}
    </div>
  );
};