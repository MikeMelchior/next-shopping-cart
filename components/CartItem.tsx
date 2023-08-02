import { CartContext } from '@/context/CartContext'
import { CartContextType } from '@/utils/types/CartContext'
import { Product } from '@/utils/types/Product'
import Image from 'next/image'
import React from 'react'


const CartItem = ( { item }: { item: Product }) => {

    const { deleteProductFromCart } = React.useContext(CartContext) as CartContextType
    
    return (
        <div key={item.id} className='border-2 p-12 w-full flex gap-12 text-xl rounded-md'>
            <Image src={item.image} alt='' width={200} height={200} className='w-[100px] h-[100px]'/>
            <p>{item.title}</p>
            {item.quantity ? <p>Quantity: {item.quantity}</p> : <p>Quantity: 1</p>}
            <button 
                className='px-2 py-4 border-2 bg-red-300 text-3xl ml-auto'
                onClick={() => {
                    deleteProductFromCart(item)
                }}
            > 
                Delete
            </button>
        </div>
    )
}

export default CartItem 