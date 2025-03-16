import { z } from 'zod'

export type MenuType = {
  id: number
  slug: string
  title: string
  img?: string
  desc?: string
  color: string
}[]

export type ProductType = {
  id: string
  createdAt: Date
  title: string
  desc?: string
  img?: string
  price: number
  catSlug: string
  isFeatured: boolean
  options?: { title: string; additionalPrice: number }[]
}

export type OrderType = {
  id: string
  userEmail: string
  price: number
  products: CartItemType[]
  status: string
  createdAt: Date
  intent_id?: String
}

export type CartItemType = {
  id: string
  title: string
  img?: string
  price: number
  optionTitle?: string
  quantity: number
}

export type StateTypes = {
  products: CartItemType[]
  totalItems: number
  totalPrice: number
}

export type ActionTypes = {
  addToCart: (item: CartItemType) => void
  removeFromCart: (item: CartItemType) => void
}

// Define Zod Schema
export const productSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  desc: z.string().min(1, 'Description is required'),
  price: z.number().min(1, 'Price must be greater than 0'),
  catSlug: z.string().min(1, 'Category is required'),
  img: z.string().min(1, 'Image is required'),
  options: z
    .array(
      z.object({
        title: z.string().min(1, 'Option title is required'),
        additionalPrice: z.number().min(0, 'Additional price must be 0 or more')
      })
    )
    .optional()
})

// TypeScript Type from Zod Schema
export type Inputs = z.infer<typeof productSchema>
