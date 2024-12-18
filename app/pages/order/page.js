'use client'

import React, { use, useState } from 'react'
import { auth, db } from './../../lib/firebase/clientApp';
import { setDoc, doc, addDoc, getDoc, collection } from 'firebase/firestore';
import { redirect, useRouter } from 'next/navigation';

function Order() {
  const [paymenttype, setPaymentType] = useState('');
  const [cardnumber, setCardNumber] = useState('');
  const [expdate, setExpDate] = useState('');
  const [cvv, setCVV] = useState('');
  const [discountcode, setDiscountCode] = useState('');
  const router = useRouter();

  const HandleOrder = async (e) => {
     e.prevenDefault();
     const user = auth.currentUser;
    try {
      if (user) {
        console.log(user)
        await addDoc(collection(db, "Order"), {
          paymenttype: paymenttype,
          cardnumber: cardnumber,
          expdate: expdate,
          cvv: cvv,
          discountcode: discountcode
        })
       router.push('/pages/shipping')
     }
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <form className='flex flex-row justify-center h-screen w-screen gap-8 p-8'>
      <div className='content-center w-1/2 h-1/2 border p-4'>
        <p>Payment</p>
        <hr />
        <p>Pay With:</p>
        <div>
          <label>
            <input type='radio' name='paymentType' id='radioCard' value="card" onChange={(e) => setPaymentType(e.target.value)} required />
            Card
          </label>
          <label>
            <input type='radio' name='paymentType' id='radioBank' value="bank" onChange={(e) => setPaymentType(e.target.value)} required />
            Bank
          </label>
          <label>
            <input type='radio' name='paymentType' id='radioTransfer' value="transfer" onChange={(e) => setPaymentType(e.target.value)} required />
            Transfer
          </label>
        </div>
        <p>Card Number</p>
        <input id='cardNo' onChange={(e) => setCardNumber(e.target.value)} required />
        <div>
          <p>Expiration Date</p>
          <input id='expDate' onChange={(e) => setExpDate(e.target.value)} required />
          <p>CVV</p>
          <input id='cvv' onChange={(e) => setCVV(e.target.value)} required />
        </div>
        <label>
          <input type='checkbox' id='saveCard' />
          Save card details
        </label>
        <hr />
        <button onClick={HandleOrder}>Pay USD</button>
        <p>
          Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
        </p>
      </div>
      <div className='content-center border h-1/2 p-4'>
        <p>Order Summary</p>
        <hr />
        <hr />
        <input id='giftCode' placeholder='Gift or discount code' onChange={(e) => setDiscountCode(e.target.value)} />
        <button>Apply</button>
        <hr />
        <div>
          <p>Subtotal</p>
          <p>$</p>
        </div>
        <div>
          <p>Shipping</p>
          <p>$7.24</p>
        </div>
        <hr />
        <div>
          <p>Total</p>
          <p>$</p>
        </div>
      </div>
    </form>
  )
}
export default Order