import Image from 'next/image';
import Link from 'next/link';

import { ShoppingCart } from '@phosphor-icons/react';
import { CartPopoverWrapper } from './components/CartPopover';

export function Header() {
  return (
    <header className='w-full bg-violet-600 py-4' >
      <div className='w-full max-w-4xl mx-auto px-4 flex justify-between items-center'>
        <Link
          className='focus:outline-none focus:ring-4 focus:ring-violet-400 rounded'
          href='/'
        >
          <Image
            src='./logo.svg'
            alt='Shoes'
            width={140}
            height={32}
          />
        </Link>

        <CartPopoverWrapper>
          <button className='w-fit p-2 flex items-center gap-x-2 rounded text-gray-50 bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:ring-violet-400 focus:outline-none transition'>
            <ShoppingCart size={24} />
            <span>0 Items</span>
          </button>
        </CartPopoverWrapper>
      </div>
    </header>
  )
}