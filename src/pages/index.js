import Image from 'next/image'
import { Nunito, Inter } from 'next/font/google'


import Banner from '@/components/Banner';
import About from '@/components/About';


const nunito = Nunito({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })

export default function Home() {



  return (
    <main>
      <Banner />
      <About />
    </main>
  )
}
