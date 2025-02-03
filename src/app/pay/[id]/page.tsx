'use client'

//used stripe liberary for payment :

import CheckoutForm from '@/components/CheckoutForm'
import { Elements } from '@stripe/react-stripe-js'
import { StripeElementsOptions, loadStripe } from '@stripe/stripe-js'
import { useEffect, useState } from 'react'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

const PayPage = ({ params }: { params: { id: string } }) => {
  const [clientSecret, setClientSecret] = useState('')
  const { id } = params

  console.log(id)

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/create-intent/${id}`, {
          method: 'POST'
        })

        const data = await res.json()

        setClientSecret(data.clientSecret)

        console.log(clientSecret)
      } catch (err) {
        console.log(err)
      }
    }

    makeRequest()
  }, [id])

  const options: StripeElementsOptions = {
    clientSecret,
    appearance: {
      theme: 'stripe'
    }
  }
  return (
    <div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}

      <h1>Hello Everybody</h1>
    </div>
  )
}

export default PayPage
