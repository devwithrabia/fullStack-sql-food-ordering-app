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
