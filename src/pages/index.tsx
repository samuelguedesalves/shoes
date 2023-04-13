import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import clsx from 'clsx';

import { Header } from '../components/ui/Header';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Header />
      <main className='w-full h-screen flex flex-col items-center justify-center'>

        <h1 className={clsx('font-bold text-4xl', montserrat.className)}>Hello World!</h1>

      </main>
    </>
  )
}
