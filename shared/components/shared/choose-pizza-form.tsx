'use client';

import { cn } from '@/shared/lib/utils';
import React from 'react';
import { Title } from './title';
import { Button } from '../ui';
import { GroupVariants } from './group-variants';
import { PizzaSize, pizzaSizes, PizzaType } from '@/shared/constants/pizza';
import { PizzaImage } from './product-image';

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
  const [size, setSize] = React.useState<PizzaSize>(30);
  const [type, setType] = React.useState<PizzaType>(1);

  const textDetails = '30 cm, traditional dough';
  const price = 4.99;

  return (
    <div className={cn(className, 'flex flex-1')}>
      <PizzaImage imageUrl={imageUrl} size={size} />

      <div className='w-[490px] bg-[#f7f6f5] p-7'>
        <Title text={name} size='md' className='font-extrabold mb-1' />

        <p className='text-gray-400'>{textDetails}</p>

        <GroupVariants items={pizzaSizes} value={String(size)} onClick={value => setSize(Number(value) as PizzaSize)} />

        <Button className='h-[55px] px-10 text-base rounded-[18px] w-full mt-10'>
          Add to cart, {price}$
        </Button>
      </div>
    </div>
  );
};