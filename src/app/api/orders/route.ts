import { getAuthSession } from '@/utils/auth'
import { prisma } from '@/utils/connect'
import { NextRequest, NextResponse } from 'next/server'

//fetch orders:

export const GET = async (req: NextRequest) => {
  const session = await getAuthSession()

  if (session) {
    try {
      //if its admin fetch all orders:

      if (session.user.isAdmin) {
        const orders = await prisma.order.findMany()
        return new NextResponse(JSON.stringify(orders), { status: 200 })
      }

      //if its not admin fetch only user order:

      const orders = await prisma.order.findMany({
        where: {
          userEmail: session.user.email!
        }
      })

      return new NextResponse(JSON.stringify(orders), { status: 200 })
    } catch (err) {
      return new NextResponse(JSON.stringify({ message: 'Something went wrong!' }), { status: 500 })
    }
  } else {
    return new NextResponse(JSON.stringify({ message: 'you are not authenticated' }), { status: 401 })
  }
}

//post orders:

export const POST = async (req: NextRequest) => {
  const session = await getAuthSession()

  if (session) {
    try {
      const body = await req.json()

      const order = await prisma.order.create({
        data: body
      })

      return new NextResponse(JSON.stringify(order), { status: 201 })
    } catch (err) {
      console.log(err)

      return new NextResponse(JSON.stringify({ message: 'Something went wrong!' }), { status: 500 })
    }
  } else {
    return new NextResponse(JSON.stringify({ message: 'you are not authenticated' }), { status: 401 })
  }
}
