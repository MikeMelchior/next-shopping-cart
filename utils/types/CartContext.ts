import { Product } from "./Product"

export type CartContextType = {
    cart: Product[]
    itemCount: number
    itemInCart: (item: Product) => boolean
    subtotal: number
    addItemToCart: (item: Product) => void
    removeItemFromCart: (item: Product) => void
    deleteProductFromCart: (item: Product) => void
}