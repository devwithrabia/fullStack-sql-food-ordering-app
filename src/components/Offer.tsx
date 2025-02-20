// 'use client'

import Image from 'next/image'
import CountDown from './CountDown' // 'use client'

const Offer = () => {
  return (
    <div className='bg-black h-screen flex flex-col md:flex-row  md:justify-between bg-[url("/backGround.jpg")] md:h-[70vh] '>
      <div className='flex-1 flex flex-col justify-center items-center text-center gap-8 p-6'>
        <h1 className='text-white text-5xl font-bold xl:text-6xl'>Delicious Sandwich & French Fry</h1>

        <p className='text-white xl:text-xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolor omnis voluptate nostrum rerum eaque qui
          dignissimos! Tempore expedita, eveniet debitis earum adipisci harum quo quia laboriosam optio suscipit esse!
        </p>

        <CountDown />
      </div>

      <div className='relative w-full flex-1 md:h-full'>
        <Image src='/featuredBiryani.png' alt='' fill className='object-contain' />
      </div>
    </div>
  )
}

export default Offer
