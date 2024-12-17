'use client'
import React, { use, useState } from 'react'
import Image from 'next/image'
import { auth, db } from './../../lib/firebase/clientApp';
import { setDoc, doc, addDoc, getDoc, Timestamp, collection } from 'firebase/firestore';
import Placeholder from '../../assets/images/image.png'
import { redirect } from 'next/navigation';

const Shipping = () => {
    const [fullname, setFullName] = useState('');
    const [location, setLocation] = useState('');
    const [deliverynotes, setDeliveryNotes] = useState('');
    const [readtc, setReadTC] = useState(false);

    const handleShipping = async (e) => {
        e.prevenDefault();
        const user = auth.currentUser;

        if (user){
            await addDoc(collection(db, "Transactions"), {
                uuid: user.uid,
                date: Timestamp.fromDate(Date.now.toString),
                tc: readtc,
                deliverynotes: deliverynote,

            })
        }
        redirect('/../order')
    }

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
                <form className='object-contain' onSubmit={handleShipping}>
                    <p>Shipping Information</p>
                    <p>We ship within 2 working days</p>
                    <hr/>
                    <p>Full Name</p>
                    <input id='fullname' value={fullname} placeholder='Value' onChange={(e) =>setFullName(e.target.value)} required/>
                    <hr/>
                    <p>Location</p>
                    <select id='location' value={location} onChange={(e) =>setLocation(e.target.value)} required>
                        <option value='Iloilo'>Iloilo</option>
                        <option value='Capiz'>Capiz</option>
                        <option value='Aklan'>Aklan</option>
                        <option value='Antique'>Antique</option>
                    </select>
                    <hr/>
                    <p>Delivery Note</p>
                    <textarea id='deliverynote' value={deliverynotes} onChange={(e) =>setDeliveryNotes(e.target.value)}/>
                    <hr/>
                    <label>
                        <input type='checkbox' id='tc' value={readtc} onChange={(e) =>setReadTC(e.target.value)} required/> I accept the terms 
                    </label>
                    <hr/>
                    <button type='submit' id='submit'>Save shipping information</button>
                </form>
            </div>
        </div>
    )
}

export default Shipping