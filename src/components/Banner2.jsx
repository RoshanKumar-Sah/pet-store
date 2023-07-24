import { IoIosArrowForward } from "react-icons/io"
import { Nunito, Inter } from 'next/font/google'

const nunito = Nunito({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })

export default function () {
    return (
        <section className='rounded-3xl mx-3 bg-banner2 bg-cover mt-[122px] cursor-default'>
            <div className={`${inter.className} pt-[84px] py-[55px] pl-[69px] text-normal`}>
                <p className='font-semibold text-xl leading-8' >One More Friend Thousands More Fun!</p>
                <h2 className={` text-[34px] leading-8 font-black ${nunito.className} mt-[25px]`}>&quot;Find your furry soulmate at Our Pet Shop.&quot;</h2>
                <p className={`w-fit mt-[50px] mb-[55px] py-[9px] pl-5 bg-normal text-[#FF960C] rounded-[25px] ${inter.className} text-[15px] font-semibold cursor-pointer`}>Get Now<IoIosArrowForward className='bg-[#FF960C] text-normal h-8 w-8 rounded-full mr-[9px] inline-block ml-10' /></p>
            </div>
        </section>
    )
}