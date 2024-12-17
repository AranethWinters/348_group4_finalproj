import React from 'react'
import Header from '@/app/components/header/Header.jsx'
import Footer from '@/app/components/footer/Footer.js'
import Image from 'next/image'
import Placeholder from '../../assets/images/image.png'

const Shipping = () => {
  return (
    <div className='flex flex-row justify-center h-screen w-screen gap-8 p-8'>
        <div className='basis-full h-1/2 content-center border'>
            <Image 
                src={Placeholder}
                width= {160} 
                height={160} 
                alt='placholder image' 
                className='mx-auto my-auto object-fill aspect-video'
            />
        </div>
        <div className='basis-1/4 h-1/2 p-8 border'>
            <form className='object-contain'>
                <p>Shipping Information</p>
                <p>We ship within 2 working days</p>
                <hr/>
                <p>Full Name</p>
                <input name='fullname' placeholder='Value'/>
                <hr/>
                <p>Location</p>
                <select name='location'>
                    <option value='Iloilo'>Iloilo</option>
                    <option value='Capiz'>Capiz</option>
                    <option value='Aklan'>Aklan</option>
                    <option value='Antique'>Antique</option>
                </select>
                <hr/>
                <p>Delivery Note</p>
                <textarea name='deliverynote'/>
                <hr/>
                <label>
                    <input type='checkbox' name='tc'/> I accept the terms 
                </label>
                <hr/>
                <button type='submit'>Save shipping information</button>
            </form>
        </div>
    </div>
  )
}

export default Shipping