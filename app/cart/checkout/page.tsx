'use client'
import { CartContext } from '@/context/CartContext'
import { CartContextType } from '@/utils/types/CartContext'
import { Product } from '@/utils/types/Product'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Page = () => {

    const { cart, subtotal } = React.useContext(CartContext) as CartContextType

    return (
        <main className='bg-dark min-h-fill flex flex-col items-center p-4 md:p-12 gap-12'>
            <button className='border border-black w-1/6 min-w-[250px] p-2 rounded-md bg-slate-800 text-platinum text-xl font-bold'>
                <Link href={'/cart'}>
                    {`<< `}Return to Cart
                </Link>
                
            </button>
            <div className='flex flex-col gap-2 w-full sm:w-5/6 lg:w-3/6'>
                {cart.map((i:Product) => {
                    return (
                        <div key={i.id} className='bg-platinum flex flex-wrap justify-center items-center border border-rich-black gap-4 md:gap-12 p-2 rounded-md'>
                            <Image src={i.image} alt='' height={50} width={50} className='h-[50px] min-w-[50px]'/>
                            <p className='text-sm md:text-base min-w-[185px]'>{i.title.length > 24 ? i.title.slice(0, 24): i.title}{i.title.length > 24 ? '...' : null}</p>
                            <div className='ml-auto flex flex-col items-end justify-center gap-1 min-w-[80px]'>
                                <p>Quantity: {i.quantity}</p>
                                <p className='font-bold'>{(i.quantity * i.price).toFixed(2)}</p>
                            </div>
                        </div>
                    ) 
                })}
            </div>
            <div className='bg-platinum font-bold p-6 flex flex-col gap-6 w-full sm:w-5/6 lg:w-3/6 rounded-md'>
                <p className='text-2xl mx-auto'>Checkout</p>
                <div className='flex flex-col gap-6 text-xl'>
                    <div className='flex justify-between'>
                        <p>Subtotal:</p> 
                        <p>${subtotal}</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>HST{`(13%)`}</p>
                        <p>${(subtotal * 0.13).toFixed(2)}</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>Shipping</p>
                        <p>FREE</p>
                    </div>
                    <div className='flex justify-between border-t-2 border-rich-black pt-6'>
                        <p>Total:</p>
                        <p>{(subtotal + subtotal * 0.13).toFixed(2)}</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Page