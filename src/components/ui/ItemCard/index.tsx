import { CaretRight } from '@phosphor-icons/react';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Montserrat } from 'next/font/google';
import { formatPrice } from '@/utils/formatPrice';

const montserrat = Montserrat({ subsets: ['latin'] });

type ItemCardProps = {
  item: ProductItem,
}

export function ItemCard({ item }: ItemCardProps) {
  const [isLiked, setIsLiked] = useState(false)

  return (
    <article className='w-fit' >
      <div className='relative w-fit' >
        <button
          className={clsx('absolute top-2 right-2', isLiked ? 'text-red-600' : 'text-gray-800')}
          onClick={() => setIsLiked(!isLiked)}
        >
          {isLiked ? <HeartFilled width={24} height={24} /> : <HeartOutline width={24} height={24} />}
        </button>

        <Image
          className='rounded'
          src={item.image}
          alt={item.name}
          width={264}
          height={264}
        />
      </div>

      <h2 className={clsx('block text-xl mt-2', montserrat.className)}>
        {item.name}
      </h2>

      <span className={clsx('block text-lg font-bold mt-2', montserrat.className)}>
        {formatPrice(item.price)}
      </span>

      <Link
        className={clsx('w-fit flex items-center text-violet-800 gap-x-2 text-sm mt-2 rounded focus:outline-none focus:ring-4 focus:ring-violet-400', montserrat.className)}
        href='/'
      >
        Show more
        <CaretRight />
      </Link>
    </article>
  );
}

type IconProps = {
  width: number;
  height: number;
  className?: string;
} & React.HTMLAttributes<SVGSVGElement>;

const HeartOutline = ({ width = 24, height = 24, ...props }: IconProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={width}
    height={height}
    viewBox='0 0 32 32'
    fill='none'
    {...props}
  >
    <path
      fill='currentColor'
      d='M22.25 4C19.669 4 17.409 5.11 16 6.986 14.591 5.11 12.331 4 9.75 4A7.759 7.759 0 0 0 2 11.75c0 8.75 12.974 15.832 13.526 16.125a1 1 0 0 0 .948 0C17.026 27.582 30 20.5 30 11.75A7.759 7.759 0 0 0 22.25 4ZM16 25.85c-2.283-1.33-12-7.389-12-14.1A5.757 5.757 0 0 1 9.75 6c2.431 0 4.473 1.295 5.325 3.375a1 1 0 0 0 1.85 0C17.777 7.291 19.819 6 22.25 6A5.757 5.757 0 0 1 28 11.75c0 6.701-9.72 12.769-12 14.1Z'
    />
  </svg>
);

const HeartFilled = ({ width = 24, height = 24, ...props }: IconProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={width}
    height={height}
    viewBox='0 0 32 32'
    fill='none'
    {...props}
  >
    <path
      fill='currentColor'
      d='M22.25 4C19.669 4 17.409 5.11 16 6.986 14.591 5.11 12.331 4 9.75 4A7.759 7.759 0 0 0 2 11.75c0 8.75 12.974 15.832 13.526 16.125a1 1 0 0 0 .948 0C17.026 27.582 30 20.5 30 11.75A7.759 7.759 0 0 0 22.25 4Z'
    />
  </svg>
);
