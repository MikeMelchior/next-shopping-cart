import Navbar from '@/components/Navbar';
import { getCategories } from '@/utils/api'
import { italiana } from '@/utils/fonts';
import Link from 'next/link';
import React from 'react'
import { v4 as uuid } from 'uuid';


const Shop = async ({}: {}) => {

    let data  = await getCategories();
    data.push('All Products')

    const listStyles = 'w-[300px] p-6 border-2 bg-rich-black text-platinum rounded-sm hover:border-steel-blue'
    
    return (
        <main>
            <div className='bg-clothes2 bg-cover bg-[50px_-50px] p-6 md:p-12 xl:p-24 min-h-fill'>
                <ul className={`${italiana.className} grid grid-cols-1 justify-items-center gap-6 md:gap-12 text-3xl`}>
                    {data.map((category: string) => {
                        if (category === 'All Products') {
                            return (
                                <Link key={uuid()} href={`/shop/${category}`}>
                                    <li className={listStyles}>
                                        {category} 
                                    </li>
                                </Link>
                            )
                        }
                        return (
                            <Link key={uuid()} href={`/shop/${category}`}>
                                <li className={listStyles}>
                                    {category[0].toUpperCase()+category.slice(1)}
                                </li>
                            </Link>
                            
                        )
                    })}
                </ul>
            </div>
        </main>
        
    )
}

export default Shop