import { prisma } from '@/utils/connect'
import { NextRequest, NextResponse } from 'next/server'

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export const POST = async (req: NextRequest, { params }: { params: { id: string } }) => {
  const { id } = params
  console.log(id)
  const order = await prisma.order.findUnique({
    where: {
      id: id
    }
  })

  if (order) {
    //create intentid:
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 100 * 100,
      currency: 'usd',
      automatic_payment_methods: {
        enabled: true
      }
    })

    await prisma.order.update({
      where: {
        id: id
      },
      data: { intent_id: paymentIntent.id }
    })

    //now pass clientsecret:

    return new NextResponse(JSON.stringify({ clientSecret: paymentIntent.client_secret }), { status: 200 })
  } else {
    return new NextResponse(JSON.stringify({ message: 'Order not found!' }), { status: 404 })
  }
}
