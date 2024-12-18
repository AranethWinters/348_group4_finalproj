import React from 'react'
import Image from 'next/image'
import Placeholder from '../../assets/images/image.png'

const OrderConfirmed = () => {
  return (
    <div className='flex flex-col text-center justify-center'>
        <p>Thank You For Your Purchase</p>
        <Image 
            src={Placeholder}
            width= {160} 
            height={160} 
            alt='placholder image' 
            className='mx-auto my-auto object-fill'
        />
        <p>Order#</p>
        <button>Download</button>
    </div>
  )
}

export default OrderConfirmed