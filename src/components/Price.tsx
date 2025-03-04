'use client'

import { ProductType } from '@/types/types'
import { useCartStore } from '@/utils/store'
import { useEffect, useState } from 'react'

type Props = {
  product: ProductType
}
const Price = ({ product }: Props) => {
  const { price, options } = product

  const [total, setTotal] = useState(price)

  const [quantity, setQuantity] = useState(1)

  const [selected, setSelected] = useState(0)

  const { addToCart } = useCartStore()

  //when we have hydration error we will do this :

  useEffect(() => {
    useCartStore.persist.rehydrate()
  }, [])

  useEffect(() => {
    if (product.options?.length) {
      setTotal(quantity * product.options[selected].additionalPrice)
    }
    return setTotal(quantity * product.price)
  }, [quantity, selected, product])

  return (
    <div className='flex flex-col gap-4 '>
      <h2 className='text-2xl font-bold'>${total}</h2>

      <div className='flex gap-4'>
        {options?.length &&
          options?.map((option, index) => {
            return (
              <button
                key={option.title}
                className='p-2 ring-1 ring-red-400 rounded-md'
                style={{
                  background: selected === index ? 'rgb(248 113 113)' : 'white',
                  color: selected === index ? 'white' : 'red'
                }}
                onClick={() => setSelected(index)}
              >
                {option.title}
              </button>
            )
          })}
      </div>

      <div className='flex justify-between items-center'>
        <div className='flex justify-between w-full p-3 ring-1 ring-red-500'>
          <span>Quantity</span>

          <div className='flex gap-4'>
            <button onClick={() => setQuantity(prev => (prev > 1 ? prev - 1 : 1))}>{'<'}</button>

            <span>{quantity}</span>

            <button onClick={() => setQuantity(prev => (prev < 9 ? prev + 1 : 9))}>{'>'}</button>
          </div>
        </div>

        <button
          className='uppercase bg-red-500 text-white p-2 ring-1 ring-red-500 w-56 p-3'
          onClick={() =>
            addToCart({
              id: product.id,
              title: product.title,
              img: product.img,
              price: total,
              ...(product.options?.length && { optionTitle: product.options[selected].title }),
              quantity: quantity
            })
          }
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default Price
