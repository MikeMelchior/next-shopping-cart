'use client'
import React, { useContext } from 'react'
import cart from '../public/cart.png'
import Image from 'next/image'
import { CartContext } from '@/context/CartContext'
import { CartContextType } from '@/utils/types/CartContext'


const NavCart = () => {
    const { itemCount } = useContext(CartContext) as CartContextType

    return (
        <div className='relative min-w-[30px]'>
            <div className={`${itemCount > 0 ? '' : 'invisible'} absolute -bottom-2 -right-2 flex items-center justify-center text-sm w-6 h-6 font-black text-platinum bg-steel-blue rounded-full`}>
                {itemCount > 0 ? itemCount : null}
            </div>
            <Image  src={cart} alt='' width={40} height={40}/>
        </div>
        
    )
}

export default NavCart