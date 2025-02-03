'use client'

//on success page we have intent id on url after success ,so we get this paymentintent from url through searchparams:

import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

const SuccessPage = () => {
  const searchparams = useSearchParams()

  const paymentIntent = searchparams.get('payment_intent')

  const router = useRouter()

  useEffect(() => {
    const makeRequest = async () => {
      try {
        await fetch(`http://localhost:3000/api/confirm/${paymentIntent}`, {
          method: 'PUT'
        })

        router.push('/orders')
      } catch (err) {
        console.log(err)
      }
    }

    makeRequest()
  }, [paymentIntent, router])

  return <div>payment successful. you are being redirected to the orders page. please do not close the page</div>
}

export default SuccessPage
