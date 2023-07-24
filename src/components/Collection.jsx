import Image from 'next/image'
import { Nunito, Inter } from 'next/font/google'
import Pet1 from "@/assets/pet1.png"
import Pet2 from "@/assets/pet2.png"
import Pet3 from "@/assets/pet3.png"
import Pet4 from "@/assets/pet4.png"
import Pet5 from "@/assets/pet5.png"
import Pet6 from "@/assets/pet6.png"
import Pet7 from "@/assets/pet7.png"
import Pet8 from "@/assets/pet8.png"
import { IoIosArrowForward } from "react-icons/io"

const nunito = Nunito({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })

export default function Collection() {

  let pets = [
    {
      id: 1,
      title: "Golden Retriever",
      gender: "Male",
      age: "2 months",
      image: Pet1
    },
    {
      id: 2,
      title: "Doberman",
      gender: "Male",
      age: "2 months",
      image: Pet2
    },
    {
      id: 3,
      title: "Apso",
      gender: "Female",
      age: "1 year",
      image: Pet3
    },
    {
      id: 4,
      title: "Chihuahua",
      gender: "Female",
      age: "1 year",
      image: Pet4
    },
    {
      id: 5,
      title: "Japanese Spitz",
      gender: "Male",
      age: "2 months",
      image: Pet5
    },
    {
      id: 6,
      title: "German Shepard",
      gender: "Male",
      age: "2 months",
      image: Pet6
    },
    {
      id: 7,
      title: "Husky",
      gender: "Female",
      age: "3 months",
      image: Pet7
    },
    {
      id: 8,
      title: "Pug",
      gender: "Female",
      age: "4 months",
      image: Pet8
    }

  ]


  return (
    <section className='px-3 sm:px-[80px] pt-[122px] cursor-default' id='breed'>
      <div className={`${nunito.className} text-center`}>
        <h2 className=' text-[45px] leading-[60px] font-extrabold text-secondary mb-[6px] '>Our Pet Collections</h2>
        <p className='font-medium text-[22px] leading-8 text-content'>&quot;Bring joy to your home with a furry companion from our pet selection.&quot;</p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-16'>
        {
          pets.map(pet => {
            return (
              <div className='h-full border border-[#D4D2E3] rounded-xl' key={pet.id}>
                <div>
                  <Image src={pet.image} alt='petImage' className='w-full p-2 pb-[15px]' />
                </div>

                <div className={`px-[14px] pb-[17px] ${nunito.className} w-[90%] cursor-pointer`}>
                  <h2 className='font-extrabold text-base leading-6 text-secondary'>{pet.title}</h2>
                  <div className='flex justify-between text-xs leading-[18px] text-content'>
                    <p>Gender:&nbsp;<span className='text-header font-bold'>{pet.gender}</span>&nbsp;</p>
                    <p>Age:&nbsp;<span className='text-header font-bold'>{pet.age}</span></p>
                  </div>
                </div>

              </div>
            )
          })
        }
      </div>
      <div className='mt-8 flex justify-center items-center'>
        <p className={`w-fit py-[9px] pl-[27px] bg-primary text-white rounded-[25px] ${inter.className} text-[15px] font-semibold cursor-pointer`}>View All<IoIosArrowForward className='bg-white text-primary h-8 w-8 rounded-full mr-[9px] inline-block ml-[37px]' /></p>
      </div>
    </section>
  )
}