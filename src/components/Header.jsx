import { Nunito, Inter } from 'next/font/google'
import { AiOutlineSearch, AiFillHeart } from 'react-icons/ai'
import { FaShoppingCart } from 'react-icons/fa'
import Hamburger from 'hamburger-react'
import { useState } from 'react'
import Link from 'next/link'

const nunito = Nunito({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })

export default function Header() {

    const [isOpen, setOpen] = useState(false)

    return (
        <header className='fixed top-0 z-50 bg-white w-full'>
            <div className='bg-primary'>
                <p className={`text-center py-[19px] ${inter.className} text-base font-bold leading-[14.7px] text-white cursor-default`}>Call us for Veterinary Support: <a href="tel:+97798xxxxxxxx">+977-98xxxxxxxx</a></p>
            </div>
            <div className='relative px-3 sm:px-20 flex flex-col sm:flex-row flex-wrap justify-center sm:justify-between items-center pt-[21px] pb-[31px]'>
                <p className={`w-[90px]  h-9 ${inter.className} text-[15px] font-bold uppercase text-center cursor-default`}><Link href={"/"}>Your Logo Here</Link></p>
                {
                    isOpen && <div className='absolute top-0  right-0 sm:w-1/2 h-screen bg-black/20 z-30' onClick={() => { return setOpen(false) }}></div>
                }
                <nav className={` xl:block ${isOpen ? 'block absolute top-0 left-0 w-full' : 'hidden'}`} onClick={() => { return setOpen(false) }}>
                    <ul className={`flex gap-9 ${inter.className} font-medium text-[15px] text-secondary ${isOpen ? 'flex-col absolute top-0 left-0 h-screen w-full items-center sm:w-1/2 px-3 py-7 bg-normal' : ''}`}>
                        <li className={`w-[90px]  h-9 ${inter.className} text-[15px] font-bold uppercase text-center ${isOpen ? 'block ' : 'hidden'} cursor-default`}><Link href={"/"}>Your Logo Here</Link></li>
                        <li className='hover:text-primary border-b-2 border-transparent hover:border-primary cursor-pointer w-fit'><Link href={"/"}>Home</Link></li>
                        <li className='hover:text-primary border-b-2 border-transparent hover:border-primary cursor-pointer w-fit'><Link href={"#about"}>About</Link></li>
                        <li className='hover:text-primary border-b-2 border-transparent hover:border-primary cursor-pointer w-fit'><Link href={"#service"}>Services</Link></li>
                        <li className='hover:text-primary border-b-2 border-transparent hover:border-primary cursor-pointer w-fit'><Link href={"#breed"}>Breeds</Link></li>
                        <li className='hover:text-primary border-b-2 border-transparent hover:border-primary cursor-pointer w-fit'>Shop</li>
                        <li className='hover:text-primary border-b-2 border-transparent hover:border-primary cursor-pointer w-fit'><Link href={"#gallery"}>Gallery</Link></li>
                        <li className={`hover:text-primary border-b-2 border-transparent hover:border-primary cursor-pointer w-fit ${isOpen ? 'block ' : 'hidden'}`}>Wishlist</li>
                        <li className={`hover:text-primary border-b-2 border-transparent hover:border-primary cursor-pointer w-fit ${isOpen ? 'block ' : 'hidden'}`}>Cart</li>
                    </ul>
                </nav>
                <div className='flex items-center justify-center mt-8 sm:mt-0'>
                    <form className={`${inter.className} text-xs  text-[#0A1A58] border rounded-[25px] border-primary flex  items-center justify-between mr-0 xl:mr-6`} >
                        <input type='text' className='h-[50px] rounded-[25px] p-[18px] outline-none' placeholder='Search......' />
                        <button type='button' className='w-[39px] h-[39px] bg-primary rounded-full flex justify-center items-center text-white mr-2'><AiOutlineSearch size={14} /></button>
                    </form>
                    <div className='text-primary text-lg mr-[34px] hidden xl:block'><AiFillHeart /></div>
                    <div className={`hidden xl:flex border border-primary text-primary text-lg items-center leading-[17px] gap-3 py-[17px] px-[21px] rounded-lg ${nunito.className}`}><FaShoppingCart /> <p className='text-bold text-black'><span className='text-sm'>2</span>&nbsp;item</p></div>
                </div>
                <div className='xl:hidden absolute top-[21px] z-50 sm:top-0 right-0 sm:relative'><Hamburger toggled={isOpen} toggle={setOpen} /></div>
            </div>
        </header>
    )
}