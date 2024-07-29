import Image from 'next/image'

const CartIcon = () => {
  return (
    <div className='flex items-center gap-4'>
    <div className='w-8 h-8 relative md:w-5 md:h-5' >
      <Image src='/cart2.jpg' alt='' fill/>
    </div>
    <span>Cart(0)</span>
    </div>
  )
}

export default CartIcon
