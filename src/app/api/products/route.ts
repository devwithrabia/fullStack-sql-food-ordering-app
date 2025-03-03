import { prisma } from '@/utils/connect'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (req: NextRequest) => {
  //here we dont get cat through querry but through url:

  const { searchParams } = new URL(req.url)
  const cat = searchParams.get('cat')
  try {
    const products = await prisma.product.findMany({
      where: {
        ...(cat ? { catSlug: cat as string } : { isFeatured: true })
      }
    })

    return new NextResponse(JSON.stringify(products), { status: 200 })
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: 'Something went wrong!' }), { status: 500 })
  }
}

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json()

    // Extract product data separately from options
    const { title, desc, price, catSlug, img, options } = body

    // Create the Product first
    const newProduct = await prisma.product.create({
      data: {
        title,
        desc,
        price,
        catSlug,
        img
      }
    })

    // Create associated options with productId
    if (options && options.length > 0) {
      await prisma.option.createMany({
        data: options.map((option: any) => ({
          title: option.title,
          additionalPrice: option.additionalPrice,
          productId: newProduct.id // Link each option to the newly created product
        }))
      })
    }

    return new NextResponse(JSON.stringify(newProduct), { status: 200 })
  } catch (error) {
    console.error(error)
    return new NextResponse(JSON.stringify({ message: 'Something went wrong!' }), { status: 500 })
  }
}
