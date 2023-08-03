import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'

const page = () => {
  return (
    <main className='bg-clothes1 h-fill bg-cover flex items-center justify-center'> 
        <div className='flex flex-col p-6 gap-6 border border-black rounded-md bg-[rgba(231,231,231,0.3)]'>
            <FontAwesomeIcon icon={faTwitter} className='h-24 m-auto cursor-pointer'/>
            <FontAwesomeIcon icon={faFacebookF} className='h-24 m-auto cursor-pointer'/>
            <FontAwesomeIcon icon={faInstagram} className='h-24 m-auto cursor-pointer'/>
        </div>
    </main>
  )
}

export default page