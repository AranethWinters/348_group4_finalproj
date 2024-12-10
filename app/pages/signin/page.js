import Link from 'next/link'
import React from 'react'

const SignInPage = () => {
  return (
    <div>
        <form>
            <label htmlFor='userEmail'>Enter Email</label>
            <input type='email' id='SignInEmail' className='text-black'></input>
            <label htmlFor='userPass'>Enter Password</label>
            <input type='text' id='SignInPass' className='text-black'></input>
            <button><Link href='/pages/dashboard'>SignIn</Link></button>
        </form>
    </div>
  )
}

export default SignInPage