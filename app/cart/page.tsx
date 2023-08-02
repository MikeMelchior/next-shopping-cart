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
        <div className='p-12 flex'>
            <div>
                <div className='p-12'>
                    <h1 className='text-3xl'>Your Cart</h1> 
                    <p>{itemCount}</p>
                </div>
                {cart.map((item: Product) => {
                    return (
                        <CartItem key={item.id} item={item} />
                    )
                })}
            </div>
            
        </div>
    )
}

export default Page