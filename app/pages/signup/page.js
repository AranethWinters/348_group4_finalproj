import Link from 'next/link'
import React from 'react'
import { AiOutlineGoogle } from "react-icons/ai";

const SignUp = () => {
  return (
    <div>
        <form>
            <label htmlFor='userEmail'>Enter Email</label>
            <input type='email' id='SignUpEmail' className='text-black bg-pink-900'></input>
            <label htmlFor='userPass'>Enter Password</label>
            <input type='text' id='SignUpPass' className='text-black bg-pink-900'></input>
            <button><Link href='/pages/dashboard'>SignUp</Link></button>
            <button><Link href='/pages/dashboard'>Already have an account?</Link></button>
            <button><Link href=''><AiOutlineGoogle size={30}/></Link></button>
        </form>
    </div>
  )
}

export default SignUp