import { prisma } from '@/utils/connect'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {
  const { id } = params
  try {
    const singleProduct = await prisma.product.findUnique({
      where: {
        id: id as string
      }
    })

    return new NextResponse(JSON.stringify(singleProduct), { status: 200 })
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: 'Something went wrong!' }), { status: 500 })
  }
}
