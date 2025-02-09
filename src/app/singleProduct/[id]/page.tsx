import Price from '@/components/Price'
import { ProductType } from '@/types/types'
import Image from 'next/image'

type Props = {
  params: { id: string }
}

const getData = async (id: string) => {
  const apiUrl = process.env.API_URL

  const res = await fetch(`${apiUrl}/api/products/${id}`, {
    cache: 'no-store'
  })

  if (!res.ok) {
    throw new Error('failed')
  }

  return res.json()
}

const SingleProductPage = async ({ params }: Props) => {
  const singleProduct: ProductType = await getData(params.id)

  return (
    <div className='p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-red-500 md:flex-row md:gap-8 md:items-center'>
      <div className='relative w-full h-1/2 md:h-[70%]'>
        {singleProduct.img && <Image src={singleProduct.img} alt='' className='object-contain' fill />}
      </div>

      <div className='h-1/2 md:h-[70%] flex flex-col gap-4 md:justify-center md:gap-6 xl:gap-8'>
        <h1 className='text-3xl font-bold uppercase xl:text-5xl'>{singleProduct.title}</h1>
        <p>{singleProduct.desc}</p>
        <Price product={singleProduct} />
      </div>
    </div>
  )
}

export default SingleProductPage
