import { CartContext } from '@/context/CartContext'
import { CartContextType } from '@/utils/types/CartContext'
import { Product } from '@/utils/types/Product'
import React from 'react'


const QuantityWidget = ( { product, count}: { product: Product, count: number}) => {

    const { removeItemFromCart, addItemToCart } = React.useContext(CartContext) as CartContextType
    return (
        <div className='flex rounded-xl text-lg'>
            <button 
            className='border border-steel-blue px-4 text-2xl text-steel-blue hover:bg-blue-200 rounded-l-xl'
                onClick={() => {
                    removeItemFromCart(product);
                }}
            >
                -
            </button>
            <p className='py-1 px-4 border-t border-b border-steel-blue'>
                {count}
            </p>
            <button 
                className='border border-steel-blue px-4 text-2xl text-steel-blue hover:bg-blue-200 rounded-r-xl'
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