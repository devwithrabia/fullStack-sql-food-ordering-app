'use client'

//form from stripe library:

import { FormEvent, useState } from 'react'
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { AddressForm } from './AddressForm'

export default function CheckoutForm() {
  const stripe = useStripe()
  const elements = useElements()

  //   const [email, setEmail] = useState('')

  const [message, setMessage] = useState<string | null>(null)

  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return
    }

    setIsLoading(true)

    const apiUrl = process.env.NEXT_PUBLIC_API_URL

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${apiUrl}/success`
      }
    })

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === 'card_error' || error.type === 'validation_error') {
      setMessage(error.message!)
    } else {
      setMessage('An unexpected error occurred.')
    }

    setIsLoading(false)
  }

  return (
    <form id='payment-form' onSubmit={handleSubmit}>
      <PaymentElement id='payment-element' options={{ layout: 'accordion' }} />

      <AddressForm />

      <button
        disabled={isLoading || !stripe || !elements}
        id='submit'
        className='bg-red-500 text-white p-2 rounded-md m-auto flex mt-[40px]'
      >
        Pay Now
      </button>

      {/* Show any error or success messages */}
      {message && <div id='payment-message'>{message}</div>}
    </form>
  )
}
