'use client'

import React from 'react'

function Order() {
  return (
    <div className='flex justify-center gap-8'>
        <div className='min-w-min max-w-fit border'>
            <form>
                <p>Payment</p>
                <hr/>
                <p>Pay With:</p>
                <div>
                    <label>
                        <input type='radio' name='radioCard' value="card"/>
                        Card
                    </label>
                    <label>
                        <input type='radio' name='radioBank' value="bank"/>
                        Bank
                    </label>
                    <label>
                        <input type='radio' name='radioTransfer' value="transfer"/>
                        Transfer
                    </label>
                </div>
                <p>Card Number</p>
                <input name='cardNo'/>
                <div>
                    <p>Expiration Date</p>
                    <input name='expDate'/>
                    <p>CVV</p>
                    <input name='cvv'/>
                </div>
                <label>
                    <input type='checkbox' name='saveCard'/>
                    Save card details
                </label>
                <hr/>
                <button type='submit'>Pay USD</button>
                <p>
                    Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
                </p>
            </form>
        </div>
        <div className='border'>
            <form>
                <p>Order Summary</p>
                <hr/>
                <div>

                </div>
                <hr/>
                <input name='giftCode' placeholder='Gift or discount code'/>
                <button>Apply</button>
                <hr/>
                <div>
                    <p>Subtotal</p>
                    <p>$</p>
                </div>
                <div>
                    <p>Shipping</p>
                    <p>$</p>
                </div>
                <hr/>
                <div>
                    <p>Total</p>
                    <p>$</p>
                </div>      
            </form>
        </div>
    </div>
  )
}

export default Order