'use client'
import CartItem from '@/components/CartItem'
import { CartContext } from '@/context/CartContext'
import { CartContextType } from '@/utils/types/CartContext'
import { Product } from '@/utils/types/Product'
import Link from 'next/link'
import React from 'react'

const Page = () => {

    const { 
        cart, 
        itemCount,
    } = React.useContext(CartContext) as CartContextType

    return (
        <main className='bg-dark min-h-fill flex justify-center'>
            <div className='p-6 md:p-12 lg:p-24 md:w-[70vw] flex flex-col'>
                <div className='flex flex-col gap-6 pb-6'>
                    {itemCount > 0 
                        ? 
                        <div className='px-6 md:px-12 pb-6 flex justify-between text-3xl font-bold'>
                            <h1>Your Cart</h1> 
                            <p>{itemCount} {itemCount === 1 ? 'Item' : 'Items'}</p>
                        </div>
                        : 
                        <div className='px-6 md:px-12 pb-6 flex flex-col items-center gap-6 md:gap-12 mx-auto'>
                            <h1 className='text-3xl font-bold'>Your Cart Is Empty</h1>
                            <Link href={'/shop'}>
                                <button className='border border-steel-blue text-2xl px-6 py-2 rounded-md bg-platinum hover:animate-pulse hover:bg-rich-black hover:text-platinum'>Go Shopping</button>
                            </Link>
                        </div>
                    }
                    {cart.map((item: Product) => {
                        return (
                            <CartItem key={item.id} item={item} />
                        )
                    })}
                </div>
                {itemCount > 0 
                    ?
                        <Link href={'/cart/checkout'} className='mx-auto w-full'>
                            <button className='text-xl font-bold bg-green-600 hover:bg-green-500 py-4 w-full rounded-xl'>
                                Continue to Checkout
                            </button>
                        </Link>    
                    : 
                        null 
                }
            </div>
        </main>
    )
}

export default Page