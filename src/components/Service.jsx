import Image from 'next/image'
import { Nunito, Inter } from 'next/font/google'
import Service1 from "@/assets/service1.png"
import Service2 from "@/assets/service2.png"
import Service3 from "@/assets/service3.png"
import Service4 from "@/assets/service4.png"
import Service5 from "@/assets/service5.png"
import Service6 from "@/assets/service6.png"

const nunito = Nunito({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })

export default function Service() {

    let services = [
        {
            id: 1,
            title: "Dog/Cat Grooming",
            details: "We are enhancing our skills, salon, and equipment to meet the challenges of pet grooming.",
            image: Service1
        },
        {
            id: 2,
            title: "Home Treatment",
            details: "Our goal is to ensure pet welfare through home treatment and prompt client response.",
            image: Service2
        },
        {
            id: 3,
            title: "Clinical Treatment",
            details: "Our clinic offers professional veterinary care with a focus on disease prevention, diagnosis, and treatment.",
            image: Service3
        },
        {
            id: 4,
            title: "Puppies Buying & Selling",
            details: "We buy and sell common breed puppies like Golden Retriever, Husky, Pug, etc. 100% guarantee on the breed offered.",
            image: Service4
        },
        {
            id: 5,
            title: "Dog Training",
            details: "Our team of dog trainers is passionate, dedicated, and has years of professional experience.",
            image: Service5
        },
        {
            id: 6,
            title: "Dog Matting",
            details: "Quality breeding requires experience and passion. We can arrange and facilitate quality breed mating.",
            image: Service6
        }

    ]

    return (
        <section className='px-3 sm:px-[80px] pt-[122px] cursor-default' id='service'>
            <div className={`${nunito.className} text-center`}>
                <h2 className=' text-[45px] leading-[60px] font-extrabold text-secondary mb-[6px] '>Our Services</h2>
                <p className='font-medium text-[22px] leading-8 text-content'>We provide a wide range of products & services for pets such as food, toys, grooming supplies, and veterinary care.
                    <br />We aim to meet the needs of pet owners and ensure the health and happiness of their furry friends.</p>
            </div>
            <div className='mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-9'>
                {
                    services.map((service) => {
                        return (
                            <div className='border border-[#D4D2E3] rounded-xl h-full flex flex-col justify-between' key={service.id}>
                                <Image src={service.image} alt='serviceImage' className='object-cover w-full' />
                                <div className={`${nunito.className} p-[22px] flex flex-col h-full justify-between`}>
                                    <div>
                                        <h3 className='text-xl font-extrabold leading-[38px] text-secondary'>{service.title}</h3>
                                        <p className='font-medium text-sm leading-6 text-content mt-2'>{service.details}</p>
                                    </div>
                                    <div className='flex justify-center mt-8'>
                                        <p className={`${inter.className} px-3 py-2 bg-secondary w-fit h-fit rounded-[5px] text-white font-semibold text-xs leading-5 cursor-pointer`}>View&nbsp;More</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}