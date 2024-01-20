import Image from 'next/image'
import { Nunito, Inter, DM_Sans } from 'next/font/google'
import Gallery1 from "@/assets/gallery1.png"
import Gallery2 from "@/assets/gallery2.png"
import Gallery3 from "@/assets/gallery3.png"
import Gallery4 from "@/assets/gallery4.png"
import Facebook from "@/assets/facebook.png"
import Twitter from "@/assets/twitter.png"
import Instagram from "@/assets/instagram.png"
import Linkedin from "@/assets/linkedin.png"
import Youtube from "@/assets/youtube.png"
import Link from 'next/link';

const nunito = Nunito({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })
const dmSans700 = DM_Sans({ subsets: ['latin'], weight: '700' })
const dmSans400 = DM_Sans({ subsets: ['latin'], weight: '400' })

export default function Footer() {
    return (
        <footer className='bg-secondary mt-[122px] pt-[76px] pb-[90px] cursor-default' id='footer'>
            <div className='px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[50px] lg:gap-0'>
                <div className='pt-[46px] flex flex-col items-center sm:items-start'>
                    <div className='text-white w-[153px]'>
                        <h2 className={`uppercase text-center ${inter.className} text-2xl  font-bold`}><Link href={"/"}>Your Logo Here</Link></h2>
                    </div>
                    <ul className={`text-normal mt-[88px] text-lg leading-[33px]  flex flex-col gap-[39px]`}>
                        <li className={`${dmSans400.className}`}>Phone Number: <br /><a href="tel:+98xxxxxxxx" className={`${dmSans700.className} text-xl leading-5`}>+977-98xxxxxxxx</a></li>
                        <li className={`${dmSans400.className}`}>Location: <br /><span className={`${dmSans700.className} text-xl leading-5`}>Kathmandu</span></li>
                    </ul>
                </div>
                <div>
                    <p className={`${nunito.className} font-medium text-lg leading-[30px] text-normal text-center sm:text-left`}>&quot;City Pet House & Animal Clinic: Quality and affordable animal care at your doorstep. Comprehensive, professional, and compassionate veterinary services by our dedicated and experienced team.&quot;</p>
                </div>
                <div className='text-normal  flex justify-center sm:justify-start md:justify-center'>
                    <div>
                        <h2 className={`${dmSans700.className} text-xl leading-5 mb-10`}>Menu</h2>
                        <nav>
                            <ul className={`flex flex-col gap-[18px] ${dmSans400.className} text-lg leading-[18px]`}>
                                <li className='cursor-pointer'><Link href={"/"}>Home</Link></li>
                                <li className='cursor-pointer'><Link href={"#about"}>About</Link></li>
                                <li className='cursor-pointer'><Link href={"#service"}>Services</Link></li>
                                <li className='cursor-pointer'><Link href={"#breed"}>Breeds</Link></li>
                                <li className='cursor-pointer'>Shop</li>
                                <li className='cursor-pointer'>Contact</li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div id='gallery'>
                    <h2 className={`${dmSans700.className} text-xl leading-5 text-normal w-full sm:w-1/2 text-center`}>Gallery</h2>
                    <div className='grid grid-cols-2 gap-[15px] mt-[31px]'>
                        <Image src={Gallery1} alt='galleryImage' className='w-full h-full' />
                        <Image src={Gallery2} alt='galleryImage' className='w-full h-full' />
                        <Image src={Gallery3} alt='galleryImage' className='w-full h-full' />
                        <Image src={Gallery4} alt='galleryImage' className='w-full h-full' />
                    </div>
                </div>
            </div>
            <hr className='mt-[90px] mb-[17px] border border-[#D4D2E3] md:ml-[125px]' />
            <div className={`text-normal mt-[34px]  mx-3 md:mx-0 md:mr-20 md:ml-[131px] ${dmSans400.className} text-lg leading-[18px] flex flex-col lg:flex-row items-center gap-8 justify-between`}>
                <p className='text-center'>Copyright © 2023 City Pet House & Animal Clinic | All Rights Reserved</p>
                <div className='flex gap-[15px]'>
                    <Link href={"#"}><Image src={Facebook} alt='facebook' className='w-[33px] h-[35px]' /></Link>
                    <Link href={"#"}><Image src={Twitter} alt='twitter' className='w-[33px] h-[35px]' /></Link>
                    <Link href={"#"}><Image src={Instagram} alt='instagram' className='w-[33px] h-[35px]' /></Link>
                    <Link href={"#"}><Image src={Linkedin} alt='linkedin' className='w-[33px] h-[35px]' /></Link>
                    <Link href={"#"}><Image src={Youtube} alt='youtube' className='w-[33px] h-[35px]' /></Link>
                </div>
            </div>
        </footer>
    )
}