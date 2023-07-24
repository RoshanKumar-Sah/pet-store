import Image from 'next/image'
import { Nunito, Inter } from 'next/font/google'
import Blog1 from "@/assets/blogs1.png"
import Blog2 from "@/assets/blogs2.png"
import Blog3 from "@/assets/blogs3.png"

const nunito = Nunito({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })

export default function Blog() {

    let blogs = [
        {
            id: 1,
            title: "How to Choose the Right Bully Stick for Your Dog",
            description: `Below is an excerpt of porch.com article “ Moving with
          Pets? We have the Experts advice to do it Properly.`,
            image: Blog1
        },
        {
            id: 2,
            title: "Saving Lives: Animal House Shelter And Downtown Pet Supply",
            description: `Below is an excerpt of porch.com article “ Moving with
          Pets? We have the Experts advice to do it Properly.`,
            image: Blog2
        },
        {
            id: 3,
            title: "Himalayan Yak Chews: 11 Benefits You Need To Know",
            description: `Below is an excerpt of porch.com article “ Moving with
          Pets? We have the Experts advice to do it Properly.`,
            image: Blog3
        }
    ]

    return (
        <section className='px-3 sm:px-[80px] mt-[122px] cursor-default'>
            <h2 className={`${nunito.className} text-[45px] font-extrabold leading-[60px] text-secondary text-center`}>Our Blogs</h2>
            <div className='mt-16 grid sm:grid-cols-2 md:grid-cols-3 gap-[35px]'>
                {blogs.map((blog) => {
                    return (
                        <div key={blog.id} className='h-full flex flex-col justify-between gap-4'>
                            <Image alt='blogImage' src={blog.image} className='w-full h-fit' />
                            <div className={`${nunito.className} h-full flex flex-col justify-between `}>
                                <h2 className='font-bold text-lg leading-7 text-secondary'>{blog.title}</h2>
                                <p className='text-content text-sm leading-6'>{blog.description}</p>
                                <p className={`${inter.className} mt-3 px-3 py-2 bg-secondary w-fit h-fit rounded-[5px] text-white font-semibold text-xs leading-5 cursor-pointer`}>View&nbsp;Details</p>
                            </div>
                        </div>
                    )
                })}
            </div>

        </section>
    )
}