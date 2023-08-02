import Link from 'next/link'
import React from 'react'
import NavCart from './NavCart'
import { italiana } from '@/utils/fonts'

type Props = {}

const Navbar = (props: Props) => {

    const listStyles = 'hover:bg-platinum hover:text-rich-black h-full px-3 md:px-6 flex items-center transition-all duration-500'    
    return (
        <nav className='bg-rich-black text-platinum text-xl md:text-2xl h-[80px] min-w-screen'>
            <ul className='flex flex-wrap justify-between md:justify-normal h-full'>
                <Link href={'/'} className='h-full'>
                    <li className={`sm:hidden ${listStyles} mr-auto ${italiana.className} text-4xl`}>
                        FS
                    </li>
                    <li className={`hidden sm:flex ${listStyles} mr-auto ${italiana.className} text-4xl`}>
                        Fake Store
                    </li>
                </Link>
                <Link href={'/'} className='ml-auto'>
                    <li className={listStyles}>
                        Home
                    </li>
                </Link>
                <Link href={'/shop'}>
                    <li className={listStyles}>
                        Shop
                    </li>
                </Link>
                <Link href={'/contact'}>
                    <li className={listStyles}>
                        Contact
                    </li>
                </Link>
                <Link href={'/cart'}>
                    <li className={`h-full px-3 md:px-6 flex items-center p-0`}>
                        <NavCart />
                    </li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar