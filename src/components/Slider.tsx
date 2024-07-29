'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const data: any = [
  {
    id: 1,
    title: 'always fresh & always crispy & always hot',
    image: '/girlPizza.jpg'
  },
  {
    id: 2,
    title: 'we deliver your order wherever you are NY',
    image: '/dogPizza.jpg'
  },
  {
    id: 3,
    title: 'the best burger to share with your family',
    image: '/burger.jpg'
  }
]
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide(prev => (prev === data.length-1 ? 0 : prev + 1))
  //   }, 2000)

  //   return () => clearInterval(interval)
  // }, [])

  return (
    <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50'>
      <div className='flex-1 h-1/2 flex items-center justify-center flex-col gap-8 text-red-500 font-bold lg:h-full'>
        <h1 className='text-5xl text-center uppercase p-4 md:text-6xl xl:text-7xl md:p-10 '>{data[currentSlide].title}</h1>

        <button className='bg-red-500 text-white py-4 px-8 '>Order Now</button>
      </div>

      <div className=' flex-1 w-full h-1/2 relative lg:h-full'>
        <Image src={data[currentSlide].image} alt='' fill className='object-cover' />
      </div>
    </div>
  )
}

export default Slider
