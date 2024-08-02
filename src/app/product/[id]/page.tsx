import Price from '@/components/Price'
import { singleProduct } from '@/data'
import Image from 'next/image'

const SingleProductPage = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-red-500 md:flex-row md:gap-8 md:items-center'>
      <div className='relative w-full h-1/2 md:h-[70%]'>
        {singleProduct.img && <Image src={singleProduct.img} alt='' className='object-contain' fill />}
      </div>

      <div className='h-1/2 md:h-[70%] flex flex-col gap-4 md:justify-center md:gap-6 xl:gap-8'>
        <h1 className='text-3xl font-bold uppercase xl:text-5xl'>{singleProduct.title}</h1>
        <p>{singleProduct.desc}</p>
        <Price price={singleProduct.price} options={singleProduct.options} id={singleProduct.id}/>
      </div>
    </div>
  )
}

export default SingleProductPage;
