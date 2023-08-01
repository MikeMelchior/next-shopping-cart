import { getCategories } from '@/utils/api'
import Link from 'next/link';
import React from 'react'
import { v4 as uuid } from 'uuid';


const Shop = async ({}: {}) => {

    let data  = await getCategories();
    
    console.log
    return (
        <div className='p-6 md:p-12 xl:p-24'>
            <ul className='grid grid-cols-auto-fill justify-items-center gap-24'>
                {data.map((category: string) => {
                    return (
                        <Link key={uuid()} href={'/'}>
                            <li>
                                {category}
                            </li>
                        </Link>
                        
                    )
                })}
            </ul>
        </div>
    )
}

export default Shop