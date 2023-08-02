'use client'
import { Product } from '@/utils/types/Product'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Rating from '@mui/material/Rating'
import { CartContext } from '@/context/CartContext'
import { CartContextType } from '@/utils/types/CartContext'



const ProductCard = ( { product }: { product: Product}) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (product.quantity) setCount(product.quantity)
    }, [product.quantity])

    const { addItemToCart, removeItemFromCart } = React.useContext(CartContext) as CartContextType

    return (
        <div className='h-[475px] min-w-[300px] w-[25vw] max-w-[400px] place-self-center border-2 border-black flex flex-col justify-center items-center gap-6 p-6 bg-platinum text-rich-black text-center rounded-md'>
            <Image 
                src={product.image} 
                alt='' 
                width={150} 
                height={225}
                className=' w-[200px] h-[200px] rounded-xl' 
            />
            <p className='mb-auto'>{product.title}</p>
            {
                count === 0
                ? 
                    <div>
                        <button 
                            className='border-2 bg-green-500 py-2 px-4 font-bold'
                            onClick={() => {
                                setCount(1)
                                addItemToCart(product);
                            }}
                        >
                            Add to Cart
                        </button>
                    </div>
                    
                : 
                    <div className='flex rounded-xl text-lg'>
                        <button 
                        className='border border-steel-blue px-4 text-2xl text-steel-blue hover:bg-blue-200 rounded-l-xl'
                            onClick={() => {
                                setCount(prev => prev - 1);
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
                                setCount(prev => prev + 1);
                                addItemToCart(product);
                            }}
                        >
                            +
                        </button>
                    </div>
            }
            <div className='flex flex-col'>
                <p className='font-bold text-center'>${product.price}</p>
                <div className='flex items-center gap-2'>
                    <Rating  
                        value={product.rating.rate}
                        precision={0.1}
                        readOnly
                    /> 
                    <p className='mb-[-3px]'>{product.rating.count}</p>
                </div> 
            </div>
            

        </div>
    )
}

export default ProductCard