import { ActionTypes, StateTypes } from '@/types/types'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
const INITIAL_STATE = {
  products: [],
  totalItems: 0,
  totalPrice: 0
}



//persist means all information on this store will be store in localstorage named as 'cart'...when we reload
//page the information from this store will not disappear
//these three states will be store in localstorage due to persisit and we will have these states on first page load:

export const useCartStore = create(
  persist<StateTypes & ActionTypes>(
    (set, get) => ({
      products: INITIAL_STATE.products,
      totalItems: INITIAL_STATE.totalItems,
      totalPrice: INITIAL_STATE.totalPrice,
      addToCart(item) {
        //here we get product array:
        const products = get().products

        //first we sort out item exist in state:

        const productInState = products.find(product => product.id === item.id)

        if (productInState) {
          const updatedProducts = products.map(product => {
            if (product.id === productInState.id) {
              return {
                ...product,
                quantity: item.quantity + product.quantity,
                price: item.price + product.price
              }
            }

            return product
          })

          set(state => ({
            products: updatedProducts,
            totalItems: state.totalItems + item.quantity,
            totalPrice: state.totalPrice + item.price
          }))
        } else {
          set(state => ({
            products: [...state.products, item],
            totalItems: state.totalItems + item.quantity,
            totalPrice: state.totalPrice + item.price
          }))
        }
      },
      removeFromCart(item) {
        set(state => ({
          products: state.products.filter(product => product.id !== item.id),
          totalItems: state.totalItems - item.quantity,
          totalPrice: state.totalPrice - item.price
        }))
      }
    }),
    //this is for local storage
    { name: 'cart' }
  )
)
