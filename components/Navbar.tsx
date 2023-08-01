import Link from 'next/link'
import React from 'react'

type Props = {}

const Navbar = (props: Props) => {

    const listStyles = 'hover:bg-steel-blue hover:text-rich-black h-full p-6'    
    return (
        <nav className='bg-rich-black text-steel-blue text-3xl min-w-fit'>
            <ul className='flex h-full min-w-screen'>
                <Link href={'/'}>
                    <li className={listStyles}>
                        Home
                    </li>
                </Link>
                <Link href={'/shop'}>
                    <li className={listStyles}>
                        Shop
                    </li>
                </Link>
                <Link href={'/'}>
                    <li className={listStyles}>
                        Contact
                    </li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar