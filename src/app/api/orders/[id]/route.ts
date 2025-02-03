import { prisma } from '@/utils/connect'
import { NextRequest, NextResponse } from 'next/server'

export const PUT = async (req: NextRequest, { params }: { params: { id: string } }) => {
  const { id } = params

  const body = await req.json()
  try {
    await prisma.order.update({
      where: {
        id: id
      },
      data: {
        status: body
      }
    })

    return new NextResponse(JSON.stringify({ message: 'order has been updated' }), { status: 200 })
  } catch (err) {
    console.log(err)

    return new NextResponse(JSON.stringify({ message: 'Something went wrong!' }), { status: 500 })
  }
}
