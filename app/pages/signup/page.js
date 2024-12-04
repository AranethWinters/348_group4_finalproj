import Link from 'next/link'
import React from 'react'

const SignUp = () => {
  return (
    <div>
        <form>
            <label htmlFor='userEmail'>Enter Email</label>
            <input type='email' id='SignUpEmail' className='text-black'></input>
            <label htmlFor='userPass'>Enter Password</label>
            <input type='text' id='SignUpPass' className='text-black'></input>
            <button><Link href='/pages/dashboard'>SignUp</Link></button>
        </form>
    </div>
  )
}

export default SignUp