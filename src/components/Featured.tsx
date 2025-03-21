import { ProductType } from '@/types/types'
import Image from 'next/image'

const getData = async () => {
  const apiUrl = process.env.API_URL

  const res = await fetch(`${apiUrl}/api/products`, {
    cache: 'no-store'
  })

  if (!res.ok) {
    throw new Error('failed')
  }

  return res.json()
}

const Featured = async () => {
  const featuredProducts: ProductType[] = await getData()

  return (
    <div className='overflow-x-scroll text-red-500  '>
      <div className='w-max flex'>
        {featuredProducts.map(item => {
          return (
            <div
              key={item.id}
              className='w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50  md:w-[50vw] xl:w-[33vw] xl:h-[90vh]'
            >
              {item.img && (
                <div className='relative flex-1 w-full '>
                  <Image src={item.img} alt='' fill className='object-contain' />
                </div>
              )}

              <div className='flex-1 flex flex-col gap-4  justify-center items-center'>
                <h1 className='text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl'>{item.title}</h1>
                <p className='p-4  2xl:p-8'>{item.desc}</p>
                {/* <span className='text-xl font-bold'>${item.price}</span> */}
                <div className='bg-red-500 text-white p-2 rounded-md'>Special Offer</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Featured
