'use client'

import { CartItemType, OrderType } from '@/types/types'
import { QueryClient, useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { FormEvent } from 'react'
import { toast } from 'react-toastify'

const OrdersPage = () => {
  const { data: session, status } = useSession()

  const router = useRouter()

  if (status === 'unauthenticated') {
    router.push('/')
  }
  //fetch orders ...if its admin then in status column admin should type some status
  //and this status will save on data base and then fetch by user ...here we use react-querry
  //for without refereshing page we can get updated status

  //if we want fetch data and updateddata from database without pageloading then we use useQuerry :

  const { isPending, data } = useQuery({
    queryKey: ['orders'],
    queryFn: () => fetch('http://localhost:3000/api/orders').then(res => res.json())
  })

  const queryClient = useQueryClient()

  //sending admin status through mutation because we fetch all orders:

  const mutation = useMutation({
    mutationFn: ({ id, status }: { id: string; status: string }) => {
      return fetch(`http://localhost:3000/api/orders/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(status)
      })
    },

    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['orders'] })
    }
  })

  //now here we update status ,because we have already fetch data through  usequerry means we get data
  //without page loading so we will send status mutely:

  const submitHandler = (e: FormEvent<HTMLFormElement>, id: string) => {
    e.preventDefault()
    //in this we way we also can target our input means without state:

    const form = e.target as HTMLFormElement
    const input = form.elements[0] as HTMLInputElement
    const status = input.value

    mutation.mutate({ id, status })

    // toast.success('the order status has been changed')
  }

  if (isPending || status === 'loading') return 'Loading...'

  return (
    <div className='p-4 lg:px-20 xl:px-40'>
      <table className='w-full border-separate border-spacing-3'>
        <thead>
          <tr className='text-left'>
            <th className='hidden md:block'>Order Id</th>
            <th>Date</th>
            <th>Price</th>
            <th className='hidden md:block'>Products</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item: OrderType) => {
            return (
              <tr className={`${item.status !== 'delivered' && 'bg-red-50'}`} key={item.id}>
                <td className='hidden md:block py-6 px-1'>{item.id}</td>
                <td className='py-6 px-1'>{item.createdAt.toString().slice(0, 10)}</td>
                <td className='py-6 px-1'>{item.price}</td>
                <td className='hidden md:block py-6 px-1'>
                  {item.products.map((product: CartItemType) => product.title)}
                </td>
                {session?.user.isAdmin ? (
                  <td>
                    <form className='flex items-center justify-center gap-4' onSubmit={e => submitHandler(e, item.id)}>
                      <input placeholder={item.status} className='p-2 ring-1 ring-red-100 rounded-md' />
                      <button type='submit'>+</button>
                    </form>
                  </td>
                ) : (
                  <td className='py-6 px-1'>{item.status}</td>
                )}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default OrdersPage
