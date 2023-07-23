import Image from 'next/image'
import { Nunito } from 'next/font/google'
import Slider from "react-slick";
import Slide1 from "@/assets/slide1.png"
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io"


const nunito = Nunito({ subsets: ['latin'] })


export default function Banner() {

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <IoIosArrowBack className={'sm:h-[45px] sm:w-[45px] absolute top-1/2 left-3 sm:left-6 z-40 text-primary  bg-white hover:text-white hover:bg-primary rounded-full'} onClick={onClick} />
        );
    }

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <IoIosArrowForward className={'sm:h-[45px] sm:w-[45px] absolute top-1/2 right-3 sm:right-6 z-40 text-primary  bg-white hover:text-white hover:bg-primary rounded-full'} onClick={onClick} />
        );
    }

    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <section className='mt-[224px] sm:mt-[156px]'>
            <Slider {...settings}>

                <div className=' relative h-[320px] sm:h-full'>
                    <Image src={Slide1} alt='slide1' className='object-cover h-full' />
                    <div className={`text-center absolute top-9 w-full ${nunito.className}`}>
                        <h2 className={`text-[40px] leading-[60px] font-black`}>We provide the best care to our furry friends!</h2>
                        <p className={`text-[26px] font-semibold leading-8 mt-2`}>Top Quality of Pet Product Store.</p>
                    </div>
                </div>

                <div className=' relative h-[320px] sm:h-full'>
                    <Image src={Slide1} alt='slide1' className='object-cover h-full' />
                    <div className={`text-center absolute top-9 w-full ${nunito.className}`}>
                        <h2 className={`text-[40px] leading-[60px] font-black`}>We provide the best care to our furry friends!</h2>
                        <p className={`text-[26px] font-semibold leading-8 mt-2`}>Top Quality of Pet Product Store.</p>
                    </div>
                </div>

            </Slider>
        </section>
    )
}