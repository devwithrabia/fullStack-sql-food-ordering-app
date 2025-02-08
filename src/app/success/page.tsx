'use client'

//on success page we have intent id on url after success ,so we get this paymentintent from url through searchparams:

import { useRouter, useSearchParams } from 'next/navigation'
import { Suspense, useEffect } from 'react'

const SuccessContent = () => {
  const searchparams = useSearchParams()

  const paymentIntent = searchparams.get('payment_intent')

  const apiUrl = process.env.NEXT_PUBLIC_API_URL

  const router = useRouter()

  useEffect(() => {
    const makeRequest = async () => {
      try {
        await fetch(`${apiUrl}/api/confirm/${paymentIntent}`, {
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

//useSearchParams() is a server-side API that needs to be suspended while retrieving the data.so we will
//wrap component in suspense:

export default function SuccessPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuccessContent />
    </Suspense>
  )
}
