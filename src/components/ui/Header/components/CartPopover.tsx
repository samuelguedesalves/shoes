import * as Popover from '@radix-ui/react-popover';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { Plus, Minus } from '@phosphor-icons/react';

const inter = Inter({ subsets: ['latin'] });

type CartPopoverWrapperProps = {
  children: React.ReactNode,
}

export function CartPopoverWrapper({ children }: CartPopoverWrapperProps) {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        {children}
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className='drop-shadow-lg'
          sideOffset={10}
        >
          <CartPopover />
          <Popover.Arrow className='fill-gray-50' />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}

export function CartPopover() {
  return (
    <section
      className='bg-gray-50 p-4 rounded'
      role='dialog'
    >
      <h2 className='text-black font-semibold text-lg' >
        Itens do carrinho
      </h2>

      <ul role='list'>
        <li
          className='flex flex-row gap-x-3'
          role='listitem'
        >
          <Image
            className='rounded'
            src='/images/shoe.png'
            alt='Nike Air Force'
            width={78}
            height={78}
          />

          <div>
            <h3 className='text-gray-800'>Nike Air Force</h3>
            <span
              className='price text-gray-800 font-bold'
              data-currency='BRL'
              data-value='750,00'
            >
              {new Intl.NumberFormat('pt-BR', { currency: 'BRL', style: 'currency' }).format(750)}
            </span>

            <div className='flex flex-row items-center gap-x-2 p-2 bg-zinc-200 rounded w-fit'>
              <button className='p-1 shrink-0 focus:outline-none focus:ring-2 focus:ring-violet-400 rounded text-gray-900'>
                <Minus size={18} />
              </button>

              <span className='text-gray-800 text-lg'>
                {1}
              </span>

              <button className='p-1 shrink-0 focus:outline-none focus:ring-2 focus:ring-violet-400 rounded text-gray-900'>
                <Plus size={18} />
              </button>
            </div>
          </div>
        </li>
      </ul>

    </section>
  )
}