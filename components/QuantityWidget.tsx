import { CartContext } from '@/context/CartContext'
import { CartContextType } from '@/utils/types/CartContext'
import { Product } from '@/utils/types/Product'
import React from 'react'


const QuantityWidget = ( { product }: { product: Product }) => {

    const { removeItemFromCart, addItemToCart, cart } = React.useContext(CartContext) as CartContextType
    return (
        <div className='flex rounded-xl text-lg'>
            <button 
                className='border border-r-0 border-steel-blue px-4 text-2xl text-steel-blue hover:bg-blue-200 rounded-l-xl disabled:opacity-30 disabled:hover:bg-transparent'
                disabled={cart.find((i: Product) => i.id === product.id)?.quantity === 1}

                onClick={() => {
                    removeItemFromCart(product);
                }}
            >
                -
            </button>
            <p className='py-1 px-4 border border-steel-blue'>
                {cart.find((i: Product) => i.id === product.id)?.quantity}
            </p>
            <button 
                className='border border-l-0 border-steel-blue px-4 text-2xl text-steel-blue hover:bg-blue-200 rounded-r-xl'
                onClick={() => {
                    addItemToCart(product);
                }}
            >
                +
            </button>
        </div>
    )
}

export default QuantityWidget