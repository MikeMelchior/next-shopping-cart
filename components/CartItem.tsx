import { CartContext } from '@/context/CartContext'
import { CartContextType } from '@/utils/types/CartContext'
import { Product } from '@/utils/types/Product'
import Image from 'next/image'
import React from 'react'
import QuantityWidget from './QuantityWidget'


const CartItem = ( { item }: { item: Product }) => {

    const { deleteProductFromCart, addItemToCart, removeItemFromCart } = React.useContext(CartContext) as CartContextType

    return (
        <div key={item.id} className='border-2 p-12 w-full flex gap-12 text-xl rounded-md'>
            <Image src={item.image} alt='' width={200} height={200} className='w-[100px] h-[100px]'/>
            
            <div className='w-full flex flex-col'>
                <div className='flex justify-between'>
                    <p className='font-bold'>{item.title}</p>
                    <p>${item.quantity * item.price}</p>
                </div>
                <div className='mt-auto flex justify-between'>
                    <QuantityWidget product={item} count={item.quantity}/>
                    <button 
                        className='text-red-500 ml-auto mt-auto bg-pink-200 h-fit py-1 px-4 rounded-xl hover:animate-pulse'
                        onClick={() => {
                            deleteProductFromCart(item)
                        }}
                    > 
                        Remove
                    </button>
                </div>
                
            </div>
            
           
        </div>
    )
}

export default CartItem 