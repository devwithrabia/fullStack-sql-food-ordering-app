'use client'

import { useCartStore } from '@/utils/store'
import Image from 'next/image'
import { useEffect } from 'react'

const CartIcon = () => {
  const { totalItems } = useCartStore()

  useEffect(() => {
    useCartStore.persist.rehydrate()
  }, [])

  return (
    <div className='flex items-center gap-4'>
      <div className='w-8 h-8 relative md:w-5 md:h-5'>
        <Image src='/cart2.jpg' alt='' fill />
      </div>
      <span>Cart({totalItems})</span>
    </div>
  )
}

export default CartIcon
