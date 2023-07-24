import Image from 'next/image'
import { Nunito, Inter } from 'next/font/google'
import AboutImage from "@/assets/about.png"
import { BsCheck2Circle } from "react-icons/bs"
import { IoIosArrowForward } from "react-icons/io"

const nunito = Nunito({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <section className='flex flex-col md:flex-row px-3 pt-[122px] sm:px-20 gap-[90px] cursor-default' id='about'>
      <div className='w-full h-full md:w-1/2 flex flex-col  items-center relative'>
        <Image src={AboutImage} alt='aboutImage' className='object-fill w-full h-full' />
      </div>
      <div className={`w-full flex flex-col justify-center items-center md:items-start md:w-1/2 ${nunito.className} `}>
        <h2 className='font-extrabold text-secondary text-[45px] leading-[60px]'>About Us</h2>
        <p className='max-w-[511px] font-medium text-[22px] leading-8 text-content pt-[15px] text-center sm:text-left'>Pet House & Animal clinic was established with
          moto to provide qualitative and affordable animal healthcare service to your doorstep.</p>
        <ul className='w-full py-[50px]'>
          <li className='text-[18px] leading-8 font-semibold text-content'><BsCheck2Circle className='text-primary text-sm inline-block mr-[18px]' />Comprehensive</li>
          <li className='text-[18px] leading-8 font-semibold text-content'><BsCheck2Circle className='text-primary text-sm inline-block mr-[18px]' />Professional</li>
          <li className='text-[18px] leading-8 font-semibold text-content'><BsCheck2Circle className='text-primary text-sm inline-block mr-[18px]' />Compassionate veterinary service.</li>
        </ul>
        <div className={`flex justify-between items-center w-40 bg-primary h-[50px] rounded-[25px] text-white ${inter.className} cursor-pointer`}><p className='ml-[25px]'>Contact</p><IoIosArrowForward className='bg-white text-primary h-8 w-8 rounded-full mr-[9px]' /></div>
      </div>
    </section>
  )
}