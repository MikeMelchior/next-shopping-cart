'use client'
import CartItem from '@/components/CartItem'
import { CartContext } from '@/context/CartContext'
import { CartContextType } from '@/utils/types/CartContext'
import { Product } from '@/utils/types/Product'
import Image from 'next/image'
import React from 'react'

const Page = () => {

    const { 
        cart, 
        itemCount,
        addItemToCart,
        deleteProductFromCart
    } = React.useContext(CartContext) as CartContextType

    return (
        <main className='flex justify-center'>
            <div className='p-6 md:p-12 lg:p-24 md:w-[70vw]'>
                <div className='flex flex-col gap-6'>
                    <div className='px-12 pb-6 flex justify-between text-3xl font-bold'>
                        <h1>Your Cart</h1> 
                        <p>{itemCount} {itemCount === 1 ? 'Item' : 'Items'}</p>
                    </div>
                    {cart.map((item: Product) => {
                        return (
                            <CartItem key={item.id} item={item} />
                        )
                    })}
                </div>
            </div>
        </main>
        
    )
}

export default Page