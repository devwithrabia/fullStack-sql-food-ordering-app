import Image from 'next/image'
const Offer = () => {
  return (
    <div className='bg-black h-screen flex flex-col md:flex-row '>
      <div className='flex-1 flex flex-col justify-center items-center text-center gap-8 p-6'>
        <h1 className='text-white text-5xl font-bold xl:text-6xl'>Delicious Sandwich & French Fry</h1>
        <p className='text-white xl:text-xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolor omnis voluptate nostrum rerum eaque qui
          dignissimos! Tempore expedita, eveniet debitis earum adipisci harum quo quia laboriosam optio suscipit esse!
        </p>
        <button className='bg-red-500 text-white rounded-md py-3 px-6'>Order Now</button>
      </div>

      <div className='relative w-full flex-1'>
        <Image src='/clubSandwich.webp  ' alt='' fill className='object-contain' />
      </div>
    </div>
  )
}

export default Offer
